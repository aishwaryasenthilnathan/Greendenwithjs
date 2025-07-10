var sidenav = document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")
menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
     sidenav.style.right="-50%"
})

var procontainer = document.getElementById("procontainer")
var search=document.getElementById("search")
var productlist = procontainer.querySelectorAll("div")
search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
    for(i=0;i<productlist.length;i=i+1)
        {
        var productname =productlist[i].querySelector("h1").textContent
         
        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[i].style.display="none"
        }else{
            productlist[i].style.display="block"
        }
    }
})   
