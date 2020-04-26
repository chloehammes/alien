// Put your JavaScript here
(function (window) {
  'use strict';

  let FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  let App = window.App;
  let Truck = App.Truck;
  let DataStore = App.DataStore;
  let FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  let Validation = App.Validation;


  let myTruck = new Truck('12345', new DataStore());

  window.myTruck = myTruck;

  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

  let formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) {
  myTruck.createOrder.call(myTruck, data);
  checkList.addRow.call(checkList, data);
});

formHandler.addInputHandler(Validation.isCompanyEmail);

})(window);


var slider = document.getElementById("strengthLevel");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
