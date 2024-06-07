jQuery(document).ready(function () {
    jQuery('#theme1-holder').hide();
    jQuery('#theme2-holder').hide();

    jQuery('#proj-img').on('click', function(){
        jQuery('#theme1-holder').fadeIn(500);
        jQuery('#theme1-proj').hide();
        jQuery('#theme1-info').show();

        jQuery('.control-btns').removeClass("active");
        jQuery('#background').addClass("active");
    });

    jQuery('#background').on('click', function(){
        jQuery('#theme1-proj').hide();
        jQuery('#theme1-info').fadeIn(300);

        jQuery('.control-btns').removeClass("active");
        jQuery('#background').addClass("active");
    });

    jQuery('#pro').on('click', function(){
        jQuery('#theme1-proj').fadeIn(300);
        jQuery('#theme1-info').hide();

        jQuery('.control-btns').removeClass("active");
        jQuery('#pro').addClass("active");
    });
    
    jQuery('#back').on('click', function(){
        jQuery('#theme1-holder').fadeOut(400);
        jQuery('#theme1-proj').hide();
        jQuery('#theme1-info').hide();
        jQuery('.control-btns').removeClass("active");

    });

    // comic book buttons
    jQuery('#proj-img2').on('click', function(){
        // console.log('so');
        jQuery('#theme2-holder').fadeIn(500);
        jQuery('#theme2-proj').hide();
        jQuery('#theme2-info').show();

        jQuery('.control-btns2').removeClass("active");
        jQuery('#background2').addClass("active");
    });

    jQuery('#background2').on('click', function(){
        jQuery('#theme2-proj').hide();
        jQuery('#theme2-info').fadeIn(300);

        jQuery('.control-btns2').removeClass("active");
        jQuery('#background2').addClass("active");
    });

    jQuery('#pro2').on('click', function(){
        jQuery('#theme2-proj').fadeIn(300);
        jQuery('#theme2-info').hide();

        jQuery('.control-btns2').removeClass("active");
        jQuery('#pro2').addClass("active");
    });
    
    jQuery('#back2').on('click', function(){
        jQuery('#theme2-holder').fadeOut(400);
        jQuery('#theme2-proj').hide();
        jQuery('#theme2-info').hide();
        jQuery('.control-btns2').removeClass("active");

    });

    
});