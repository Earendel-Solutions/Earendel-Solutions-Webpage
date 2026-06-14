import Card from "./_components/card"
export default function Projects() {
  return (

    <div className="w-[100%]   bg-black pt-[100px]">
    	<div className = "flex justify-center">
		<p className="text-[50px] lg:text-[100px] bg-gradient-to-r from-cyan-400 to-violet-900 inline-block text-transparent bg-clip-text">Checkout our work</p>
	</div>
      	<div className="flex w-[100%]  flex items-center justify-center flex-wrap">
		<Card name = "Full Stack" des = "Check out our full stack projects"/>
		<Card name = "Android" des = " Check out our android projects"/>
		<Card/>
		<Card/>
      	</div>
    </div>
  );
}
