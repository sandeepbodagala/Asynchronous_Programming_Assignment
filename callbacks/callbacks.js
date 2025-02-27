// callbacks.js
document.getElementById("callbackButton").addEventListener("click", function() {

    // Function to execute a callback after a 5-second delay
    function delayedCallback(callback) {
        setTimeout(() => callback("Callback executed after 5 seconds"), 5000);
    }

    // Execute callback and fetch data after delay
    delayedCallback((message) => {
        const output = document.getElementById("callbackOutput");
        output.innerText = message;

        fetch("https://dummyjson.com/posts")
            .then(response => response.json())
            .then(data => output.innerHTML = data.posts.map(post => `<p>${post.title}</p>`).join(''))
            .catch(error => {
                output.innerText = "Error fetching data!";
                console.error("Fetch error:", error);
            });
    });
});
