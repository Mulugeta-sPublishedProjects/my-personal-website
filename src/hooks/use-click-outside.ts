import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

/**
 * Hook that alerts clicks outside of the passed ref
 * @param ref - The ref to check for clicks outside of
 * @param handler - The callback function to execute when a click outside is detected
 */
export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
) {
  useEffect(() => {
    const listener = (event: Event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (
        !ref.current ||
        ref.current.contains((event?.target as Node) || null)
      ) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener as EventListener);
    document.addEventListener("touchstart", listener as EventListener);

    return () => {
      document.removeEventListener("mousedown", listener as EventListener);
      document.removeEventListener("touchstart", listener as EventListener);
    };
  }, [ref, handler]);
}
