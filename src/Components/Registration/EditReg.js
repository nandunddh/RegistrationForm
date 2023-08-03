import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../MyContext';

const EditReg = () => {

  const {registrationType, setRegistrationType } = useContext(MyContext);//contextAPI
  const [regType, setRegType] = useState("Early Bird");
  const [data, setData] = useState("abc");

  const [earlyreg, setEarlyreg] = useState({
    price: "649",
    academic: "649",
    industry: "749",
    federal: "849",
    delegate: "549",
    student: "449",
    virtual: "349",
  })
  const [academic, setAcademic] = useState("649")
  //  const {academic} = {academic};
  const [industry, setearlyBird] = useState("749")
  const [federal, setFederal] = useState("849")
  const [delegate, setDelegate] = useState("549")
  const [student, setStudent] = useState("449")
  const [virtual, setVirtual] = useState("349")

  useEffect(() => {
    // console.log(data)
    console.log(earlyreg)

  }, [])

  const regChange = (e) => {
    let updatedValue = {};
    updatedValue = { price: e.target.value };
    setEarlyreg({ ...earlyreg, ...updatedValue });
    console.log("first",e.target.value)
  }
  const handleChange = (e) => {
    setData(e.target.value);
  }

  const handleChangeEarlyBirdAcademic = (e) => {
    setRegType(e.target.value);
    setRegistrationType(e.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // axios.put(`http://localhost:8888/api/user/${id}/edit`, inputs).then(function(response){
    //     console.log(response.data);
    //     navigate('/');
    // });
  }


  return (
    <div className='container'>
      <div className="row ms-3 px-0">
        <div className="col-xl-12 pe-0">
          <div className='row'>
            <div className="mb-3">
              <label htmlFor className="form-label">Reg Name</label>
              <input type="text" className="form-control" onChange={handleChangeEarlyBirdAcademic} value={regType} />
              {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
            </div>

          </div>
          <div className="row me-0 pricing-start">
            <div className="col-sm-auto py-3 px-1 pricing">
              <div className="card" style={{ width: '14rem' }}>
                <div className="card-body rounded rounded-bottom-0 text-center">
                  <h5 className="card-title">Early Bird</h5>
                  <small className="mt-5">Before March 10,2023</small>
                  <div>
                    <input className="form-check-input p-3" type="checkbox" name="registration" disabled={regType !== "Early Bird"} checked={regType === "Early Bird"} />
                  </div>
                </div>
                {/* <ul className="list-group list-group-flush border" disabled>
                  <div className="form-check my-3 ms-2">
                    <input className="form-check-input pointer" type="radio" name="r1" value={earlyreg.academic} id="flexRadioDefault1" data-value={'Academic'} disabled={regType !== "Early Bird"} onChange={regChange} checked={earlyreg.academic === earlyreg.academic}/>
                    <label className="form-check-label me-0 col-sm-6" id="early-academic" >
                      Academic
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm ms-4">$649</button>
                  </div>
                  <div className="form-check my-3 ms-2">
                    <input className="form-check-input pointer" type="radio" name="r1" value={earlyreg.industry} id="flexRadioDefault2" data-value={'Industry'} disabled={regType !== "Early Bird"} onChange={regChange} checked={earlyreg.industry === earlyreg.industry}/>
                    <label className="form-check-label col-sm-6" id="early-industry" >
                      Industry
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm ms-4">$749</button>
                  </div>
                  <div className="form-check my-3 ms-2">
                    <input className="form-check-input pointer" type="radio" name="r1" value={earlyreg.federal} id="flexRadioDefault3" data-value={'Federal'} disabled={regType !== "Early Bird"} onChange={regChange} checked={earlyreg.federal === earlyreg.federal}/>
                    <label className="form-check-label col-sm-6" id="early-federal" >
                      Federal
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm ms-4">$849</button>
                  </div>
                  <div className="form-check my-3 ms-2">
                    <input className="form-check-input pointer" type="radio" name="r1" value={earlyreg.delegate} id="flexRadioDefault4" data-value={'Delegate'} disabled={regType !== "Early Bird"} onChange={regChange} checked={earlyreg.delegate === earlyreg.delegate}/>
                    <label className="form-check-label col-sm-6" id="early-delegate" >
                      Delegate
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm ms-4">$549</button>
                  </div>
                  <div className="form-check my-3 ms-2">
                    <input className="form-check-input pointer" type="radio" name="r1" value={earlyreg.student} id="flexRadioDefault5" data-value={'Student'} disabled={regType !== "Early Bird"} onChange={regChange} checked={earlyreg.student === earlyreg.student}/>
                    <label className="form-check-label col-sm-6" id="early-student" >
                      Student
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm ms-4">$449</button>
                  </div>
                  <div className="form-check my-3 ms-2">
                    <input className="form-check-input pointer" type="radio" name="r1" value={earlyreg.virtual} id="flexRadioDefault6" data-value={'Virtual'} disabled={regType !== "Early Bird"} onChange={regChange} checked={earlyreg.virtual === earlyreg.virtual}/>
                    <label className="form-check-label col-sm-6" id="early-virtual" >
                      Virtual
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm ms-4">$349</button>
                  </div>
                </ul> */}
                <ul className="list-group list-group-flush border">
                  <div className="form-check my-3 ms-2">
                    <input className="form-check-input pointer" type="radio" name="r1" value={649} id="flexRadioDefault1" checked={earlyreg.price === "649"} onChange={regChange} data-value={'Academic'} />
                    <label className="form-check-label me-0 col-sm-6" id="early-academic" >
                      Academic
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm ms-4">$649</button>
                  </div>
                  <div className="form-check my-3 ms-2">
                    <input className="form-check-input pointer" type="radio" name="r1" value={749} id="flexRadioDefault2" checked={earlyreg.price === "749"} onChange={regChange} data-value={'Industry'} />
                    <label className="form-check-label col-sm-6" id="early-industry" >
                      Industry
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm ms-4">$749</button>
                  </div>
                  <div className="form-check my-3 ms-2">
                    <input className="form-check-input pointer" type="radio" name="r1" value={849} id="flexRadioDefault3" checked={earlyreg.price === "849"} onChange={regChange} data-value={'Federal'} />
                    <label className="form-check-label col-sm-6" id="early-federal" >
                      Federal
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm ms-4">$849</button>
                  </div>
                  <div className="form-check my-3 ms-2">
                    <input className="form-check-input pointer" type="radio" name="r1" value={549} id="flexRadioDefault4" checked={earlyreg.price === "549"} onChange={regChange} data-value={'Delegate'} />
                    <label className="form-check-label col-sm-6" id="early-delegate" >
                      Delegate
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm ms-4">$549</button>
                  </div>
                  <div className="form-check my-3 ms-2">
                    <input className="form-check-input pointer" type="radio" name="r1" value={449} id="flexRadioDefault5" checked={earlyreg.price === "449"} onChange={regChange} data-value={'Student'} />
                    <label className="form-check-label col-sm-6" id="early-student" >
                      Student
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm ms-4">$449</button>
                  </div>
                  <div className="form-check my-3 ms-2">
                    <input className="form-check-input pointer" type="radio" name="r1" value={349} id="flexRadioDefault6" checked={earlyreg.price === "349"} onChange={regChange} data-value={'Virtual'} />
                    <label className="form-check-label col-sm-6" id="early-virtual" >
                      Virtual
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm ms-4">$349</button>
                  </div>
                </ul>
              </div>
            </div>
            <div className="col-sm-auto py-3 px-1 pricing pricing-midterm">
              <div className="card" style={{ width: '16rem' }}>
                <div className="card-body rounded rounded-bottom-0 px-1 text-center">
                  <h5 className="card-title" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Mid Term Registrations
                  </h5>
                  <small>After March 10,2023</small>
                  <div>
                    <input className="form-check-input p-3" name="midterm" id="check_midterm checkboxNoLabel" type="checkbox" disabled={regType !== "Mid Term"} checked={regType === "Mid Term"} />
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <div className="form-check m-3 ms-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={799} data-value="Academic" disabled={regType !== "Mid Term"} checked={regType === "Mid Term"} />
                    <label className="form-check-label col-sm-6" >
                      Academic
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm ms-4" disabled>$799</button>
                  </div>
                  <div className="form-check m-3 ms-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={899} data-value="Industry" disabled={regType !== "Mid Term"} checked={regType === "Mid Term"} />
                    <label className="form-check-label col-sm-6" >
                      Industry
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm ms-4" disabled>$899</button>
                  </div>
                  <div className="form-check m-3 ms-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={999} data-value="Federal" disabled={regType !== "Mid Term"} checked={regType === "Mid Term"} />
                    <label className="form-check-label col-sm-6" >
                      Federal
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm ms-4" disabled>$999</button>
                  </div>
                  <div className="form-check m-3 ms-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={699} data-value="Delegate" disabled={regType !== "Mid Term"} checked={regType === "Mid Term"} />
                    <label className="form-check-label col-sm-6" >
                      Delegate
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm ms-4" disabled>$699</button>
                  </div>
                  <div className="form-check m-3 ms-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={859} data-value="Student" disabled={regType !== "Mid Term"} checked={regType === "Mid Term"} />
                    <label className="form-check-label col-sm-6" >
                      Student
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm ms-4" disabled>$599</button>
                  </div>
                  <div className="form-check m-3 ms-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={399} data-value="Virtual" disabled={regType !== "Mid Term"} checked={regType === "Mid Term"} />
                    <label className="form-check-label col-sm-6" >
                      Virtual
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm ms-4" disabled>$399</button>
                  </div>
                </ul>
              </div>
            </div>
            {/* <!-- Vertically centered modal --> */}
            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">
                    <label htmlFor className="form-label">Reg Name</label>
                    <input type="text" className="form-control" onChange={handleChangeEarlyBirdAcademic} value={regType} />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Understood</button>
                  </div>
                </div>

              </div>
            </div>


            <div className="col-sm-auto py-3 px-1 pricing">
              <div className="card" style={{ width: '14rem' }}>
                <div className="card-body rounded rounded-bottom-0 text-center">
                  <h5 className="card-title">
                    Late Registrations
                  </h5>
                  <small>March 23, 2023</small>
                  <div>
                    <input className="form-check-input p-3" type="checkbox" id="checkboxNoLabel" disabled={regType !== "Late"} checked={regType === "Late"} />
                  </div>
                </div>
                <ul className="list-group list-group-flush" id="price-card">
                  <div className="form-check m-3 ms-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={999} data-value="Academic" disabled={regType !== "Late"} checked={regType === "Late"} />
                    <label className="form-check-label col-sm-6" >
                      Academic
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-2">$999</button>
                  </div>
                  <div className="form-check m-3 ms-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={1099} data-value="Industry" disabled={regType !== "Late"} />
                    <label className="form-check-label col-sm-6" >
                      Industry
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-2">$1099</button>
                  </div>
                  <div className="form-check m-3 ms-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={1199} data-value="Federal" disabled={regType !== "Late"} />
                    <label className="form-check-label col-sm-6" >
                      Federal
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-2">$1199</button>
                  </div>
                  <div className="form-check m-3 ms-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={899} data-value="Delegate" disabled={regType !== "Late"} />
                    <label className="form-check-label col-sm-6" >
                      Delegate
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-2">$899</button>
                  </div>
                  <div className="form-check m-3 ms-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault not-allowed" id="flexRadioDefault1" value={599} data-value="Student" disabled={regType !== "Late"} />
                    <label className="form-check-label col-sm-6" >
                      Student
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-2">$599</button>
                  </div>
                  <div className="form-check m-3 ms-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={499} data-value="Virtual" disabled={regType !== "Late"} />
                    <label className="form-check-label col-sm-6" >
                      Virtual
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-2">$499</button>
                  </div>
                </ul>
              </div>
            </div>
            <div className="col-sm-auto py-3 px-1 pricing pricing-onspot">
              <div className="card" style={{ width: '15rem' }}>
                <div className="card-body rounded rounded-bottom-0 text-center">
                  <h5 className="card-title">
                    On-spot Registrations
                  </h5>
                  <small>April 10,2023</small>
                  <div>
                    <input className="form-check-input p-3 not-allowed" type="checkbox" id="checkboxNoLabel" disabled={regType !== "OnSport"} checked={regType === "OnSport"} />
                  </div>
                </div>
                <ul className="list-group list-group-flush" id="price-card" disabled>
                  <div className="form-check m-3 ms-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={1199} data-value="Academic" disabled />
                    <label className="col-sm-6" >
                      Academic
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-3">$1199</button>
                  </div>
                  <div className="form-check m-3 ms-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={1299} data-value="Industry" disabled={regType !== "OnSport"} checked={regType === "OnSport"} />
                    <label className="col-sm-6" >
                      Industry
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-3">$1299</button>
                  </div>
                  <div className="form-check m-3 ms-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={1399} data-value="Federal" disabled={regType !== "OnSport"} checked={regType === "OnSport"} />
                    <label className="col-sm-6" >
                      Federal
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-3">$1399</button>
                  </div>
                  <div className="form-check m-3 ms-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={1099} data-value="Delegate" disabled={regType !== "OnSport"} checked={regType === "OnSport"} />
                    <label className="col-sm-6" >
                      Delegate
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-3">$1099</button>
                  </div>
                  <div className="form-check m-3 ms-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={699} data-value="Student" disabled={regType !== "OnSport"} checked={regType === "OnSport"} />
                    <label className="col-sm-6" >
                      Student
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-3">$699</button>
                  </div>
                  <div className="form-check m-3 ms-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={599} data-value="Virtual" disabled={regType !== "OnSport"} checked={regType === "OnSport"} />
                    <label className="col-sm-6" >
                      Virtual
                    </label>
                    <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-3">$599</button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditReg