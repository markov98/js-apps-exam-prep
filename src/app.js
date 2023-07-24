import page from '../node_modules/page/page.mjs';
import { render } from "../../node_modules/lit-html/lit-html.js";
import { showHome } from './views/home.js';
import { showRegister } from './views/register.js';
import { showLogin } from './views/login.js';
import { getUserData } from './utils.js';


const main = document.querySelector('main');

function session(ctx, next) {
    const user = getUserData();
    if (user) {
        ctx.user = user;
    }

    next();
}

function decorateContext(ctx, next) {
    ctx.render = function (content) {
        render(content, main);
    };

    next();
}

function updateNav(ctx, next) {
    const usr = document.querySelector('div.user');
    const guest = document.querySelector('div.guest');

    if (ctx.user) {
        usr.style.display = 'inline';
        guest.style.display = 'none';
    } else {
        usr.style.display = 'none';
        guest.style.display = 'inline';
    }

    next()
}

page(decorateContext);
page(session);
page(updateNav);

page('/', showHome);
page('/register', showRegister)
page('/login', showLogin)

page.start();