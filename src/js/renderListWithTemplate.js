// Existing renderListWithTemplate function for rendering lists
export async function renderListWithTemplate(template, parent, list, callback) {
    list.forEach(item => {
        const clone = template.content.cloneNode(true);
        if (callback) {
            callback(clone, item); // Apply callback to each item
        }
        parent.appendChild(clone);
    });
}
