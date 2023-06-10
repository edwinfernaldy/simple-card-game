import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export default function Title(props: TitleProps) {
  const { children } = props;

  return <h1 className='text-2xl lg:text-5xl'>{children}</h1>;
}
