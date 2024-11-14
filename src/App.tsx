import Addon from 'components/Addon';
import Error from 'components/Error';
import Plan from 'components/Plan';
import Step from 'components/Step';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import Switch from 'components/ui/Switch';
import useFormContext from 'hooks/useFormContext';
import { PlanFrequency, PlanType } from 'types';

function App() {
  const { state, dispatch } = useFormContext();

  return (
    <>
      <main className=''>
        <section className='mx-auto flex w-[800px] overflow-hidden rounded-lg bg-white p-2 shadow-lg'>
          <aside className='w-[250px] space-y-4 rounded-lg bg-blue-400 bg-hero-pattern p-4'>
            <Step
              step={1}
              currentStep={state.step}
            />
            <Step
              step={2}
              currentStep={state.step}
            />
            <Step
              step={3}
              currentStep={state.step}
            />
            <Step
              step={4}
              currentStep={state.step}
            />
          </aside>
          <div className='flex h-[500px] flex-1 flex-col justify-between p-8'>
            {state.step === 1 && (
              <div className='space-y-3'>
                <h1 className='text-2xl font-bold text-blue-900'>Personal Info</h1>
                <h2 className='text-lg text-gray-500'>
                  Please provide your name, email address, and phone number.
                </h2>
                <div className='space-y-2'>
                  <div className='flex items-center justify-between'>
                    <p className='font-bold text-blue-900'>Name</p>
                    <Error>{state.errors.name}</Error>
                  </div>
                  <Input
                    dispatch={dispatch}
                    name='name'
                    value={state.personalInfo.name}
                  />
                </div>
                <div className='space-y-2'>
                  <div className='flex items-center justify-between'>
                    <p className='font-bold text-blue-900'>Email Address</p>
                    <Error>{state.errors.email}</Error>
                  </div>
                  <Input
                    type='email'
                    dispatch={dispatch}
                    name={'email'}
                    value={state.personalInfo.email}
                  />
                </div>
                <div className='space-y-2'>
                  <div className='flex items-center justify-between'>
                    <p className='font-bold text-blue-900'>Phone</p>
                    <Error>{state.errors.phone}</Error>
                  </div>
                  <Input
                    type='text'
                    dispatch={dispatch}
                    name={'phone'}
                    value={state.personalInfo.phone}
                  />
                </div>
              </div>
            )}

            {state.step === 2 && (
              <div className='space-y-3'>
                <h1 className='text-2xl font-bold text-blue-900'>Select your plan</h1>
                <h2 className='text-lg text-gray-500'>
                  You have the option of monthly or yearly billing.
                </h2>
                <fieldset className='grid grid-cols-3 gap-2'>
                  <Plan
                    id={PlanType.Arcade}
                    img='/images/icon-arcade.svg'
                    price={9}
                    dispatch={dispatch}
                    isChecked={state.plan === PlanType.Arcade}
                  />
                  <Plan
                    id={PlanType.Advanced}
                    img='/images/icon-advanced.svg'
                    dispatch={dispatch}
                    price={12}
                    isChecked={state.plan === PlanType.Advanced}
                  />
                  <Plan
                    id={PlanType.Pro}
                    img='/images/icon-pro.svg'
                    dispatch={dispatch}
                    price={15}
                    isChecked={state.plan === PlanType.Pro}
                  />
                </fieldset>
                <div className='flex justify-center gap-2 rounded-md bg-blue-50 p-2'>
                  <p
                    className={`text-sm font-bold ${state.planFrecuency === PlanFrequency.Yearly ? 'text-blue-900' : 'text-gray-400'}`}
                  >
                    Yearly
                  </p>
                  <Switch
                    dispatch={dispatch}
                    isChecked={state.planFrecuency === PlanFrequency.Monthly}
                  />
                  <p
                    className={`text-sm font-bold ${state.planFrecuency === PlanFrequency.Monthly ? 'text-blue-900' : 'text-gray-400'}`}
                  >
                    Montly
                  </p>
                </div>
              </div>
            )}

            {state.step === 3 && (
              <div className='space-y-5'>
                <h1 className='text-2xl font-bold text-blue-900'>Pick add-ons</h1>
                <h2 className='text-lg text-gray-500'>
                  Add-ons help enhance your gaming experience.
                </h2>
                <fieldset className='flex flex-col gap-2'>
                  <Addon
                    title='Online service'
                    content='Access to multiplayer games'
                    price={1}
                    dispatch={dispatch}
                    id={'OnlineService'}
                    isChecked={state.addons.OnlineService}
                  />
                  <Addon
                    title='Larger storage'
                    content='Extra 1TB of cloud save storage'
                    price={2}
                    dispatch={dispatch}
                    id={'LargerStorage'}
                    isChecked={state.addons.LargerStorage}
                  />
                  <Addon
                    title='Customizable profile'
                    content='Custom theme on your profile'
                    price={2}
                    dispatch={dispatch}
                    id={'CustomizableProfile'}
                    isChecked={state.addons.CustomizableProfile}
                  />
                </fieldset>
                <div className='flex justify-center gap-2 rounded-md bg-blue-50 p-2'>
                  <p
                    className={`text-sm font-bold ${state.planFrecuency === PlanFrequency.Yearly ? 'text-blue-900' : 'text-gray-400'}`}
                  >
                    Yearly
                  </p>
                  <Switch
                    dispatch={dispatch}
                    isChecked={state.planFrecuency === PlanFrequency.Monthly}
                  />
                  <p
                    className={`text-sm font-bold ${state.planFrecuency === PlanFrequency.Monthly ? 'text-blue-900' : 'text-gray-400'}`}
                  >
                    Montly
                  </p>
                </div>
              </div>
            )}
            {state.step === 4 && !state.confirmed && (
              <div className='space-y-5'>
                <h1 className='text-2xl font-bold text-blue-900'>Finishing up</h1>
                <h2 className='text-lg text-gray-500'>
                  Double-check everything looks OK before confirming.
                </h2>
                <section className='space-y-5 rounded-md bg-blue-50 p-5'>
                  <div className='flex items-center gap-2 pt-0'>
                    <div className='flex-1'>
                      <p className='font-bold capitalize text-blue-950'>{state.plan} (Montly)</p>
                      <p className='text-sm font-medium text-gray-500 underline'>Change</p>
                    </div>
                    <p className='font-bold text-blue-950'>$9/mo</p>
                  </div>
                  {/* Comprobar si algun propiedad es verdadera */}
                  {Object.values(state.addons).some((value) => value) && (
                    <>
                      <hr className='border-gra-500 border' />
                      <div>
                        {state.addons.OnlineService && (
                          <div className='flex py-2 first:pt-0 last:pb-0'>
                            <p className='flex-1 text-sm font-medium text-gray-500'>
                              Online service
                            </p>
                            <p className='text-sm font-medium text-blue-800'>+$1/mo</p>
                          </div>
                        )}

                        {state.addons.LargerStorage && (
                          <div className='flex py-2 first:pt-0 last:pb-0'>
                            <p className='flex-1 text-sm font-medium text-gray-500'>
                              Large Storage
                            </p>
                            <p className='text-sm font-medium text-blue-800'>+$2/mo</p>
                          </div>
                        )}
                        {state.addons.CustomizableProfile && (
                          <div className='flex py-2 first:pt-0 last:pb-0'>
                            <p className='flex-1 text-sm font-medium text-gray-500'>
                              Custommizable Profile
                            </p>
                            <p className='text-sm font-medium text-blue-800'>+$2/mo</p>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </section>
                <div className='flex justify-between px-5'>
                  <p className='text-sm font-medium text-gray-500'>Total per month</p>
                  <p className='text-xl font-bold text-indigo-600'>+$12/mo</p>
                </div>
              </div>
            )}
            {state.step === 4 && state.confirmed && (
              <div className='flex h-full flex-col items-center justify-center space-y-5 text-center'>
                <div className=''>
                  <img
                    src='/images/icon-thank-you.svg'
                    alt=''
                    className='mx-auto w-12'
                  />
                </div>
                <h1 className='text-2xl font-bold text-blue-900'>Thank you!</h1>
                <p className='font-medium text-gray-400'>
                  Thanks for confirming your subscription! We hope you have fun using our platform.
                  If you ever need support, please feel free to email us at support@loremgaming.com.
                </p>
              </div>
            )}

            <footer className='flex justify-between pt-4'>
              {state.step !== 1 && !state.confirmed && (
                <Button
                  variant='back'
                  onClick={() => dispatch({ type: 'prev-step' })}
                >
                  Go Back
                </Button>
              )}
              <div></div>
              {state.step !== 4 &&
                !state.confirmed &&
                (state.step === 1 ? (
                  <Button onClick={() => dispatch({ type: 'check-errors' })}>Next Step</Button>
                ) : (
                  <Button onClick={() => dispatch({ type: 'next-step' })}>Next Step</Button>
                ))}
              {state.step === 4 && !state.confirmed && (
                <Button
                  variant='confirm'
                  onClick={() => dispatch({ type: 'confirm' })}
                >
                  Confirm
                </Button>
              )}
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
