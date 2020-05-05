const btnPlay = document.getElementById('play-btn'),
videoContainer = document.getElementById('video-container'),
btnMenu = document.getElementById('btn-menu-responsive'),
menu = document.getElementById('menu')

const helperElements = e => {
    if (e.tagName == 'HTML') {
        return false
    }

    if (e.target && e.target.id != '') {
        return e.target.id
    } else if (e.target && e.target.id == '') {
        return helperElements(e.target.parentElement)
    } else if (e.id && e.id == '') {
        return helperElements(e.parentElement)
    } else if (e.id && e.id != '') {
        return e.id
    } else if (e.id == ''){
        return helperElements(e.parentElement)
    } else {
        return false
    }
}

document.addEventListener('click', e => {
    const id = helperElements(e);
    switch (id) {
        case 'play-btn':
            videoContainer.style.zIndex = '20';
            videoContainer.insertAdjacentHTML('beforeend', `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/XvG-EpPoCCA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);            
        break;

        case 'btn-menu-responsive':
            if (menu.classList.contains('hide-menu')) {
                if (document.getElementById('close') == null) {
                    menu.insertAdjacentHTML('afterbegin',`
                        <li class="header_menu_ul_li" id="close"><img class="icon-close" src="./img/close.svg">Cerrar</li>
                    `)
                }
                menu.classList.remove('hide-menu');
                menu.classList.add('show-menu');
            } else if (menu.classList.contains('show-menu')) {
                menu.classList.remove('show-menu');
                menu.classList.add('hide-menu');
            } else {
                //Por si acaso ':)
                menu.classList.add('show-menu');
            }
        break;

        default:
            if (menu.classList.contains('show-menu') && id != 'menu') {
                menu.classList.remove('show-menu');
                menu.classList.add('hide-menu');
            }
        break;
    }
    console.log(id)
})

window.addEventListener('resize', e => {
    if (window.innerWidth >= 1100) {
        if (document.getElementById('close') != null) {
            document.getElementById('close').remove();
        }
    }
})