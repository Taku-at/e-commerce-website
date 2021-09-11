// header slider
let count = 1;
function showHeaderItem(id) {
    document.querySelectorAll('.header-main-item').forEach((item) => {
        if(count == item.dataset.id) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
/**
 * click to change the show items as banner
 */
showHeaderItem(count);
document.querySelector('.header-left-btn').addEventListener('click', () => {
    count--;
    /**
     * If count is 0, Set the count 3 and click to decrease 3, 2, 1 so on..
     */
    if(count < 1) count = 3;
    showHeaderItem(count);
})
document.querySelector('.header-right-btn').addEventListener('click', () => {
    count++;
    if(count > 3) count = 1;
    showHeaderItem(count);
})

/**
 * Product Slider
 */
const allProducts = document.querySelectorAll('.trending-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');

// Click to add the class, change the color, and increase the index + 1
allFilterBtns.forEach((button, index) => {
    button.addEventListener('click', () => {
        resetBtnColor();
        button.classList.add('activeFilterBtn');
        showProducts(index + 1);
    });
})

// Organized trending each item when you click the buttom.
function showProducts(id) {
    allProducts.forEach((product) => {
        // if data-product equal to '1' show all '1'
        if(id == product.dataset.product) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    })
}

// Click the button to remove the class on current btn
function resetBtnColor() {
    allFilterBtns.forEach((button) => {
        button.classList.remove('activeFilterBtn');
    })
}

// Initial setting of trending
showProducts(1); // Usually, show new products
allFilterBtns[0].classList.add('activefilterBtn');
