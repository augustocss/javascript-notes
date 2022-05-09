import React, { Fragment } from 'react';
import Header from '../../../components/header';
import logoImage from '../../../assets/images/logo.png';
import '../../../styles/auth.scss';
import LoginForm from '../../../components/auth/login_form';


const LoginScreen = () => (
    <Fragment>
        <Header />
        <section className="section auth is-medium">
            <div className="container">
                <div className="columns centered">
                    <div className="column is-3">
                        <div className="card">
                            <div className="card-content">
                                <section className="section">
                                    <div className="columns centered">
                                        <div className="column is-12">
                                            <img src={logoImage} />
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-12">
                                            <h6 className="has-text-grey has-text-centered title is-6">
                                                Your notes on the cloud
                                            </h6>
                                        </div>
                                    </div>
                                    <LoginForm />
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
);

export default LoginScreen;