export const actionType = {
    SET_NAV_OPEN : 'SET_NAV_OPEN',
    SET_CARTITEMS: "SET_CARTITEMS",
    SET_USERDATA: "SET_USERDATA" 
}

const reducer = (state, action) => {
    switch(action.type){
        case actionType.SET_NAV_OPEN:
            return{
                ...state, navOpen: action.navOpen
            };  
        case actionType.SET_CARTITEMS:
            return{
                ...state, cartItems: action.cartItems
            };
        case actionType.SET_USERDATA:
            return{
                ...state, userData: action.userData
            };
        default: return state;
    }
};

export default reducer;