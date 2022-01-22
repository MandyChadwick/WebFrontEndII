const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault(); //prevent the form form being submitted

const hero = {}; // crete an empty object

hero.name = form.heroName.value;
alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
 return hero;

 hero.powers = [];
 for (let i=0; i< form.powers.length; i++) {
     if (form.powers[i].checked){
         hero.powers.push(form.powers[i].value);
     }
 }

 hero.category = form.category.value;
 hero.age = form.age.value;
hero.city = form.city.value;
hero.origin = form.origin.value;

// form.city.options[form.city.selectedIndex].text
//From the example above, it should be clear that you can access the text of ny option using index notation

 // same as hero.powers = [...form.powers].filter(box =>box.checked).map => box.value);
 //could automatically check the boxes p 302 Novice to Ninja
}

hero.realName = form.realName.value;