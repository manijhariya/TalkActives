<?php
	require '../dbconfig/config.php';
	header("Content-Type:application/json; charset=UTF-8");
	$obj = json_decode($_POST["x"],true);
	$credentials = array();
	foreach($obj as $key=>$value) {
		array_push($credentials,$value);
	}
	$uname = $credentials[0];
	$password = $credentials[1];
	$query = "select * from UsersData WHERE uname='$uname'";
	$query_run = mysqli_query($con,$query);
	if(mysqli_num_rows($query_run)>0)
	{
		$row = mysqli_fetch_assoc($query_run);
		foreach($row as $key=>$value){
			array_push($credentials,$value);
		}
		//echo var_dump($credentials);/* Checking if user is valid or not by checking credentials and than if it is valid or not..
		if($uname == $credentials[2] && $password == $credentials[3])
		{
				if($credentials[6] == "valid")
				{
					$msg = "login";   }
				else{
					$msg = "invalid"; }
		}
		else{
			$msg = "Wrong Password or username";
		}
	}
	else{
		$msg = "User doesn't exist Please register yourself!!";   }

	echo json_encode($msg);   // Message for our user to server in json format
?>
