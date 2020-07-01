<?php
?>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="setpassword.css">
	<link rel="shortcut icon" href="favicon.ico">
	<title>Reset Password~TalkActives</title>
</head>
<body>
	<div id="container">
	<h3 id="logo"><img id="logoimg" src="favicon.ico" alt="">TalkActives</h3>
	<img id="passimg" src="passw.jpg" alt="reset">
	<hr>
	<h4>Trouble Singin In?</h4>
	<p> Last Step <br>Please enter new Password for your <br>TalkActives account</p><br><br>
	<div id="mydiv">
	<input id="inputfield" type="password" placeholder="New Password"><br><br>
	<input id="inputfield2" type="password" placeholder="Confirm Password"><br><br>
	<input id="submitbutton" type="submit" value="Send OTP" onclick="setpassword()"><br><br>
	</div>
	<a href="signup.php"><h4>Create New Account </h4></a>
	<hr>
	<a href="signin.php"><h4>Back to SingIn </h4></a>
	</div>
	<script type="text/javascript" src="reset.js"></script>
</body>
</html>
