
import React from 'react'
import { Link } from 'react-router-dom';
export default function NoMatch() {
    return (
        <p style={{ textAlign: "center" }}>
            <Link to="/">Go to Home </Link>
        </p>
    );
}
