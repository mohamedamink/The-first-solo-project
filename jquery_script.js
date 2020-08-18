$('a').click(function() {
    // get the contents of the link that was clicked
    var linkText = $(this).text();
    var dishes = [{title : 'SOUP OF THE DAY'
    			,image: 'https://cdn.lacuisinedannie.com/images/1512.jpg'
    			,desc: 'carrot ginger'
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
    			,desc: ' tomatoes, olive,vinegar,chopped fresh basil leaves'
    			,price: "20$"},
    			{title : 'SALADE NICOISE'
    			,image: 'https://img-3.journaldesfemmes.fr/8COrhFruV2keguuWQqaL0SoViws=/748x499/smart/3a86b25b4fd94561959d9ff592bce391/recipe-jdf/10025061.jpg'
    			,desc: 'Lettuce, arugula, tuna, anchovies, tomato'
    			,price: "25$"},
    			{title : 'SALADE CESAR'
    			,image: 'https://img.cuisineaz.com/660x660/2018-02-10/i135580-salade-cesar-allegee.jpeg'
    			,desc: 'Lettuce, minced garlic,  grated parmesan cheese, crispy bread and chicken'
    			,price: "15$"},
    			
    			{title : 'LAMB CHOPS'
    			,image: 'https://s3.amazonaws.com/boissetfamilyestates-assets/images/photos/Grilled_Lamb_Chops_Asp..jpg'
    			,desc: 'Grilled lamb shops with BBC sauce served with sauted asparagus and mushed potatos'
    			,price: "50$"},
    			{title : 'FISH AND CHIPS'
    			,image: 'https://images.anaca3.com/wp-content/uploads/2018/05/le-fish-chips-un-plat-riche-en-calories-702x336.jpg'
    			,desc: 'potato, sunflower oil, garlic sauce, sweet pickle'
    			,price: "45$"},
    			{title : 'TENDERLOIN STEAK DIANE'
    			,image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Tenderloin-Steak-Diane_exps91317_SD142780D08_15_6bC_RMS-1-696x696.jpg'
    			,desc: 'beef tenderloin steaks, steak seasoning, sliced fresh mushrooms, reduced-sodium beef broth '
    			,price: "55$"},

    			{title : 'BURGER STEACKHOUSE'
    			,image: 'https://www.hamburgerfinder.fr/wp-content/uploads/Burger-King-Double-Steakhouse.jpg'
    			,desc: 'eggs, beef, Olive oil, portobello mushrooms and garlic cloves'
    			,price: "50$"},
    			{title : 'CLUB SANDWICH CHICKEN'
    			,image: 'https://live.staticflickr.com/2871/9546284963_0d8ea58997_b.jpg'
    			,desc: 'Slices of Chicken, slices Crustless sandwich bread, Plain fresh goat cheese and Arugula salad'
    			,price: "45$"},
    			{title : 'HOT-DOG MEXICAN'
    			,image: 'https://citterio.com/uploads/images/ricette/pollo-hot-dog.jpg'
    			,desc: 'Hot dog, Strasbourg sausage, Tomato and Salad '
    			,price: "55$"},

    			{title : 'TIRAMISU'
    			,image: 'https://www.galbani.fr/wp-content/uploads/2017/07/le_veritable_tiramisu_par_il_gusto_italiano_0.png'
    			,desc: 'eggs,  Mascarpone cheese, Coffee and Amaretto'
    			,price: "12$"},
    			{title : 'ICE CREAM'
    			,image: 'https://mediacdn.grabone.co.nz/asset/iH41rzNRQO/box=970x0'
    			,desc: 'milk, cream, egg yolks, brown sugar, chocolate, finely chopped and raspberries and 4 bowls'
    			,price: "7$"},
    			{title : 'FONDONT AU CHOCOLAT'
    			,image: 'https://images.anaca3.com/wp-content/uploads/2018/01/recette-minceur-le-fondant-au-chocolat-light-702x336.jpg'
    			,desc: 'dark pastry chocolate, small eggs, flour, cheese, chocolate squares, sugar and salt'
    			,price: "10$"


    			}];

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