'use client'
import React, { useEffect, useRef } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import ScrollCarousel from 'scroll-carousel';
import Image from 'next/image';

interface ProjectCardProps {
    projectImage: string;
    projectTitle: string;
    projectCategory: string;
    projectRole: string;
    projectDuration: string;
    projectSummary: string;
    projectTechStack: TechStack[];
}

interface TechStack {
    techStack: string;
    logo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectImage, projectTitle, projectCategory, projectRole, projectDuration, projectSummary, projectTechStack }) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carouselRef.current != null) {
            new ScrollCarousel(carouselRef.current, { autoplay: true });
        }
    }, []);

    return (
        <div className="flex flex-row p-5 mx-5 w-screen text-white text-center divide-x items-center">
            <div className="w-3/12 px-10 ms-10">
                <div className="bg-dark-gray rounded-lg shadow-lg p-5 flex flex-col items-center">
                    <Image src={projectImage} alt="Project Image" width={300} height={400} />
                    <h1 className="text-xl font-black pt-5">{projectTitle}</h1>
                    <h3 className="text-lg font-bold">{projectCategory}</h3>
				<h5 className="text-base font-semibold">{projectRole}</h5>
				<p className="text-sm pb-5">{projectDuration}</p>
                </div>
            </div>

            <div className="w-8/12 px-10">
                <div className="flex flex-col ps-5 text-justify">
                    <h1 className="uppercase font-bold text-xl">Summary</h1>
                    {projectSummary}
                    <div className="flex flex-row my-3 text-base">
                        <div className="flex items-center me-5">
                            <h1 className="text-pink">Source Code</h1>
                            <IoIosArrowForward className="ml-1"/>
                        </div>
                        <div className="flex items-center ms-5">
                            <h1 className="text-pink">Production</h1>
                            <IoIosArrowForward className="ml-1"/>
                        </div>
                    </div>
                    <h1 className="uppercase font-bold text-xl ms-auto">Tech Stack</h1>
                    <div ref={carouselRef} style={{ overflow: 'hidden' }}>
					{projectTechStack.map((tech, index) => ( 
							<div key={index} className="item">
								<Image src={tech.logo} alt={tech.techStack} width={250} height={250}/>
								<p className="text-center text-base text-pink">{tech.techStack}</p>
							</div>
					))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
