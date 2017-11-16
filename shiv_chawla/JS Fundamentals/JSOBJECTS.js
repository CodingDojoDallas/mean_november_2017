/* let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(i = 0; i < students.length; i++){
    console.log("name:",students[i].name + ", cohort:",students[i].cohort);
} */

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

 for (i in users){
     console.log(i);
        for (var x = 0;x < users[i].length; x++){
            count = (users[i][x].last_name + users[i][x].first_name).length;
            console.log((x+1) + " - " + users[i][x].last_name + ", " + users[i][x].first_name + " - " + count);
        }
 }