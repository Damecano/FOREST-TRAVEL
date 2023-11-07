document.getElementById('header').innerHTML = `
<a href="index.html" class="brand_logo">LOGO</a>

<ul>
    <li><a href="index.html">HOME</a></li>
    <li><a href="about.html">ABOUT</a></li>
    <li><a href="product.html">PRUDUCT</a></li>
    <li><a href="contact.html">CONTACT</a></li>
</ul>

<button class="open_menu_btn" onclick="menu()">
    <img class="menu_img" src="./public/menu.png">
</button>`;


document.getElementById('footer').innerHTML =`
<div>
<h1>LOGO</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum, error nihil inventore corrupti vel voluptatum facere quaerat placeat amet ducimus esse commodi minus beatae impedit veritatis quasi quis eum.</p>
</div>

<div>
<h2>Links:</h2>
<ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="product.html">Product</a></li>
    <li><a href="contact.html">Contact</a></li>
</ul>
</div>

<div>
<h2>Social media:</h2>
<ul class="social_media">
    <li><a href="#"><img src="./public/social/instagram.png" width="40px"></a></li>
    <li><a href="#"><img src="./public/social/telegram.png" width="40px"></a></li>
    <li><a href="#"><img src="./public/social/tiktok.png" width="40px"></a></li>
</ul>
</div>`;


document.getElementById('menu').innerHTML =`<ul>
<li><a href="index.html">HOME</a></li>
<li><a href="about.html">ABOUT</a></li>
<li><a href="product.html">PRUDUCT</a></li>
<li><a href="contact.html">CONTACT</a></li>
</ul>`;