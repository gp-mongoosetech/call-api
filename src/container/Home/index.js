import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postApiReq } from '../../apiHandler';
import { toast } from 'react-toastify';

const Home = () => {
    const initial = {

        title: "",
        body: "",
    }

    const [form, setForm] = useState(initial);
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            ...form
        };
        postApiReq(`/posts`, data)
            .then((res) => {
                if (res.status === 201) {
                    toast.success("Post created successfully")
                }
            })
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleClick = (e) => {
        e.preventDefault()
        navigate("/list");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid cursor-pointer">
                    <a className="navbar-brand">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active cursor-pointer" aria-current="page" onClick={handleClick}>List</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='container my-5'>
                <div className="row">
                    <div className='col-sm-4 mx-auto mt-10 border border-secondary mb-5 rounded'>
                        <form className='pt-3 pb-3' onSubmit={handleSubmit}>
                            {/* <div className="mb-3">
                            <span className="form-label" id="inputGroup-sizing-default" >Id</span>
                            <input type="text" name='id' className="form-control" onChange={handleChange} value={form.id} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div> */}
                            <div className="mb-3">
                                <span className="form-label" id="inputGroup-sizing-default">Title</span>
                                <input type="text" name='title' className="form-control" onChange={handleChange} value={form.title} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />
                            </div>
                            <div className="mb-3">
                                <span className="form-label" id="inputGroup-sizing-default">Body</span>
                                <input type="text" name='body' className="form-control" onChange={handleChange} value={form.body} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Home;