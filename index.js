let tabBtns = document.querySelectorAll(".header .btn");

tabBtns.forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
        tabBtns.forEach((tab) => tab.classList.remove("active"));
        tabBtn.classList.add("active");
        document.querySelectorAll(".tab-content.active").forEach((tabContent) => tab.classList.remove("active")); // remove active class from each tab content when i click on any tab
        document.querySelector(tabBtn.dataset.targetTab).classList.add("active");
    })
})



console.log()
// tabBtns.forEach((tabBtn) => 