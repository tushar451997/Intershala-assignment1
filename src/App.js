import "./App.css";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import csvdata from "./Components/SampleCSVFile_10600kb.csv";
import Pagination from "./Components/Pagination";
function App() {
 
const[data,setData]=useState([])
const[currentpage,setCurrentPage]=useState(1);

    const postperpage=1620 
  useEffect(()=>{

	fetchData();

  },[]);

 

  const lastPostIndex = currentpage *postperpage;
  const firstPostIndex = lastPostIndex - postperpage;
  const currentPosts=data.slice(firstPostIndex,lastPostIndex);

  let tabledata =currentPosts.map((elem,index)=>{
	

	let tabledata=elem.map((elem1,index1)=>{
            return(
				<td key={index1}>{elem1}</td>
			  )
	})
	return(
		<tr key={index}>{tabledata}</tr>
	)
 
	


  })
//   console.log(data.length)
const fetchData =async()=>{
	Papa.parse(csvdata,{
		download:true,
		delimiter:",",
		complete:((result)=>{
			setData(result.data)
		})
	})


}
  return (
    <div>
		
     <Pagination 
	   totalPosts={data.length}
	   postperpage={postperpage}
	   setCurrentPage={setCurrentPage}
	   currentpage={currentpage}
	  />
      {/* Table */}
      <table border={"1px solid black"} >
        <tbody>
		<tr>
			<th>A</th>
			<th>B</th>
			<th>C</th>
			<th>D</th>
			<th>E</th>
			<th>F</th>
			<th>G</th>
			<th>H</th>
			<th>I</th>
		 </tr>
		 
			
			{tabledata}
		</tbody>
			
		 
      </table>

   


	  
    </div>
		
	
  );
}

export default App;