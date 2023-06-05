import './styles.scss';
import { useState, useEffect, useRef } from 'react';
import PlayList from './PlayList';
export default function PlayBox() {
   //---------- sử lý nút play-pause btn
   const [buttonPlay, setButtonPlay] = useState(true);
   const handleClickBtn = () => {
      setButtonPlay(!buttonPlay);
   };

   //-------- sử lý thu phóng cho thẻ cd
   const [scrollPositions, setScrollPositions] = useState(0);
   //---- truyền xuống children để lấy giá trị tính toán
   const handleScrollPositions = (position) => {
      setScrollPositions(position);
   };
   //----------------------------
   return (
      <div style={{ overflow: 'hidden' }} className="player">
         {/* <!-- Dashboard --> */}
         <div className="dashboard">
            {/* <!-- Header --> */}
            <header>
               <h4>Now playing:</h4>
               <h2>String 57th & 9th</h2>
            </header>

            {/* <!-- CD --> */}
            <div
               className="cd"
               //  tính toán tăng giảm chiều dọc của thẻ cd
               // tuy nhiên khung không dính liền nhau do còn thuộc tính padding của class playlist
               // xử lý bằng cách truyền hàm calc tính toán này xuống chilren qua Props
               style={{
                  width: `calc(200px - ${scrollPositions}px)`,
               }}
            >
               <div
                  className="cd-thumb"
                  style={{
                     backgroundImage:
                        "url('https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg')",
                  }}
               ></div>
            </div>

            {/* <!-- Control --> */}
            <div className="control">
               <div className="btn btn-repeat">
                  <i className="fas fa-redo"></i>
               </div>
               <div className="btn btn-prev">
                  <i className="fas fa-step-backward"></i>
               </div>
               {/* <div className="btn btn-toggle-play">
              <i className="fas fa-pause icon-pause"></i>
              <i className="fas fa-play icon-play"></i>
            </div>  */}
               <div
                  onClick={() => {
                     handleClickBtn();
                  }}
                  className={`btn btn-toggle-play ${
                     buttonPlay
                        ? 'fas fa-pause icon-pause'
                        : 'fas fa-play icon-play'
                  }`}
               ></div>
               <div className="btn btn-next">
                  <i className="fas fa-step-forward"></i>
               </div>
               <div className="btn btn-random">
                  <i className="fas fa-random"></i>
               </div>
            </div>

            <input
               id="progress"
               className="progress"
               type="range"
               // value="0"
               step="1"
               min="0"
               max="100"
            />

            <audio id="audio" src=""></audio>
         </div>
         <PlayList
            //pros truyền xuống cho children để lấy giá trị và tính toán căn chỉnh width cd và padding playlist
            handleOnScroll={handleScrollPositions}
            scrollWidth={`calc(200px - ${scrollPositions}px)`}
         />
         {/* <!-- Playlist --> */}
      </div>
   );
}
