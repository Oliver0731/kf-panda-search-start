// KF Panda Search

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
var egg = +1;
console.log(egg);

function btnClicked() {
  let name = document.getElementById("char-in").value.toLowerCase();

  //if statement - test th inout
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/po.png";
  } else if (name === "tigress" || name === "kung fu tiger") {
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the Tiger Warrior!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/tigress.png";
  } else if (name === "mantis" || name === "small but deadly") {
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the Preying mantis Warrior!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/mantis.png";
  } else if (name === "monkey") {
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the monkey Warrior!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/monkey.png";
  } else if (name === "boss wolf") {
    document.getElementById("char-quote").innerHTML = "I am an evil bad guy!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/boss-wolf.png";
  } else if (name === "crane") {
    document.getElementById("char-quote").innerHTML =
      "I have a very long neck, but I AM NO GIRRAF!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/crane.png";
  } else if (name === "master oogway") {
    document.getElementById("char-quote").innerHTML =
      "A wize turtle once said: Slow but steady wins the race!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/oogway.png";
  } else if (name === "viper") {
    document.getElementById("char-quote").innerHTML =
      "I am a snake not a master Oogway!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/viper.png";
  } else if (name === "tai-lung" || name === "thy fusy grey tiger") {
    document.getElementById("char-quote").innerHTML =
      "Gold fists may be Expensive but Iron fist are Strong!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/tai-lung.png";
  } else if (name === "storming-ox") {
    document.getElementById("char-quote").innerHTML = "Be Brave!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/storming-ox.png";
  } else if (name === "soothsayer") {
    document.getElementById("char-quote").innerHTML =
      "The future in a new Begining!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/soothsayer.png";
  } else if (name === "master shifu") {
    document.getElementById("char-quote").innerHTML = "Hone Your Skills!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/shifu.png";
  } else if (name === "master shen") {
    document.getElementById("char-quote").innerHTML =
      "Curiosity KILLED THE PEACOCK!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/shen.png";
  } else if (name === "mr.ping") {
    document.getElementById("char-quote").innerHTML = "The soup is good";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/mr-ping.png";
  } else if (name === "po's dad") {
    document.getElementById("char-quote").innerHTML = "The soup is good";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/mr-ping.png";
  } else if (name === "kai") {
    document.getElementById("char-quote").innerHTML = "Honeur is the Way!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/kai.png";
  } else if (name === "croc") {
    document.getElementById("char-quote").innerHTML =
      "When you cannot eat Hippo, eat the Panda!!!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/croc.png";
  } else if (name === "super secret easter egg") {
    document.getElementById("char-quote").innerHTML =
      "Congradulation your have discover the KFCU character search Super Secret Easter Egg!";
    document.getElementById("char-name").innerHTML =
      "THE SUPER SECRET EASTER EGG";
    document.getElementById("cahr-img").src = "img/easter_egg.webp";
    egg += 1;
  } else {
    console.log(`No, ${name} is not a KFCU Character`);
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am a not KFCU Character!";
    document.getElementById("char-name").innerHTML = "??????????";
    document.getElementById("cahr-img").src = "img/question-mark.png";
  }
  console.log(egg);
}
if (egg > 1) {
  alert("Congrats Pall");
}
