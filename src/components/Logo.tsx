export const PaperKnifeLogo = ({ size = 24, className = "", iconColor, partColor }: { size?: number, className?: string, iconColor?: string, partColor?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* मुख्य फ़ाइल/दस्तावेज़ की बॉडी (Primary Blue) */}
    <path 
      d="M5 3.5C5 2.67157 5.67157 2 6.5 2H14.5L19 6.5V20.5C19 21.3284 18.3284 22 17.5 22H6.5C5.67157 22 5 21.3284 5 20.5V3.5Z" 
      fill={iconColor || "#2563EB"} 
    />
    
    {/* मुड़ा हुआ कोना (Accent Yellow) */}
    <path 
      d="M14.5 2V6.5H19L14.5 2Z" 
      fill={partColor || "#F59E0B"} 
    />
    
    {/* बीच में कम्प्रेस/डाउन एरो (White) */}
    <path 
      d="M12 9.5V16.5M9.5 14L12 16.5L14.5 14" 
      stroke="#FFFFFF" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    
    {/* नीचे का बेस बार (Emerald Green) */}
    <rect 
      x="8" 
      y="18.5" 
      width="8" 
      height="1.5" 
      rx="0.75" 
      fill="#10B981" 
    />
  </svg>
)
