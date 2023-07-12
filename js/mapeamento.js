function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#setaa").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#vendas-vendas");

    console.log("go to up");
});