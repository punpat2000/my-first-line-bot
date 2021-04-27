import cron from 'node-cron';

const task = cron.schedule('0 8 * * *', () => {
  console.log('It\'s 8.00!');
});

export { task };