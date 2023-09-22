import React from 'react'
import Items from '../listItems/Items'

const List = ({ itemText }) => {
    return (
        <ol className='text-lg mx-4  font-bold hover:text-blue-400'>
            <Items itemText={itemText} />
        </ol>
    )
}

export default List