// On page load, check for the category parameter
window.onload = function() {
    const category = getQueryParam("category");
    const discount = getQueryParam("discount");
    filterProducts(decodeURIComponent(category), decodeURIComponent(discount));
};
// Function to get query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
// Function to filter products
function filterProducts(category, discount) {
    if (category != "null") {
        const products = document.querySelectorAll(".shop-item-wrapper");
        products.forEach(product => {
            const productCategory = product.getAttribute("data-category");
            if (productCategory !== category) {
                product.classList.add("d-none");
            }
            else {
                product.classList.remove("d-none");
            }
        });
        const header = document.querySelector(".dynamic-title");
        header.textContent = "Explore " + category.replace(/-/g, " & ");
        const header1 = document.querySelector(".dynamic-title-1");
        header1.textContent = category.replace(/-/g, " & ");
    }
    if (discount != "null") {
        console.log(discount);
        const [bLower, bUpper] = discount.split("-").map(Number);
        const products = document.querySelectorAll(".shop-item-wrapper");
        products.forEach(product => {
            const productDiscount = product.getAttribute("data-discount");
            const aNumber = Number(productDiscount);
            if (aNumber >= bLower && aNumber <= bUpper) {
                product.classList.remove("d-none");
            }
            else {
                product.classList.add("d-none");
            }
        });
        const header = document.querySelector(".dynamic-title");
        header.textContent = "Explore Products Ranging from ₹" + discount.replace(/-/g, " to ₹");
        const header1 = document.querySelector(".dynamic-title-1");
        header1.textContent = "Products Ranging from ₹" + discount.replace(/-/g, " to ₹");
        if (discount == "0-500") {
            header.textContent = "Explore Products under ₹" + discount.replace(/0-/g, "");
            header1.textContent = "Products under ₹" + discount.replace(/0-/g, "");
        }
        if (discount == "100000-10000000") {
            header.textContent = "Explore Products over ₹" + discount.replace(/-10000000/g, "");
            header1.textContent = "Products over ₹" + discount.replace(/-10000000/g, "");
        }
    }
}
