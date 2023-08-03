import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
const Fileupload = () => {
  const [state, setState] = useState({
    id_proof: '',
  });
  useEffect(() => {
    addFormData = addFormData.bind(this);

  }, []);

  let addFormData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id_proof', state.id_proof)
    var headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    }

    axios.post('http://localhost/crud/fileupload.php', formData, headers)
      .then(function (response) {
        //handle success
        console.log(response.data)
        console.log("success")
      })
      .catch(function (response) {
        //handle error
        console.log(response)
        console.log("sorry")
      });
  }

    return (
      <div className="container">

        <header className="signup-header">
          <h1 className="h1">Create Account</h1>
        </header>

        <div className="container" >
          <form className="form-wrappers">
            <table>
              <tbody>
                <tr>
                  <td><label className="text">ID Proof :</label></td>
                  <td>(Voter ID/Adhaar Card/PAN Card)<input type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" name="id_proof" required value={state.id_proof}
                    onChange={e => setState({ id_proof: e.target.value })} /></td>
                </tr>
              </tbody>
            </table>
            <button className="button" onClick={e => addFormData(e)}>Save & continue</button>
          </form>

        </div>

      </div>

    );
  }

  export default Fileupload