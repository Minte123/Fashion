import React, {Component} from 'react';

class ThankYou extends Component {
    render() {
        return (
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <span className="icon-check_circle display-3 text-success">
                                    <i className="fas fa-check-circle"></i>
                            </span>
                            <h2 className="display-3 text-black">Thank you!</h2>
                            <p className="lead mb-5">You order was successfuly completed.</p>
                            <p><a href="/" className="btn btn-sm height-auto px-4 py-3 btn-primary">Back to
                                shop</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThankYou;
