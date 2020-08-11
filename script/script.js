window.addEventListener("load", function() {

    const topButton = document.getElementById("goTop");

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    window.addEventListener("scroll", scrollFunction);

    topButton.addEventListener("click", topFunction)
})