// var printstuff = function(stuff){   // function with no name or anonymus can be assigned to variable 
//     console.log(stuff);
// // }


// function mainfunction(anotherfunction,value){
//     anotherfunction(value);
// }
// mainfunction(function(stuff){console.log(stuff);},"Cities 5252"); // can pass above fuction to another function as parameter.


// global objects and timers


// console.log(__filename);  // represents file execusion
// console.log(__dirname);    // represents directory of the file bieng executed 

// function printstuff (){
//     console.log(" This is setTimeout")
// }
// setTimeout(printstuff,5000)
// setInterval(printstuff,2000)

// sequensuel execution


// callback function helps //to deliver data to all users at sametime instead of one by one that would really complicate things 
// console.log("User 1 made a request");
// setTimeout(callback,5000);

// console.log("User 2 made a request");
// setTimeout(callback,5000);

// console.log("User 3 made a request");
// setTimeout(callback,5000);



// function callback(){
//     console.log("Queried the database and delivered data in 5 seconds")
// }

// array.forEach(function(item){

// })
// console.log('after')   // this will run sycronuslly right after the function


// setTimeout(function() {
//     console.log('1sec later')
// }, 1000)
// console.log('first')


// function getStuffFromDatabase(callback){
//     var data;
//     var myTimer = setTimeout(function(){
//       if (typeof(callback) == 'function'){
//         //it just got back from the DB!
//         data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
//         callback(data);
//       }
//     }, 5000);
//     // it takes 10 seconds to get anything back <- you should fix your cloud server.!!!
//     return data;
   
  //simulated request (failing);
//   function requestDataFromDatabase(){
//     var data = getStuffFromDatabase(); // this should return my data right??
//     console.log(data);
//   }
//   function catchFly(){
//     console.log('I just caught a fly!');
//   }
//   requestDataFromDatabase();
//   // keep running my program!
//   console.log('Hello');
//   catchFly();

//simulated really slow DB call.
// function getStuffFromDatabase(callback){
//     var data;
//     var myTimer = setTimeout(function(){
//       if (typeof(callback) == 'function'){
//         data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
//         callback(data);
//       }
//     }, 10000);
//     return data;
//   }    
//   // ************CHANGES HERE **************
//   function requestDataFromDatabase(){
//     var data = getStuffFromDatabase(function myCallback(data){ // ooh shiny callback!.. when is it invoked???
//       console.log(data, "ASynchronous");
//       for (var i = 0; i < data.length; i ++){
//         console.log(data[i].name);
//       }
//     });
//     console.log(data, "Synchronous");
//   }
//   //***************** END CHANGES **********************
//   function catchFly(){
//     console.log('I just caught a fly!');
//   }
//   requestDataFromDatabase();
//   // keep running my program!
//   console.log('Hello');
//   catchFly();
//   //etc.





































