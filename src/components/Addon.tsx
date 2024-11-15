import useFormContext from 'hooks/useFormContext';
import { PlanFrequency } from 'types';
import type { Addon } from 'types';

interface AddonProps {
  isChecked: boolean;
  addon: Addon;
}

function Addon({ addon: { title, content, price, id }, isChecked }: AddonProps) {
  const { state, dispatch } = useFormContext();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: 'set-addons',
      payload: { id, checked: e.target.checked },
    });
  }
  return (
    <label className='flex items-center gap-4 rounded-md px-6 py-2 outline outline-1 outline-gray-300 ring-transparent hover:cursor-pointer has-[:checked]:bg-blue-50 has-[:checked]:outline-blue-300'>
      <input
        id={id}
        type='checkbox'
        value={id}
        className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600'
        name={id}
        checked={isChecked}
        onChange={handleChange}
      />
      <div className='flex w-full items-center justify-between'>
        <div>
          <p className='font-bold text-indigo-900'>{title}</p>
          <p className='text-gray-500'>{content}</p>
        </div>
        <p className='font-medium text-indigo-600'>
          {' '}
          +${price[state.planFrecuency]}/
          {state.planFrecuency === PlanFrequency.Monthly ? 'mo' : 'yr'}
        </p>
      </div>
    </label>
  );
}

export default Addon;
