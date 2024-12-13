var ToggleButton = document.getElementById('Toggle-Skills');
var Skills = document.getElementById('Skills');
ToggleButton.addEventListener('click', function () {
    if (Skills.style.display === 'none') {
        Skills.style.display = 'block';
    }
    else {
        Skills.style.display = 'none';
    }
});
