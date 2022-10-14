export const actionType = {
    SET_NAV_OPEN : 'SET_NAV_OPEN',
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    ADD_QUANTITY: 'ADD_QUANTITY',
    SUB_QUANTITY: 'SUB_QUANTITY'
}

const reducer = (state, action) => {
    switch(action.type){
        case actionType.SET_NAV_OPEN:
            return{
                ...state, navOpen: action.navOpen
            };
        default: return state;
    }
};

export default reducer;