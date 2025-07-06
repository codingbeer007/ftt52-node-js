import React from 'react';
import './Home.css';

import { useEffect } from 'react';
import $ from 'jquery'; 

function Home() {

  useEffect(() => {

    $("#but_whale").on("click",function(){
        const text_but_img=$(this).attr('id');
            if(text_but_img==="but_whale"){
                document.location="menu.html";
            }else{}
    });
    return function() {
        $("#but_whale").off("click");
    }

  },[]);

  useEffect(() => {

    $('.dolphin').hover(function(){
        // เมื่อเอาเมาส์ชี้ โลมาดำน้ำลง
        $(this).css({
            'animation-play-state': 'paused'
        }).animate({
            top: '70%'
        }, 1000);
    }, function(){
        // เมื่อเอาเมาส์ออก โลมาลอยกลับขึ้น และว่ายต่อ
        $(this).animate({
            top: '40%'
        }, 1000, function(){
            $(this).css({
                'animation-play-state': 'running'
            });
        });
    });

  },[]);

    return (
        <div style={{ // ใช้ className ไม่ใช่ className แทน body
            margin: 0,
            padding: 0,
            overflow: "hidden",
            backgroundImage: "url('/file/image/IMG_7218.PNG')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            height: "100vh"
        }}>

            <fieldset className="mb-5">
                <div className="row">
                    <div className="col-12">
                        <div className="text"><center>พร้อมรึยัง ?</center></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="text"><center>เราจะพาไปบ้านของเรา</center></div>
                    </div>
                </div>
            </fieldset>

            <div className="sea">
                <input
                    type="image"
                    name="but_whale"
                    id="but_whale"
                    className="dolphin"
                    src="/file/image/Whale.gif"
                    style={{ width: '54%' }}
                />
            </div>

        </div>
    );
}

export default Home;
