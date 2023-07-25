import { html } from "../../node_modules/lit-html/lit-html.js";

const template = () => html`
        <section id="dashboard">
          <h2>Collectibles</h2>
          <ul class="card-wrapper">
        <section>`

export function showDashboard(ctx) {
    ctx.render(template())
}