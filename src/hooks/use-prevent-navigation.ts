"use client";

import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface UsePreventNavigation {
  allowNavigation: () => void;
  navigate: (url: string, replace?: boolean) => void;
  reset: () => void;
}

const DEFAULT_MESSAGE = "You have unsaved changes. Are you sure you want to leave?";

export const usePreventNavigation = (
  preventNavigation: boolean | (() => boolean),
  message = DEFAULT_MESSAGE,
): UsePreventNavigation => {
  const router = useRouter();

  const isNavigating = useRef(false);
  const routerRef = useRef(router);

  const shouldPreventNavigation = useCallback(() => {
    return typeof preventNavigation === "function" ? preventNavigation() : preventNavigation;
  }, [preventNavigation]);

  const confirmNavigation = useCallback(() => {
    if (!shouldPreventNavigation() || isNavigating.current) {
      return true;
    }
    return window.confirm(message);
  }, [shouldPreventNavigation, message]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!shouldPreventNavigation() || isNavigating.current) return;
      e.preventDefault();
      e.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [message, shouldPreventNavigation]);

  useEffect(() => {
    const handlePopState = () => {
      if (!confirmNavigation()) {
        window.history.pushState(null, "", window.location.href);
        return;
      }
      isNavigating.current = true;
    };

    window.addEventListener("popstate", handlePopState);
    window.history.pushState(null, "", window.location.href);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [confirmNavigation]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      if (!confirmNavigation()) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        isNavigating.current = true;
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [confirmNavigation]);

  const allowNavigation = useCallback(() => {
    isNavigating.current = true;
  }, []);

  const navigate = useCallback(
    (url: string, shouldReplace = false) => {
      if (!confirmNavigation()) return;
      isNavigating.current = true;
      if (shouldReplace) {
        routerRef.current.replace(url);
      } else {
        routerRef.current.push(url);
      }
    },
    [confirmNavigation],
  );

  const reset = useCallback(() => {
    isNavigating.current = false;
  }, []);

  return { allowNavigation, navigate, reset };
};
