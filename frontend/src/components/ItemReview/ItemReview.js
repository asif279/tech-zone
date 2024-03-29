import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './ItemReview.css';

const ItemReview = ({product,handleRemove}) => {
    const {key,img,name,price,quantity}=product;
    return (
       <div className="review-item">
         <div>
        <img src={img} alt="" />
            
        </div>
        <div className="review-detail-container">
        <div className="review-detail">
        <Link to="/itemdetails"  className='pname'>{name}
         
       
         </Link>
        <p><small>Price:{price}</small></p>
       
        <p><small>Quantity:{quantity}</small></p>

        </div>
        <div className="delete-container">
            <button onClick={()=>handleRemove(key)} className='but-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
        </div>

        </div>
       </div>
    );
};

export default ItemReview;