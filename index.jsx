const carouselContainer = document.querySelector('.carousel-container')
const carouselItems = document.querySelectorAll('.carousel-item')
const prevButton = document.querySelector('#main-carousel-prev')
const nextButton = document.querySelector('#main-carousel-next')
const carouselTrackerItems = document.querySelectorAll('.carousel-tracker-item')

let currentIndex = 0;
let currentProductIndex = 0;
let currentImageIndex = 0;
const setActiveItem = (index)=>{
    carouselItems[currentIndex].classList.remove('carousel-active')
    carouselItems[index].classList.add('carousel-active')
    carouselTrackerItems[currentIndex].classList.remove('tracker-active')
    carouselTrackerItems[index].classList.add('tracker-active')
    currentIndex = index;
}

prevButton.addEventListener('click',()=>{
    const index = currentIndex === 0? carouselItems.length -1: currentIndex-1;
    setActiveItem(index)
    carouselContainer.scrollTo({
        left: carouselItems[index].offsetLeft,
        behavior: "smooth"
    }
    )
});
nextButton.addEventListener('click', ()=>{
    const index = currentIndex === carouselItems.length -1? 0: currentIndex +1;
    setActiveItem(index)
    carouselContainer.scrollTo({
        left: carouselItems[index].offsetLeft,
        behavior: "smooth"
    })
});

const productCarouselContainer = document.querySelector('.product-carousel-container');
const productCarouselItems = document.querySelectorAll('.product-carousel-item');
const productPrevButton = document.querySelector('#product-carousel-prev');
const productNextButton = document.querySelector('#product-carousel-next');
const productCarouselTrackerItems = document.querySelectorAll('.product-carousel-tracker-item')

const setActiveProduct = (index)=>{
    productCarouselItems[currentProductIndex].classList.remove('product-active');
    productCarouselItems[index].classList.add('product-active');
    productCarouselTrackerItems[currentProductIndex].classList.remove('tracker-active')
    productCarouselTrackerItems[index].classList.add('tracker-active')
    currentProductIndex = index;
}

productPrevButton.addEventListener('click', ()=>{
    const index= currentProductIndex === 0 ? productCarouselItems.length-1: currentProductIndex-1;
    setActiveProduct(index)
    productCarouselContainer.scrollTo({
        left: productCarouselItems[index].offsetLeft,
        behaviour: "smooth"
    })
})
productNextButton.addEventListener('click', ()=>{
    const index = currentProductIndex === productCarouselItems.length-1 ? 0 : currentProductIndex+1;
    setActiveProduct(index)
    productCarouselContainer.scrollTo({
        left: productCarouselItems[index].offsetLeft,
        behaviour:"smooth"
    })
})
const galleryCarouselContainer = document.querySelector('.gallery-carousel-container');
const galleryCarouselItems = document.querySelectorAll('.gallery-carousel-item');
const galleryPrevButton = document.querySelector('#gallery-carousel-prev');
const galleryNextButton = document.querySelector('#gallery-carousel-next');
const galleryCarouselTrackerItems = document.querySelectorAll('.gallery-carousel-tracker-item')

const setActiveImage = (index)=>{
    galleryCarouselItems[currentImageIndex].classList.remove('image-active');
    galleryCarouselItems[index].classList.add('image-active');
    galleryCarouselTrackerItems[currentImageIndex].classList.remove('tracker-active')
    galleryCarouselTrackerItems[index].classList.add('tracker-active')
    currentImageIndex = index;
}

galleryPrevButton.addEventListener('click', ()=>{
    const index= currentImageIndex === 0 ? galleryCarouselItems.length-1: currentImageIndex-1;
    setActiveImage(index)
    galleryCarouselContainer.scrollTo({
        left: galleryCarouselItems[index].offsetLeft,
        behaviour: "smooth"
    })
})
galleryNextButton.addEventListener('click', ()=>{
    const index = currentImageIndex === galleryCarouselItems.length-1 ? 0 : currentImageIndex+1;
    setActiveImage(index)
   galleryCarouselContainer.scrollTo({
        left: galleryCarouselItems[index].offsetLeft,
        behaviour:"smooth"
    })
})