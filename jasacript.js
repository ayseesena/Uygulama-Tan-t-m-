const my_list=document.querySelector(".my_list");

const button=document.querySelector("#menu_btn");

button.addEventListener("click", function(){
    my_list.classList.toggle("active");
    document.addEventListener("click", function (e){
        if(
            !e.composedPath().includes(button) &&  
            !e.composedPath().includes(my_list)
        ){
            my_list.classList.remove("active");
        }
    });



});