/*It is the same function as in the index page to reset the size of window and elements according to the size of the window..*/
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
