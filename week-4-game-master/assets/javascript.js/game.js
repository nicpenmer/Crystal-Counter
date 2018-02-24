$(document).ready(function () {

    //pick a random number as goal number
    var goalNumber = Math.floor(Math.random() * 80) + 20;
    //make sure computer is picking random number
    console.log(goalNumber);
    //display random number as goal number
    $("#goal").text(goalNumber);
    var wins = 0;
    var losses = 0;
    var previous = 0;

    var initializeGame = function (){

    
    //for loop to add random value to each crystal
    for (var i = 0; i < 4; i++) {
      var random = Math.floor(Math.random() * 15) + 1;
      //test in console
      console.log(random);
      //attach random value attribute to each crystal
      var crystal = $("<div>");
       crystal.attr({ "class": 'crystal',
        "random-value": random
      });
      $(".crystal").append(crystal);
    }
  }

  initializeGame();
   
    //make them clickable
    $(document).on("click", ".crystal", function () {

      $("#green").on("click", function () {
        var greenCrystal = document.getElementById("#green");
        console.log(greenCrystal);
      });

      $("#blue").on("click", function () {
        var blueCrystal =  document.getElementById("#blue");
        console.log(blueCrystal);
      });

     $("#red").on("click", function () {
       var redCrystal =  document.getElementById("#red");
        console.log(redCrystal);
      });

      $("#yellow").on("click", function () {
        var yellowCrystal =  document.getElementById("#yellow");
        console.log(yellowCrystal);
      });
      // coming up as null currently. FIX THIS..



      //change value to integer
      var num = parseInt($(this).attr("random-value"));

      //make clicks addable - add to previous score
      previous += num;
      console.log(previous);

      //if score = goal number then win
      if (previous === goalNumber){
         //win ++
        win++;
        console.log("you won.");
        previous = 0;
      }
      //if score > goal number then loss
      else if (previous > goalNumber){
        //loss ++
        loss++; 
        console.log("you lost.")
        previous = 0; 
      }
      
      //reset game
      initializeGame();


    });
  });


  //joel and bill - sorry if this is a hot disaster. 
  //the crystals arent registering as numbers yet. and they arent adding up yet. 
//also my external JS file isnt loading.. so i put the JS at the bottom of the HTML. 
