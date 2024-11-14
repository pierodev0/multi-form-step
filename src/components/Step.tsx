interface StepProps {
  step: number;
  currentStep: number;
}
function Step({ step, currentStep }: StepProps) {
  const stepInfo: { [key: number]: string } = {
    1: 'Your info',
    2: 'Select Plan',
    3: 'Add-ons',
    4: 'Summary',
  };
  return (
    <div className='flex items-center gap-4'>
      <div
        className={`flex size-8 items-center justify-center rounded-full outline outline-2 outline-white ${currentStep === step ? 'bg-blue-300 text-black' : 'text-white'}`}
      >
        {step}
      </div>
      <div>
        <p className='text-xs uppercase text-gray-300'>Step {step}</p>
        <p className='text-sm font-medium uppercase text-white'>{stepInfo[step]}</p>
      </div>
    </div>
  );
}

export default Step;
