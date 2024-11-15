import { addons } from 'data';
import { PlanFrequency, PlanOption, PersonalInfoType, PersonalInfo, Addon } from 'types';

export type FormActions =
  | {
      type: 'next-step';
    }
  | {
      type: 'prev-step';
    }
  | {
      type: 'set-personal-info';
      payload: { name: PersonalInfo; value: string };
    }
  | {
      type: 'set-plan';
      payload: PlanOption;
    }
  | {
      type: 'set-planFrecuency';
    }
  | {
      type: 'set-addons';
      payload: { id: Addon['id']; checked: boolean };
    }
  | {
      type: 'check-errors';
    }
  | {
      type: 'confirm';
    };
export type FormState = {
  step: number;
  plan: PlanOption;
  planFrecuency: PlanFrequency;
  confirmed: boolean;
  personalInfo: PersonalInfoType;
  errors: PersonalInfoType;
  addons: Addon[];
};
export const initialState: FormState = {
  step: 1,
  plan: PlanOption.Arcade,
  planFrecuency: PlanFrequency.Yearly,
  personalInfo: {
    name: '',
    email: '',
    phone: '',
  },

  confirmed: false,
  errors: { name: '', email: '', phone: '' },
  addons: addons,
};
export function formReducer(state = initialState, action: FormActions): FormState {
  if (action.type === 'next-step') {
    return {
      ...state,
      step: state.step + 1,
    };
  }

  if (action.type === 'check-errors') {
    // Limpiar los errores
    const newErrors = { ...state.errors };
    Object.keys(newErrors).forEach((key) => {
      newErrors[key as PersonalInfo] = '';
    });

    // Check for empty fields and set errors
    Object.entries(state.personalInfo).forEach(([key, value]) => {
      if (value === '') {
        newErrors[key as PersonalInfo] = `The field ${key} is required`;
      }
    });

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some((value) => value !== '');

    return {
      ...state,
      errors: newErrors,
      step: hasErrors ? state.step : state.step + 1,
    };
  }

  if (action.type === 'prev-step') {
    return {
      ...state,
      step: state.step - 1,
    };
  }
  if (action.type === 'set-personal-info') {
    const { name, value } = action.payload;
    const personalInfo = { ...state.personalInfo, [name]: value };

    return {
      ...state,
      personalInfo,
    };
  }

  if (action.type === 'set-plan') {
    return {
      ...state,
      plan: action.payload,
    };
  }

  if (action.type === 'set-planFrecuency') {
    const planFrecuency =
      state.planFrecuency === PlanFrequency.Monthly ? PlanFrequency.Yearly : PlanFrequency.Monthly;
    return {
      ...state,
      planFrecuency,
    };
  }
  if (action.type === 'set-addons') {
    const selectedAddon = addons.filter((addon) => addon.id === action.payload.id)[0];
    const updatedAddons: Addon[] = state.addons.map((addon) =>
      addon.id === action.payload.id ? { ...selectedAddon, checked: !addon.checked } : addon,
    );
    return {
      ...state,
      addons: updatedAddons,
    };
  }

  if (action.type === 'confirm') {
    return {
      ...state,
      confirmed: true,
    };
  }
  return state;
}
