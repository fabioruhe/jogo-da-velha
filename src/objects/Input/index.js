import React from 'react'
import Label from '../Label'
import './styles.css'

const input = ({content, value, id, type='text'}) => {
    return(
        <>
        <input type='checkbox' type={type} id={id} value={value} />
        <Label htmlFor={id} content={content} />
        </>
        )
}
export default input