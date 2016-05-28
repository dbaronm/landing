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
	$('.carousel').carousel({
  		interval: 10000
	})
	new WOW().init();
	$("#showhide").click(function () {
      $("#mapa").each(function() {
        displaying = $(this).css("display");
        if(displaying == "block") {
          $(this).fadeOut('slow',function() {
           $(this).css("display","none");
          });
        } else {
          $(this).fadeIn('slow',function() {
            $(this).css("display","block");
          });
        }
      });
    });
	$("#logo").click(content);
	function content() {
		$(".adding").append('<img src="../img/logo.png" alt="">')
	}
});