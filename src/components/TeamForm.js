import React from 'react'

export default function TeamForm(props) {
    const {
        values,
        onInputChange,
        onSubmit,
    } = props

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a team member</h2>
                <button>Submit</button>
            </div>

            <div className='form-group inputs'>
                <h4>Fill out this form</h4>

                <label>Name:&nbsp;
                    <input
                        type='text'
                        placeholder='Enter your name'
                        maxLength='40'
                        name='name'
                        value={values.name}
                        onChange={onInputChange}
                    />
                </label>

                <label>Email:&nbsp;
                    <input
                        type='text'
                        placeholder='Enter your email'
                        maxLength='40'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                    />
                </label>

                <label>Role:&nbsp;
                    <select
                        name='role'
                        value={values.role}
                        onChange={onInputChange}>

                        <option value=' '>-- Select your role --</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Data Scientist'>Data Scientist</option>
                        <option value='UI Developer'>UI Developer</option>
                        <option value='UI/UX Developer'>UI/UX Developer</option>
                        <option value='UX Designer'>UX Designer</option>
                        <option value='Product Manager'>Product Manager</option>
                    </select>
                </label>
            </div>
        </form>
    )
}