import { Fragment } from "react";
import presentationImg from '../../assets/images/presentation.png';
import Header from '../../components/header';
import '../../styles/home.scss';
import { Link } from 'react-router-dom';

const HomeScreen = () => (
    <Fragment>
        <Header />
        <section className="section is-medium home">
            <div className="container">
                <div className="columns">
                    <div className="column is-5">
                        <h1 className="has-text-white title is-spaced">
                            Create notes easily and access when you wants on the cloud
                        </h1>
                        <h5 className="has-text-light subtitle is-spaced">
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.<br /><br />
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.
                        </h5>
                        <Link to="/register" className="button is-outlined is-white is-large">
                            <strong>Register for free Now</strong>
                        </Link>
                    </div>
                    <div className="column is-6 is-offset-1">
                        <img src={presentationImg} />
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
)

export default HomeScreen;