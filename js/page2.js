'use strict';
var answer = [];

function Product(title, src) {
    this.title = title;
    this.src = src;
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

new Product('Large budget', 'image/security_cash_83077314.jpg');
new Product('Low budget', 'image/money.jpg');
new Product('Therapeutic areas', 'image/3e6213e99b60ecf9721fab409b4e5c6f.jpg');
new Product('Recreational areas', 'image/19420604_1507795409279195_2360752219730918376_n.jpg');
new Product('Sea activity', 'image/816632_0.jpg');
new Product(' Mountain activity', 'image/getlstd-property-photo.jpg');
var productindex=0;
var questionindex=0;
var questions3=[ ' what budget do you have larg or low?','what do you prefer therapeutic places or recreational places?',' what do you prefer sea activities or mountain activities?'];
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
        answer.push("yes")
    } else if (clickedId === 'right-image') {
        productClicked = Product.rightObject;
        answer.push("no")
    } else {
        console.log(' what was clicked on???', clickedId);
    }
    if (productClicked) {
        productClicked.clickCtr++;
        Product.roundCtr++;
        if (Product.roundCtr === Product.roundLimit) {
            alert('Thanks. welcome to my webpage');
            choice();

            google.maps.event.addDomListener(window, 'load', initialize);
            initialize();
            console.log("answer", answer);
            Product.container.removeEventListener('click', clickHandler);
        } else {

            renderNewProduct();
        }
    }
}


Product.container.addEventListener('click', clickHandler);
renderNewProduct();

var coords = [];
function choice(){
if (answer[0] === "yes" &&  answer[1] === "yes" && answer[2] === "yes") {
    coords.push({lat: 31.561329, lng: 35.493861});
    coords.push({lat: 29.552267, lng: 35.106759});

    

} else if (answer[0] === "yes" &&  answer[1] === "yes" && answer[2] === "no") {
    coords.push({lat: 31.947945, lng: 35.911011});
    coords.push({lat: 31.679737, lng: 35.732858});


    
} else if (answer[0] === "yes" &&  answer[1] === "no" && answer[2] === "yes") {
    coords.push({lat: 31.561329, lng: 35.493861});
    coords.push({lat: 29.552267, lng: 35.106759});


} else if (answer[0] === "yes" &&  answer[1] === "no" && answer[2] === "no") {
    coords.push({lat: 31.947945, lng:  35.911011});
    coords.push({lat: 32.335098, lng:  35.756046});
    coords.push({lat: 30.675227, lng: 35.610642});
    coords.push({lat: 29.572921, lng: 35.420289});


} else if (answer[0] === "no" &&  answer[1] === "yes" && answer[2] === "yes") {
    coords.push({lat: 31.561329, lng: 35.493861});
    coords.push({lat: 29.552267, lng: 35.106759});
    coords.push({lat: 31.679737, lng: 35.732858});

    
} else if (answer[0] === "no" &&  answer[1] === "yes" && answer[2] === "no") {
    coords.push({lat: 31.947945, lng: 35.911011});
    coords.push({lat: 31.679737, lng: 35.732858});
    
} else if (answer[0] === "no" &&  answer[1] === "no" && answer[2] === "yes") {
    coords.push({lat: 31.561329, lng: 35.493861});
    coords.push({lat: 29.552267, lng: 35.106759});
    coords.push({lat: 32.112211, lng: 35.805646});
   
    
} else if (answer[0] === "no" &&  answer[1] === "no" && answer[2] === "no") {
    console.log('answer[0] : ', answer[0]);
    coords.push({lat: 31.947945, lng:  35.911011});
    coords.push({lat: 32.335098, lng:  35.756046});
    coords.push({lat: 30.675227, lng: 35.610642});
    coords.push({lat: 29.572921, lng: 35.420289});
}  
}
// In this example, we center the map, and add a marker, using a LatLng object
// literal instead of a google.maps.LatLng object. LatLng object literals are
// a convenient way to add a LatLng coordinate and, in most cases, can be used
// in place of a google.maps.LatLng object.
var map;
function initialize() {
  var mapOptions = {
    zoom: 7.5,
    center: {lat: 31.125604, lng: 36.254896},
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
      
  // You can use a LatLng literal in place of a google.maps.LatLng object when
  // creating the Marker object. Once the Marker object is instantiated, its
  // position will be available as a google.maps.LatLng object. In this case,
  // we retrieve the marker's position using the
  // google.maps.LatLng.getPosition() method.
      for (let i = 0; i < coords.length; i++) {
      var marker = new google.maps.Marker({
          // The below line is equivalent to writing:
            position: coords[i],
            map: map
        });
        
    }


}

