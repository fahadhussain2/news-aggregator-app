/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NEWS_DATA_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}