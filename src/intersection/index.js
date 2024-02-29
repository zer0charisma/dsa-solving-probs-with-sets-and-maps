/**
 * Returns the intersection of two arrays.
 *
 * @param {Array} a - The first array.
 * @param {Array} b - The second array.
 * @returns {Array} - An array containing common elements of both input arrays.
 */
function intersection(a, b) {
    // Create a Map to store unique elements from the first array 'a'
    const map = new Map();
    
    // Create a Set to store the common elements found in both arrays
    const results = new Set();
    
    // Populate the Map with unique elements from the first array 'a'
    for (let e of a) {
        map.set(e, e);
    }

    // Check for common elements in the second array 'b' and add them to the Set 'results'
    for (let e of b) {
        if (map.has(e)) {
            results.add(e);
        }
    }

    // Convert the Set to an array and return the result
    return Array.from(results);
}

module.exports = intersection;
