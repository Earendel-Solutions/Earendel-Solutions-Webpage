import { forwardRef } from "react"


type Data = {
	name:string;
	des:string;
}
type props = {
	id:number
}


const data:Data[] = [
	{name:"School software",des:"this software allows schools to manage theri data"},
	{name:"Dood wala",des:"this allows users to order milk from local vendors"}
]



export default function BigCard({id}:props){
	return(
	<div  className = "flex flex-wrap justify-evenly w-[70%] h-[500px] mx-auto p-[30px] rounded-xl text-white  bg-black shadow-2xl drop-shadow-lg shadow-violet-700 ring ]">
		<div className="text-white outline-[2px] border-white w-[400px] h-[200px] basis-[40%]">image</div>
		<div className="text-white text-center w-[400px] h-[200px] basis-[40%]">{data[id].name}</div>
		<div className="text-white  w-[400px] h-[200px] basis-[40%]">{data[id].des}</div>
		<div className="text-white outline-[2px] border-white w-[400px] h-[200px] basis-[40%]">image</div>



	</div>
	);
}

