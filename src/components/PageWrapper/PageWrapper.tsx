import React from "react";

import { Wrapper } from "./PageWrapper.styles";

type Props = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<Props> = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageWrapper;