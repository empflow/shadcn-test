"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

const ImageWithFallback = (props: ImageProps & { fallbackSrc: string }) => {
  const { src, fallbackSrc, alt, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      alt={alt} // gets rid of eslint warning
    />
  );
};

export default ImageWithFallback;
