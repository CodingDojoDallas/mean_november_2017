  // CHALLENGE 1
    let students = [
      {name: 'Remy', cohort: 'Jan'},
      {name: 'Genevieve', cohort: 'March'},
      {name: 'Chuck', cohort: 'Jan'},
      {name: 'Osmund', cohort: 'June'},
      {name: 'Nikki', cohort: 'June'},
      {name: 'Boris', cohort: 'June'}
    ];
    for (let i = 0; i < students.length; i++) {
      console.log("Name: " + students[i].name + ", " + "Cohort: " + students[i].cohort)
    }
  // CHALLENGE 2
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
    for (let i in users) {
        console.log(i+":")
        for (let x=0; x < users[i].length; x++){
          let count = users[i][x].first_name.length+users[i][x].last_name.length
          console.log(x+1+" - "+users[i][x].first_name+", "+users[i][x].last_name+" - "+count)
        }
    }
