/* For validating the user if that email belongs to that particular user or not*/
function submit(){
	const input = document.getElementById('inputfield');
	const input2 = document.getElementById('otpfield');
		if(input.value === '')
		{	alert('Fill your Username');
			input.value = '';
			input2.value = '';
		}
		else{
			let uname = input.value;
			let username = checkCookieuname(uname);
			let count = checkCookiecount();
			let otp = 1;
			if(count !== 1){
				otp = input2.value;
			}
			  //alert('worked');
			let credentials = {uname:uname,
					   otp:otp,
					   count:count}
			let credential = JSON.stringify(credentials);
			//let credential = JSON.stringify(credentials);
			const xhr = new XMLHttpRequest();
			xhr.open('POST','otpvalidate.php',true);                 // It is going to send the username and otp(for first time it is 1 as a flag for the server to know that it has to send the email for that user.. and count for counting the number of times a user has made the request to the server...(OTPvalidate.php file is next to read)
			xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
					//xhr.send("x="+credential);
			xhr.onreadystatechange = function() {
			if(xhr.readyState === xhr.DONE && xhr.status === 200)
			{
				let msg = JSON.parse(xhr.responseText);
				switch(msg){
				case "valid":alert("Your account is verified please log into your account");
						deletecookie();
						window.location.href = 'signin.php';
						break;
				case "sent":alert("OTP sent please check your Email");
						input2.style.visibility = 'visible';
						break;
				case "invalidusername":alert("Please enter a valid username");
							deletecookie();
							break;
				default:
					alert(msg);
					break;
				}
			}
			}
			xhr.send("x="+credential);
		}
}
/*Next three functions are set get and check cookie if user get validated than server is going to set the cookie to the user and again it is going to display his name on the different pages...
There one more hack that is count and the users name through which he is going to make request is set on cookies and at last when it is finally valid the cookies are going to delete itself... */
function setCookie(cname,cvalue,expires){
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
function checkCookieuname(uname) {
	var user = getCookie("resetuser");
	var count = 0;
	if(user != "") {
		return user;
	} else {
	   user = uname;
	   if(user != "" && user != null) {
		setCookie("resetuser",user,5000);
	}
   }
}
function checkCookiecount() {
	var user = getCookie("resetcount");
	if(user != "") {
		user++;
		setCookie("resetcount",user,5000);
		return user;
	}
	else {
		var user = 1;
		if(user != "" && user != null){
			setCookie("resetcount",user,5000);
		return user;
		}
	}
}
function deletecookie(){
	document.cookie = "resetcount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
	document.cookie = "resetuser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}
