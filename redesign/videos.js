document.querySelectorAll("video").forEach(element => {
    element.addEventListener("mouseenter", function(event) {
        this.play();
    });
    element.addEventListener("mouseleave", function(event) {
        this.pause();
    });
    element.removeAttribute("controls");
});

document.querySelector("#info").removeAttribute("hidden");
