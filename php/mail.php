<?php
require_once('phpmailer/phpMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
//$mail- > SMTPDebug = 3;

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = '';
$mail->Password = '';
$mail->SMTPSEcure = 'ssl';
$mail->Port = 465;

$mail->setFrom('');
$mail->addAddress('');

$mail->isHTML(true);

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body = ''.$name . ' оставил заявку, его телефон ' .$phone. 'Почта этого пользователя: ' .$email;
$mail->AltBody = '';

if(!$mail->send()) {
     echo 'Error';
} else {
     header('location:thank-you.html');
}
?>