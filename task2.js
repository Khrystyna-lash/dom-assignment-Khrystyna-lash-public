// Простилізуйте елементи, як показано на зображенні task2.png.
// - Фон заголовка має бути "lightgreen".
// - Шрифт першого параграфа — жирний (font-weight: 700).
// - Колір другого параграфа — "red".
// - Третій параграф має бути підкреслений (underline).
// - Четвертий параграф має бути курсивним (italic).
// - Список має бути без маркерів і відображатися в одну лінію за допомогою flex.
// - На сторінці є елемент <span>, який потрібно приховати, встановивши властивість display: none.
const title = document.getElementById('title');
if (title) title.style.backgroundColor = "lightgreen";

const paragraphs = document.querySelectorAll('#myDiv p');
if (paragraphs[0]) paragraphs[0].style.fontWeight = "700";
if (paragraphs[1]) paragraphs[1].style.color = "red";
if (paragraphs[2]) paragraphs[2].style.textDecoration = "underline";
if (paragraphs[3]) paragraphs[3].style.fontStyle = "italic";

const myList = document.getElementById('myList');
if (myList) {
    myList.style.listStyleType = "none";
    myList.style.display = "flex";
}

const span = document.querySelector('.style_elements span');
if (span) span.style.display = "none";
