
"use client"

type CardProps  =  {
	name? : string;
	des? : string;
	onClick? : ()=> void;
}



export default function Card({name = "default",des="default",onClick}:CardProps){
    return(
	<div onClick={onClick} className=" flex flex-col items-start px-[70px] py-[15px] m-[40px] color bg-black text-cyan-400 shadow-violet-800 shadow-lg  basis-[60%] rounded-lg transition-transform ease-linear lg:basis-[40%] hover:shadow-xl hover:scale-[1.02]">	
		<div className="w-[100%] lg:h-[200px]"></div>
		<div className="text-cyan-400 text-[20px] lg:text-[40px]">{name}</div>
		<div className="text-cyan-400 text-[8px] lg:text-[15px]">{des}</div>
	</div>
    );

};
