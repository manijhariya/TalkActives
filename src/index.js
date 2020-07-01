/* Size function to resize the windows when window is too small or on the full size by this function it will simple calculate the
	size of different elements and different pixels value for elements*/
sizefunction();
function sizefunction() {
	const body = document.getElementById("bodytag");
	var w = document.documentElement.clientWidth;
	var h = document.documentElement.clientHeight;
	if(w > 1300){
		body.style.paddingRight = '150px';
		body.style.paddingLeft = '150px';
	}
	else{
		if(w < 1000 && h < 900) {
			let padw = w - h;
			body.style.paddingRight = padw+'px';
			body.style.paddingLeft = padw+'px';
			padw += 500;
		}
		else
		{
			let padw = 15;
			body.style.paddingRight = padw+'px';
			body.style.paddingLeft = padw+'px';
		}
	}
}
/* Next three functions are to get check(if exist) and to delete cookies from the local storage the... If cookie exist means the user is signed and the user name will show on the webpage.. if he/she sign out than cookies will get deleted and there will be username name as the default user...*/
checkCookie();
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
function checkCookie() {
	var user = getCookie("username");
	if(user != "") {
		const userinfo = document.getElementById("userinfo");
		userinfo.innerHTML = user;
		const div = document.getElementById("signin");
		div.style.display = 'none';
	}
}
/*there is confirm pop-up if user want to sign out from the web or not if yes cookies will get delelte...otherwise as usaul..*/
function signout(){
	const user = getCookie("username");
	if(user !== '') {
		var ans = confirm("You are about to sign out");
		if(ans === true){
			document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
		else{
			location.reload(); }
	}
	else{
		location.reload();   }
}
