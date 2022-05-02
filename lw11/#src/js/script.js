window.addEventListener('load', function () {
    setBodyLoaded();
    setAnimatedBlockLoaded();
    setScrollToStartPage();
    setMenuScrollNavigation();
    initPopup();
    initMobileMenu();
    validationForm();
    customDropList();
    setAccordionBlockHide();
    smoothAccordionSlide();
});

function setBodyLoaded() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('loaded');
}

function setAnimatedBlockLoaded() {
    const animatedBlockAdventages = document.getElementById('animatedBlockAdventages');
    const animatedBlock = document.getElementById('animatedBlock');
    if (!animatedBlock) {
        return;
    }
    let reachedSecond = false;
    let reached = false;
    const ANIMATED_BLOCK_OFFSET = 300;
    const ANIMATED_BLOCK_SECOND = 150;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset + window.innerHeight > animatedBlock.offsetTop + ANIMATED_BLOCK_OFFSET) {
            if (!reached) {
                animatedBlock.classList.add('scrolled');
                reached = true;
            }
        }
        if (window.pageYOffset + window.innerHeight > animatedBlockAdventages.offsetTop + ANIMATED_BLOCK_SECOND) {
            if (!reachedSecond) {
                animatedBlockAdventages.classList.add('scrolled');
                reachedSecond = true;
            }
        }
    })
}

function setAccordionBlockHide() {
    const accordionButtons = document.querySelectorAll('.faq__accordion');
    accordionButtons.forEach(element => {
        element.addEventListener('click', evt => {
            const triggerButton = element.querySelector('.faq__accordion_hide')
            if (!triggerButton.classList.contains('active')) {
                const activeDropList = document.querySelector('.active');
                activeDropList.classList.remove('active');
            }
        });
    });
}

function smoothAccordionSlide() {
    document.querySelector('.faq__container').addEventListener('click', function (event) {
        let block = event.target.closest('.faq__accordion');
        if (block) {
            let elem = block.querySelector('.faq__accordion_hide');
            if (elem.classList.contains('active')) {
                elem.style.height = getComputedStyle(elem).height;
                elem.classList.remove('active');
                getComputedStyle(elem).height; // reflow
                elem.style.height = '';
            } else {
                elem.classList.add('active');
                let h = getComputedStyle(elem).height;
                elem.style.height = '0';
                getComputedStyle(elem).height; // reflow
                elem.style.height = h;
                setTimeout(function () {
                    elem.style.height = ''
                }, 1000); // Когда закончится анимация
            }
        }
    })
}

function setScrollToStartPage() {
    const button = document.getElementById('scrollToStart');
    window.addEventListener('scroll', function (evt) {
        let offsetYPosition = window.pageYOffset.toFixed();
        const offsetYToButtonVisible = 750;
        if (offsetYPosition >= offsetYToButtonVisible) {
            button.classList.remove('visually-hidden');
        } else {
            button.classList.add('visually-hidden');
        }
    })

    button.addEventListener('click', function (evt) {
        evt.preventDefault();
        window.scroll({
            left: 0,
            top: 0,
            behavior: 'smooth',
        })
    })
}

function setMenuScrollNavigation() {
    const smoothLinks = document.querySelectorAll('.js-menu-item');
    smoothLinks.forEach(smoothLink => {
        smoothLink.addEventListener('click', evt => {
            evt.preventDefault();
            const id = smoothLink.getAttribute('href');
            setInteractiveParameters();
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        });
    });
}

function initPopup() {
    const closedButton = document.querySelector('.popup_closed');
    const popupForm = document.querySelector('.popup');
    const overlay = document.querySelector('.overlay');
    const popupButtons = document.querySelectorAll('.js-button-join');
    const body = document.querySelector('body');
    const VISUALLY_HIDDEN = 'hidden';
    const SCROLL_LOCK = 'scroll-lock';

    function hidePopup(command, evt) {
        evt.preventDefault();
        if (command) {
            popupForm.classList.add(VISUALLY_HIDDEN);
            overlay.classList.add(VISUALLY_HIDDEN);
            body.classList.remove(SCROLL_LOCK);
        } else {
            popupForm.classList.remove(VISUALLY_HIDDEN);
            overlay.classList.remove(VISUALLY_HIDDEN);
            body.classList.add(SCROLL_LOCK);
        }
    }

    window.onkeydown = function (event) {
        const key = event.key;
        if (key === 'Escape') {
            popupForm.classList.add(VISUALLY_HIDDEN);
            overlay.classList.add(VISUALLY_HIDDEN);
            body.classList.remove(SCROLL_LOCK);
        }
    };

    closedButton.addEventListener('click', hidePopup.bind(null, 'closePopup'));
    overlay.addEventListener('click', hidePopup.bind(null, 'closePopup'));
    popupButtons.forEach(popupButton => {
        popupButton.addEventListener('click', hidePopup.bind(null, null));
    })
}

function initMobileMenu() {
    const burgerButton = document.querySelector('.burger-open');
    const navigationMenu = document.querySelector('.header__links');
    burgerButton.addEventListener('click', evt => {
        navigationMenu.classList.toggle('adaptive_hide');
        burgerButton.classList.toggle('burger-close');
    });
}

function setInteractiveParameters() {
    const burgerButton = document.querySelector('.burger-open');
    const navigationMenu = document.querySelector('.header__links');
    const triggerForClose = navigationMenu.classList.contains('adaptive_hide');
    if (!triggerForClose) {
        navigationMenu.classList.toggle('adaptive_hide');
        burgerButton.classList.toggle('burger-close');
    }
}

function validationForm() {
    const inputName = document.querySelector('.feedback-form__name');
    const inputEmail = document.querySelector('.feedback-form__email');
    const submitButton = document.querySelector('.feedback-form__submit');

    submitButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        let validationProfession = validateProfession();
        let validationEmail = validateEmail();
        let validationName = validateName();

        if (validationProfession && validationEmail && validationName)
        {
            //send post request
        }
    });

    function validateEmail()
    {
        let regexp = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");
        let result = regexp.test(inputEmail.value);
        result ? inputEmail.classList.remove('invalid') :  inputEmail.classList.add('invalid');
        return result;
    }

    function validateName()
    {
        let regexp= new RegExp("^[A-Za-zА-Яа-яЁё\s]+$");
        let result = regexp.test(inputName.value);
        result ? inputName.classList.remove('invalid') :  inputName.classList.add('invalid');
        return result;
    }

    function validateProfession()
    {
        const selectBox = document.querySelector('.select-box');
        const selectedProfession = document.querySelector('.selected span');
        let result = selectedProfession.innerHTML === 'Вид деятельности';
        result ? selectBox.classList.remove('valid') : selectBox.classList.add('valid');
        return result;
    }
}

function customDropList() {
    const selected = document.querySelector(".selected");
    const optionsContainer = document.querySelector(".options-container");
    const optionsList = document.querySelectorAll(".option");

    selected.addEventListener("click", () => {
        optionsContainer.classList.toggle("active");
    });

    optionsList.forEach(option => {
        option.addEventListener("click", () => {
            selected.innerHTML = option.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active");
            setTimeout(() => {
                optionsList.forEach(option => {
                    option.classList.remove('selected-option');
                })
                option.classList.add('selected-option')
            }, 500);
        });
    });
}

async function sendRequest(url, options)
{

}