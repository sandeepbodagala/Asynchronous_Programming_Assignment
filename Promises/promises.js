// Promises.js
document.getElementById("promiseButton").addEventListener("click", async function() {
    const output = document.getElementById("promiseOutput");
    output.innerText = "Loading...";

    // API request
    const fetchData = fetch("https://dummyjson.com/posts")
        .then(response => response.json());

    // Timeout after 5 seconds
    const timeout = new Promise((_, reject) => 
        setTimeout(() => reject("Operation timed out"), 5000)
    );

    // Handle API call & timeout together
    Promise.race([fetchData, timeout])
        .then(data => output.innerHTML = data.posts.map(post => `<p>${post.title}</p>`).join(''))
        .catch(error => output.innerText = error);
});
