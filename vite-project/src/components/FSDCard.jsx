const EnhancedProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-sm border border-zinc-700/50 hover:border-sky-400/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky-400/10 ${classes}`}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Animated Border Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400/20 via-purple-400/20 to-sky-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

      {/* Image Section with Overlay */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <figure className="img-box w-full h-48 overflow-hidden">
          <img
            src={imgSrc || "/placeholder.svg"}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

          {/* Floating Animation Dots */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" style={{ animationDelay: "0s" }} />
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
            </div>
          </div>
        </figure>
      </div>

      {/* Content Section */}
      <div className="relative p-6 space-y-4">
        {/* Title with Gradient Text */}
        <h3 className="text-xl font-bold bg-gradient-to-r from-zinc-50 to-zinc-300 bg-clip-text text-transparent group-hover:from-sky-400 group-hover:to-purple-400 transition-all duration-500">
          {title}
        </h3>

        {/* Animated Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((label, key) => (
            <span
              key={key}
              className="px-3 py-1.5 text-xs font-medium text-zinc-400 bg-zinc-800/50 backdrop-blur-sm rounded-full border border-zinc-700/50 hover:border-sky-400/50 hover:text-sky-400 hover:bg-sky-400/10 transition-all duration-300 cursor-default transform hover:scale-105"
              style={{
                animationDelay: `${key * 0.1}s`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Action Button with Enhanced Styling */}
        <div className="flex justify-end pt-2">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center px-6 py-3 text-sm font-semibold text-zinc-950 bg-gradient-to-r from-sky-400 to-sky-500 rounded-xl hover:from-sky-300 hover:to-sky-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-sky-400/25 active:scale-95"
          >
            <span className="relative z-10">Visit Project</span>

            {/* Button Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 opacity-0 group-hover/btn:opacity-20 blur-xl transition-opacity duration-300" />

            {/* Arrow Icon with Animation */}
            <svg
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        <div
          className="absolute -top-2 -left-2 w-4 h-4 bg-sky-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-1/2 -right-2 w-3 h-3 bg-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute -bottom-2 left-1/3 w-2 h-2 bg-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </div>
  )
}

export default EnhancedProjectCard
