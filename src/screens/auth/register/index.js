import React, { Fragment } from 'react';
import Header from '../../../components/header';
import logoImage from '../../../assets/images/logo.png';
import '../../../styles/auth.scss';


const RegisterScreen = () => (
    <Fragment>
        <Header />
        <section className="section is-medium auth">
            <div className="container ">
                <div className="columns">
                    <div className="column is-4"></div>
                    <div className="column is-4">
                        <div className="card">
                            <div className="card-content">
                                <section className="section">
                                    <div className="columns">
                                        <div className="column is-12">
                                            <img src={logoImage} />
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-12">
                                            <h6 className="title is-6 has-text-grey has-text-centered">
                                                Your notes on the cloud
                                            </h6>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
);

export default RegisterScreen;