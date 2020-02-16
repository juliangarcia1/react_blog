import React, {Component} from 'react';
import './Field.css'


class Field extends Component{
    render() {
        return(
            <div className="Field">
                <form>
                    <div className="Field-ele">
                        <div className="Field-text-input">
                            <input type="text"/>
                        </div>
                        <div className="Field-button-send">
                            <input type="button" value="Send"/>
                        </div>
                    </div>
                </form>        
            </div>
        );
    }
}


export default Field;