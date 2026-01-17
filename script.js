const WAIT_TIME = 200;

$(document).ready(function() {
  $("#dropdown-content button").click(async function() {
    $("#dropdown-content button").css("text-shadow", "1px 1px 2px black");
    $(this).css("text-shadow",
      "2.5px 2.5px 1px black");
    $("#dropdown-content").css("animation", "growUp 200ms ease-in-out forwards");
  });

  $(".dropdown").click(function() {
    if($("#dropbtn #one").css("transform") == "none") {
      $("#dropbtn #one").css("transform", "translateY(3vmin) rotate(45deg)");
      $("#dropbtn #two").css("opacity", "0");
      $("#dropbtn #three").css("transform", "translateY(-3vmin) rotate(-45deg)");
      $("#dropdown-content").css("animation", "growDown 200ms ease-in-out forwards");
      $("#dropdown-content").css("transform-origin", "top center");
      $("#dropdown-content").css("display", "block");
    }
    else {
      $("#dropbtn #one").css("transform", "");
      $("#dropbtn #two").css("opacity", "");
      $("#dropbtn #three").css("transform", "");
      $("#dropdown-content").css("animation", "growUp 200ms ease-in-out forwards");
    }
  });

  $("#dropdown-content > button").click(async function() {
    $("#pages > div").fadeOut(WAIT_TIME);
  });

  const buttonMap = {
    "home-btn": "#home",
    "empl-btn": "#employment",
    "edu-btn": "#education",
    "proj-btn": "#projects"
  };

  $("#home-btn, #empl-btn, #edu-btn, #proj-btn").click(async function() {
    // Allows smooth fade-in and fadeout without blocking the main thread (thanks JavaScript)
    await new Promise(resolve => setTimeout(resolve, WAIT_TIME));
    $(buttonMap[this.id]).fadeIn(WAIT_TIME);
  });

});

console.log("You've found hidden easter egg #1!")
console.log(`
        ______
      .-        -.
     /            \\
    |              |
    |,  .-.  .-.  ,|
    | )(_o/  \\o_)( |
    |/     / \\     \|
    (_     ^^     _)
     \\__|IIIIII|__/
      | \\IIIIII/ |
      \\          /
       '--------'
`);
