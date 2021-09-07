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
 * click to change the show items
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