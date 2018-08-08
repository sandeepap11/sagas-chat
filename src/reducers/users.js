import * as types from '../constants/ActionTypes';

const users = (state = [], action) => {

    const { ADD_USER, USERS_LIST } = types;
    const { type, id, name, users } = action;

    switch (type) {
        case ADD_USER:
            return state.concat([{
                id,
                name
            }]);
            case USERS_LIST:
            return users;

        default: return state;
    }
};

export default users;