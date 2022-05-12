import React, { Fragment, useState } from 'react';
//import { Button, Field, Control, Input, Column, Title, Help, Label } from "rbx";
import UserService from '../../../services/users';

function UsersEditFormPassword() {
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [status, setStatus] = useState(null);

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        if (password == password_confirmation) {
            try {
                await UserService.updatePassword({ password: password });
                setStatus("success")
            } catch (err) {
                setStatus("error")
            }
        } else {
            setStatus("error_confirmation_password")
        }

    }

    return (
        <Fragment>
            <form className="is-12" onSubmit={handleSubmit}>
                <div className="field">
                    <label className="has-text-grey">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        name="password"
                    />
                </div>
                <div className="field">
                    <label className="has-text-grey">Password Confirmation</label>
                    <input
                        type="password"
                        value={password_confirmation}
                        onChange={e => setPasswordConfirmation(e.target.value)}
                        required
                        name="password_confirmation"
                    />
                </div>

                <div className="field">
                    <div className='columns'>
                        <div className="column has-text-right">
                            <button className='button'>Update Password</button>
                        </div>
                    </div>
                </div>
                {status == "error_update" &&
                    <div className="is-danger">Problem in password update</div>
                }
                {status == "error_confirmation_password" &&
                    <div className="is-danger">Password don't match</div>
                }
                {status == "success" &&
                    <div className="is-primary">Updated with success</div>
                }
            </form>
        </Fragment>
    )
}

export default UsersEditFormPassword;