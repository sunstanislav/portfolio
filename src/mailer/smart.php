<?php 

$name = $_POST['name'];
$text = $_POST['text'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

- text: >
    @@ -13,20 +13,28 @@
    # SECURITY WARNING: KEEP secret
    SECRET_KEY = {{SECRET_KEY}}
    +EMAIL_USE_TLS = True
    +EMAIL_HOST = smtp.gmail.com
    +EMAIL_HOST_USER = semen.semenich.010@gmail.com
    +EMAIL_HOST_PASSWORD = tmeGpBM2V6H8gVK1ipdX
    +EMAIL_PORT = 465

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'semen.semenich.010@gmail.com';                 // Наш логин
$mail->Password = 'tmeGpBM2V6H8gVK1ipdX';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('semen.semenich.010@gmail.com', 'Portfolio');   // От кого письмо 
$mail->addAddress('sundeev91@ya.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Текст: ' . $text . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>