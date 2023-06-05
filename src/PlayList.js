import { useState } from 'react';
import songs from './assets/songs';
export default function PlayList({ handleOnScroll, scrollWidth }) {
   //------ khởi tạo lấy ra vị trí px của ban đầu của thẻ- để mặc định là 0
   const [scrollPosition, setScrollPosition] = useState(0);
   //--- hàm sử lý khi kéo ~ lăn chuột sẽ set lại giá trị px hiện tại
   const handleScroll = (e) => {
      const scrollTop = e.target.scrollTop;
      setScrollPosition(scrollTop);
      handleOnScroll(scrollTop); //  lấy hàm từ comp cha để truyền giá trị từ con lên cha
   };
   return (
      <div
         onScroll={(e) => {
            handleScroll(e);
         }}
         className="playlist"
         style={{
            overflow: 'scroll',
            marginTop: `calc(${scrollPosition}px + ${scrollWidth})`, // tính toán ảo ma, không hiểu nhưng đúng
         }}
      >
         {songs.map((song, index) => {
            return (
               <div className="song" key={index}>
                  <div
                     className="thumb"
                     style={{
                        backgroundImage: `url(${song.image})`,
                     }}
                  ></div>
                  <div className="body">
                     <h3 className="title">{song.name}</h3>
                     <p className="author"> {song.singer} </p>
                  </div>
                  <div className="option">
                     <i className="fas fa-ellipsis-h"></i>
                  </div>
               </div>
            );
         })}
      </div>
   );
}
