import { html } from "../../node_modules/lit-html/lit-html.js";
import { getShoeById, updateShoeById } from "../api/data.js";

const template = (data, onSubmit) => html`
        <section id="edit">
          <div class="form">
            <h2>Edit item</h2>
            <form class="edit-form" @submit=${onSubmit}>
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                placeholder="Brand"
                value="${data.brand}"
              />
              <input
                type="text"
                name="model"
                id="shoe-model"
                placeholder="Model"
                value="${data.model}"
              />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                placeholder="Image url"
                value="${data.imageUrl}"
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                placeholder="Release date"
                value="${data.release}"
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                placeholder="Designer"
                value="${data.designer}"
              />
              <input
                type="text"
                name="value"
                id="shoe-value"
                placeholder="Value"
                value="${data.value}"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>`;

export async function showEdit(ctx) {
    const shoeId = ctx.params.id;
    const data = await getShoeById(shoeId)

    ctx.render(template(data, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        if (Object.values(data).some(val => !val)) {
            alert('Empty fields');
            return null;
        }

        try {
            await updateShoeById(shoeId, data);
            ctx.page.redirect('/dashboard');
        } catch (err) {
            console.log(err.message);
        }
    }
}
