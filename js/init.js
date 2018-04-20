(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $('.modal').modal();
  });

$(function ($) { // Start of jQuery name space
      $(function () {

          //initialize all implemented materialize modals on the page.
          $(".modal").modal();

          //Here it activiates mondals by click on trigger
          $(".trigger-modal").modal();

      }
    );
  })(jQuery); // end of jQuery name space


$(document).ready(function(){
    $('.sidenav').sidenav();
   });
