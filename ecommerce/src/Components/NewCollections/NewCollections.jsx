import React, { forwardRef } from 'react'
import new_collections from '../Assets/Frontend_Assets/new_collections.js';
import Item from '../Item/Item';
import './NewCollections.css';

const NewCollections = forwardRef((props,ref) => {
  return (
    <div ref={ref} className='new-collection'>
        <h1>New Collections</h1>
        <hr />
        <div className="new-collection-items">
            {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
});

export default NewCollections