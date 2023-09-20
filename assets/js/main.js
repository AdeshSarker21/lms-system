// Discover Slider js
$(document).ready(function () {
  $('.profile-dropdown .dropdown-menu').on('click', function (e) {
    e.stopPropagation();
});

  $(".discover-slider").slick({
    arrows: false,
    dots: false,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    vertical: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $(".discover-slider2").slick({
    arrows: false,
    dots: false,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    vertical: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $(".recomendation-slider").slick({
    arrows: false,
    dots: false,
    slidesToScroll: 3,
    variableWidth: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".my-course-slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5.5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".popular-slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  $("#agricultureCourse").click(function() {
    window.location.href = "mycourses-agriculture.html";
  });
  $("#createGroup").click(function() {
    window.location.href = "create-group.html";
  });
  $("#attendancePage").click(function() {
    window.location.href = "attendance.html";
  });

  //create group save area start
  $('#save-btn').on('click', function() {
    $('.popup-full-wrapper').fadeIn();
    $('body').css('overflow', 'hidden');
  });


    $('#createGroupExitbtn').on('click', function() {
      $('.popup-full-wrapper').fadeOut();
      $('body').css('overflow', 'auto'); 
    });
  //create group save area end

  //day and week add area start

  $("#adddayCross").on('click', function() {
    // Slide out .day-and-week-area to the right
    $('.day-and-week-area').animate({"right": "-100%"}, 300, function() {
        $(this).hide();
    });
    $('.attendance-add-day-week-area').fadeOut();
});

$("#addDayandWeekbtn").on('click', function() {
    // Show and slide in .day-and-week-area from the right
    $('.day-and-week-area').css({"right": "-100%"}); // Reset to initial position
    $('.attendance-add-day-week-area').fadeIn();
    
    // Show .day-and-week-area as well
    $('.day-and-week-area').show().animate({"right": "0"}, 300);
});
  //day and week add area end


  //add new student area start

  $("#adddayCross").on('click', function() {
    // Slide out .day-and-week-area to the right
    $('.day-and-week-area').animate({"right": "-100%"}, 300, function() {
        $(this).hide();
    });
    $('.attendance-add-day-week-area').fadeOut();
});

$("#addNewStudent").on('click', function() {
    // Show and slide in .day-and-week-area from the right
    $('.day-and-week-area').css({"right": "-100%"}); // Reset to initial position
    $('.attendance-add-day-week-area').fadeIn();
    
    // Show .day-and-week-area as well
    $('.day-and-week-area').show().animate({"right": "0"}, 300);
});
  //add new student area end


  //bulk registration area start

  $("#bulkRegCross").on('click', function() {
    // Slide out .day-and-week-area to the right
    $('.bulk-ragistration-main-area').animate({"right": "-100%"}, 300, function() {
        $(this).hide();
    });
    $('.bulk-ragistration-full-area').fadeOut();
});

$("#bulkRegbtn").on('click', function() {
    // Show and slide in .day-and-week-area from the right
    $('.bulk-ragistration-main-area').css({"right": "-100%"}); // Reset to initial position
    $('.bulk-ragistration-full-area').fadeIn();
    
    // Show .day-and-week-area as well
    $('.bulk-ragistration-main-area').show().animate({"right": "0"}, 300);
});
  //bulk registration student area end


  //assign student pop up area start
  $('#assignSandtbtn').on('click', function() {
    $('.popup-add-course-full-wrapper').fadeIn();
    $('body').css('overflow', 'hidden');
  });


    $('#popupCross').on('click', function() {
      $('.popup-add-course-full-wrapper').fadeOut();
      $('body').css('overflow', 'auto'); 
    });
     //assign student pop up area end

      //assign co teacher pop up area start
  $('#assignCoTeacherbtn').on('click', function() {
    $('.popup-co-teacher-add-course-full-wrapper').fadeIn();
    $('body').css('overflow', 'hidden'); 
  });
    $('#popupcoteacherCross').on('click', function() {
      $('.popup-co-teacher-add-course-full-wrapper').fadeOut();
      $('body').css('overflow', 'auto'); 
    });
      //assign co teacher pop up area end

  var minValue = 1;
  var maxValue = 7;

  // Decrease button click
  $('#decrease').click(function() {
      var value = parseInt($('#numberOfDay').text());
      var value = parseInt($('#numberOfTotalDay').text());
      if (value > minValue) {
          value--;
          $('#numberOfDay').text(value);
          $('#numberOfTotalDay').text(value);
      }
  });

  // Increase button click
  $('#increase').click(function() {
      var value = parseInt($('#numberOfDay').text());
      var value = parseInt($('#numberOfTotalDay').text());
      if (value < maxValue) {
          value++;
          $('#numberOfDay').text(value);
          $('#numberOfTotalDay').text(value);
      }
  });
 

  //side menu slide section start

  var isSmallLayout = false;

  function applyLayout() {
    if (window.innerWidth < 991) {
      isSmallLayout = true;
      $(".page-left").addClass("show-sidemenu");
      $("#sideMenu").removeClass("col-lg-3").addClass("col-lg-1");
      $("#fullPage").removeClass("col-lg-9").addClass("col-lg-11");
      $("#sidemenutoggle").removeClass("col-lg-3").addClass("col-lg-1");
    } else {
      isSmallLayout = false;
      $(".page-left").removeClass("show-sidemenu");
      $("#sideMenu").removeClass("col-lg-1").addClass("col-lg-3");
      $("#fullPage").removeClass("col-lg-11").addClass("col-lg-9");
      $("#sidemenutoggle").removeClass("col-lg-1").addClass("col-lg-3");
    }
  }

  // Apply initial layout based on screen size
  applyLayout();

  // Bind the function to window resize event
  $(window).resize(function () {
    applyLayout();
  });

  // Additional functions for handling accordion and sidebar menu
  $(".accordion-button").click(function () {
    // Add your accordion logic here
    if ($(".accordion-collapse.collapse.show")) {
      $(this).parent().parent().addClass("shadow-full");
      $(".accordion-button[aria-expanded=false]")
        .parent()
        .parent()
        .removeClass("shadow-full");
        $(".page-left").css({"display":"none"})
    }
  });

  $(function () {
    $(".accordion-collapse.collapse").parent().addClass("shadow-none");
    $(".accordion-collapse.collapse.show").parent().addClass("shadow-full");
  });

  // Sidebar menu js
  $(".menu-btn").click(function () {
    $(".page-left").addClass("show-sidemenu");
    $(".page-left").css({"display":"block"});
  });

  $(".close-btn").click(function () {
    $(".page-left").removeClass("show-sidemenu");
  });

  // Sidebar menu toggle button for big screens
  $("#sidemenutoggle").click(function () {
    if (!isSmallLayout) {
      if ($("#sidemenutoggle").hasClass("col-lg-1")) {
        $("#sideMenu").removeClass("col-lg-1").addClass("col-lg-3");
        $("#fullPage").removeClass("col-lg-11").addClass("col-lg-9");
        $("#sidemenutoggle").removeClass("col-lg-1").addClass("col-lg-3");
        $(".icon-m-right").css({"margin-right":"26px"});
        $(".menu-item-hide-show").css({"display":"block"})
      } else {
        $("#sideMenu").removeClass("col-lg-3").addClass("col-lg-1");
        $("#fullPage").removeClass("col-lg-9").addClass("col-lg-11");
        $("#sidemenutoggle").removeClass("col-lg-3").addClass("col-lg-1");
        $(".icon-m-right").css({"margin-right":"0"})
        $(".menu-item-hide-show").css({"display":"none"})
      }
    }
    $(".menuleft-arrow").toggle();
    $(".menuright-arrow").toggle();

  });

  //delete sure popup massages
  $(".delete-it").click(function(){
    $(".delete-sure-popup").fadeIn();
  });
  $("#deleteCancel").click(function(){
    $(".delete-sure-popup").fadeOut();
  });
  $("#deleteConfirm").click(function(){
    $(".delete-sure-popup").fadeOut();
  });

   //participant drowpdown 
  $("#participantdropdownbtn").click(function(){
    $('.participant-dropdown-list').slideToggle();
  });
  $("#filterBtn").click(function(){
    $('.filter-dropdown').slideToggle();
  });
  //rozna catagory 
  $(".rozna-catagory-dropdown").click(function(){
    $('.rozna-catagory-dropdown-list').slideToggle();
  });
  $(".speac-card-function-btn").click(function(){
    $('.card-share-area').fadeIn();
  });
  //publish button
  $('.publish-btn').click(function(){
    $("#publish").toggle();
    $("#notPublish").toggle();
  });
});



