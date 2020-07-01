<?php
	require '../dbconfig/config.php';
	header("Content-Type:application/json;charset=UTF-8");
	$credentials = json_decode($_POST["x"],true);
	$credential = array();
	foreach($credentials as $key=>$value){
		array_push($credential,$value);
	}
	//echo var_dump($credentials);
	$uname = $credential[0];
	$otp = $credential[1];
	$count = $credential[2];
	if($count == 1){
		//send mail to the user to validate his/her email id and save the otp to database to access that
		$otp = mt_rand(100000,999999);
		$query = "select * from UsersData WHERE uname='$uname'";
		$query_run = mysqli_query($con,$query);
		if(mysqli_num_rows($query_run)>0){
			$row = mysqli_fetch_assoc($query_run);
			foreach($row as $key=>$value) {
			array_push($credential,$value);
			}
		/* It is going to save the otp to server and a flag as the invalid user if user make request to this it will be set to the invalid user and util it doesn't send the valid otp to the server he can't login to his account because server always going to check the flag as valid or invalid user..*/
		$query = "UPDATE UsersData SET  otp='$otp',validation='invalid' WHERE uname='$uname'";
		$query_run = mysqli_query($con,$query);
		if($query_run) {
			$msg = "sent";
			}
		else {   $msg = 'Server is not responding please try again later';   }
		}
		else{
			$msg = 'invalidusername'; }
	}
	else{
		if($count > 5)
		{
			$msg = 'You have tried for more than three times please try again later!!';
		}
	else {
	$query = "select * from UsersData WHERE uname='$uname'";
	$query_run = mysqli_query($con,$query);
	if(mysqli_num_rows($query_run) > 0){
		//user got found in the database
		$row = mysqli_fetch_assoc($query_run);
		foreach($row as $key=>$value){
			array_push($credential,$value);
		}
		//echo var_dump($credential);           /*       you doesn't find anything or how the values are coming into the script from the server uncomment this echo and you are going to see the variables in the network->otpvalidate.php->reponse in the developers option in any web browser*/
		if($otp == $credential[9]){                                     
			$query = "UPDATE UsersData SET validation='valid' WHERE uname='$uname'";
			$query_run = mysqli_query($con,$query);
			if($query_run) {
				$msg = 'valid'; }
			else{
				$msg = "Server is not working properly please try again later";  }
		}
		else{
			$msg = "Wrong otp Please double check your Email and enter recent send otp"; }
	}
	else{
		$msg = "invalidusername"; }
	}
	}
	echo json_encode($msg);               //This is the message to the user by our server encoded into the json format next signin.js file
?> 
