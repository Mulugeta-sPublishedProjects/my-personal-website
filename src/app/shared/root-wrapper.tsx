"use client";

import React, { ReactNode, Suspense, useEffect, useState } from "react";
import { Splash } from "./loader";
import useMounted from "../hooks/use-mounted";

type RootWrapperProps = {
  children: ReactNode;
};

const RootWrapper = ({ children }: RootWrapperProps) => {
  const mounted = useMounted();
  if (!mounted) {
    return <Splash />;
  }

  return <Suspense fallback={<Splash />}>{children}</Suspense>;
};

export default RootWrapper;
