import React from 'react';
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0, currentDateTime: Date().toLocaleString() };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1,
            currentDateTime: Date().toLocaleString(),
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <footer className="d-flex justify-content-between align-items-center border-top m-3">
                <p>
                    &copy; UCL &middot;
                </p>
                <p>
                    <button
                        type="button"
                        className="btn btn-link"
                        onClick={this.topFunction}>Back to top
                    </button>
                </p>
                <p>{this.state.currentDateTime}</p>
            </footer>
        );


    }

    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
export default Footer;
