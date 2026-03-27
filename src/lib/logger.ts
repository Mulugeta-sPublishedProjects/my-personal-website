/**
 * Simple logger utility for consistent logging across the application
 */

type LogLevel = "debug" | "info" | "warn" | "error";

interface Logger {
  debug: (...args: unknown[]) => void;
  info: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
}

const shouldLog = (level: LogLevel): boolean => {
  // In production, only log warnings and errors
  if (process.env.NODE_ENV === "production") {
    return level === "warn" || level === "error";
  }
  // In development, log everything
  return true;
};

export const logger: Logger = {
  debug: (...args: unknown[]) => {
    if (shouldLog("debug")) {
      console.debug("[DEBUG]", ...args);
    }
  },
  info: (...args: unknown[]) => {
    if (shouldLog("info")) {
      console.info("[INFO]", ...args);
    }
  },
  warn: (...args: unknown[]) => {
    if (shouldLog("warn")) {
      console.warn("[WARN]", ...args);
    }
  },
  error: (...args: unknown[]) => {
    if (shouldLog("error")) {
      console.error("[ERROR]", ...args);
    }
  },
};
