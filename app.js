'use strict';
const pm2 = require('pm2');
const exec = require('child_process').exec;
const shellescape = require('shell-escape');

pm2.launchBus((err, bus) => {
  bus.on('log:err', data => {
    exec([
      'logger',
      '-p', 'user.error',
      '-t', shellescape([data.process.name]),
      shellescape([data.data]),
    ].join(' '));
  });

  bus.on('log:out', data => {
    exec([
      'logger',
      '-p', 'user.info',
      '-t', shellescape([data.process.name]),
      shellescape([data.data]),
    ].join(' '));
  });
});
