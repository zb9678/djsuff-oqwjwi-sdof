
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'zbb'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//TB
let timestamp = 4102329600000;//2099-12-31

let cacheTTL = 24 ;//小时，缓存时长

//节点链接 + 订阅链接
let MainData = `
trojan://zbb@[2606:4700:9761::6379:14a3]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:8399::200b:cee]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:3121::55ce:5d84]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:3120::63c5:34ae]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:56::4999:677b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:9761::353c:30e7]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:3120::1747:2177]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2a06:98c1:3120::3fea:5b7f]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:56::6a06:4b8b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:3055::6325:6eee]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2a06:98c1:3121::4f27:160b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:f4::5f7a:332b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@104.19.32.166:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2a06:98c1:3120::36be:4a40]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@104.19.35.216:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2a06:98c1:3120::2ac0:b0d]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:91b5::186:73af]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2a06:98c1:3120::59fc:148a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@104.19.33.38:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2a06:98c1:3120::394d:3bfc]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2a06:98c1:3121::d07:18fd]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@110.12.241.155:27017?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#KR
trojan://zbb@[2606:4700:3037::4233:7c65]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:3032::4ed5:28e2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40War
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@175.194.225.225:16004?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#KR
trojan://zbb@[2606:4700:a9::3fbc:3ed1]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@69.84.182.143:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:3037::6118:3cb2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:89d5:c0b9:51cd:dde2:c634]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2606:4700:3031::7bdd:26ba]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@69.84.182.200:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:82:8ebd:da50:d63e:26bf]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2606:4700:25::1768:421b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@132.226.230.124:4434?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#KR
trojan://zbb@[2606:4700:27::1f8b:68f3]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:27::33e:7533]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:3030::4ef8:a68]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#q
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@219.76.13.169:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#HK
trojan://zbb@[2606:4700:24::74bd:7fbf]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp
trojan://zbb@[2606:4700:3033::43e3:5737]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:28::257c:4851]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:eaa1:8b07:6fe1:cf27:c56d]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:b176:fea7:ded6:dd6:3874]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:89d5:c0eb:8cab:36e6:6af9]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2606:4700:a9::31e0:2129]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:29::3e53:3f63]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@198.62.62.252:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@69.84.182.78:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@198.62.62.205:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@210.91.8.234:30042?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#KR
trojan://zbb@[2606:4700:131::1aa6:417]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:16:70b5:d0f:f8a7:9d87]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:3037::4233:7c65]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@69.84.182.171:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@198.62.62.152:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@166.1.221.30:18888?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:3037::6118:3cb2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:e3c5:8c6f:10:7ca1:4eda]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:13f::3bcc:2f39]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:a::e42:4172]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:9b87:6372:b3e6:8faa:416b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:804:5f8b:ec8f:a5b9]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:8e6:25d2:b725:5be2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:3008::5ed6:3299]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:b5de:5a34:13be:3d2e:dd31]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#C
trojan://zbb@[2606:4700:3032::4ed5:28e2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40War
trojan://zbb@[2606:4700:e7:9b87:630b:64a2:a498:863f]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:bfe4:d36b:10fb:9593]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:3109::8d:3ff9]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@219.76.13.183:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#HK
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:eaa1:8b07:6fea:721c:4983]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2606:4700:e7:0:61:6d45:ce20:e277]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:e325:2789:1c20:4ee4:6c4a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:53::6f3f:13a2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp
trojan://zbb@[2606:4700:e7:70ed:333d:728e:288e:6b49]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:3102::437e:7c9]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@69.84.182.247:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:e7:0:5f:8857:8a3e:adc3]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:16:70b5:e88a:a9d2:7f5a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2a06:98c1:3102::497:3818]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:13b::1231:e7e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:e0:8a41:524a:6e45:9b4c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:0:da:71e7:ff90:916e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:8e6:2dee:1096:2706]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:38:ceda:d026:16f6]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:f::7f90:5c7d]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:13d::52c:55d5]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2a06:98c1:310a::6a7:4afa]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:53::6f3f:13a2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp
trojan://zbb@[2606:4700:e7:d89e:4277:8413:7b2a:b339]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:106::4151:4efd]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7::4497:ae58:5554]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:0:f549:e395:873a:75f2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#t
trojan://zbb@[2606:4700:e7:23ce:dfba:3177:9c32:bfda]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:cf:2702:44f1:fe5d:d20d]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:b5de:5a34:934a:5f42:9f67]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:3113::324e:31c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:ebcb:a9b4:2710:7e33:a13]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:136::51b6:7ef]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:13f::3bcc:2f39]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:3119::1177:2f3e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:e0::7e5e:2122]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:310c::ac42:2c82]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:f943:44e3:d29f:1b3e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:ff97:ed89:2de5:c7d0]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:133::593c:682c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@69.84.182.233:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2a06:98c1:310a::2ba8:3e6c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:e3d9:592f:78b3:1c92:6036]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:0:1eff:8905:2713:c587]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:3df4:a606:b7bc:ba19:a527]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:fdda:c4e:7a7d:3fee:841]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2a06:98c1:310e::4530:d2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:b5de:5a34:934a:5fcc:f4ee]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#C
trojan://zbb@[2606:4700:e7:0:85:6ca6:702:765e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#C
trojan://zbb@[2606:4700:4::1977:4168]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:3117::229d:6c02]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:4c15:171b:8511:32d3]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:156a:7a62:618b:38ab:1ac4]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:bfe2:cd9c:fb88:2d18]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:65e9:4af8:8a88:2e3:ba2d]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:131::77a0:6785]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@198.62.62.254:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@69.84.182.27:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@198.62.62.114:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:8974:426a:57bc:4c1d:dd4f]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2606:4700:e7:cdb5:3d16:1ed9:9c81:e43e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:59::18bb:55cd]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#5
trojan://zbb@[2606:4700:e7:eb50:c03:909b:ef83:7522]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:4406::1c9f:76c4]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:3df4:5ef6:7971:2d7d:d4a7]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:3df4:5e65:2733:975e:21f6]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:4::55d:5470]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:133::1407:72ab]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:e0:8a84:33f8:dfa0:4865]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMC
trojan://zbb@[2606:4700:3022::3d3f:15ff]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:4::11d5:6a3]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:b1:af6e:60b9:93ee:cd41]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:f1:e0aa:ebed:668c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:f943:44e3:8af8:f528]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:f98d:294a:3935:a454]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:fb:7b83:57b6:2920]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:bfe4:d356:135e:5bd8]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjEzMi1cdUQ4M0NcdURGQzFSRUxBWS0xMDQuMjYuNy4xMzItMDIyMCIsDQogICJhZGQiOiAiMTA0LjI2LjcuMTMyIiwNCiAgInBvcnQiOiAiMjA4NiIsDQogICJpZCI6ICJlOWUzY2MxMy1kYjQ4LTRjYzEtOGMyNC03NjI2NDM5YTUzMzkiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAiYXV0byIsDQogICJob3N0IjogImlwMi4xNDU3MjMwLnh5eiIsDQogICJwYXRoIjogImdpdGh1Yi5jb20vQWx2aW45OTk5IiwNCiAgInRscyI6ICIiLA0KICAic25pIjogImlwMi4xNDU3MjMwLnh5eiIsDQogICJhbHBuIjogImgzLGgyLGh0dHAvMS4xIiwNCiAgImZwIjogImNocm9tZSINCn0=
trojan://zbb@[2606:4700:4407::3e45:387a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:ce:3680:28fa:3e11:d55b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:eb50:c15:6dd1:7f0e:817c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:e3d9:592f:d5ae:fc95:e93c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:0:61:6c77:d383:c44d]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:3933:dfc6:3196:fc7b:7b6e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:4::46d9:6e9d]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:f3:6bec:20c8:7c3c:67c3]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:4406::302d:7ea1]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:440f::7524:2866]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:6::6e49:4be7]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:e0:8a84:33f8:dfa0:4865]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:3027::7bad:7fa2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:e0:1dd:79d8:7c57:f940]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2606:4700:3112::1eeb:4c1c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:3d:79ea:f6e:275b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:154d:b36f:4aaf:861a:28b1]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:4c3a:2cd9:c016:632f:9433]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:4cc2:54da:df64:841f:a1cd]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:804:5f40:7699:7d9d]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:8e6:2d51:ad0b:8b65]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2400:cb00:2049::3fdd:5032]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:1d::a4:2840]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:300b::3901:15be]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:b1d2:b3c6:f1c0:1098:a5fe]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2606:4700:e7:ebcb:a9b4:b88c:eb0a:7006]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:0:30:9ff2:e521:6dd3]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:3933:df04:3924:ba2d:c22f]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:4408::4e77:7f8f]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:f3:6bec:20c8:7c22:5b8d]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:9::58d9:1238]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:9b87:632a:cec8:b05b:b466]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:4c3a:f268:4ead:51d4:c769]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:61c3:964a:5826:267:ecb5]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:1a::687e:6951]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:3002::7fa8:72ed]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7::f12f:3a50]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:3933:df04:3924:ee2d:62c5]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:0:1e1b:521d:3189:3ed5]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:32fe:b29:97e8:49a6:a8ba]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:300a::6f51:39e7]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:e0:8a17:3c3a:9e0e:81ef]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e6::7c79:49]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:e0:8a41:524a:6e45:9b4c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMC
trojan://zbb@[2606:4700:53::977:4199]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:a396:f04f:5670:d77d:9f7b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:9b87:6372:b32d:fa40:3e39]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:88:85ff:eba2:5ce1:e86a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@69.84.182.172:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2a06:98c1:3109::dd4:7bc7]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:3929:8106:af94:fec1:43bd]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:3034::7a9a:3659]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:3033::49e7:23f7]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:1c:6789:d407:9261]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2803:f800:50::1dfd:ee2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:0:2456:e059:bba4:5ffb]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:3037::4233:7c65]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:fdda:c4e:7ae7:743d:bb7]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:618e:44b8:ca:168d:cb5c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:300b::1cdb:2a09]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:b5:d5d3:b0bd:5bce]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7::30:26f1:12c9]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:154d:b33d:391b:ecb0:ca8c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:310c::660e:2e48]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:59:ccd6:d97f:af76:51db]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:f4:757e:eae4:e4df:ac]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:d89e:4253:427d:4de7:444]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:b9c4:2d08:b9b8:8074]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:65e9:4af8:bc5:181d:4368]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2400:cb00:2049::f0c:7185]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:133::7947:3f7a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjE4NS1cdUQ4M0NcdURERkFcdUQ4M0NcdURERjggXHU3RjhFXHU1NkZEIENsb3VkRmxhcmVcdTgyODJcdTcwQjkiLA0KICAiYWRkIjogIjEwNC4yNi41LjEyMyIsDQogICJwb3J0IjogIjIwODYiLA0KICAiaWQiOiAiZTllM2NjMTMtZGI0OC00Y2MxLThjMjQtNzYyNjQzOWE1MzM5IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJpcDEuMTc4OTAzNC54eXoiLA0KICAicGF0aCI6ICJnaXRodWIuY29tL0FsdmluOTk5OSIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICJpcDEuMTc4OTAzNC54eXoiLA0KICAiYWxwbiI6ICJoMixodHRwLzEuMSIsDQogICJmcCI6ICJhbmRyb2lkIg0KfQ==
trojan://zbb@[2606:4700:e7:3215:8666:ff37:3323:cb12]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:133::6ff7:40c8]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:f::e4c:7f93]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:0:4c15:171b:85f8:2a56]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:8e6:25d2:b74f:260a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:31:9ca8:517:5eec]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:49:473b:7e4:17e1]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:311b::575e:7001]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp
trojan://zbb@[2606:4700:8::2ba1:233b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:311c::277c:f16]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:d89e:4277:b261:b7f3:eb4c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:da:cbd6:9062:3e4a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@144.202.86.226:12001?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:e7:3:537d:e1c7:a2de:f4c3]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:a396:c6b3:64e:fa50:6a2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:c0da:1e7b:661b:6825]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:23ce:dfba:470c:4bb6:d7c7]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:57::15c8:45b4]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:3010:ce6a:48a6:93fb:74c5:b221]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjE2Ny1cdUQ4M0NcdURERkFcdUQ4M0NcdURERjggXHU3RjhFXHU1NkZEIENsb3VkRmxhcmVcdTgyODJcdTcwQjkiLA0KICAiYWRkIjogImlwLnNiIiwNCiAgInBvcnQiOiAiMjA4NiIsDQogICJpZCI6ICJlOWUzY2MxMy1kYjQ4LTRjYzEtOGMyNC03NjI2NDM5YTUzMzkiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogImlwMS4xNzg5MDM0Lnh5eiIsDQogICJwYXRoIjogImdpdGh1Yi5jb20vQWx2aW45OTk5IiwNCiAgInRscyI6ICIiLA0KICAic25pIjogImlwMS4xNzg5MDM0Lnh5eiIsDQogICJhbHBuIjogImgyIiwNCiAgImZwIjogImlvcyINCn0=
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@198.62.62.81:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:e7:3933:1474:da4d:2aaa:2ab5]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#w
trojan://zbb@[2606:4700:136::7d8c:3a30]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:e0:6ebb:de65:129:37b2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:b5de:5a34:934a:5f42:9f67]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#C
trojan://zbb@[2606:4700:e7:a2:7523:aabf:62bb:4d63]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:5f03:11c5:eb3e:b076:e83]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:804:5f40:d6ab:11a4]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjE1MS1cdUQ4M0NcdURGQzFSRUxBWS0xNzIuNjcuNzQuMTEyLTAzNDEiLA0KICAiYWRkIjogIjE3Mi42Ny43NC4xMTIiLA0KICAicG9ydCI6ICIyMDg2IiwNCiAgImlkIjogImU5ZTNjYzEzLWRiNDgtNGNjMS04YzI0LTc2MjY0MzlhNTMzOSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJhdXRvIiwNCiAgImhvc3QiOiAiaXAxMS5mcmVlZ3JhZGVseS54eXoiLA0KICAicGF0aCI6ICJnaXRodWIuY29tL0FsdmluOTk5OSIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICJpcDExLmZyZWVncmFkZWx5Lnh5eiIsDQogICJhbHBuIjogImh0dHAvMS4xIiwNCiAgImZwIjogImlvcyINCn0=
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@8.20.125.1:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:d::3119:7f38]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:0:eb24:fe71:d376:fb6a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:cf:271d:493d:255d:6857]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:3364:3536:fec4:7d28:18b4]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:3364:35af:fc5b:b51c:3b0]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:133::3bb0:1077]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:eb3d:5bea:dff9:9216:415e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:e0:1dd:799d:eb69:6612]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2606:4700:311b::575e:7001]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40War
trojan://zbb@[2606:4700:e7:70ed:33d5:31d0:dc67:f974]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:e0:1dd:79d8:7c57:f940]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:56:e079:71fa:4271:74fd]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:8cc:8b70:dafa:4bec]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:74:ca66:bb8b:6c94:766c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:8dd4::5b8:39e1]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:8de8::71b6:40fa]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:3112::4e9d:285]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:3119::1928:49cc]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:9a0c:9b92:47ad:e8e5:505c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:f3:6b94:df05:f4d0:c7d]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:976e::4a70:5b02]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:70ed:bc69:ed9a:cd75:c696]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:310e::4530:d2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:8ded::4178:177f]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:8dec::6769:52bf]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:8ddb::685e:7976]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:16::137a:6796]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:3116::7ae2:3585]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:ce:811f:6c41:8401:b85e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:9add::6e6f:7b8e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:a0::5244:6740]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjE4Ny1cdUQ4M0NcdURERkFcdUQ4M0NcdURERjggMTAsMTF8XHU3RjhFXHU1NkZENXxAcmlwYW9qaWVkaWFuIiwNCiAgImFkZCI6ICIxMDQuMjYuMC41NiIsDQogICJwb3J0IjogIjIwODYiLA0KICAiaWQiOiAiZTllM2NjMTMtZGI0OC00Y2MxLThjMjQtNzYyNjQzOWE1MzM5IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJpcDE0LmZyZWVncmFkZWx5Lnh5eiIsDQogICJwYXRoIjogImdpdGh1Yi5jb20vQWx2aW45OTk5IiwNCiAgInRscyI6ICIiLA0KICAic25pIjogImlwMTQuZnJlZWdyYWRlbHkueHl6IiwNCiAgImFscG4iOiAiaDMsaDIsaHR0cC8xLjEiLA0KICAiZnAiOiAicmFuZG9taXplZCINCn0=
trojan://zbb@[2606:4700:8dd7::1e23:4ae6]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjE1OS1cdUQ4M0NcdURERURcdUQ4M0NcdURERjAgXHU5OTk5XHU2RTJGIFx1NzUzNVx1OEJBRlx1NzZDOFx1NzlEMVx1NjcwOVx1OTY1MFx1NTE2Q1x1NTNGOCIsDQogICJhZGQiOiAiMjIwLjI0Ni41Ny4xNjEiLA0KICAicG9ydCI6ICIzMDA2OCIsDQogICJpZCI6ICIxY2JiOGYwNC1iMGNjLTQ1MjAtOGIxNy1lZDQxMmY0NTdiOWYiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIi8iLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiaDMsaDIsaHR0cC8xLjEiLA0KICAiZnAiOiAiY2hyb21lIg0KfQ==
trojan://zbb@[2606:4700:9a6d::117b:5514]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:3031::7bdd:26ba]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@218.102.12.37:9999?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#HK
trojan://zbb@[2606:4700:8d7d::7149:6fb0]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:8de8::6732:3fcd]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@172.247.129.92:7771?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:839d::5798:4b70]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:99ed::1045:29df]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:90de::3278:14b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:3113::38eb:1a42]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:9add::6e6f:7b8e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:311d::1e4f:3a6f]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:311d::33d0:616]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@207.90.239.107:18888?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:8dec::6769:52bf]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:99ec::6147:68f]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:0:83:f9b1:f67c:fe2e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:311b::575e:7001]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40War
trojan://zbb@[2606:4700:4::5faa:408b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:311f::b3c:4421]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:85d2::1554:a23]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:8d73::15a9:4357]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7::44fa:4b45:8539]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:8dd1::46eb:3ef2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:4406::1a53:5f10]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@219.76.13.164:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#HK
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@202.81.231.150:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#HK
trojan://zbb@[2606:4700:f4::734e:3aef]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjE3Mi00fGQqKioqKioqKipnLmNvbV8xICMyIiwNCiAgImFkZCI6ICIyMy4yMjcuMzguNiIsDQogICJwb3J0IjogIjIwODYiLA0KICAiaWQiOiAiMjllZWJiNjAtYjI3Yi00YTlkLWJiYTUtOTQ3NzYzZDkyMDVlIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJpcDAwNS4zMTk2NzcyLnh5eiIsDQogICJwYXRoIjogImdpdGh1Yi5jb20vQWx2aW45OTk5IiwNCiAgInRscyI6ICIiLA0KICAic25pIjogImlwMDA1LjMxOTY3NzIueHl6IiwNCiAgImFscG4iOiAiaDIsaHR0cC8xLjEiLA0KICAiZnAiOiAic2FmYXJpIg0KfQ==
trojan://zbb@[2606:4700:a0::55c1:4a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:9644::727e:7552]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:311a::600c:5e42]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:3111::3082:1293]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:9761::6379:14a3]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:8399::200b:cee]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:3121::55ce:5d84]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:3120::63c5:34ae]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:56::4999:677b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:9761::353c:30e7]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:3120::1747:2177]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2a06:98c1:3120::3fea:5b7f]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:56::6a06:4b8b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:3055::6325:6eee]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2a06:98c1:3121::4f27:160b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:f4::5f7a:332b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@104.19.32.166:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2a06:98c1:3120::36be:4a40]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@104.19.35.216:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2a06:98c1:3120::2ac0:b0d]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:91b5::186:73af]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2a06:98c1:3120::59fc:148a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@104.19.33.38:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2a06:98c1:3120::394d:3bfc]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2a06:98c1:3121::d07:18fd]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@110.12.241.155:27017?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#KR
trojan://zbb@[2606:4700:3037::4233:7c65]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:3032::4ed5:28e2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40War
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@175.194.225.225:16004?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#KR
trojan://zbb@[2606:4700:a9::3fbc:3ed1]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@69.84.182.143:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:3037::6118:3cb2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:89d5:c0b9:51cd:dde2:c634]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2606:4700:3031::7bdd:26ba]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@69.84.182.200:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:82:8ebd:da50:d63e:26bf]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2606:4700:25::1768:421b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@132.226.230.124:4434?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#KR
trojan://zbb@[2606:4700:27::1f8b:68f3]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:27::33e:7533]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:3030::4ef8:a68]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#q
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@219.76.13.169:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#HK
trojan://zbb@[2606:4700:24::74bd:7fbf]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp
trojan://zbb@[2606:4700:3033::43e3:5737]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:28::257c:4851]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:eaa1:8b07:6fe1:cf27:c56d]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:b176:fea7:ded6:dd6:3874]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:89d5:c0eb:8cab:36e6:6af9]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2606:4700:a9::31e0:2129]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:29::3e53:3f63]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@198.62.62.252:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@69.84.182.78:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@198.62.62.205:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@210.91.8.234:30042?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#KR
trojan://zbb@[2606:4700:131::1aa6:417]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:16:70b5:d0f:f8a7:9d87]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:3037::4233:7c65]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@69.84.182.171:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@198.62.62.152:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@166.1.221.30:18888?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:3037::6118:3cb2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:e3c5:8c6f:10:7ca1:4eda]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:13f::3bcc:2f39]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:a::e42:4172]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:9b87:6372:b3e6:8faa:416b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:804:5f8b:ec8f:a5b9]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:8e6:25d2:b725:5be2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:3008::5ed6:3299]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:b5de:5a34:13be:3d2e:dd31]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#C
trojan://zbb@[2606:4700:3032::4ed5:28e2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40War
trojan://zbb@[2606:4700:e7:9b87:630b:64a2:a498:863f]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:bfe4:d36b:10fb:9593]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:3109::8d:3ff9]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@219.76.13.183:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#HK
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:eaa1:8b07:6fea:721c:4983]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2606:4700:e7:0:61:6d45:ce20:e277]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:e325:2789:1c20:4ee4:6c4a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:53::6f3f:13a2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp
trojan://zbb@[2606:4700:e7:70ed:333d:728e:288e:6b49]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:3102::437e:7c9]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@69.84.182.247:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:e7:0:5f:8857:8a3e:adc3]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:16:70b5:e88a:a9d2:7f5a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2a06:98c1:3102::497:3818]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:13b::1231:e7e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:e0:8a41:524a:6e45:9b4c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:0:da:71e7:ff90:916e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:8e6:2dee:1096:2706]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:38:ceda:d026:16f6]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:f::7f90:5c7d]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:13d::52c:55d5]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2a06:98c1:310a::6a7:4afa]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:53::6f3f:13a2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp
trojan://zbb@[2606:4700:e7:d89e:4277:8413:7b2a:b339]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:106::4151:4efd]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7::4497:ae58:5554]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:0:f549:e395:873a:75f2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#t
trojan://zbb@[2606:4700:e7:23ce:dfba:3177:9c32:bfda]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:cf:2702:44f1:fe5d:d20d]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:b5de:5a34:934a:5f42:9f67]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:3113::324e:31c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:ebcb:a9b4:2710:7e33:a13]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:136::51b6:7ef]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:13f::3bcc:2f39]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:3119::1177:2f3e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:e0::7e5e:2122]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:310c::ac42:2c82]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:f943:44e3:d29f:1b3e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:ff97:ed89:2de5:c7d0]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:133::593c:682c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@69.84.182.233:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2a06:98c1:310a::2ba8:3e6c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:e3d9:592f:78b3:1c92:6036]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:0:1eff:8905:2713:c587]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:3df4:a606:b7bc:ba19:a527]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:fdda:c4e:7a7d:3fee:841]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2a06:98c1:310e::4530:d2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:b5de:5a34:934a:5fcc:f4ee]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#C
trojan://zbb@[2606:4700:e7:0:85:6ca6:702:765e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#C
trojan://zbb@[2606:4700:4::1977:4168]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:3117::229d:6c02]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:4c15:171b:8511:32d3]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:156a:7a62:618b:38ab:1ac4]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:bfe2:cd9c:fb88:2d18]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:65e9:4af8:8a88:2e3:ba2d]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:131::77a0:6785]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@198.62.62.254:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@69.84.182.27:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@198.62.62.114:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:8974:426a:57bc:4c1d:dd4f]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2606:4700:e7:cdb5:3d16:1ed9:9c81:e43e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:59::18bb:55cd]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#5
trojan://zbb@[2606:4700:e7:eb50:c03:909b:ef83:7522]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:4406::1c9f:76c4]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:3df4:5ef6:7971:2d7d:d4a7]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:3df4:5e65:2733:975e:21f6]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:4::55d:5470]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:133::1407:72ab]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:e0:8a84:33f8:dfa0:4865]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMC
trojan://zbb@[2606:4700:3022::3d3f:15ff]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:4::11d5:6a3]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:b1:af6e:60b9:93ee:cd41]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:f1:e0aa:ebed:668c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:f943:44e3:8af8:f528]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:f98d:294a:3935:a454]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:fb:7b83:57b6:2920]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:bfe4:d356:135e:5bd8]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjEzMi1cdUQ4M0NcdURGQzFSRUxBWS0xMDQuMjYuNy4xMzItMDIyMCIsDQogICJhZGQiOiAiMTA0LjI2LjcuMTMyIiwNCiAgInBvcnQiOiAiMjA4NiIsDQogICJpZCI6ICJlOWUzY2MxMy1kYjQ4LTRjYzEtOGMyNC03NjI2NDM5YTUzMzkiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAiYXV0byIsDQogICJob3N0IjogImlwMi4xNDU3MjMwLnh5eiIsDQogICJwYXRoIjogImdpdGh1Yi5jb20vQWx2aW45OTk5IiwNCiAgInRscyI6ICIiLA0KICAic25pIjogImlwMi4xNDU3MjMwLnh5eiIsDQogICJhbHBuIjogImgzLGgyLGh0dHAvMS4xIiwNCiAgImZwIjogImNocm9tZSINCn0=
trojan://zbb@[2606:4700:4407::3e45:387a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:ce:3680:28fa:3e11:d55b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:eb50:c15:6dd1:7f0e:817c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:e3d9:592f:d5ae:fc95:e93c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:0:61:6c77:d383:c44d]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:3933:dfc6:3196:fc7b:7b6e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:4::46d9:6e9d]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:f3:6bec:20c8:7c3c:67c3]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:4406::302d:7ea1]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:440f::7524:2866]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:6::6e49:4be7]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:e0:8a84:33f8:dfa0:4865]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:3027::7bad:7fa2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:e0:1dd:79d8:7c57:f940]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2606:4700:3112::1eeb:4c1c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:3d:79ea:f6e:275b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:154d:b36f:4aaf:861a:28b1]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:4c3a:2cd9:c016:632f:9433]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:4cc2:54da:df64:841f:a1cd]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:804:5f40:7699:7d9d]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:8e6:2d51:ad0b:8b65]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2400:cb00:2049::3fdd:5032]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:1d::a4:2840]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:300b::3901:15be]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:b1d2:b3c6:f1c0:1098:a5fe]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2606:4700:e7:ebcb:a9b4:b88c:eb0a:7006]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:0:30:9ff2:e521:6dd3]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:3933:df04:3924:ba2d:c22f]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:4408::4e77:7f8f]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:f3:6bec:20c8:7c22:5b8d]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:9::58d9:1238]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:9b87:632a:cec8:b05b:b466]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:4c3a:f268:4ead:51d4:c769]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:61c3:964a:5826:267:ecb5]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:1a::687e:6951]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:3002::7fa8:72ed]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7::f12f:3a50]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:3933:df04:3924:ee2d:62c5]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:0:1e1b:521d:3189:3ed5]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:32fe:b29:97e8:49a6:a8ba]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:300a::6f51:39e7]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:e0:8a17:3c3a:9e0e:81ef]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e6::7c79:49]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:e0:8a41:524a:6e45:9b4c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMC
trojan://zbb@[2606:4700:53::977:4199]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:a396:f04f:5670:d77d:9f7b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:9b87:6372:b32d:fa40:3e39]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:88:85ff:eba2:5ce1:e86a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@69.84.182.172:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2a06:98c1:3109::dd4:7bc7]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:3929:8106:af94:fec1:43bd]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:3034::7a9a:3659]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:3033::49e7:23f7]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:1c:6789:d407:9261]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2803:f800:50::1dfd:ee2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:0:2456:e059:bba4:5ffb]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:3037::4233:7c65]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:fdda:c4e:7ae7:743d:bb7]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:618e:44b8:ca:168d:cb5c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:300b::1cdb:2a09]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:b5:d5d3:b0bd:5bce]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7::30:26f1:12c9]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:154d:b33d:391b:ecb0:ca8c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:310c::660e:2e48]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:59:ccd6:d97f:af76:51db]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:f4:757e:eae4:e4df:ac]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:d89e:4253:427d:4de7:444]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:b9c4:2d08:b9b8:8074]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:65e9:4af8:bc5:181d:4368]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2400:cb00:2049::f0c:7185]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:133::7947:3f7a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjE4NS1cdUQ4M0NcdURERkFcdUQ4M0NcdURERjggXHU3RjhFXHU1NkZEIENsb3VkRmxhcmVcdTgyODJcdTcwQjkiLA0KICAiYWRkIjogIjEwNC4yNi41LjEyMyIsDQogICJwb3J0IjogIjIwODYiLA0KICAiaWQiOiAiZTllM2NjMTMtZGI0OC00Y2MxLThjMjQtNzYyNjQzOWE1MzM5IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJpcDEuMTc4OTAzNC54eXoiLA0KICAicGF0aCI6ICJnaXRodWIuY29tL0FsdmluOTk5OSIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICJpcDEuMTc4OTAzNC54eXoiLA0KICAiYWxwbiI6ICJoMixodHRwLzEuMSIsDQogICJmcCI6ICJhbmRyb2lkIg0KfQ==
trojan://zbb@[2606:4700:e7:3215:8666:ff37:3323:cb12]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:133::6ff7:40c8]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:f::e4c:7f93]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:0:4c15:171b:85f8:2a56]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:8e6:25d2:b74f:260a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:31:9ca8:517:5eec]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:49:473b:7e4:17e1]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:311b::575e:7001]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp
trojan://zbb@[2606:4700:8::2ba1:233b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:311c::277c:f16]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:d89e:4277:b261:b7f3:eb4c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:0:da:cbd6:9062:3e4a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@144.202.86.226:12001?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:e7:3:537d:e1c7:a2de:f4c3]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:a396:c6b3:64e:fa50:6a2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:c0da:1e7b:661b:6825]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:23ce:dfba:470c:4bb6:d7c7]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:57::15c8:45b4]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:3010:ce6a:48a6:93fb:74c5:b221]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjE2Ny1cdUQ4M0NcdURERkFcdUQ4M0NcdURERjggXHU3RjhFXHU1NkZEIENsb3VkRmxhcmVcdTgyODJcdTcwQjkiLA0KICAiYWRkIjogImlwLnNiIiwNCiAgInBvcnQiOiAiMjA4NiIsDQogICJpZCI6ICJlOWUzY2MxMy1kYjQ4LTRjYzEtOGMyNC03NjI2NDM5YTUzMzkiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogImlwMS4xNzg5MDM0Lnh5eiIsDQogICJwYXRoIjogImdpdGh1Yi5jb20vQWx2aW45OTk5IiwNCiAgInRscyI6ICIiLA0KICAic25pIjogImlwMS4xNzg5MDM0Lnh5eiIsDQogICJhbHBuIjogImgyIiwNCiAgImZwIjogImlvcyINCn0=
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@198.62.62.81:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:e7:3933:1474:da4d:2aaa:2ab5]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#w
trojan://zbb@[2606:4700:136::7d8c:3a30]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:e0:6ebb:de65:129:37b2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:b5de:5a34:934a:5f42:9f67]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#C
trojan://zbb@[2606:4700:e7:a2:7523:aabf:62bb:4d63]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:5f03:11c5:eb3e:b076:e83]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:804:5f40:d6ab:11a4]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjE1MS1cdUQ4M0NcdURGQzFSRUxBWS0xNzIuNjcuNzQuMTEyLTAzNDEiLA0KICAiYWRkIjogIjE3Mi42Ny43NC4xMTIiLA0KICAicG9ydCI6ICIyMDg2IiwNCiAgImlkIjogImU5ZTNjYzEzLWRiNDgtNGNjMS04YzI0LTc2MjY0MzlhNTMzOSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJhdXRvIiwNCiAgImhvc3QiOiAiaXAxMS5mcmVlZ3JhZGVseS54eXoiLA0KICAicGF0aCI6ICJnaXRodWIuY29tL0FsdmluOTk5OSIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICJpcDExLmZyZWVncmFkZWx5Lnh5eiIsDQogICJhbHBuIjogImh0dHAvMS4xIiwNCiAgImZwIjogImlvcyINCn0=
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@8.20.125.1:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:d::3119:7f38]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:0:eb24:fe71:d376:fb6a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:cf:271d:493d:255d:6857]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:3364:3536:fec4:7d28:18b4]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:3364:35af:fc5b:b51c:3b0]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:133::3bb0:1077]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:eb3d:5bea:dff9:9216:415e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:e0:1dd:799d:eb69:6612]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC
trojan://zbb@[2606:4700:311b::575e:7001]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40War
trojan://zbb@[2606:4700:e7:70ed:33d5:31d0:dc67:f974]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:e0:1dd:79d8:7c57:f940]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:e7:56:e079:71fa:4271:74fd]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:6588:8cc:8b70:dafa:4bec]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:74:ca66:bb8b:6c94:766c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:8dd4::5b8:39e1]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:8de8::71b6:40fa]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:3112::4e9d:285]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:3119::1928:49cc]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:9a0c:9b92:47ad:e8e5:505c]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:f3:6b94:df05:f4d0:c7d]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:976e::4a70:5b02]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7:70ed:bc69:ed9a:cd75:c696]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:310e::4530:d2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:8ded::4178:177f]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:8dec::6769:52bf]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:8ddb::685e:7976]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:16::137a:6796]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:3116::7ae2:3585]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:ce:811f:6c41:8401:b85e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:9add::6e6f:7b8e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:a0::5244:6740]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjE4Ny1cdUQ4M0NcdURERkFcdUQ4M0NcdURERjggMTAsMTF8XHU3RjhFXHU1NkZENXxAcmlwYW9qaWVkaWFuIiwNCiAgImFkZCI6ICIxMDQuMjYuMC41NiIsDQogICJwb3J0IjogIjIwODYiLA0KICAiaWQiOiAiZTllM2NjMTMtZGI0OC00Y2MxLThjMjQtNzYyNjQzOWE1MzM5IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJpcDE0LmZyZWVncmFkZWx5Lnh5eiIsDQogICJwYXRoIjogImdpdGh1Yi5jb20vQWx2aW45OTk5IiwNCiAgInRscyI6ICIiLA0KICAic25pIjogImlwMTQuZnJlZWdyYWRlbHkueHl6IiwNCiAgImFscG4iOiAiaDMsaDIsaHR0cC8xLjEiLA0KICAiZnAiOiAicmFuZG9taXplZCINCn0=
trojan://zbb@[2606:4700:8dd7::1e23:4ae6]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjE1OS1cdUQ4M0NcdURERURcdUQ4M0NcdURERjAgXHU5OTk5XHU2RTJGIFx1NzUzNVx1OEJBRlx1NzZDOFx1NzlEMVx1NjcwOVx1OTY1MFx1NTE2Q1x1NTNGOCIsDQogICJhZGQiOiAiMjIwLjI0Ni41Ny4xNjEiLA0KICAicG9ydCI6ICIzMDA2OCIsDQogICJpZCI6ICIxY2JiOGYwNC1iMGNjLTQ1MjAtOGIxNy1lZDQxMmY0NTdiOWYiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIi8iLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiaDMsaDIsaHR0cC8xLjEiLA0KICAiZnAiOiAiY2hyb21lIg0KfQ==
trojan://zbb@[2606:4700:9a6d::117b:5514]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:3031::7bdd:26ba]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@218.102.12.37:9999?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#HK
trojan://zbb@[2606:4700:8d7d::7149:6fb0]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:8de8::6732:3fcd]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@172.247.129.92:7771?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:839d::5798:4b70]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:99ed::1045:29df]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:90de::3278:14b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:3113::38eb:1a42]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:9add::6e6f:7b8e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:311d::1e4f:3a6f]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:311d::33d0:616]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@207.90.239.107:18888?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:8dec::6769:52bf]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:99ec::6147:68f]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:0:83:f9b1:f67c:fe2e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:311b::575e:7001]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40War
trojan://zbb@[2606:4700:4::5faa:408b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:311f::b3c:4421]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:85d2::1554:a23]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:8d73::15a9:4357]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:e7::44fa:4b45:8539]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:8dd1::46eb:3ef2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:4406::1a53:5f10]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@219.76.13.164:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#HK
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@202.81.231.150:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#HK
trojan://zbb@[2606:4700:f4::734e:3aef]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjE3Mi00fGQqKioqKioqKipnLmNvbV8xICMyIiwNCiAgImFkZCI6ICIyMy4yMjcuMzguNiIsDQogICJwb3J0IjogIjIwODYiLA0KICAiaWQiOiAiMjllZWJiNjAtYjI3Yi00YTlkLWJiYTUtOTQ3NzYzZDkyMDVlIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJpcDAwNS4zMTk2NzcyLnh5eiIsDQogICJwYXRoIjogImdpdGh1Yi5jb20vQWx2aW45OTk5IiwNCiAgInRscyI6ICIiLA0KICAic25pIjogImlwMDA1LjMxOTY3NzIueHl6IiwNCiAgImFscG4iOiAiaDIsaHR0cC8xLjEiLA0KICAiZnAiOiAic2FmYXJpIg0KfQ==
trojan://zbb@[2606:4700:a0::55c1:4a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:9644::727e:7552]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:311a::600c:5e42]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:3111::3082:1293]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA


`

let urls = [];
let subconverter = "SUBAPI.fxxk.dedyn.io"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		if( subconverter.includes("http://") ){
			subconverter = subconverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subconverter = subconverter.split("//")[1] || subconverter;
		}
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); 
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now())/timestamp * total * 1099511627776 )/2);
		total = total * 1099511627776 ;
		let expire= Math.floor(timestamp / 1000) ;
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
		let 自建节点 ="";
		let 订阅链接 ="";
		for (let x of 重新汇总所有链接) {
			if (x.toLowerCase().startsWith('http')) {
				订阅链接 += x + '\n';
			} else {
				自建节点 += x + '\n';
			}
		}
		MainData = 自建节点;
		urls = await ADD(订阅链接);

		if ( !(token == mytoken || token == fakeToken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
			if (envKey) {
				const URLs = await ADD(env[envKey]);
				const URL = URLs[Math.floor(Math.random() * URLs.length)];
				return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
			}
			return new Response(await nginx(), { 
				status: 200 ,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			let 订阅格式 = 'base64';
			if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())){
				订阅格式 = 'base64';
			} else if (userAgent.includes('clash') || ( url.searchParams.has('clash') && !userAgent.includes('subconverter'))){
				订阅格式 = 'clash';
			} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ( (url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))){
				订阅格式 = 'singbox';
			} else if (userAgent.includes('surge') || ( url.searchParams.has('surge') && !userAgent.includes('subconverter'))){
				订阅格式 = 'surge';
			}

			let subconverterUrl ;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;

			// 初始化缓存
			const cache = caches.default;

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('clash')){
				追加UA = 'clash';
			} else if(url.searchParams.has('singbox')){
				追加UA = 'singbox';
			} else if(url.searchParams.has('surge')){
				追加UA = 'surge';
			}
			
			try {
				const responses = await Promise.all(urls.map(async url => {
					const cacheKey = new Request(url);
					
					try {
						// 设置2秒超时
						const controller = new AbortController();
						const timeoutId = setTimeout(() => controller.abort(), 2000);
	
						const response = await fetch(url, {
							method: 'get',
							headers: {
								'Accept': 'text/html,application/xhtml+xml,application/xml;',
								'User-Agent': `${追加UA} cmliu/CF-Workers-SUB ${userAgentHeader}`
							},
							signal: controller.signal
						});
	
						clearTimeout(timeoutId);
	
						if (response.ok) {
							const content = await response.text();
							
							// 请求成功，写入缓存，设置24小时的缓存时间
							const cacheResponse = new Response(content, {
								headers: {
									...response.headers,
									'Cache-Control': `public, max-age=${cacheTTL * 60 * 60}`
								}
							});
							await cache.put(cacheKey, cacheResponse);
							console.log(`更新缓存 ${url}:\n${content.slice(0, 10)}...`);
							if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups')) {
								// Clash 配置
								订阅转换URL += "|" + url;
								return ""; // 返回空字符串，因为这种情况下我们不需要内容
							} else if (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
								// Singbox 配置
								订阅转换URL += "|" + url;
								return ""; // 返回空字符串，因为这种情况下我们不需要内容
							} else {
								return content;
							}
						} else {
							throw new Error('请求失败');
						}
					} catch (error) {
						// 请求失败或超时，尝试从缓存读取
						const cachedResponse = await cache.match(cacheKey);
						if (cachedResponse) {
							const cachedContent = await cachedResponse.text();
							console.log(`使用缓存内容 ${url}:\n${cachedContent.slice(0, 10)}...`);
							return cachedResponse.text();
						} else {
							console.log(`无缓存可用 ${url}`);
							return ""; // 缓存中也没有，返回空字符串
						}
					}
				}));	
			
				for (const response of responses) {
					if (response) {
						req_data += base64Decode(response) + '\n';
					}
				}
			
			} catch (error) {
				console.error('处理 URL 时发生错误：', error);
			}
			if(env.WARP) 订阅转换URL += "|" + (await ADD(env.WARP)).join("|");
			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			const text = String.fromCharCode.apply(null, encodedData);
			
			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);
			
			const base64Data = btoa(result);

			if (订阅格式 == 'base64' || token == fakeToken){
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			} else if (订阅格式 == 'clash'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=surge&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			}
			//console.log(订阅转换URL);
			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					return new Response(base64Data ,{
						headers: { 
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": `${SUBUpdateTime}`,
							"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
						}
					});
					//throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				let subconverterContent = await subconverterResponse.text();
				if (订阅格式 == 'clash') subconverterContent =await clashFix(subconverterContent);
				return new Response(subconverterContent, {
					headers: { 
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,

					},
				});
			} catch (error) {
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text ;
}

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();
  
	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
	return secondHex.toLowerCase();
}

function clashFix(content) {
	if(content.includes('wireguard') && !content.includes('remote-dns-resolve')){
		let lines;
		if (content.includes('\r\n')){
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}
	
		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}
