import { FormContext } from 'context/FormContext';
import { useContext } from 'react';

function useFormContext() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useFormContext must be use within a Provider');
  }
  return context;
}

export default useFormContext;
