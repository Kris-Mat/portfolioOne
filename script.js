// let womanOriginal = jQuery('#home-img2').getBoundingClientRect().left;

// horizontalscroll functionality:

jQuery(document).ready(function () {
  console.log("made it");
  var scroll;
  var dh;
  var wh;
  var value;

  jQuery(window).scroll(function () {
    scroll = jQuery(window).scrollTop();
    dh = jQuery(document).height();
    wh = jQuery(window).height();
    value = (scroll / (dh - wh)) * 100;
    // console.log(dh);
    // console.log(wh);
    console.log(scroll);
    // console.log(value);

    jQuery(".content").css("left", -value * 3.9 + "%");
  });

  jQuery(".main-nav").on("click", function (event) {
    console.log("I made it to the click");
    event.preventDefault();
    
    var percent;

    var target = jQuery(this).attr("name");
    console.log(target);

    if(target == "#home"){
        percent = 0;
    }

    if(target == "#logo"){
        percent = 0;
    }

    if(target == "#about"){
        percent = 1250;
    }

    if(target == "#projects"){
        percent = 2055;
    }

    if(target == "#skills"){
        percent = 2780;
    }

    if(target == "#contact"){
        percent = 3500;
    }

    if (jQuery(target).length) {

        // jQuery(".content").animate(
        // {
        //   left: -percent,
        // },1000); // Adjust the duration as needed

        jQuery('html, body').animate({
            scrollTop: percent,
        }, 1);
    }

  });

  jQuery(".side-nav-item").on("click", function (event) {
    console.log("I made it to the click open");
    event.preventDefault();
    
    var percent;

    var target = jQuery(this).attr("name");
    console.log(target);

    if(target == "#home"){
        percent = 0;
        console.log(percent);
    }

    if(target == "#logo"){
        percent = 0;
        console.log(percent);
    }

    if(target == "#about"){
        percent = 1250;
    }

    if(target == "#projects"){
        percent = 2055;
    }

    if(target == "#skills"){
        percent = 2780;
    }

    if(target == "#contact"){
        percent = 3500;
    }

    if (jQuery(target).length) {

        // jQuery(".content").animate(
        // {
        //   left: -percent,
        // },1000); // Adjust the duration as needed

        jQuery('html, body').animate({
            scrollTop: percent,
        }, 1);
    }

  });


//   for colouring the side nav as the page scrolls
  jQuery(window).on("scroll", function () {
    var element = jQuery(".content");
    var leftValue = parseFloat(element.css("left"));
    var rangeStartHome = 0; // defining  range start value
    var rangeEndHome= -1400; // defining your range end value
    var rangeStartAbout = -1401;
    var rangeEndAbout = -3000;
    var rangeStartProj = -3001;
    var rangeEndProj = -4600;
    var rangeStartSkills = -4601;
    var rangeEndSkills = -5400;
    var rangeStartContact = -5401;
    var rangeEndContact = -6500;




    console.log("LEFT VALUE" + leftValue);
    if (leftValue <= rangeStartHome && leftValue >= rangeEndHome) {
      console.log("in range home");
      jQuery(".side-nav-item").removeClass("active-side");
      jQuery("#home-side-nav").addClass("active-side");
    } else {
      console.log("out of range home");
    }

    if (leftValue <= rangeStartAbout && leftValue >= rangeEndAbout) {
        console.log("in range about");
        jQuery(".side-nav-item").removeClass("active-side");
        jQuery("#about-side-nav").addClass("active-side");
    } else {
        console.log("out of range about");
    }

    if (leftValue <= rangeStartProj && leftValue >= rangeEndProj) {
        console.log("in range projects");
        jQuery(".side-nav-item").removeClass("active-side");
        jQuery("#projects-side-nav").addClass("active-side");
    } else {
        console.log("out of range projects");
    }

    if (leftValue <= rangeStartSkills && leftValue >= rangeEndSkills) {
        console.log("in range skills");
        jQuery(".side-nav-item").removeClass("active-side");
        jQuery("#skills-side-nav").addClass("active-side");
    } else {
        console.log("out of range skills");
    }

    if (leftValue <= rangeStartContact && leftValue >= rangeEndContact) {
        console.log("in range contact");
        jQuery(".side-nav-item").removeClass("active-side");
        jQuery("#contact-side-nav").addClass("active-side");
    } else {
        console.log("out of range contact");
    }
  });
});

