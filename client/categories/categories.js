Session.setDefault("counter",0);
Session.setDefault("counter1",0);
Template.categories.helpers({
	'Categories':function(){
		//var countVar = ;
        //Session.set("count", Session.get("count") + 1);
	    return Categories.find();
	
	},
	'SubCategories':function(){
		return SubCategories.find({cat:this._id});
	},

    count: function () {
    	Session.set("counter", Session.get("counter") + 0.2);
      return Session.get("counter");
    },
     count1: function () {
    	Session.set("counter1", Session.get("counter1") + 0.2);
      return Session.get("counter1");
    }
}) ;
Template.categories.rendered = function() {
  new WOW().init();
}
