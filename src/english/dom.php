<?php
	//require 'dbconfig/config.php';
	/*
	echo "<script 'type=text/javascript'>alert('worked')</script>";
		if($_POST['chatmsg'])
		{	$msg = $_POST['chatmsg'];
			$cmd = "python3 multiply.py -i 3";
			$value = exec($cmd);
			echo "<script type='text/javascript'>alert($value);</script>";
		}
		else{
			echo "<script type='text/javascript'>alert('message was empty') </script>";
		}
	*/
	echo strtoupper($_POST['message']);
	/*
	foreach ($_POST as $post_var) {
		echo strtoupper($post_var);
		echo "<br>";
	}*/
?>
