const initialState = {
    loaded: false,
    loading: false,
    itemsQuantity: [], //Maintain the transitional Quantity of the cards
    cart: [], //Maintain product id of the products in the cart
    // cartQuantity: [], //Maintain quantity of products added to cart
    cartCount: 0
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MENU':
            return { ...state, loading: true };
        case 'MENU_RECEIVED':
            action.data.map(elem => state.itemsQuantity.push(0));
            state.cart = state.itemsQuantity.slice();
            return { ...state, menu: action.data, cart: state.cart, itemsQuantity: state.itemsQuantity, loading: false, loaded: true };
        case 'INCREMENT_ITEM':
            const currentVal = (isNaN(parseInt(state.itemsQuantity[action.data]))) ? 0 : parseInt(state.itemsQuantity[action.data]);
            state.itemsQuantity.splice(action.data, 1, currentVal + 1);
            return { ...state, itemsQuantity: state.itemsQuantity };
        case 'DECREMENT_ITEM':
            const newVal = state.itemsQuantity[action.data] > 0 ? state.itemsQuantity[action.data] - 1 : 0;
            state.itemsQuantity.splice(action.data, 1, newVal);
            return { ...state, itemsQuantity: state.itemsQuantity };
        case 'UPDATE_ITEM':
            const re = /^[0-9\b]+$/;
            if (action.data === '' || re.test(action.data)) {
                state.itemsQuantity.splice(action.index, 1, action.data);
                return { ...state, itemsQuantity: state.itemsQuantity };
            }
            return state;
        case 'ADD_TO_CART':
            const reg = /^[0-9\b]+$/;
            if (action.data === '' || reg.test(action.data)) {
                state.cart.splice(action.index, 1, action.data);
                const totalItems = cart => cart.reduce((a,b) => a + b, 0);
                state.cartCount = totalItems(state.cart.slice());
                return { ...state, cart: state.cart, cartCount: state.cartCount };
            }
        default:
            return state;
    }
};

export default menuReducer;
