import React, { useContext, useEffect, useState } from 'react'
import Logo_Stripe from "../../images/logo-stripe.png"
import { Helmet } from "react-helmet"
import "../../App.css"
import { MyContext } from '../../MyContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const { Finaldata, setFinaldata, totalPrice, setTotalPrice, registrationType, setRegistrationType } = useContext(MyContext);//contextAPI
  const code = "12345";
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [reg, setReg] = useState({
    price: "649",
    regCategory: "Academic",
    accommodation: "--",
    accommodation_type: "--",
    Discount: "",
    discount_Text: "",
  });
  const [usename, setUsername] = useState();
  const [participants, setParticipants] = useState("1");
  const [participantName, setParticipantName] = useState("");

  const [registration, setRegistration] = useState(registrationType);
  const [total_price, setTotal_price] = useState(reg.price);
  const [extra_accommodation, setExtra_accommodation] = useState(false);
  const [noOfNights, setNoOfNights] = useState("");
  const [accCheckIn, setAccCheckIn] = useState("9-04-2023");
  const [checkIn, setCheckIn] = useState("9-04-2023");
  const [accCheckOut, setAccCheckOut] = useState("12-04-2023");
  const [checkOut, setCheckOut] = useState("12-04-2023");
  const [extra_night_price, setExtra_night_price] = useState("--");
  const [noOfItems, setnoOfItems] = useState(1);
  const [discount_code, setDiscount_code] = useState("");
  const [discount_field, setDiscount_field] = useState("");




  useEffect(() => {
    handleSetTotal()
    // console.log("registrationType",registrationType)
    // console.log("handlechangeParticipants",participants);
  }, [Finaldata]);

  const handleSetTotal = () => {

    setFinaldata({ ...reg, ...data, discount_field, extra_accommodation, noOfNights, noOfItems, checkIn, checkOut, extra_night_price, total_price, usename });
  }

  //***************  Registration (Price) Values & Type of registration ******************** */
  const regChange = (e) => {
    let updatedValue = {};
    updatedValue = { price: e.target.value, regCategory: e.target.getAttribute("data-value") };
    setReg({ ...reg, ...updatedValue });
    if (reg.accommodation === "--") setTotal_price(e.target.value);
    else setTotal_price(parseInt(reg.accommodation.split("$")[1]) + parseInt(e.target.value));
    if (extra_night_price !== "--") setTotal_price(parseInt(extra_night_price) + parseInt(reg.accommodation.split("$")[1]) + parseInt(e.target.value));
    if (discount_field === code) {
      if (reg.accommodation === "--") {
        updatedValue = { price: e.target.value, regCategory: e.target.getAttribute("data-value"), Discount: "- $" + Math.round((parseInt(e.target.value)) * 0.3) };
        setReg({ ...reg, ...updatedValue });
        setTotal_price(parseInt(e.target.value) - Math.round((parseInt(e.target.value)) * 0.3));
      }
      if (reg.accommodation !== "--" && extra_night_price === "--") {
        updatedValue = { price: e.target.value, regCategory: e.target.getAttribute("data-value"), Discount: "- $" + Math.round((parseInt(e.target.value) + parseInt(reg.accommodation.split("$")[1])) * 0.3) };
        setReg({ ...reg, ...updatedValue });
        setTotal_price((parseInt(e.target.value) + parseInt(reg.accommodation.split("$")[1])) - Math.round((parseInt(e.target.value) + parseInt(reg.accommodation.split("$")[1])) * 0.3));
      }
      if (extra_night_price !== "--") {
        updatedValue = { price: e.target.value, regCategory: e.target.getAttribute("data-value"), Discount: "- $" + Math.round((parseInt(e.target.value) + parseInt(reg.accommodation.split("$")[1]) + parseInt(extra_night_price)) * 0.3) };
        setReg({ ...reg, ...updatedValue });
        setTotal_price(parseInt(e.target.value) + parseInt(reg.accommodation.split("$")[1]) + parseInt(extra_night_price) - Math.round((parseInt(e.target.value) + parseInt(reg.accommodation.split("$")[1]) + parseInt(extra_night_price)) * 0.3));

      }
    }
  }
  //***************  End  ******************** */
  // 
  const handlechangeParticipants = (e) => {
    setParticipants(e.target.value);
    console.log("handlechangeParticipants", e.target.value);
  }
  //  

  //***************  Accommodation (Price) Values and Type of Accommodation  ******************** */
  const handleChangeAccommodation = (e) => {
    let updatedValue = {};
    updatedValue = { accommodation: e.target.value, accommodation_type: e.target.getAttribute("data-value") };
    setReg({ ...reg, ...updatedValue });
    setTotal_price(parseInt((e.target.value).split("$")[1]) + parseInt(reg.price));
    if (extra_night_price !== "--") setTotal_price(parseInt(extra_night_price) + parseInt((e.target.value).split("$")[1]) + parseInt(reg.price));
    if (discount_field === code) {
      if (extra_night_price === "--") {
        updatedValue = { accommodation: e.target.value, accommodation_type: e.target.getAttribute("data-value"), Discount: "- $" + Math.round((parseInt(reg.price) + parseInt((e.target.value).split("$")[1])) * 0.3) };
        setReg({ ...reg, ...updatedValue });
        setTotal_price((parseInt((e.target.value).split("$")[1]) + parseInt(reg.price)) - Math.round((parseInt((e.target.value).split("$")[1]) + parseInt(reg.price)) * 0.3));
      }
      if (extra_night_price !== "--") {
        updatedValue = { accommodation: e.target.value, accommodation_type: e.target.getAttribute("data-value"), Discount: "- $" + Math.round((parseInt(e.target.value.split("$")[1]) + parseInt(reg.price) + parseInt(extra_night_price)) * 0.3) };
        setReg({ ...reg, ...updatedValue });
        setTotal_price(parseInt(e.target.value.split("$")[1]) + parseInt(reg.price) + parseInt(extra_night_price) - Math.round((parseInt(e.target.value.split("$")[1]) + parseInt(reg.price) + parseInt(extra_night_price)) * 0.3));

      }
    }
    {
      noOfItems === 1 && setnoOfItems(noOfItems + 1);
    }
    // return false;
  }
  //***************  End  ******************** */

  //***************  Data || Information ******************** */
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  //***************  End  ******************** */

  //*************** Extra Night Checked or Not ******************** */
  const isChecked = (e) => {
    let updatedValue = {};
    setExtra_accommodation(e.target.checked);
    setnoOfItems(noOfItems + 1);
    {
      e.target.checked === false && noOfItems === 3 &&
        setnoOfItems(noOfItems - 1);
      setCheckIn(accCheckIn);
      setCheckOut(accCheckOut);
      setNoOfNights("");
      setExtra_night_price("--");
      setTotal_price((parseInt(reg.accommodation.split("$")[1]) + parseInt(reg.price)));
      if (reg.Discount !== "") {
        updatedValue = { Discount: "- $" + Math.round((parseInt(reg.accommodation.split("$")[1]) + parseInt(reg.price)) * 0.3) };
        setReg({ ...reg, ...updatedValue });
        setTotal_price((parseInt(reg.accommodation.split("$")[1]) + parseInt(reg.price)) - Math.round((parseInt(reg.accommodation.split("$")[1]) + parseInt(reg.price)) * 0.3));
      }
    }
  }
  //***************  End  ******************** */

  //*************** No Of Extra Night ******************** */
  const handleChangenoOfNights = (e) => {
    let updatedValue = {};
    if (e.target.value === "0") {
      alert("Please select the nights")
      setNoOfNights("");
      setExtra_night_price("--");
      setTotal_price((parseInt(reg.accommodation.split("$")[1]) + parseInt(reg.price)));
      if (reg.Discount !== "") {
        updatedValue = { Discount: "- $" + Math.round((parseInt(reg.accommodation.split("$")[1]) + parseInt(reg.price)) * 0.3) };
        setReg({ ...reg, ...updatedValue });
        setTotal_price((parseInt(reg.accommodation.split("$")[1]) + parseInt(reg.price)) - Math.round((parseInt(reg.accommodation.split("$")[1]) + parseInt(reg.price)) * 0.3));
      }
    }
    else {
      setNoOfNights(e.target.value);
      setExtra_night_price(parseInt(e.target.value) * 150);
      setTotal_price(parseInt((e.target.value) * 150) + parseInt(reg.price) + parseInt(reg.accommodation.split("$")[1]));
      if (discount_field === code) {
        if (reg.Discount !== "") {
          updatedValue = { Discount: "- $" + Math.round((parseInt(reg.accommodation.split("$")[1]) + parseInt(reg.price) + (parseInt(e.target.value) * 150)) * 0.3) };
          setReg({ ...reg, ...updatedValue });
          setNoOfNights(e.target.value);
          setExtra_night_price(parseInt(e.target.value) * 150);
          setTotal_price((parseInt(reg.accommodation.split("$")[1]) + parseInt(reg.price) + (parseInt(e.target.value) * 150)) - Math.round((parseInt(reg.accommodation.split("$")[1]) + parseInt(reg.price) + (parseInt(e.target.value) * 150)) * 0.3));
        }
      }
    }
    {
      noOfItems === 2 &&
        setnoOfItems(noOfItems + 1);
    }
  }
  //***************  End  ******************** */

  //*************** Extra Night CheckIn ******************** */
  const handleChangenoOfChekIn = (e) => {
    setCheckIn(e.target.value);
    if ((e.target.value) === "0") {
      alert("Please select the check In Date.");
      setCheckIn("");
      setCheckOut("");
    }
    if ((e.target.value) === "8-04-2023") {
      setCheckOut("11-04-2023")
    }
    else if ((e.target.value) === "9-04-2023") {
      setCheckOut("12-04-2023")
    }
    else if ((e.target.value) === "10-04-2023") {
      setCheckOut("13-04-2023")
    }
  }
  //***************  End  ******************** */

  //*************** Gettting Discount Code ******************** */
  const handleChangeDiscountcode = (e) => {
    setDiscount_code(e.target.value);
    setDiscount_field(e.target.value);
  }
  //***************  End  ******************** */

  //*************** Applying Discount Code to Total Price ******************** */
  const handleDiscountcode = (e) => {
    e.preventDefault();
    let updatedValue = {};
    if (discount_field === code) {
      updatedValue = { Discount: "- $" + Math.round((parseInt(total_price)) * 0.3), discount_Text: "Discount Applied" };
      setReg({ ...reg, ...updatedValue });
      setTotal_price(Math.round(parseInt(total_price) - (parseInt(total_price)) * 0.3));
      setDiscount_code(" ");
    }
  }
  //***************  End  ******************** */

  const handleChangeusername = (e) => {
    setUsername(e.target.value);
  }

const handleChangeextraparticipants = (e) => {
  setParticipantName(e.target.value);
}

  //*************** Submiting || CHECKOUT ******************** */
  const handleSubmit = (e) => {
    e.preventDefault();
    setTotalPrice(total_price);
    console.log("first===",participantName)
    // axios.post('http://localhost/crud/submit.php', Finaldata).then(function (response) {
    //   console.log("Data", Finaldata);
    //   console.log("resp", response.data);
    //   if (response.data.message === "Record successfully created") {
    //     alert(response.data.message);
    //     navigate("/payment");
    //   }
    //   else {
    //     console.log(response.data);
    //     alert("Error");
    //   }
    // });
    // return false;
  }
  //***************  End  ******************** */

  return (
    <>
      <Helmet>
        <title>Registration Pages</title>
      </Helmet>
      <div className="container-fluid px-0 banner">
        <div className="container px-0 align-bottom">
          <div className="col py-5 ms-3">
            <p className="display-4 fw-bolder text-white pt-5 mt-5">Registration</p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb fs-5">
                <li className="breadcrumb-item" aria-current="page"><a className="text-white" href="/">Home</a></li>
                <li className="breadcrumb-item text-white" aria-current="page">Registration</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row ms-2">
          <div className="wrapper p-0">
            <div className="col-md-9 col-sm-8 main pe-2">
              <form>
                <div className="row pe-0 mb-3">
                  <div className="col">
                    <h3 className="column-title fs-2 ms-5 mt-5 mb-2 fw-bold text-dark">
                      Nursing Science Conference- Registration
                    </h3>
                  </div>
                  <div className="row pe-0">
                    <div className="col" />
                    <div className="col pt-4">
                      <span id="siteseal" className="float-end">
                      </span>
                    </div>
                    <div className="col pt-1">
                      <img src={Logo_Stripe} alt="Stripe" className="float-end" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col" />
                  <div className="form-group">
                    <div className="row align-items-center mb-3">
                      <label className="control-label col-2 text-end pe-3 py-2 fw-bold" htmlFor="name">
                        Name:
                      </label>
                      <div className="col-sm-10 ps-3">
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-user" /></span>
                          <input type="text" className="form-control" id="name" placeholder="Enter your name" name="usename" required aria-label="Username" aria-describedby="basic-addon1" title="Please fill out this field." onChange={handleChangeusername} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row align-items-center mb-3">
                      <label className="control-label col-2 text-end pe-3 py-2 fw-bold" htmlFor="name">
                        Email:
                      </label>
                      <div className="col-sm-10 ps-3">
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-envelope" /></span>
                          <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" required aria-label="Username" aria-describedby="basic-addon1" onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row align-items-center mb-3">
                      <label className="control-label col-2 text-end pe-3 py-2 fw-bold" htmlFor="name">
                        Organization:
                      </label>
                      <div className="col-sm-10 ps-3">
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-briefcase" /></span>
                          <input type="text" className="form-control" id="Organization" placeholder="Organization/Institution" name="organization" required aria-label="Username" aria-describedby="basic-addon1" onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row align-items-center mb-3">
                      <label className="control-label col-2 text-end py-2 pe-3 fw-bold" htmlFor="name">
                        Telephone:
                      </label>
                      <div className="col-sm-10 ps-3">
                        <div className="input-group">
                          <span className="input-group-text pe-3" id="basic-addon1"><i className="fa-solid fa-square-phone" /></span>
                          <input type="tel" className="form-control" id="Telephone" placeholder="Enter your phone number" name="phone" required aria-label="Username" aria-describedby="basic-addon1" onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row align-items-center mb-3">
                      <label className="control-label col-2 text-end py-2 pe-3 fw-bold" htmlFor="name">
                        City:
                      </label>
                      <div className="col-sm-10 ps-3">
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon1">
                            <i className="fa-solid fa-house-chimney" />
                          </span>
                          <input type="text" className="form-control" id="City" placeholder="Enter your city name" name="city" required aria-label="Username" aria-describedby="basic-addon1" onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row g-3 align-items-center mb-3">
                      <label className="control-label col-2 text-end pe-3 py-2 fw-bold" htmlFor="name">
                        Country:
                      </label>
                      <div className="col-sm-10 ps-3">
                        <div className="input-group">
                          <span className="input-group-text pe-3" id="basic-addon1">
                            <i className="fa-sharp fa-solid fa-location-dot" />
                          </span>
                          <select className="form-select" name="country" data-country="US" style={{ width: 'auto' }} aria-label="Default select example" onChange={handleChange}>
                            <option value="Select Any">Select country</option>
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
                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina
                            </option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">British Indian Ocean
                              Territory</option>
                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Canadian Nunavut Territory">Canadian Nunavut
                              Territory</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">Central African Republic
                            </option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos (Keeling Islands)">Cocos (Keeling Islands)
                            </option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote D'Ivoire (Ivory Coast)">Cote D'Ivoire (Ivory
                              Coast)</option>
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
                            <option value="Falkland Islands (Malvinas)">Falkland Islands
                              (Malvinas)</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="France, Metropolitan">France, Metropolitan</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">French Polynesia</option>
                            <option value="French Southern Territories">French Southern
                              Territories</option>
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
                            <option value="Heard and McDonald Islands">Heard and McDonald
                              Islands</option>
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
                            <option value="Malta">Malta</option>
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
                            <option value="Northern Mariana Islands">Northern Mariana Islands
                            </option>
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
                            <option value="S. Georgia and S. Sandwich Isls.">S. Georgia and S.
                              Sandwich Isls.</option>
                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Vincent and The Grenadines">Saint Vincent and
                              The Grenadines</option>
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
                            <option value="St. Pierre and Miquelon">St. Pierre and Miquelon
                            </option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard and Jan Mayen Islands">Svalbard and Jan
                              Mayen Islands</option>
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
                            <option value="Turks and Caicos Islands">Turks and Caicos Islands
                            </option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="US Minor Outlying Islands">US Minor Outlying Islands
                            </option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Vatican City State (Holy See)">Vatican City State
                              (Holy See)</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Viet Nam">Viet Nam</option>
                            <option value="Virgin Islands (British)">Virgin Islands (British)
                            </option>
                            <option value="Wallis and Futuna Islands">Wallis and Futuna Islands
                            </option>
                            <option value="Western Sahara">Western Sahara</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Yugoslavia">Yugoslavia</option>
                            <option value="Zaire">Zaire</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row align-items-center mb-3">
                      <label className="control-label col-2 lb-interested-in text-end pe-3 py-2 fw-bold" htmlFor="name">
                        Interested In:
                      </label>
                      <div className="col-sm-10 ps-3">
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon1">
                            <i className="fa-solid fa-list" />
                          </span>
                          <select className="form-select" name="interest" style={{ width: 'auto' }} aria-label="Default select example" onChange={handleChange}>
                            <option >
                              Select
                            </option>
                            <option value="Poster Presentation">
                              Poster Presentation
                            </option>
                            <option value="Oral Presentation">
                              Oral Presentation
                            </option>
                            <option value="Conducting Workshop">
                              Conducting Workshop
                            </option>
                            <option value="Conducting Symposium">
                              Conducting Symposium
                            </option>
                            <option value="Others">
                              Others
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row mb-3">
                      <label className="control-label col-2 text-end pe-3 py-2 fw-bold" htmlFor="name">
                        Billing Address:
                      </label>
                      <div className="col-sm-10 ps-3">
                        <div className="input-group">
                          <div className="input-group">
                            <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-earth-africa" /></span>
                            <textarea className="form-control pb-5" aria-label="With textarea" required name="address" title="Please fill out this field." onChange={handleChange} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row mb-3">
                      <label className="control-label col-2 text-end pe-3 py-2 fw-bold" htmlFor="name">
                        Participants:
                      </label>
                      <div className="col-sm-3 ps-3">
                        <div className="input-group">
                          <div className="input-group">
                            <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-earth-africa" /></span>
                            <select className="form-select" aria-label="Default select example" name="participants" id="participants_id" onChange={handlechangeParticipants}>
                              <option defaultValue={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={7}>7</option>
                              <option value={8}>8</option>
                              <option value={9}>9</option>
                              <option value={10}>10</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    {Array.from({ length: participants }, (_, i) => (
                      <div className="row mb-3">
                        <label className="control-label col-2 text-end pe-3 py-2 fw-bold" htmlFor="name">
                          Participants {i + 1}:
                        </label>
                        <div className="col-sm-3 ps-3">
                          <div className="input-group">
                            <div className="input-group">
                              <div key={i}>
                                <label className="control-label col-2 text-end pe-3 py-2 fw-bold" htmlFor="name">
                                  Name:
                                </label>
                                {/* <label htmlFor={`input-${i}`}>Input {i + 1}</label> */}
                                <input id={`input-${i}`} type="text" onChange={handleChangeextraparticipants}/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="row ms-3 px-0">
                    <div className="col-xl-12 pe-0">
                      <div className="row me-0 pricing-start">
                        <div className="col-sm-auto py-3 px-1 pricing" id="early-brid">
                          <div className="card" style={{ width: '14rem' }}>
                            <div className="card-body rounded rounded-bottom-0 text-center">
                              <h5 className="card-title" id="card-title">
                                Early Bird
                              </h5>
                              <small className="mt-5">Before March 10,2023</small>
                              <div>
                                <input className="form-check-input p-3" type="checkbox" name="registration" disabled={registration !== "Early Bird"} checked={registration === "Early Bird"} />

                                {/* <input className="form-check-input p-3" type="checkbox" name="registration" checked={registration === 'Early Bird'} /> */}
                              </div>
                            </div>
                            <ul className="list-group list-group-flush border">
                              <div className="form-check my-3 ms-2">
                                <input className="form-check-input pointer" type="radio" name="r1" value={649} id="flexRadioDefault1" checked={reg.price === "649"} onChange={regChange} data-value={'Academic'} />
                                <label className="form-check-label me-0 col-sm-6" id="early-academic" >
                                  Academic
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm ms-4">$649</button>
                              </div>
                              <div className="form-check my-3 ms-2">
                                <input className="form-check-input pointer" type="radio" name="r1" value={749} id="flexRadioDefault2" checked={reg.price === "749"} onChange={regChange} data-value={'Industry'} />
                                <label className="form-check-label col-sm-6" id="early-industry" >
                                  Industry
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm ms-4">$749</button>
                              </div>
                              <div className="form-check my-3 ms-2">
                                <input className="form-check-input pointer" type="radio" name="r1" value={849} id="flexRadioDefault3" checked={reg.price === "849"} onChange={regChange} data-value={'Federal'} />
                                <label className="form-check-label col-sm-6" id="early-federal" >
                                  Federal
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm ms-4">$849</button>
                              </div>
                              <div className="form-check my-3 ms-2">
                                <input className="form-check-input pointer" type="radio" name="r1" value={549} id="flexRadioDefault4" checked={reg.price === "549"} onChange={regChange} data-value={'Delegate'} />
                                <label className="form-check-label col-sm-6" id="early-delegate" >
                                  Delegate
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm ms-4">$549</button>
                              </div>
                              <div className="form-check my-3 ms-2">
                                <input className="form-check-input pointer" type="radio" name="r1" value={449} id="flexRadioDefault5" checked={reg.price === "449"} onChange={regChange} data-value={'Student'} />
                                <label className="form-check-label col-sm-6" id="early-student" >
                                  Student
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm ms-4">$449</button>
                              </div>
                              <div className="form-check my-3 ms-2">
                                <input className="form-check-input pointer" type="radio" name="r1" value={349} id="flexRadioDefault6" checked={reg.price === "349"} onChange={regChange} data-value={'Virtual'} />
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
                              <h5 className="card-title">
                                Mid Term Registrations
                              </h5>
                              <small>After March 10,2023</small>
                              <div>
                                <input className="form-check-input p-3" name="midterm" id="check_midterm checkboxNoLabel" type="checkbox" value disabled />
                              </div>
                            </div>
                            <ul className="list-group list-group-flush" id="price-card">
                              <div className="form-check m-3 ms-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={799} data-value="Academic" disabled />
                                <label className="form-check-label col-sm-6" >
                                  Academic
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm ms-4" disabled>$799</button>
                              </div>
                              <div className="form-check m-3 ms-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={899} data-value="Industry" disabled />
                                <label className="form-check-label col-sm-6" >
                                  Industry
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm ms-4" disabled>$899</button>
                              </div>
                              <div className="form-check m-3 ms-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={999} data-value="Federal" disabled />
                                <label className="form-check-label col-sm-6" >
                                  Federal
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm ms-4" disabled>$999</button>
                              </div>
                              <div className="form-check m-3 ms-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={699} data-value="Delegate" disabled />
                                <label className="form-check-label col-sm-6" >
                                  Delegate
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm ms-4" disabled>$699</button>
                              </div>
                              <div className="form-check m-3 ms-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={859} data-value="Student" disabled />
                                <label className="form-check-label col-sm-6" >
                                  Student
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm ms-4" disabled>$599</button>
                              </div>
                              <div className="form-check m-3 ms-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={399} data-value="Virtual" disabled />
                                <label className="form-check-label col-sm-6" >
                                  Virtual
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm ms-4" disabled>$399</button>
                              </div>
                            </ul>
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
                                <input className="form-check-input p-3" type="checkbox" id="checkboxNoLabel" value name="latereg" disabled />
                              </div>
                            </div>
                            <ul className="list-group list-group-flush" id="price-card">
                              <div className="form-check m-3 ms-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={999} data-value="Academic" disabled />
                                <label className="form-check-label col-sm-6" >
                                  Academic
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-2">$999</button>
                              </div>
                              <div className="form-check m-3 ms-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={1099} data-value="Industry" disabled />
                                <label className="form-check-label col-sm-6" >
                                  Industry
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-2">$1099</button>
                              </div>
                              <div className="form-check m-3 ms-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={1199} data-value="Federal" disabled />
                                <label className="form-check-label col-sm-6" >
                                  Federal
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-2">$1199</button>
                              </div>
                              <div className="form-check m-3 ms-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={899} data-value="Delegate" disabled />
                                <label className="form-check-label col-sm-6" >
                                  Delegate
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-2">$899</button>
                              </div>
                              <div className="form-check m-3 ms-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault not-allowed" id="flexRadioDefault1" value={599} data-value="Student" disabled />
                                <label className="form-check-label col-sm-6" >
                                  Student
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-2">$599</button>
                              </div>
                              <div className="form-check m-3 ms-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={499} data-value="Virtual" disabled />
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
                                <input className="form-check-input p-3 not-allowed" type="checkbox" id="checkboxNoLabel" value name="delegateonspot" disabled />
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
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={1299} data-value="Industry" disabled />
                                <label className="col-sm-6" >
                                  Industry
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-3">$1299</button>
                              </div>
                              <div className="form-check m-3 ms-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={1399} data-value="Federal" disabled />
                                <label className="col-sm-6" >
                                  Federal
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-3">$1399</button>
                              </div>
                              <div className="form-check m-3 ms-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={1099} data-value="Delegate" disabled />
                                <label className="col-sm-6" >
                                  Delegate
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-3">$1099</button>
                              </div>
                              <div className="form-check m-3 ms-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={699} data-value="Student" disabled />
                                <label className="col-sm-6" >
                                  Student
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-3">$699</button>
                              </div>
                              <div className="form-check m-3 ms-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={599} data-value="Virtual" disabled />
                                <label className="col-sm-6" >
                                  Virtual
                                </label>
                                <button type="button" className="btn btn-outline-danger btn-sm not-allowed ms-3">$599</button>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div></div>
                  </div>
                  <div className="row accommodation-start">
                    {/* Accommodation card 1 */}
                    <div className="col-2 accommodation-card my-3 w-auto">
                      <div className="card " id="acc-card">
                        <div className="card-header">
                          <h4 className="fs-5 text-center">Accommodation
                            <br />
                            <small className="accommodation-card-date fs-6 fw-normal">April 9-11,
                              2023 </small>
                          </h4>
                          <p className="text-center fw-normal">(Inclusive of Taxes &amp; Breakfast)
                          </p>
                        </div>
                        <div className="card-body">
                          <div className="form-check accommodation-card-form-check m-4 ps-3">
                            <input className="form-check-input pointer" type="radio" name="r5 flexRadioDefault1" id="flexRadioDefault1-acc1" value={'$450'} data-value="Single Occupancy" checked={reg.accommodation === '$450'} onChange={handleChangeAccommodation} />
                            <label className="form-check-label accommodation-card-text fs-6 fw-bold" id="single-accommodation" >
                              $450 Single Occupancy
                            </label>
                            <span className="input-group-addon p-3 fs-6 fw-normal ms-5">
                              <i className="fa-solid fa-bed" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ENd */}
                    {/* Accommodation card 2 */}
                    <div className="col-2 accommodation-card my-3 w-auto">
                      <div className="card" id="acc-card">
                        <div className="card-header">
                          <h4 className="fs-5 text-center">Accommodation
                            <br />
                            <small className="accommodation-card-date fs-6 fw-normal">April 9-11,
                              2023</small>
                          </h4>
                          <p className="text-center fw-normal">(Inclusive of Taxes &amp; Breakfast)
                          </p>
                        </div>
                        <div className="card-body">
                          <div className="form-check accommodation-card-form-check m-4 me-2 ps-3">
                            <input className="form-check-input pointer" type="radio" name="r5 flexRadioDefault1" id="flexRadioDefault1-acc2" value={'$520'} data-value="Double Occupancy" checked={reg.accommodation === '$520'} onChange={handleChangeAccommodation} />
                            <label className="form-check-label accommodation-card-text fs-6 fw-bold" id="double-accommodation" >
                              $520 Double Occupancy
                            </label>
                            <span className="input-group-addon p-3 me-2 ms-5">
                              <i className="fa-solid fa-bed" />
                            </span>
                            <span className=" input-group-addon p-3 me-1">
                              <i className="fa-solid fa-bed" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ENd */}
                  </div>
                  <div className="col-sm-auto m-0 p-0 w-50 extra-nights-box-start">
                    <div className="extra-nights-box p-2 ms-3 mb-3 me-3">
                      <input type="checkbox" data-bs-toggle="collapse" href="#acd_extrabox" role="button" aria-expanded="false" aria-controls="collapseExample" onChange={isChecked} disabled={reg.accommodation === "--"} />
                      <span style={{ marginLeft: 2 }}>Need Extra Nights Accommodation</span>
                    </div>
                  </div>
                  <div className="accommodation_extrabox" hidden={!extra_accommodation}>
                    <div className="form-group collapse" id="acd_extrabox">
                      <div className="row g-3 align-items-center">
                        <label className="control-label col-sm-2 pt-1 pb-4 fw-bold text-end" htmlFor="name">Extra Nights:</label>
                        <div className="col-auto">
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i className="fa-regular fa-calendar-days" /></span>
                            <select className="form-select" aria-label="Default select example" name="numberofdays" id="numberof_days" onChange={handleChangenoOfNights}>
                              <option value={0}>Select Nights</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={7}>7</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group collapse" id="acd_extrabox">
                      <div className="row g-3 align-items-center">
                        <label className="control-label col-sm-2 pt-1 pb-4 fw-bold text-end" htmlFor="name">Check-in Date:</label>
                        <div className="col-auto">
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i className="fa-regular fa-calendar-days" /></span>
                            <select className="form-select" aria-label="Default select example" name="dateofaccommodation" id="dateof_accommodation" onChange={handleChangenoOfChekIn}>
                              <option value={0}>Select Date</option>
                              <option value="8-04-2023" className="datesecond">8-04-23</option>
                              <option value="9-04-2023">9-04-23</option>
                              <option value="10-04-2023">10-04-23</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group collapse" id="acd_extrabox">
                      <div className="row g-3 align-items-center ">
                        <label className="control-label col-sm-2 pt-1 pb-4 fw-bold text-end" htmlFor="name">Check-out Date :</label>
                        <div className="col-auto">
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i className="fa-regular fa-calendar-days" /></span>
                            <div className="col-sm-10">
                              <input type="text" className="form-control rounded-0 rounded-end" name="checkoutdate" id="checkoutdate" value={checkOut} readOnly />
                              {/* {checkIn == "Select Date" ?
                                <input type="text" className="form-control rounded-0 rounded-end" placeholder name="checkoutdate" data id="checkoutdate" value="Check Out Date" readOnly />
                                :
                                <input type="text" className="form-control rounded-0 rounded-end" placeholder name="checkoutdate" data id="checkoutdate" value={checkOut} readOnly />

                              } */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-sm-3 mt-5 sidebar h-25 pe-0">
              <div className="row">
                <div className="col">
                  <p className="h3 fw-bold pe-0 me-0 cart-main-text">Your cart
                    <span><i className="fa-solid fa-cart-shopping fa-xl mt-1" /></span>
                    <button type="button" className="btn btn-primary position-relative rounded-circle total-cart-amount float-end">
                      {noOfItems}
                    </button>
                  </p>
                </div>
              </div>
              <div className="col-xl-12 add-to-cart-list">
                <ol className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{registration}</div>
                      <div>{reg.regCategory}</div>
                    </div>
                    <p className="fw-lighter mb-0">$<span>{reg.price}</span><br /><span className="text-success text-center">{reg.regDiscount}</span></p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start bg-light add-to-cart-item">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Accommodation</div>
                      <span>{reg.accommodation_type}</span>
                      <br />
                      {reg.accommodation === "--" ?
                        <>
                          <span className="fw-bold">Check-In: </span><span>--</span>
                          <br />
                          <span className="fw-bold">Check-Out: </span><span>--</span>

                        </> :
                        <>

                          <span className="fw-bold">Check-In: </span><span>{checkIn}</span>
                          {/* <span className="fw-bold">Check-In: </span><span id="acc_checkin_date">{checkIn}</span> */}
                          <br />
                          <span className="fw-bold">Check-Out: </span><span>{checkOut}</span>
                          {/* <span className="fw-bold">Check-Out: </span><span id="acc_checkout_date">--</span> */}
                        </>}
                    </div>
                    <div className="ms-2">
                      <div className="fw-normal mb-0">{reg.accommodation}</div>
                      <span className="text-success">{reg.accDiscount}</span>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold"> Extra Nights : <span id="extra_night_no_of_days" className="fw-bolder">{noOfNights}</span></div>
                    </div>
                    <p className="fw-lighter mb-0">{extra_night_price}</p>
                  </li>
                  <li className="list-group-item d-flex text-success bg-light add-to-cart-promo">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{reg.discount_Text}</div>
                      <p className="fw-light mb-0"><span>{discount_field}</span></p>
                    </div>
                    <p className="fw-bold mb-0"><span>{reg.Discount}</span></p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center add-to-cart-total">
                    <div className="ms-2 me-auto fw-bolder fs-5 cart-text">Total (USD)</div>
                    <p className="fw-bolder pt-3 fs-5 cart-text"><span className="me-2"><i className="fa-solid fa-equals" /></span>$<span>{total_price}</span></p>
                  </li>
                  <li className="list-group-item d-flex">
                    <div className="col-sm-12 rounded total-cart-amount">
                      <button className="btn fw-bolder border-0 fs-3 text-white checkout-btn" type="submit" onClick={(e) => handleSubmit(e)}>Check Out
                        <span className="text-end ps-3 text-white mx-3"><i className="fa-solid fa-truck-fast fa-xl" /></span>
                      </button>
                    </div>
                  </li>
                </ol>
              </div>
              <form onSubmit={handleDiscountcode}>

                <div className="col-xl-12 mt-3 ps-2 add-to-cart-list">
                  <div className="row pe-0 me-0">
                    <div className="col-sm-8 bg-light p-2 pe-0 ms-2 me-0 promo-input">
                      <input type="text" className="form-control border border-end-0 rounded-end-0" name="discount_code" placeholder="Enter Discount Code"
                        disabled={discount_code === " "} value={discount_code} onChange={handleChangeDiscountcode} />
                    </div>
                    <div className="col mt-2 px-0 ms-0 me-0 btn-promo">
                      <button type="submit" disabled={discount_code === " "} className="btn btn-secondary border-start-0 rounded-start-0 promo-btn" id="promo-btn">Apply</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>


  )
}

export default Register
