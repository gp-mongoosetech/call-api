import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteApiReq, getApiReq } from '../../apiHandler';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function List() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();


    const allData = () => {
        getApiReq(`/posts`)
            .then((res) => {
                if (res.status === 200) {
                    setData(res.data);
                }
            })
    }

    const handleDelete = (id, index) => {          
        deleteApiReq(`/posts/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    let temp = data.slice(0);
                    temp.splice(index, 1);
                    setData(temp);
                    toast.success(`Id ${id} deleted successfully`)
        
                }
            })
    }

    useEffect(() => {
        allData()
    }, [])

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                    <th scope='col'>Update</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((user, index) => {
                    return (
                        <tr>
                            <td>{user?.title}</td>
                            <td>{user?.body}</td>
                            <td onClick={() => navigate(`/list/${user?.id}`)}><AiFillEdit /></td>
                            <td onClick={() => handleDelete(user?.id, index)}><AiFillDelete /></td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )
}
