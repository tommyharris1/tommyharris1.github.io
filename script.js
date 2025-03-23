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
          <div class="subtitle">USS John P. Murtha (LPD 26)</div>
      </div>
      <div class="content">
          During my first year and a half with LCE, I provided software development support for LPD 17 
          Engineering Control Systems (ECS). The team uses and builds upon a legacy framework to provide a user-friendly
          Human Machine Interface to U.S. Navy sailors on various fleets. The ECS is a critical system on
          these fleets as it provides information and safe operation on ship elements such as propulsion, 
          electrical generators, and auxiliary devices.<br>
          Supporting this team taught me a lot about how ship systems function and how ECS manages those 
          systems. Some skills I learned include ECS Page Building, programming in Ada, Modbus communications 
          systems, console configurations on Windows 10 OS, and Remote Terminal Unit (VRTU) communications.<br>
          Providing software support to LPD 17 ECS under LCE has opened the door to new experiences
          and opportunities.<br>
          In September 2024, I got to travel to San Diego, CA and go onboard USS John P. Murtha, where I performed 
          updated installations of ECS on Windows 10 consoles. This experience
          gave me the chance to learn first-hand how the work I do positively impacts U.S. Navy operations and 
          how sailors rely on engineers like myself to build and maintain system functionality.<br>
      </div>
      <img id="navsea" src="./navsea.jpg"><br>
      <div class="content">
          In November 2024, I started providing software support to a different customer under NAVSEA Philadelphia
          known as Platform Independent Machinery Control Systems (PIMCS). Unlike LPD 17 ECS, PIMCS provides continuous
          development and deployment for a more modern and newer framework for Navy ship controls. Other integrators 
          within NAVSEA Philadelphia (including LPD 28 ECS and Coast Guard Machinery Control Systems) rely on this 
          framework as a basis for developing their own systems, which they then deliver out to other fleets.<br>
          Being a part of PIMCS has allowed me to improve on some of my existing skills, such as Java programming, Agile methodologies and
          network packet scanning in Wireshark. I've also picked up new skills including Java frameworks (Spring, AssertJ, Mockito), 
          template programming in Apache Velocity, and data communications through Programmable Logic Controllers (PLCs).
      </div>
      <div class="image-right">
          <img src="./1year.jpg" id="oneyear">
          <div class="subtitle">1 Year Milestone with LCE<br>Mark Medvetz (program manager) & Myself</div>
      </div>
      <div class="content">
          When I first arrived at LCE's office in June 2023, I was both excited and anxious to begin my professional
          Software Engineering career. As it usually goes when starting a new job, I wasn't 100% sure what to expect 
          or what I would be working with. Navigating a new environment in a completely new place can be somewhat 
          mentally challenging for someone like me. Despite this, I managed to navigate through the intensive onboarding
          processes and continue to overcome all other obstacles thus far.<br>
          Later this year, I will be achieving my 2-year milestone with LCE. Being a successful Software Engineer
          for any company not only includes being knowledgeable in your field, but also having an outstanding and 
          motivational support system behind you. LCE has without a doubt exceeded my professional and personal expectations 
          for nearly 2 years and I'm certain they will continue to do so for the future. I will always be grateful for
          all that my program managers and the staff at LCE have done for me.<br><br>
      </div>
      <h2>A.I. Whoo - Software Engineer & Team Member</h2>
      <h3>August 2022 - May 2023</h3><br>
      <img id="aiwhoo" src="./aiwhoo.png">
      <div class="content">
          During my senior year studying Computer Science at the University of Delaware, I provided software support for 
          the locally founded software corporation known as A.I. Whoo.<br>
          As part of my Capstone requirement, I worked in a team environment under client supervision to provide meaningful 
          and impactful software solutions. Our client was Dr. Matthew Saponaro, the founder of A.I. Whoo.
          He is a University of Delaware graduate who also works as the Teaching Assistant Coordinator for the UD Department of 
          Computer & Information Sciences.<br>
          Working in a software development Capstone group for a client is vital to succeeding in the professional world.
          The projects assigned to my teammates and I taught us various lessons in regards to professional software development.
          Some of these include effective client/customer communication, better programming habits, Agile methodologies, and 
          utilization of enterprise software for a large organization. These lessons came with their own sets of challenges as well,
          such as meeting consistent weekly deadlines and ensuring our client is happy with code deliverables.<br>
      </div>
      <div class="image-right">
          <img src="./team10f22.jpg" id="team10f22">
          <div class="subtitle">Team 10 - Fall 2022 Semester<br>Pictured left to right: Alex Darby, Dylan Lazzari, Moira Tews,<br>Tommy Harris, CJ Mitterer, Arooj Liaqat</div>
      </div>
      <div class="content">
          During the Fall 2022 semester, the project that I worked on under Dr. Saponaro's supervision was known as QRVision.<br>
          The goal of the project was to create a redeemable points system for usage in local state parks in the Newark, DE area.
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
