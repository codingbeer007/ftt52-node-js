import React from 'react';
import './Index.css';

 //import { useEffect } from 'react';Ahout jquery
//import $ from 'jquery'; Ahout jquery

import { useNavigate } from 'react-router-dom';

function Index() {

  /*useEffect(() => {
    $("#but_whale").on("click", () => {
      document.location = "/home";
    });
    return () => {
      $("#but_whale").off("click");
    };
  }, []); Ahout query  คำสั่งติดตั้ง  npm install jquery  */ 


  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home'); // ไปหน้า /home
  };

  return (
      <div style={{
        backgroundColor: rgb(239, 144, 201),
        fontFamily: "Mali", cursive
      }}>
        
        <div className="container mt-5">
          <fieldset className="mb-3">
            <div className="row">
              <div className="col-12">
                <center>
                  <img src="file/image/Find_peace_too.png" className="rounded fpt" style={{ width: '80%' }} alt="" />
                </center>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <center>
                  <input type="image" name="but_whale" id="but_whale" src="file/image/Whale.gif" onClick={handleClick} 
                  style={{ width: '70%' }} />
                </center>
              </div>
            </div>
          </fieldset>

          <fieldset className="mb-3">
            <div className="row">
              <div className="col-12">
                <div className="text01">
                  ยินดีต้อนรับสู่ท้องทะเลอันแสนกว้างใหญ่ที่จะมีเราอยู่เคียงข้างคุณในทุกๆ วัน
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset className="mb-3">
            <div className="row">
              <div className="col-12">
                <div className="text01">Regina Coeli College</div>
              </div>
            </div>
          </fieldset>
        </div>    

      </div>

  );
}
export default Index;
