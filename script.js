const password = document.querySelector('.form__password');
const passwordCheck = document.querySelector('.form__password-retype');

passwordCheck.addEventListener('input', (e) => {
    if (e.target.value != '' && e.target.value != password.value) {
        e.target.classList.add('error');
        password.classList.add('error');
    }
    else {
        e.target.classList.remove('error');
        password.classList.remove('error');
    }
});

password.addEventListener('input', (e) => {
    if (passwordCheck.value != '' && e.target.value != passwordCheck.value) {
        e.target.classList.add('error');
        passwordCheck.classList.add('error');
    }
    else {
        e.target.classList.remove('error');
        passwordCheck.classList.remove('error');
    }
});

const starRating = document.querySelectorAll('.rating__star');

function starHighlight(star) {
    if (star.previousElementSibling != null) {
        starHighlight(star.previousElementSibling);
    }
    star.classList.add('highlight');
}

function starUnHighlight(star) {
    if (star.previousElementSibling != null) {
        starUnHighlight(star.previousElementSibling);
    }
    star.classList.remove('highlight');
}

function starHighlightRated(star) {
    if (!star.classList.contains('highlight-rated')){
        if (star.previousElementSibling != null) {
            starHighlightRated(star.previousElementSibling);
        }
        star.classList.add('highlight-rated');
    }
}

function starReHighlightRated(star) {
    if (star.nextElementSibling != null && star.nextElementSibling.classList.contains('highlight-rated')) {
        star.nextElementSibling.classList.remove('highlight-rated');
        starReHighlightRated(star.nextElementSibling);
    }
}

starRating.forEach(star => {
    star.addEventListener('mouseover', () => {
        starHighlight(star);
    });
    star.addEventListener('mouseout', () => {
        starUnHighlight(star);
    });
    star.addEventListener('click', () => {
        starHighlightRated(star);
        starReHighlightRated(star);
    });
});