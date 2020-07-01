<?php
?>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="reset.css">
	<link rel="shortcut icon" href="favicon.ico">
	<title>Reset Password~Talkactives</title>
</head>
<body>
	<div id="container">
	<h3 id="logo"><img id="logoimg" src="favicon.ico" alt="">TalkActives</h3>
	<img id="passimg" src="passw.jpg" alt="reset">
	<hr>
	<!--<h4>Trouble Singin In?</h4>-->
	<p> Enter your username or email-id and <br>we will send you one time password to validate yourself<br> your password</p><br><br>
	<div id="mydiv">
	<input id="inputfield" type="text" placeholder="Username or E-Mail"><br><br>
	<input id="otpfield" type="text" placeholder="OTP(One Time Password)"<br><br>
	</div>
	<input id="submitbutton" type="submit" value="Send OTP" onclick="submit()"><br><br>
	<a href="signup.php"><h4>Create New Account </h4></a>
	<hr>
	<a href="signin.php"><h4>Back to SingIn </h4></a>
	</div>
	<script type="text/javascript" src="uservalidate.js"></script>
</body>
</html>
