type CardProps  =  {
	name? : string;
	des? : string;
}



export default function Card({name = "default",des="default"}:CardProps){
    return(
	<div className=" flex flex-col items-start px-[70px] py-[15px] m-[40px] color bg-gradient-to-r from-cyan-900 to-black text-white shadow-black shadow-2xl basis-[60%] rounded-lg lg:basis-[40%]">	
		<div className="outline-[2px] border-white h-[150px] w-[100%] lg:h-[200px]">image goes here</div>
		<div className="text-white text-[20px] lg:text-[40px]">{name}</div>
		<div className="text-white text-[8px] lg:text-[15px]">{des}</div>
	</div>
    );

};
