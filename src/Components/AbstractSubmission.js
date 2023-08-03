import React, { useContext, useEffect, useState } from 'react'
import $, { event } from "jquery";
import styles from "../css/style_abstract.module.css"
// import "../App.css"
import { Link } from 'react-router-dom';
import { MyContext } from '../MyContext';
import axios from 'axios';

const AbstractSubmission = () => {
  const [data, setData] = useState({});
  const [file, setFile] = useState();
  const [result, setResult] = useState("");
  const UPLOAD_ENDPOINT = 'http://localhost/crud/upload.php';
  const [state, setState] = useState();

  const { text, setText } = useContext(MyContext);

  useEffect(() => {
    console.log("context-data", text);
  }, [])

  const handleChane = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }
  // const onChange = (e) => {
  //   setState({ ...data, file: e.target.files[0] })
  // }

  // const uploadFile = async (file) => {
  //   const formData = new FormData();

  //   formData.append('avatar', file)

  //   return await axios.post(UPLOAD_ENDPOINT, formData, {
  //     headers: {
  //       'content-type': 'multipart/form-data'
  //     }
  //   });
  // }

  // 
  const fileSelect = (event) => {
    setState({ selectedFile: event.target.files[0] })
    console.log(event.target.files[0])
  }
  
  const fileUpload = () => {
  //   formData.append("data", state);
  //   // // console.log("file",file);
  //   // const form = $(e.target);
  //   // $.ajax({
  //   //   type: "POST",
  //   //   url: form.attr("action"),
  //   //   data: form.serialize(),
  //   //   success(formData) {
  //   //     setResult(formData);
  //   //     console.log(formData);
  //   //     // navigate("/list");
  //   //   },
  //   // });
    const fd = new FormData();
    fd.append('image', state.selectedFile, state.selectedFile.name,'data', data);
    const form = $(event.target);
    $.ajax({
      type: "POST",
      url: UPLOAD_ENDPOINT,
      data: form.serialize(),
      success(fd) {
        setResult(fd);
        console.log(fd);
        // navigate("/");
      },
    });
    // console.log("Append", fd);
    // axios.post('http://localhost/upload_File.php', fd
    // ).then(res => {
    //   console.log(res);
    // }
    // );

  }
  // 
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let res = await uploadFile(state.file);
  //   // console.log(res.data);
  //   console.log(state);
  //   const formData = new FormData();
  //   // formData.append("file", file);
  //   formData.append("data", state);
  //   // // console.log("file",file);
  //   // const form = $(e.target);
  //   // $.ajax({
  //   //   type: "POST",
  //   //   url: form.attr("action"),
  //   //   data: form.serialize(),
  //   //   success(formData) {
  //   //     setResult(formData);
  //   //     console.log(formData);
  //   //     // navigate("/list");
  //   //   },
  //   // });

  //   // axios.post('http://localhost/crud/index', data).then(function(response){
  //   //     console.log(response.data);
  //   // });
  //   // console.log(formData);
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // let res = await uploadFile(state.file);
    // console.log(res.data);
    // console.log(state);

    // axios.post('http://localhost/crud/fileupload.php', state).then(function (response) {
    //   // console.log("Data", Finaldata);
    //   console.log("resp", response.data);
    // });
  }

  return (
    <>
      <div id='abstract'>
        <div className={`container ${styles.container}`}>
          <div className='row'>
            <div className='col-sm-8'>
              <h3 className='mb-4'>Abstract Submission</h3>
              <form action="http://localhost/crud/index.php"
                method="post" onSubmit={fileUpload} encType="multipart/form-data">
                <div className="row">
                  <div className="col-sm-4 mb-3">
                    <label htmlFor className="form-label fs-5">Title</label>
                  </div>
                  <div className='col-sm-8'>
                    <select className="form-select" name="tittle" onChange={handleChane} required>
                      <option value="Dr.">Dr.</option>
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs.">Mrs.</option>
                      <option value="Ms.">Ms.</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 mb-3">
                    <label htmlFor className="form-label fs-5">Name </label>
                  </div>
                  <div className='col-sm-8'>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Enter your name" onChange={handleChane} required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 mb-3">
                    <label htmlFor className="form-label fs-5">Email </label>
                  </div>
                  <div className='col-sm-8'>
                    <input type="email" className="form-control" name="email" id placeholder="Enter your email" onChange={handleChane} required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 mb-3">
                    <label htmlFor className="form-label fs-5">Organization </label>
                  </div>
                  <div className='col-sm-8'>
                    <input type="text" className="form-control" name="institution" id placeholder="Organization/Institution" onChange={handleChane} required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 mb-3">
                    <label htmlFor className="form-label fs-5">Telephone </label>
                  </div>
                  <div className='col-sm-8'>
                    <input type="phone" className="form-control" name="phone" id placeholder="Enter your phone number" onChange={handleChane} required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 mb-3">
                    <label htmlFor className="form-label fs-5">City </label>
                  </div>
                  <div className='col-sm-8'>
                    <input type="text" className="form-control" name="city" id placeholder="Enter your city name" onChange={handleChane} required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 mb-3">
                    <label htmlFor className="form-label fs-5">Country </label>
                  </div>
                  <div className='col-sm-8'>
                    <select className="form-select" name="country" data-country="US" onChange={handleChane} required>
                      <option value="Select Any" selected="selected">Select country</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antarctica">Antarctica</option>
                      <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Bouvet Island">Bouvet Island</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                      <option value="Brunei Darussalam">Brunei Darussalam</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Canadian Nunavut Territory">Canadian Nunavut Territory</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">Central African Republic</option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos (Keeling Islands)">Cocos (Keeling Islands)</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote D'Ivoire (Ivory Coast)">Cote D'Ivoire (Ivory Coast)</option>
                      <option value="Croatia (Hrvatska)">Croatia (Hrvatska)</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">Dominican Republic</option>
                      <option value="East Timor">East Timor</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">Equatorial Guinea</option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="France, Metropolitan">France, Metropolitan</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Territories">French Southern Territories</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-Bissau">Guinea-Bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Heard and McDonald Islands">Heard and McDonald Islands</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran">Iran</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea (North)">Korea (North)</option>
                      <option value="Korea (South)">Korea (South)</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Laos">Laos</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libya">Libya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macau">Macau</option>
                      <option value="Macedonia">Macedonia</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta<">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia">Micronesia</option>
                      <option value="Moldova">Moldova</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Netherlands Antilles">Netherlands Antilles</option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Pitcairn">Pitcairn</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russian Federation">Russian Federation</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="S. Georgia and S. Sandwich Isls.">S. Georgia and S. Sandwich Isls.</option>
                      <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovak Republic">Slovak Republic</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="St. Helena">St. Helena</option>
                      <option value="St. Pierre and Miquelon">St. Pierre and Miquelon</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Svalbard and Jan Mayen Islands">Svalbard and Jan Mayen Islands</option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syria">Syria</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="US Minor Outlying Islands">US Minor Outlying Islands</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Vatican City State (Holy See)">Vatican City State (Holy See)</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Viet Nam">Viet Nam</option>
                      <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                      <option value="Wallis and Futuna Islands">Wallis and Futuna Islands</option>
                      <option value="Western Sahara">Western Sahara</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Yugoslavia">Yugoslavia</option>
                      <option value="Zaire">Zaire</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 mb-3">
                    <label htmlFor className="form-label fs-5">Interested In </label>
                  </div>
                  <div className='col-sm-8'>
                    <select className="form-select form-select" name="interest" onChange={handleChane} required>
                      <option value="Poster Presentation"> Poster Presentation </option>
                      <option value="Oral Presentation"> Oral Presentation </option>
                      <option value="Conducting Workshop"> Conducting Workshop </option>
                      <option value="Conducting Symposium"> Conducting Symposium </option>
                      <option value="Others"> Others </option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 mb-3">
                    <label htmlFor className="form-label fs-5">Sessions </label>
                  </div>
                  <div className='col-sm-8'>
                    <select className="form-select" name="session" onChange={handleChane} required>
                      <option selected>Select</option>
                      <option value="Solar Energy">Solar Energy</option>
                      <option value="Hydrogen & Fuel Cells">Hydrogen & Fuel Cells</option>
                      <option value="Biofules, Bioenergy & Bio-gas">Biofules, Bioenergy & Bio-gas</option>
                      <option value="Thermal Energy & Management">Thermal Energy & Management</option>
                      <option value="Wind Power & Energy">Wind Power & Energy</option>
                      <option value="Photovoltaic Cells">Photovoltaic Cells</option>
                      <option value="perovskite Solar Cells">perovskite Solar Cells</option>
                      <option value="Smart Grids">Smart Grids</option>
                      <option value="Energy Efficiency">Energy Efficiency</option>
                      <option value="Petroleum Engineering">Petroleum Engineering</option>
                      <option value="Combustion Engines">Combustion Engines</option>
                      <option value="Natural Gas">Natural Gas</option>
                      <option value="Enhanced Oil Recovery">Enhanced Oil Recovery</option>
                      <option value="Carbon Capture & Storage">Carbon Capture & Storage</option>
                      <option value="Fuel Chemistry, Technology & Processing">Fuel Chemistry, Technology & Processing</option>
                      <option value="Petroleum Geology">Petroleum Geology</option>
                      <option value="Chemical Applications in Producing Oil & Gas">Chemical Applications in Producing Oil & Gas</option>
                      <option value="Drilling & Fracking Operations">Drilling & Fracking Operations</option>
                      <option value="Unconventional Resources">Unconventional Resources</option>
                      <option value="Filtration & Separation">Filtration & Separation</option>
                      <option value="Pipeline Transportation and Storage">Pipeline Transportation and Storage</option>
                      <option value="Nano Energy">Nano Energy</option>
                      <option value="Energy Conversion & Storage">Energy Conversion & Storage</option>
                      <option value="Energy Materials">Energy Materials</option>
                      <option value="Environmental & Pollution Issues">Environmental & Pollution Issues</option>
                      <option value="Waste to Energy">Waste to Energy</option>
                      <option value="Energy Recycling">Energy Recycling</option>
                      <option value="Energy Supply and Economics">Energy Supply and Economics</option>
                      <option value="Energy & Climate Change">Energy & Climate Change</option>
                      <option value="Modeling and Simulation">Modeling and Simulation</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 mb-3">
                    <label htmlFor className="form-label fs-5">Attach File </label>
                  </div>
                  <div className='col-sm-8 mb-2'>
                    <input className="form-control" type="file" name="abstractfile" onChange={fileSelect} />
                    <small id="helpId" className="form-text text-muted" style={{ color: '#F00' }}>Upload less than 8 MB file (Suggested Formats: doc, .docx, .pdf) *</small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 mb-3">
                    <label htmlFor className="form-label fs-5">Sample Abstract File </label>
                  </div>
                  <div className='col-sm-8'>
                    <Link to={"#"}>Abstract Template</Link>
                  </div>
                </div>
                <div className='row mb-5'>
                  <div className='col-sm-2'></div>
                  <div className='col-sm-3'>
                    <button className='btn btn-outline-dark float-end' name="submit" type='submit'>Submit</button>
                  </div>
                  <div className='col-sm-2'>
                    <button className='btn btn-outline-dark' type='reset'>Rest</button>
                  </div>
                </div>
                <h3>{result}</h3>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AbstractSubmission

