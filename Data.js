var myArray = [
    {
        'title': 'LOWA shoes',
        'price': '30',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit...',
        'img': 'product1.jpg'
    },
    {
        'title': 'BeyondHome',
        'price': '49',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit...',
        'img': 'product2.jpg'
    },
    {
        'title': 'LOWA shoes',
        'price': '30',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit...',
        'img': 'product3.jpg'
    },
    {
        'title': 'BeyondHome',
        'price': '49',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit...',
        'img': 'product4.jpg'
    },
    {
        'title': 'LOWA shoes',
        'price': '30',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit...',
        'img': 'product5.jpg'
    },
    {
        'title': 'BeyondHome',
        'price': '49',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit...',
        'img': 'product6.jpg'
    },
    {
        'title': 'LOWA shoes',
        'price': '30',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit...',
        'img': 'product7.jpg'
    },
    {
        'title': 'BeyondHome',
        'price': '49',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit...',
        'img': 'product2.jpg'
    },
       {
        'title': 'LOWA shoes',
        'price': '30',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit...',
        'img': 'product1.jpg'
    },
]

buildTable(myArray)



function buildTable(data) {
    var products = document.getElementById('myProducts')

    for (var i = 0; i < data.length; i++) {
        var row = `<div class="product_card">
                    <img src="./public/products/${data[i].img}" alt="product">
                    <br>
                    <h2>${data[i].title}</h2>
                    <p>${data[i].description}</p>
                    <h3>Price: <span>${data[i].price}$</span></h3>
                   </div>`
        products.innerHTML += row
    }
}
