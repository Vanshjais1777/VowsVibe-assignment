interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseStyles = 'px-8 py-3 rounded-full font-medium transition-all duration-300';
  const variants = {
    primary: 'bg-[#2563EB] text-white hover:bg-[#1d4ed8] shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-[#2563EB] border-2 border-[#2563EB] hover:bg-[#2563EB] hover:text-white'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
