var array = [42];

var selection = d3.selectAll("body").selectAll("h2");
console.log(selection);

var numbers = [4, 5, 18, 23, 42];
selection = d3.selectAll("div").data(numbers);
console.log(selection);

var letters = [
  {name: "A", frequency: .08167},
  {name: "B", frequency: .01492},
  {name: "C", frequency: .02780},
  {name: "D", frequency: .04253},
  {name: "E", frequency: .12702}
];

function name(d) {
  return d.name;
}
selection = d3.selectAll("div").data(letters, name);
console.log(selection);

var vowels = [
  {name: "Y", frequency: .08167},
  {name: "E", frequency: .01492},
  {name: "A", frequency: .02780},
  {name: "O", frequency: .04253},
  {name: "I", frequency: .12702}
];
var div = d3.selectAll("div").data(vowels, name);
console.log(div);
console.log(div.exit());
console.log(div.enter());
