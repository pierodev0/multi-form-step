import { createContext, useReducer } from 'react';
import { formReducer, initialState, FormState, FormActions } from 'reducers/form-reducer';
import { PlanFrequency } from 'types';
type FormContextProps = {
  state: FormState;
  dispatch: React.Dispatch<FormActions>;
  frequencyAbbreviation: string;
};
export const FormContext = createContext<FormContextProps>(null!);

export function FormProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const frequencyAbbreviation = state.planFrecuency === PlanFrequency.Monthly ? 'mo' : 'yr';
  return (
    <FormContext.Provider value={{ state, dispatch, frequencyAbbreviation }}>
      {children}
    </FormContext.Provider>
  );
}
