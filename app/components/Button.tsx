import type { ButtonProps } from '@/app/Types/common';

const Button: React.FC<ButtonProps> = ({ 
    onClick, 
    children, 
    className = '', 
    type = 'button' 
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;