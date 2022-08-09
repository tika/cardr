import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL as string, {
    tls: {
        rejectUnauthorized: false,
    },
});

export default redis;
