$( document ).ready(function() {
  var docHeight = $("body").height();
  var numBreakpoints = $("body > section").length
  var breakpointInt = (docHeight/numBreakpoints);
  var sec1 = true;
  var sec2 = false;
  var breakpoints = [];
  var offset = breakpointInt * 0.6;
  var $bg = $("#bg");
  var $mimis = $("#mimis");
  var $copyContent = $("#copy-content");

  for(var i=0; i<numBreakpoints; i++){
    if(i == 0){
      breakpoints.push((breakpointInt * i));
    }
    else{
      breakpoints.push((breakpointInt * i)-offset);
    }
  }

  $(window).on("scroll",function(){
    for(var i=0; i<numBreakpoints; i++){
      if(i == 0){
        if($(window).scrollTop() <= breakpoints[1]){
          if(!sec1){
            showSection(1);
          }
        }
      }

      if(i > 0){
        if($(window).scrollTop() > breakpoints[i]){
            showSection(i+1);
        }
      }
    }
  });


  function showSection(secNum){
    if(!eval("sec" + secNum)){
      $bg.removeClass();
      $bg.addClass("slide"+secNum);

      $mimis.children().each(function(index){
        if(!$(this).hasClass("slide"+secNum)){
          $(this).addClass("hidden");
        }
        else{
          $(this).removeClass("hidden");
        }
      });

      $copyContent.children().each(function(index){
        if(!$(this).hasClass("slide"+secNum)){
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
  }

  function hideSection($slide){
    //$slide.addClass("hidden");
  }
});
