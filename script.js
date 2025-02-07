const WAIT_TIME = 400;

$(document).ready(function() {
  const current = $("#current").html();
  async function sleep() {
    await new Promise(resolve => setTimeout(resolve, WAIT_TIME));
  }

  $(".button-container-left button").click(async function() {
    $(".button-container-left button").css("text-shadow", "1px 1px 2px black");
    $(this).css("text-shadow",
      "6px 6px 3px black");
    $("#current").fadeOut(WAIT_TIME);
    $("#current").fadeIn(WAIT_TIME);
  });

  $("#home-btn").click(async function() {
    await sleep();
    $("#current").html(current);
  });

  $("#empl-btn").click(async function() {
    await sleep();
    $("#current").html(`
      <h1 class="left-side">Employment</h1><br><br>
    `);
  });

  $("#edu-btn").click(async function() {
    await sleep();
    $("#current").html(`
      <h1 class="left-side">Education</h1><br><br>
    `);
  });

  $("#prsnl-btn").click(async function() {
    await sleep();
    $("#current").html(`
      <h1 class="left-side">Personal Life</h1><br><br>
    `);
  });

  $("#hob-btn").click(async function() {
    await sleep();
    $("#current").html(`
      <h1 class="left-side">Hobbies</h1><br><br>
    `);
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
