<?php   session_start();
	$nome = $_POST["nome"];
	$email = $_POST["email"];
	$assunto = $_POST["assunto"];
	$mensagem = $_POST["mensagem"];
                    
	require_once("PHPMailerAutoload.php");
        
        $conteudo = '<html>
                             <head>
                                 <meta charset="UTF-8">
                             </head>
                            <body style=" border: 0; margin: 0;">
                            <table width="650" border="0" cellpadding="0" cellspacing="0" style="border: 1px solid #999999; background: #EEEEEE;">
                              <tr style=" height: 30px; background: #7F7F7F; color: #fff; font-size: 20px; font-family: verdana; text-align: center;  ">
                                    <td>
                                        Japan Service - Mensagem de Contato
                                    </td>
                              </tr>
                              <tr>
                                <td>
                                    <table width="90%" border="0" cellspacing="15" cellpadding="15" style=" background: #fff; margin-left: 5%; margin-top: 5%; margin-bottom: 5%;" >
                                  <tr>
                                    <td>
                                      <p style="font-family: Tahoma; font-size: 14px; font-family: verdana;"><strong>Nome:</strong> '.$nome.' </p>
                                      <p style="font-family: Tahoma; font-size: 14px; font-family: verdana;"><strong>Email:</strong> '.$email.' </p>
                                      <p style="font-family: Tahoma; font-size: 14px; font-family: verdana;"><strong>Assunto:</strong> '.$assunto.' </p>
                                      <p style="font-family: Tahoma; font-size: 14px; font-family: verdana;"><strong>Mensagem:</strong> '.$mensagem.' </p>
                                   </td>
                                  </tr>
                                </table></td>
                              </tr>
                            </table>

                            </body>
                            </html>';

	$mail = new PHPMailer();
	$mail->isSMTP();
	$mail->Host = 'email-ssl.com.br'; /**/
	$mail->Port = 587; /**/
	$mail->SMTPSecure = 'tls';
	$mail->SMTPAuth = true;
	$mail->Username = "contato@japanservice.com.br"; /**/
  $mail->Password = "japanservice0000"; /**/

  $mail->setFrom("contato@japanservice.com.br", "JapanService"); /**/
  $mail->addAddress("tattoosocietylondrina@gmail.com"); /**/
        if(isset($_FILES['arquivo']['name']) && $_FILES['arquivo']['name'] != "")
        {
            $mail->AddAttachment($_FILES['arquivo']['tmp_name'], $_FILES['arquivo']['name']); /* FILES */
        }
  $mail->Subject = "Email recebido do site www.tattoosocietylondrina.com.br"; /**/
	$mail->msgHTML($conteudo);
	$mail->AltBody = "de: {$nome}\nemail: {$email}\nassunto: {$assunto}\nmensagem: {$mensagem}";

	if($mail->send()) {
		$_SESSION["success"]; ?>

		<script>
			alert("mensagem enviada com sucesso!");
		</script>

		<a href="http://www.japanservice.com.br">Voltar</a>
	<?php } else {
		$_SESSION["danger"];
                header("Location: http://www.japanservice.com.br");
	}

	die();
                            ?>
