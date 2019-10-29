'use strict';
var answer = [];
var answers=[];
function Theanswers(q1, q2, q3) {
   this.q1=q1;
   this.q2=q2;
   this.q3=q3;
};
function submitHandler(event) {
   event.preventDefault();
   var q1 = event.target.q1.value;
   console.log('q1', q1);
   var q2 =parseInt(event.target.q2.value);
   console.log('q2', q2);
   var q3 =event.target.q3.value;
   console.log('q3', q3);
   var newanswer = new Theanswers(q1,q2,q3);
   console.log('new answer', newanswer)
   answers.push(q1);
   answers.push(q2);
   answers.push(q3);

   console.log('answers',answers)
   // func();
   // func2();
   // google.maps.event.addDomListener(window, 'load', initialize);
   personalinformation();
   console.log('cords : ',coords[0])
   // initialize() ;

};
var newanswerform = document.getElementById("Answers");
newanswerform.addEventListener('submit', submitHandler);

function personalinformation()  {
   var section =document.getElementById("personalinformation");
   var p =document.createElement('p')
   section.appendChild(p);
   p.textContent=answers;

}






/////////////////////////////////////////////////////////////////////////////////////////////////////
function func() {
for (var i = 0; i < answer.length; i++) {
   var currentAnswer =answer[i]; 
   console.log('currentAnswer',currentAnswer)
   switch (currentAnswer) {
       case 'yes':
       case 'y':
          answer.push('yes');
           break;
       case 'no':
       case 'n':
          answer.push('no');
           break;
       default:
           alert(' Wrong Answer!');
   }
}}

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

