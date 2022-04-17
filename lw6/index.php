<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>homework nine</title>
    <meta name="viewport" content="width=device-width">
    <link rel="icon" href="img/pepe16.png">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto+Condensed&display=swap"
          rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container">
    <header class="animation header">
        <div class="header__logo">
            <img src="img/header_logo.png" alt="Логотип компании">
        </div>
        <nav class="header__links adaptive_hide">
            <a href=".list-advantages" class="header__link font-text__small js-menu-item">Что будет на курсе?</a>
            <a href=".block-faq" class="header__link font-text__small js-menu-item">Вопросы</a>
            <a href=".author-course" class="header__link link_about-author font-text__small js-menu-item">Автор</a>
            <a href="#" class="button_black font-text__small_white js-button-join">Записаться на курс</a>
        </nav>
        <div class="header__button-block burger-open">
            <img src="img/burger.png" class="header__burger-first" alt="Элемент кнопки">
            <img src="img/burger.png" class="header__burger-second" alt="Элемент кнопки">
            <img src="img/burger.png" class="header__burger-third" alt="Элемент кнопки">
        </div>
    </header>
    <div class="main-content">
        <section class="title-course">
            <h2 class="visually-hidden">Заголовок статьи курса</h2>
            <div class="animation title-course__block">
                <h1 class="title-course__header">
                    Не <span class="font-color_pink">делай</span> это
                </h1>
                <p class="title-course__description">
                    Онлайн-курс для творческих людей, о том, как управлять своим временем
                </p>
                <a href="#" class="title-course__button  button_black js-button-join font-text__small_white">
                    Записаться на курс
                </a>
            </div>
            <img class="animation title-course__image" src="img/title_illustraiton.png" alt="title_illustration">
        </section>
        <section class="tags-list">
            <h2 class="visually-hidden">Список тегов</h2>
            <div class="animation tags-list__box">
                <img class="tags-list__logo-first" src="img/tags_time.svg" alt="Picture clock">
                <div class="tags-list__description">
                    Для тех, у кого слишком много &nbsp;идей и слишком мало времени
                </div>
            </div>
            <div class="animation tags-list__box tags-list__box_second">
                <img class="tags-list__logo-second" src="img/tags_notebook.svg" alt="note">
                <div class="tags-list__description">
                    Метод «списка не дел», который позволит успевать и реализовывать
                </div>
            </div>
            <div class="animation tags-list__box tags-list__box_third">
                <img class="tags-list__logo-third" src="img/tags_target.svg" alt="target">
                <div class="tags-list__description">
                    Курс научит творческих людей сосредоточиваться
                </div>
            </div>
        </section>
        <section class="content" id="animatedBlock">
            <h2 class="visually-hidden">Контент</h2>
            <div class="content__block">
                <img src="img/main_finances.png" class="content__image" alt="Картинка про финансы" width="538"
                     height="476">
                <div class="content__text">
                    <h2 class="content__title">Ты не успеешь</h2>
                    <p class="content__description">
                        Всех творческих людей объединяет одна проблема - отсутствие
                        времени на реализацию идей. Как прибавить суткам часы, рассмотрим
                        в нашем курсе.
                    </p>
                </div>
            </div>
            <div class="content__block content__block_second">
                <div class=" content__text content__text_second">
                    <h2 class="content__title">Опять дедлайн</h2>
                    <p class="content__description">
                        В мире, где столько всего интересного, когда же успевать жить?
                    </p>
                </div>
                <img src="img/main_mind.png" class="content__image" alt="Картинка про взрыв мозга" width="504"
                     height="691">
            </div>
        </section>
        <h2 class="row-block main__row-block">
            На курсе ты <span class="font-color_pink">сможешь</span>
        </h2>
        <section id="animatedBlockAdventages" class="list-advantages main__list-advantages">
            <h2 class="visually-hidden">Список Преимуществ при записи на курс</h2>
            <div class="list-advantages__block">
                <img src="img/finger_one.png" alt="finger_one">
                <p>Понять, что нужно делать, а что делать не стоит.</p>
            </div>
            <div class="list-advantages__block">
                <img src="img/finger_two.png" alt="finger_two">
                <p>Перестать себя искусственно ограничивать.</p>
            </div>
            <div class="list-advantages__block">
                <img src="img/finger_three.png" alt="finger_three">
                <p>Определить сильные стороны <br> и начать использовать слабые.</p>
            </div>
            <div class="list-advantages__block">
                <img src="img/finger_four.png" alt="finger_four">
                <p>Научиться достигать любой цели <br> в 3 понятных шага.</p>
            </div>
            <div class="list-advantages__block">
                <img src="img/finger_five.png" alt="finger_five">
                <p>Сотрудничать эффективно <br> и с правильными людьми.</p>
            </div>
            <div class="list-advantages__block">
                <img src="img/finger_six.png" alt="finger_six">
                <p>Оптимизировать общение с клиентами и проведение совещаний.</p>
            </div>
        </section>
        <section class="block-faq main__block-faq">
            <h2 class="row-block block-faq__row-block">
                Всё, что вы хотели <span class="font-color_pink">узнать</span>
            </h2>
            <div class="faq__container">
                <div class="faq__accordion">
                    <button class="faq__button">
                        <span>Как проходит курс?</span>
                        <img class="faq__arrow rotate" src="img/faq_cross.png" alt="крестик">
                    </button>
                    <div class="faq__accordion_hide active">
                        <p>
                            Каждую неделю на протяжении 3 месяцев, вам приходит новый урок на
                            имейл. Проходить уроки, вы можете в комфортном для вас темпе.
                        </p>
                    </div>
                </div>
                <div class="faq__accordion">
                    <button class="faq__button">
                    <span>
                        Можно получить все уроки сразу?
                    </span>
                        <img class="faq__arrow" src="img/faq_cross.png" alt="крестик">
                    </button>
                    <div class="faq__accordion_hide hidden">
                        <p>
                            Издревле сторонились они людей — на их языке Громадин, — а теперь даже и на глаза им не
                            показываются.
                            Слух у них завидный, глаз острый; они, правда, толстоваты и не любят спешки.
                        </p>
                    </div>
                </div>
                <div class="faq__accordion">
                    <button class="faq__button">
                                <span>
                                    Если занятия не придут?
                                </span>
                        <img class="faq__arrow" src="img/faq_cross.png" alt="крестик">
                    </button>
                    <div class="faq__accordion_hide hidden">
                        <p>
                            Хоббиты — неприметный, но очень древний народец; раньше их было куда больше, чем нынче: они
                            любят
                            тишину и покой, тучную пашню и цветущие луга, а сейчас в мире стало что-то очень шумно и
                            довольно тесно.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="feedback-block main__feedback-block">
            <h2 class="feedback-block__title">
                Единственное, что нужно <span class="font-color_pink">сделать</span>
            </h2>
            <a class="button_white js-button-join">
                Записаться на курс
            </a>
        </section>
    </div>
    <footer class="footer">
        <section class="footer__author">
            <h2 class="visually-hidden">
                О авторе данного курса
            </h2>
            <img class="footer__avatar" src="img/footer_avatar.png" alt="Author photo">
            <h3 class="footer__author-name font-text__large">
                Дональд Рос
            </h3>
            <p class="footer__job font-text__small">
                Типограф, творческий предприниматель и лектор Королевской
                академии искусств Нидерландов
            </p>
            <p class="footer__hobby font-text__small">
                Создаю титры к фильмам, шрифты, сложные интерфейсы для смартфонов. Автор собственных
                креативных проектов, в том числе системы тайм-менеджмента и приложения для смартфонов
                ToDon’tList.
            </p>
            <img class="footer__socials" src="img/footer_social.png" alt="Социальные сети автора">
        </section>
        <div class="footer__logo-container">
            <a href="index.php">
                <img src="img/footer_logo.svg" class="footer__logo" alt="logo">
            </a>
        </div>
    </footer>
    <a id="scrollToStart" class="button-scroll-to-start visually-hidden">
        <img src="img/up_button.png" alt="click this button to go to the top of the page">
    </a>
    <section class="registration-form">
        <div class="overlay visually-hidden"></div>
        <div class="popup visually-hidden">
            <a class="popup_closed">
                <img src="img/popup-button_closed.svg" alt="press this button for close popup">
            </a>
            <img class="popup__logo" src="img/popup_logo.svg" alt="popup_logo">
            <h2 class="popup__content">
                Записаться на курс
            </h2>
        <?php include 'form.php' ?>

        </div>
    </section>
</div>
<script src="js/script.js"></script>
</body>
</html>
