<html>
<body>
    <h1>Students</h1>
    <ul id="main">
        <!-- this is empty-->
    </ul> 
<script>
    function appendList(array, id){
        // finish this function
    };
    let students = ["Jeff", "Jenny", "Javier", "Joslyn", "Joe", "Jane", "Django"];
    let target_id = "main";
    appendList(students, target_id);
</script>   
</body>
</html>

<html>
<body>
    <ol id="fruit">
        <li>Bananas</li>
        <li>Oranges</li>
        <li>Apples</li>
    </ol>
<script>
    let new_fruit = document.createElement("li");
    // create an empty li
    new_fruit.innerHTML = "Pears";
    // modify its innerHTML content with the a string
    document.getElementById("fruit").appendChild(new_fruit);
    // append our new DOM element to the id 'fruit'
</script>   
</body>
</html>