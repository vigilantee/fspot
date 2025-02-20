
export const getMenu = () => {
  return {
    type: 'GET_MENU',
  }
};

export const incrementQuantity = i => {
  return {
    type: 'INCREMENT_ITEM',
    data: i,
  }
};

export const decrementQuantity = i => {
  return {
    type: 'DECREMENT_ITEM',
    data: i,
  }
};

export const updateItem = (data, i) => {
  return {
    type: 'UPDATE_ITEM',
    data: data,
    index: i
  }
};

export const addToCart = (data, i) => {
  return {
    type: 'ADD_TO_CART',
    data: data,
    index: i
  }
}

export const signInSuccess = data => {
  return {
    type: 'SIGN_IN_SUCCESS',
    data: data
  }
}