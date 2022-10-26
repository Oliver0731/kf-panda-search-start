// KF Panda Search
//HTML variables
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
var egg = +1;
console.log(egg);

function btnClicked() {
  let name = document.getElementById("char-in").value.toLowerCase();

  //if statement - test th inout
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!";
    charNameEl.innerHTML = name;
    document.getElementById("cahr-img").src = "img/po.png";
  } else if (name === "tigress" || name === "kung fu tiger") {
    charQuoteEl.innerHTML = "Buddy, I am the Tiger Warrior!";
    charNameEl.innerHTML = name;
    document.getElementById("cahr-img").src = "img/tigress.png";
  } else if (name === "mantis" || name === "small but deadly") {
    charQuoteEl.innerHTML = "Buddy, I am the Preying mantis Warrior!";
    charNameEl.innerHTML = name;
    document.getElementById("cahr-img").src = "img/mantis.png";
  } else if (name === "monkey") {
    charQuoteEl.innerHTML = "Buddy, I am the monkey Warrior!";
    charNameEl.innerHTML = name;
    document.getElementById("cahr-img").src = "img/monkey.png";
  } else if (name === "boss wolf") {
    charQuoteEl.innerHTML = "I am an evil bad guy!";
    charNameEl.innerHTML = name;
    document.getElementById("cahr-img").src = "img/boss-wolf.png";
  } else if (name === "crane") {
    charQuoteEl.innerHTML = "I have a very long neck, but I AM NO GIRRAF!";
    charNameEl.innerHTML = name;
    document.getElementById("cahr-img").src = "img/crane.png";
  } else if (name === "master oogway") {
    charQuoteEl.innerHTML =
      "A wize turtle once said: Slow but steady wins the race!";
    charNameEl.innerHTML = name;
    document.getElementById("cahr-img").src = "img/oogway.png";
  } else if (name === "viper") {
    charQuoteEl.innerHTML = "I am a snake not a master Oogway!";
    charNameEl.innerHTML = name;
    document.getElementById("cahr-img").src = "img/viper.png";
  } else if (name === "tai-lung" || name === "thy fusy grey tiger") {
    charQuoteEl.innerHTML =
      "Gold fists may be Expensive but Iron fist are Strong!";
    charNameEl.innerHTML = name;
    document.getElementById("cahr-img").src = "img/tai-lung.png";
  } else if (name === "storming-ox") {
    charQuoteEl.innerHTML = "Be Brave!";
    charNameEl.innerHTML = name;
    document.getElementById("cahr-img").src = "img/storming-ox.png";
  } else if (name === "soothsayer") {
    charQuoteEl.innerHTML = "The future in a new Begining!";
    charNameEl.innerHTML = name;
    document.getElementById("cahr-img").src = "img/soothsayer.png";
  } else if (name === "master shifu") {
    charQuoteEl.innerHTML = "Hone Your Skills!";
    charNameEl.innerHTML = name;
    document.getElementById("cahr-img").src = "img/shifu.png";
  } else if (name === "master shen") {
    charQuoteEl.innerHTML = "Curiosity KILLED THE PEACOCK!";
    charNameEl.innerHTML = name;
    document.getElementById("cahr-img").src = "img/shen.png";
  } else if (name === "mr.ping") {
    charQuoteEl.innerHTML = "The soup is good";
    charNameEl.innerHTML = name;
    document.getElementById("cahr-img").src = "img/mr-ping.png";
  } else if (name === "po's dad") {
    charQuoteEl.innerHTML = "The soup is good";
    charNameEl.innerHTML = name;
    document.getElementById("cahr-img").src = "img/mr-ping.png";
  } else if (name === "kai") {
    charQuoteEl.innerHTML = "Honeur is the Way!";
    charNameEl.innerHTML = name;
    document.getElementById("cahr-img").src = "img/kai.png";
  } else if (name === "croc") {
    charQuoteEl.innerHTML = "When you cannot eat Hippo, eat the Panda!!!";
    charNameEl.innerHTML = name;
    document.getElementById("cahr-img").src = "img/croc.png";
  } else if (
    name === "super secret easter egg" ||
    name === " maine frame" ||
    name === "hacking nasa"
  ) {
    charQuoteEl.innerHTML =
      "Congradulation your have discover the KFCU character search Super Secret Easter Egg!";
    charNameEl.innerHTML = "THE SUPER SECRET EASTER EGG";
    document.getElementById("cahr-img").src = "img/easter_egg.webp";
    egg += 1;
  } else {
    console.log(`No, ${name} is not a KFCU Character`);
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am a not KFCU Character!";
    charNameEl.innerHTML = "??????????";
    document.getElementById("cahr-img").src = "img/question-mark.png";
  }
  console.log(egg);
}
if (egg === 2) {
  console.log("congradulations");
}
