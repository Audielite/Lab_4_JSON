/* Lab 4, Part 1 - write the code requested by lines marked //TODO  */


/* a. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */

var rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
};

// TODO add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates["CHF"] = 1.1787;
// TODO if you had 100 Euros, calculate the equivalent value in Australian Dollars (AUD)
var swiss = rates.CHF;
var eur = 100;
var total = eur / swiss;
console.log('Here is the equivalent value of €100 in Australian Dollars ' + total + '.');
console.log('And here is the rounded amount ' + Math.round(total) + '.');
console.log('');
// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.
//I was struggling with this one.
for (i in rates) {
  if (rates[i] > 2.0) {
    console.log(i);
  }
}

console.log('');

if ("CHF" in rates){
  console.log("The \"CHF\" is in rates.");
}
else{
  console.log("It is not in rates");
}

console.log(rates);
console.log('');

/* b. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th, fetched from http://api.open-notify.org/iss-now.json.
 */

var iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
};

// TODO Extract the latitude value, and log it to the console.
// TODO Extract the longitude value, and log it to the console.

console.log(iss_location.iss_position.latitude);
console.log(iss_location.iss_position.longitude);
console.log('');

/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

var cats_and_owners = [
  { name: 'Bill Clinton', cat : 'Socks' },
  { name: 'Gary Oldman', cat : 'Soymilk' },
  { name: 'Katy Perry', cat : 'Kitty Purry' },
  { name: 'Snoop Dogg', cat : 'Miles Davis' }
];

// TODO print Gary Oldman's cat's name
  for (pet in cats_and_owners){
    f = cats_and_owners[pet, 1].cat;
    p = cats_and_owners[pet, 1].name;
}
console.log('The actor ' + p + ' has a cat named ' + f + '.');
console.log('');
// TODO Taylor Swift's cat is called  'Meredith'. Add this data to the array.
cats_and_owners.push({
  'name':'Taylor Swift', 'cat':'Meredith'
})
console.log(cats_and_owners);
console.log('');
// TODO write a loop to print each cat owner, and their cat's name, one per line
for (var i in cats_and_owners){
console.log(cats_and_owners[i].cat);
}
console.log('');
/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

var nobel_prize_winners_2017 = {
  "prizes":[
    {
      "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        },
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        },
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        }
      ]
    },
    {
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        }
      ]
    },
    {
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        }
      ]
    },
    {
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"
        }
      ]
    }
  ]
};

// TODO print the full name of the Literature Nobel laureate.
for (var v in nobel_prize_winners_2017) {
  console.log(nobel_prize_winners_2017.prizes[0].laureates[0].firstname, nobel_prize_winners_2017.prizes[0].laureates[0].surname);
}
// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
for (var y in nobel_prize_winners_2017) {
  console.log(nobel_prize_winners_2017.prizes[0].laureates[0].id);
}
// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
for (var z in nobel_prize_winners_2017) {
  console.log(nobel_prize_winners_2017.prizes[0].category);
}
// TODO write code to print the total number of prize categories
// TODO write code to count the total number of laureates from 2017. (have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.)
