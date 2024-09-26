const cartItems = [];

const handleCart = (state = cartItems, action) => {
    const product = action.payload;

    switch (action.type) {
        case "ADDITEM":
            // Check if the product already exists in the cart
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                // Increase quantity if the product exists
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                // Add new product to the cart
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    },
                ];
            }

        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1) {
                if (exist1.qty === 1) {
                    // Remove the product from the cart if qty is 1
                    return state.filter((x) => x.id !== exist1.id);
                } else {
                    // Decrease quantity if qty is more than 1
                    return state.map((x) =>
                        x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                    );
                }
            }
            return state; // Ensure state is returned even if no product is found

        default:
            return state;
    }
};

export default handleCart;
