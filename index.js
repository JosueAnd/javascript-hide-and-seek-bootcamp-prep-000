function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('*#nested *.target');
}

function increaseRankBy(n) {
    const obj = document.querySelectorAll('.ranked-list');
    for(let index = 0; index < obj.length; index++) {
        obj[index].innerHTML = (index + n).toString();
    }
}