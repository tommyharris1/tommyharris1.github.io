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
          I am currently employed as a Jr. Software Engineer at Life Cycle Engineering 
          at the Navy Yard in Philadelphia, PA.<br>
          When I was finishing up my Bachelor's program at the University of Delaware, 
          I was very uncertain as to where I would end up following graduation. Luckily, 
          as I was seeking out career opportunities at the University of Delaware career 
          fair, I came across Life Cycle Engineering.<br>The program manager I met (who would
          eventually become my actual program manager) presented me with the opportunity to 
          provide software support to the U.S. Navy. Being part of a midsized Navy contracting
          company with numerous benefits and an emphasis on employee development and customer
          advocation was an opportunity that I had to take. Despite the lengthy process of getting
          a secret security clearance, I got the chance to meet many clients from NAVSEA Philadelphia
          and, eventually, became a part of the LCE family. This ended up being the perfect jumpstart to
          my career as a Software Developer.<br>
      </div>
      <div class="image-right">
          <img src="./lpd26.avif" id="lpd26">
          <div class="subtitle">LPD-26 John P. Murtha</div>
      </div>
      <div class="content">
          Providing software support to NAVSEA Philadelphia under LCE has opened the door to new experiences
          and opportunities.<br>
          In September 2024, I got to travel to San Diego, CA and go onboard USS John P. Murtha. This experience
          gave me the chance to learn first-hand how the work I do positively impacts U.S. Navy operations and 
          how sailors rely on engineers like myself to build and maintain system functionality.
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
