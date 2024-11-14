function Error({ children }: React.PropsWithChildren) {
  return <p className='text-sm font-medium text-red-400'>{children}</p>;
}

export default Error;
