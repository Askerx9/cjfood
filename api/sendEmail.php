<?php
  header("Access-Control-Allow-Origin: *");

  $to = "info@cjfood.be";
  // $to = "morrensj@gmail.com";

  $subject = "Envoi via le formulaire de contact";

  $content = $_POST['genre'].` `.$_POST['lastname'].` `.$_POST['firstname'] . "\r\n" .$_POST['mail'] ."\r\n". $_POST['type'] . "\r\n" . 'Preference de prise de contact: '.$_POST['day'].' à '.$_POST['time'] ."\r\n". $_POST['mail_content'];

  $headers = 'From: info@cjfood.be' . "\r\n" .
    'Reply-To: info@cjfood.be' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    // var_dump($headers);


  if(mail($to, $subject, $content, $headers)){
    print 'Mail envoyé';
  };
