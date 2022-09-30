const buttons = document.querySelectorAll('button')
const imagesLi = document.querySelectorAll('ul li')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        const visibleImg = document.querySelector('[data-active]')
        let liIndex = Array.from(imagesLi).indexOf(visibleImg)

        const header = document.querySelector('header')

        if(button.classList.contains('next')){
            if(liIndex < imagesLi.length) liIndex++
            if(liIndex >= imagesLi.length) liIndex = 0
        }
        if(button.classList.contains('prev')){
            if(liIndex > 0) liIndex--
            if(liIndex <= 0) liIndex = imagesLi.length -1            
        }
        visibleImg.removeAttribute('data-active')
        imagesLi[liIndex].setAttribute('data-active', '')

        switch(liIndex){
            case 0:
                header.style.setProperty('--firstColor', '#3DCBCE')
                header.style.setProperty('--secondColor', '#5CACCD')
                break;
            case 1:
                header.style.setProperty('--firstColor', '#162346')
                header.style.setProperty('--secondColor', '#4EB9C9')
                break;
            case 2:
                header.style.setProperty('--firstColor', '#28323B')
                header.style.setProperty('--secondColor', '#B09DA5')
                break;
            case 3:
                header.style.setProperty('--firstColor', '#D4C352')
                header.style.setProperty('--secondColor', '#6B95C7')
                break;
            case 4:
                header.style.setProperty('--firstColor', '#725852')
                header.style.setProperty('--secondColor', '#515820')
        }
    })
})