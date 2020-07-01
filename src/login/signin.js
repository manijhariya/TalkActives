let count = 0;
function submit(){
	if(count < 4)
	{  count += 1;
	const div = document.getElementById("middle-container");
	const uname = document.getElementsByName('uname');
	const password = document.getElementsByName('password');
	if(uname[0].value === '')
	{  alert('Please Enter Username'); }
	else {
		if(password[0].value === '')
		{ alert('Please Enter Password'); }
		else{
			let credentials = {uname:uname[0].value,
					   password: password[0].value}
			var credential = JSON.stringify(credentials);
			const xhr = new XMLHttpRequest();
			xhr.open('POST','check.php',true);                  // Call to the check.php to verify the user as with the credentials
			xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
			xhr.onreadystatechange= function() {
			if(xhr.readyState === xhr.DONE && xhr.status === 200)
			{
			     let msg = JSON.parse(xhr.responseText);
			     if(msg === "login")
				{  alert("You are successfully loged in");
					window.location.href = "../index.html";
					checkCookie(uname[0].value); }
			      else{
				if(msg === "invalid"){
						alert("You have not verified your account please verify your account");
					  	window.location.href = "uservalidate.php";
						}
				else {
					alert(msg); }
				}
			} }
			xhr.send("x="+credential);
		}
	}
	}
	else
	{ alert('You Have tried so many times to login with wrong credentials please try again after some time'); }
}
function setCookie(cname,cvalue,exdays){
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + exdays + ";path=/";
	//alert("cookies set");
}
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i<ca.length;i++) {
	var c = ca[i];
	while(c.charAt(0) == ' ') {
		c = c.substring(1);
	}
	if(c.indexOf(name) == 0) {
		return c.substring(name.length,c.length);
	}
	}
	return "";
}
function checkCookie(uname) {
	var user = getCookie("username");
	if(user != "") {
	 //alert("Welcome again "+user);
	} else {
	   user = uname;
	  //user = prompt("Please enter your name:","");
	if(user != "" && user != null) {
		setCookie("username",user,30);
	}
   }
}
