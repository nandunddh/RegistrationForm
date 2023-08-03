import React, { useContext, useEffect } from 'react'
import { MyContext } from '../MyContext';
import { redirect, useNavigate } from 'react-router-dom';

const Payment = () => {
  // const navigate = useNavigate();
  const navigate = useNavigate();
  const { Finaldata, setFinaldata, totalPrice, setTotalPrice } = useContext(MyContext);
  console.log(Finaldata);

  // useEffect(() => {
  //   navigate('/');
  //   // alert("hello");
  // })

  return (

    <>
      {/* < redirect
        to={{
          pathname: "/"
        }
        }
      /> */}
      <div className='container mt-5 text-center'>
        <h1>Payment</h1>
        <h1>{Finaldata.name}</h1>
        <h1>{totalPrice}</h1>
      </div>
    </>
  )
}

export default Payment