(function (window) {
  'use strict';
  let App = window.App || {};
  let $ = window.jQuery;
  function CheckList(selector) {
    if (!selector) {
      throw new Error('No selector provided');

    }

    CheckList.prototype.addClickHandler = function(fn) {
      this.$element.on('click', 'input', function(event) {
        var email = event.target.value;
        this.removeRow(email);
        fn(email);
      }.bind(this));
    };

    CheckList.prototype.addRow = function (coffeeOrder) {
      this.removeRow(coffeeOrder.emailAddress);
      var rowElement = new Row(coffeeOrder);

      this.$element.append(rowElement.$element);
    };

    CheckList.prototype.removeRow = function (email) {
      this.$element
      .find('[value="' + email + '"]')
      .closest('[data-coffee-order="checkbox"]')
      .remove();
    }

    this.$element = $(selector);
    if (this.$element.length == 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }

    function Row(coffeeOrder) {

      let $div = $('<div></div>', {
        'data-coffee-order': 'checkbox',
        'class': 'checkbox'
      });
      let $label = $('<label></label>');

      let $checkbox = $('<input></input>', {
        type: 'checkbox',
        value: coffeeOrder.emailAddress
      });

    let description = "Thank you for the feedback! ";
    description += coffeeOrder.coffee + ', ';
    description += ' (' + coffeeOrder.emailAddress + ') ';
    description += ' Favorite: ' + coffeeOrder.size + ' ';
    description += ' Comments: (' + coffeeOrder.comments + ')';
    if(coffeeOrder.flavor) {
      description += ' Opinion: ' + coffeeOrder.flavor + ' ';
    }
    description += 'Rating: [' + coffeeOrder.strength + 'x]';

    $label.append($checkbox);
    $label.append(description);
    $div.append($label);
    this.$element = $div;
}
  }
  App.CheckList = CheckList;
  window.App = App;
})(window);
