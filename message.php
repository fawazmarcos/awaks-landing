

<?php 	
	

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
	require 'composer/vendor/autoload.php';
	$mail = new PHPMailer();
	$mail->IsSMTP();
	$mail->Debugoutput = 'html';
	$mail->Host       = 'smtp.gmail.com';
	$mail->Port       = 587;
	$mail->SMTPSecure = 'tls';
	$mail->SMTPAuth   = true;
	$mail->Username   = 'marcosfawaz6@gmail.com';
	$mail->Password   = 'boqhlwxlujutunlr';
	$mail->setFrom("marcosfawaz6@gmail.com","AWAKS BENIN");
	$mail->addAddress("marcosfaiwaz@gmail.com", "FAIWAZ MARCOS");
	$mail->addReplyTo($_POST['email'], $_POST['nom']);

	$mail->SMTPOptions = array(
	      'ssl' => array(
	      'verify_peer' => false,
	      'verify_peer_name' => false,
	      'allow_self_signed' => true
	      )
	   );

	$mail->isHTML(true);                                  
	$mail->Subject = 'Message AWAKS';
	$mail->Body    = "
						Hello, un message d'un utilisateur ! <br>

						<b>Nom :</b>". $_POST['nom']."<br><br>
						<b>Email :</b>". $_POST['email']."<br><br>
						<b>Objet : <br></b>". $_POST['objet']."<br><br>
						<b>Message :<br></b>". $_POST['message']."<br>

					 ";
	$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
	$output= array();
	if(!$mail->Send()){
		
		$output=array(
			'code'=>400
		);
		echo json_encode($output);
	}
	else{
		$output=array(
			'code'=>200
		);
		echo json_encode($output);
	}

 ?>

