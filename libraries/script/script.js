
// ======================================Smooth scrool on click
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies ttakes to scroll to the specified areahe number of milliseconds it
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

// =====================================================================Smooth Scroll to top
//Get the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// when user click on the button, scroll to the top of the document
function topFunction() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
}

//================================== Wave \
// ambil gambar berdasarkan id wave 1 - 4
let wave1 = document.getElementById("wave1");
let wave2 = document.getElementById("wave2");
let wave3 = document.getElementById("wave3");
let wave4 = document.getElementById("wave4");
// ketika window di scroll jalan kan sebuah fungsi
window.addEventListener("scroll", function () {
  // ketika di scroll vertikal
  let value = window.scrollY;
  // beri style pada masing masing wave
  wave1.style.backgroundPositionX = 400 + value * 4 + "px";
  wave2.style.backgroundPositionX = 300 + value * -4 + "px";
  wave3.style.backgroundPositionX = 200 + value * 2 + "px";
  wave4.style.backgroundPositionX = 100 + value * -2 + "px";
});

// ============================================================style light slider
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});

//=============================================================== instagram feed
(function (d, s, id) {
  var js;
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "libraries/embedJs/ht.js";
  d.getElementsByTagName("head")[0].appendChild(js);
})(document, "script", "EmbedSocialHashtagScript");

//================================================================ rating show and hide edite
const btn = document.querySelector("#button");
const post = document.querySelector(".post");
const cardStars = document.querySelector(".card-stars");
const editeBtn = document.querySelector(".edite");

btn.onclick = () => {
  cardStars.style.display = "none";
  post.style.display = "block";

  editeBtn.onclick = () => {
    cardStars.style.display = "block";
    post.style.display = "none";
  };
  return false;
};

// =====================================================================filter image portfolio
