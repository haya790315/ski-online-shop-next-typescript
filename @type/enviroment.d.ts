namespace NodeJS {
  interface ProcessEnv {
    MONGODB_URI: string;
    MONGODB_NAME: string;
    MONGODB_COLLECTION: string;
    NEXT_PUBLIC_VERCEL_URL: string;
    MONGO_DB_USER: string;
    MONGO_DB_PASSWORD: string;
    NEXTAUTH_SECRET: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
  }
}
