import { createContext, useReducer } from 'react';
import { formReducer, initialState, FormState, FormActions } from 'reducers/form-reducer';
type FormContextProps = {
  state: FormState;
  dispatch: React.Dispatch<FormActions>;
};
export const FormContext = createContext<FormContextProps>(null!);

export function FormProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return <FormContext.Provider value={{ state, dispatch }}>{children}</FormContext.Provider>;
}
