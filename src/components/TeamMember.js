import React from 'react'

export default function TeamMember(props) {
    const { details } = props

    if (!details) {
        return <h3>Fetching your friend&apos;s details...</h3>
    }

    return (
        <div className='member container'>
            <h2>{details.name}</h2>
            <h2>Email: {details.email}</h2>
            <h2>Role: {details.role}</h2>
        </div>
    )
}