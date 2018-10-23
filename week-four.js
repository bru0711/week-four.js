var Person = 
[
    {name: "Alice", age: 30, gender: "Female", children: true},
    {name: "Bob", age: 20, gender: "Male", children: false},
    {name: "Chris", age: 20, gender: "Male", children: true}
    // Initialize array
];

// Add entries with Person.push()?


// Function - Print age when given name

var printAge = function(Name)
{
    let i;
    for(i = 0; i <= Person.length-1; i++)
        if(Name == Person[i].name)
            return Person[i].age;

};


// Function - Print name(s) when given age

var printNames = function(Age)
{
    let nameList = [];
    let i;
    for(i = 0; i <= Person.length-1; i++)
        if(Age == Person[i].age)
            nameList.push(Person[i].name);
            return nameList;
};


console.log(printAge("Alice"));
console.log(printNames(20));