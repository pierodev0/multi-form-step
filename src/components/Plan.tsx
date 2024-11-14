import { FormActions } from 'reducers/form-reducer';
import { PlanType } from 'types';

interface PlanProps {
  id: string;
  img: string;
  price: number;
  isChecked: boolean;
  dispatch: React.Dispatch<FormActions>;
}
function Plan({ id, img, price, isChecked, dispatch }: PlanProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const playtype = e.target.value as PlanType;
    dispatch({ type: 'set-plan', payload: playtype });
  }
  return (
    <label
      className={`space-y-4 rounded-md p-3 outline outline-1 outline-gray-300  hover:cursor-pointer ${isChecked ? 'bg-blue-50 outline-blue-300' : ''}`}
      htmlFor={id}
    >
      <div>
        <img
          src={img}
          alt='Plan icon'
          className='size-10 rounded-full bg-blue-500'
        />
      </div>
      <div>
        <p className='text-sm font-bold capitalize text-blue-800'>{id}</p>
        <p className='text-xs text-gray-500'>${price}/mo</p>
      </div>
      <input
        type='radio'
        id={id}
        name='plan'
        className='hidden'
        value={id}
        onChange={handleChange}
        checked={isChecked}
      />
    </label>
  );
}

export default Plan;
