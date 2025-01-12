interface ImportMetaEnv {
    readonly VITE_S3REGION: string;
    readonly VITE_S3ACCESS_KEY_ID: string;
    readonly VITE_S3SECRET_ACCESS_KEY: string;
    readonly VITE_S3BUCKET: string;
    readonly VITE_IMP_CODE: string;
    readonly VITE_IMP_STORE_ID: string;
    readonly VITE_IMP_CHANNEL_KEY: string;
    readonly VITE_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}