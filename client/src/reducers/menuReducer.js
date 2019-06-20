const menuReducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_MENU':
        return { ...state, loading: true };
      case 'MENU_RECEIVED':
        console.log("action is.....", action.data);
        return { ...state, menu: action.data, loading: false }
      default:
        return state;
    }
  };
  
  export default menuReducer;
  