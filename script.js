const richtig = document.getElementById('shoppingButton');
let rCon = document.getElementById('rContainer');
richtig.addEventListener("click", function() {
    rCon.style.display = (rCon.style.display == 'none') ? 'block' : 'none';
});
const falsch = document.getElementById("langeweile")
falsch.addEventListener('click', function() {
    alert('Flasch an das denkst du nicht!')
});