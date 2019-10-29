'use strict';
var answer = [];
function Product(title, src) {
   this.title = title;
   this.src = src;
   this.clickCtr = 0;
   this.shownCtr = 0;
   Product.all.push(this);
}
Product.roundCtr = 0;
Product.roundLimit = 3;
Product.all = [];
Product.container = document.getElementById('product-container');
Product.leftImage = document.getElementById('left-image');
Product.rightImage = document.getElementById('right-image');
Product.leftTitle = document.getElementById('left-title');
Product.rightTitle = document.getElementById('right-title');
Product.leftObject = null;
Product.rightObject = null;
new Product('high budget', 'image/high.jpg');
new Product('low budget', 'image/download.png');
new Product('Therapeutic areas', 'image/images (1).jpg');
new Product('Recreational areas', 'image/Amman.jpg');
new Product('sea activity', 'image/download.jpg');
new Product('other activities', 'image/images.jpg');
console.log('Product.all : ', Product.all);
var productindex=0;
var questionindex=0;
var questions3=[ ' Do you have large budget?','Do you prefer a therapeutic places?',' Do you prefer Sea Activities?'];
function renderNewProduct() {
   Product.leftObject = Product.all[productindex];
   Product.rightObject = Product.all[productindex+1];
  var questions=document.getElementById('thequestaion');
   var h1 =document.createElement('h1');
   questions.appendChild(h1);
   var textnode = document.createTextNode(questions3[questionindex]);
   h1.appendChild(textnode)
   var leftProductImageElement = Product.leftImage;
   var rightProductImageElement = Product.rightImage;
   leftProductImageElement.setAttribute('src', Product.leftObject.src);
   leftProductImageElement.setAttribute('alt', Product.leftObject.title);
   rightProductImageElement.setAttribute('src', Product.rightObject.src);
   rightProductImageElement.setAttribute('alt', Product.rightObject.title);
   Product.leftTitle.textContent = Product.leftObject.title;
   Product.rightTitle.textContent = Product.rightObject.title;
   productindex=productindex+2;
   questionindex++;
   questions.replaceChild(h1, questions.childNodes[0])
}
function clickHandler(event) {
   var clickedId = event.target.id;
   var productClicked;
   if (clickedId === 'left-image') {
       productClicked = Product.leftObject;
       answer.push('yes')
   } else if (clickedId === 'right-image') {
       productClicked = Product.rightObject;
       answer.push('no')
   } else {
       console.log(' what was clicked on???', clickedId);
   }
   if (productClicked) {
       productClicked.clickCtr++;
       Product.roundCtr++;
       if (Product.roundCtr === Product.roundLimit) {
           alert('Thanks. welcome to my webpage');
           console.log("answer", answer)
           Product.container.removeEventListener('click', clickHandler);
           func2();
           google.maps.event.addDomListener(window, 'load', initialize);

           initialize();

       } else {
           renderNewProduct();
       }
   }
}
Product.container.addEventListener('click', clickHandler);
renderNewProduct();


    
    var coords = [];
    function func2() {
    if (answer[0] === "yes" &&  answer[1] === "yes" && answer[2] === "yes") {
       coords.push({lat: 30.765280, lng: 35.594552});
       alert('hi');
    } else if (answer[0] === "yes" &&  answer[1] === "yes" && answer[2] === "no") {
       coords.push({lat: 33.765280, lng: 33.594552});
    } else if (answer[0] === "yes" &&  answer[1] === "no" && answer[2] === "yes") {
       coords.push({lat: 30.765280, lng: 35.594552});
    } else if (answer[0] === "yes" &&  answer[1] === "no" && answer[2] === "no") {
       coords.push({lat: 30.765280, lng: 35.594552});
    } else if (answer[0] === "no" &&  answer[1] === "yes" && answer[2] === "yes") {
       coords.push({lat: 30.765280, lng: 35.594552});
    } else if (answer[0] === "no" &&  answer[1] === "yes" && answer[2] === "no") {
       coords.push({lat: 30.765280, lng: 35.594552});
    } else if (answer[0] === "no" &&  answer[1] === "no" && answer[2] === "yes") {
       coords.push({lat: 30.765280, lng: 35.594552});
    } else if (answer[0] === "no" &&  answer[1] === "no" && answer[2] === "no") {
       coords.push({lat: 30.765280, lng: 35.594552});
    }}
    // In this example, we center the map, and add a marker, using a LatLng object
    // literal instead of a google.maps.LatLng object. LatLng object literals are
    // a convenient way to add a LatLng coordinate and, in most cases, can be used
    // in place of a google.maps.LatLng object.
    var map;
    function initialize() {
     var mapOptions = {
       zoom: 15,
       center: coords[0]
       
     };
     map = new google.maps.Map(document.getElementById('map'),
         mapOptions);
     var marker = new google.maps.Marker({
       // The below line is equivalent to writing:
       // position: new google.maps.LatLng(-34.397, 150.644)
       position: coords[0],
       map: map
     });
     // You can use a LatLng literal in place of a google.maps.LatLng object when
     // creating the Marker object. Once the Marker object is instantiated, its
     // position will be available as a google.maps.LatLng object. In this case,
     // we retrieve the marker's position using the
     // google.maps.LatLng.getPosition() method.
     var infowindow = new google.maps.InfoWindow({
       content: '<p>Marker Location:' + marker.getPosition() + '</p>'
     });
     google.maps.event.addListener(marker, 'click', function() {
       infowindow.open(map, marker);
     });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
    
    
   
/////////////////////////////////////////////////////////////////////////////////////////////////

// function getProductTitles() {

//   var productTitles = [];

//   for (var i = 0; i < Product.all.length; i++) {
//     var productInstance = Product.all[i];
//     productTitles.push(productInstance.title + ' clicked');

//   }
//   return productTitles;
// }
// function getClickedScore() {

//   var ClickedScore = [];

//   for (var i = 0; i < 20; i++) {
//     var ClickedInstance = Product.all[i];
//     ClickedScore.push(ClickedInstance.clickCtr);

//   }
//   return ClickedScore;
// }

// function renderChart() {

//   var ctx = document.getElementById('myChart').getContext('2d');

//   var chart = new Chart(ctx, {

//     type: 'line',

//     data: {
//       labels: getProductTitles(),

//       datasets: [
//         {
//           label: 'Products',
//           backgroundColor: 'rgb(255, 99, 132)',
//           borderColor: 'rgb(255, 99, 132)',
//           data: getClickedScore(),
//         }
//       ]
//     },
//     options: {}
//   })
// }


// function getProductTitles2() {

//   var productTitles = [];

//   for (var i = 0; i < Product.all.length; i++) {
//     var productInstance = Product.all[i];
//     productTitles.push(productInstance.title + ' shown');

//   }
//   return productTitles;
// }
// function getShownNumber() {

//   var shownScore = [];

//   for (var i = 0; i < Product.all.length; i++) {
//     var shownInstance = Product.all[i];
//     shownScore.push(shownInstance.shownCtr);

//   }
//   return shownScore;
// }

// function renderChart2() {

//   var ctx = document.getElementById('theotherone').getContext('2d');

//   var chart = new Chart(ctx, {

//     type: 'line',

//     data: {
//       labels: getProductTitles2(),

//       datasets: [
//         {
//           label: 'Products',
//           backgroundColor: 'rgb(255, 99, 132)',
//           borderColor: 'rgb(255, 99, 132)',
//           data: getShownNumber(),
//         }
//       ]
//     },
//     options: {}
//   })
// }




/////////////////////////////////////////////////////////////////////////////////////////////////

// function updateclicked(){
//   var dataString=JSON.stringify( Product.all);
//   localStorage.setItem('reports',dataString);
// }
// function getClicked(){
//   var data =localStorage.getItem('reports');
//   var dataOriginal=JSON.parse(data);
//   if(dataOriginal){
//     for (var i=0;i<dataOriginal.length;i++){
//       var rawObject = dataOriginal[i];
//       var currentProduct =Product.all[i];
//       currentProduct.clickCtr=rawObject.clickCtr;
//       currentProduct.shownCtr=rawObject.shownCtr;



//     }
//     console.log('rawobject', dataOriginal[0].clickCtr);
//     console.log('product', Product.all[0].clickCtr);

//     renderNewProduct();  }
//   }

//   renderNewProduct();

//   getClicked();
