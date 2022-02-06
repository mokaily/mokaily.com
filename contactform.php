<?php
$name= $_POST['name'];
$email= $_POST['email'];
$to= 'midostaar30@gmail.com';
$subject= "From $name , $email mosala7.co.nf";
$message= $_POST['comment'];
$headers= 'From: "$name" <$email>' . "\r\n" .
'Reply-To: $email' . "\r\n" .
'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>