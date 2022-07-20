import { config } from 'dotenv';

type ServerConfig =  {
    port: string;
    host: string;
}

type dbConfig =  {
    username: string,
    password: string,
    hostname: string,
    database: string,
}

type BucketConfig = {
    accesskey: string,
    secretkey: string,
    region: string,
}

config();

export const getConfig = (): dbConfig => ({
        username: process.env.DB_USER as string,
        password: process.env.DB_PASSWORD as string,
        hostname: process.env.DB_HOST as string,
        database: process.env.DB as string,
});

export const getServerConfig = (): ServerConfig => ({
    port: process.env.PORT as string,
    host: process.env.HOST as string,
});

export const getBucketConfig = (): BucketConfig => ({
    accesskey: process.env.BUCKET_ACCESS as string,
    secretkey: process.env.BUCKET_SECRET as string,
    region: process.env.BUCKET_REGION as string,
});
