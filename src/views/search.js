import { html, render} from '../../node_modules/lit-html/lit-html.js';
import { search } from '../api/data.js';

const searchTemplate = (onSearch, data, userId) => html`
        <section id="search">
          <h2>Search by Brand</h2>

          <form class="search-wrapper cf" @submit=${onSearch}>
            <input
              id="search-input"
              type="text"
              name="search"
              placeholder="Search here..."
              required
            />
            <button type="submit">Search</button>
          </form>

          <h3>Results:</h3>
          
          <div id="search-container">
          ${data.length === 0 ? html`<h2>There are no results found.</h2>` : data.map(shoe => shoeTemplate(shoe, userId))}
        </div>`

const shoeTemplate = (shoe, userId) => html`
        <li class="card">
          <img src="${shoe.imageUrl}" alt="travis" />
          <p>
            <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
          </p>
          <p>
            <strong>Model: </strong><span class="model">${shoe.model}</span>
          </p>
          <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
          ${userId ? html `<a class="details-btn" href="/details/${shoe._id}">Details</a>` : html ``}
        </li>
      
`;

export function showSearch(ctx) {
    const userId = ctx.user;
    let data = [];
    ctx.render(searchTemplate(onSearch, data, userId));

    async function onSearch(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const query = formData.get('search');
        console.log(formData);
        console.log(query);

        if (query === '') {
            alert('empty field');
            return null;
        }

        try {
            data = await search(query);
            console.log(data);
            ctx.render(searchTemplate(onSearch, data, userId));
        } catch (err) {
            alert(err.message)
        }
    }
}