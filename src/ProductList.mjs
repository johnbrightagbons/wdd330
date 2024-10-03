// ProductList.mjs

export default class ProductListing {
    constructor(category, dataSource, listElement) {
      this.category = category;
      this.dataSource = dataSource;
      this.listElement = listElement;
    }
  
    // Initialize the ProductListing (use async to support async operations)
    async init() {
      try {
        // Fetch the product data
        const products = await this.dataSource.getData();
  
        // Filter products by category
        const filteredProducts = this.filterByCategory(products, this.category);
  
        // Render the filtered products as HTML
        this.renderProductList(filteredProducts);
      } catch (error) {
        console.error('Error initializing ProductListing:', error);
      }
    }
  
    // Method to filter products by category
    filterByCategory(products, category) {
      return products.filter(product => product.category === category);
    }
  
    // Method to render products as HTML
    renderProductList(products) {
      this.listElement.innerHTML = ''; // Clear existing content
  
      products.forEach(product => {
        const productCard = this.createProductCard(product);
        this.listElement.appendChild(productCard);
      });
    }
  
    // Create a product card element for each product
    createProductCard(product) {
      const card = document.createElement('div');
      card.classList.add('product-card');
  
      card.innerHTML = `
        <img src="${product.Image}" alt="${product.Name}" />
        <h3>${product.Name}</h3>
        <p>${product.DescriptionHtmlSimple}</p>
        <p>Price: $${product.FinalPrice}</p>
      `;
  
      return card;
    }
  }
  