var superHeroes = {
      "squadName" : "Super hero squad",
      "homeTown" : "Metro City",
      "formed" : 2016,
      "secretBase" : "Super tower",
      "active" : true,
      "members" : [
        {
          "name" : "Molecule Man",
          "age" : 29,
          "secretIdentity" : "Dan Jukes",
          "powers" : [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
          ]
        },
        {
          "name" : "Madame Uppercut",
          "age" : 39,
          "secretIdentity" : "Jane Wilson",
          "powers" : [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
          ]
        },
        {
          "name" : "Eternal Flame",
          "age" : 1000000,
          "secretIdentity" : "Unknown",
          "powers" : [
            "Immortality",
            "Heat Immunity",
            "Inferno",
            "Teleportation",
            "Interdimensional travel"
          ]
        }
      ]
    }

//try this on the console
//superHeroes.homeTown // "Metro City"
//superHeroes['active'] // true
//superHeroes['members'][1]['powers'][2] // "Superhuman reflexes"

//NOTES
// JSON is purely a data format — it contains only properties, no methods.
// JSON requires double quotes to be used around strings and property names. Single quotes are not valid.
// Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. You should be careful to validate any data you are attempting to use (although computer-generated JSON is less likely to include errors, as long as the generator program is working correctly). You can validate JSON using an application like JSONLint.
// JSON can actually take the form of any data type that is valid for inclusion inside JSON, not just arrays or objects. So for example, a single string or number would be a valid JSON object.
// Unlike in JavaScript code in which object properties may be unquoted, in JSON, only quoted strings may be used as properties.