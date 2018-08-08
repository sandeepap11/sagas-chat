import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddMessage extends Component {

sendMessage = (event) => {
    if(event.key === "Enter") {
        this.props.dispatch(event.target.value, "Me");
        event.target.value = "";
    }
}

    render() {

    return (
        <div className="messages-box">
            <input type="text" 
            onKeyPress={(event) => { 
                this.sendMessage(event)
                
             }} 
             
             />

        </div>
    );
}
};


AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default AddMessage;