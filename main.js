document.addEventListener("alpine:init", () => {
    Alpine.data("fetchData", () => ({
        firstEndpoint: "Loading...",
        secondEndpoint: "Loading...",
        async init() {
            let res1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            let res2 = await fetch("https://dummyjson.com/products/1");
            this.firstEndpoint = await res1.json();
            this.secondEndpoint = await res2.json();
        }
    }));
});
