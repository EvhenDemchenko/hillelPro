class Slider {
    constructor(props) {
        this.left = document.querySelector(props.leftBtn);
        this.right = document.querySelector(props.rightBtn);
        this.sliderItems = document.querySelectorAll(props.sliderItems);
        this.sliderContainer = document.querySelector(props.sliderContainer);
        this.counter = 0;
        this.randomColor = props.randomColor;
        this.autoSlide = props.autoSlide;
        this.addEvents();
        this.changeSlide();
    }

    rgbColor = (min, max) => {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    setRandomColor() {
        if (this.randomColor) {
            this.sliderItems[this.counter].style.background = `
        rgb(
         ${this.rgbColor(1, 255)}
        ,${this.rgbColor(1, 255)}
        ,${this.rgbColor(1, 255)}
        )`;
        } else {
            console.log('random color is no enable')
        }
    };

    buttonsState() {
        if (this.counter === 0) {
            this.left.disabled = true;
        } else if (this.counter === this.sliderItems.length - 1) {
            this.right.disabled = true;
        } else {
            this.left.disabled = false;
            this.right.disabled = false;
        }
        this.setRandomColor();
    }

    changeSlide() {
        if (this.autoSlide === true) {
            this.sliderId = setInterval(() => {
                if (this.counter === this.sliderItems.length - 1) {
                    clearInterval(this.sliderId);
                } else {
                    this.slideRight();
                }
            }, 5000)
        } else {
            console.log('autoSlider is no enable');
        }
    }

    slideLeft() {
        this.sliderItems.forEach(item => {
            item.classList.remove('active')
        })
        this.counter--;
        this.buttonsState();
        this.sliderItems[this.counter].classList.add('active');
        clearInterval(this.sliderId);
        this.changeSlide();
    }

    slideRight() {
        this.sliderItems.forEach(item => {
            item.classList.remove('active')
        })
        this.counter++;
        this.buttonsState();
        this.sliderItems[this.counter].classList.add('active');
        clearInterval(this.sliderId);
        this.changeSlide();
    }

    addEvents() {
        this.sliderContainer.addEventListener('click', (e) => {
            if (e.target === this.left) {
                this.slideLeft();
            } else if (e.target === this.right) {
                this.slideRight();
            }
        })
        this.buttonsState();
    }
}

new Slider({
    leftBtn: '.js--btn1',
    rightBtn: '.js--btn2',
    sliderItems: '.js--slider__content',
    sliderContainer: '.js--slider__wrapper',
    randomColor: true, // можно включать и выключать рандомный цвет слайдов
    autoSlide: true, // можно включать и выключать автослайд
});

