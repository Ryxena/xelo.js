/**
 * 
 * @param {Array} data - Array that will be sorted
 * @returns {Array} - Sorted array
 */

function quickSort(data) {
    if (data.length <= 1) return data
    const pivot = data[0]
    const left = data.filter(x => x < pivot)
    const right = data.filter(x => x > pivot)
    
    return [...quickSort(left), pivot, ...quickSort(right)]
}
module.exports = quickSort