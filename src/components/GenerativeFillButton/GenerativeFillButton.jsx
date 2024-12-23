const GradientFillButton = ({ children, bgColor = 'bg-black', borderColor = 'border-black', textColor = 'text-white', hoverGradientColor = 'from-white/50 to-white/25', hoverTextColor = 'text-black' }) => {
    return (
        <button className={`group/button relative overflow-hidden rounded-md border ${borderColor} ${bgColor} px-4 py-1 text-xs font-medium ${textColor} transition-all duration-150 active:scale-95`}>
            <span className={`absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t ${hoverGradientColor} transition-all duration-500 group-hover/button:h-full`} />
            <span className={`relative z-10 transition-all duration-500 group-hover/button:${hoverTextColor}`}>
                {children}
            </span>
        </button>
    )
}

export default GradientFillButton
