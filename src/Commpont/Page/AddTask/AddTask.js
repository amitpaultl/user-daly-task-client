import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import './AddTask.css'

const AddTask = () => {
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
                    fetch(`https://user-daly-task-server.vercel.app/userTask`, {
                        method: 'POST',
                        headers: {

                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(information)
                    })
                        .then(res => res.json())
                        .then(data => {
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

                        <input type="text" className='inputTask' name='name' placeholder='Task Name' />
                        <textarea name={'message'} className='inputText' id="" cols="30" rows="10"></textarea>
                        <input type="file" name={'img'} />
                        <button type="submit" className='bt-submit'>Submit</button>
                    </form>
                </div>
            </div>
            <Toaster />

        </div>
    );
};

export default AddTask;