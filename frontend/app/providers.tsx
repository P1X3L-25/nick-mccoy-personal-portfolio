"use client";

import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

function createEmotionCache() {
  let insertionPoint: HTMLElement | undefined;
  if (typeof document !== 'undefined') {
    const emotionInsertionPoint = document.querySelector(
      'meta[name="emotion-insertion-point"]'
    ) as HTMLElement | null;
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: 'mui', insertionPoint });
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [cache] = React.useState(() => createEmotionCache());

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
