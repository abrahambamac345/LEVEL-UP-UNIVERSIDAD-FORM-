import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({values}) => {
    
    return values.map( value =>(
        
        <tr key={values.isbn}>
            <td>{values.isbn}</td>
            <td>{values.title}</td>
            <td>{values.author}</td>
            <td className='delete-btn' onClick={()=>(values.isbn)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}