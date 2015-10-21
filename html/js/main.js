/*global $ */
(function () {
    'use strict';
    $(document).ready(function () {


        //* For the read-more link in th blog* //

        $('.read-more a').click(function (e) {
            e.preventDefault();

            var el = $(e.target),
                para = el.siblings('p');

            if (el.text() === "Read more >") {
                para.slideDown(500, function () {
                    el.text('Read less <');
                });
            } else {
                para.slideUp(500, function () {
                    el.text('Read more >');
                });
            }

        });
        

        //** For the form to toggle up and down on About page **//

        $('#getInTouch').click(function () {
            $('form').slideToggle("slow");
        });

        
        
        //** For the form to submit and load confirmation on About page **//
        // Couldn't get it to work :-(
        
      //  $('send').click(function () {
         //   $('.thanks').show;
       // });
        
        
        
        //** For the photo carousel **// 

        /* This is where I initialise the carousel */



        $('.carousel').slick();


        /* Find the hamburger and attach a click handler */
        $('button').click(function (e) {
            e.preventDefault();

            $('.mobile').toggleClass('expanded');
        });

    });
}());