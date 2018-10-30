var person = [
    {name: "Alice", age: 40, gender: "Female", children: true},
    {name: "Bob", age: 10, gender: "Male", children: false},
    {name: "Chris", age: 20, gender: "Male", children: true},
    // Initialize array
];

//Add entries with person.push()

person.push({name: "Denise", age: 20, gender: "Female", children: false});


// Function - Sort youngest to oldest

var ageSort = person.sort(function(a, b){
    return a.age - b.age;
});

console.log(ageSort);


// Function - Print age when given name

function printAge(name){
    for(let i = 0; i < person.length; i++)
        if(name == person[i].name)
            return person[i].age;

};

console.log(printAge("Alice"));


// Function - Print name(s) when given age

function printNames(age){
    let nameList = [];
    for(let i = 0; i < person.length; i++)
        if(age == person[i].age)
            nameList.push(person[i].name);
            return nameList;
};

console.log(printNames(20));


// Function - General

function genFunc (filter, eval){

    for(let i = 0; i < person.length; i++)
        if(filter > person[i].age)
            console.log(person[i].name + " is " + eval);
};

genFunc(30, "Young");