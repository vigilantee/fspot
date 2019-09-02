import { SIGN_IN_SUCCESS } from '../ApiConstants';

// TODO Remove all mutations
const initialState = {
    loaded: false,
    loading: false,
    menu: [],
    itemsQuantity: [], //Maintain the transitional Quantity of the cards
    cart: [], //Maintain product id of the products in the cart
    cartCount: 0,
    total: 0,
    googleId: "",
    profilePic: "",
    firstName: "",
    email: "",
    name: "",
    surname: ""
}

const menuReducer = (state = initialState, action) => {
    let itemsQuantity = state.itemsQuantity;
    switch (action.type) {
        case 'GET_MENU':
            return { ...state, loading: true };

        case 'MENU_RECEIVED':
            action.data.map(elem => itemsQuantity.push(0));
            let cart = itemsQuantity.slice();
            return { ...state, menu: action.data, cart: cart, itemsQuantity: itemsQuantity, loading: false, loaded: true };

        case 'INCREMENT_ITEM':
            let currentVal = (isNaN(parseInt(itemsQuantity[action.data]))) ? 0 : parseInt(itemsQuantity[action.data]);
            currentVal = currentVal == 0 ? 2 : currentVal + 1;
            itemsQuantity.splice(action.data, 1, currentVal);
            return { ...state, itemsQuantity: itemsQuantity };

        case 'DECREMENT_ITEM':
            const newVal = itemsQuantity[action.data] > 0 ? itemsQuantity[action.data] - 1 : 0;
            itemsQuantity.splice(action.data, 1, newVal);
            return { ...state, itemsQuantity: itemsQuantity };

        case 'UPDATE_ITEM':
            const re = /^[0-9\b]+$/;
            if (action.data === '' || re.test(action.data)) {
                
                itemsQuantity.splice(action.index, 1, parseInt(action.data));
                return { ...state, itemsQuantity: itemsQuantity };
            }
            return state;

        case 'ADD_TO_CART':
            const reg = /^[0-9\b]+$/;
            if (action.data === '' || reg.test(action.data)) {
                const totalItems = cart => cart.reduce((a, b) => a + b, 0);
                const total = cart => cart.reduce((a, b, i) => {
                    if (b === 0) return a;
                    let price = state.menu[i].price;
                    return a + b * price;
                }, 0);
                state.cart.splice(action.index, 1, action.data);
                state.cartCount = totalItems(state.cart.slice());
                state.total = total(state.cart.slice());
                return { ...state, cart: state.cart, cartCount: state.cartCount, total: state.total };
            }
            return state;

        case 'SIGN_IN_SUCCESS':
            if (state.email) return state;
            let googleId = action.data.profileObj.googleId;
            let email = action.data.profileObj.email;
            let profilePic = action.data.profileObj.imageUrl;
            let firstName = action.data.profileObj.givenName;
            let name = action.data.profileObj.name;
            let surname = action.data.profileObj.familyName;
            const postData = {
                email: email,
                name: name,
                surname: surname,
                firstName: firstName,
                googleId: googleId,
                profilePic: profilePic
            };
            const postQuery = fetch(SIGN_IN_SUCCESS, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData)
            }).then(response => response.json()).then(response => console.log("response is post backend log from backend......", response));
            return { ...state, email: email, name: name, surname: surname, firstName: firstName, googleId: googleId, profilePic: profilePic };
            
        default:
            return state;
    }
};
export default menuReducer;
