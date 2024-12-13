
const ToggleButton = document.getElementById('Toggle-Skills') as HTMLButtonElement
const Skills = document.getElementById('Skills') as HTMLElement

ToggleButton.addEventListener('click', ()=> {
    if (Skills.style.display === 'none') {
        Skills.style.display = 'block'
    } else {
        Skills.style.display = 'none'
    }
});