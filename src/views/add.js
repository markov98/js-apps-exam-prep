import { html } from "../../node_modules/lit-html/lit-html.js";
import { addShoe } from "../api/data.js";

const template = (onSubmit) => html`
        <section id="create">
          <div class="form">
            <h2>Add item</h2>
            <form class="create-form" @submit=${onSubmit}>
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                placeholder="Brand"
              />
              <input
                type="text"
                name="model"
                id="shoe-model"
                placeholder="Model"
              />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                placeholder="Image url"
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                placeholder="Release date"
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                placeholder="Designer"
              />
              <input
                type="text"
                name="value"
                id="shoe-value"
                placeholder="Value"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>`

export function showAdd(ctx) {
    ctx.render(template(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {
            brand: formData.get('brand'),
            model: formData.get('model'),
            imageUrl: formData.get('imageUrl'),
            release: formData.get('release'),
            designer: formData.get('designer'),
            value: formData.get('value')
        }

        if (Object.values(data).some(val => val === '')) {
            alert('Empty fields');
            return null;
        }

        try {
            await addShoe(data);
      
            ctx.page.redirect('/dashboard')
          } catch (err) {
            console.log(err.message);
          }
    }
}