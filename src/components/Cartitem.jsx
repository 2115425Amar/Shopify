import React from 'react'
import toast from 'react-hot-toast';
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import {  remove } from '../redux/Slices/CartSlice';
const Cartitem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }
  return (
    <div>
    <div>
      <div>
        <img src={item.image} alt="" />
      </div>
      <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
        <div>
          <p>{item.price}</p>
          <div>
          <FcDeleteDatabase onClick={removeFromCart} />
          {/* <button>Delete</button> */}
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Cartitem