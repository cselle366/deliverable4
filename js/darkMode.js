
document.querySelector("#theme-toggle").addEventListener("click", function(){

    console.log("checked"); 
    console.log(this.checked);
    if (this.checked) {
        document.querySelector("body").classList.add('dark-mode');
    } else {
        document.querySelector("body").classList.remove('dark-mode');
    }


})