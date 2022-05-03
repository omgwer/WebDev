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
    <link rel="stylesheet" href="css/style.min.css">
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
    <?php include 'main.php' ?>
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
        <div class="overlay hidden"></div>
        <div class="popup hidden">
            <a class="popup_closed">
                <img src="img/popup-button_closed.svg" alt="press this button for close popup">
            </a>
            <img class="popup__logo" src="img/popup_logo.svg" alt="popup_logo">
            <h2 class="popup__content">
                Записаться на курс
            </h2>
            <?php include 'form.php' ?>
            <span class="font-text__large popup__error-message"></span>
        </div>
    </section>
</div>
<script src="js/script.js"></script>
</body>
</html>
