<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recaptcha_secret = "6Lc0pNMqAAAAADI2fPCmnF3CyiZX4LXyOy8C5Ycd"; 
    $recaptcha_response = $_POST['g-recaptcha-response']; 

    // Verify Google reCAPTCHA
    $url = "https://www.google.com/recaptcha/api/siteverify";
    // $data = [
    //     'secret' => $recaptcha_secret,
    //     'response' => $recaptcha_response
    // ];

    $options = [
        'http' => [
            'header'  => "Content-Type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        ]
    ];
    $context  = stream_context_create($options);
    $verify = file_get_contents($url, false, $context);
    // $captcha_success = json_decode($verify);

    // if (!$captcha_success->success) {
    //     echo "<script>alert('Captcha verification failed!'); window.history.back();</script>";
    //     exit;
    // }

    // Sanitize & Validate Input Fields
    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $gender = htmlspecialchars(trim($_POST['gender']));
    $message = htmlspecialchars(trim($_POST['message']));


    if (empty($name) || empty($phone) || empty($email) || empty($message)) {
        echo "<script>alert('All fields are required!'); window.history.back();</script>";
        exit;
    }

   
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('Invalid email format!'); window.history.back();</script>";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'chandigarhdrycleaners.com';  
        $mail->SMTPAuth = true;
        $mail->Username = 'support@chandigarhdrycleaners.com'; 
        $mail->Password = 'sg?X%iqS@uf6'; 
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('support@chandigarhdrycleaners.com', 'Chandigarh Dry Cleaners');
        $mail->addAddress('support@chandigarhdrycleaners.com'); 

        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body = "
            <h3>Contact Form Details</h3>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Gender:</strong> $gender</p>
            <p><strong>Message:</strong> $message</p>
        ";

        if ($mail->send()) {
            echo "<script>alert('Thanks for submitting your query!'); window.location.href='index.html';</script>";
        } else {
            echo "<script>alert('Error sending message. Please try again later.'); window.history.back();</script>";
        }
    } catch (Exception $e) {
        echo "<script>alert('Message could not be sent. Mailer Error: {$mail->ErrorInfo}'); window.history.back();</script>";
    }
} else {
    echo "<script>alert('Invalid request!'); window.history.back();</script>";
}
?>
