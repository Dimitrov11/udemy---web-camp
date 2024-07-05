// $("") = querySelector and querySelectorAll
$("h1")
$("button")

// return color in the console
console.log($("h1").css("color"));

// to add color add second parameter
console.log($("h1").css("color", "green"));

// to add class/classes
$("h1").addClass("big-title margin-50");
// Class check
$("h1").hasClass("margin-50");

//text manipulating
$("h1").text("Bye!");
$("button").text("Don't click me"); // all buttons change text

$("button").html("<em>Hey</em>") // .html = innerHTML


// Manipulate attributes
console.log($("img").attr("src"));
console.log($("a").attr("href", "https://bing.com"));

// Add eventListener
$("h1").click(function() {
    $("h1").css("color", "red");
});


// JS
for (let i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
       document.querySelector("h1").style.color = "purple";
    });   
}

$("button").click(function() {
    $("h1").css("color", "grey");
});

// Log all pressed keyboard key
$("input").keypress(function(event) {
    console.log(event.key);
});

// Change heading with the pressed key
$(document).keypress(function(event) {
    $("h1").text(event.key);
})

// ON - listen and use all events that you want it
$("h1").on("mouseover", function (event) {
    $("h1").css("color", "blue");
})


// Adding and removing Elements
$("h1").before("<button>New Button</button>"); // before h1
$("h1").after("<button>New Button</button>"); // after h1
$("h1").prepend("<button>New Button</button>"); // before the content of the h1 - but inside
$("h1").append("<button>New Button</button>"); // after the content of the h1 - but inside


// Animation
// hide, show, toggle (rotate/alternate)
// fadeOut, fadeIn and fadeToggle
// slideUp, slideDown and slideToggle - (for dropdown menu)
// $("button").on("click", function() {
//     $("img").slideToggle();
// });

// .animate ({property: numeric value})
$("button").on("click", function() {
    $("img").animate({opacity: 0.5});
});

$("button").on("click", function() {
    $("img").slideUp().slideDown().animate({opacity: 0.5});
});