const iPhone = document.querySelector('.iPhone');
const samsung = document.querySelector('.samsung');

iPhone.addEventListener('click', function (event) {
    // on which element the click was
    let clickTarget = event.target;
    
    // searching an element with a class 'active' in the iPhone card
    let activeButton = iPhone.querySelector('.active');
    
    // searching an element with a class 'price' in the iPhone card
    let priceItem = iPhone.querySelector('.price');
    
    // creating a variable for a price text
    let currentPrice;

    // searching an element with a class 'active-border' in the iPhone card
    let activeButtonColor = iPhone.querySelector('.active-border');

    // creating a variable for a pack color
    let packColor = iPhone.querySelector('.pack');

    // the FUNCTION of the colour changing
    if (clickTarget.classList.contains('color-btn') && 
        !clickTarget.classList.contains('active-border')) {
            clickTarget.classList.add('active-border');
            activeButtonColor.classList.remove('active-border');
    }

    // the FUNCTION of the changing of gigobites-button colour
    if (clickTarget.classList.contains('btn') && 
        !clickTarget.classList.contains('active')) {
            clickTarget.classList.add('active');
            activeButton.classList.remove('active');
    }
    
    // about a price
    currentPrice = clickTarget.getAttribute('data-size');

    if (currentPrice === 'medium') {
        priceItem.textContent = 'Цена 79 999 р.';
    }

    if (currentPrice === 'large') {
        priceItem.textContent = 'Цена 99 999 р.';
    }

    if (clickTarget.classList,contains('buy')) {
        packColor.classList.add('golden');
        packColor.classList.remove('white');
    }
})



samsung.addEventListener('click', function (event) {
    // on which element the click was
    let clickTargetSamsung = event.target;
    
    // searching an element with a class 'active' in the iPhone card
    let activeButtonSamsung = samsung.querySelector('.active');
    
    // searching an element with a class 'price' in the iPhone card
    let priceItemSamsung = samsung.querySelector('.price');
    
    // creating a variable for a price text
    let currentPriceSamsung;

    // searching an element with a class 'active-border' in the iPhone card
    let activeButtonColorSamsung = samsung.querySelector('.active-border');

    // creating a variable for a pack color
    let packColor = iPhone.querySelector('.pack');

    // the FUNCTION of the colour changing
    if (clickTargetSamsung.classList.contains('color-btn-samsung') && 
        !clickTargetSamsung.classList.contains('active-border')) {
            clickTargetSamsung.classList.add('active-border');
            activeButtonColorSamsung.classList.remove('active-border');
    }

    // the FUNCTION of the changing of gigobites-button colour
    if (clickTargetSamsung.classList.contains('btn') && 
        !clickTargetSamsung.classList.contains('active')) {
            clickTargetSamsung.classList.add('active');
            activeButtonSamsung.classList.remove('active');
    }
    
    // about a price
    currentPriceSamsung = clickTargetSamsung.getAttribute('data-size');

    if (currentPriceSamsung === 'medium') {
        priceItemSamsung.textContent = 'Цена 34 999 р.';
    }

    if (currentPriceSamsung === 'large') {
        priceItemSamsung.textContent = 'Цена 74 999 р.';
    }

    if (clickTarget.classList.contains('buy')) {
        packColor.classList.add('golden');
        packColor.classList.remove('white');
    }
})