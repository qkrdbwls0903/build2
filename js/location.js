$(document).ready(function(){
  
  
  //헤더부분

  const header = document.querySelector("#menu");
  const headerHeight = header.getBoundingClientRect().height;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.setAttribute("style", "background: rgba(152, 212, 236, 0.6);");
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


});