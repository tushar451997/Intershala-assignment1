import "../App.css"
const Pagination = ({totalPosts,postperpage,setCurrentPage,currentpage})=>{
  let pages=[];
  for(let i=1;i<=Math.ceil(totalPosts/postperpage);i++){
    pages.push(i)
  }
    return(
 <div>
    <p>Select Page Number</p>
    <div className={"pagination"}>
    {
      pages.map((page,index)=>{
        return(
          <button onClick={()=>setCurrentPage(page)} key={index} className={page===currentpage?"active":""}>{page}</button>
        )
      })
    }
  </div>
  </div>
    )
}
export default Pagination;