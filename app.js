const colors = ["#4F4F4F", "#6A5ACD", "#0000FF", "#00BFFF", '#4682B4', '#40E0D0', '#008080', ' #5F9EA0', ' #90EE90']
const btn = document.getElementById('btn');
const color = document.querySelector ('.color')

btn.addEventListener('click', () => { 
    const randomNumber = getRandomNumber()

    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length) 
}