import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import '../MyTask/MyTask.css'

const Comment = () => {
    const { id } = useParams()

    const commentHadale = (e) => {
        e.preventDefault()
        const comment = e.target.comment.value;

        const addComment = { comment, id}
        // post data
        fetch(`http://localhost:5000/comment`, {
            method: 'POST',
            headers: {

                'content-type': 'application/json',
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(addComment)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Add your task')
                // setLoad(false)

            })

    }
    return (
        <div className='container mx-auto'>
            <div className="comment-area">

                <form onSubmit={commentHadale}>

                    <input type="text" name='comment' className='comment' placeholder='Comment ' />
                    <button className='bt-comment' type='submit'>Submit</button>
                </form>
            </div>
            <Toaster />

        </div>
    );
};

export default Comment;