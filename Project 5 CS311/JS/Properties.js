// Properties.js

function generateMadLib() {
    // Get values from the form
    var noun1 = document.getElementById("noun1").value;
    var verb1 = document.getElementById("verb1").value;
    var adjective1 = document.getElementById("adjective1").value;
    var noun2 = document.getElementById("noun2").value;
    var verb2 = document.getElementById("verb2").value;
    var adjective2 = document.getElementById("adjective2").value;
    var noun3 = document.getElementById("noun3").value;
    var verb3 = document.getElementById("verb3").value;
    var adjective3 = document.getElementById("adjective3").value;
    var noun4 = document.getElementById("noun4").value;
  
    // Check if the form exists
    var madLibsForm = document.getElementById("madLibsForm");
    if (!madLibsForm) {
      console.error("Form element not found!");
      return;
    }
  
    // Hide the form section
    madLibsForm.style.display = "none";
  
    // Display the Mad Lib section
    var madLibSection = document.getElementById("madLibSection");
    if (!madLibSection) {
      console.error("Mad Lib section element not found!");
      return;
    }
    madLibSection.style.display = "block";
  
    // Display the Mad Lib
    var madLib = `Once upon a time, there was a ${adjective1} ${noun1} who loved to ${verb1}. 
      One day, the ${noun2} decided to ${verb2} in a very ${adjective2} way. 
      The ${noun3} couldn't believe what was happening and started to ${verb3} in a ${adjective3} manner. 
      Suddenly, a wild ${noun4} appeared out of nowhere!`;
  
    // Update the Mad Lib text
    var madLibText = document.getElementById("madLibText");
    if (!madLibText) {
      console.error("Mad Lib text element not found!");
      return;
    }
    madLibText.textContent = madLib;
  }
  function resetMadLib() {
    // Show the form section
    var madLibsForm = document.getElementById("madLibsForm");
    if (madLibsForm) {
      madLibsForm.style.display = "block";
    }
  
    // Hide the Mad Lib section
    var madLibSection = document.getElementById("madLibSection");
    if (madLibSection) {
      madLibSection.style.display = "none";
    }
  
    // Clear the input values
    var inputs = madLibsForm.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  
    // Clear the Mad Lib text
    var madLibText = document.getElementById("madLibText");
    if (madLibText) {
      madLibText.textContent = "";
    }
  }