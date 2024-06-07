// gsap
//parallax for the elements:
gsap.to("#home-img", {
    scrollTrigger: {
        scrub: 1
    },
    x: 1400,
});

gsap.to("#me", {
    scrollTrigger: {
        scrub: 1
    },
    x: 2400,
})

gsap.to("#me2", {
    scrollTrigger: {
        scrub: 1
    },
    x: -900,
    y: -500,

})

gsap.to("#home-img2", {
    scrollTrigger: {
        scrub: 1
    },
    x: -500,
    scale: 2
});

gsap.to("#proj-img", {
    scrollTrigger: {
        scrub: 1
    },
    scale: 2,
    y: 10,

})

gsap.to("#proj-img2", {
    scrollTrigger: {
        scrub: 1
    },
    scale: 2,
    y: 10,

})

gsap.to("#skate", {
    scrollTrigger: {
        scrub: 1
    },
    rotation: 190,
    x: 1400,

})

gsap.to("#camera", {
    scrollTrigger: {
        scrub: 1
    },
    rotation: 190,
    x: 1400,

})

gsap.to("#film", {
    scrollTrigger: {
        scrub: 1
    },
    rotation: 190,
    x: 1400,

})

gsap.to("#com", {
    scrollTrigger: {
        scrub: 1
    },
    rotation: 190,
    x: 1400,

})

gsap.to("#polar", {
    scrollTrigger: {
        scrub: 1
    },
    rotation: 190,
    x: 1400,

})

gsap.to(".clouds-medium", {
    scrollTrigger: {
        scrub: 1
    },
    x: 1100,

})

gsap.to(".clouds-big", {
    scrollTrigger: {
        scrub: 1
    },
    x: 700,

})

gsap.to(".clouds-small", {
    scrollTrigger: {
        scrub: 1
    },
    x: 1300,

})

gsap.to(".txt", {
    scrollTrigger: {
        scrub: 1
    },
    x: 1400,

})

gsap.to(".txt-bubble", {
    scrollTrigger: {
        scrub: 1
    },
    x: 1400,
})

gsap.to("#about-img2", {
    scrollTrigger: {
        scrub: 1
    },
    scale: 1.2,
    y: -300,

})

gsap.to("#about-img3", {
    scrollTrigger: {
        scrub: 1
    },
    y:-200,
})

gsap.to("#about-img4", {
    scrollTrigger: {
        scrub: 1
    },
    y:-200,
})

gsap.to("#skill-img", {
    scrollTrigger: {
        scrub: 1
    },
    rotation: 390,
})

gsap.to("#about-img5", {
    scrollTrigger: {
        scrub: 1
    },
    x: 100,
    y: -700,
})

gsap.to("#about-img6", {
    scrollTrigger: {
        scrub: 1
    },
    x: 350,
    y: -200,
})

var action = gsap.timeline({ reversed: true }).to("#skill-img", { duration: 0.5, scale: 0.9 });
var action2 = gsap.timeline({ reversed: true }).to("#skill-img3", { duration: 0.5, y:250, x:10});
var action3 = gsap.timeline({ reversed: true }).to("#skill-img2", { duration: 0.5, y:-200, x:300});
var action4 = gsap.timeline({ reversed: true }).to("#skill-img4", { duration: 0.5, y:250, x:-300});
var action5 = gsap.timeline({ reversed: true }).to("#skill-img5", { duration: 0.5, y:-200, x:-250});
var action6 = gsap.timeline({ reversed: true }).to("#skill-img6", { duration: 0.5, y:210, x:300});
var action7 = gsap.timeline({ reversed: true }).to("#skill-img7", { duration: 0.5, y:-230, x:0});
var action8 = gsap.timeline({ reversed: true }).to("#skill-img8", { duration: 0.5, y:-30, x:-290});
var action9 = gsap.timeline({ reversed: true }).to("#skill-img9", { duration: 0.5, y:80, x:270});







$("#skill-img").hover(function () {
    // console.log("hello");
    action.play();
    action2.play();
    action3.play();
    action4.play();
    action5.play();
    action6.play();
    action7.play();
    action8.play();
    action9.play();

},
    function () {
        // console.log("bye");
        action.reverse();
        action2.reverse();
        action3.reverse();
        action4.reverse();
        action5.reverse();
        action6.reverse();
        action7.reverse();
        action8.reverse();
        action9.reverse();

});


// text changing effect for hobbies

var skate_txt = TweenLite.to('#txt', 0.75, { text: "Who knew skateboarding was so much exercise, I can't wait to get a long board!", color: 'black', ease: Linear.easeNone, paused: true, reversed: true });
var camera_txt = TweenLite.to('#txt', 0.75, { text: "I need to take my photography and video editing more seriously.", color: 'black', ease: Linear.easeNone, paused: true, reversed: true });
var polar_txt = TweenLite.to('#txt', 0.75, { text: "Scroll further left to learn more about me...", color: 'black', ease: Linear.easeNone, paused: true, reversed: true });
var film_txt = TweenLite.to('#txt', 0.75, { text: "Give me a few years and I'll have started my creative media agency.", color: 'black', ease: Linear.easeNone, paused: true, reversed: true });
var com_txt = TweenLite.to('#txt', 0.75, { text: "Semi colons are the least of my worries now, and I love it!", color: 'black', ease: Linear.easeNone, paused: true, reversed: true });

$("#skate").hover(function () {
    // console.log("made it here mama")
    skate_txt.play();
    var element = $('#skate');
    element.css('cursor', 'pointer');

}, function () {

    skate_txt.reverse();

});

$("#camera").hover(function () {
    // console.log("made it here mama")
    camera_txt.play();
    var element = $('#camera');
    element.css('cursor', 'pointer');


}, function () {

    camera_txt.reverse();

});

$("#com").hover(function () {
    // console.log("made it here mama")
    com_txt.play();
    var element = $('#com');
    element.css('cursor', 'pointer');

}, function () {

    com_txt.reverse();

});

$("#polar").hover(function () {
    // console.log("made it here mama")
    polar_txt.play();
    var element = $('#polar');
    element.css('cursor', 'pointer');

}, function () {

    polar_txt.reverse();

});

$("#film").hover(function () {
    // console.log("made it here mama")
    film_txt.play();
    var element = $('#film');
    element.css('cursor', 'pointer');

}, function () {

    film_txt.reverse();

});


// chaning text effect for social media links

var git_txt = TweenLite.to('#git-txt', 0.75, { text: "Kris-Mat", color: 'black', ease: Linear.easeNone, paused: true, reversed: true });
var twit_txt = TweenLite.to('#twit-txt', 0.75, { text: "KristaMCreates", color: 'black', ease: Linear.easeNone, paused: true, reversed: true });
var mail_txt = TweenLite.to('#mail-txt', 0.75, { text: "matsila.krista@gmail.com", color: 'black', ease: Linear.easeNone, paused: true, reversed: true });
var insta_txt = TweenLite.to('#insta-txt', 0.75, { text: "kristam.creates", color: 'black', ease: Linear.easeNone, paused: true, reversed: true });

$("#git").hover(function () {
    // console.log("made it here mama")
    git_txt.play();
    git_txt.css('color', 'black');

}, function () {

    git_txt.reverse();

});

$("#insta").hover(function () {
    // console.log("made it here mama")
    insta_txt.play();

}, function () {

    insta_txt.reverse();

});

$("#mail").hover(function () {
    // console.log("made it here mama")
    mail_txt.play();

}, function () {

    mail_txt.reverse();

});

$("#twit").hover(function () {
    // console.log("made it here mama")
    twit_txt.play();

}, function () {

    twit_txt.reverse();

});


