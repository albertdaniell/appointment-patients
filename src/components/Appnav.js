import React, {Component} from 'react'
import '../App.css'
import {Link} from 'react-router-dom';

export default class Appnav extends Component {
    render() {
        return (
            <div className="container-fluid">
                <nav>
                    <div class="nav-wrapper container">
                        <Link to={"Allpatients"} className="brand-logo">Appointment App</Link>&nbsp;

                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li>
                                <Link to={"/"}>Home</Link>&nbsp;
                            </li>
                            <li>
                                <Link to={"/"}>All Patients</Link>&nbsp;
                            </li>
                            
                            
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}