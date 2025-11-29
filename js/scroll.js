export function navGetSection() {
  if ($(this).attr("section")) {
    let sectionLocation = $($(this).attr("section")).offset().top;
    $("html, body").animate({ scrollTop: sectionLocation }, 2000);
  }
}
export function topZero() {
  $("html, body").animate({ scrollTop: 0 }, 100);
}

//  ^ nav toggle function
export function navToggle() {
  if ($("nav").css("margin-left") == "250px") {
    closeNav();
  } else {
    $(".side-nav").css("margin-left", "0px");
    $("nav").css("margin-left", "250px");
    $(".menu ul li").animate({ paddingTop: "25px", opacity: "1" }, 1000);
    $(".nav-icon").html('<i class="fa-solid fa-xmark"></i>');
  }
}
function closeNav() {
  $(".menu ul li").animate({ paddingTop: "250px", opacity: "0" }, 1000);
  $(".side-nav").css("margin-left", "-250px");
  $("nav").css("margin-left", "0px");
  $(".nav-icon").html('<i class="fa-solid fa-align-justify"></i>');
}
