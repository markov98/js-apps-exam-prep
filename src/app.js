import page from '../node_modules/page/page.mjs';
import {render} from "../../node_modules/lit-html/lit-html.js";
import { showHome } from './views/home.js';
import { showRegister } from './views/register.js';
import { showLogin } from './views/login.js';


const main = document.querySelector('main');

function decorateContext(ctx, next) {
    ctx.render = function (content) {
        render(content, main);
    };

    next();
}

page(decorateContext);

page('/', showHome);
page('/register', showRegister)
page('/login', showLogin)

page.start();