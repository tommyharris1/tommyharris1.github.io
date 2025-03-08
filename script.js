const WAIT_TIME = 200;

$(document).ready(function() {
  const current = $("#current").html();
  async function sleep() {
    await new Promise(resolve => setTimeout(resolve, WAIT_TIME));
  }

  $("#dropdown-content button").click(async function() {
    $("#dropdown-content button").css("text-shadow", "1px 1px 2px black");
    $(this).css("text-shadow",
      "5px 5px 2px black");
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
      <h1>Employment</h1><br>
      <h2>Life Cycle Engineering - Jr. Software Engineer</h2>
      <h3>June 2023 - Present</h3><br>
      <img id="lce" src="./lce.png">
      <div class="content">
          I currently work as a Jr. Software Engineer at Life Cycle Engineering at the Navy Yard in Philadelphia, PA.
      </div>
    `);
  });

  $("#edu-btn").click(async function() {
    await sleep();
    $("#current").html(`
      <h1>Education</h1><br>
      <h2>The University of Delaware</h2>
      <h3>B.S. Computer Science, May 2023</h3><br>
      <img id="udlogo" src="./udlogo.png">
      <div class="content">
          I graduated from the University of Delaware in May 2023.
      </div>
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
