// 2nd Implementation: Lightbox (The Plugin)
// Finds all links with the class 'lightbox-link" and turns them into a gallery.

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const slides = document.getElementsByClassName("mySlides");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const galleryImgs = document.querySelectorAll(".gallery-img");
    const modalImages = document.querySelectorAll(".modal-target");

    let slideIndex = 1;

    // 1. Define Logic First
    function showSlides(n) {
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        for (let i = 0; i < slides.length; i += 1) {
            slides[i].style.display = "none";
        }
        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
        }
    }

    // 2. Open Modal & Set Slide
    galleryImgs.forEach((img) => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            slideIndex = parseInt(this.getAttribute("data-slide"), 10);
            showSlides(slideIndex);
        });
    });


    // 3. Controls
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            showSlides(slideIndex -= 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            showSlides(slideIndex += 1);
        });
    }

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});