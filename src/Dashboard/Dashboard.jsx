import "./Dashboard.css";
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
    const [company, setCompany] = useState('')
    const [title, setTitle] = useState('')
    const [years, setYears] = useState('')
    const [school, setSchool] = useState('')
    const [degree, setDegree] = useState('')
    const [name, setName] = useState('John Doe')
    const [age, setAge] = useState('20')
    const [address, setAddress] = useState('江西省南昌市')
    const [Education, setEducation] = useState([
        {
            School: 'Northern Essex',
            Degree: 'Associates',
            Years: '02-03-2007 - 01-02-2009'
        }
    ]);
    const [isShow, setIsShow] = useState(false)
    const [openType, setOpenType] = useState('')

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
    const showModal = (type) => {
        setIsShow(true)
        setOpenType(type)
    }
    const closeModal = () => {
        setIsShow(false)
    }
    const setAttrValue = (value, attrName) => {
        if (attrName === 'company') {
            setCompany(value)
        }
        if (attrName === 'title') {
            setTitle(value)
        }
        if (attrName === 'school') {
            setSchool(value)
        }
        if (attrName === 'degree') {
            setDegree(value)
        }
        if (attrName === 'years') {
            setYears(value)
        }
        if (attrName === 'name') {
            setName(value)
        }
        if (attrName === 'age') {
            setAge(value)
        }
        if (attrName === 'address') {
            setAddress(value)
        }
    }
    const handleSubmit = (e, type) => {
        e.preventDefault() 
        if (type === 'Experience') {
            Experience.push({ Company: company, Title: title, Years: years })
            setExperience([...Experience])
        }
        if (type === 'Education') {
            Education.push({ School: school, Degree: degree, Years: years })
            setEducation([...Education])
        }
        setCompany('')
        setTitle('')
        setYears('')
        setDegree('')
        setSchool('')
        closeModal()
    };
    return (
        <div>
            <PageHeader />
            <section className="container">
                <Modal isShow={isShow} close={closeModal}>
                    <div class="container1">
                        {openType === 'Experience' && <form class="form">
                            <div class="form-group1">
                                <label for="name">company</label>
                                <input
                                    id="company"
                                    name="company"
                                    placeholder="company"
                                    type="text"
                                    onChange={event => setAttrValue(event.target.value, 'company')}
                                    value={company}
                                />
                            </div>
                            <div class="form-group1">
                                <label for="email">title</label>
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    placeholder="title"
                                    value={title}
                                    onChange={event => setAttrValue(event.target.value, 'title')}
                                />
                            </div>
                            <div class="form-group1">
                                <label for="message">years</label>
                                <input
                                    id="years"
                                    name="years"
                                    type="text"
                                    placeholder="years"
                                    value={years}
                                    onChange={event => setAttrValue(event.target.value, 'years')}
                                />
                            </div>
                            <button className="btn" onClick={(e) => handleSubmit(e, openType)}>Add</button>
                        </form>}
                        {openType === 'Education' && <form class="form">
                            <div class="form-group1">
                                <label for="name">School</label>
                                <input
                                    id="School"
                                    name="School"
                                    placeholder="School"
                                    type="text"
                                    onChange={event => setAttrValue(event.target.value, 'school')}
                                    value={school}
                                />
                            </div>
                            <div class="form-group1">
                                <label for="email">Degree</label>
                                <input
                                    id="Degree"
                                    name="Degree"
                                    type="text"
                                    placeholder="Degree"
                                    value={degree}
                                    onChange={event => setAttrValue(event.target.value, 'degree')}
                                />
                            </div>
                            <div class="form-group1">
                                <label for="message">years</label>
                                <input
                                    id="years"
                                    name="years"
                                    type="text"
                                    placeholder="years"
                                    value={years}
                                    onChange={event => setAttrValue(event.target.value, 'years')}
                                />
                            </div>
                            <button className="btn" onClick={(e) => handleSubmit(e, openType)}>Add</button>
                        </form>}
                        {openType === 'Profile' && <form class="form">
                            <div class="form-group1">
                                <label for="name">Name</label>
                                <input
                                    id="Name"
                                    name="Name"
                                    placeholder="School"
                                    type="text"
                                    onChange={event => setAttrValue(event.target.value, 'name')}
                                    value={name}
                                />
                            </div>
                            <div class="form-group1">
                                <label for="email">Age</label>
                                <input
                                    id="Age"
                                    name="Age"
                                    type="text"
                                    placeholder="Age"
                                    value={age}
                                    onChange={event => setAttrValue(event.target.value, 'age')}
                                />
                            </div>
                            <div class="form-group1">
                                <label for="message">Address</label>
                                <input
                                    id="Address"
                                    name="Address"
                                    type="text"
                                    placeholder="Address"
                                    value={address}
                                    onChange={event => setAttrValue(event.target.value, 'address')}
                                />
                            </div>
                            <button className="btn" onClick={(e) => {handleSubmit(e,openType)}}>Edit</button>
                        </form>}
                    </div>
                </Modal>
                <h1 className="large text-primary">
                    Dashboard
                </h1>
                <p className="lead"><i className="fas fa-user"></i> Welcome John Doe</p>
                <div className="dash-buttons">
                    <span onClick={() => showModal('Profile')} className="btn"> Edit Profile</span>
                    <span onClick={() => showModal('Experience')} className="btn btn-light"> Add Experience</span>
                    <span onClick={() => showModal('Education')} className="btn btn-light"> Add Education</span>
                </div>
                <h2 className="my-2">Profile Credentials</h2>
                <div className="Profile">
                    <span>Name:{name}</span>
                    <span>Age: {age}</span>
                    <span>Address: {address}</span>
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
                                        <button onClick={(e) => {deleteExperience(item.Company)}} className="btn1 btn-danger">
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
                                    <td>{item.School}</td>
                                    <td className="hide-sm">{item.Degree}</td>
                                    <td className="hide-sm">
                                        {item.Years}
                                    </td>
                                    <td>
                                        <button onClick={(e) => {deleteEducation(item.School)}} className="btn1 btn-danger">
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

function Modal(props) {
    return (
        <>
            <div id="myModal" className="modal" style={{ display: props.isShow ? 'block' : 'none' }}>
                <div className="modal-content">
                    <span onClick={props.close} className="close">&times;</span>
                    <div className="childenSlot">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;