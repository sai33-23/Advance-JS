function Alien(name, tech) {
  this.name = name;
  this.tech = tech;
  this.work = function () {
    console.log("solving the problems");
  };
}
let alien1 = new Alien("sai", "js");
let alien2 = new Alien("siddharth", "python");
alien1.tech = "Blockchain";
console.log(alien);
