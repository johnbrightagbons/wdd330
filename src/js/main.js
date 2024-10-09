// Import the product data module
import productData from './ProductData';
import ProductListing from '../ProductList.mjs';
// Create an instance of product data
const productDataInstance = new productData();

// Use the productDataInstance to access product data
productDataInstance.readData();


import ProductListing from './ProductList.mjs'; // Import ProductListing class

// Define the output target (HTML element where the product list will be rendered)
const productListElement = document.getElementById('product-list'); // Ensure there’s a matching element in your HTML

// Create an instance of ProductListing
const productListing = new ProductListing('tents', productDataInstance, productListElement);

// Initialize the product listing (load and display products)
productListing.init();


// Import the loadHeaderFooter function
import { loadHeaderFooter } from './utils.mjs';

// Call the function to load the header and footer into the DOM
loadHeaderFooter();
