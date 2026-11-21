import { useEffect, useMemo, useRef, useState } from 'react';

export interface AdsterraBannerProps {
  adKey: string;
  width: number;
  height: number;
  scriptSrc: string;
  slotId: string;
}

export function AdsterraBanner({
  adKey,
  width,
  height,
  scriptSrc,
  slotId,
}: AdsterraBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScale = () => {
      const availableWidth = el.clientWidth;
      if (availableWidth > 0 && availableWidth < width) {
        setScale(availableWidth / width);
      } else {
        setScale(1);
      }
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(el);
    return () => observer.disconnect();
  }, [width]);

  const srcDoc = useMemo(() => {
    const safeKey = adKey.replace(/[^a-zA-Z0-9_-]/g, '');
    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        width: ${width}px;
        height: ${height}px;
        overflow: hidden;
        background: transparent;
      }
    </style>
  </head>
  <body>
    <script>
      atOptions = {
        'key' : '${safeKey}',
        'format' : 'iframe',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    </script>
    <script src="${scriptSrc}"></script>
  </body>
</html>`;
  }, [adKey, width, height, scriptSrc]);

  const scaledHeight = Math.round(height * scale);

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center overflow-hidden"
      style={{ maxWidth: `${width}px`, height: `${scaledHeight}px` }}
    >
      <div
        className="shrink-0"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          transform: scale < 1 ? `scale(${scale})` : undefined,
          transformOrigin: 'top center',
        }}
      >
        <iframe
          key={`${adKey}-${slotId}`}
          title={`Ad ${width}x${height} ${slotId}`}
          srcDoc={srcDoc}
          width={width}
          height={height}
          scrolling="no"
          frameBorder={0}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            border: '0',
            overflow: 'hidden',
            display: 'block',
          }}
        />
      </div>
    </div>
  );
}
