var myArray = [
    {
        'title': 'LOWA SHOES',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit...',
        'price': '30',
        'img': 'product1.jpg'
    },
    {
        'title': 'BeyondHome',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit...',
        'price': '45',
        'img': 'product2.jpg'
    },
    {
        'title': 'BeyondHome',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit...',
        'price': '50',
        'img': 'product3.jpg'
    },
    {
        'title': 'BeyondHome',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit...',
        'price': '50',
        'img': 'product4.jpg'
    },
    {
        'title': 'BeyondHome',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit...',
        'price': '5',
        'img': 'product5.jpg'
    },
    {
        'title': 'BeyondHome',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit...',
        'price': '45',
        'img': 'product6.jpg'
    },
]

buildCard(myArray)


function buildCard(data) {
    var products = document.getElementById('myProducts')
    for(var i = 0; i < data.length; i++){
        var product = `
        <div class="product_card">
                <img src="./public/products/${data[i].img}" alt="product">
                <br>
                <h2>${data[i].title}</h2>
                <p>${data[i].description}</p>
                <h3>Price: <span>${data[i].price}$</span></h3>
        </div>
        `
        products.innerHTML += product;
    }
}