const btn = document.querySelector('.btn')
const progressElements = document.querySelectorAll('progress')
const progressValues = document.querySelectorAll('.value')


btn.addEventListener('click', () => {
    progressElements.forEach(element => {
        element.value = 100;
    });
    progressValues.forEach(element => {
        element.innerHTML = '100%';
    });
})