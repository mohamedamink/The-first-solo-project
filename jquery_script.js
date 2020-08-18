$('a').click(function() {
    // get the contents of the link that was clicked
    var linkText = $(this).text();
    var dishes = [{title : 'SOUP OF THE DAY'
    			,image: 'https://cdn.lacuisinedannie.com/images/1512.jpg'
    			,desc: 'Vegtebal soupe with onion carrot ginger'
    			,price: "15$"},
    			{title : 'FISH SOUP'
    			,image: 'https://i.pinimg.com/originals/d8/db/15/d8db15680be41fdbd4bb12a175d4c022.png'
    			,desc: 'Seafood salamon soupe'
    			,price: "19$"},
    			{title : 'CHIKEN SOUP'
    			,image: 'https://www.amourdecuisine.fr/wp-content/uploads/2015/06/soupe-velout%C3%A9e-de-poulet-3.jpg'
    			,desc: 'Creamy chiken soupe'
    			,price: "10$"},
    			{title : 'TOMATO MOZZARELLA'
    			,image: 'https://images-gmi-pmc.edge-generalmills.com/b5616f74-c62c-4ce4-af20-54d321966ba0.jpg'
    			,desc: 'Vegtebal soupe with onion carrot ginger'
    			,price: "20$"},
    			{title : 'SALADE NICOISE'
    			,image: 'https://img-3.journaldesfemmes.fr/8COrhFruV2keguuWQqaL0SoViws=/748x499/smart/3a86b25b4fd94561959d9ff592bce391/recipe-jdf/10025061.jpg'
    			,desc: 'Anchovy tomato egg ognion and beans'
    			,price: "25$"},
    			{title : 'SALADE CESAR'
    			,image: 'https://img.cuisineaz.com/660x660/2018-02-10/i135580-salade-cesar-allegee.jpeg'
    			,desc: 'chiken green salad creaspy bread tomato and ongion'
    			,price: "15$"}];

      var currentDish = {title : ''
    			,image: ''
    			,desc: ''
    			,price: 0};

    for(var i=0;i<dishes.length;i++){             
        if(dishes[i].title ===  $(this).text().trim()){
        	currentDish= dishes[i];
        }         
      }
// replace the contents of the div with the link text
 $('#dish').html(currentDish.title);
 $('#dish_desc').html(currentDish.desc);
 $("#dish_img").attr("src", currentDish.image);
 $('#dish_price').html(currentDish.price);
 
    // cancel the default action of the link by returning false
    return false;
});