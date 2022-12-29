import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { json, useNavigate, useParams } from 'react-router-dom';
import '../AddTask/AddTask.css'
import Loading from '../Loding/Loding';

const UpdateTask = () => {
    const { id } = useParams()
    const navigate = useNavigate();

    // const [content , setContent] = useState()

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/getTask/${id}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data.data);
    //         setContent(data.data)
    //     })
    // },[])

    const url = `http://localhost:5000/getTask/${id}`;
    const { data: addProduct = [], refetch, isLoading } = useQuery({
        queryKey: ['addProduct'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                }

            });
            const data = await res.json();
            return data
        }
    })
    
    if (isLoading) {
        return <Loading></Loading>
    }

    const formSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const message = e.target.message.value;
        const image = e.target.img.files[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=9b886ea0069808da69e30cf31f29ca72`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const information = {
                        name,
                        message,
                        image: data.data.display_url,
                        publish:false

                    }
                    // post data
                    fetch(`http://localhost:5000/updateTaskOld/${id}`, {
                        method: 'PUT',
                        headers: {

                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(information)
                    })
                        .then(res => res.json())
                        .then(data => {
                            navigate('/myTask')
                            toast.success('Add your task')
                            // setLoad(false)

                        })

                }
            })
    }
    return (
        <div>
            <div className="container mx-auto">
                <div className="add-card">
                    <form onSubmit={formSubmit}>

                        <input type="text" defaultValue={addProduct.data.name} className='inputTask' name='name' placeholder='Task Name' />
                        <textarea defaultValue={addProduct.data.message} name={'message'} className='inputText' id="" cols="30" rows="10"></textarea>
                        <input type="file" name={'img'} />
                        <button type="submit" className='bt-submit'>Update Data</button>
                    </form>
                </div>
            </div>
            <Toaster />

        </div>
    );
};

export default UpdateTask;