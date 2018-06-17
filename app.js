'use strict';
const pm2 = require('pm2');
const posix = require('posix');

pm2.launchBus((err, bus) => {
  bus.on('log:err', data => {
    posix.openlog(data.process.name, {ndelay: true, pid: true}, 'user');
    posix.syslog('info', data.data);
    posix.closelog();
  });

  bus.on('log:out', data => {
    posix.openlog(data.process.name, {ndelay: true, pid: true}, 'user');
    posix.syslog('error', data.data);
    posix.closelog();
  });
});
