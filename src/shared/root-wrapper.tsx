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
  
  return (
    <div suppressHydrationWarning>
      {!mounted ? (
        <Splash />
      ) : (
        <CursorProvider>
          <Suspense fallback={<Splash />}>{children}</Suspense>
        </CursorProvider>
      )}
    </div>
  );
};

export default RootWrapper;
