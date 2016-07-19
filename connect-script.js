var toggle = true;
function expandSocialIcons(){
	var element = document.getElementById('socialMediaLogos');
	if (toggle) {
		toggle = false;
		element.style.backgroundColor = "rgba(43, 111, 232, .3)";
		element.style.opacity = 1;
	}
	else {
		toggle = true;
		element.style.backgroundColor = "rgba(43, 111, 232, 0.0)";
		element.style.opacity = 0;
	}
}
var generalIcon = document.getElementById('generalIcon');
generalIcon.addEventListener('click', expandSocialIcons);
