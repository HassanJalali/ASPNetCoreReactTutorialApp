import React, { useState } from 'react';
import Constants from '../utilities/constants';

export default function PostCreatForm() {

    const [formData , setFormData] = useState(initialFormData);
    const initialFormData = Object.freeze({
        title:'ASP .NET With React',
        content:'Develop By Hassan Jalali'
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (  

        <div>
            <form className="w-100 px-5">
                <h1 className="mt-5">Create New Post</h1>

                <div className="mt-5">
                    <lable className="h3 form-lable">Post Title</lable>
                    <input value={formData.title} name='title' type={Text} className='form-control' onChange={handleChange}/>
                </div>

                <div className="mt-4">
                    <lable className="h3 form-lable">Post content</lable>
                    <input value={formData.content} name='content' type={Text} className='form-control' onChange={handleChange}/>
                </div>

                <button onClick={handleSubmit} className='btn btn-dark w-100 mt-5 btn-lg'>Submit</button>
                <button onClick={() => Props.onPostCreated(null)} className='btn btn-secondary w-100 mt-3 btn-lg'>Cancle</button>
            </form>
        </div>
    );
}
