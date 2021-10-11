let btn = document.querySelector('.btn')
    .addEventListener('click', (e) => {
        e.preventDefault()
        console.log('click');

}),

    window = document.querySelector('.windowChat'), // Инициализируем окно чата
    msg = document.querySelector('.txt')