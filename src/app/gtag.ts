export const pageView = (url: string) => {
  const GA_TRACKING_ID = "G-3H00YQHYES";

  const gtag = (globalThis as any).gtag;
  if (typeof gtag === "function") {
    gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  } else {
    console.warn(
      "Google Analytics script not loaded or gtag function is unavailable.",
    );
  }
};
