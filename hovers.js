function HoverEvents() {
    // Title logo hover
    document.querySelectorAll(".title").forEach(element => {
        element.addEventListener("mouseenter", function() {
            document.querySelector("#logoSides").classList.add("hover");
        });
    });

    document.querySelectorAll(".title").forEach(element => {
        element.addEventListener("mouseleave", function() {
            document.querySelector("#logoSides").classList.remove("hover");
        });
    });

    // Link hovers
    document.querySelectorAll("#links a").forEach(element => {
        element.addEventListener("mouseenter", function(event) {
            this.parentNode.querySelector("span").classList.add("hover");
        });
    });

    document.querySelectorAll("#links a").forEach(element => {
        element.addEventListener("mouseleave", function(event) {
            this.parentNode.querySelector("span").classList.remove("hover");
        });
    });

    // Commission example hovers
    document.querySelectorAll("#examples > div > div").forEach(element => {
        element.addEventListener("mouseenter", function(event) {
            this.parentNode.querySelector(".cover").classList.add("hover");
        });
    });

    document.querySelectorAll("#examples > div > div").forEach(element => {
        element.addEventListener("mouseleave", function(event) {
            this.parentNode.querySelector(".cover").classList.remove("hover");
        });
    });
};