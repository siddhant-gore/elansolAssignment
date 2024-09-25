import app from "./app.js";


const startServer = async () => {
  try {
    
    const port = process.env.PORT || 5000;
    const server = app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
    
    process.on('unhandledRejection', (err) => {
      console.error(err);
 
      server.close(() => process.exit(1));
    });
  } catch (error) {
    console.error(error);
 
    process.exit(1);
  }
};

process.on('uncaughtException', (err) => {
  console.error(err);
  process.exit(1);
});

startServer();
