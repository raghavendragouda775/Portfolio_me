const EnhancedDevOpsCard = ({ project, onClick }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-sm border border-zinc-700/50 hover:border-green-400/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-400/10 h-full">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated Border Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/20 via-blue-400/20 to-green-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

      {/* DevOps Badge */}
      <div className="absolute top-4 left-4 z-10">
        <div className="px-3 py-1 bg-green-400/20 backdrop-blur-sm text-green-400 text-xs font-semibold rounded-full border border-green-400/30 animate-pulse">
          DevOps
        </div>
      </div>

      {/* Image Section with Advanced Overlay */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <figure className="img-box w-full h-48 overflow-hidden">
          <img 
            src={project.imgSrc || "/placeholder.svg"} 
            alt={project.title} 
            loading="lazy" 
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" 
          />
          
          {/* Multi-layer Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Tech Stack Icons */}
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-orange-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-orange-500/30">
                <span className="text-orange-400 text-xs font-bold">AWS</span>
              </div>
              <div className="w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-blue-500/30">
                <span className="text-blue-400 text-xs font-bold">K8s</span>
              </div>
            </div>
          </div>
        </figure>
      </div>

      {/* Content Section */}
      <div className="relative p-6 space-y-4">
        {/* Title with Enhanced Gradient */}
        <h3 className="text-xl font-bold bg-gradient-to-r from-zinc-50 to-zinc-300 bg-clip-text text-transparent group-hover:from-green-400 group-hover:to-blue-400 transition-all duration-500">
          {project.title}
        </h3>

        {/* Animated Tags with DevOps Theme */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((label, key) => (
            <span
              key={key}
              className="px-3 py-1.5 text-xs font-medium text-zinc-400 bg-zinc-800/50 backdrop-blur-sm rounded-full border border-zinc-700/50 hover:border-green-400/50 hover:text-green-400 hover:bg-green-400/10 transition-all duration-300 cursor-default transform hover:scale-105"
              style={{
                animationDelay: `${key * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Enhanced View Details Button */}
        <div className="flex justify-end pt-2">
          <button
            onClick={onClick}
            className="group/btn relative inline-flex items-center px-6 py-3 text-sm font-semibold text-zinc-950 bg-gradient-to-r from-green-400 to-green-500 rounded-xl hover:from-green-300 hover:to-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/25 active:scale-95"
          >
            <span className="relative z-10">View Details</span>
            
            {/* Button Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover/btn:opacity-20 blur-xl transition-opacity duration-300" />
            
            {/* Enhanced Arrow Icon */}
            <svg 
              className="w-4 h-4 ml-2 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Advanced Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        <div className="absolute top-8 left-8 w-1 h-8 bg-gradient-to-b from-green-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
        <div className="absolute top-16 right-12 w-8 h-1 bg-gradient-to-r from-blue-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-12 left-16 w-1 h-6 bg-gradient-to-b from-green-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-2xl" />
    </div>
  )
}

export default EnhancedDevOpsCard
