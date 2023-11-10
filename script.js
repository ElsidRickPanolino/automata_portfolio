document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.burger');
    const navigation = document.querySelector('.navigation');
    
    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        navigation.classList.toggle("active");
    })

    document.querySelectorAll(".btnNavigation").forEach(n => n.addEventListener("click", () => {
        burger.classList.remove("active")
        navigation.classList.remove("active")
    }))

// ==================================================


  });

var activePage = 0

function navClick(pageIndex){
    activePage=pageIndex

    var contents = document.querySelectorAll(".cont")
    var navigations = document.querySelectorAll(".btnNavigation")

    navigations.forEach(element => {
        element.classList.remove("activeButton")
    });
    navigations[activePage].classList.add("activeButton")

    contents.forEach(element => {
        element.classList.remove("activeContent")
    });
    contents[activePage].classList.add("activeContent")


    if (activePage > 0){
        document.querySelector(".prev").style="display: initial"
    }
    else{
        document.querySelector(".prev").style="display: none"
    }
    if (activePage < 7){
        document.querySelector(".next").style="display: initial"
    }
    else{
        document.querySelector(".next").style="display: none"
    }
}

function next(){
    if (activePage < 7){
        activePage += 1
    }
    navClick(activePage)
}

function prev(){
    activePage -= 1
    navClick(activePage)
}