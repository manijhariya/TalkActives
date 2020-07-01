/*First three are the set get and check cookie functions all are cookies function but has the different performance or work according to need
follow along to the submit function This file is called by two php(html) files.*/ 
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
function checkCookieuname() {
	var user = getCookie("resetuser");
	if(user != "") {
		alert('You have not varified with otp Please varify it first');
		window.location.href = 'reset.php';
	}
	else{
		return user;
	}
}
function checkCookieuname(uname) {
	var user = getCookie("resetuser");
	if(user != "") {
		return user;
	} else {
	   user = uname;
	if(user != "" && user != null) {
		setCookie("resetuser",user,60000);
		return user;
	}
   }
}
function checkCookiecount() {
	var user = getCookie("resetcount");
	if(user != "") {
		user++;
		setCookie("resetcount",user,60000);
		return user;
	}
	else {
		var user = 1;
		if(user != "" && user != null){
			setCookie("resetcount",user,60000);
			return user;
		}
	}
}
function deletecookie(){
	document.cookie = "resetuser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	document.cookie = "resetcount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function setpassword(){
	const field1 = document.getElementById("inputfield");
	const field2 = document.getElementById("inputfield2");
	if(field1.value === field2.value && field1.value !== '')
	{
		let uname = checkCookieuname();
		let credentials = { uname:uname,   //Taking username from the cookies
				    password:field1.value }
		let credential = JSON.stringify(credentials);
		const xhr = new XMLHttpRequest();
		xhr.open('POST','savenewpass.php',true);
		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		//xhr.send("x="+credential);
		xhr.onreadystatechange = function() {
			if(xhr.readyState === xhr.DONE && xhr.status === 200)
			{
				let msg = JSON.parse(xhr.responseText);
				switch(msg){
				case 'saved':
						alert('Your new Password is set you can now login to your account');
						deletecookie();
						window.location.href = 'signin.php';
						break;
				case 'invalid':
						alert('You have not varified your account please verify it First');
						window.location.href = 'reset.php';
						break;
				default:
						alert(msg);
						break;
				}
			}
		}
		xhr.send("x="+credential);
	}
	else{
		alert('Please fill required fields As mentioned'); }
}
/*This function is going to check as input fields are not empty same data into the json and sending to the server*/
function submit(){
		const input = document.getElementById('inputfield');
		const input2 = document.getElementById('inputfield2');
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
			//If it is first time a flag for the server to send the email...
				let credentials = {uname:username,
						   otp:otp,
						   count:count}
				let credential = JSON.stringify(credentials);
			const xhr = new XMLHttpRequest();
			xhr.open('POST','otpvalidate.php',true);                  // OTP validate same file that was for the validating the user
			xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
			xhr.onreadystatechange = function() {
			if(xhr.readyState === xhr.DONE && xhr.status === 200)
			{
				let msg = JSON.parse(xhr.responseText);
				switch(msg){                                          // switch case remember(c++) style to handle the different msg from the server
				case "valid":alert("Please Enter your new Password");
						window.location.href = 'setpassword.php';
						break;
				case "sent":alert("OTP sent please check your email and Enter in the given field");
						input2.style.visibility = 'visible';            //OTP field will be hidden until the server send the otp to the server and than you can verify your self and when verifiction is done it will redirect you to the setpassword
     						break;
				case "invalidusername":alert("Please enter a valid username");
						deletecookie();
						break;
				default:alert(msg);
					break;
				}
			}
			}
			xhr.send("x="+credential);
	     }
}
