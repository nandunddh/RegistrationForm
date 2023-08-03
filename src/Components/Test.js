
import { useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState();
  const fileSelect = (event) => {
    setState({ selectedFile: event.target.files[0] })
    console.log(event.target.files[0])
  }
  const fileUpload = () => {
    const fd = new FormData();
    fd.append('image', state.selectedFile, state.selectedFile.name);
    axios.post('http://localhost/upload_File.php', fd
    ).then(res => {
      console.log(res);
    }
    );

  }

  return (
    <div className="container">
      <input type="file" onChange={fileSelect} />
      <button onClick={fileUpload}>Upload</button>
    </div>
  );
}

export default App;