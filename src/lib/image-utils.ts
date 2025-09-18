type BreakpointSizes = Record<string, string>;

export const getImageSizes = (sizes: BreakpointSizes): string => {
  const entries = Object.entries(sizes);
  const defaultSize = sizes['0'] || '100vw';
  
  return [
    ...entries
      .filter(([breakpoint]) => breakpoint !== '0')
      .sort(([a], [b]) => parseInt(b, 10) - parseInt(a, 10))
      .map(([breakpoint, size]) => `(min-width: ${breakpoint}px) ${size}`),
    defaultSize,
  ].join(', ');};

type ImageDimensions = {
  width: number;
  height: number;
  maxWidth: number;
  maxHeight: number;
  aspectRatio: number;
  sizes: string;
};

export const getImageDimensions = (
  width: number,
  height: number,
  maxWidth = 1920
): ImageDimensions => {
  const aspectRatio = width / height;
  const maxHeight = maxWidth / aspectRatio;
  
  return {
    width: Math.round(width),
    height: Math.round(height),
    maxWidth,
    maxHeight: Math.round(maxHeight),
    aspectRatio,
    sizes: getImageSizes({
      '1536': `${maxWidth}px`,
      '1280': '90vw',
      '1024': '95vw',
      '768': '95vw',
      '640': '100vw',
      '0': '100vw',
    }),
  };
};

export const getBlurDataURL = (width: number, height: number): string => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6" />
    </svg>
  `.trim();
  
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
};

// Helper to generate responsive sizes string for Next/Image
export const getResponsiveSizes = (maxWidth = 1920): string => {
  return getImageSizes({
    '1536': `${maxWidth}px`,
    '1280': '90vw',
    '1024': '95vw',
    '768': '95vw',
    '640': '100vw',
    '0': '100vw',
  });
};
