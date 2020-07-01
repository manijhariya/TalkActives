<?php
?>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="singin.css">
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	<title>SignIn~TalkActives</title>
</head>
<body>
	<div id="leftside">
	<div id="top-container">
	<center> <h2><a href="index.html"><img id="imagelink" src="favicon.ico">TalkActives</a></h2>
	<h4> Sign In to your Existing account.. </h4>
	</div>
	<div id="middle-container">
	<center>
	<br><br>
	<input required type="text" id="inputfield" name="uname" placeholder="Username "><br><br>
	<input required type="password" id="inputfield" name="password" placeholder="Password"><br><br>
	<input type="submit" id="subbtn" name="subbtn" value="Sign in" onclick="submit()"><br><br>
	<a id="reset" href="reset.php">Forget Password? </a><br><br>
	</center>
	</div>
	<div id="bottom-container">
	<center>
	<p>Don't have an Account? <a href="signup.php">Sign Up </a></p>
	</div>
	</div>
	<div id="rightside">
	<img id="righimg" src="image.jpg" alt="TalkActives">
	</div>
	</div>
	<script type="text/javascript" src="signin.js"></script>
</body>
</html>
