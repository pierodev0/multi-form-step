import { FormActions } from 'reducers/form-reducer';
import { PersonalInfo } from 'types';

/* eslint-disable @typescript-eslint/no-empty-object-type */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  dispatch: React.Dispatch<FormActions>;
  name: PersonalInfo;
}
function Input({ className, value, type = 'text', name, dispatch, ...props }: InputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: 'set-personal-info',
      payload: { name: e.target.name as PersonalInfo, value: e.target.value },
    });
  }
  return (
    <input
      className={`h-12 w-full rounded-md border-2 border-gray-200 px-6 focus:outline-blue-300 ${className}`}
      {...props}
      type={type}
      onChange={handleChange}
      name={name}
      value={value}
    />
  );
}

export default Input;
