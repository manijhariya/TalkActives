/*function sleep(){
	ms = 5000;
	const date = Date.now();
	let currentDate = null;
	do{
		currentDate = Date.now();
	} while(currentDate - date < ms);
}*/
/* Above one is the sleep function i am not using it anywhere in the script but it is commented out...
there are wierd functions calls in the scripts so start by event listener which is the submit() button*/
let count = 0;
function isvalid(msg){
	const field = document.getElementById('field');
	const div = document.getElementById("top-container");
        const p = document.getElementById('p');
	p.style.color = 'red';
	p.style.textAlign = 'center';
	if(field.value === '' || !(Number(field.value)))
	{
		p.innerHTML = 'Fill the OTP and Numbers are only allowed';
	}
	else{
	if(msg == field.value)
	{
		//Finally user get validated
		confirm('User Validated Please return to Login Page to continue');
		window.location.href = "../index.html";
	}
	else
	{
		if(count < 3)
		{
			p.innerHTML = 'You have '+count+' Wrong Attemp(s)..';
			field.value = ''
			count += 1;
		}
		else{
			confirm('You have 3 wrong Attempt Please try again later');
			//sleep();
			window.location.href = "../index.html";
		}
	}
	}
}
/* I was ttying to validate user through cookies only like server going to send otp and if the user matched with the otp it is again going to send the request to server that it is got validated... Don't worry if didn't got it because it was a silly idea and didn't worked because any one look into the cookies,,,*/
function validate(msg){
	if(Number(msg))
	{
		const div = document.getElementById("middle-container");
		const btn = document.getElementById('subbtn');
		btn.value = 'Submit';
		if(count == 0)
		{
			var i = 0;
			const select = document.getElementById('langselect');
			select.remove();
			while(i<4)
			{   i+=1;
			    const field = document.getElementById('field');
			    field.remove();
			}
			count += 1;
		}
		else{
			if(count > 0){
			btn.addEventListener("click",isvalid(msg));
			}
		  }
	}
	else{
		alert(msg);
		window.location.href = "../index.html";
	}
	const field = document.getElementById('field');
	field.placeholder = "OTP(One Time Password)";
	field.type = 'text';
}
/*This one the submit event listener or you can say it is going to blow when u click the submit button in the php page first it is going to take all the data from the fields and than making it in the dictionary format and than in JSON format it is going to send the request to the server which is again a php server which is going to validate your data and than send user to validate himself through email..*/
function submit(){
	const fullname = document.getElementsByName('fullname');
	const email = document.getElementsByName('email');
	const uname = document.getElementsByName('uname');
	const password = document.getElementsByName('password');
	const cpassword = document.getElementsByName('cpassword');
	const language = document.getElementById('langselect');
	if(fullname[0].value === '')
		alert("Please fill your Full Name");
	else
		{
			if(email[0].value === '')
				alert("Please fill your Email");
			else{
					if(uname[0].value === '')
					alert("Please fill your Username");
				else{
					if(password[0].value === '')
					alert("Please fill your Password");
					else{
						if(cpassword[0].value === '')
						alert("Please fill your Confirm Password");
					  }
				}
			}
		}
	if(password[0].value != cpassword[0].value){
		alert("Password and Confirm password Doesn't match");
		password[0].value = '';
		cpassword[0].value = '';
	}
	else{
	let credentials = {name:fullname[0].value,
			   email:email[0].value,
			   uname:uname[0].value,
			   password:password[0].value,
			   language:language.value}

	var credential = JSON.stringify(credentials);
	const xhr = new XMLHttpRequest();
	xhr.open('POST','validate.php',true);
	xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	xhr.send("x="+credential);
	xhr.onreadystatechange = function() {
		if(xhr.readyState === xhr.DONE && xhr.status === 200) {
			let msg = JSON.parse(xhr.responseText);
			if(msg === 'registered'){                                 // If massage or server response is registered than it is going to redirect user to validating to page..
				alert('Please validated your account your registeration is complete');
				window.location.href= "uservalidate.php";
				}
			else{
				alert(msg);
			}
			}
		}
	}

}
