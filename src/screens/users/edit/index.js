import React, { Fragment } from 'react';
//import { Column, Section, Title, Container, Card, Button } from "rbx";
import "../../../styles/users.scss";
import HeaderLogged from "../../../components/header_logged";
import UsersEditForm from '../../../components/users/user_edit_form';
import UsersEditFormPassword from '../../../components/users/user_edit_password_form';
import UsersDelete from '../../../components/users/user_delete';


const UserEditScreen = () => (
    <Fragment>
        <HeaderLogged />
        <section className="section is-medium users">
            <div className="container">
                <div className="columns users-edit">
                    <div className="column is-4">
                        <h5 className="title is-5 has-text-grey has-text-left">
                            Informações Pessoais
                        </h5>
                        <div className="card">
                            <div className="card-content">
                                <UsersEditForm />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="columns users-edit">
                    <div className="column is-4">
                        <h5 className="title is-5 has-text-grey has-text-left">
                            Password
                        </h5>
                        <div className="card">
                            <div className="card-content">
                                <UsersEditFormPassword />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-4 has-text-right">
                        <UsersDelete />
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
);

export default UserEditScreen;