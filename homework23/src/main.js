const wrapper = document.querySelector('.js--wrapper');

class FormElement {
    constructor(props) {
        this.name = props.name;
        this.type = props.type;
        this.value = props.value;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }

    getValue() {
        return this.value;
    }

}

class TemplatePaste {
    static PlacedElement(wrapper, element,) {
        wrapper.insertAdjacentElement('beforeend', element);
    }

    static ValueValidation(input, regEx) {
        input.addEventListener('input', (event) => {
            const btn = document.querySelector('.btn');
            btn.disabled = false;
            btn.disabled = !input.value.match(regEx);
            if (event.target.value === ''){
                btn.disabled = true;
            }
            for (let i = 0; i < wrapper.elements.length; i++){
                if (wrapper.elements[i].value.length <= 0){
                    btn.disabled = true;
                }
            }
        })

    }


}

class TextElement extends FormElement {
    constructor(placeholder, wrapper, regEx, ...args) {
        super(...args);
        this.regEx = regEx;
        this.placeholder = placeholder;
        this.wrapper = wrapper;
        this.CreateElement();
        TemplatePaste.ValueValidation(this.element,this.regEx);
    }

    CreateElement() {
        this.element = document.createElement('input');
        this.element.type = this.type;
        this.element.name = this.name;
        this.element.value = this.value;
        this.element.placeholder = this.placeholder;
        TemplatePaste.PlacedElement(this.wrapper, this.element);
    }

    getValue() {
        this.value = this.element.value;
        return this.value;
    }
}

class CheckboxElement extends FormElement {
    constructor(checked, wrapper, ...args) {
        super(...args);
        this.wrapper = wrapper;
        this.checked = checked;
        this.CreateElement();

    }

    CreateTemplate() {
        this.template = document.createElement('label');
        this.template.innerText = 'You should agree first';
        TemplatePaste.PlacedElement(this.wrapper, this.template);
        this.templateElement = document.querySelector('label')
    }

    CreateElement() {
        this.CreateTemplate();
        this.element = document.createElement('input');
        this.element.name = this.name;
        this.element.type = this.type;
        this.element.checked = this.checked;
        this.element.style.marginLeft = '10px';
        TemplatePaste.PlacedElement(this.templateElement, this.element);
    }
}

class ButtonElement extends FormElement {
    constructor(wrapper, disabled, ...args) {
        super(...args);
        this.wrapper = wrapper;
        this.disabled = disabled;
        this.CreateElement();
    }



    CreateElement() {
        this.element = document.createElement('input');
        this.element.type = this.type;
        this.element.name = this.name;
        this.element.value = this.value;
        this.element.classList.add('btn');
        this.element.classList.add('btn-primary');
        this.element.disabled = this.disabled;
        TemplatePaste.PlacedElement(this.wrapper, this.element);
    }
}


const userNameInput = new TextElement(
    'Your name',
    wrapper,
    /[a-zA-Z][a-zA-Z0-9-_]{3,32}/
    ,
    {
        name: 'name',
        type: 'text',
        value: null,

    });
userNameInput.getValue();
const userEmailInput = new TextElement(
    'Your email',
    wrapper,
    /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/
    ,
    {
        name: 'email',
        type: 'email',
        value: null,
    });
const userPasswordInput = new TextElement(
    'Your password',
    wrapper
    ,/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    , {
        name: 'password',
        type: 'password',
        value: null,
    });
const userCheckbox = new CheckboxElement(
    true,
    wrapper,
    {
        name: 'checkbox',
        type: 'checkbox',
        value: null,
    })
const userButton = new ButtonElement(
    wrapper,
    true
    , {
        name: 'submitBtn',
        type: 'button',
        value: 'REGISTER',
    })


