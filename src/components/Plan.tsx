import useFormContext from 'hooks/useFormContext';
import { PlanFrequency, PlanOption } from 'types';
import type { Plan } from 'types';
interface PlanProps {
  plan: Plan;
  isChecked: boolean;
}
function Plan({ plan: { id, img, price }, isChecked }: PlanProps) {
  const { state, dispatch } = useFormContext();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const playtype = e.target.value as PlanOption;
    dispatch({ type: 'set-plan', payload: playtype });
  }
  return (
    <label
      className={`space-y-8 rounded-md p-3 outline outline-1 outline-gray-300 hover:cursor-pointer ${isChecked ? 'bg-blue-50 outline-blue-300' : ''}`}
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
        <p className='text-lg font-bold capitalize text-blue-900'>{id}</p>
        <p className='text-normal text-gray-500'>
          ${price[state.planFrecuency]}/
          {state.planFrecuency === PlanFrequency.Monthly ? 'mo' : 'yr'}
        </p>

        {state.planFrecuency === PlanFrequency.Monthly && (
          <p className='text-sm font-bold text-blue-900'>2 months Free</p>
        )}
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
