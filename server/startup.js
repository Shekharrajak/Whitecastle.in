Meteor.startup(function(){
    if(Products.find().count()==0){
        //add sample products
     
        Products.insert({name:'Chilli Chicken',desc:'Awesome Rice',price:150.50,catName:'Starters'});
        Products.insert({name:'Chicken manchuria',desc:'Awesome Rice',price:160.50,catName:'Starters'});
        Products.insert({name:'Drums of heaven',desc:'Awesome Rice',price:170.50,catName:'Starters'});
        Products.insert({name:'Chicken nuggets',desc:'Awesome Rice',price:180.50,catName:'Starters'});
        Products.insert({name:'Chicken cheese nuggets',desc:'Awesome Rice',price:190.50,catName:'Starters'});
        Products.insert({name:'French fries',desc:'Awesome Rice',price:200.50,catName:'Starters'});
        Products.insert({name:'Chicken 65',desc:'Awesome Rice',price:300.50,catName:'Starters'});
        Products.insert({name:'Mutton biryani',desc:'Awesome Rice',price:400.50,catName:'Biryani'});
        Products.insert({name:'Veg biryani',desc:'Awesome Rice',price:500.50,catName:'Biryani'});
        Products.insert({name:'Chicken biryani family pack',desc:'Awesome Rice',price:600.50,catName:'Biryani'});
        Products.insert({name:'Chicken biryani jumbo pack',desc:'Awesome Rice',price:700.50,catName:'Biryani'});
        Products.insert({name:'Mutton biryani family pack',desc:'Awesome Rice',price:800.50,catName:'Biryani'});
        Products.insert({name:'Chicken biryani',desc:'Awesome Rice',price:900.50,catName:'Biryani'});
        Products.insert({name:'Chicken cheese burger',desc:'Awesome Rice',price:1000.50,catName:'Burger'});
        Products.insert({name:'Veg burger',desc:'Awesome Rice',price:50.50,catName:'Burger'});
        Products.insert({name:'Chicken burger',desc:'Awesome Rice',price:60.50,catName:'Burger'});
        Products.insert({name:'Veg cheese burger',desc:'Awesome Rice',price:70.50,catName:'Burger'});
        Products.insert({name:'Chicken cheese pizza',desc:'Awesome Rice',price:80.50,catName:'Pizza'});
        Products.insert({name:'Veg cheese pizza',desc:'Awesome Rice',price:90.50,catName:'Pizza'});
        Products.insert({name:'Schezwan noodles veg/egg/chicken',desc:'Awesome Rice',price:110.50,catName:'Maincourse'});
        Products.insert({name:'Hakka noodles veg/egg/chicken',desc:'Awesome Rice',price:120.50,catName:'Maincourse'});
        Products.insert({name:'Fried rice veg/egg/chicken',desc:'Awesome Rice',price:130.50,catName:'Maincourse'});
          Products.insert({name:'Schezwan rice veg/egg/chicken',desc:'Awesome apple',price:20.50,catName:'Maincourse'});
        Products.insert({name:'Chinese ( 1 Starter + rice/noodles + coke)',desc:'Awesome blackberry',price:30.50,catName:'Combos'});
        Products.insert({name:'Indian ( 1 kebab + biryani + coke)',desc:'Awesome mods',price:40.50,catName:'Combos'});
        Products.insert({name:'American ( French fried + burger + coke)',desc:'Awesome Rice',price:100.50,catName:'Combos'});

        Products.insert({name:'1 biryani family pack + 2 starters + 2l coke',desc:'Awesome Rice',price:120.50,catName:'Stoned'});
        Products.insert({name:'2 cheese burgers + large pizza + 2l coke',desc:'Awesome Rice',price:130.50,catName:'Stoned'});
        Products.insert({name:'1 rice + 1 noodles + 2 starters + 2l coke',desc:'Awesome Rice',price:140.50,catName:'Stoned'});
        Products.insert({name:'Coke',desc:'Awesome Rice',price:150.50,catName:'Cold Drinks'});
        Products.insert({name:'Sprite',desc:'Awesome Rice',price:160.50,catName:'Cold Drinks'});
        Products.insert({name:'Red Bull',desc:'Awesome Rice',price:170.50,catName:'Cold Drinks'});
        Products.insert({name:'Cold Water',desc:'Awesome Rice',price:170.50,catName:'Cold Drinks'});
        Products.insert({name:'Cigarette - Classic Mills',desc:'Awesome Rice',price:180.50,catName:'Harold & Kumar specials'});
        Products.insert({name:' Goldflake Kings',desc:'Awesome Rice',price:190.50,catName:'Harold & Kumar specials'});
        Products.insert({name:'Goldflake Lights',desc:'Awesome Rice',price:200.50,catName:'Harold & Kumar specials'});
        Products.insert({name:'Marlboro lights',desc:'Awesome Rice',price:300.50,catName:'Harold & Kumar specials'});
        Products.insert({name:'Marlboro advanced',desc:'Awesome Rice',price:400.50,catName:'Harold & Kumar specials'});
        Products.insert({name:'Dunhill',desc:'Awesome Rice',price:500.50,catName:'Harold & Kumar specials'});
        Products.insert({name:'Camel',desc:'Awesome Rice',price:600.50,catName:'Harold & Kumar specials'});
        Products.insert({name:'Crocin',desc:'Awesome Rice',price:700.50,catName:'Harold & Kumar specials'});
        Products.insert({name:'Tissue papers',desc:'Awesome Rice',price:800.50,catName:'Harold & Kumar specials'});
        Products.insert({name:'Smoking papers + roaches',desc:'Awesome Rice',price:900.50,catName:'Harold & Kumar specials'});
        Products.insert({name:'I-pill',desc:'Awesome Rice',price:1000.50,catName:'Harold & Kumar specials'});
        Products.insert({name:'Eno',desc:'Awesome Rice',price:50.50,catName:'Harold & Kumar specials'});
        Products.insert({name:'All out family pack',desc:'Awesome Rice',price:60.50,catName:'Harold & Kumar specials'});
        





        

    }
    if(Categories.find().count()==0){
        var foid =Categories.insert({name:'FOOD'});
        var juid = Categories.insert({name:'DRINKS'});
        var otherid = Categories.insert({name:'OTHER ITEMS'}); 
        SubCategories.insert({name:'Starters',cat:foid});
        SubCategories.insert({name:'Biryani',cat:foid});
        SubCategories.insert({name:'Burger',cat:foid});
        SubCategories.insert({name:'Pizza',cat:foid});
        SubCategories.insert({name:'Maincourse',cat:foid});
        SubCategories.insert({name:'Combos',cat:foid});
        SubCategories.insert({name:'Stoned',cat:foid});
        SubCategories.insert({name:'Combos',cat:foid});
        SubCategories.insert({name:'Harold & Kumar specials',cat:otherid});
        SubCategories.insert({name:'Cold Drinks',cat:juid});
        //SubCategories.insert({name:'Cold Drinks',cat:juid});
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
