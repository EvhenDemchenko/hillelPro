class Users {
    constructor(props) {
        this.input = props.input;
        this.getUserBtn = props.getUserBtn;
        this.wrapper = props.wrapper;

        this.Init();

    }

    Init() {
        this.getUserBtn.addEventListener('click', () => {
            this.GetUser(this.input);
        })
        this.wrapper.addEventListener('click', (event) => {
            if (event.target.dataset.action) {
                event.preventDefault();
                this.GetComments(event.target);
            }
        })
    }

    HtmlTemplate(user) {
        const {body, id, title} = user;
        this.userCard = `
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">User id : <b>${id}</b> Title : ${title}</h5>
                        <p class="card-text">${body}</p>
                        <a href="#" class="btn btn-primary" data-id='${id}' data-action="comments" >get comments</a>
                    </div>
                </div>
            </div>`;

        this.Render(this.userCard);
    }

    GetComments(btn) {
        const id = btn.dataset.id;
        fetch(`https://jsonplaceholder.typicode.com/comments/`)
            .then(res => {
                this.comments = [];
                btn.classList.add('disabled');
                return res.json();
            }).then(comment => {
            comment.map(item => {
                if (item.postId === +id) this.comments.push(item)
            })
            return this.comments
        }).then(data => {
            data.forEach(item => {
                const {body, email, id, name} = item;
                btn.closest('.card-body').insertAdjacentHTML('beforeend', `
              <li class="media mt-5 mb-5">
                <div class="media-body">
                    <h5 class="mt-0 mb-1">${id}: <b>${name} </b>></h5>
                    <h5 class="mt-0 mb-1">email : ${email}</h5>
                  ${body}
                </div>
              </li>`)
            })
        })
    };


    GetUser(id) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id.value}`, {method: 'GET'})
            .then((res) => {
                this.input.value = '';
                if (res.ok) {
                    return res.json();
                } else {
                    alert('error');
                }
            }).then(user => {
                this.HtmlTemplate(user);
            })
    }

    Render(user) {
        this.wrapper.insertAdjacentHTML('beforeend', user);
    }
}

new Users({
    input: document.getElementById('input'),
    getUserBtn: document.querySelector('.get-user-btn'),
    wrapper: document.querySelector('.template'),

})