const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const slides = document.querySelectorAll(".slide");

console.log(slides.length);

let index = 0;
function nextslide() {
    index++;
    if(index>slides.length-1){
        index = 0;
    }
    slides.forEach((s)=>{
        s.style.display = 'none';
    });
    console.log(index);
    slides[index].style.display = 'block';
}
function prevslide() {
    index--;
	if(index<0){
     index = slides.length-1;
	}
	slides.forEach((s) => {
		s.style.display ='none';
	});
    console.log(index);
    slides[index].style.display ='block';
}
next.addEventListener('click',nextslide);
previous.addEventListener('click',prevslide);
