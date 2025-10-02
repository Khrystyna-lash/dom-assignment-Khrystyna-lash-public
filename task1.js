// На HTML-сторінці є ненумерований список з id="list", який містить 5 елементів <li>
// Використовуючи засоби DOM, отримай доступ до всіх елементів списку та виведи їх вміст в консоль (console.log) в такому порядку:
// перший елемент → останній елемент → другий елемент → третій елемент → четвертий елемент
// *Додатково: кількість елементів може бути довільною і невідомою наперед
// *Додатково: на сторінці можуть бути інші списки, всередині потрібного списку можуть бути інші елементи, крім <li>.
// Вважайте, що скрипт підключено в кінці body, тести не генерують подію `DOMContentLoaded`.
const targetList = document.querySelector('ul#list');
if (targetList) {
    // Беремо тільки <li> серед дітей списку
    const items = Array.from(targetList.children).filter(el => el.tagName === 'LI');
    if (items.length > 0) {
        // Перший
        console.log(items[0].textContent);
        // Останній
        if (items.length > 1) {
            console.log(items[items.length - 1].textContent);
        }
        // Другий, третій, четвертий і т.д. (з другого до передостаннього)
        for (let i = 1; i < items.length - 1; i++) {
            console.log(items[i].textContent);
        }
    }
}