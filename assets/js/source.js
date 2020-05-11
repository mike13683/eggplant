$(document).ready(function(){
    $('.carousel').carousel({
        interval: 14000
    })
});

$(document).ready(function(){
    // Circus Begins
    const aboutController = new ScrollMagic.Controller();

    const aboutTween = gsap.timeline();

    aboutTween.fromTo(".about-js-2", {transformOrigin:"right", scaleX:0, right:0, duration:1}, {scaleX:1})
    aboutTween.fromTo(".about-js-1", {transformOrigin:"left", scaleX:0, left:0, duration:1}, {scaleX:1}, "=+1")


        .setTween(aboutTween)
        .addTo(aboutController)
});

// slide-up
$(document).ready(function(){
    $(".slide-up").each(function(){
        const expertsController = new ScrollMagic.Controller();

        const expertTween = gsap.timeline();

        expertTween.fromTo(this, {autoAlpha:0, y:20, duration:0.9}, {autoAlpha:1, y:0})

        const expertScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook:0.8
        })

            .setTween(expertTween)
            .addTo(expertsController)
    })
});

$(document).ready(function(){
    const shopController = new ScrollMagic.Controller()

    const shopTween = gsap.timeline()

    shopTween.fromTo(".shop", {autoAlpha:0, y:"20px"},{autoAlpha:1, y:0})
    shopTween.fromTo(".shop__content", {autoAlpha:0, y:"20px"},{autoAlpha:1, y:0},"=+0.7")


    const shopScene = new ScrollMagic.Scene({
        triggerElement: ".shop",
        triggerHook:0.8
    })

        .setTween(shopTween)
        .addTo(shopController)
});

$(document).ready(function(){
// experts content
    const experts__contentController = new ScrollMagic.Controller();

    const experts__contentTween = gsap.timeline();

// experts__contentTween.fromTo(".experts", {autoAlpha:0, y:20, duration:0.9}, {autoAlpha:1, y:0})

    const experts__contentScene = new ScrollMagic.Scene({
        triggerElement: ".experts__content-js",
        triggerHook:0.1,
        duration:"100%"
    })

        .setPin(".experts__content-js")
        .setTween(experts__contentTween)
        .addTo(experts__contentController)
});

$(document).ready(function(){
// being
$('.buy-bottles').hide()
$('.bottle-hook-js').hover(function(){
    $(".buy-bottles").toggle()
})
});

$(document).ready(function(){
// tula
const tulaController = new ScrollMagic.Controller();

const tulaTween = gsap.timeline();

$(".tula-buttons-1").on("click", function(){
    $(".tula__media-js").attr("src", "./assets/img/mic.png")
    tulaTween.to(".tula-bg-colour", {backgroundColor:"#fff", duration: 1})
    tulaTween.fromTo(".tula__content h2, p", {color:"#000",}, {color:"#000", duration: 1})
})

$(".tula-buttons-2").on("click", function(){
    $(".tula__media-js").attr("src", "./assets/img/mic-black.webp")
    tulaTween.to(".tula-bg-colour", {backgroundColor:"#000", duration: 1})
    tulaTween.fromTo(".tula__content h2, p", {color:"#fff",}, {color:"#fff", duration: 1})
})

$(".tula-buttons-3").on("click", function(){
    $(".tula__media-js").attr("src", "./assets/img/mic-red.png")
    tulaTween.to(".tula-bg-colour", {backgroundColor:"#A83030", duration: 1})
    tulaTween.fromTo(".tula__content h2, p", {color:"#fff",}, {color:"#fff", duration: 1})
})

    .setTween(tulaTween)
    .addTo(tulaController)
});

// $(document).ready(function(){
//
//
//     const galleryController = new ScrollMagic.Controller();
//
//     const galleryTween = gsap.timeline();
//     galleryTween.fromTo(".gallery img", {scaleX:0, transformOrigin:"left", },{scaleX:1,duration:0.8 ,ease: "power3.in"})
//
//     const galleryTweenScene = new ScrollMagic.Scene({
//         triggerElement: ".gallery",
//
//     })
//
//         .setTween(galleryTween)
//         .addTo(galleryController)
// });





