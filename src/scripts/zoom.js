const imgZoom = document.querySelector("#img-zoom");
imgZoom?.addEventListener("click", function () {
    if (imgZoom?.classList.contains("active")) {
        imgZoom.classList.remove("active");
    }
});

document.querySelectorAll("img.zoom").forEach(function (element) {
    element.addEventListener("click", function (event) {
        event.stopPropagation();
        imgZoom?.firstElementChild?.setAttribute(
            "src",
            element.getAttribute("src") || ""
        );
        imgZoom?.firstElementChild?.setAttribute(
            "alt",
            element.getAttribute("alt") || ""
        );
        imgZoom?.classList.add("active");
    });
});
