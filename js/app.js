var initialCats = [
  {
    id: 0,
    name: "Xuxa",
    imgSrc: "img/xuxa.jpg",
    clickCount: 0,
    nicknames: ['Tabs', 'Lil T', '4 spaces', 'Tabby Tab Tab Tab', 'Tabbin']
  },
  {
    id: 1,
    name: "Chewie",
    imgSrc: "img/chewie.jpg",
    clickCount: 0,
    nicknames: ['Chewbacca']
  },
  {
    id: 2,
    name: "Gato",
    imgSrc: "img/gato.jpg",
    clickCount: 0,
    nicknames: ['Cat']
  },
  {
    id: 3,
    name: "Mittens",
    imgSrc: "img/mittens.jpg",
    clickCount: 0,
    nicknames: ['Gloves']
  },
  {
    id: 4,
    name: "Fluffy",
    imgSrc: "img/fluffy.jpg",
    clickCount: 0,
    nicknames: ['Fluffy Mufficans']
  }
];

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

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push( new Cat(catItem) );
  });

  this.currentCat = ko.observable( this.catList()[0] );

  console.log(this.catList()[1]);


  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
    //self.currentCat().clickCount(self.currentCat().clickCount() + 1);  --using self allows us to using currentCat() when referencing currentCat in conjunction using 'with data-bind'
  };

  this.setCat = function(clickedCat){
    self.currentCat(clickedCat);
  };
}

ko.applyBindings(new ViewModel());
