const hamburgerMenu = document.querySelector(".ri-menu-line")
const navLinks = document.querySelector(".nav-links")
const navbarCont = document.getElementById("navbar-content")
const modalBg = document.querySelector(".background-modal")



hamburgerMenu.addEventListener("click", function(){
  

  if( navLinks.style.display === "flex"){
    navLinks.style.display = "none"
    navbarCont.style.removeProperty("height")
    document.body.classList.remove('stop-scrolling')
    
    
    
  } else{
    navLinks.style.display = "flex"
    navbarCont.style.height = "100vh"
    document.body.classList.add('stop-scrolling')

    
  } 
  
  
})

navLinks.addEventListener("click", function(){
  if( navLinks.style.display === "flex"){
    navLinks.style.display = "none"
    navbarCont.style.removeProperty("height")
    document.body.classList.remove('stop-scrolling')
    
    
    
  }
})




 
function imgEnlarge(imgId){
 /* let allImg= document.querySelectorAll(".aboutus-img ")
  for(let i=0; i< allImg.length;i++){
    if(allImg[i].classList.contains("img-enlarged")){
      console.log('Found mf!')
      allImg[i].classList.remove("img-enlarged")
    }
    
   
  }
  
  
*/
  const width= window.innerWidth

  if(width >=1700){
    let clickedImg=document.getElementById(imgId)
  

    if(clickedImg.classList.contains("img-enlarged")){
      clickedImg.classList.remove("img-enlarged")
      modalBg.style.display = "none"
     
      
    }else{
      clickedImg.classList.add("img-enlarged")
      modalBg.style.display = "block"
      disableScroll();
      
      

      
     
    }
  }

} 

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
  

