import { useMemo } from 'react';

export interface AdsterraBannerProps {
  adKey: string;
  width: number;
  height: number;
  scriptSrc: string;
  title?: string;
  slotId?: string;
  className?: string;
}

export function AdsterraBanner({
  adKey,
  width,
  height,
  scriptSrc,
  title = 'Sponsored banner',
  slotId = '0',
  className = '',
}: AdsterraBannerProps) {
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
        display: flex;
        align-items: center;
        justify-content: center;
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

  return (
    <div
      className={`flex flex-col items-center justify-center ${className}`}
      aria-label={title}
    >
      <div
        className="relative overflow-hidden bg-slate-100/80 border border-slate-200/80 rounded-md flex items-center justify-center"
        style={{ width: `${width}px`, height: `${height}px`, maxWidth: '100%' }}
      >
        <iframe
          key={`${adKey}-${slotId}`}
          title={title}
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
