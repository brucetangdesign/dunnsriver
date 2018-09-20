$( document ).ready(function() {
  var numBreakpoints = $(".slide-main").length;
  var sec1 = true;
  var sec2 = false;
  var sec3 = false;
  var sec4 = false;
  var $bg = $("#bg");
  var $downArrow = $(".down-arrow");

  checkScroll();

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

    //if reached bottom hide down arrow
    if($("body").isInView($(".last-content"))){
      if(!$downArrow.hasClass("hidden")){
        $downArrow.addClass("hidden");
      }
    }
    else{
      if($downArrow.hasClass("hidden")){
        $downArrow.removeClass("hidden");
      }
    }
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
