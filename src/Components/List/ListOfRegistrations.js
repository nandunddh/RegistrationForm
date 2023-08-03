import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const ListOfRegistrations = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // axios.get("http://localhost/crud/submit.php").then((response) => {
    //   console.log(response.data);
    //   setData(response.data);
    // });
    getdata();
  }, [data])

  const getdata = () => {
    axios.get("http://localhost/crud/submit.php").then((response) => {
      // console.log(response.data);
      setData(response.data);
    });
  }


  return (
    <>
      <div className='container'>
        <p className='display-5 text-center fw-bold'> List Of Registrations</p>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, key) =>

                <tr className="" key={key}>
                  <td scope="row">{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td><Link>{item.total}</Link></td>
                  {/* <td><a
                    href={require(item.file)}
                    download={item.file}
                    target="_blank"
                    rel="noreferrer"
                  ><button className="btn btn-success"> Download</button></a></td> */}
                    <td><Link to="/editList"><i className="fa-solid fa-pen-to-square me-3 text-warning"></i></Link><Link to="/deleteList"><i className="fa-solid fa-trash text-danger"></i></Link></td>
                </tr>
              )}
              {/* <tr className="">
                <td scope="row">2</td>
                <td>Item</td>
                <td>Item</td>
                <td>Item</td>
              </tr> */}
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}

export default ListOfRegistrations