
function navMapForm() {
	var input = document.getElementById("naverMap").value;
	var url = "https://map.naver.com/v5/search/" + input;
	window.open(url);
}

function GoogleKoEn() {
	var input = document.getElementById("GoogleKoEn").value;
	var url = "https://translate.google.com/?hl=ko&sl=en&tl=ko&text=" + input + "&op=translate";
	window.open(url);
}

function GoogleEnKo() {
	var input = document.getElementById("GoogleEnKo").value;
	var url = "https://translate.google.com/?sl=en&tl=ko&text=" + input + "&op=translate";
	window.open(url);
}