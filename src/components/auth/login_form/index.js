import React, { Fragment, useState } from 'react';
import { Navigate } from "react-router-dom";
import UserService from '../../../services/users';

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToRegister, setRedirectToRegister] = useState(false);
    const [redirectToNotes, setRedirectToNotes] = useState(false);
    const [error, setError] = useState(false);

    if (redirectToRegister === true)
        return <Navigate to="/register" />
    else if (redirectToNotes)
        return <Navigate to="/notes" />

    const HandleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            const user = await UserService.login({ email: email, password: password });
            setRedirectToNotes(true);
        } catch (error) {
            setError(true);
        }
    }

    return ( 
        <Fragment>
            <div className="columns">
                <form className="is-12" onSubmit={HandleSubmit}>
                    <div className="column is-12">
                        <div className="field">
                            <label className="label">Email:</label>
                            <div className="bulma-control-mixin">
                                <input className="input"
                                    type="email"
                                    required
                                    name="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password:</label>
                            <div className="bulma-control-mixin">
                                <input className="input"
                                    type="password"
                                    required
                                    name="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="bulma-control-mixin">
                                <div className="columns">
                                    <div className="column">
                                        <a className="button is-white has-text-custom-purple"
                                            onClick={e => setRedirectToRegister(true)}
                                        >Register or</a>
                                    </div>
                                    <div className="column">
                                        <button className="button is-link">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {error && <div color="danger">Email or Password invalid</div>}
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default LoginForm;