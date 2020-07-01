/* It is single line code to make connetion of the local php server or apache server in my case to connect to the local database which is again in my case is mysql  */
<?php
	$con = mysqli_connect("localhost","root","") or die("Unable to connect");
	mysqli_select_db($con,'TalkActives');
?>
