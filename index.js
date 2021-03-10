var inpuser = document.getElementById("inpuser");
var inppwd = document.getElementById("inppwd");
var btnsub = document.getElementById("btnsub");
var btncancel = document.getElementById("btncancel");
var hiddenArea = document.getElementById("hidden");
var formValidation = document.getElementById("formValidation");


btnsub.addEventListener("click", function(e){
    e.preventDefault();

    if (inpuser.value === "benrobo" && inppwd.value == "benrobo123") {
        hiddenArea.style.visibility = "visible";
        formValidation.style.visibility = "hidden";
        inppwd.style.border = "2px solid blue";
        inpuser.style.border = "2px solid blue";
    }else{
        inppwd.style.border = "2px solid red";
        inpuser.style.border = "2px solid red";
    }

    if (inpuser.value == "" && inppwd.value == "") {
        inppwd.style.border = "none";
        inpuser.style.border = "none";
       
    } else {
        
    }
})

btncancel.addEventListener("click", function(e){
  formValidation.style.visibility = "hidden";
window.setTimeout(showMe, 1000);
function showMe(){
    alert("refresh to get form back")
}
})


 

inpuser.addEventListener("input", function(e){
    e.preventDefault();

    if (inpuser.value === "benrobo" && inppwd.value == "benrobo123") {
       
        inppwd.style.border = "2px solid blue";
        inpuser.style.border = "2px solid blue";
    }else{
        inppwd.style.border = "2px solid red";
        inpuser.style.border = "2px solid red";
    }

})
inppwd.addEventListener("input", function(e){
    e.preventDefault();

    if (inpuser.value === "benrobo" && inppwd.value == "benrobo123") {
       
        inppwd.style.border = "2px solid blue";
        inpuser.style.border = "2px solid blue";
    }else{
        inppwd.style.border = "2px solid red";
        inpuser.style.border = "2px solid red";
    }

})



