
DEMO: https://samsa13.github.io/get-short-link

Тестовое задание для Hex.team.

Основной функционал сервиса - получение по произвольной ссылке (например https://docs.docker.com/engine/reference/commandline/attach/) короткой ссылки (http://79.143.31.216/s/7ASMU), реализующей перенаправление пользователя на исходную страницу. Это может быть удобно для отправки в SMS или Twitter, где размер сообщения ограничен. Помимо этого, пользователь, создавший укороченную ссылку, может просматривать количество переходов по этой ссылке. Эта информация будет недоступна остальным пользователям.

В итоге пользователь должен мочь зарегистрироваться на сайте, авторизоваться, создать произвольное количество сокращенных ссылок и просматривать количество переходов по каждой из них.

Система должна хранить всю информацию (о пользователях, сокращенных ссылках, количествах переходов), а также генерировать сокращенные ссылки на стороне backend-а, который уже реализован, и интерактивная документация по которому доступна по ссылке http://79.143.31.216/docs.

Frontend может состоять из нескольких страниц (главное наличие функциональности):

Страница регистрации
Страница авторизации
Основная страница, реализующая следующую функциональность:

Просмотр статистики по созданным ссылкам в виде таблиц
Таблица содержит минимум три столбца - короткая ссылка, исходная ссылка, количество переходов по короткой ссылке
Таблица должна иметь пагинацию, работающую на стороне сервера
Таблица должна иметь возможность сортировки по столбцам

Можно использовать любые сторонние библиотеки и фреемворки.