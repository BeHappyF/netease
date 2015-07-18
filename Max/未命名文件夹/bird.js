var bird = document.getElementsByClassName('bird')[0];
// alert(bird)
bird.classList.add("bird-intro");
bird.classList.add("bird-moving");

 //  function birdIntro () {
 //           $(".bird").addClass("bird-intro");
 //           $(".bird").addClass("bird-moving");
 //           setTimeout(function () {
 //               $(".bird").addClass("bird-static");
 //           }, 5000);
 //       }

 //   function finalBird () {
 //       $(".bird").removeClass("bird-static");
 //       $(".bird").addClass("bird-leave");
 //   }

 //   $(document).ready(function () {
       
 //       // call intro function
 // setTimeout(function() {
 //   if ($('.bird')) {
 //     $('.category-banner').prepend($('.bird'));
 //     setTimeout(function() {
 //       birdIntro();
 //     }, 250);
 //   }
 // }, 500);

 //       $(".bird, .open-tab, .collapse-nav").click(function () {
 //           finalBird();
 //       });
       
 //   });