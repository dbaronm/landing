$( document ).ready(function() {
	//$("#theme").click(onLinkClick);
	var black = $("#black");
	var white = $("#white");
	black.click(onBlackClick);

	white.click(onWhiteClick);
		
	
	function onBlackClick() {
		$("#theme").attr("href","../css/main.css");
	}
	function onWhiteClick() {
		$("#theme").attr("href","../css/main2.css");
	}
});