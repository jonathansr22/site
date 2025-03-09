document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const images = document.querySelectorAll(".interactive");

    const observerOptions = {
        root: null,
        threshold: 0.3
    };

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                const imgs = section.querySelectorAll(".interactive");
                let index = 0;

                function showNextImage() {
                    if (index < imgs.length) {
                        imgs[index].style.opacity = 1;
                        imgs[index].style.transform = "translateY(0)";
                        index++;
                        setTimeout(showNextImage, 500);
                    }
                }
                showNextImage();
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    images.forEach(img => {
        img.style.opacity = 0;
        img.style.transform = "translateY(20px)";
        img.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";


        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
            img.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
            img.style.boxShadow = "none";
        });
    });
});
