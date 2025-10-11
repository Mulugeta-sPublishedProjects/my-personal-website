const { TextEncoder, TextDecoder } = require("util");
require("@testing-library/jest-dom");

// Add TextEncoder and TextDecoder for Jest
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock window.scrollTo
Object.defineProperty(window, "scrollTo", {
  value: jest.fn(),
  writable: true,
});

// Mock IntersectionObserver
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
    this.root = null;
    this.rootMargin = "";
    this.thresholds = [];
  }

  observe() {
    // Trigger the callback with a mock entry
    this.callback([{ isIntersecting: true }], this);
  }

  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

global.IntersectionObserver = MockIntersectionObserver;

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => "",
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}));

// Mock next/image
jest.mock("next/image", () => {
  const React = require("react");
  return function Image(props) {
    return React.createElement("img", { ...props });
  };
});
