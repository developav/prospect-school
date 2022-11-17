<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'PHPMailer/src/Exception.php';
	require	'PHPMailer/src/PHPMailer.php';
	require 'PHPMailer/src/SMTP.php';


	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->isHTML(true);
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.timeweb.ru';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'mail@cb90059.tmweb.ru';                     //SMTP username
    $mail->Password   = 'Frontdeveloper1!';                               //SMTP password
    $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

	// От кого письмо
	$mail->setFrom('mail@cb90059.tmweb.ru');
	// Кому отправить
	$mail->addAddress('developavlov@yandex.ru');
	// Тема письма
	$mail->Subject = 'Привет! Это "ProspectSchool"';

	// Тело письма
	$body = '<h1>Встречайте супер письмо!</h1>';

	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['phone']))){
		$body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
	}

	$mail->Body = $body;

	if(!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	} 
	$response = ['message' => $message];
		
	header('Content-type: application/json');
	echo json_encode($response);
?>