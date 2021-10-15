function HoverEvents() {
    // Title logo hover
    document.querySelectorAll(".title").forEach(element => {
        element.addEventListener("mouseenter", function() {
            document.querySelector("#logoSides").classList.add("hover");
        });
        element.addEventListener("mouseleave", function() {
            document.querySelector("#logoSides").classList.remove("hover");
        });
    });

    // Link hovers
    document.querySelectorAll("#links a").forEach(element => {
        element.addEventListener("mouseenter", function(event) {
            this.parentNode.querySelector("span").classList.add("hover");
        });
        element.addEventListener("mouseleave", function(event) {
            this.parentNode.querySelector("span").classList.remove("hover");
        });
    });

    // Rig thumbnails autoplay on hover
    document.querySelectorAll("#examples video").forEach(element => {
        element.addEventListener("mouseenter", function(event) {
            this.play();
        });
        element.addEventListener("mouseleave", function(event) {
            this.pause();
        });
        element.addEventListener("click", function(event) {
            ShowVideo(this.parentNode.parentNode.innerHTML);
        });
    });

    // Close video player
    document.querySelector("#player").addEventListener("click", CloseVideo);
    document.addEventListener("keydown", CloseVideo);
};