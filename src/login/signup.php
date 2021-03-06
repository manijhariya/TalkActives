<?php
	require '../dbconfig/config.php';
?>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="signup.css">
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	<title>SignUp~TalkActives</title>
</head>
<body align="center">
	<div id="top-container">
	<center><a href="index.html" id="logo"><h2><img id="logoimage" src="favicon.ico">TalkActives</h2></a>
	<h5 id="usermessage"> Sign up to see talk to our friends and <br> much more..</h5>
	<p id="p"></p>
	</center>
	</div>
	<div id="middle-container">
	<center><br>
	<input id="field" type="text" placeholder="Full Name" name="fullname" pattern="[a-zA-Z\s]+" title="Only Letters and white space are allowed" required><br><br>
	<select id="langselect" title="Prefered Language">
		<option value="english">English</option>
		<option value="french">French</option>
		<option value="spanish">Spanish</option>
		<option value="swiss">Swiss</option>
		<option value="Swedish">Swedish</option>
		<option value="thai">Thai</option>
		<option value="hindi">Hindi</option>
		<option value="korean">Korean</option>
	</select><br><br>
	<input id="field" type="text" placeholder="Email" name="email" title="Enter a valid E-mail" required><br><br>
	<input id="field" type="text" placeholder="Username" name="uname" pattern="[A-Za-z0-9]+" title="Only Letters and numbers are allowed" required><br><br>
	<input id="field" type="password" placeholder="Password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required><br><br>
	<input id="field" type="password" placeholder="Confirm Password" name="cpassword" required><br><br>
	<input id="subbtn" type="submit" value="Sign up" name="signup" onclick="submit()"><br>
	<h4> By signing up, you agree to our <a id="links" href="../about/about.html">Terms,<br>Data Policy and Cookies Policy </a></h4>
	</center>
	</div>
	<div id="bottom-container">
	<center>
	<h4> Have an account? <a id="links" href="signin.php">Sign in</a></h4></center>
	</div>
	<script type="text/javascript" src="signup.js"></script>
</body>
</html>
