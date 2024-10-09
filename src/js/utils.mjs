// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param)
}

// utils.mjs

// Function to convert response to text
export async function convertToText(response) {
  const text = await response.text();
  return text;
}

// Function to fetch the header and footer templates, then render them
export async function loadHeaderFooter(path) {
  // Fetch the header and footer HTML templates
  const headerHTML = await fetch(`${path}/header.html`).then(convertToText);
  const footerHTML = await fetch(`${path}/footer.html`).then(convertToText);

  // Create template elements for header and footer
  const headerTemplate = document.createElement('template');
  headerTemplate.innerHTML = headerHTML;

  const footerTemplate = document.createElement('template');
  footerTemplate.innerHTML = footerHTML;

  // Grab the header and footer elements from the DOM
  const headerElement = document.querySelector('#site-header');
  const footerElement = document.querySelector('#site-footer');

  // Render the header and footer using renderWithTemplate
  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}

// utils.mjs

// Function to convert response to text
export async function convertToText(response) {
  const text = await response.text();
  return text;
}

// Function to fetch HTML template and return a template element with the fetched content
export async function loadTemplate(path) {
  // Fetch the HTML template from the given path
  const templateHTML = await fetch(path).then(convertToText);

  // Create a new template element
  const templateElement = document.createElement('template');

  // Set the innerHTML of the template element to the fetched HTML content
  templateElement.innerHTML = templateHTML;

  // Return the created template element
  return templateElement;
}

// utils.mjs

// Function to convert response to text
export async function convertToText(response) {
  const text = await response.text();
  return text;
}

// Function to fetch and load HTML template for header and footer
export async function loadHeaderFooter() {
  // Load header and footer templates
  const headerTemplate = await loadTemplate('/partials/header.html');
  const footerTemplate = await loadTemplate('/partials/footer.html');

  // Grab the header and footer elements from the DOM
  const headerElement = document.querySelector('header');
  const footerElement = document.querySelector('footer');

  // Render header and footer using renderWithTemplate
  if (headerElement) {
      renderWithTemplate(headerElement, headerTemplate.content.cloneNode(true));
  }

  if (footerElement) {
      renderWithTemplate(footerElement, footerTemplate.content.cloneNode(true));
  }
}

// Function to fetch HTML template and return a template element with the fetched content
export async function loadTemplate(path) {
  // Fetch the HTML template from the given path
  const templateHTML = await fetch(path).then(convertToText);

  // Create a new template element
  const templateElement = document.createElement('template');

  // Set the innerHTML of the template element to the fetched HTML content
  templateElement.innerHTML = templateHTML;

  // Return the created template element
  return templateElement;
}

// Function to render a template into a target element
export function renderWithTemplate(target, template, callback) {
  // Clear existing content in the target
  target.innerHTML = '';

  // Append the new template content
  target.appendChild(template);

  // If a callback is provided, call it
  if (callback) {
      callback();
  }
}
