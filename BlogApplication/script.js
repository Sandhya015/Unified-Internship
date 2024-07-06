

function filterCategory() {
    const selectedCategory = document.getElementById('product-dropdown').value;
    if (selectedCategory) {
        window.location.href = selectedCategory;
    }
}


function searchPosts() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const posts = document.querySelectorAll(".blog-post");

    posts.forEach(post => {
        const title = post.querySelector("h2").textContent.toLowerCase();
        const content = post.querySelector("p").textContent.toLowerCase();

        if (title.includes(query) || content.includes(query)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}

function share(postTitle) {
    alert("Share " + postTitle);
}

function addComment(event, commentContainerId) {
    event.preventDefault();
    const name = event.target.querySelector("input").value;
    const message = event.target.querySelector("textarea").value;

    const commentContainer = document.getElementById(commentContainerId);
    const newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.innerHTML = `<p><strong>${name}:</strong> ${message}</p>`;
    commentContainer.appendChild(newComment);

    event.target.reset();
}
