Meteor.startup(function(){
    if(Products.find().count()==0){
        //add sample products
        Products.insert({name:'Juice 1',desc:'Awesome apple',price:20.50,catName:'Juice'});
        Products.insert({name:'Juice 2',desc:'Awesome blackberry',price:30.50,catName:'Juice'});
        Products.insert({name:'Cold Drinks 1',desc:'Awesome mods',price:40.50,catName:'Cold Drinks'});
        Products.insert({name:'Cold Drinks 2',desc:'Awesome Rice',price:100.50,catName:'Cold Drinks'});

        Products.insert({name:'Cold Drinks 3',desc:'Awesome Rice',price:120.50,catName:'Cold Drinks'});
        Products.insert({name:'Cold Drinks 4',desc:'Awesome Rice',price:130.50,catName:'Cold Drinks'});
        Products.insert({name:'Cold Drinks 5',desc:'Awesome Rice',price:140.50,catName:'Cold Drinks'});
        Products.insert({name:'Food 6',desc:'Awesome Rice',price:150.50,catName:'Lunch'});
        Products.insert({name:'Food 7',desc:'Awesome Rice',price:160.50,catName:'Lunch'});
        Products.insert({name:'Food 8',desc:'Awesome Rice',price:170.50,catName:'Lunch'});
        Products.insert({name:'Food 9',desc:'Awesome Rice',price:180.50,catName:'Lunch'});
        Products.insert({name:'Food 10',desc:'Awesome Rice',price:190.50,catName:'Lunch'});
        Products.insert({name:'Food 11',desc:'Awesome Rice',price:200.50,catName:'Lunch'});
        Products.insert({name:'Food 12',desc:'Awesome Rice',price:300.50,catName:'Lunch'});
        Products.insert({name:'Food 13',desc:'Awesome Rice',price:400.50,catName:'Lunch'});
        Products.insert({name:'Food 14',desc:'Awesome Rice',price:500.50,catName:'Lunch'});
        Products.insert({name:'Food 15',desc:'Awesome Rice',price:600.50,catName:'Lunch'});
        Products.insert({name:'Food 16',desc:'Awesome Rice',price:700.50,catName:'Lunch'});
        Products.insert({name:'Food 17',desc:'Awesome Rice',price:800.50,catName:'Lunch'});
        Products.insert({name:'Food 18',desc:'Awesome Rice',price:900.50,catName:'Lunch'});
        Products.insert({name:'Food 19',desc:'Awesome Rice',price:1000.50,catName:'Lunch'});
        Products.insert({name:'Food 20',desc:'Awesome Rice',price:50.50,catName:'Lunch'});
        Products.insert({name:'Food 21',desc:'Awesome Rice',price:60.50,catName:'Lunch'});
        Products.insert({name:'Food 22',desc:'Awesome Rice',price:70.50,catName:'Lunch'});
        Products.insert({name:'Food 23',desc:'Awesome Rice',price:80.50,catName:'Lunch'});
        Products.insert({name:'Food 24',desc:'Awesome Rice',price:90.50,catName:'Lunch'});
        Products.insert({name:'Food 25',desc:'Awesome Rice',price:110.50,catName:'Lunch'});
        Products.insert({name:'Food 26',desc:'Awesome Rice',price:120.50,catName:'Lunch'});
        Products.insert({name:'Food 27',desc:'Awesome Rice',price:130.50,catName:'Lunch'});
        

    }
    if(Categories.find().count()==0){
        var foid =Categories.insert({name:'FOOD'});
        var juid = Categories.insert({name:'JUICE'});
        SubCategories.insert({name:'Breakfast',cat:foid});
        SubCategories.insert({name:'Lunch',cat:foid});
        SubCategories.insert({name:'Juice',cat:juid});
        SubCategories.insert({name:'Cold Drinks',cat:juid});
    }
});
Meteor.methods({
    //remove  before production
    removeAll:function(){
        Products.remove({});
        Categories.remove({});
        SubCategories.remove({});
        CartItems.remove({});
    },
    addToCart:function(qty,product,session){
        if(qty>0){
            CartItems.insert({qty:qty,product:product,sessid:session});
        }else{
            console.log('quantity is zero');
        }
    },
    removeCartItem:function(id){
        CartItems.remove({_id:id});
    }

});
