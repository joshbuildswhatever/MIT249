let list = document.querySelectorAll('.list');
let models = document.querySelectorAll('.models');

for(let i = 0; i<list.length; i++){
	list[i].addEventListener('click', function(){
		for(let j = 0; j<list.length; j++){
			list[j].classList.remove('active');
		}
		this.classList.add('active');
		
		let dataFilter = this.getAttribute('data-filter');
		
		for(let k = 0; k<models.length; k++){
			models[k].classList.remove('active');
			models[k].classList.add('hide');
			
			if(models[k].getAttribute('data-item') == dataFilter || dataFilter =="all"){
				models[k].classList.remove('hide');
				models[k].classList.add('active');
			}
		}
		
	})
}
