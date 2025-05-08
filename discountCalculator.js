function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = quantity * pricePerItem;

    if (quantity >= 10) {
        totalPrice *= 0.9; // Apply 10% discount
    }

    return totalPrice;
}

module.exports = calculateDiscountedPrice;