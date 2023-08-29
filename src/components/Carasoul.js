const cara =[
    {
        img: "https://assets-in.bmscdn.com/promotions/cms/creatives/1692875161616_rakhshbandhadesktop.jpg",
    // },
    // {
    //     img: "https://assets-in.bmscdn.com/promotions/cms/creatives/1690965948939_virdasreviseddesktop.jpg",
    // },
    // {
    //     img: "https://assets-in.bmscdn.com/promotions/cms/creatives/1690628905918_webbannernpa.jpg"
    },

]
function Carasoul(){
    return(
        <div style={{marginTop:"10px"}}>
            {
                cara.map((carasoul) => {return(
                    <div>
                        <img  style={{width:"1285px"}}  src={carasoul.img} alt="" />
                    </div>
                )})
            }
        </div>
    )
}
export default Carasoul;