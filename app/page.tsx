import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import EducationCard from "@/components/EducationCard";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {

    const educationData = [
        {
            schoolLogo: "/schoolLogos/FCPC.png",
            schoolName: "First City Providential College",
            schoolLocation: "SJDM, Bulacan",
            schoolBatch: 2018,
            schoolExperienceList: ["Completed Junior High School", "With high honors", "Experience in extra-curricular activities and competitions"]
        },
        {
            schoolLogo: "/schoolLogos/FEU-Diliman.png",
            schoolName: "FEU Diliman",
            schoolLocation: "Diliman, Quezon City",
            schoolBatch: 2020,
            schoolExperienceList: ["Graduated in STEM strand with IT specialization", "President’s Scholar" ,"With honors"]
        },
        {
            schoolLogo: "/schoolLogos/FEU-Tech.png",
            schoolName: "FEU Institute of Technology",
            schoolLocation: "Sampaloc, Manila",
            schoolBatch: 2024,
            schoolExperienceList: ["Graduated BS Computer Science major in Software Engineering", "Active officership in school organizations"]
        }
    ];

    const projectData = [
        {
            projectImage: "/projects/ALGPT/logo.png",
            projectTitle: "ALGPT",
            projectCategory: "Thesis Project",
            projectRole: "Project Manager and Developer",
            projectDuration: "Sept 2022 - Sept 2023",
            projectSummary: "ALGPT is a mobile application designed to leverage OpenAI's GPT models to provide assistance for students struggling in learning Algebra. It allows students to input a math word problem. Then, the AI model will provide step-by-step solution steps that will assist students in answering the question.",
            projectTechStack: [
                {
                    techStack: "Android Studio",
                    logo: "/projects/ALGPT/techStack/androidStudio.webp"
                },
                {
                    techStack: "Java SE",
                    logo: "/projects/ALGPT/techStack/java.png"
                },
                {
                    techStack: "Firebase",
                    logo: "/projects/ALGPT/techStack/firebase.png"
                },
                {
                    techStack: "OpenAI GPT-3 Model",
                    logo: "/projects/ALGPT/techStack/openai.png"
                },
                {
                    techStack: "GitHub",
                    logo: "/projects/ALGPT/techStack/github.png"
                },
                {
                    techStack: "Figma",
                    logo: "/projects/ALGPT/techStack/figma.png"
                }
            ]
        },
        {
            projectImage: "/projects/CSExpo/logo.png",
            projectTitle: "CS Expo 2.0",
            projectCategory: "Website",
            projectRole: "Lead Front-End Developer",
            projectDuration: "Sept 2023 - Nov 2023",
            projectSummary: "The CS Expo is an annual event for 4th year Computer Science students in FEU Tech whose thesis projects successfully passed the critique of internal and external panels. The website aims to showcase these projects as a way to both congratulate the students and remember their contributions to the field of study they chose.",
            projectTechStack: [
                {
                    techStack: "CSS",
                    logo: "/projects/CSExpo/techStack/css.png"
                },
                {
                    techStack: "Figma",
                    logo: "/projects/CSExpo/techStack/figma.png"
                },
                {
                    techStack: "HTML",
                    logo: "/projects/CSExpo/techStack/html.png"
                },
                {
                    techStack: "Next JS",
                    logo: "/projects/CSExpo/techStack/nextjs.png"
                },
                {
                    techStack: "Node JS",
                    logo: "/projects/CSExpo/techStack/nodejs.png"
                },
                {
                    techStack: "React",
                    logo: "/projects/CSExpo/techStack/react.png"
                },
                {
                    techStack: "Tailwind",
                    logo: "/projects/CSExpo/techStack/tailwind.png"
                },
                {
                    techStack: "TypeScript",
                    logo: "/projects/CSExpo/techStack/typescript.png"
                },
                {
                    techStack: "Visual Studio Code",
                    logo: "/projects/CSExpo/techStack/visualStudioCode.png"
                }
            ]
        },
        {
            projectImage: "/projects/Dash/logo.png",
            projectTitle: "Dash Coffee",
            projectCategory: "Mobile Ordering System",
            projectRole: "Freelance Full-Stack Developer",
            projectDuration: "Nov 2023 - Jan 2024",
            projectSummary: "This coffee shop franchise in Pilar, Las Piñas needed a mobile ordering system that can capture orders that were made by the customers through their in-store gadget. It allows the customers to have full control and cutomization of their drinks so that the store's employees could focus on delivering the goods faster.",
            projectTechStack: [
                {
                    techStack: "Android Studio",
                    logo: "/projects/Dash/techStack/androidStudio.webp"
                },
                {
                    techStack: "Figma",
                    logo: "/projects/Dash/techStack/figma.png"
                },
                {
                    techStack: "Firebase",
                    logo: "/projects/Dash/techStack/firebase.png"
                },
                {
                    techStack: "GitHub",
                    logo: "/projects/Dash/techStack/github.png"
                },
                {
                    techStack: "Java SE",
                    logo: "/projects/Dash/techStack/java.png"
                }
            ]
        }
    ];

    return (
        <main className="flex min-h-screen min-w-screen flex-col bg-light-gray items-center justify-between p-24 overflow-x-hidden">
            <Navbar/>

            <section id="home">
                <div className="min-h-screen min-w-screen">
                    <Header sectionTitle="Web and Mobile Developer"/>
                </div>

                <div className="min-h-screen min-w-screen">
                    <Header sectionTitle="Education"/>
                    <div className="flex flex-wrap text-balance overflow-y-auto justify-around">
                        {educationData.map((school, index) => (
                            <div key={index} className="w-1/3 mb-8">
                                <EducationCard
                                    schoolLogo={school.schoolLogo}
                                    schoolName={school.schoolName}
                                    schoolLocation={school.schoolLocation}
                                    schoolBatch={school.schoolBatch}
                                    schoolExperienceList={school.schoolExperienceList} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="min-h-screen min-w-screen">
                    <Header sectionTitle="Experience"/>
                </div>

                <div className="min-h-screen min-w-screen">
                    <Header sectionTitle="Skills"/>
                </div>
            </section>

            <section id="projects">
                <div className="min-h-screen min-w-screen ">
                    <Header sectionTitle="Projects" />
                    {projectData.map((project, index) => (
                        <div key={index} className="mb-8 ms-8 flex flex-col">
                        <ProjectCard
                            projectImage={project.projectImage}
                            projectTitle={project.projectTitle}
                            projectCategory={project.projectCategory}
                            projectRole={project.projectRole}
                            projectDuration={project.projectDuration}
                            projectSummary={project.projectSummary}
                            projectTechStack={project.projectTechStack} />
                        </div>
                    ))}
                </div>
            </section>

            <section id="contact">
                <div className="min-h-screen min-w-screen">
                    <Header sectionTitle="Contact" />
                </div>
            </section>
        </main>
    )
}