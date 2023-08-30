import { Link } from 'react-router-dom';
import './Plays.css';

    const PlaysData = [
        {
          imageLink:
            "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365036-xlzqacdwzv-portrait.jpg",
          title: "Peggy Pane, Oh! What a Pain!!!",
          description: "The Forum - Celebration and Convention: Ahmedabad",
          languages: "English",
          price: "₹ 250 onwards",
        },
        {
          imageLink:
            "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367520-lpzmtjcuky-portrait.jpg",
          title: "Massage (A Hindi Play)",
          description: "Mangalbaug and Bucky Galleries: Ahmedabad",
          languages: "Hindi",
          price: "₹ 500",
        },
        {
          imageLink:
            "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00341995-zuyslwcblz-portrait.jpg",
          title: "Patra Mitro",
          description: "Prayogshala: Ahmedabad",
          languages: "Gujarati",
          price: "₹ 500",
        },
        {
          imageLink:
            "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365159-hxkktvtdqt-portrait.jpg",
          title: "Khane Main Kya Banau!!!",
          description: "The Forum - Celebration and Convention: Ahmedabad",
          languages: "Hindi",
          price: "₹ 250 onwards",
        },
        {
          imageLink:
            "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365036-xlzqacdwzv-portrait.jpg",
          title: "Peggy Pane, Oh! What a Pain!!!",
          description: "The Forum - Celebration and Convention: Ahmedabad",
          languages: "English",
          price: "₹ 250 onwards",
        },
        {
          imageLink:
            "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367520-lpzmtjcuky-portrait.jpg",
          title: "Massage (A Hindi Play)",
          description: "Mangalbaug and Bucky Galleries: Ahmedabad",
          languages: "Hindi",
          price: "₹ 500",
        },
        {
          imageLink:
            "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00341995-zuyslwcblz-portrait.jpg",
          title: "Patra Mitro",
          description: "Prayogshala: Ahmedabad",
          languages: "Gujarati",
          price: "₹ 500",
        },
        {
          imageLink:
            "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365159-hxkktvtdqt-portrait.jpg",
          title: "Khane Main Kya Banau!!!",
          description: "The Forum - Celebration and Convention: Ahmedabad",
          languages: "Hindi",
          price: "₹ 250 onwards",
        },
        {
          imageLink:
            "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365036-xlzqacdwzv-portrait.jpg",
          title: "Peggy Pane, Oh! What a Pain!!!",
          description: "The Forum - Celebration and Convention: Ahmedabad",
          languages: "English",
          price: "₹ 250 onwards",
        },
        {
          imageLink:
            "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367520-lpzmtjcuky-portrait.jpg",
          title: "Massage (A Hindi Play)",
          description: "Mangalbaug and Bucky Galleries: Ahmedabad",
          languages: "Hindi",
          price: "₹ 500",
        },
        {
          imageLink:
            "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00341995-zuyslwcblz-portrait.jpg",
          title: "Patra Mitro",
          description: "Prayogshala: Ahmedabad",
          languages: "Gujarati",
          price: "₹ 500",
        },
        {
          imageLink:
            "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365159-hxkktvtdqt-portrait.jpg",
          title: "Khane Main Kya Banau!!!",
          description: "The Forum - Celebration and Convention: Ahmedabad",
          languages: "Hindi",
          price: "₹ 250 onwards",
        },
      ];
      





function Events(){
    return(
     <div className='bigcontainer'> {/* main container start */}
     <div className='div2nd'>
     </div>
     <div className='div3rd'>
        <h2> Plays In Chennai </h2>
        <li type="none"><a href="#">Theater</a></li>
<li type="none"  style={{marginLeft:"10px",}}> <a href="#">Storytelling</a></li>
<li type="none"  style={{marginLeft:"10px",}}><a href="#">Experimental</a></li>


     </div>

     <div className='div4th'>
    
{     
    PlaysData.map((index)=>{return(
        <div>
            <img style={{height:"300px",borderRadius:"10px"}}  src={index.imageLink} alt="" />
            <h3 style={{width:"200px"}}>{index.title}</h3>
            {/* <h5>{index.description}</h5>
            <p>{index.languages}</p> } */}

           

        </div>
    )})
}
</div>
     </div>



/* main container end */
    )
}
export default Events;