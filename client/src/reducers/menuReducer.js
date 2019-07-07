import { SIGN_IN_SUCCESS } from '../ApiConstants';


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
    firstName:"",
    email:"",
    name:"",
    surname:""
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
            let currentVal = (isNaN(parseInt(state.itemsQuantity[action.data]))) ? 0 : parseInt(state.itemsQuantity[action.data]);
            currentVal = currentVal == 0 ? 2 : currentVal + 1;
            state.itemsQuantity.splice(action.data, 1, currentVal);
            return { ...state, itemsQuantity: state.itemsQuantity };
        case 'DECREMENT_ITEM':
            const newVal = state.itemsQuantity[action.data] > 0 ? state.itemsQuantity[action.data] - 1 : 0;
            state.itemsQuantity.splice(action.data, 1, newVal);
            return { ...state, itemsQuantity: state.itemsQuantity };
        case 'UPDATE_ITEM':
            const re = /^[0-9\b]+$/;
            if (action.data === '' || re.test(action.data)) {
                state.itemsQuantity.splice(action.index, 1, parseInt(action.data));
                return { ...state, itemsQuantity: state.itemsQuantity };
            }
            return state;
        case 'ADD_TO_CART':
            const reg = /^[0-9\b]+$/;
            if (action.data === '' || reg.test(action.data)) {
                const totalItems = cart => cart.reduce((a, b) => a + b, 0);
                const total = cart => cart.reduce((a, b, i) => {
                    if (b === 0) return a;
                    return a + b * state.menu[i].price;
                }, 0);
                state.cart.splice(action.index, 1, action.data);
                state.cartCount = totalItems(state.cart.slice());
                state.total = total(state.cart.slice());
                return { ...state, cart: state.cart, cartCount: state.cartCount, total: state.total };
            }
            return state;
        case 'SIGN_IN_SUCCESS':
            if(state.email) return state;
            state.googleId=action.data.profileObj.googleId;
            state.email=action.data.profileObj.email;
            state.profilePic=action.data.profileObj.imageUrl;
            state.firstName=action.data.profileObj.givenName;
            state.name=action.data.profileObj.name;
            state.surname=action.data.profileObj.familyName;
            const postData = {
                email: state.email,
                name: state.name,
                surname: state.surname,
                firstName: state.firstName,
                googleId: state.googleId,
                profilePic: state.profilePic
            };
            const postQuery = fetch(SIGN_IN_SUCCESS, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData)
              }).then(response => response.json()).then(response=>console.log("response is post backend log from backend......", response));
            return state;
        default:
            return state;
    }
};
export default menuReducer;
