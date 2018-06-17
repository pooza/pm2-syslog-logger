# pm2-syslog-logger

- [GitHub](https://github.com/pooza/pm2-syslog-logger)
- [npm](https://www.npmjs.com/package/pm2-syslog-logger)

Output log of pm2 to syslog.  
Previously, this was using the logger command, but it was modified to use POSIX system call.

## Installation

### Install pm2 module

```
pm2 module:install pm2-syslog-logger
```

### Configure rsyslog

for example...

```
:programname, isequal, "chinachu-operator" -/var/log/chinachu.log
:programname, isequal, "chinachu-wui" -/var/log/chinachu.log
:programname, isequal, "mirakurun-server" -/var/log/mirakurun.log
```
