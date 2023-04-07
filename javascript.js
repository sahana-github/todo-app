let input_box = document.getElementById("todoinput");
let addTask=document.getElementById("addtaskbtn");
let savebtn=document.getElementById("savetodobtn");

// lets make something that show input's value in console log for exampl

// first make a function
function UserInput(){
    localStorage.clear();
    localStorage.setItem("todo",input_box.value);
    console.log("from func\n" + input_box.value);
    
 
    // this will show the value of input the txet in input ok ?ok
}

//now jab bhi btn par click hoga to userinput chalega
