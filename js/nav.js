$( document ).ready(function() {
  var scrolled = false;
  var navOpen = false;
  var $header = $("header");
  var $navIcon = $(".mobile-nav-icon");
  var $topLine = $navIcon.find("svg #top");
  var $midLine = $navIcon.find("svg #middle");
  var $botLine = $navIcon.find("svg #bottom");
  var tbLineAnimDuration =  0.14;
  var svgViewBox = ($navIcon.find("svg")[0].viewBox.baseVal);
  var origW = svgViewBox.width;
  var origH = svgViewBox.height;
  var centerYCoord = origH/2;
  var bottomYCoord = origH - 2.5;
  var offset = origW/2 - origH/2;

  checkScroll();

  //check the scroll - display mobile nav if necessary
  $(window).on("resize scroll", function(){
    checkScroll();
  });

  //Hamburger button
  $navIcon.click(function(){
    if(!navOpen){
      $("html,body").addClass("stop-scroll");
      $header.addClass("mobile-nav-open");
      transformNavIconToCloseIcon();
      navOpen = true;
    }
    else{
      $("html,body").removeClass("stop-scroll");
      $header.removeClass("mobile-nav-open");
      transformCloseIconToNavIcon();
      navOpen = false;
    }
  });

  //Display the mobile nav if user has scrolled on a small screen (< 768px)
  function checkScroll(){
    if($(window).width() < 768){
      if($(window).scrollTop() > 20){
        if(!scrolled){
          $header.addClass("scrolled");
          scrolled = true;
        }
      }
      else{
        if(scrolled){
          $header.removeClass("scrolled");
          scrolled = false;
        }
      }
    }
    else{
      scrolled = false;
      if($("header").hasClass("scrolled")){
        $("header").removeClass("scrolled");
      }
      if($("header").hasClass("mobile-nav-open")){
        $navIcon.trigger("click");
      }
    }
  }

  function transformNavIconToCloseIcon(){
    //move top and bottom lines to center
    TweenMax.to($topLine,tbLineAnimDuration,{attr:{y1: centerYCoord, y2: centerYCoord}, ease:Power2.easeInOut});
    TweenMax.to($botLine,tbLineAnimDuration,{attr:{y1: centerYCoord, y2: centerYCoord}, ease:Power2.easeInOut, onComplete: hideMidLine});

    //rotate top and bottom lines to make an X
    TweenMax.to($topLine,tbLineAnimDuration,{attr:{x1: offset, x2: bottomYCoord + offset, y1: "2.5", y2: bottomYCoord}, ease: Back.easeOut, delay: tbLineAnimDuration});
    TweenMax.to($botLine,tbLineAnimDuration,{attr:{x1: offset, x2: bottomYCoord + offset, y1: bottomYCoord, y2: "2.5"}, ease: Back.easeOut, delay: tbLineAnimDuration});
  }

  function transformCloseIconToNavIcon(){
    //stop any running tweens
    TweenMax.killChildTweensOf($navIcon);

    //rotate top and bottom lines back to horizontal
    TweenMax.to($topLine,tbLineAnimDuration,{attr:{x1: "0", x2: origW, y1: centerYCoord, y2: centerYCoord}, ease: Power2.easeInOut});
    TweenMax.to($botLine,tbLineAnimDuration,{attr:{x1: "0", x2: origW, y1: centerYCoord, y2: centerYCoord}, ease: Power2.easeInOut, onComplete: showMidLine});

    //move top and bottom back to their original positions
    TweenMax.to($topLine,tbLineAnimDuration,{attr:{y1: "2.5", y2: "2.5"}, ease:Power4.easeOut, delay: tbLineAnimDuration});
    TweenMax.to($botLine,tbLineAnimDuration,{attr:{y1: bottomYCoord, y2: bottomYCoord}, ease:Power4.easeOut, delay: tbLineAnimDuration});
  }

  function hideMidLine(){
    TweenMax.set($midLine,{opacity: 0});
  }

  function showMidLine(){
    TweenMax.set($midLine,{clearProps:"all"});
  }

  function clearProps(){
    TweenMax.set($topLine, {clearProps: "all"});
    TweenMax.set($midLine, {clearProps: "all"});
    TweenMax.set($botLine, {clearProps: "all"});
  }
});
