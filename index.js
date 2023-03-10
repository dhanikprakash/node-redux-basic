const redux = require('redux');
const createStore = redux.createStore;

const CAR_ORDERED= 'CAR_ORDERED'
const CAR_RESTOCK = 'CAR_RESTOCK'
const initialState ={
    noOfCars: 20
};

const orderCars = (quatity) => {
    return {
        type:CAR_ORDERED,
        payload: quatity,
    }
}

const orderRestock = (quatity) => {
    return {
        type:CAR_ORDERED,
        payload: quatity,
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case CAR_ORDERED:
            return {
            ...state, 
            noOfCars: state.noOfCars - action.payload
        }
          case CAR_RESTOCK:
            return {
            ...state, 
            noOfCars: state.noOfCars + action.payload
        }
         default: 
         return state;
    }
}

const store = createStore(reducer);

console.log( `initial state ${JSON.stringify(store.getState())}`);

const unscribe = store.subscribe(() => { console.log(`updated state ${JSON.stringify(store.getState())}`)});

store.dispatch(orderCars(2));

store.dispatch(orderCars(1));

store.dispatch(orderCars(3));

store.dispatch(orderRestock(10));

store.dispatch(orderCars(3));

unscribe();