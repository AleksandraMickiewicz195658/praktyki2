// story for session

const inicialUser = {
    mail: "",
}

const session = (state = inicialUser, action) =>{
    switch(action.type){
        case 'SING_IN':         
            return {mail:action.mail};
        case 'SING_OUT':         
            return inicialUser;
        default:
            return state;
    }  
}


export default session;