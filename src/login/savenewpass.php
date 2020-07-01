<?php
	require '../dbconfig/config.php';
	$credentials = json_decode($_POST["x"],true);
	$credential = array();
	foreach($credentials as $key=>$value){
		array_push($credential,$value);
	}
	$uname = $credential[0];
	$password = $credential[1];
	$query = "select * from UsersData WHERE uname = '$uname'";
	$query_run = mysqli_query($con,$query);
	if(mysqli_num_rows($query_run) > 0) {
		$row = mysqli_fetch_assoc($query_run);
		foreach($row as $key=>$value){
			array_push($credential,$value);
		}
		if($credential[7] == 'valid')
		{                                                                    // simply again user can save new password if flag is set to valid by submitting the right otp only u can set invalid to valid
			$query = "UPDATE UsersData SET password='$password' WHERE uname = '$uname'";
			$query_run = mysqli_query($con,$query);
			if($query_run){
				$msg = "saved"; }
			else{
				$msg = "Server is not working please try again later"; }
		}
		else
			$msg = "invalid";
	}
	else{
		$msg = "Server is not working please try again later";	}
	echo json_encode($msg);
?>
