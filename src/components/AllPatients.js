import React, {Component} from 'react'
import Appnav from './Appnav'
import { Link } from 'react-router-dom';

export default class AllPatients extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myDate: '',
            showData: false,
            appoinmentData: [
                {
                    patientName: 'Albert Agoya',
                    email: 'albert@gmail.com',
                    appointmentDate: '2019-03-29',
                    day: 'Monday'
                }, {
                    patientName: 'Mary Muigai',
                    email: 'mmgai@gmail.com',
                    appointmentDate: '2019-07-19',
                    day: 'Monday'
                }, {
                    patientName: 'Tom Moba',
                    email: 'tomMoboya@gmail.com',
                    appointmentDate: '2019-07-19',
                    day: 'Tuesday'
                }, {
                    patientName: 'Peter Mtembei',
                    email: 'peterM@gmail.com',
                    appointmentDate: '2019-07-19',
                    day: 'Tuesday'
                }, {
                    patientName: 'Raph Pundo',
                    email: 'rpundo@gmail.com',
                    appointmentDate: '2019-07-19',
                    day: 'Wednesday'
                }, {
                    patientName: 'Dennis Obuya',
                    email: 'dennis@gmail.com',
                    appointmentDate: '2019-07-19',
                    day: 'Wednesday'
                }, {
                    patientName: 'Caro Mwende',
                    email: 'caro@gmail.com',
                    appointmentDate: '2019-02-02',
                    day: 'Thursday'
                }
            ]
        }
    }

    render() {
        const appointmentdata = this.state.appoinmentData;
        const appointmentList = appointmentdata.map(app => {

            return (
                <tr>
                    <td>{app.patientName}</td>
                    <td>{app.appointmentDate}</td>
                    <td>
                        <Link to={`/${app.day}`}>
                            {app.day}</Link>
                    </td>
                    <td>{app.email}</td>

                </tr>
            )

        })

        return (
            <div className="container-fluid">
                <Appnav></Appnav>

                <div className="container">
                    <div>

                        <h5>All Patients Appointments</h5>
                        <hr/>
                        <table class="table">
                            <thead>
                                <tr>

                                    <th scope="col">Patient Name</th>
                                    <th scope="col">Visit Date</th>
                                    <th scope="col">Visit Day</th>
                                    <th>
                                        Patient Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointmentList}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}
