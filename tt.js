var app = document.getElementById('app');


var typewriter = new Typewriter(app,{
    loop: false

});

typewriter.typeString('Not use to this kind of UX/UI right?')
  .pauseFor(3000)
  .deleteChars(36)
  .typeString('Want Your Normal Conventions Back?')
  .pauseFor(3000)
  .deleteChars(34)
  .typeString("Well lots people aren't use to your normal")
  .pauseFor(3000)
  .deleteChars(42)
  .typeString("recognize the digital divide")
  .pauseFor(5000)
  .start();

  let executeButton = document.getElementById("next-button");
  document.getElementById("next-button").style.display = "none";

  function showStuff() {
      document.getElementById("next-button").style.display = "inline";
  }
  setTimeout(showStuff, 50000);

  executeButton.addEventListener("click", function(){
    nextpage();
      });

  function nextpage(){
    window.location='edu.html';
  }
