/* eslint-disable @typescript-eslint/no-empty-object-type */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'confirm' | 'back';
}
const buttonStyles = 'h-10 shrink-0 rounded-md  px-5 py-2  hover:opacity-70 font-medium';
const buttonVariants = {
  default: 'bg-blue-950 text-white ',
  confirm: 'bg-indigo-600 text-white',
  back: 'bg-gray-50 text-gray-400 hover:text-blue-950',
};
function Button({ children, variant = 'default', ...props }: ButtonProps) {
  return (
    <button
      className={`${buttonStyles} ${buttonVariants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
