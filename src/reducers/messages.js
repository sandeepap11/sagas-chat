import * as types from '../constants/ActionTypes';

const messages = (state = [], action) => {

    const { ADD_MESSAGE, MESSAGE_RECEIVED } = types;
    const { type, id, message, author } = action;

    switch (type) {
        case ADD_MESSAGE:
        case MESSAGE_RECEIVED:
            return state.concat([{
                id,
                message,
                author
            }]);

        default: return state;
    }
};

export default messages;