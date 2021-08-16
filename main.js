
var people = [];

function Adding(){
var guest = document.getElementById("add_guest").value;
people.push(guest);
}

function Sorting(){
    people.sort();
    document.getElementById("display_name").innerHTML = people;

}

function Show(){
 document.getElementById("display_sort").innerHTML = people;

}

function Searching(){

 var name = document.getElementById("s1").value;
 var found = 0;
 for (var j=0; j<people.length;j++){
       
    if (name==people[j]){
        found = found+1;
    }

 }

document.getElementById("search").innerHTML = found +" Times Name Found in the list";

}
