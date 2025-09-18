"use client";

import React, { ReactNode, Suspense, useEffect, useState } from "react";
import { Splash } from "./loader";
import useMounted from "@/hooks/use-mounted";
import { CursorProvider } from "@/components/interactive-cursor";

type RootWrapperProps = {
  children: ReactNode;
};

const RootWrapper = ({ children }: RootWrapperProps) => {
  const mounted = useMounted();
  if (!mounted) {
    return <Splash />;
  }

  return (
    <CursorProvider>
      <Suspense fallback={<Splash />}>{children}</Suspense>
    </CursorProvider>
  );
};

export default RootWrapper;
