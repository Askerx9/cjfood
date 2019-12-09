<?php
  // die(var_dump($_POST));
  $to = $_POST['mail'];
  $subject = "Envoi via le formulaire de contact";

  $message = "
    <html>
    <head>
      <title>Envoi via le formulaire de contact</title>
    </head>
    <body>
      <p>".$_POST['genre']." ".$_POST['lastname']." ".$_POST['firstname']."</p>
      <p>".$_POST['type']."</p>
      <p>Preference de prise de contact: ".$_POST['day']." à ".$_POST['time']."</p>
      <p>".$_POST['mail_content']."</p>
    </body>
    </html>
    ";

  $headers[] = 'MIME-Version: 1.0';
  $headers[] = 'Content-type: text/html; charset=iso-8859-1';

  // var_dump($message);

  mail($to, $subject, $message, implode("\r\n", $headers));