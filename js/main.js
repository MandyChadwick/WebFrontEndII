// create key value pairs in a list for the menu of the portfolio

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

  // declare variable and begin ordered list
var linksHtml = "<ul>";


//loop through links array
for (var i = 0; i < links.length; i++) {
    //assign values to variables coorelated with key.
    var i;
    var label = links[i]['label'];
    var url   = links[i]['url']  ;
    // create list Item for each item in links array
    // create anchor tag with label and url
    linksHtml += `<li><a class="btn btn-dark"  href="${url}">${label}</a></li><br>`;
    }

//close ordered list
linksHtml += "</ul>";

// insert html into the linksHtml div in index
document.getElementById('linksHtml').innerHTML = linksHtml;