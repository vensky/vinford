/*4. Имеются следующие URL
https://itrack.ru/portfolio/website/
https://itrack.ru/portfolio/vnedrenie-crm/
https://itrack.ru/portfolio/website/filter/project_type-is-korporativnyy_sayt/apply/
https://itrack.ru/portfolio/vnedrenie-crm/filter/crm_project_type-is-amocrm/apply/
https://itrack.ru/portfolio/website/?PAGEN_1=2
https://itrack.ru/portfolio/vnedrenie-crm/?PAGEN_1=2
https://itrack.ru/portfolio/vnedrenie-crm/mobifitness/
https://itrack.ru/portfolio/website/miratorg/

Необходимо при загрузке страницы заполнить массив с параметрами страницы:
Тип страницы (type) - index, filter, project, nextPage
Направление работы (direct) - website, crm
Параметры фильтра (filterParam) - строка между filter и apply
Проект (project) - код проекта из url

И при изменении URL без перезагрузки страницы массив должен быть обновлён.*/

const initUrl = () => {
    let pageParam = [];
    let path = window.location.pathname;
    let pageUrl = path.slice(11).split('/');


   if (pageUrl[0] === 'website') {
        pageParam[1] = 'website';
    } else {
        pageParam[1] = 'crm';
    }

    if (pageUrl[1] === '') {
        pageParam[0] = 'index';
    } else if (pageUrl[1] === 'filter') {
        pageParam[0] = 'filter';
        pageParam[2] = pageUrl[2];
    } else if (pageUrl[1][0] === '?') {
        pageParam[0] = 'nextPage';
    } else {
        pageParam[0] = 'project';
        pageParam[1] = pageUrl[1]
    }

    console.log(pageParam)
}
const updateURL = (newUrl) => {
    if (history.pushState) {
        history.pushState(null, null, 'https://itrack.ru/portfolio/' + newUrl);
        initUrl();
    }
    else {
        console.warn('History API не поддерживает ваш браузер');
    }
}

updateURL();
initUrl();
