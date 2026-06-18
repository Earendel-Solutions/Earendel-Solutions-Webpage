type PageSection = {
    title: string;
    content: string | Array<string>;
    type: "paragraph" | "list";
};

export default function AboutUs ():React.JSX.Element {
    const sections: PageSection[] = [
        {
            title:"About Earendel",
            content: "We are a software development company specializing in "+
                "custom web applications, mobile applications, SaaS platforms,"+
                " e-commerce solutions, and enterprise software development. "+
                "Our team helps startups, businesses, and organizations "+
                "transform ideas into scalable digital products using modern "+
                "technologies and industry best practices.",
            type: "paragraph",
        },

        {
            title: "Who We Are",
            content: "At Earendel, we build reliable, scalable, and user-focused "+
                "software solutions that solve real business challenges.\n"+

                "Founded with a passion for technology and innovation, our "+
                "team combines expertise in frontend development, backend "+
                "engineering, cloud infrastructure, UI/UX design, and product "+
                "strategy to deliver high-quality digital experiences.\n"+

                "Whether it's a startup launching its first product or an "+
                "enterprise modernizing legacy systems, we help businesses "+
                "achieve their goals through technology.",
            type: "paragraph",
        },


        {
            title: "What We Do",
            content: [
                "Custom Software Development",
                "Website Design and Development",
                "Web Application Development",
                "Mobile App Development",
                "SaaS Product Development",
                "E-commerce Solutions",
                "API Development and Integration",
                "Cloud Infrastructure and DevOps",
                "UI/UX Design",
                "Software Maintenance and Support",
            ],
            type: "list",
        },


        {
            title: "Our Mission",
            content: "Our mission is to empower businesses with innovative software "+
                "solutions that improve efficiency, enhance customer experiences,"+
                " and drive sustainable growth.\n"+ 

                "We believe technology should not only solve problems but also"+
                " create opportunities for future success.",
            type: "paragraph",
        },


        {
            title: "Why Choose Us",
            content: [
                "High-Quality Code Standards",
                "Scalable Software Architecture",
                "Responsive Design",
                "Search Engine Optimization (SEO)",
                "Security Best Practices",
                "Performance Optimization",
                "Transparent Development Process",
                "Long-Term Technical Support",
            ],
            type: "list",
        },

    ];

    return (
    <main className="w-full min-h-screen bg-[#090514] text-white px-4 sm:px-8 md:px-16 lg:px-24 py-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-10 md:gap-14">
            {sections.map((section, idx) =>
                section.type === "paragraph" ? (
                    <RenderParagraph key={idx} section={section} />
                ) : (
                    <RenderListItems key={idx} section={section} />
                )
            )}
        </div>
    </main>
);
}


function RenderListItems({ section }: { section: PageSection }): React.JSX.Element {
    return (
        <section className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#090514] text-white">
            <div className="max-w-5xl mx-auto bg-[#120a24]/60 border border-purple-500/20 rounded-2xl p-6 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)] hover:border-purple-400/30">

                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">
                    {section.title}
                </h2>

                <ul className="grid gap-3">
                    {(section.content as string[]).map((item, idx) => {
                        return (
                            <li
                                key={idx}
                                className="flex items-start gap-3 text-purple-200/80 text-sm md:text-base leading-relaxed"
                            >
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.8)] shrink-0" />
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

function RenderParagraph({ section }: { section: PageSection }): React.JSX.Element {
    return (
        <section className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#090514] text-white">
            <div className="max-w-5xl mx-auto bg-[#120a24]/60 border border-purple-500/20 rounded-2xl p-6 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)] hover:border-purple-400/30">

                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">
                    {section.title}
                </h2>

                <p className="text-purple-200/80 text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {section.content as string}
                </p>

            </div>
        </section>
    );
}
