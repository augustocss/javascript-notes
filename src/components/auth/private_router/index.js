import { Component } from "react";
import { Route, Navigate } from "react-router-dom";


const privateRoute = ({ children }) => (
    localStorage.getItem('user')
        ? children
        : <Navigate to="/login" />

);

export default privateRoute;