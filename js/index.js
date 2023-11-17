$(document).ready(function () {
  //헤더부분

  const header = document.querySelector("#menu");
  const headerHeight = header.getBoundingClientRect().height;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 1000) {
      header.setAttribute("style", "background: rgba(255,206,206,0.8);");
    } else {
      header.setAttribute("style", "background: transparent;");
    }
  });

  //메뉴영역

  var menu = $("#menu>ul");
  var subBg = $("#menu>ul + #subBg");
  var ac = $("#menu>ul li a");
  var subLogo = $("header #subLogo");

  subBg.slideUp(0);

  menu.mouseover(function () {
    $(this).find("li>a").css("color", "#f99b9b");
    subBg.stop().slideDown();
    subLogo.css("opacity", "1");
  });
  menu.mouseout(function () {
    $(this).find("li>a").css("color", "#fff");
    subBg.stop().slideUp();
  });

  subBg.mouseover(function () {
    ac.css("color", "#f99b9b");
    subBg.stop().slideDown();
    subLogo.css("opacity", "1");
  });
  subBg.mouseout(function () {
    subBg.stop().slideUp();
    ac.css("color", "#fff");
    subLogo.css("opacity", "0");
  });

  //language 영역
  var icon = $("#ko>p>a>img");
  $("#en").slideUp(0);
  let num = 0;
  icon.click(function () {
    if (num == 0) {
      $(this).attr("src", "./images/icon/arrow2.png");
      num = 1;
      $("#en").slideDown(500);
    } else {
      $(this).attr("src", "./images/icon/arrow1.png");
      num = 0;
      $("#en").slideUp(500);
    }
  });

  //program 슬라이드
  var slideListWidth1 = $("#pimg>li").width();
  var slide1 = $("#pimg");
  var slideList1 = $("#pimg>li");

  var current = 0;

  var setInterval01;

  mainSlide1();

  function mainSlide1() {
    setInterval01 = setInterval(function () {
      slide1.stop().animate({ left: -slideListWidth1 }, 500, function () {
        $("#pimg>li:first").insertAfter("#pimg>li:last");
        slide1.css("left", 0);
      });
    }, 500);
  }

  $(".slide1, .prev1_1, next1_1").hover(
    function () {
      clearInterval(setInterval01);
    },
    function () {
      mainSlide1();
    }
  );

  function next1_1() {
    //오른쪽에서 왼쪽으로
    slide1.stop().animate({ left: -slideListWidth1 }, 500, function () {
      $("#pimg>li:firs").insertAfter("#pimg>li:last");
      slide1.css("left", 0);
    });
  }

  function prev1_1() {
    //왼쪽에서 오른쪽으로
    $("#pimg>li:last").insertBefore("#pimg>li:first");
    slide1.css("left", -slideListWidth1);
    slide1.animate({ left: 0 }, 500);
  }

  //이전,다음 버튼을 클릭했을 때 함수호출
  $(".prev1_1").click(function () {
    prev1_1();
  });
  $(".next1_1").click(function () {
    next1_1();
  });

  //탑버튼 감추기
  $("#top_btn>a").hide();

  //스크롤의 위치가 500보다크다면 보이게, 500보다 작다면 안보이게
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $("#top_btn>a").fadeIn();
    } else {
      $("#top_btn>a").fadeOut();
    }
  });

  $("#top_btn>a").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 400);

    return false; //클릭이벤트를 걸어주면 클릭이벤트를 먼저 쓰이게되고 href로 이동하게됨. 즉 원래의 가지고있는 기본 속성은 무시됨.
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $("#top_btn>a").fadeIn();
    } else {
      $("#top_btn>a").fadeOut();
    }
  });

  //스크롤 애니매이션 동작
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $("#content,#cloudL,#cloudR").fadeIn();
      $("#center").animate({marginTop: 30},1000, function(){
        (this).animate({marginTop: 0},1000);
      });
    } else {
      $("#content,#cloudL,#cloudR").fadeOut();
    }
  });

  
});
