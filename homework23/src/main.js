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
}

class TextElement extends FormElement {
    constructor(placeholder, wrapper, ...args) {
        super(...args);
        this.placeholder = placeholder;
        this.wrapper = wrapper;
        this.CreateElement();
    }

    CreateElement() {
        this.element = document.createElement('input');
        this.element.type = this.type;
        this.element.name = this.name;
        this.element.value = this.value;
        this.element.placeholder = this.placeholder;
        TemplatePaste.PlacedElement(this.wrapper, this.element);
    }
    getValue(){
        this.value  = this.element.value;
        return this.value;
    }
}

class CheckboxElement extends FormElement {
    constructor(checked,wrapper, ...args) {
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
    constructor(wrapper,...args) {
        super(...args);
        this.wrapper = wrapper;

        this.CreateElement();
    }

    CreateElement() {
        this.element = document.createElement('input');
        this.element.type = this.type;
        this.element.name = this.name;
        this.element.value = this.value;
        this.element.classList.add('btn');
        this.element.classList.add('btn-primary');
        TemplatePaste.PlacedElement(this.wrapper, this.element);
    }
}


const userNameInput = new TextElement(
    'Your name',
    wrapper,
    {
        name: 'name',
        type: 'text',
        value: null,

    });
userNameInput.getValue();
const userEmailInput = new TextElement(
    'Your email',
    wrapper,
    {
        name: 'email',
        type: 'email',
        value: null,
    });
const userPasswordInput = new TextElement(
    'Your password',
    wrapper
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
    wrapper, {
    name: 'submitBtn',
    type: 'button',
    value: 'REGISTER',
})


