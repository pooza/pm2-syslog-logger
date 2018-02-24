# pm2-syslog-logger

pm2のログを、loggerコマンドでsyslogに出力。


## ■設置の手順

### pm2モジュールインストール

```
sudo pm2 module:install pm2-syslog-logger
```

### syslog設定

必要に応じて、適宜設定。  
syslogに対するプログラム名は、pm2でのApp nameで出力している。
以下、rsyslogでの設定例。

```
:programname, isequal, "chinachu-operator" -/var/log/chinachu.log
:programname, isequal, "chinachu-wui" -/var/log/chinachu.log
:programname, isequal, "mirakurun-server" -/var/log/mirakurun.log
```

### ローテーション

logrotateなり、newsyslogなり、それぞれのOSのものを使用する。

## ■設置後の更新の手順

```
sudo pm2 module:update pm2-syslog-logger
```
