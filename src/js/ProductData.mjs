function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }
  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
}


// ProductData.js

import fs from 'fs';

class ProductData {
  constructor() {
    this.filePath = './tents.json'; // Path to your JSON file
  }

  // Method to read product data from the JSON file
  readData() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      const jsonData = JSON.parse(data);
      console.log('Product Data:', jsonData);
      return jsonData;
    } catch (error) {
      console.error('Error reading product data:', error);
      return null;
    }
  }
}


