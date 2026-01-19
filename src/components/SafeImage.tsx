import { ImgHTMLAttributes, useCallback, useRef } from "react";

type SafeImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

export function SafeImage({
  fallbackSrc = "/placeholder.svg",
  onError,
  ...props
}: SafeImageProps) {
  const didFallback = useRef(false);

  const handleError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (!didFallback.current) {
        didFallback.current = true;
        e.currentTarget.src = fallbackSrc;
      }
      onError?.(e);
    },
    [fallbackSrc, onError]
  );

  // eslint-disable-next-line jsx-a11y/alt-text
  return <img {...props} onError={handleError} />;
}


