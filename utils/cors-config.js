const allowedCors = [
    'http://localhost:3000',
    'https://photokub.github.io/zalivam-net',
    'http://51.250.18.36/',
    'http://51.250.18.36',
    'https://51.250.18.36',
    'http://centrprosto.ru',
    'https://centrprosto.ru'
];

const corsOptions = {
    origin: allowedCors,
    optionSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true,
};

module.exports = {
    corsOptions,
};