<form id="validate" method="post" action="saveData.php" target="_blank" class="feedback-form feedback-block__feedback-form">
    <div class="feedback-form__fieldspace">
        <label class="feedback-form__group">
            <input class="feedback-form__name"
                   type="text"
                   id="user_name"
                   name="user_name"
                   placeholder="Ваше имя"
                   required
                   title="Введите свое имя без цифр и символов"
                   pattern="^[A-Za-zА-Яа-яЁё\s]+$"
                   autocomplete="off">
        </label>
        <label class="feedback-form__group">
            <input class="feedback-form__email"
                   type="email"
                   name="user_email"
                   id="user_email"
                   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                   title="Введите действительный email"
                   placeholder="Email"
                   required>
        </label>
        <div class="feedback-form__container valid">
            <div class="select-box">
                <div class="options-container">
                    <div class="option">
                        <input type="radio"
                               class="radio"
                               id="grade-a"
                               name="category"
                               value="prog"
                               required="required"
                        />
                        <label for="grade-a">
                            <span>Программист</span>
                        </label>
                    </div>
                    <div class="option">
                        <input type="radio"
                               class="radio"
                               id="grade-b"
                               name="category"
                               value="diz"/>
                        <label for="grade-b">
                            <span>Дизайнер</span>
                        </label>
                    </div>
                    <div class="option">
                        <input type="radio"
                               class="radio"
                               id="grade-c"
                               name="category"
                               value="mark"/>
                        <label for="grade-c">
                            <span>Маркетолог</span>
                        </label>
                    </div>
                </div>
                <div class="selected">
                    <span>Вид деятельности</span>
                </div>
            </div>
        </div>
        <div class="checkbox-block main__checkbox-block">
            <input required id="button" class="checkbox-block__button custom-checkbox" type="checkbox"
                   name="spam_approve">
            <label for="button" class="checkbox-block__title">
                Согласен получать информационные материалы о старте курса
            </label>
        </div>
    </div>
    <input class="feedback-form__submit" formmethod="post" type="submit" value="Записаться на курс">
</form>


