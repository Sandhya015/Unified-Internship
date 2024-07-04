function searchPosts() {
    // Implement your search logic here
}

function filterProduct() {
    const dropdown = document.getElementById('product-dropdown');
    const selectedProduct = dropdown.value;
    const posts = document.querySelectorAll('.blog-post');

    posts.forEach(post => {
        if (selectedProduct === "" || post.dataset.category === selectedProduct) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}

function searchProduct() {
    const searchBar = document.getElementById('search-bar');
    const searchQuery = searchBar.value.toLowerCase();
    const posts = document.querySelectorAll('.blog-post');

    posts.forEach(post => {
        const postContent = post.textContent.toLowerCase();
        if (postContent.includes(searchQuery)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}

function addComment(event, commentContainerId) {
    event.preventDefault();
    const commentContainer = document.getElementById(commentContainerId);
    const name = event.target.querySelector('input').value;
    const message = event.target.querySelector('textarea').value;

    const comment = document.createElement('div');
    comment.className = 'comment';
    comment.innerHTML = `<strong>${name}</strong><p>${message}</p>`;

    commentContainer.appendChild(comment);
    event.target.reset();
}

function share(postTitle) {
    alert(`Shared: ${postTitle}`);
}
