import { createConnection, getConnectionOptions } from 'typeorm';
import { EventEmitter } from 'events'

const emmiter = new EventEmitter();

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'database_helpdesk'; 
  createConnection({
    ...options,
  }).then(() => { 
    console.log("Database Conected")
    emmiter.emit("already");
   }).catch(() => {
     emmiter.emit("err");
   });
});

export { emmiter }