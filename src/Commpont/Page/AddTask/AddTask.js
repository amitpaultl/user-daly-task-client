import React from 'react';
import './AddTask.css'

const AddTask = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="add-card">
                    <form>
                        
                        <input type="text" className='inputTask' name='name' placeholder='Task Name' />
                        <textarea className='inputText' name="" id="" cols="30" rows="10"></textarea>
                        <input type="file" />
                        <button type="submit" className='bt-submit'>Submit</button>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default AddTask;