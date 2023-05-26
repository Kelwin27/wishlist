export const createElement = (tagName,attr) => {
    const elem = document.createElement(tagName);
    Object.assign(elem, attr);
    return elem
};
export const pluralizeYear = (age) => {
    let years = age % 100;
    if (years >= 11 && years <= 19) {
        return 'лет';
    } else {
        if (years % 10 === 1) {
            return 'год';
        } else if (2 <= years % 10 <= 4) {
            return 'года';
        } else {
            return 'лет';
        }
    }
}