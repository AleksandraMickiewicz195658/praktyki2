// story for session

const inicialUser = {
  mail: '',
  token: null,
  user_id: null,
};

const session = (state = inicialUser, action) => {
  switch (action.type) {
    case 'SING_IN':
      return {
        ...state,
        token: action.token,
        mail: action.mail,
        user_id: action.user_id,
      };
    case 'SING_OUT':
      return inicialUser;
    default:
      return state;
  }
};

export default session;
