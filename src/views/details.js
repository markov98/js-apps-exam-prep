import { html, nothing} from "../../node_modules/lit-html/lit-html.js";
import { getShoeById } from "../api/data.js";


const template = (shoe, user) => html`
        <section id="details">
          <div id="details-wrapper">
            <p id="details-title">Shoe Details</p>
            <div id="img-wrapper">
              <img src="${shoe.imageUrl}" alt="example1" />
            </div>
            <div id="info-wrapper">
              <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
              <p>
                Model: <span id="details-model">${shoe.model}</span>
              </p>
              <p>Release date: <span id="details-release">${shoe.release}</span></p>
              <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
              <p>Value: <span id="details-value">${shoe.value}</span></p>
            </div>

            <!--Edit and Delete are only for creator-->
            ${shoe._ownerId === user?._id ? html`
            <div id="action-buttons">
              <a href="" id="edit-btn">Edit</a>
              <a href="" id="delete-btn">Delete</a>
            </div>
            </div>` :
            nothing
            }
        </section>`

export async function showDetails(ctx) {
    const shoeId = ctx.params.id;

    const shoe = await getShoeById(shoeId);

    ctx.render(template(shoe, ctx.user));
}
