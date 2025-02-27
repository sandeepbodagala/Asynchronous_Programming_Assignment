// async-await.js
document.getElementById("asyncButton").addEventListener("click", async function() {
    document.getElementById("asyncOutput").innerText = "Loading...";
    try {
        const response = await fetch("https://dummyjson.com/posts");
          // Check if the response is successful
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        // Display post titles in the output div
        document.getElementById("asyncOutput").innerHTML = data.posts.map(post => `<p>${post.title}</p>`).join('');
    } catch (error) {
        document.getElementById("asyncOutput").innerText = "Error: " + error.message;
    }
});
