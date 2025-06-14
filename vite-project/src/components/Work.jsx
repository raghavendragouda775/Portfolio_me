"use client"

import { useState } from "react"
import EnhancedProjectCard from "./FSDCard"
import EnhancedDevOpsCard from "./DevopsCard"
import DevOpsDetails from "./DevopsDetails"
import project1 from "../images/project-1.png"
import project2 from "../images/project-2.png"
import kidzian from "../images/kidzian.png"

const Work = () => {
  const [activeTab, setActiveTab] = useState("fullstack")
  const [showDevOpsDetails, setShowDevOpsDetails] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const fullStackProjects = [
      {
      imgSrc: kidzian,
      title: "Kidzian(InternShip)",
      tags: ["MERN Stack", "JWT", "Analytics", "Email Integration","Role-Based Dashboard","Role-Base LMS","Report Generation","REST API's"],
      projectLink: "https://kidzian.com/",
    },
    {
      
      imgSrc: project1,
      title: "CodeHub - Collaborative Code Editor",
      tags: ["React", "Socket.IO", "WebSockets", "Real-time"],
      projectLink: "https://codeeditor-ste1.onrender.com",
    },
    {
      imgSrc: project2,
      title: "E-LEARN Platform",
      tags: ["React", "API", "Development", "Education"],
      projectLink: "https://elearning-frontend-x1kn.vercel.app/",
    },
  
  ]

  const devopsProjects = [
    {
      id: "eks-automation",
      imgSrc:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-14%20at%2022.41.18_01e88b8f.jpg-WcwRjEEUuDhZ1aCJj7eDrWwBZOLDHG.jpeg",
      title: "Automated EKS Cluster Provision on AWS",
      tags: ["AWS EKS", "Terraform", "Jenkins", "Kubernetes", "CI/CD"],
      isDevOps: true,
    },
    {
      id: "microservices-devops",
      imgSrc: "/placeholder.svg?height=300&width=400",
      title: "DevOps E-Commerce Microservices",
      tags: ["Docker", "Kubernetes", "GitHub Actions", "ArgoCD"],
      isDevOps: true,
    },
  ]

  const handleDevOpsClick = (project) => {
    setSelectedProject(project)
    setShowDevOpsDetails(true)
  }

  const handleBackToProjects = () => {
    setShowDevOpsDetails(false)
    setSelectedProject(null)
  }

  if (showDevOpsDetails && selectedProject) {
    return <DevOpsDetails project={selectedProject} onBack={handleBackToProjects} />
  }

  const currentProjects = activeTab === "fullstack" ? fullStackProjects : devopsProjects

  return (
    <section id="work" className="section bg-zinc-900 min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-400/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-3/4 left-1/2 w-48 h-48 bg-green-400/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-sky-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-gradient-x">
              My Portfolio Works
            </h2>
            <div className="h-1 bg-gradient-to-r from-sky-400 via-purple-400 to-green-400 rounded-full mt-4 animate-pulse" />
          </div>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Showcasing my expertise in <span className="text-sky-400 font-semibold">Full Stack Development</span> and{" "}
            <span className="text-green-400 font-semibold">DevOps Engineering</span>
          </p>
        </div>

        {/* Enhanced Tab Buttons */}
        <div className="flex justify-center mb-16">
          <div className="relative bg-zinc-800/50 backdrop-blur-sm p-1.5 rounded-2xl border border-zinc-700/50 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 via-purple-400/10 to-green-400/10 rounded-2xl opacity-50" />

            <button
              onClick={() => setActiveTab("fullstack")}
              className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-500 transform ${
                activeTab === "fullstack"
                  ? "bg-gradient-to-r from-sky-400 to-sky-500 text-zinc-950 shadow-lg shadow-sky-400/25 scale-105"
                  : "text-zinc-400 hover:text-zinc-50 hover:bg-zinc-700/50"
              }`}
            >
              <span className="relative z-10">Full Stack Projects</span>
              {activeTab === "fullstack" && (
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-500 rounded-xl blur-xl opacity-30" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("devops")}
              className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-500 transform ${
                activeTab === "devops"
                  ? "bg-gradient-to-r from-green-400 to-green-500 text-zinc-950 shadow-lg shadow-green-400/25 scale-105"
                  : "text-zinc-400 hover:text-zinc-50 hover:bg-zinc-700/50"
              }`}
            >
              <span className="relative z-10">DevOps Projects</span>
              {activeTab === "devops" && (
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-xl blur-xl opacity-30" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Tab Content Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-zinc-50 mb-3">
            {activeTab === "fullstack" ? (
              <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                Full Stack Development
              </span>
            ) : (
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                DevOps & Cloud Engineering
              </span>
            )}
          </h3>
          <p className="text-zinc-400 text-lg">
            {activeTab === "fullstack"
              ? "MERN Stack applications with modern UI/UX and real-time features"
              : "Infrastructure automation, container orchestration, and CI/CD pipelines"}
          </p>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 transition-all duration-500">
          {currentProjects.map((project, index) => (
            <div
              key={`${activeTab}-${index}`}
              className="animate-fadeInUp"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "both",
              }}
            >
              {project.isDevOps ? (
                <EnhancedDevOpsCard project={project} onClick={() => handleDevOpsClick(project)} />
              ) : (
                <EnhancedProjectCard
                  imgSrc={project.imgSrc}
                  title={project.title}
                  tags={project.tags}
                  projectLink={project.projectLink}
                  classes="h-full"
                />
              )}
            </div>
          ))}
        </div>

        {/* Enhanced Project Count */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-zinc-800/50 backdrop-blur-sm rounded-full border border-zinc-700/50">
            <div
              className={`w-2 h-2 rounded-full mr-3 ${activeTab === "fullstack" ? "bg-sky-400" : "bg-green-400"} animate-pulse`}
            />
            <p className="text-zinc-400">
              Showing <span className="text-zinc-50 font-semibold">{currentProjects.length}</span>{" "}
              {activeTab === "fullstack" ? "Full Stack" : "DevOps"} projects
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default Work
