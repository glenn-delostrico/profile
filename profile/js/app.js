//load portfolio animations: slide-left then appear
const loadLeft = document.querySelectorAll('.loadLeft');
loadLeft.forEach((el) => observer.observe(el));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    })
})



// bounce text animation
document.querySelectorAll('.bounce span').forEach(span => {
    span.addEventListener("mouseover", function() {
        this.classList.add("bouncing")
        setTimeout(function() {
            this.classList.remove("bouncing")
        }.bind(this), 1000)
    })
})


// timeline
let items = document.querySelectorAll(".timeline li");
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}
function callbackFunc() {
    for (let i = 0; i< items.length; i++) {
        if (isElementInViewport(items[i])) {
            if(!items[i].classList.contains('in-view')) {
                items[i].classList.add("in-view");
            }
        } else if (items[i].classList.contains('in-view')){
            items[i].classList.remove('in-view');
        }
    }
}

window.addEventListener('load', callbackFunc);
window.addEventListener('scroll', callbackFunc)









