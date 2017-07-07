// story for session

const inicialUser = {
    mail: "",
    token: null,
}

const session = (state = inicialUser, action) =>{
    switch(action.type){
        case 'SING_IN':         
            return {...state,token:action.token,mail:action.mail};
        case 'SING_OUT':         
            return inicialUser;
        default:
            return state;
    }  
}


export default session;