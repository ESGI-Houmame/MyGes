let accordeonItems = document.querySelectorAll(".accordeon__item__header");

accordeonItems.forEach((itemHeader) => {
    itemHeader.addEventListener("click", function () {
        let item = this.parentElement;
        //detect if the item is already active
        if (item.classList.contains("accordeon__item__active")) {
            item.classList.remove("accordeon__item__active");
        } else {
            let active = document.querySelector(".accordeon__item__active");
            if (active) {
                active.classList.remove("accordeon__item__active");
            }
            item.classList.add("accordeon__item__active");
        }
    });
})