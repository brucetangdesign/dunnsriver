$( document ).ready(function() {
  var docHeight = $("body").height();
  var numBreakpoints = $(".slide-main").length;
  var breakpointInt = (docHeight/numBreakpoints);
  var sec1 = true;
  var sec2 = false;
  var sec3 = false;
  var sec4 = false;
  var sec5 = false;
  var breakpoints = [];
  var offset = breakpointInt;
  var $bg = $("#bg");

  //call the check when you scroll or resize
  $(window).on("resize scroll", function(){
    checkScroll();
  });

  function checkScroll(){
    $(".slide-main").each(function(index){
      if($("body").isInView($(this),$(window).height()-200)){
        if(!eval("sec" + (index + 1))){
          showSection(index + 1);
        }
      }
    });
  }

  function showSection(secNum){
    $bg.removeClass();
    $bg.addClass("bg"+secNum);

    $bg.children().each(function(index){
      if(!$(this).hasClass("bg-gradient"+secNum)){
        $(this).addClass("hidden");
      }
      else{
        $(this).removeClass("hidden");
      }
    });

    for(var i=0; i< numBreakpoints; i ++){
      eval("sec" + (i+1) + " = false");
    }
    eval("sec" + secNum + " = true");
  }

  var rellax = new Rellax('.rellax', {
    center: true
  });
});
