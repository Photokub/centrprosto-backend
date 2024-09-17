const allowedCors = [
    'http://localhost:3000',
    'https://photokub.github.io/zalivam-net',
    'http://84.201.136.83',
    'https://84.201.136.83',
    'http://centrprosto.ru',
    'https://centrprosto.ru',
    'https://centrprosto.ru/api'
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