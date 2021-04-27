import { app, port } from './app';
import { task } from './cron-job';

task.start();
app.listen(port);