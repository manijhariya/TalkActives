/* All functions are same as for the english directory */
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
document.getElementsByTagName("BODY")[0].onresize = function() {sizefunction() };
function normalImg(img) {
	img.style.height = '50px';
	img.style.width = '100px';
}
function bigImg(img) {
	img.style.height = '100px';
	img.style.width = '100px';
}
function sendanimation(){
	const img = document.getElementById('myImg');
	const inp = document.getElementById('msg');
	var pos = inp.style.width;
	console.log(pos);
	var pos = 190;
	var id = setInterval(frame,2);
	function frame() {
		if(pos == 960){
			clearInterval(id);
		}
		else
		{
		pos++;
		img.style.left = pos+'px';
		}
	    }
}
function display(msg) {
	//const p = document.getElementById('displayreturnmsg');
	const div = document.getElementById('sendmsg');
	const p = document.createElement('p');
	p.style.padding = '8.5px';
	p.style.marginLeft = '305px';
	p.style.marginRight = '8px';
	p.style.cssFloat='right';
	p.style.marginTop = '-10px';
	p.style.backgroundColor = 'white';
	p.style.display = 'inline';
	p.style.borderRadius = '10px';
	p.innerHTML = msg;
	div.appendChild(p);
}
function displaymsg(msg){
	//const p = document.getElementById('displaysendmsg');
	const div = document.getElementById('sendmsg');
	const p = document.createElement('p');
	p.style.padding = '8.5px';
	p.style.marginTop = '-10px';
	p.style.marginLeft = '8px';
	p.style.marginRight = '300px';
	p.style.cssFloat = 'left';
	p.style.display = 'inline';
	p.style.borderRadius = '10px';
	p.style.backgroundColor = 'white';
	p.innerHTML = msg;
	div.appendChild(p);
}
function submit() {
	const button = document.getElementById('button1');
	button.style.backgroundColor = "aqua";
	const x = document.getElementById('msg');
	const sr = document.getElementById('backmsg');
	if (x.value === ''){
		x.placeholder = 'Say Something..';
	}
	else{
		msg = x.value;
		display(msg);
		const xhr = new XMLHttpRequest();
		xhr.open('POST','dom.php',true);
		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		xhr.onreadystatechange = function() {
			if(xhr.readyState === xhr.DONE && xhr.status === 200){
			let msg = xhr.responseText;
			displaymsg(msg);
			}
		};
		msg = x.value;
		xhr.send('message='+msg);
	}
	x.value ='';
	button.style.backgroundColor = '#e55039';
}
checkCookieusername();
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
function checkCookieusername() {
	var user = getCookie("username");
	if(user != "") {
	// alert("Welcome again "+user);
		const userinfo = document.getElementById("userinfo");
		userinfo.innerHTML = user;
		div.style.display = 'none';
	} else {
	  //user = prompt("Please enter your name:","");
	if(user != "" && user != null) {
		setCookie("username",user,7);
	}
   }
}
function signout(){
        const user = getCookie("username");
        if(user !== '') {
                var ans = confirm("You are about to sign out");
                if(ans === true){
                        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                }
		else{
			location.reload();	}
        }
	else{
		location.reload();  }
}

function setCookie(cname,cvalue,exdays){
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function checkCookieusage() {
	var time = getCookie("usage");
	var user = getCookie("username");
	if(time !== '' && user === '') {
		if(time > 10){
			alert('Please Register yourself to continue usage of this site');
		}
		else{
			let expire = 110-(time*10);
			time++;
			setCookie("usage",time,expire);
		   }
	} else {
	   	let times = 0;
		setCookie("usage",times,30);
   }
}
checkCookieusage();
