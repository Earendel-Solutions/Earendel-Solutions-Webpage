import Card from "./_components/card"
export default function Projects() {
  return (

    <div className="w-[100%]   bg-black pt-[100px]">
      <div className="flex w-[100%]  flex items-center justify-center flex-wrap">
        <Card name = "Full Stack" des = "Check out our full stack projects"/>
	<Card name = "Android" des = " check out our android projects"/>
	<Card/>
	<Card/>
      </div>
    </div>
  );
}
