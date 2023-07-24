import page from '../node_modules/page/page.mjs';
import {render} from "../../node_modules/lit-html/lit-html.js";
import { showHome } from './views/home.js';


const main = document.querySelector('main');

function decorateContext(ctx, next) {
    ctx.render = function (content) {
        render(content, document.querySelector("main"));
    };

    next();
}

page(decorateContext);

page('/', showHome);


page.start();