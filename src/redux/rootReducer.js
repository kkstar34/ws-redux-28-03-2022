


const initialState = {
    users : 
    [
        {
            name : 'Kouyate ',
            lastName : 'Karim'
        }, 
        {   
            name : 'Raoul',
            lastName : 'Soga'
        } 
        
    ]
}



function rootReducer(state = initialState, action) {


    switch (action.type) {
        case 'ADD-USER':{
            return {users : [...state.users, action.payload]};
        }
        default:
            return state;
    }
}


export default rootReducer;