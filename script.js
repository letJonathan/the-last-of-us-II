const btnPlay = document.getElementById('play-btn')
const videoContainer = document.getElementById('video-container')
const btnMenu = document.getElementById('btn-menu-responsive')
const menu = document.getElementById('menu')

const helperElements = event => {
    if (event.tagName == 'HTML') {
        return false
    }

    if (event.target && event.target.id != '') {
        return event.target.id
    } else if (event.target && event.target.id == '') {
        return helperElements(event.target.parentElement)
    } else if (event.id && event.id == '') {
        return helperElements(event.parentElement)
    } else if (event.id && event.id != '') {
        return event.id
    } else if (event.id == ''){
        return helperElements(event.parentElement)
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
})

window.addEventListener('resize', e => {
    if (window.innerWidth >= 1100) {
        if (document.getElementById('close') != null) {
            document.getElementById('close').remove();
        }
    }
})