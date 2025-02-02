$(document).ready(function() {
  $(".button-container-left button").click(function() {
    $(".button-container-left button").css("text-shadow", "1px 1px 2px black");
    $(this).css("text-shadow",
      "4px 4px 2px black");
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
