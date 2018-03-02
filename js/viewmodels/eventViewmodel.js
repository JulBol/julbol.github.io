
function eventViewmodel() {
    var self = this;

    self.eventList = ko.observableArray([
      new Event("12.02.2018", "test-event1"),
      new Event("12.02.2018", "test-event2")
    ]);
}

var vm = new eventViewmodel();

var Event = function(date, name){
  this.id = vm.eventList.length + 1;
  this.date = date;
  this.name = name;
}

$(document).ready(function() {
  ko.applyBindings(vm);

  var event = new Event("12.02.2018", "test-event");
});
