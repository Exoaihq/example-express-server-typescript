import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

const server = app.listen(port, () => {
  console.log( Server is running on http://localhost: );
});

// Gracefully shut down the server
const shutDown = () => {
  server.close(() => {
    console.log('Server is shutting down...');
    process.exit(0);
  });
};

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);
