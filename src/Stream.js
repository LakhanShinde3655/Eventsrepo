import React, { useState, useEffect } from "react";
import "./Stream.css";
const picture = [
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/one-fine-morning-et00366591-1691584526.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-flash-et00047401-1689833276.jpg",
  "https://palacenova.com.au/media/Festivals/French2023/ONEFINEMORNING_landscape_web.jpg",
  "https://images7.alphacoders.com/130/1302009.jpg",
  "https://wallpaperaccess.com/full/9140013.jpg",
  "https://wallpapercave.com/dwp1x/wp11971175.jpg",
  "https://www.screennearyou.com/wp-content/uploads/2023/08/Snoopy-Presents-One-of-a-Kind-Marcie-11.webp",
];
const picture2 = [
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/drive-my-car-et00367165-1692183834.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/fast-x-et00122562-1687423131.jpg",
  "https://www.gamespot.com/a/uploads/scale_super/1561/15611758/3252639-transformers-age-of-extinction_95e719.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/one-fine-morning-et00366591-1691584526.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/somewhere-in-queens-et00366830-1691657748.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-silent-forest-et00366720-1691572411.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-silent-forest-et00366720-1691572411.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/pui-pui-molcar-s1-et00359297-1683786564.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/sun-moon-et00367166-1692601839.jpg",
];
// var n = picture.length;
// function Stream() {
// function Stream() {
//       clearInterval(interval);
//     };
//   } 
// //   [firstcontainerimg]);
// //   picture.map((item) => {});
// //   return (
//     <div>
//       {/* {picture.map((item) => (
//         <img key={item} src={item} />
//       ))} */}
//       <div id="imagecontainer">
//         <button id="btn1" onClick={change}>
//           previous
//           <i class="fa-solid fa-arrow-left"></i>
//         </button>
//         <img id="imga" src={picture[firstcontainerimg]} alt="" />
//         <button id="btn2" onClick={change}>
//           next
//           <i class="fa-solid fa-arrow-right"></i>
//         </button>
//       </div>
//       <h1>To be continued ........</h1>
//       <div id="container2">
//         <div id="imagecontainer2">
//           Premer of the week
//           <div id="imagevaluecontainer">
//             {picture2.map((item, index) => (
//               <img id="imga2" key={index} src={item} alt="" />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
// //   );
// // }