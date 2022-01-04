const links = [
    {
      label: "Week One",
      url: "week1/index.html"
    },

    {
        label: "Week Two",
        url: "week2/index.html"
      },

      {
        label: "Week Three",
        url: "week3/index.html"
      },

      {
        label: "Week Four",
        url: "week4/index.html"
      },

      {
        label: "Week Five",
        url: "week5/index.html"
      },

      {
        label: "Week Six",
        url: "week6/index.html"
      },

      {
        label: "Week Seven",
        url: "week7/index.html"
      },

      {
        label: "Week Eight",
        url: "week8/index.html"
      },

      {
        label: "Week Nine",
        url: "week9/index.html"
      },
      {
        label: "Week Ten",
        url: "week10/index.html"
      },
      {
        label: "Week Eleven",
        url: "week11/index.html"
      },
      {
        label: "Week Twelve",
        url: "week12/index.html"
      }
    ,
    {
        label: "Week Thirteen",
        url: "week13/index.html"
      },
      {
        label: "Week Fourteen",
        url: "week14/index.html"
      }
  ]

 


const theList = document.querySelector('#list');


// loops through the links array and grabs the label and sets it in the li
for (i = 0; i <= links.length - 1; i++) {
    const li = document.createElement('li');
    //adding the id addLink so I can loop through and add the a tags inside the li
    li.setAttribute('id', 'addLink');
    li.innerText = links[i].label + ': '

    // const a = document.createElement('a')
    // a.setAttribute('href', links[i].url);

    theList.appendChild(li);
}

//grabs the li nested in the ul 
const theLi = document.querySelector('#addLink');

// loops again to add the links to the li element


for (i = 0; i <= links.length - 1; i++){
    const a = document.createElement('a');
    a.setAttribute('href', links[i].url);
    a.innerText = "Click Here";

    theLi.appendChild(a);
}