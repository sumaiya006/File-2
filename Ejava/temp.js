var sld=document.getElementById("slides");

var i=1;

setInterval(auto_slideshow, 2000);

function auto_slideshow(){
	
	console.log(i);
	
	if(i==1){
		sld.setAttribute("style",  "transform: translate(-33.33%, 0%)");
	}
	
	else if(i==2){
		sld.setAttribute("style", "transform: translate(-66.66%, 0%)");
	}
	
	else if(i==3){
		sld.setAttribute("style", "transform: translate(0%, 0%)");
	}
	
	i++;
	if(i>3){
		i=1;
	}
	
}