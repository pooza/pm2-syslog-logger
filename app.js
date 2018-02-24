'use strict';
const pm2 = require('pm2');
const exec = require('child_process').exec;
const shellescape = require('shell-escape');

pm2.launchBus(function (err, bus) {
  bus.on('log:err', function (data) {
    exec([
      'logger',
      '-p', 'user.error',
      '-t', shellescape([data.process.name]),
      shellescape([data.data]),
    ].join(' '));
  });

  bus.on('log:out', function (data) {
    exec([
      'logger',
      '-p', 'user.info',
      '-t', shellescape([data.process.name]),
      shellescape([data.data]),
    ].join(' '));
  });
});
