import { FormActions } from 'reducers/form-reducer';

interface SwitchProps {
  dispatch: React.Dispatch<FormActions>;
  isChecked: boolean;
}

function Switch({ dispatch, isChecked }: SwitchProps) {
  return (
    <label className='inline-flex cursor-pointer items-center'>
      <input
        type='checkbox'
        defaultValue=''
        className='peer sr-only'
        onChange={() => dispatch({ type: 'set-planFrecuency' })}
        checked={isChecked}
      />
      <div className="peer relative h-6 w-12 rounded-full bg-blue-800 after:absolute after:start-[8px] after:top-[4px] after:size-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none rtl:peer-checked:after:-translate-x-full" />
    </label>
  );
}

export default Switch;
