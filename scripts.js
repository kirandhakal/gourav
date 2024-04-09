

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/* its css

.main{
  margin-top: 20vh;
    padding: 30px;
 display: flex;
    width: 100dvw;
  justify-content: end;
  align-items: end;
  
}
.main>img{
    width: 400px;
  transform:perspective(700px) rotatey(30deg)
}
.main>img:hover{
  width: 400px;
  transform:perspective(700px) rotatey(-30deg)

}

.text{
    width: 300px;
    height: 300px;
  font-style: normal;
    margin-top: 300px;
    text-align: center;
    
}
#footer{
  margin-top: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
 font-size: 20px;
  text-align:center;
height: 40px;
}


/* @media screen and (max-width: 600px){
   
    #footer{
      margin-top: 90%;
      max-height: 20px;
      font-size: 1rem;
    }
} */
// slide show w3school
