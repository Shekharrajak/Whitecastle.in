Session.setDefault("counter2",0);
Template.products.helpers({
    'productlist':function(){
    return Products.find({catName:Session.get('category')});
    },
    'catnotselected':function(){
        return Session.equals('category',null);
    },
    'category':function(){
        return Session.get('category');
    },
     count2: function () {
        Session.set("counter2", Session.get("counter2") + 0.2);
      return Session.get("counter2");
    }
}) 

Template.product.events({
    'click .addcart':function(evt,tmpl){
        var qty = tmpl.find('.prodqty').value;
        var product = this._id;
        var sessid = Meteor.default_connection._lastSessionId;
        Meteor.call('addToCart',qty,product,sessid);
        tmpl.find('.prodqty').value = 0;
    }
});
Template.products.rendered = function() {
  new WOW().init();
}

