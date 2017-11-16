let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(let i = 0; i < students.length; i++){
    console.log("Name: " + students[i].name + "   Cohort: " + students[i].cohort);
}
console.log("\n");

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

let keys = Object.keys(users);
let id = 1;

for(let i = 0; i < keys.length; i++){
    console.log(keys[i].toUpperCase());
    for(let j = 0; j < users[keys[i]].length; j++){
        first_name = users[keys[i]][j]['first_name']
        last_name = users[keys[i]][j]['last_name'];
        console.log(id + " - " + last_name.toUpperCase() + ", " + first_name.toUpperCase() + " - " + parseInt(last_name.length + first_name.length));
        id++;
    }
    id = 1;
}