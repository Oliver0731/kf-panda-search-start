// KF Panda Search

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let name = document.getElementById("char-in").value;

  //if statement - test th inout
  if (name === "Po") {
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/po.png";
  } else if (name === "Tigress") {
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the Tiger Warrior!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/tigress.png";
  } else if (name === "Mantis") {
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the Preying mantis Warrior!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/mantis.png";
  } else if (name === "Monkey") {
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the monkey Warrior!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/monkey.png";
  } else if (name === "Boss Wolf") {
    document.getElementById("char-quote").innerHTML = "I am an evil bad guy!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/boss-wolf.png";
  } else if (name === "Crane") {
    document.getElementById("char-quote").innerHTML =
      "I have a very long neck, but I AM NO GIRRAF!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/crane.png";
  } else if (name === "Master Oogway") {
    document.getElementById("char-quote").innerHTML =
      "A wize turtle once said: Slow but steady wins the race!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/oogway.png";
  } else if (name === "Viper") {
    document.getElementById("char-quote").innerHTML =
      "I am a snake not a master Oogway!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/viper.png";
  } else if (name === "Tai-Lung") {
    document.getElementById("char-quote").innerHTML =
      "Gold fists may be Expensive but Iron fist are Strong!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/tai-lung.png";
  } else if (name === "Storming-Ox") {
    document.getElementById("char-quote").innerHTML = "Be Brave!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/storming-ox.png";
  } else if (name === "Soothsayer") {
    document.getElementById("char-quote").innerHTML =
      "The future in a new Begining!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/soothsayer.png";
  } else if (name === "Master Shifu") {
    document.getElementById("char-quote").innerHTML = "Hone Your Skills!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/shifu.png";
  } else if (name === "Master Shen") {
    document.getElementById("char-quote").innerHTML =
      "Curiosity KILLED THE PEACOCK!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/shen.png";
  } else if (name === "Mr.Ping") {
    document.getElementById("char-quote").innerHTML = "The soup is good";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/mr-ping.png";
  } else if (name === "Po's Dad") {
    document.getElementById("char-quote").innerHTML = "The soup is good";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/mr-ping.png";
  } else if (name === "Kai") {
    document.getElementById("char-quote").innerHTML = "Honeur is the Way!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/kai.png";
  } else if (name === "Croc") {
    document.getElementById("char-quote").innerHTML =
      "When you cannot eat Hippo, eat the Panda!!!";
    document.getElementById("char-name").innerHTML = name;
    document.getElementById("cahr-img").src = "img/croc.png";
  } else {
    console.log(`No, ${name} is not a KFCU Character`);
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am a not KFCU Character!";
    document.getElementById("char-name").innerHTML = "??????????";
    document.getElementById("cahr-img").src = "img/question-mark.png";
  }
}
