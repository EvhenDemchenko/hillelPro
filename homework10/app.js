class Form {
    constructor(props) {
        this.form = props.form;
        this.outPut = props.outPut;
        this.submitBtn = props.submitBtn;
        this.users = this.getUserFromStorage() || [];
    }

    createUser() {
        this.users.push({
            id: Date.now(),
            name: this.form['name'].value,
            age: this.form['age'].value,
            phone: this.form['phone'].value
        })
        this.setUserToStorage(this.users);
        this.render();
    }

    delete(e) {
        this.users.forEach(item => {
            if (+e.target.getAttribute('data-id') === item.id) {
                this.dataItem = document.querySelector(`[data-id='${item.id}']`)
                this.currentItem = this.dataItem.parentElement;
                this.currentItem.remove();
                this.updateUsers()
            }
        })
    }

    updateUsers() {
        this.users.forEach((item, index) => {
            if (item.id === +this.dataItem.getAttribute('data-id')) {
                this.users.splice(index, 1)
                this.setUserToStorage(this.users);
            }
        })
    }

    userEdit(e) {
        this.users.forEach((item, index) => {

            if (+e.getAttribute('data-id') === item.id) {

                this.dataItem = document.querySelector(`[data-id='${item.id}']`)
                this.editItem = this.dataItem.parentElement.querySelectorAll('td')

                for (let i = 1; i <= 3; i++) {

                    this.editItem[i].addEventListener('input', ()=> {
                        this.users[index].name = this.editItem[1].innerText;
                        this.users[index].age = this.editItem[2].innerText;
                        this.users[index].phone = this.editItem[3].innerText;

                    })
                    if (this.editItem[i].contentEditable === 'false') {

                        this.editItem[i].setAttribute('contenteditable', true);

                    } else {

                        this.editItem[i].setAttribute('contenteditable', false);
                        this.setUserToStorage(this.users)

                    }

                }

            }

        })
    }


    setUserToStorage(user) {
        localStorage.setItem('users', JSON.stringify(user));
    }

    getUserFromStorage() {
        return JSON.parse(localStorage.getItem('users'));
    }

    addEvents() {
        this.render();
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.createUser();
        })
        this.outPut.addEventListener('click', (e) => {
            document.querySelectorAll('.js--user-delete').forEach(item => {
                if (item === e.target) {
                    this.delete(e);
                }
            })
            document.querySelectorAll('.js--user-edit').forEach(item => {
                if (item === e.target) {
                    this.userEdit(e.target);
                }
            })
        })
    }

    render() {
        this.outPut.innerHTML = '';
        this.users.forEach(user => {
            this.outPut.innerHTML += (`
            <tr>
                <td data-id="${user.id}" >${user.id}</td>
                <td contenteditable="false" >${user.name}</td>
                <td contenteditable="false" >${user.age}</td>
                <td contenteditable="false" >${user.phone}</td>
                    <td>
                    <button data-id='${user.id}' class="js--user-delete bg-red-200">delete</button>
                    <button data-id='${user.id}' class="js--user-edit bg-green-200 ">edit</button>

                    <button class="js--user-view">view</button>
                    </td>
            </tr>            
            `)
        })
    }

}

const a = new Form({
    outPut: document.querySelector('.js--output'),
    form: document.querySelector('.js--form'),
    submitBtn: document.querySelector('.js--submit'),
})
a.addEvents()
