// KF Panda Search

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let name = document.getElementById("char-in").value;

  //if statement - test th inout
  if (name === "Po") {
    console.log("Yes, Po is a KF Panda Character");
    document.getElementById("char-name").innerHTML = name;
  } else if (name === "Tigress") {
    console.log(`yes, Tigress  is not a KF Panda character.`);
    document.getElementById("char-name").innerHTML = name;
  } else if (name === "Mantis") {
    console.log("Yes, Mantis is a KF character.");
    document.getElementById("char-name").innerHTML = name;
  } else if (name === "Monkey") {
    console.log("Yes, Monkey is a KF character.");
    document.getElementById("char-name").innerHTML = name;
  } else {
    console.log(`No, ${name} is not a KFCU Character`);
  }
}
