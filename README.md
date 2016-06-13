# fx-sync-proxy
Super basic sync proxy

## deployed:
https://fennec-history-proxy.herokuapp.com

`curl -H "Content-Type: application/json" -X POST -d '{"email": "someemail@mozilla.com", "password": "somepass", "limit": 20000}' https://fennec-history-proxy.herokuapp.com/history`
