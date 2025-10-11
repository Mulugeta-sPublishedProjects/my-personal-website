import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>();

  React.useEffect(() => {
    const mediaQueryList = globalThis.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT - 1}px)`,
    );
    const onChange = () => {
      setIsMobile(globalThis.innerWidth < MOBILE_BREAKPOINT);
    };
    mediaQueryList.addEventListener("change", onChange);
    setIsMobile(globalThis.innerWidth < MOBILE_BREAKPOINT);
    return () => mediaQueryList.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
