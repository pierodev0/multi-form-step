import useFormContext from 'hooks/useFormContext';
import { Addon } from 'types';

interface SelectedAddonProps {
  addon: Addon;
}
function SelectedAddon({ addon }: SelectedAddonProps) {
  const { state, frequencyAbbreviation } = useFormContext();
  return (
    <div className='flex py-2 first:pt-0 last:pb-0'>
      <p className='flex-1 text-sm font-medium text-gray-400'>{addon.title}</p>
      <p className='text-sm font-medium text-blue-800'>
        +$ {addon.price[state.planFrecuency]} /{frequencyAbbreviation}
      </p>
    </div>
  );
}

export default SelectedAddon;
