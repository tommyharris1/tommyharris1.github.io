const WAIT_TIME = 200;

$(document).ready(function() {
  const current = $("#current").html();
  async function sleep() {
    await new Promise(resolve => setTimeout(resolve, WAIT_TIME));
  }

  $("#dropdown-content button").click(async function() {
    $("#dropdown-content button").css("text-shadow", "1px 1px 2px black");
    $(this).css("text-shadow",
      "2.5px 2.5px 1px black");
    $("#current").fadeOut(WAIT_TIME);
    $("#current").fadeIn(WAIT_TIME);
    $("#dropdown-content").css("animation", "growUp 200ms ease-in-out forwards");
  });

  $(".dropdown").hover(
    async function() {
      $("#dropdown-content").css("animation", "growDown 200ms ease-in-out forwards");
      $("#dropdown-content").css("transform-origin", "top center");
      $("#dropdown-content").css("display", "block");
    },
    async function() {
      $("#dropdown-content").css("animation", "growUp 200ms ease-in-out forwards");
    },
);

  $("#home-btn").click(async function() {
    await sleep();
    $("#current").html(current);
  });

  $("#empl-btn").click(async function() {
    await sleep();
    $("#current").html(`
      <h1>Employment</h1><br>
      <h2>Life Cycle Engineering - Jr. Software Engineer</h2>
      <h3>Philadelphia, PA</h3>
      <h3>June 2023 - Present</h3>
      <img class="png-shadow img-left-small-margins" id="lce" src="images/lce.png">
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
      <div class="image-display image-right">
          <img class="box-shadow img-right-margins" id="lpd26" src="images/lpd26.avif">
          <div class="subtitle">USS John P. Murtha (LPD 26)</div>
      </div>
      <div class="content">
          During my first year and a half with LCE, I provided software development support for LPD 17 
          Engineering Control Systems (ECS). The team uses and builds upon a legacy framework to provide a user-friendly
          Human Machine Interface to U.S. Navy sailors on various fleets. The ECS is a critical system on
          these fleets as it provides information and safe operation on ship elements such as propulsion, 
          electrical generators, and auxiliary devices.<br>
          Supporting this team taught me a lot about how ship systems function and how ECS manages those 
          systems. Some skills I learned and utilized include:
          <ul style="text-indent: 10px;">
              <li>ECS Page Building</li>
              <li>Programming in Ada, Bash, and Batch</li>
              <li>Modbus bitwise communications</li>
              <li>Logic & Analog/Digital programming in ROSE</li>
              <li>Console configurations running Windows 10 OS</li>
              <li>Remote Terminal Unit (VRTU) communications</li>
              <li>C++ Development on Windows XP OS</li>
          </ul>
          Providing software support to LPD 17 ECS under LCE has opened the door to new experiences
          and opportunities.<br>
          In September 2024, I got to travel to San Diego, CA and go onboard USS John P. Murtha, where I performed 
          updated installations of ECS on Windows 10 consoles. This experience
          gave me the chance to learn first-hand how the work I do positively impacts U.S. Navy operations and 
          how sailors rely on engineers like myself to build and maintain system functionality.<br>
      </div>
      <img class="box-shadow img-left-margins" id="navsea" src="images/navsea.jpg"><br>
      <div class="content">
          In November 2024, I started providing software support to a different customer under NAVSEA Philadelphia
          known as Platform Independent Machinery Control Systems (PIMCS). Unlike LPD 17 ECS, PIMCS provides continuous
          development and deployment for a more modern and newer framework for Navy ship controls. Other integrators 
          within NAVSEA Philadelphia (including LPD 28 ECS and Coast Guard Machinery Control Systems) rely on this 
          framework as a basis for developing their own systems, which they then deliver out to other fleets.<br>
          Similar to the LPD 17 ECS legacy framework, the PIMCS framework contains some (but not all) ship components 
          such as propulsion and ballast. Java Spring is primarily used for the frontend elements of the PIMCS application, 
          whereas Apache Velocity templates and other Java libraries support the backend. Since our main objective is to 
          provide an application framework, not all functionalities of a finished software product are included. Nevertheless, 
          some select technical components are included for the sake of testing such as alarm severity systems and PLC 
          data transmissions.
          Some skills I have utilized with PIMCS include:
          <ul style="text-indent: 10px;">
              <li>Java (Spring and AssertJ frameworks)</li>
              <li>Agile development methodologies</li>
              <li>Network packet scanning in Wireshark</li>
              <li>Template programming in Apache Velocity</li>
              <li>Data communications in Programmable Logic Controllers (PLCs) using RSLogix 5000</li>
              <li>Data definitions in Extensible Markup Language (XML)</li>
              <li>Git and GitLab</li>
          </ul>
      </div>
      <div class="image-display image-right">
          <img class="box-shadow img-right-margins" id="oneyear" src="images/1year.jpg">
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
      </div><br>

      <h2>Frontier Technologies Inc. - Certification Training Consultant (Part-Time)</h2>
      <h3>Remote (Wilmington, DE)</h3>
      <h3>January 2023 - May 2023</h3>
      <img class="png-shadow img-left-small-margins" id="fti" src="images/fti.png">
      <div class="content">
        Primarily during Winter Break of my senior year undergraduate studies, I partook in a Certification 
        Training program with Frontier Technologies Inc (FTI). This was a part-time and fully remote role with the 
        corporate office in Wilmington, DE.<br>
        During my short time with FTI, I took multiple courses that improved my knowledge of Cybersecurity and 
        Computers/Systems Engineering. All of theses courses included one or more knowledge assessments which presented me 
        with a certificate of completion. The main courses that I completed were hosted by VMware, Palo Alto Networks, 
        and IBM.<br>
        <div class="image-display image-right">
          <img class="png-shadow img-right-margins" id="paloalto" src="images/paloalto.png">
        </div>
        Although I didn't get a chance to showcase or practice my Software Development skills, being a consultant 
        for FTI was a great opportunity for my career growth. I gained lots of knowledge in topics such as 
        Palo Alto Computer Architectures, VMware Carbon Black (and other similar products) etc. I even got a 
        chance to meet some of the main staff members at FTI (including the company's CEO) and learn more about what they do and how 
        Cybersecurity impacts today's business atmosphere. The growth I gained in knowledge and professional networking from 
        FTI has greatly helped me get to where I am now in my career. 
      </div><br>

      <h2>A.I. Whoo - Software Engineer & Team Member</h2>
      <h3>Newark, DE</h3>
      <h3>August 2022 - May 2023</h3><br>
      <img class="png-shadow" id="aiwhoo" src="images/aiwhoo.png">
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
      <div class="image-display image-right">
          <img class="box-shadow img-right-margins" id="team10f22" src="images/team10f22.jpg">
          <div class="subtitle">Team 10 - Fall 2022 Semester<br>Pictured left to right: Alex Darby, Dylan Lazzari, Moira Tews,<br>
          Tommy Harris, CJ Mitterer, Arooj Liaqat</div>
      </div>
      <div class="content">
          During the Fall 2022 semester, the project that my team and I worked on under Dr. Saponaro's supervision was known as QRVision.
          The goal of the project was to create a redeemable points system for usage in local state parks in the Newark, DE area.
          Visitors to said parks can scan QR codes using their mobile devices to collect points. These points can then be redeemed
          for rewards pertaining to local Newark businesses. A side effort of this project was getting businesses onboard with the project
          as partners; some of them included UD Athletics, TedX, and UDairy Creamery.<br>
          The efforts my team and I contributed focused mostly on backend functionality i.e. the "behind the scenes" server-side code 
          that handles data management and user requests. My contributions included encryption and decryption for end-to-end communications 
          for heightened security and sending AJAX POST requests for checking and modifying user points. Languages and software utilized include:
      </div>
      <div class="image-display image-left">
          <img class="box-shadow img-left-margins" id="team10s23" src="images/team10s23.jpg">
          <div class="subtitle">Team 10 - Spring 2023 Semester<br>Pictured left to right:<br>Zac Golpira, Tommy Harris, Moira Tews,<br>Dylan Lazzari, Nick Steuernagle</div>
      </div>
      <div class="content">
          During the Spring 2023 semester, my team and I were assigned a new project (again under Dr. Saponaro) known simply as TA Automation. 
          The goal of the project was to create a foundation for a new system that manages several assets of Teaching Assistants for the 
          Computer & Information Sciences Department at the University of Delaware.<br>
          Prior to starting this project, the responsibilities performed by the TA Coordinator were more hands-on. They had to manually file 
          paperwork, ensure TAs get paid in a timely manner, and pass the paperwork onto Human Resources (HR). This process took a long time 
          to complete and TAs sometimes got paid later rather than sooner. A flow of processes was used as an overlay as to how the new 
          automation system works. This pipeline included steps such as onboarding students through Criminal Background Checks and I-9, 
          automatic emails being sent to TAs for owed back hours, and automatic emails being sent to TA Coordinator for entry of back hours 
          and ensuring TAs are paid on-time.<br>
      </div>
      <div class="image-display image-right">
        <img class="box-shadow img-right-margins" id="onboarding"src="images/onboarding.png">
        <div class="subtitle">Initial Onboarding page<br>for TA Automation project</div>
      </div>
      <div class="content">
          My primary tasking for this project included using dataframes for each step of the pipeline and ensuring student names and information 
          progresses through each dataframe correctly. Although it was mostly backend development, I also added some Quality-of-Life frontend 
          features such as collapsible dataframes and calendar-style date selections.<br>
          Languages and software utilized for both capstone projects include:
          <ul style="text-indent: 10px;">
              <li>Python (FastAPI, Pandas, and Behave libraries)</li>
              <li>Javascript and HTML</li>
              <li>JQuery and CryptoJS for JSON object encryption</li>
              <li>pycryptodome and hashlib for JSON object decryption</li>
              <li>Google Sheets (database)</li>
              <li>PyCharm IDE</li>
              <li>Asana (Task planning)</li>
              <li>Clockify, Notion (Agile Methodologies)</li>
              <li>Discord (Communication)</li>
              <li>Git and GitHub</li>
          </ul>
      </div>

      <h2>University of Delaware Dept. of Computer and Info. Sciences - Teaching Assistant (Part-Time)</h2>
      <h3>Newark, DE</h3>
      <h3>August 2022 - December 2022</h3>
      <img class="png-shadow img-left-margins" id="cisud" src="images/cisudlogo.jpg">
      <div class="content">
        I served as an undergraduate Teaching Assistant (TA) in the UD CIS Dept. during the Fall 2022 semester.<br>
        The course I was assigned to was CISC 106 - General Computer Science for Engineers, an introductory Computer Science course 
        for First-Year Engineering students. The course covered various programming practices and techniques, as well as basic 
        programming in Python. Some of my duties included instructing in-class activities, grading worksheets, answering 
        student questions through Discord, and hosting office hours outside of class for students to receive additional help.<br>
        Being a TA for this course allowed me to re-familiarize myself with Python and its concepts. More importantly, 
        it allowed me to learn more about leadership and spreading knowledge in an educational setting.
      </div><br>

      <h2>Postmates & Uber Eats - Delivery Driver (Part-Time)</h2>
      <h3>Clifton, NJ & Newark, DE</h3>
      <h3>June 2020 - August 2022</h3><br>
      <div class="content">
        Delivery driver placeholder!
      </div>

      <h2>Wendy's - Cashier (Part-Time)</h2>
      <h3>Wayne, NJ</h3>
      <h3>June - August 2018</h3><br>
      <div class="content">
        Wendy's placeholder!
      </div>
    `);
  });

  $("#edu-btn").click(async function() {
    await sleep();
    $("#current").html(`
      <h1>Education</h1><br>
      <h2>The University of Delaware</h2>
      <h3>B.S. Computer Science, May 2023</h3><br>
      <img id="udlogo" src="images/udlogo.png">
      <div class="content">
          I graduated from the University of Delaware in May 2023.<br>
          
      </div>
    `);
  });

  $("#proj-btn").click(async function() {
    await sleep();
    $("#current").html(`
      <h1>Projects</h1><br>
      <div class="content">
          Projects placeholder!<br>
      </div>
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
