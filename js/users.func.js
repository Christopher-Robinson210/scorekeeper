//Controls what to do when "login" is clicked
function login(uname){
    if (formatCheck(uname) == true)
        alert("Logged in as " +uname);  //Placeholder
}

//Controls what to do when "Sign Up" is clicked
function registerUser(uname){
    if (formatCheck(uname) == true)
        alert("User " +uname+ " is now registered");
}

//check that something was entered into the textbox
function formatCheck(str){
    if (str.length == 0 || str == ""){
        alert("Please input a Username");   //Placeholder
        return false;
    }
    else{
        return true;
    }
}
