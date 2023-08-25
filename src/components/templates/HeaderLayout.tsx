import { FC } from "react";

import { Header } from "../organisms/layout/Header";

type Props = {
  children: React.ReactNode
}

export const HeaderLayout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  )
}