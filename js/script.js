/**************ВЫПАДАЮЩЕЕ МЕНЮ***************/
let hamburger = document.querySelector('.hamburger'),
	line1 = document.querySelector('.line1'),
	line2 = document.querySelector('.line2'),
	line3 = document.querySelector('.line3'),
	hamburgerMenu = document.querySelector('.hamburger__list'),
	hamburgerList = document.querySelectorAll('.hamburger__list-item');
function liActive(){
	hamburgerMenu.classList.toggle('hamburger__list_active');
}

function burgerAnim() {
	line1.classList.toggle('line1_active');
	line2.classList.toggle('line2_active');
	line3.classList.toggle('line3_active');
	setTimeout(liActive,10);	
}
hamburger.addEventListener('click', burgerAnim);


/******************ТРЕНЕРЫ ЛИСТАТЬ**************************/


let slider = document.querySelector('.trainers__slider'),
	leftButton = document.querySelector('.trainers__button-left'),
	rightButton = document.querySelector('.trainers__button-right'),
	cardItem = document.querySelectorAll('.trainers__card-item'),	
	total = 0;
	
function left(){
	let sliderWidth = (cardItem[0].clientWidth) * (cardItem.length); //Ширина блока слай
	let cardWidth =	slider.clientWidth; //ширина окна пользователя
	let animWidth = cardWidth - sliderWidth;
		if (total >= 0) {
			total = animWidth - 150;
		}else {
			total += cardItem[0].clientWidth;
		}
	slider.style.transform = 'translateX(' + total + 'px)';	
}

function right(){
	let sliderWidth = (cardItem[0].clientWidth) * (cardItem.length);
	let cardWidth =	slider.clientWidth;
	let animWidth = cardWidth - sliderWidth;
		if (total > animWidth) {
			total -= cardItem[0].clientWidth;
		}else{
			total = 0;
		}
	slider.style.transform = 'translateX(' + total + 'px)';	
}	

leftButton.addEventListener('click', left);
rightButton.addEventListener('click',right);




          /***********УСЛУГИ ФОТО ЛИСТАТЬ*************/


let servicesCard = document.querySelector('.services__card'),
    servicesCardImages = [],
    servicesCardTextAll = [],
    servicesButtonLeft = document.querySelector('.services__button-left'),
    servicesButtonRight = document.querySelector('.services__button-right'),
    servicesCardText = document.querySelector('.services__card-text'),
    servicesTotal = 0;

	servicesCardImages[0] = 'url(img/main/services1.png)';
	servicesCardTextAll[0] = 'Уютное кафе';
	servicesCardImages[1] = 'url(img/main/services2.png)';
	servicesCardTextAll[1] = 'Бильярд';
	servicesCardImages[2] = 'url(img/main/services3.png)';
	servicesCardTextAll[2] = 'Термальный комплекс';

function servicesRight(){
	if(servicesTotal < servicesCardImages.length - 1){
		servicesTotal++;		
	}else{
		servicesTotal = 0;
	}
	servicesCard.style.background = servicesCardImages[servicesTotal];
	servicesCardText.innerHTML = servicesCardTextAll[servicesTotal];
}
function servicesLeft(){
	if(servicesTotal == 0){
		servicesTotal = servicesCardImages.length - 1;		
	}else{
		servicesTotal--;
	}
	servicesCard.style.background = servicesCardImages[servicesTotal];
	servicesCardText.innerHTML = servicesCardTextAll[servicesTotal];
}
servicesButtonRight.addEventListener('click', servicesRight);
servicesButtonLeft.addEventListener('click', servicesLeft);















