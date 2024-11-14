import { FormActions } from 'reducers/form-reducer';
import { AddonName } from 'types';

interface AddonProps {
  title: string;
  content: string;
  price: number;
  dispatch: React.Dispatch<FormActions>;
  id: AddonName;
  isChecked: boolean;
}

function Addon({ title, content, price, dispatch, id, isChecked }: AddonProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: 'set-addons',
      payload: { name: e.target.name as AddonName, checked: e.target.checked },
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
        <p className='text-indigo-600'> +${price}/mo</p>
      </div>
    </label>
  );
}

export default Addon;
