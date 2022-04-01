import './App.css';
import QRcode from 'qrcode';
import React, { useState } from 'react';

function App() {

  const [text, setText] = useState();
  const [Qrcode, setQRCode] = useState();

  const createQR = (event) => {
    setText(event.target.value);
  };

  const getQR = async () => {
    const response = await QRcode.toDataURL(text);
    setQRCode(response);
  };

  return (
    <>
      <div className='container'>
        <div className='sec1'>
          <label >Enter  Your Text </label>
          <input type='text' onChange={createQR} />
          <button className='btn' onClick={getQR}> Generate QR</button>
        </div>
        {Qrcode ? <div className='sec2'>
            {Qrcode ? <img src={Qrcode} /> : null}
            {Qrcode ? <a href={Qrcode} download='QRCode_download'><i class="fa fa-download"></i> Download</a> : null}
          </div> : null}
      </div>
    </>
  );
}

export default App;
