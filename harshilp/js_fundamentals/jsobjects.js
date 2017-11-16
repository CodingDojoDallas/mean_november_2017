let students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
];

for (let i = 0; i < students.length; i++) {
    var name = students[i].name
    var cohort = students[i].cohort
    console.log(`Name: ${name}, Cohort: ${cohort}`)
}    

let users = {
    employees: [
        { 'first_name': 'Miguel', 'last_name': 'Jones' },
        { 'first_name': 'Ernie', 'last_name': 'Bertson' },
        { 'first_name': 'Nora', 'last_name': 'Lu' },
        { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        { 'first_name': 'Lillian', 'last_name': 'Chambers' },
        { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};

for (let role in users) {
    console.log(role.toUpperCase());
    for (let i = 0; i < users[role].length; i++) {
        for (let key in role[i]) {
            var count = i + 1;
            var ln = users[role][i].last_name.toUpperCase();
            var fn = users[role][i].first_name.toUpperCase();
            var len = ln.length + fn.length;
            console.log(`${count} - ${ln}, ${fn} - ${len}`)
        }
    }
}
