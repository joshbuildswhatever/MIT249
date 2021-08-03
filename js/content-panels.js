let thumbnails = document.getElementsByClassName('thumbnail');
let activeImages = document.getElementsByClassName('active');

for (var i=0; i < thumbnails.length; i++){
	
	thumbnails[i].addEventListener('mouseover', function(){
		
		if (activeImages.length > 0){
			activeImages[0].classList.remove('active')
		}
		
		this.classList.add('active')
		document.getElementById('featured').src = this.src
	})
}

let buttonLeft = document.getElementById('slideLeft');
let buttonRight = document.getElementById('slideRight');

	buttonLeft.addEventListener('click', function() {
		document.getElementById('slider').scrollLeft -= 180
	})
	buttonRight.addEventListener('click', function() {
		document.getElementById('slider').scrollLeft += 180
	})