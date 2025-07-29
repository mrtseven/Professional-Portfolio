import React, {Component} from 'react';

class Loader extends Component {
    render() {
        return (
            <div className="loader">
                <div className="loader-inner">
                    <div className="bounce">
                        <div className="bounce-circle"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loader;