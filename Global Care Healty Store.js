document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn-buy").forEach(button => {
        button.addEventListener("click", () => {
            alert("Product added to cart!");
        });
    });
});
