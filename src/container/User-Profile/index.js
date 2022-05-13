import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { putApiReq, getApiReq } from '../../apiHandler'
import { toast } from 'react-toastify';


export default function Profile() {
    const navigate = useNavigate()
    const [data, setData] = useState(
        {
            title: '',
            body: ''
        }
    );
    const { id } = useParams();


    const editData = () => {
        getApiReq(`/posts/${id}`)
            .then((res) => {
                setData(res.data)
            })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        putApiReq(`/posts/${id}`, data)
            .then((res) => {
                if (res.status === 200) {
                    toast.success('Profile updated successfully');
                    navigate('/list')
                }
            })
    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    useEffect(() => {
        editData()
    }, [])

    if (id)
        return (
            <div className="container">
                <div>

                    <div className="input-group mt-5">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Title</label>
                        <input
                            className='form-control'
                            type="text"
                            placeholder="Enter text"
                            onChange={handleChange}
                            value={data.title}
                            name='title'
                        />
                    </div>
                    <div className="input-group mt-5">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Body</label>
                        <textarea
                            className='form-control'
                            type="text"
                            placeholder="Enter text"
                            onChange={handleChange}
                            value={data.body}
                            name='body'
                        />
                    </div>
                    <div className='mt-5'>
                        <button type="button" onClick={handleSubmit} className="btn btn-dark">Update</button>
                    </div>
                </div>
            </div>
        )

}
