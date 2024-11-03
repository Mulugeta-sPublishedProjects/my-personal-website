"use client";
import React, { ReactNode, Suspense } from "react";
import useMounted from "../hooks/use-mounted";
import { Splash } from "./loader";

type RootWrapperProps = {
  children: ReactNode;
};

const RootWrapper = ({ children }: RootWrapperProps) => {
  const mounted = useMounted();

  return (
    <>
      {mounted ? (
        <Suspense fallback={<Splash />}>{children}</Suspense>
      ) : (
        <Splash />
      )}
    </>
  );
};

export default RootWrapper;
