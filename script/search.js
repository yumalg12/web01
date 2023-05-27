
function submitForm() {
	var input = document.getElementById("naverMap");
	var searchText = input.value;

	var url = "https://map.naver.com/v5/search/" + searchText;
	
	window.open(url);
}

