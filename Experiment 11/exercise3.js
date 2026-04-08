const EventEmitter = require('events');

const emitter = new EventEmitter();

// Listener 1
emitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Listener 2
emitter.on('greet', (name) => {
    console.log(`Welcome to Node.js, ${name}!`);
});

// Custom Event Trigger
setTimeout(() => {
    emitter.emit('greet', 'Kushagra');
}, 1000);

// Another Event
emitter.on('dataEvent', (data) => {
    console.log('Data received:', data);
});

emitter.emit('dataEvent', { id: 1, message: 'Event-driven model' });