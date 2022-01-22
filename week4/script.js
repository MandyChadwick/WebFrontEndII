const form = document.forms[0];
//console.log(form) 
//document.write(form)
const input = form.elements.searchInput;

input.addEventListener('focus', () => alert('focused'),
false);


const input2 = form.elements.search2Input2;
function search2(event) {
    alert(`You Searched for: ${input2.value}`);
    event.preventDefault();
}