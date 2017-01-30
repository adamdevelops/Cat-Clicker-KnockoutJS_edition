var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);

  this.catLevel = ko.computed(function(){
    console.log("The Cat Level is:")

    var title;

    var clicks = this.clickCount();

    if (clicks < 0){
      return title = 'New Born';
      console.log("New Born")
    }
    else if (clicks < 10){
      return title = 'Infant';
    }
    else if (clicks < 30){
      return title = 'Teen';
    }
    else if (clicks < 100){
      return title = 'That Cat is Grown';
    }
    else {
      return title = 'That Cat is Really Really Old';
    }

    return title;

  }, this);

}


var ViewModel = function(){
  var self = this;    //--- referencing the ViewModel itself, thus the outer this outside of the div of where we applied the 'with data-bind'
  this.currentCat = ko.observable( new Cat({
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    nicknames: ['Tabs', 'Lil T', '4 spaces', 'Tabby Tab Tab Tab', 'Tabbin']
  }) );

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
    //self.currentCat().clickCount(self.currentCat().clickCount() + 1);  --using self allows us to using currentCat() when referencing currentCat in conjunction using 'with data-bind'
  };
};

ko.applyBindings(new ViewModel());
