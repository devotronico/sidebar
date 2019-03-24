document.addEventListener('DOMContentLoaded', function(){


    /**
     * al click sul bottone del mune
     * apre e chiude il menu laterale
     * @param {*} event
     */
    const sidebarHandler = () => {

        document.querySelector('.sidebar-search').classList.remove('is-open');
        document.querySelector('.sidebar-data').classList.toggle('is-open');

       // event.target.classList.toggle('is-open');
    }

    const searchHandler = () => {

        document.querySelector('.sidebar-data').classList.remove('is-open');
        document.querySelector('.sidebar-search').classList.toggle('is-open');

        // event.target.classList.toggle('is-open');
    }

    document.querySelector('.btn-aside-menu').addEventListener('click', sidebarHandler, false);
    document.querySelector('.btn-aside-search').addEventListener('click', searchHandler, false);




    const lightHandler = (event) => {

        // localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark');
        // localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark');

        const btnLight = event.target;

        btnLight.classList.toggle('is-light');

        // if (document.body.classList.contains('thatClass')) {/*...*/ }
        let colors;
        if (btnLight.classList.contains('is-light')) {
            // do some stuff
            colors = ['#fff',  '#f3f3f3', '#2c2c2c', '#ececec', '#616161', '#7d7d7d'];
        } else {

            colors = ['#1e1e1e',  '#252526', '#333', '#4b4b4b', '#adadad', '#fff'];
        }


        const root = document.documentElement;
        for (let i = 0; i < colors.length; i++) {
            const num = i+1;
            root.style.setProperty('--bg-color-'+ num, colors[i]);

        }
    }


    document.querySelector('.btn-aside-light').addEventListener('click', lightHandler, false);





    const accordionHandler = (event) => {

        const btn = event.target; //console.log(btn);
        const parent = btn.parentNode; //console.log(par);
        const content = parent.children[1]; //console.log(content);

        btn.classList.toggle('is-open');

        if (content.style.maxHeight) {

            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    }

    const accordions = document.querySelectorAll('.btn-accordion');

    for ( const accordion of accordions) {

        accordion.addEventListener('click', accordionHandler, false);
    }








});

