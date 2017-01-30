var ViewModel = function(){
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https:www.flikr.com');

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  }

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

ko.applyBindings(new ViewModel());
