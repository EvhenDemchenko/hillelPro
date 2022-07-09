class Users {
    constructor(props) {
        this.input = props.input;
        this.getUserBtn = props.getUserBtn;
        this.wrapper = props.wrapper;

        this.Init();
    }

    async Init() {
        this.getUserBtn.addEventListener('click', () => {
            this.GetPostAndComments(this.input);
        })
    }

    async GetPostAndComments(id) {
        try {
            const PostResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id.value}`, {method: 'GET'});
            if (PostResponse.ok) {
                const CommentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id.value}/comments`, {method: 'GET'});
                const comments = await CommentsResponse.json();
                const post = await PostResponse.json();
                await this.PostTemplate(post);
                await this.CommentsTemplate(comments);
            }
            this.input.value = '';
        } catch (e) {
            console.error(e);
        }
    }

    CommentsTemplate(comments) {
        comments.forEach(item => {
                const {id, name, email, postId, body} = item;
                console.log(comments)
                document.querySelector(`[data-id='${postId}']`).insertAdjacentHTML('beforeend', `
                      <li class="media mt-5 mb-5 ">
                        <div class="media-body">
                            <h5 class="mt-0 mb-1  ">${id}: <b>${name} </b>></h5>
                            <h5 class="mt-0 mb-1  ">Email : ${email}</h5>
                            <p class="mt-0 mb-1"> Text: ${body}</p>
                        </div>
                      </li>`);
            }
        )
    }


    PostTemplate(post) {
        const {body, id, title} = post;
        this.userCard = `
            <div class="col-sm-12 ">
                <div class="card border-primary border-2">
                    <div data-id="${id}" class="card-body">
                        <h5 class="card-title">User id : <b>${id}</b> Title : ${title}</h5>
                        <p class="card-text">${body}</p>
                    </div>
                </div>
            </div>`;
        this.Render(this.userCard);
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