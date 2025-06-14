"use client"

const DevOpsDetails = ({ project, onBack }) => {
  const projectDetails = {
    "eks-automation": {
      title: "🚀 Automated EKS Cluster Provision On AWS",
      subtitle: "End-to-End EKS Cluster Creation using Terraform and Jenkins CI/CD",
      description: `I'm excited to share one of my recent DevOps automation projects — "End-to-End EKS Cluster Creation in AWS using Terraform and Jenkins CI/CD."

📌 This project automates the provisioning and verification of Kubernetes(K8s) infrastructure on AWS using Infrastructure as Code and CI/CD practices. From launching the VM to validating the infrastructure with Terraform, every step is streamlined through Jenkins Pipelines!`,

      keyFeatures: [
        "CI/CD pipeline integration with Terraform",
        "AWS EKS provisioning via Infrastructure as Code",
        "Secure credential handling and approval-based deployments",
        "Reusable automation workflows in Jenkins",
        "Infrastructure validation and monitoring",
        "Automated cluster scaling and management",
      ],

      technologies: [
        "AWS EKS",
        "Terraform",
        "Jenkins",
        "Kubernetes",
        "Docker",
        "AWS EC2",
        "AWS VPC",
        "IAM",
        "Shell Scripting",
        "YAML",
      ],

      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-14%20at%2022.41.18_01e88b8f.jpg-WcwRjEEUuDhZ1aCJj7eDrWwBZOLDHG.jpeg",
          title: "AWS EC2 Instances Dashboard",
          description: "Running EKS cluster instances with monitoring and health checks",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-14%20at%2022.41.17_e92ab17d.jpg-MSnPS8pa7l6JOSY8mclpYL6rtpDf6H.jpeg",
          title: "EKS Cluster Management",
          description: "Active Kubernetes cluster with version 1.32 and extended support",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-14%20at%2022.41.17_e5d4f21a.jpg-Y9HSO1SB91HvILYhZzGIarJYhAMDdm.jpeg",
          title: "Jenkins CI/CD Pipeline",
          description: "Automated pipeline stages for infrastructure provisioning and validation",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-14%20at%2022.41.18_e1940b3f.jpg-fDhhwi6OYPyOKs0rrJ2Xidk3cnMgkR.jpeg",
          title: "AWS Monitoring Dashboard",
          description: "Real-time monitoring of CPU utilization, network traffic, and performance metrics",
        },
      ],

      achievements: [
        "Reduced infrastructure provisioning time by 80%",
        "Implemented zero-downtime deployments",
        "Achieved 99.9% cluster uptime",
        "Automated security compliance checks",
        "Streamlined development to production workflow",
      ],
    },

    "microservices-devops": {
      title: "🏗️ DevOps Automation for E-Commerce Microservices",
      subtitle: "Complete DevOps pipeline for Java-based microservices with container orchestration",
      description: `Deployed Java-based microservices using Docker and Kubernetes on AWS EKS. This project demonstrates end-to-end DevOps practices including infrastructure provisioning, container orchestration, and automated CI/CD workflows.

The project focuses on scalable microservices architecture with robust monitoring, logging, and deployment strategies.`,

      keyFeatures: [
        "Microservices containerization with Docker",
        "Kubernetes orchestration on AWS EKS",
        "Infrastructure provisioning with Terraform",
        "GitOps workflow with ArgoCD",
        "Automated testing and deployment",
        "Service mesh implementation",
      ],

      technologies: [
        "Docker",
        "Kubernetes",
        "AWS EKS",
        "GitHub Actions",
        "ArgoCD",
        "Terraform",
        "Java",
        "Spring Boot",
        "Prometheus",
        "Grafana",
        "CI/CD"
      ],

      images: [
        {
          src: "/placeholder.svg?height=400&width=600",
          title: "Microservices Architecture",
          description: "Complete microservices deployment on Kubernetes cluster",
        },
      ],

      achievements: [
        "Deployed 4 microservices successfully",
        "Implemented auto-scaling based on traffic",
        "Achieved 99.5% service availability",
        "Reduced deployment time by 70%",
        "Implemented comprehensive monitoring",
      ],
    },
  }

  const details = projectDetails[project.id] || projectDetails["eks-automation"]

  return (
    <div className="min-h-screen bg-zinc-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center px-4 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-50 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-4">{details.title}</h1>
          <p className="text-xl text-sky-400 mb-6">{details.subtitle}</p>
          <div className="w-24 h-1 bg-sky-400 mx-auto rounded-full"></div>
        </div>

        {/* Description */}
        <div className="bg-zinc-800 rounded-xl p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-zinc-50 mb-4">Project Overview</h2>
          <p className="text-zinc-300 leading-relaxed whitespace-pre-line">{details.description}</p>
        </div>

        {/* Key Features */}
        <div className="bg-zinc-800 rounded-xl p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-zinc-50 mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {details.keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-zinc-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="bg-zinc-800 rounded-xl p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-zinc-50 mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {details.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-sky-400/10 text-sky-400 rounded-lg border border-sky-400/20 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Images */}
        <div className="bg-zinc-800 rounded-xl p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-zinc-50 mb-6">Project Screenshots</h2>
          <div className="grid gap-8">
            {details.images.map((image, index) => (
              <div key={index} className="space-y-4">
                <div className="rounded-lg overflow-hidden border border-zinc-700">
                  <img src={image.src || "/placeholder.svg"} alt={image.title} className="w-full h-auto object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-50 mb-2">{image.title}</h3>
                  <p className="text-zinc-400">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-zinc-50 mb-6">Key Achievements</h2>
          <div className="space-y-3">
            {details.achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-zinc-300">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DevOpsDetails
