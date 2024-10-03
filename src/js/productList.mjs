// ProductList.mjs

// Function that generates the HTML template for a product card
function productCardTemplate(product) {
    return `
      <li class="product-card">
        <a href="product_pages/index.html?product=${product.Id}">
          <img src="${product.Image}" alt="Image of ${product.Name}">
          <h3 class="card__brand">${product.Brand.Name}</h3>
          <h2 class="card__name">${product.NameWithoutBrand}</h2>
          <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
        </a>
      </li>
    `;
  }
  
  export default class ProductListing {
    constructor(category, dataSource, listElement) {
      this.category = category;
      this.dataSource = dataSource;
      this.listElement = listElement;
    }
  
    async init() {
      try {
        // Fetch the product data
        const products = await this.dataSource.getData();
  
        // Filter products by category (you can modify this filter based on your actual category structure)
        const filteredProducts = this.filterByCategory(products, this.category);
  
        // Render the filtered products as HTML
        this.renderList(filteredProducts);
      } catch (error) {
        console.error('Error initializing ProductListing:', error);
      }
    }
  
    // Method to filter products by category
    filterByCategory(products, category) {
      return products.filter(product => product.category === category);
    }
  
    // Method to render products as HTML using the productCardTemplate
    renderList(products) {
      // Clear existing content
      this.listElement.innerHTML = '';
  
      // Map over the products and create a list of product cards
      const productCards = products.map(product => productCardTemplate(product)).join('');
  
      // Insert the product cards into the listElement
      this.listElement.innerHTML = productCards;
    }
  }
  