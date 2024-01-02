import "./Dashboard.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import PageHeader from '../Louty/Louty';

function Dashboard() {
    const [Experience, setExperience] = useState([
        {
            Company: 'Tech Guy Web Solutions',
            Title: 'Senior Developer',
            Years: '02-03-2009 - 01-02-2014'
        }
    ]);
    const [Education, setEducation] = useState([
        {
            School: 'Northern Essex',
            Degree: 'Associates',
            Years: '02-03-2007 - 01-02-2009'
        }
    ]);

    const deleteExperience = (Company) => {
        let arr = Experience
        arr.forEach((item, index) => {
            if (item.Company === Company) {
                arr.splice(index, 1)
                setExperience([...arr])
            }
        })
    };
    const deleteEducation = (Company) => {
        let arr = Education
        arr.forEach((item, index) => {
            if (item.School === Company) {
                arr.splice(index, 1)
                console.log(arr)
                setEducation([...arr])
                console.log(Education)
            }
        })
    };

    return (
        <div>
            <section className="container">
                <h1 className="large text-primary">
                    Dashboard
                </h1>
                <p className="lead"><i className="fas fa-user"></i> Welcome John Doe</p>
                <div className="dash-buttons">
                    <a href="create-profile.html" className="btn btn-light"
                    ><i className="fas fa-user-circle text-primary"></i> Edit Profile</a
                    >
                    <a href="add-experience.html" className="btn btn-light"
                    ><i className="fab fa-black-tie text-primary"></i> Add Experience</a
                    >
                    <a href="add-education.html" className="btn btn-light"
                    ><i className="fas fa-graduation-cap text-primary"></i> Add Education</a
                    >
                </div>

                <h2 className="my-2">Experience Credentials</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th className="hide-sm">Title</th>
                            <th className="hide-sm">Years</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Experience.map(item => 
                                <tr key={item.Company}>
                            <td>{item.Company}</td>
                            <td className="hide-sm">{item.Title}</td>
                            <td className="hide-sm">
                                {item.Years}
                            </td>
                            <td>
                                <button onClick={() => deleteExperience(item.Company)} className="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                                )
                        }
                    </tbody>
                </table>

                <h2 className="my-2">Education Credentials</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>School</th>
                            <th className="hide-sm">Degree</th>
                            <th className="hide-sm">Years</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                    {
                            Education.map(item => 
                                <tr key={item.School}>
                            <td>{item.Company}</td>
                            <td className="hide-sm">{item.Degree}</td>
                            <td className="hide-sm">
                                {item.Years}
                            </td>
                            <td>
                                <button onClick={() => deleteEducation(item.School)} className="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                                )
                        }
                    </tbody>
                </table>
            </section>

        </div>
    );
}

export default Dashboard;