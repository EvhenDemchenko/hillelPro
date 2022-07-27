const wrapper = document.querySelector('.js--wrapper');

class FormElement {
    constructor(props) {
        this.name = props.name;
        this.type = props.type;
        this.value = props.value;
        this.wrapper = props.wrapper;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }

    getValue() {
        return this.value;
    }

    static PlacedElement(wrapper, element,) {
        wrapper.insertAdjacentElement('beforeend', element);
    }
}

class TextElement extends FormElement {
    constructor(placeholder, ...args) {
        super(...args);
        this.placeholder = placeholder;

        this.CreateElement();
    }

    CreateElement() {
        this.element = document.createElement('input');
        this.element.type = this.type;
        this.element.name = this.name;
        this.element.value = this.value;
        this.element.placeholder = this.placeholder;
        TextElement.PlacedElement(this.wrapper, this.element);
    }
}

class CheckboxElement extends FormElement {
    constructor(checked, ...args) {
        super(...args);

        this.checked = checked;
        this.CreateElement();

    }

    CreateTemplate() {
        this.template = document.createElement('label');
        this.template.innerText = 'You should agree first';
        CheckboxElement.PlacedElement(this.wrapper, this.template);
        this.templateElement = document.querySelector('label')
    }

    CreateElement() {
        this.CreateTemplate();
        this.element = document.createElement('input');
        this.element.name = this.name;
        this.element.type = this.type;
        this.element.checked = this.checked;
        this.element.style.marginLeft = '10px';
        CheckboxElement.PlacedElement(this.templateElement, this.element);
    }
}

class ButtonElement extends FormElement {
    constructor(...args) {
        super(...args);
        this.CreateElement();
    }

    CreateElement() {
        this.element = document.createElement('input');
        this.element.type = this.type;
        this.element.name = this.name;
        this.element.value = this.value;
        this.element.classList.add('btn');
        this.element.classList.add('btn-primary');
        FormElement.PlacedElement(this.wrapper, this.element);
    }
}




const userNameInput = new TextElement('Your name'
    , {
        name: 'name',
        type: 'text',
        value: null,
        wrapper: wrapper,
    });
const userEmailInput = new TextElement('Your email'
    , {
        name: 'email',
        type: 'email',
        value: null,
        wrapper: wrapper,
    });
const userPasswordInput = new TextElement('Your password'
    , {
        name: 'password',
        type: 'password',
        value: null,
        wrapper: wrapper,
    });
const userCheckbox = new CheckboxElement(true
    , {
        name: 'checkbox',
        type: 'checkbox',
        value: null,
        wrapper: wrapper,
    })
const userButton = new ButtonElement({
    name: 'submitBtn',
    type: 'button',
    value: 'REGISTER',
    wrapper: wrapper
})

/*new ValidationForm({
    form: document.querySelector('.js--wrapper')
});*/

// class ValidationForm {
//     constructor(props) {
//         this.form = props.form;
//         this.Init();
//     }
//
//     Init() {
//         console.log(this.form)
//         for (let i = 0; i < this.form.elements.length; i++){
//             console.log(this.form.elements[i])
//         }
//     }
// }
