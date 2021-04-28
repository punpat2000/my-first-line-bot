import cron from 'node-cron';

const task = cron.schedule('@hourly', () => {
  console.log(`Hourly cron job run!`);
});

export { task };