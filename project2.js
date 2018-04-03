var names = [
  "Mr. Fahri",
  "Mr. Abdul",
  "Mrs. Josephine",
  "Mr. Joseph",
  "Mr. Paul",
  "Mrs. Paula",
  "Mr. Hakim"
];
var text = "";
names.forEach(function(list) {
  text += list + "\n";
});

console.log(text);


console.log("Level 1");
let male = names.filter(word => word.startsWith("Mr."));
male.forEach(function(male) {
  console.log(male + " (male)");
})


console.log("Level 2");
let female = names.filter(word => word.startsWith("Mrs."));
female.forEach(function(female) {
  console.log(female + " (female)");
})

console.log("Level 3");

function search_name(nameList) {
  var found = names.find(word => word.includes(nameList));
  return find;
}

console.log(search_name('Fahri'));

console.log("Level 4");


let combinedNames = male.concat(female);
console.log(combinedNames);

console.log("Level 5");


var newNames = [ "Mr. Fahri", null, undefined, "Mr. Abdul", 24, "Mrs. Josephine", "Mr. Joseph",
"Mr. Paul", 32, "Mrs. Paula", 7, 22, "Mr. Hakim"];

var newNames2 = [];

newNames.forEach(function (item){
  if (typeof item == "string"){
  newNames2.push(item)
  }
})

console.log(newNames2);
