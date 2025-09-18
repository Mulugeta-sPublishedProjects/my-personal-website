import React from 'react';

const Image = (props: any) => {
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return React.createElement('img', { ...props });
};

export default Image;
