import { createElement } from "./helper.js"

export const createHero = () => {
    const section = createElement('section', {
        className: '',
    });
    const container = createElement('div', {
        className: 'container hero__container',
    });
    section.append(container);
    const title = createElement('h1', {
        className: 'hero__title',
        innerHTML: '<span>Wish</span><span>List</span>',
    })
    const discription = createElement('p', {
        className: 'hero__discription',
        innerHTML: 'Никогда не поздно поставить новую цель или обрести новую мечту...',
    })
    const listStep = createElement('ol', {
        className: 'hero__steps steps',
    })
    const arr = ['Создайте список желаний', 'Поделитесь ссылкой с&nbsp;друзьями','Получите желанный подарок']
    arr.forEach((element) => {
        
        const step = createElement('li', {
            className: 'steps__item',
            innerHTML: element,
        })
        listStep.append(step);
    });
    container.append(title, discription, listStep);
    return section;
}