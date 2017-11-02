$.get("https://api.github.com/users/Shivi7434", displayName)
// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)

function displayName(data){
    if (data.name){
      $('body').append("<p>"+data.name+"</p>");
    }
  }