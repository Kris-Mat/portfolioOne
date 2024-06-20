// adding and removing visibility from objects on the website

jQuery(document).ready(function () {
    jQuery('#theme1-holder').hide();
    jQuery('#theme2-holder').hide();
    jQuery('#raptis-holder').hide();
    jQuery('#imagin-holder').hide();

    // trailer buttons
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

        jQuery('.control-btns').removeClass("active");
        jQuery('#background2').addClass("active");
    });

    jQuery('#background2').on('click', function(){
        jQuery('#theme2-proj').hide();
        jQuery('#theme2-info').fadeIn(300);

        jQuery('.control-btns').removeClass("active");
        jQuery('#background2').addClass("active");
    });

    jQuery('#pro2').on('click', function(){
        jQuery('#theme2-proj').fadeIn(300);
        jQuery('#theme2-info').hide();

        jQuery('.control-btns').removeClass("active");
        jQuery('#pro2').addClass("active");
    });
    
    jQuery('#back2').on('click', function(){
        jQuery('#theme2-holder').fadeOut(400);
        jQuery('#theme2-proj').hide();
        jQuery('#theme2-info').hide();
        jQuery('.control-btns').removeClass("active");

    });


    // raptis buttons
    jQuery('#proj-raptis').on('click', function(){
        // console.log('so');
        jQuery('#raptis-holder').fadeIn(500);
        jQuery('#raptis-proj').hide();
        jQuery('#raptis-info').show();

        jQuery('.control-btns').removeClass("active");
        jQuery('#background3').addClass("active");
    });

    jQuery('#background3').on('click', function(){
        jQuery('#raptis-proj').hide();
        jQuery('#raptis-info').fadeIn(300);

        jQuery('.control-btns').removeClass("active");
        jQuery('#background3').addClass("active");
    });

    jQuery('#pro3').on('click', function(){
        jQuery('#raptis-proj').fadeIn(300);
        jQuery('#raptis-info').hide();

        jQuery('.control-btns').removeClass("active");
        jQuery('#pro3').addClass("active");
    });
    
    jQuery('#back3').on('click', function(){
        jQuery('#raptis-holder').fadeOut(400);
        jQuery('#raptis-proj').hide();
        jQuery('#raptis-info').hide();
        jQuery('.control-btns').removeClass("active");

    });

    // imagin buttons
    jQuery('#proj-imagin').on('click', function(){
        // console.log('so');
        jQuery('#imagin-holder').fadeIn(500);
        jQuery('#imagin-proj').hide();
        jQuery('#imagin-info').show();

        jQuery('.control-btns').removeClass("active");
        jQuery('#background4').addClass("active");
    });

    jQuery('#background4').on('click', function(){
        jQuery('#imagin-proj').hide();
        jQuery('#imagin-info').fadeIn(300);

        jQuery('.control-btns').removeClass("active");
        jQuery('#background4').addClass("active");
    });

    jQuery('#pro4').on('click', function(){
        jQuery('#imagin-proj').fadeIn(300);
        jQuery('#imagin-info').hide();

        jQuery('.control-btns').removeClass("active");
        jQuery('#pro4').addClass("active");
    });
    
    jQuery('#back4').on('click', function(){
        jQuery('#imagin-holder').fadeOut(400);
        jQuery('#imagin-proj').hide();
        jQuery('#imagin-info').hide();
        jQuery('.control-btns').removeClass("active");

    });

    
});