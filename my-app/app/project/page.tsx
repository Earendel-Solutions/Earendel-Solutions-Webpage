"use client"

import {useRef,useState} from "react"
import Card from "./_components/card"
import BigCard from "./_components/BigCard"
export default function Projects() {
  
  const [selectedId,setSelectedId] = useState<number>(0);
  const divRef = useRef<HTMLDivElement>(null)
  const bigCardRef = useRef<HTMLDivElement>(null)
  const showCard = (id:number,event:React.MouseEvent<HTMLDivElement>):void =>{
     event.stopPropagation()
     if(divRef.current){
     divRef.current.className = "origin-center transition-transform ease-linear duration-500 scale-[1] fixed top-[100px] left-[100px] z-[100]"
     }

     setSelectedId(id)
  }
  const hideCard = ():void =>{
  	if(divRef.current){

	divRef.current.className = "scale-[0] fixed top-[1oopx] left-[100px] z-[100]"
	}

	console.log("clcked")
  }
  return (

    <div className="w-[100%]   bg-black pt-[100px]">

    	<div className = "flex justify-center" >

 		
		<p className="text-[50px] lg:text-[100px] font-bold bg-gradient-to-r from-cyan-600 to-violet-900 inline-block text-transparent bg-clip-text">Checkout our work</p>
	</div>
	<div ref={divRef} className ="fixed top-[100px] left-[100px] z-[100] scale-[0]" id="big card">
	<BigCard id={selectedId} />
	
	</div>
      	<div className="flex w-[100%]  flex items-center justify-center flex-wrap" onClick={hideCard}>
		<Card name = "School management" des = "The software allows schools to manage all data on the web also offline" id="school-software" onClick = {(e)=>showCard(0,e)}/>
		<Card name = "Dood wala" des = "This provides users the ability to order milk from local vendors" id="dood-wala" onClick= {(e)=>showCard(1,e)}/>
		<Card/>
		<Card/>
      	</div>
    </div>
  );
}
