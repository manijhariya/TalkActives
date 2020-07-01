<?php
	require '../dbconfig/config.php';   // Connecting to server by config file which connect to mysql localserver..
	header("Content-Type:application/json; charset=UTF-8");
	$obj = json_decode($_POST["x"],true);
	//echo var_dump($obj);
	//$name = $obj[0]->name;
	$credentials = array();
	foreach($obj as $key=>$value) {
		array_push($credentials,$value);
		//echo var_dump($obj[1]->{"name"});
		//echo json_encode($key. "=>" .$value <br>);
	}
	$fullname = $credentials[0];   //Getting all the credentials from the array and saving it in the variables
	$email = $credentials[1];
	$uname = $credentials[2];
	$password = $credentials[3];
	$language = $credentials[4];
	$validation = "invalid";
	$otp = 121;
	$query = "select * from UsersData WHERE uname = '$uname'";                    //Checking if user exist in the database with the same name because i am using username(uname) as the primary key as for the mysql db..
	$query_run = mysqli_query($con,$query);
	if(mysqli_num_rows($query_run) > 0){
		// There is already existing user
		$msg = "Please use a different username the user exist";
	}
	else{
		$query = "select * from UsersData WHERE email = '$email'";   //Checking for the same email if exist..
		$query_run = mysqli_query($con,$query);
		if(mysqli_num_rows($query_run) > 0){
			//There is already existing user with the same email
			$msg = "A user is already exist with this Email Did you forget your Password??";
		}
		else{
			//Save the credentials for new user
			$query = "insert into UsersData values('$uname','$password','$fullname','$language','$validation','$email','$otp')";
			$query_run = mysqli_query($con,$query);
			if($query_run)
			{
				//saved the credentials for new user validate user through email
				$msg = "registered";
			}
			else {
				//server is not working
				$msg= "An Unexpected error happened please try again after some time";
			}
		}
	}
	echo json_encode($msg);                   // reurning fully what server has to say to the user,,, 
?>
