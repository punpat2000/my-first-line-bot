import cron from 'node-cron';

const task = cron.schedule('0 * * * *', () => {
  console.log(`Hourly cron job run!`);
});

export { task };