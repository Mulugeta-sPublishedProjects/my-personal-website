/* eslint-disable unicorn/no-null */
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageView } from "./gtag";

const Analytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${searchParams ? `?${searchParams}` : ""}`;
    pageView(url);
  }, [pathname, searchParams]);

  return null;
};

export default Analytics;
