import React, { Fragment, useState, useEffect } from 'react';
//import { Button, Field, Control, Input, Column, Title, Help, Label } from "rbx";
import UserService from '../../../services/users';

function UsersEditForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState(null);

    const initializeUser = async () => {
        const user = await JSON.parse(localStorage.getItem('user'));
        setName(user['name']);
        setEmail(user['email']);
    }

    useEffect(() => {
        initializeUser()
    }, [])

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            await UserService.update({ email: email, name: name });
            setStatus("success");
        } catch (err) {
            setStatus("error");
        }
    }

    return (
        <Fragment>
            <form className="is-12" onSubmit={handleSubmit}>
                <div className="field">

                    <label className="field has-text-grey">Full Name</label>
                    <input className="input"
                        type="name"
                        value={name || ""}
                        onChange={e => setName(e.target.value)}
                        required
                        name="name"
                    />

                </div>
                <div className="field">

                    <label className="field has-text-grey">Email</label>
                    <input className="input"
                        type="email"
                        value={email || ""}
                        onChange={e => setEmail(e.target.value)}
                        required
                        name="email"
                    />

                </div>

                <div className="field">

                    <div className="columns">
                        <div className="column has-text-right">
                            <button className="button">Update</button>
                        </div>
                    </div>

                </div>
                {status == "error" &&
                    <div className="is-danger">Problem in update</div>
                }
                {status == "success" &&
                    <div className="is-primary">Updated with success</div>
                }
            </form>
        </Fragment>
    )


}

export default UsersEditForm;