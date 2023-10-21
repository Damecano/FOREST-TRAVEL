let is_Menu = false;

function menu() {
    if (is_Menu == false) {
        document.querySelector('.menu').style.display = "block"
        document.querySelector('.menu_img').src = './public/close.png'
        is_Menu = true
    }else{
        document.querySelector('.menu').style.display = "none"
        document.querySelector('.menu_img').src = './public/menu.png'
        is_Menu = false
    }
}

// BENNER--------------------


