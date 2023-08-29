
 const images=[
    {
        img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzMjEuM0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-nwatwgbhjc-portrait.jpg",
        name:"jailer",
        para:"Action/Drama/Thriller",
    },
    {
        img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny8xMCAgOS4zSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351659-qfgbsaxudm-portrait.jpg",
        name:"King of Kotha",
        para:"Action/Drama/Crime"
    },
    {
        img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-Mi4zSyBMaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00367715-zkabheuumv-portrait.jpg",
        name:"Adiyae",
        para:"Comedy/Romantic/Sci-fi",
    },
    {
        img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTQwSyBMaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340111-tumdlxmhgw-portrait.jpg",
        name:"Dream Girl 2",
        para:"Comedy/Romantic/Sci-fi",
    },
    {
        img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MS4zSyBMaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00367773-phvpjyzgwz-portrait.jpg",
        name:"Partner (2023)",
        para:"Comedy/Romantic/Sci-fi",
    },
]
function Latestmovies(){
    return(
       
       
        <div style={{display:"flex",justifyContent:"space-evenly", marginTop:"50px",marginLeft:"100px",marginRight:"100px"}}>
        {
            images.map((setindex)=>{return(
               
                <div>
                    <img style={{height:"400px",borderRadius:"10px"}} src={setindex.img} alt="" />
                
                    <h3>{setindex.name}</h3>
                    <p>{setindex.para}</p>
                </div>
                
            )
            }
            )
        }
            </div>
           
        
    )
}
export default Latestmovies;