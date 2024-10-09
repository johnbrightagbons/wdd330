// utils.mjs

// Render a single template instead of a list
export async function renderWithTemplate(template, parent, data, callback) {
    const clone = template.content.cloneNode(true); // Clone the template's content
    if (callback) {
        callback(clone, data); // Apply callback to single data object
    }
    parent.appendChild(clone); // Append to parent container
}
