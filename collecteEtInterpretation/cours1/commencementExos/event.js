const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('mesRespects', (nom) => {
  console.log(`Wassam ${nom} !`);
});

emitter.emit('mesRespects', 'Joe');