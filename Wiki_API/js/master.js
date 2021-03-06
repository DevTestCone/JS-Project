// Search Query: https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=
"use strict"
window.onload = function() {
  
  document.querySelector('.grid').style.visibility = "hidden";
  let url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
  let searchInput = document.getElementById('searchInput');
  let valueInput;
  let storeInput;
  let trimmedString;
  let nodeHeading = [
    document.getElementById('one_h1'),
    document.getElementById('two_h1'),
    document.getElementById('three_h1'),
    document.getElementById('four_h1'),
    document.getElementById('five_h1'),
    document.getElementById('six_h1'),
    document.getElementById('seven_h1'),
    document.getElementById('eight_h1')
  ]
  let nodeParagraph = [
    document.getElementById('one_p'),
    document.getElementById('two_p'),
    document.getElementById('three_p'),
    document.getElementById('four_p'),
    document.getElementById('five_p'),
    document.getElementById('six_p'),
    document.getElementById('seven_p'),
    document.getElementById('eight_p')
  ];
  let nodeLink = [
    document.getElementById('one_a'),
    document.getElementById('two_a'),
    document.getElementById('three_a'),
    document.getElementById('four_a'),
    document.getElementById('five_a'),
    document.getElementById('six_a'),
    document.getElementById('seven_a'),
    document.getElementById('eight_a')
  ];

  let dataNodeHeading, dataNodeParagraph, dataNodeLink;

  searchInput.onkeydown = function(e) {
    switch (e.keyCode || event.which) {
      case 13:
        document.querySelector('.grid').style.visibility = "visible";
        valueInput = searchInput.value;
        storeInput = url + valueInput;
        valueInput = '';
        console.log(storeInput);
        $.ajax({
          type: 'GET',
          url: storeInput,
          dataType: "JSONP", // data type expected from server
          success: function(data) {
            for (var i = 0; i < nodeHeading.length; i++) {
              dataNodeHeading = document.createTextNode(data[1][i]);
                trimmedString = dataNodeHeading.textContent;
                let x = trimmedString.indexOf("(");
                if (x >= 0) {
                  nodeHeading[i].innerHTML = trimmedString.substring(0,x);
                  //console.log(true);
                }else{
                  nodeHeading[i].innerHTML = trimmedString;
                  //console.log(false);
                }
              dataNodeParagraph = document.createTextNode(data[2][i]);
              nodeParagraph[i].innerHTML = dataNodeParagraph.textContent.substring(0,200) + "...";
              dataNodeLink = document.createTextNode(data[3][i]);
              nodeLink[i].innerHTML = dataNodeHeading.textContent + " Wiki Page";
              nodeLink[i].href = dataNodeLink.textContent;
              nodeLink[i].target = "blank";

            }

          },
          error: function(data) {
            console.log('Error: ' + data);
          }
        });
    }
  }
}



// nodeHeading = document.createElement("H1");
// dataNodeHeading = document.createTextNode(data[1][i]);
// nodeHeading.appendChild(dataNodeHeading);
// document.body.appendChild(nodeHeading);
// nodeParagraph = document.createElement("P");
// dataNodeParagraph = document.createTextNode(data[2][i]);
// nodeParagraph.appendChild(dataNodeParagraph);
// document.body.appendChild(nodeParagraph);
//LINK TO WIKI
// nodeLink = document.createElement("A");
// dataNodeLink = document.createTextNode(data[3][i]);
// nodeLink.appendChild(dataNodeHeading);
// nodeLink.target = "blank";
// nodeLink.href = dataNodeLink.textContent;
// console.log(dataNodeLink.textContent);
// document.body.appendChild(nodeLink)
// function escapeRegExp(trimmed) {
//   return trimmed.replace(/[.*+?^${}()|[]\\]/g, '\\$&'); // $& means the whole matched string
// }
//
// nodeHeading[i].innerHTML = escapeRegExp(trimmedString);
