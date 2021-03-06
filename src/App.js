import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Appnav from './components/Appnav'


export default class App extends Component {

    handleDate = (e) => {

        e.preventDefault();

    };

    handleOnChangeValue = (e) => {
        this.setState({myDate: e.target.value, showData: true});

        //alert(this.state.myDate)

    };

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
                    day:'Monday'
                }, {
                    patientName: 'Mary Muigai',
                    email: 'mmgai@gmail.com',
                    appointmentDate: '2019-07-19',
                    day:'Monday'
                }, {
                    patientName: 'Tom Moba',
                    email: 'tomMoboya@gmail.com',
                    appointmentDate: '2019-07-19',
                    day:'Tuesday'
                }, {
                    patientName: 'Peter Mtembei',
                    email: 'peterM@gmail.com',
                    appointmentDate: '2019-07-19',
                    day:'Tuesday'
                }, {
                    patientName: 'Raph Pundo',
                    email: 'rpundo@gmail.com',
                    appointmentDate: '2019-07-19',
                    day:'Wednesday'
                }, {
                    patientName: 'Dennis Obuya',
                    email: 'dennis@gmail.com',
                    appointmentDate: '2019-07-19',
                    day:'Wednesday'
                }, {
                    patientName: 'Caro Mwende',
                    email: 'caro@gmail.com',
                    appointmentDate: '2019-02-02',
                    day:'Thursday'
                }
            ]
        }
    }

    render() {
        const appointmentdata = this.state.appoinmentData;
        const appointmentList = appointmentdata.map(app => {
            if (app.appointmentDate === this.state.myDate) {
                return (
                    <tr>
                        <td>{app.patientName}</td>
                        <td>{app.appointmentDate}</td>
                        <td>{app.email}</td>

                    </tr>
                )
            }

        })
        return (
            <div className="container-fluid">
                <Appnav></Appnav>
                
                <div className="container">
                    <br/>
                    <h5>Appointments</h5>

                    {
                      this.state.appoinmentData.map((data)=>{
                        return(
                          <button  className="btn">
                            {data.appointmentDate}
                          </button>
                        )
                      })
                    }
                    <h6>Choose on a date to filter.hint choose on '2019-07-19'</h6>
                    <form>
                        <input onChange={this.handleOnChangeValue} type="date"/>
                    </form>

                    {/* <button className="btn">View Patients</button> */}

                    <table class="table">
                        <thead>
                            <tr>

                                <th scope="col">Patient Name</th>
                                <th scope="col">Visit Date</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>

                            {appointmentList}

                        </tbody>
                    </table>
                    {/* <p>Return all patients with appointment {this.state.myDate}</p> */}

                </div>
            </div>
        );
    }
}
