
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
hysteria2://nh1geWLH5AsorZso@91.185.190.159:60282/?sni=www.bing.com&alpn=h3&insecure=1#000000%201
vless://0f06c712-d346-401b-a959-7577a9448142@w.b01.dns-dynamic.net:443?encryption=none&security=tls&sni=w.b01.dns-dynamic.net&fp=randomized&type=ws&host=w.b01.dns-dynamic.net&path=%2F%3Fed%3D2048#000000%20w.b
trojan://zbb@[2606:4700:e7:0:f943:44e3:d29f:1b3e]:2096?security=tls&sni=tr7.zbb07.us.kg&alpn=http%2F1.1&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2FproxyIP%3D146.70.175.102#0000000007%20SG
trojan://zbb@[2606:4700:e7:0:f98d:294a:3935:a454]:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#0000000009%20jp
vless://bae36924-69da-4065-bc92-de38d9b041cd@[2606:4700:4404::5c42:34]:443?encryption=none&security=tls&sni=ziz.zcr07.us.kg&fp=randomized&type=ws&host=ziz.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.09#000000005%20V%27
vless://b9b4bbd0-2579-468e-8cb3-c86bc0953036@[2606:4700:e7::30:26f1:12c9]:2083?encryption=none&security=tls&sni=notls.zcr07.us.kg&fp=random&type=ws&host=notls.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#000000006%20V.
trojan://zbb@[2606:4700:e7:6588:804:5f40:7699:7d9d]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#000000007%20T
trojan://zbb@[2606:4700:e7:6588:bfe4:d36b:10fb:9593]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#000000008%20T
trojan://zbb@[2606:4700:e7:6588:8e6:2d51:ad0b:8b65]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#000000009%20T
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:e7:0:da:71e7:ff90:916e]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#00000002%20V
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:e7:0:2c92:15c4:9f7c:d93e]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#00000002%20V%27
trojan://zbb@[2606:4700:e7:65e9:4af8:8a88:2e3:ba2d]:443?security=tls&sni=tr3.zcr07.us.kg&fp=random&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#00000003%20T
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:a0::53f6:2352]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#00000003%20V.
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:106::4151:4efd]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#00000003%20V.
trojan://zbb@[2606:4700:e7:6588:ff97:ed89:2de5:c7d0]:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#00000004%20T
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:8ded::1068:3cdf]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#00000004%20V.
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:133::593c:682c]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#00000004%20V.
trojan://zbb@[2606:4700:a0::221b:7cc8]:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#00000005%20T
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:e7:a396:c6b3:64e:fa50:6a2]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=random&type=ws&host=x6.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.103#00000005%20V
trojan://zbb@[2606:4700:3036:7cb6:af:aba:d98c:7e36]:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#00000006%20T
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:9767::7289:76a]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#00000006%20V
trojan://zbb@[2606:4700:e7:a396:f04f:5670:d77d:9f7b]:2053?security=tls&sni=tr7.zbb07.us.kg&fp=random&type=ws&host=tr7.zbb07.us.kg&path=%2FproxyIP%3D146.70.175.104#00000007%20T
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:131::77a0:6785]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#00000007%20V.
trojan://zbb@[2606:4700:e7:0:f943:44e3:8af8:f528]:2087?security=tls&sni=tr7.zbb07.us.kg&alpn=http%2F1.1&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#00000008%20T
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:1f::5595:5421]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#00000008%20V
trojan://zbb@[2a06:98c1:3120::2ac0:b0d]:443?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2F%3Fed%3D2560#00000009%20T
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:2d::76af:6bdf]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#00000009%20V.
vless://5e0a98c8-282a-43ac-a2dd-c61db56f4e73@[2606:4700:3113::38eb:1a42]:443?encryption=none&security=tls&sni=cc.zcr07.us.kg&fp=random&type=ws&host=cc.zcr07.us.kg&path=%2FproxyIP%3Dproxyip.jp.fxxk.dedyn.io#0000002%20V%27
trojan://zbb@[2606:4700:e7:f4:757e:eae4:e4df:ac]:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#0000003%20T
trojan://zbb@[2606:4700:e7:6588:c0da:1e7b:661b:6825]:8443?security=tls&sni=yg2.zcr07.myfw.us&fp=random&type=ws&host=yg2.zcr07.myfw.us&path=%2F%3Fed%3D2560#000003%20T
vless://14e3a0f4-96f0-49b8-b4ea-7c26ef211156@[2606:4700:57::3196:697]:2053?encryption=none&security=tls&sni=BpB.zcr07.coM.mp&fp=randomized&type=ws&host=bPB.ZCR07.com.mp&path=%2FproxyIP%3D146.70.175.07#000003%20V%27
trojan://zbb@[2606:4700:5c::699b:5ccb]:443?security=tls&sni=2.zcr07.filegear-sg.me&fp=random&type=ws&host=2.zcr07.filegear-sg.me&path=%2FproxyIP%3D47.243.107.148#000004%20T
trojan://zbb@[2606:4700:e7:3364:35af:fc5b:b51c:3b0]:443?security=tls&sni=tr2.zcr07.us.kg&fp=random&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.104#000005%20T
trojan://zbb@[2606:4700:e7:0:4c15:171b:8511:32d3]:443?security=tls&sni=2.zcr07.filegear-sg.me&fp=random&type=ws&host=2.zcr07.filegear-sg.me&path=%2FproxyIP%3D146.70.175.115#000006%20T
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:27::33e:7533]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#000006%20V%27
trojan://zbb@[2606:4700:51::ca0:13b8]:8443?security=tls&sni=yg42.zbb96.dynv6.net&fp=random&type=ws&host=yg42.zbb96.dynv6.net&path=%2FproxyIP%3D8.210.92.27#000007%20T
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:e7:618e:44b8:ca:168d:cb5c]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#000007%20V
trojan://zbb@[2606:4700:e7::3425:6793:1ac7]:443?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.104#000008%20T
trojan://zbb@[2606:4700:8ca3::3603:3b54]:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2F%3Fed%3D2560#000009%20T
trojan://zbb@[2606:4700:4::1977:4168]:443?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2F%3Fed%3D2560#00001%20T
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:e7:33b1:2d7a:113b:d0f8:a1ca]:443?encryption=none&security=tls&sni=xb.zcr07.findhere.org&fp=random&type=ws&host=xb.zcr07.findhere.org&path=%2FproxyIP%3D146.70.175.103#00001%20V
trojan://zbb@[2606:4700:e7:6588:8e6:25d2:b74f:260a]:443?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2F%3Fed%3D2560#00002%20T
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@[2606:4700:3036:c1:ba3a:69b:ddd3:8963]:443?encryption=none&security=tls&sni=Bp.Zcr07.FiNDheRE.org&fp=random&type=ws&host=Bp.Zcr07.FiNDheRE.org&path=%2FproxyIP%3D2606%3A4700%3A%3A#00003%20Fr
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:1a::687e:6951]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=twitterfreecodes#00003%20V
trojan://zbb@[2a06:98c1:3109::8d:3ff9]:443?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2F%3Fed%3D2560#00004%20T
trojan://zbb@[2606:4700:1d::a4:2840]:2087?security=tls&sni=tr2.zcr07.us.kg&fp=random&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#00005%20T
vless://37691131-db68-49bc-b1bb-840277c54390@[2a06:98c1:56::55d2:6929]:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3D146.70.175.116#00005%20V
vless://0c96d302-076e-4e46-a5b1-4e3a523beb8b@www.gov.ua:443?encryption=none&security=tls&sni=kjg.zbb07.us.kg&fp=random&type=ws&host=kjg.zbb07.us.kg&path=%2FproxyIP%3D2606%3A4700%3A%3A#00007%20hhk
trojan://zbb@[2606:4700:a0::578:18d2]:443?security=tls&sni=tr2.zcr07.us.kg&fp=random&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#00007%20T
vless://5e0a98c8-282a-43ac-a2dd-c61db56f4e73@[2606:4700:53::977:4199]:443?encryption=none&security=tls&sni=cc.zcr07.cloudns.biz&alpn=http%2F1.1&fp=random&type=ws&host=cc.zcr07.cloudns.biz&path=%2FproxyIP%3D146.70.175.175#00007%20V
trojan://zbb@[2606:4700:300b::1cdb:2a09]:443?security=tls&sni=tr2.zcr07.us.kg&fp=random&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#00008%20T
vless://b88fc8b9-ae2a-45ff-9d79-6fc30e94738e@[2606:4700:a0::55c1:4a]:443?encryption=none&security=tls&sni=303.zzzzz.dns-dynamic.net&fp=random&type=ws&host=303.zzzzz.dns-dynamic.net&path=bestproxy.onecf.eu.org#00009%20V%27
trojan://zbb@[2606:4700:e7:6588:8e6:2dee:1096:2706]:443?security=tls&sni=vm.zcr07.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=vm.zcr07.filegear-sg.me&path=%2FproxyIP%3D146.70.175.102#0001%20T
trojan://zbb@pardazeshvpn-tg20.pages.dev:8443?security=tls&sni=yg3.zcr07.rr.nu&fp=random&type=ws&host=yg3.zcr07.rr.nu&path=%2FproxyIP%3D146.70.175.104#0002%20T
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:e7:154d:b36f:4aaf:861a:28b1]:2053?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3D146.70.175.100#0002%20V
trojan://zbb@[2606:4700:e7:0:4c15:171b:85f8:2a56]:443?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.103#0003%20T
vless://37691131-db68-49bc-b1bb-840277c54390@[2400:cb00:2049::f0c:7185]:443?encryption=none&security=tls&sni=xb.zcr07.rr.nu&fp=random&type=ws&host=xb.zcr07.rr.nu&path=%2FproxyIP%3D146.70.175.102#0003%20V
trojan://zbb@[2606:4700:e7:6588:bfe2:cd9c:fb88:2d18]:443?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.101#0004%20T
trojan://zbb@edtunnel-dgp.pages.dev:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#0005%20T
trojan://zbb@[2606:4700:e7:4c3a:2cd9:c016:632f:9433]:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D192.9.177.204#0006%20T
trojan://zbb@[2606:4700:4406::1a53:5f10]:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.104#0008%20T
trojan://zbb@[2606:4700:e7:0:fb:7b83:57b6:2920]:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.103#0009%20T
trojan://zbb@[2606:4700:f4::5f7a:332b]:443?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2F%3Fed%3D2560#001%20T
vless://b9b4bbd0-2579-468e-8cb3-c86bc0953036@[2606:4700:9644::727e:7552]:443?encryption=none&security=tls&sni=notls.zcr07.us.kg&fp=random&type=ws&host=notls.zcr07.us.kg&path=%2F%3Fed%3D2560#001%20V.
trojan://zbb@[2606:4700:e7:9a0c:9b92:47ad:e8e5:505c]:2096?security=tls&sni=tr2.zcr07.us.kg&fp=random&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.101#002%20T
vless://b9b4bbd0-2579-468e-8cb3-c86bc0953036@[2606:4700:133::3bb0:1077]:2053?encryption=none&security=tls&sni=notls.zcr07.us.kg&fp=random&type=ws&host=notls.zcr07.us.kg&path=%2F%3Fed%3D2560#002%20V.
trojan://zbb@[2606:4700:e7:d89e:4277:b261:b7f3:eb4c]:443?security=tls&sni=tr2.zcr07.us.kg&fp=random&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.102#003%20T
vless://b9b4bbd0-2579-468e-8cb3-c86bc0953036@69.84.182.78:2053?encryption=none&security=tls&sni=notls.zcr07.us.kg&fp=random&type=ws&host=notls.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.177#003%20V
trojan://zbb@[2606:4700:e7::29:1c72:d0dc]:2053?security=tls&sni=tr2.zcr07.us.kg&fp=random&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.103#004%20T
vless://b9b4bbd0-2579-468e-8cb3-c86bc0953036@[2606:4700:839b::5e71:6be6]:2053?encryption=none&security=tls&sni=notls.zcr07.us.kg&fp=random&type=ws&host=notls.zcr07.us.kg&path=%2F%3Fed%3D2560#004%20V
trojan://zbb@[2606:4700:e7:d89e:4253:427d:4de7:444]:2053?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.103#005%20T
trojan://zbb@[2606:4700:311c::277c:f16]:2087?security=tls&sni=tr2.zcr07.us.kg&fp=random&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#006%20T
trojan://zbb@[2606:4700:e7:d89e:4277:8413:7b2a:b339]:2053?security=tls&sni=tr2.zcr07.us.kg&fp=random&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#007%20T
vless://5e0a98c8-282a-43ac-a2dd-c61db56f4e73@[2606:4700:310c::ac42:2c82]:2096?encryption=none&security=tls&sni=cc.zcr07.us.kg&fp=random&type=ws&host=cc.zcr07.us.kg&path=%2F%3Fend%3DTG%E9%A2%91%E9%81%93%40warp_key#007%20V
trojan://zbb@[2606:4700:e7:61c3:964a:5826:267:ecb5]:2087?security=tls&sni=tr2.zcr07.us.kg&fp=random&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#008%20T
trojan://zbb@[2606:4700:e7:0:b9c4:2d08:b9b8:8074]:2053?security=tls&sni=tr2.zcr07.us.kg&fp=random&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.100#009%20T
vless://c62c1bd7-1fa0-4528-b637-20ac8b8abedd@[2606:4700:e7:b1:af6e:60b9:93ee:cd41]:443?encryption=none&security=tls&sni=1.zbb07.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=1.zbb07.filegear-sg.me&path=%2F%3Fproxyip%3Dproxyip.sg.fxxk.dedyn.io#009%20V
trojan://zbb@[2606:4700:e7:56:e079:71fa:4271:74fd]:8443?security=tls&sni=tr2.zcr07.us.kg&fp=random&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.100#01%20T
trojan://trojan@[2606:4700:3036:e757:e747:620:e88b:bdd]:443?security=tls&sni=ygt.z07.rr.nu&fp=randomized&type=ws&host=ygt.z07.rr.nu&path=%2F%3Fed%3D2560#01x
trojan://zbb@[2606:4700:e7:70ed:333d:728e:288e:6b49]:2083?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2F%3Fed%3D2560#02%20T
vless://b9b4bbd0-2579-468e-8cb3-c86bc0953036@[2606:4700:e6::298d:3d52]:2083?encryption=none&security=tls&sni=notls.zcr07.us.kg&fp=random&type=ws&host=notls.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#02x.
trojan://zbb@[2606:4700:e7:70ed:bc69:ed9a:cd75:c696]:443?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.122#03%20T
vless://b88fc8b9-ae2a-45ff-9d79-6fc30e94738e@[2606:4700:e7:156a:7a62:618b:38ab:1ac4]:443?encryption=none&security=tls&sni=303.zzzzz.dns-dynamic.net&fp=random&type=ws&host=303.zzzzz.dns-dynamic.net&path=%2FproxyIP%3D146.70.175.100#03%20V.
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:3119::1928:49cc]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#03x
trojan://zbb@[2606:4700:300b::3901:15be]:443?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2F%3Fed%3D2560#05%20T
vless://b88fc8b9-ae2a-45ff-9d79-6fc30e94738e@[2606:4700:3002::7fa8:72ed]:443?encryption=none&security=tls&sni=303.zzzzz.dns-dynamic.net&fp=random&type=ws&host=303.zzzzz.dns-dynamic.net&path=%2FproxyIP%3D146.70.175.103#05%20V.
trojan://zbb@[2606:4700:3111::3082:1293]:443?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2F%3Fed%3D2560#06%20T
trojan://zbb@[2606:4700:3113::324e:31c]:443?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2F%3Fed%3D2560#07%20T
trojan://zbb@[2a06:98c1:3120::63c5:34ae]:443?security=tls&sni=tr2.zcr07.us.kg&fp=random&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#08%20T
trojan://zbb@[2606:4700:4::11d5:6a3]:443?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2F%3Fed%3D2560#09%20T
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:ff00::3282:4311]:443?encryption=none&security=tls&sni=xb.zcr07.rr.nu&fp=random&type=ws&host=xb.zcr07.rr.nu&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#1
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:9a67::15e8:4831]:443?encryption=none&security=tls&sni=xb.zcr07.rr.nu&fp=random&type=ws&host=xb.zcr07.rr.nu&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#1
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036:0:eb:712c:b1ee:d58c]:443?encryption=none&security=tls&sni=xb.zcr07.rr.nu&fp=random&type=ws&host=xb.zcr07.rr.nu&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#1
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036::937d:9e92:85a6]:443?encryption=none&security=tls&sni=xb.zcr07.rr.nu&fp=random&type=ws&host=xb.zcr07.rr.nu&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#1
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036:c9e0:d5fc:b2f5:3345:1aa8]:443?encryption=none&security=tls&sni=xb.zcr07.rr.nu&fp=random&type=ws&host=xb.zcr07.rr.nu&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#1
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036:0:d2ef:7d73:74f1:4abd]:443?encryption=none&security=tls&sni=xb.zcr07.rr.nu&fp=random&type=ws&host=xb.zcr07.rr.nu&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#1
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3020::6dca:840]:443?encryption=none&security=tls&sni=xb.zcr07.rr.nu&fp=random&type=ws&host=xb.zcr07.rr.nu&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#1
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:e1::76e6:52eb]:443?encryption=none&security=tls&sni=xb.zcr07.rr.nu&fp=random&type=ws&host=xb.zcr07.rr.nu&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#1
trojan://zbb@[2606:4700:a0::5310:10f1]:443?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2F%3Fed%3D2560#1%20T
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036:e757:39f9:1b62:2200:4f3d]:443?encryption=none&security=tls&sni=xb.zcr07.rr.nu&fp=random&type=ws&host=xb.zcr07.rr.nu&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#1-clone
trojan://zbb@[2a06:98c1:56::6a06:4b8b]:443?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2F%3Fed%3D2560#2%20T
trojan://zbb@gur.gov.ua:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#5%20T
vless://b9b4bbd0-2579-468e-8cb3-c86bc0953036@[2606:4700:59::18bb:55cd]:443?encryption=none&security=tls&sni=notls.zcr07.us.kg&fp=random&type=ws&host=notls.zcr07.us.kg&path=%2F%3Fed%3D2560#5%20v%27
trojan://zbb@[2606:4700:e7:6588:bfe4:d356:135e:5bd8]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#6%20T
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:e7:5f03:11c5:eb3e:b076:e83]:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&alpn=http%2F1.1&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2F%3Fproxyip%3Dproxyip.oracle.fxxk.dedyn.io#6%20v%27
trojan://zbb@www.digitalocean.com:443?security=tls&sni=tr3.zcr07.us.kg&fp=random&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#7%20T
trojan://zbb@[2606:4700:e7:4c3a:2cd9:c0ee:a0fc:2158]:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#9%20T
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2a06:98c1:3120::3fea:5b7f]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2FproxyIP%3D192.9.177.204#9%20v.
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@61.77.9.219:12487?encryption=none&security=tls&sni=cfed.tgzdyz2.top&type=ws&host=cfed.tgzdyz2.top&path=%2Ftg%40zdyz2#%E9%9F%A9%E5%9B%BD_082918112
trojan://zbb@[2606:4700:a0::5244:6740]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:3033::49e7:23f7]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:57::6030:3c68]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:8399::200b:cee]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:9ad4::3ea0:7108]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:3121::4f27:160b]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2a06:98c1:3121::55ce:5d84]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@59.3.3.161:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://zbb@[2606:4700:4402::21ad:5b6]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#AA
trojan://trojan@[2606:4700:9aeb::1d82:148]:2096?security=tls&sni=ygt.z07.rr.nu&fp=randomized&type=ws&host=ygt.z07.rr.nu&path=%2F%3Fed%3D2560#CF_T13_www.visasoutheasteurope.com_2096
trojan://trojan@[2606:4700:a::73e:5176]:8443?security=tls&sni=ygt.z07.rr.nu&fp=randomized&type=ws&host=ygt.z07.rr.nu&path=%2F%3Fed%3D2560#CF_T9_myanmar.visa.com_8443
trojan://zbb@[2606:4700:3032::4ed5:28e2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40War
trojan://zbb@[2606:4700:29::3e53:3f63]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp
trojan://zbb@[2606:4700:3031::7bdd:26ba]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:3033::43e3:5737]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:90c1::5c66:583f]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CM-TG%40Warp_Key
trojan://zbb@[2606:4700:e7:0:83:f9b1:f67c:fe2e]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:91b5::186:73af]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:3113::c6c:4073]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:3036:0:710d:ef9d:1863:3d60]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CN-TG%40Warp_Key
trojan://zbb@[2606:4700:a9::3fbc:3ed1]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:a0::2f99:b4b]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:a9::31e0:2129]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2a06:98c1:3120::5aad:4bf1]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:3034::7a9a:3659]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2a06:98c1:3120::59fc:148a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CT-TG%40Warp_Key
trojan://zbb@[2606:4700:24::74bd:7fbf]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:a0::6022:1e4d]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:27::1f8b:68f3]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:28::257c:4851]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:3037::6118:3cb2]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:57::572e:1c76]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2606:4700:3037::4233:7c65]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
trojan://zbb@[2a06:98c1:3121::d07:18fd]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#CU-TG%40Warp_Key
vless://0c96d302-076e-4e46-a5b1-4e3a523beb8b@[2606:4700:a0::4be0:2a13]:443?encryption=none&security=tls&sni=kjg.zbb07.us.kg&fp=randomized&type=ws&host=kjg.zbb07.us.kg&path=%2F%3Fed%3D2048#kj07%2002%20hk
vless://0c96d302-076e-4e46-a5b1-4e3a523beb8b@[2606:4700:3036:94a6:5021:c1d5:1570:2131]:443?encryption=none&security=tls&sni=kjg.zbb07.us.kg&fp=randomized&type=ws&host=kjg.zbb07.us.kg&path=%2F%3Fed%3D2048#kj07%2003
vless://0c96d302-076e-4e46-a5b1-4e3a523beb8b@[2606:4700:91b0::4fbc:3251]:443?encryption=none&security=tls&sni=kjg.zbb07.us.kg&fp=randomized&type=ws&host=kjg.zbb07.us.kg&path=%2F%3Fed%3D2048#kj07%2004
vless://0c96d302-076e-4e46-a5b1-4e3a523beb8b@[2606:4700:3036:9202:ddec:55ee:9d5c:7aa8]:443?encryption=none&security=tls&sni=kjg.zbb07.us.kg&fp=randomized&type=ws&host=kjg.zbb07.us.kg&path=%2F%3Fed%3D2048#kj07%2005-clone-clone
vless://0c96d302-076e-4e46-a5b1-4e3a523beb8b@[2606:4700:3036:71:f800:70b:a611:7b3b]:443?encryption=none&security=tls&sni=kjg.zbb07.us.kg&fp=randomized&type=ws&host=kjg.zbb07.us.kg&path=%2F%3Fed%3D2048#kj07%2005-clone-clone
vless://0c96d302-076e-4e46-a5b1-4e3a523beb8b@[2606:4700:3036:70fa:85e5:4362:5105:6e2d]:443?encryption=none&security=tls&sni=kjg.zbb07.us.kg&fp=randomized&type=ws&host=kjg.zbb07.us.kg&path=%2F%3Fed%3D2048#kj07%2006
vless://0c96d302-076e-4e46-a5b1-4e3a523beb8b@[2606:4700:3036:71:f8ca:aa54:59b5:e8e4]:443?encryption=none&security=tls&sni=kjg.zbb07.us.kg&fp=randomized&type=ws&host=kjg.zbb07.us.kg&path=%2FproxyIP%3D8.219.83.71#kj07%2007
vless://803f17dc-afc3-44d2-b02b-a1fdfd938882@[2606:4700:3036:9202:dd9d:a5af:48d:6eed]:443?encryption=none&security=tls&sni=kj.r08.us.kg&fp=randomized&type=ws&host=kj.r08.us.kg&path=%2F%3Fed%3D2048#kj08%2002
vless://803f17dc-afc3-44d2-b02b-a1fdfd938882@[2606:4700:3036:94a6:5021:c124:74f4:d69a]:443?encryption=none&security=tls&sni=kj.r08.us.kg&fp=randomized&type=ws&host=kj.r08.us.kg&path=%2F%3Fed%3D2048#kj08%2006%20hk
vless://803f17dc-afc3-44d2-b02b-a1fdfd938882@[2606:4700:3036:9403:169c:ed3b:4614:3556]:443?encryption=none&security=tls&sni=kj.r08.us.kg&fp=randomized&type=ws&host=kj.r08.us.kg&path=%2F%3Fed%3D2048#kj08%2007
vless://37691131-db68-49bc-b1bb-840277c54390@198.62.62.4:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#m
vless://37691131-db68-49bc-b1bb-840277c54390@zula.ir:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#m
hysteria2://0e919867-a66e-4a50-8ffe-2969ffc6d53a@31.186.85.171:55203/?sni=www.bing.com&alpn=h3&insecure=1#PL-Atman_Sp._z_o.o.
tuic://0e919867-a66e-4a50-8ffe-2969ffc6d53a:admin123@31.186.85.171:55202?sni=www.bing.com&alpn=h3&congestion_control=bbr#PL-Atman_Sp._z_o.o.
hysteria2://e5a09f85-ebce-4883-a86e-1008e33eecb8@31.186.85.171:55403/?sni=www.bing.com&alpn=h3&insecure=1#PL-Atman_Sp._z_o.o.
tuic://e5a09f85-ebce-4883-a86e-1008e33eecb8:admin321@31.186.85.171:55402?sni=www.bing.com&alpn=h3&congestion_control=bbr#PL-Atman_Sp._z_o.o.
trojan://zbb@[2606:4700:3030::4ef8:a68]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#q
trojan://zbb@[2606:4700:9761::353c:30e7]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#T%202
trojan://zbb@[2606:4700:e7:65e9:4af8:bc5:181d:4368]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#T%204
trojan://zbb@[2606:4700:9a6a::a71:6a75]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#T%206
trojan://zbb@[2a06:98c1:3121::25aa:27e8]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#T%207
trojan://zbb@[2606:4700:e7:0:38:ceda:d026:16f6]:443?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.117#T%208
trojan://zbb@[2606:4700:57::15c8:45b4]:2096?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#T%209%27
trojan://zbb@[2606:4700:e7:0:3d:79ea:f6e:275b]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#T%20b
trojan://zbb@[2606:4700:e7:6588:804:5f40:d6ab:11a4]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#T%20c
trojan://zbb@[2606:4700:e7::ed:43bc:a88b]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#T%20d
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@94.177.8.26:130?encryption=none&security=tls&sni=cfed.tgzdyz2.top&type=ws&host=cfed.tgzdyz2.top&path=%2Ftg%40zdyz2security%3Dtls#Twitter%E8%8B%8F%E5%B0%8F%E6%9F%A0%7C%E6%B7%B1%E6%B8%AF%E9%9A%A7%E9%81%93%7C%E6%B5%81%E5%AA%92%E4%BD%93%E8%A7%A3%E9%94%81
vless://bae36924-69da-4065-bc92-de38d9b041cd@[2606:4700:133::6ff7:40c8]:443?encryption=none&security=tls&sni=ziz.zcr07.us.kg&fp=randomized&type=ws&host=ziz.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.104#v%202.
vless://bae36924-69da-4065-bc92-de38d9b041cd@[2400:cb00:2049::3fdd:5032]:443?encryption=none&security=tls&sni=ziz.zcr07.us.kg&fp=randomized&type=ws&host=ziz.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.104#v%203.
vless://bae36924-69da-4065-bc92-de38d9b041cd@[2606:4700:3117::229d:6c02]:443?encryption=none&security=tls&sni=ziz.zcr07.us.kg&fp=randomized&type=ws&host=ziz.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.104#v%204.
vless://bae36924-69da-4065-bc92-de38d9b041cd@[2606:4700:3112::1eeb:4c1c]:443?encryption=none&security=tls&sni=ziz.zcr07.us.kg&fp=randomized&type=ws&host=ziz.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.104#v%206.
vless://c62c1bd7-1fa0-4528-b637-20ac8b8abedd@[2a06:98c1:3102::78fd:33f9]:443?encryption=none&security=tls&sni=1.zbb07.filegear-sg.me&fp=random&type=ws&host=1.zbb07.filegear-sg.me&path=%2FproxyIP%3D146.70.175.116#v%20H.
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:91ba::1467:1dd7]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2Fpyip%3D47.245.105.224#v%20i%27
vless://b9b4bbd0-2579-468e-8cb3-c86bc0953036@[2606:4700:25::1768:421b]:443?encryption=none&security=tls&sni=notls.zcr07.us.kg&fp=random&type=ws&host=notls.zcr07.us.kg&path=%2F%3Fed%3D2560#v%20r%27
vless://14e3a0f4-96f0-49b8-b4ea-7c26ef211156@bpbsg.pages.dev.:443?encryption=none&security=tls&sni=bPb.Zcr07.COm.mp&fp=randomized&type=ws&host=BPb.zcr07.COm.MP&path=%2Fpyip%3D2606%3A4700%3A%3A#v%20x%27
vless://0c96d302-076e-4e46-a5b1-4e3a523beb8b@[2606:4700:3036:16:ffc5:e259:c20a:5f64]:443?encryption=none&security=tls&sni=kjg.zbb07.us.kg&fp=randomized&type=ws&host=kjg.zbb07.us.kg&path=%2F%3Fed%3D2048#x%2001
trojan://trojan@[2606:4700:2d::44c1:2eaf]:2096?security=tls&sni=ygtrj.zcr07.us.kg&fp=randomized&type=ws&host=ygtrj.zcr07.us.kg&path=%2F%3Fed%3D2560#X%2001
vless://5e0a98c8-282a-43ac-a2dd-c61db56f4e73@[2803:f800:52::5cc5:433d]:443?encryption=none&security=tls&sni=cc.zcr07.us.kg&fp=randomized&type=ws&host=cc.zcr07.us.kg&path=%2Fpyip%3D8.219.0.48#x%2002
trojan://trojan@usa.freesdns.info:443?security=tls&sni=ygtrj.zcr07.us.kg&fp=randomized&type=ws&host=ygtrj.zcr07.us.kg&path=%2F%3Fed%3D2560#X%2004
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:29::6bce:29da]:443?encryption=none&security=tls&sni=Xb.zCr07.Rr.NU&fp=random&type=ws&host=Xb.Zcr07.rr.nu&path=%2FproxyIP%3D146.70.175.174#X%2005
vless://5e0a98c8-282a-43ac-a2dd-c61db56f4e73@[2606:4700:3036:bb62:9b98:82b6:a330:65b7]:2083?encryption=none&security=tls&sni=cc.zcr07.cloudns.biz&type=ws&host=cc.zcr07.cloudns.biz&path=%2Fpyip%3D104.25.0.0#X%2006
trojan://trojan@[2606:4700:3036:0:906d:31ef:e4da:7f1d]:443?security=tls&sni=ygtrj.zcr07.us.kg&fp=randomized&type=ws&host=ygtrj.zcr07.us.kg&path=%2Fpyip%3D%5B2001%3Aac8%3A22%3A18%3A%3A8192%5D#X%2007
trojan://zbb@63.141.128.97:443?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2F%3Fed%3D2560#x%2009%20FR
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:e3::5f55:5b8a]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#x01
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@43.153.103.203:38454?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#x02
vless://803f17dc-afc3-44d2-b02b-a1fdfd938882@[2606:4700:3117::7bba:13a]:443?encryption=none&security=tls&sni=kj.r08.us.kg&fp=random&type=ws&host=kj.r08.us.kg&path=%2Fpyip%3D104.27.0.0#x03
vless://bae36924-69da-4065-bc92-de38d9b041cd@[2606:4700:a9::5879:3892]:443?encryption=none&security=tls&sni=ziz.zcr07.us.kg&fp=random&type=ws&host=ziz.zcr07.us.kg&path=%2FproxyIP%3D192.9.177.204#x03
vless://a66b4e21-3a80-4b08-8ce3-7c312538f847@[2606:4700:e5::38c2:1f99]:443?encryption=none&security=tls&sni=ygc.zbb07.filegear-sg.me&fp=random&type=ws&host=ygc.zbb07.filegear-sg.me&path=%2Fpyip%3Dts.hpc.tw#x03
trojan://zbb@[2606:4700:3036:b2f8:cba0:7298:5127:3bbe]:443?security=tls&sni=tr2.z07.us.kg&fp=randomized&type=ws&host=tr2.z07.us.kg&path=%2F%3Fed%3D2560#x04
trojan://zbb@[2606:4700:3008::5829:5122]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#x04
vless://bae36924-69da-4065-bc92-de38d9b041cd@[2606:4700:3036:2818:1e25:c167:21db:58d0]:443?encryption=none&security=tls&sni=ziz.zcr07.us.kg&fp=randomized&type=ws&host=ziz.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.104#x05
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:e6::38e0:f6e]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#x05
vless://37691131-db68-49bc-b1bb-840277c54390@ip.sb:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#x06
vless://37691131-db68-49bc-b1bb-840277c54390@www.ipaddress.my:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#x08
vless://37691131-db68-49bc-b1bb-840277c54390@bpfav2.pages.dev:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#x09
vless://b9b4bbd0-2579-468e-8cb3-c86bc0953036@[2606:4700:3035::1546:457c]:443?encryption=none&security=tls&sni=notls.zcr07.us.kg&fp=random&type=ws&host=notls.zcr07.us.kg&path=%2F%3Fed%3D2560#Xx%2009
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:53::5975:1593]:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#xx01
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036::2d66:1b15:e1b8]:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=randomized&type=ws&host=xb.zcr07.com.mp&path=%2F%3Fed%3D2048#xx03
vless://37691131-db68-49bc-b1bb-840277c54390@www.iplocation.net:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#xx04
vless://37691131-db68-49bc-b1bb-840277c54390@cf.0sm.com:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#xx05
vless://bae36924-69da-4065-bc92-de38d9b041cd@[2606:4700:3036::8b59:1f5d:1120]:443?encryption=none&security=tls&sni=ziz.zcr07.us.kg&fp=randomized&type=ws&host=ziz.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.104#xx06
vless://803f17dc-afc3-44d2-b02b-a1fdfd938882@kj.r08.us.kg:443?encryption=none&security=tls&sni=kj.r08.us.kg&fp=randomized&type=ws&host=kj.r08.us.kg&path=%2F%3Fed%3D2048#xxx%2002
trojan://trojan@[2606:4700:3035::5c6a:5440]:443?security=tls&sni=ygtrj.zcr07.us.kg&fp=randomized&type=ws&host=ygtrj.zcr07.us.kg&path=%2F%3Fed%3D2560#Xxx%2002
trojan://trojan@[2606:4700:3036:cf:b171:8534:e522:d636]:443?security=tls&sni=ygtrj.zcr07.us.kg&fp=randomized&type=ws&host=ygtrj.zcr07.us.kg&path=%2F%3Fed%3D2560#Xxx%2003
trojan://trojan@vahem.minusober.com:2096?security=tls&sni=ygtrj.zcr07.us.kg&fp=randomized&type=ws&host=ygtrj.zcr07.us.kg&path=%2F%3Fed%3D2560#Xxx%2004
trojan://zbb@[2606:4700:a0::1d89:654f]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#xxx%2005
trojan://trojan@solid.footballlovernews.com:443?security=tls&sni=ygtrj.zcr07.us.kg&fp=randomized&type=ws&host=ygtrj.zcr07.us.kg&path=%2F%3Fed%3D2560#Xxx%2005
trojan://zbb@[2606:4700:99e4::45b6:18b3]:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#xxx%2006
trojan://trojan@japan.com:8443?security=tls&sni=ygtrj.zcr07.us.kg&fp=randomized&type=ws&host=ygtrj.zcr07.us.kg&path=%2F%3Fed%3D2560#Xxx%2006
trojan://zbb@[2606:4700:9ad5::6d37:3099]:2087?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#xxx%2007
trojan://trojan@marly.toptechnonews.com:2053?security=tls&sni=ygtrj.zcr07.us.kg&fp=randomized&type=ws&host=ygtrj.zcr07.us.kg&path=%2F%3Fed%3D2560#Xxx%2007
trojan://zbb@[2606:4700:e1::7c7a:3995]:443?security=tls&sni=tr7.zbb07.us.kg&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2FproxyIP%3D146.70.175.100#xxx%2008
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:2c::3391:3933]:2053?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3D146.70.175.100#xxx%2009
trojan://trojan@[2606:4700:99e5::6e41:33c0]:2087?security=tls&sni=ygtrj.zcr07.us.kg&fp=randomized&type=ws&host=ygtrj.zcr07.us.kg&path=%2F%3Fed%3D2560#Xxx%2009
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036:52:52d4:1b17:e946:484d]:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=randomized&type=ws&host=xb.zcr07.com.mp&path=%2F%3Fed%3D2048#xxx01
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:3036:7a90:85f5:8095:5b16:7b7]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2FproxyIP%3D8.219.161.129#xxx02
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036:7a90:85f5:8095:5b5a:cf30]:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&alpn=http%2F1.1&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3Dmy-telegram-is-herocore.onecf.eu.org#xxx03
vless://37691131-db68-49bc-b1bb-840277c54390@malaysia.com:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#xxx07
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036:ad9b:f86f:a9e2:fe5f:ae83]:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#xxx08
vless://37691131-db68-49bc-b1bb-840277c54390@www.hugedomains.com:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#xxx09
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3033::422b:5c92]:443?encryption=none&security=tls&sni=Xb.zCr07.Rr.NU&fp=random&type=ws&host=Xb.Zcr07.rr.nu&path=%2FproxyIP%3D146.70.175.174#XXXX%2002
trojan://zbb@[2606:4700:3111::5572:1dcd]:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#xxxx%2003
vless://a66b4e21-3a80-4b08-8ce3-7c312538f847@[2606:4700:3036:0:1e:b2e1:3d1f:f70e]:443?encryption=none&security=tls&sni=ygcf.zcr07.us.kg&fp=randomized&type=ws&host=ygcf.zcr07.us.kg&path=%2F%3Fed%3D2560#XXXX%2003.
vless://a66b4e21-3a80-4b08-8ce3-7c312538f847@[2606:4700:3036:7ca6:c1bb:bd63:2428:36c2]:443?encryption=none&security=tls&sni=ygcf.zcr07.us.kg&fp=randomized&type=ws&host=ygcf.zcr07.us.kg&path=%2F%3Fed%3D2560#XXXX%2004.
trojan://zbb@[2606:4700:28::4ac9:6a08]:443?security=tls&sni=tr7.zbb07.us.kg&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2FproxyIP%3D146.70.175.100#xxxx%2006
vless://a66b4e21-3a80-4b08-8ce3-7c312538f847@[2606:4700:3036:f0:7530:9c6e:2614:6e92]:443?encryption=none&security=tls&sni=ygcf.zcr07.us.kg&fp=randomized&type=ws&host=ygcf.zcr07.us.kg&path=%2Fpyip%3D%5B2001%3Aac8%3A22%3A18%3A%3A8192%5D#XXXX%2007.
vless://a66b4e21-3a80-4b08-8ce3-7c312538f847@[2606:4700:3036:9459:e32c:d06c:af8f:251a]:2087?encryption=none&security=tls&sni=ygcf.zcr07.us.kg&fp=randomized&type=ws&host=ygcf.zcr07.us.kg&path=%2F%3Fed%3D2560#XXXX%2009
vless://b88fc8b9-ae2a-45ff-9d79-6fc30e94738e@[2606:4700:e7:e0:8a84:33f8:dfa0:4865]:443?encryption=none&security=tls&sni=303.zzzzz.dns-dynamic.net&fp=randomized&type=ws&host=303.zzzzz.dns-dynamic.net&path=%2FproxyIP%3D146.70.175.102#xxxx07
vless://a66b4e21-3a80-4b08-8ce3-7c312538f847@[2606:4700:3036:c9e0:2dae:e7cb:4d77:5570]:443?encryption=none&security=tls&sni=ygc.zbb07.filegear-sg.me&fp=random&type=ws&host=ygc.zbb07.filegear-sg.me&path=%2Fpyip%3Dts.hpc.tw#xxxxx01
vless://a66b4e21-3a80-4b08-8ce3-7c312538f847@[2606:4700:3036:f3:e5d8:386a:4f2f:86fb]:8443?encryption=none&security=tls&sni=ygcf.zcr07.us.kg&fp=random&type=ws&host=ygcf.zcr07.us.kg&path=%2Fpyip%3Dts.hpc.tw#xxxxx02
vless://a66b4e21-3a80-4b08-8ce3-7c312538f847@[2606:4700:3033::3248:2983]:443?encryption=none&security=tls&sni=ygcf.zbb.dns-dynamic.net&fp=random&type=ws&host=ygcf.zbb.dns-dynamic.net&path=%2Fpyip%3Dts.hpc.tw#xxxxx03
vless://a66b4e21-3a80-4b08-8ce3-7c312538f847@[2606:4700:3036:c9e0:d5d6:d5b5:80b6:640f]:443?encryption=none&security=tls&sni=ygcf.zbb.dns-dynamic.net&fp=random&type=ws&host=ygcf.zbb.dns-dynamic.net&path=%2Fpyip%3Dts.hpc.tw#xxxxx04
vless://a66b4e21-3a80-4b08-8ce3-7c312538f847@[2606:4700:3036:c9e0:d5d6:d50a:2b62:320e]:8443?encryption=none&security=tls&sni=ygc.z07.us.kg&fp=random&type=ws&host=ygc.z07.us.kg&path=%2Fpyip%3Dts.hpc.tw#xxxxx05
trojan://zbb@[2606:4700:d::753:73b6]:8443?security=tls&sni=ygvt.r08.us.kg&fp=random&type=ws&host=ygvt.r08.us.kg&path=%2Fpyip%3Dts.hpc.tw#xxxxx06
vless://c62c1bd7-1fa0-4528-b637-20ac8b8abedd@130.250.137.235:443?encryption=none&security=tls&sni=1.zbb07.filegear-sg.me&fp=random&type=ws&host=1.zbb07.filegear-sg.me&path=%2FproxyIP%3D146.70.175.189#xxxxx08
vless://a66b4e21-3a80-4b08-8ce3-7c312538f847@[2606:4700:3036:dd:af10:99c4:4b96:556]:443?encryption=none&security=tls&sni=ygcf.zcr07.us.kg&fp=random&type=ws&host=ygcf.zcr07.us.kg&path=%2Fpyip%3Dts.hpc.tw#xxxxx09%60
vless://5e0a98c8-282a-43ac-a2dd-c61db56f4e73@socks5data.090227.xyz:443?encryption=none&security=tls&sni=cc.zcr07.us.kg&fp=randomized&type=ws&host=cc.zcr07.us.kg&path=%2Fpyip%3D8.219.0.48#xxxxxx%2004
vless://5e0a98c8-282a-43ac-a2dd-c61db56f4e73@cuv6.xxxxxxxx.tk:443?encryption=none&security=tls&sni=cc.zcr07.us.kg&fp=randomized&type=ws&host=cc.zcr07.us.kg&path=%2Fpyip%3D8.219.0.48#xxxxxx%2004%60
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036:0:fac6:1a30:dafd:60a1]:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=randomized&type=ws&host=xb.zcr07.com.mp&path=%2Fpyip%3D104.26.0.0#xxxxxx%2005.
vless://5e0a98c8-282a-43ac-a2dd-c61db56f4e73@ipdb.api.030101.xyz:443?encryption=none&security=tls&sni=cc.zcr07.us.kg&fp=randomized&type=ws&host=cc.zcr07.us.kg&path=%2Fpyip%3D8.219.0.48#xxxxxx%2009
vless://c62c1bd7-1fa0-4528-b637-20ac8b8abedd@[2606:4700:3010:ce6a:48a6:93fb:74c5:b221]:443?encryption=none&security=tls&sni=1.zbb07.filegear-sg.me&fp=random&type=ws&host=1.zbb07.filegear-sg.me&path=%2FproxyIP%3D146.70.175.177#xxxxxx02
vless://bae36924-69da-4065-bc92-de38d9b041cd@[2606:4700:1b::27b1:76f5]:443?encryption=none&security=tls&sni=ziz.zcr07.us.kg&fp=randomized&type=ws&host=ziz.zcr07.us.kg&path=%2FproxyIP%3D2606%3A4700%3A%3A#xxxxxx03
vless://a66b4e21-3a80-4b08-8ce3-7c312538f847@[2606:4700:311e::3a0d:166d]:443?encryption=none&security=tls&sni=ygc.zbb07.filegear-sg.me&fp=random&type=ws&host=ygc.zbb07.filegear-sg.me&path=%2Fpyip%3Dts.hpc.tw#xxxxxx05
trojan://zbb@[2606:4700:440a::168b:cbf]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#z%2002%20My
vless://bae36924-69da-4065-bc92-de38d9b041cd@[2606:4700:e7::3756:b53]:443?encryption=none&security=tls&sni=ziz.zcr07.us.kg&fp=randomized&type=ws&host=ziz.zcr07.us.kg&path=%2FproxyIP%3D8.218.2.181#z%2006%20JP
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@14.39.254.65:50000?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#z01%20KR
trojan://trojan@[2606:4700:99ea::7fb6:7ad2]:2083?security=tls&sni=ygt.z07.rr.nu&fp=randomized&type=ws&host=ygt.z07.rr.nu&path=%2F%3Fed%3D2560#zk%2002
trojan://trojan@[2606:4700:3036:bdbb:1bd1:30bb:aba3:6e90]:2096?security=tls&sni=ygt.z07.rr.nu&fp=randomized&type=ws&host=ygt.z07.rr.nu&path=%2F%3Fed%3D2560#zk%2004
trojan://trojan@[2606:4700:91b7::4761:7866]:443?security=tls&sni=ygt.z07.rr.nu&fp=randomized&type=ws&host=ygt.z07.rr.nu&path=%2F%3Fed%3D2560#zk%2005
trojan://trojan@[2606:4700:9769::775b:4cb]:8443?security=tls&sni=ygt.z07.rr.nu&fp=randomized&type=ws&host=ygt.z07.rr.nu&path=%2F%3Fed%3D2560#zk%2006
vless://0c96d302-076e-4e46-a5b1-4e3a523beb8b@[2606:4700:3036:bdbb:7af8:8f36:e1d1:5e7]:443?encryption=none&security=tls&sni=kjg.zbb07.us.kg&fp=random&type=ws&host=kjg.zbb07.us.kg&path=%2FproxyIP%3D146.70.175.01#zk%2007
trojan://zbb@[2606:4700:3036:0:3ba3:dcce:a9db:65a1]:8443?security=tls&sni=ygvt.r08.us.kg&fp=random&type=ws&host=ygvt.r08.us.kg&path=%2F%3Fed%3D2560#zk%2009
vless://b88fc8b9-ae2a-45ff-9d79-6fc30e94738e@130.250.137.200:443?encryption=none&security=tls&sni=303.zzzzz.dns-dynamic.net&fp=randomized&type=ws&host=303.zzzzz.dns-dynamic.net&path=%2Fpyip%3D104.19.0.0#zl%2001
vless://2f0afcf4-5b46-49c7-8d15-5aa08edf9226@[2606:4700:99ed::1045:29df]:443?encryption=none&security=tls&sni=Bpb.ZCr07.us.Kg&fp=random&type=ws&host=bPB.zCr07.uS.kg&path=%2FproxyIP%3D146.70.175.116#zl%2002%20DE
trojan://zbb@[2606:4700:976e::4a70:5b02]:443?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2F%3Fed%3D2560#zl%2003%20DE
vless://bae36924-69da-4065-bc92-de38d9b041cd@[2606:4700:9a6d::117b:5514]:443?encryption=none&security=tls&sni=ziz.zcr07.us.kg&fp=randomized&type=ws&host=ziz.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.104#zl%2004%20DE
vless://bae36924-69da-4065-bc92-de38d9b041cd@[2606:4700:8de8::6732:3fcd]:443?encryption=none&security=tls&sni=ziz.zcr07.us.kg&fp=randomized&type=ws&host=ziz.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.104#zl%2005%20DE
trojan://zbb@[2606:4700:90de::3278:14b]:443?security=tls&sni=tr2.zcr07.us.kg&fp=randomized&type=ws&host=tr2.zcr07.us.kg&path=%2F%3Fed%3D2560#zl%2006%20DE
trojan://zbb@[2606:4700:8ddb::685e:7976]:443?security=tls&sni=tr2.zcr07.us.kg&fp=random&type=ws&host=tr2.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#zl%2008%20DE
trojan://trojan@[2606:4700:3036:0:eb:71b3:7c97:a4b4]:2053?security=tls&sni=ygtrj.zcr07.us.kg&fp=randomized&type=ws&host=ygtrj.zcr07.us.kg&path=%2F%3Fed%3D2560#zm%2003
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInptIDA1IENBIiwNCiAgImFkZCI6ICIyNjA2OjQ3MDA6MzAzNjo6MjJlNTo1NDQxIiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogImYzODc4ZTc5LTgxNjYtNDE0MC04ZGJlLWUxZjM1YjY1MGUxYyIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiMTQxLjcyNDA2NC54eXoiLA0KICAicGF0aCI6ICIvZ212ZnZ3cyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vless://c62c1bd7-1fa0-4528-b637-20ac8b8abedd@[2606:4700:90d2::618a:215e]:443?encryption=none&security=tls&sni=1.zzzzz.dns-dynamic.net&fp=randomized&type=ws&host=1.zzzzz.dns-dynamic.net&path=%2Fpyip%3D104.19.0.0#zm%2009
vless://803f17dc-afc3-44d2-b02b-a1fdfd938882@[2a06:98c1:3107::3257:1547]:443?encryption=none&security=tls&sni=kj.r08.us.kg&fp=randomized&type=ws&host=kj.r08.us.kg&path=%2F%3Fed%3D2048#zn%2004
trojan://zbb@[2606:4700:3036:c940:b4de:9cf2:8fb5:a7e4]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#zn%2005
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInpuIDA4IERFIiwNCiAgImFkZCI6ICIyNjA2OjQ3MDA6OTc2Zjo6NTgyMjozMjQiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiOTUwZGI2YWEtNDkyNi00NjE2LTgxNmUtZWMwMzEyZGNiODdiIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogImF1dG8iLA0KICAiaG9zdCI6ICJkZGQuemNyMDcudXMua2ciLA0KICAicGF0aCI6ICIvamFoZmtqaGEuY2ZkOjQ0My9saW5rd3MiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiZGRkLnpjcjA3LnVzLmtnIiwNCiAgImFscG4iOiAiaHR0cC8xLjEiLA0KICAiZnAiOiAicmFuZG9taXplZCINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInpxIDA0IiwNCiAgImFkZCI6ICIyNjA2OjQ3MDA6OWFkMDo6MjFjMDo0NDIyIiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogImVkYmIxMDU5LTE2MzMtNDI3MS1iNjZlLWVkNGZiYTQ3YTFiZiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZGRkLnpiYi5kTnMtRFluYW1JQy5uRXQiLA0KICAicGF0aCI6ICIvbGluZGUwNi5pbmRpYXZpZGVvLnNiczo0NDMvbGlua3dzIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogImRkZC56YmIuZE5zLURZbmFtSUMubkV0IiwNCiAgImFscG4iOiAiaDMsaDIiLA0KICAiZnAiOiAiYW5kcm9pZCINCn0=
vless://b88fc8b9-ae2a-45ff-9d79-6fc30e94738e@[2606:4700:e0::6ad5:1990]:443?encryption=none&security=tls&sni=303.zzzzz.dns-dynamic.net&fp=random&type=ws&host=303.zzzzz.dns-dynamic.net&path=%2FproxyIP%3D8.219.174.213#zt%2003
vless://5e0a98c8-282a-43ac-a2dd-c61db56f4e73@[2606:4700:e2::75fd:5b90]:443?encryption=none&security=tls&sni=cc.zcr07.us.kg&fp=random&type=ws&host=cc.zcr07.us.kg&path=%2Fpyip%3D2606%3A4700%3A%3A#zt%2005
vless://bae36924-69da-4065-bc92-de38d9b041cd@[2606:4700:3008::32b3:4be6]:443?encryption=none&security=tls&sni=ziz.zcr07.us.kg&fp=randomized&type=ws&host=ziz.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.104#zt%2007
vless://d7dd3a35b68b4992b319a85b8a1fc8e5@[2606:4700:3036:bdbb:7ab9:e7d1:ae8:8c2b]:443?encryption=none&security=tls&sni=dns68.putata.eu.org&type=ws&host=dns68.putata.eu.org&path=Twitter%E8%8B%8F%E5%B0%8F%E6%9F%A0#zt%2008
vless://803f17dc-afc3-44d2-b02b-a1fdfd938882@[2606:4700:5b::7311:34b5]:443?encryption=none&security=tls&sni=kj.r08.us.kg&fp=randomized&type=ws&host=kj.r08.us.kg&path=%2F%3Fed%3D2048#zt%2009
vless://bae36924-69da-4065-bc92-de38d9b041cd@[2606:4700:8dd1::46eb:3ef2]:443?encryption=none&security=tls&sni=ziz.zcr07.us.kg&fp=randomized&type=ws&host=ziz.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.104#zv%2002%20DE
vless://bae36924-69da-4065-bc92-de38d9b041cd@[2606:4700:3116::7ae2:3585]:443?encryption=none&security=tls&sni=ziz.zcr07.us.kg&fp=randomized&type=ws&host=ziz.zcr07.us.kg&path=%2FproxyIP%3D8.218.2.181#zv%2004%20JP
vless://0c96d302-076e-4e46-a5b1-4e3a523beb8b@[2606:4700:e3::d44:4e34]:443?encryption=none&security=tls&sni=kjg.zbb07.us.kg&fp=randomized&type=ws&host=kjg.zbb07.us.kg&path=%2F%3Fed%3D2048#zv%2006
vless://0c96d302-076e-4e46-a5b1-4e3a523beb8b@[2606:4700:9a61::1106:6773]:443?encryption=none&security=tls&sni=kjg.zbb07.us.kg&fp=random&type=ws&host=kjg.zbb07.us.kg&path=%2FproxyIP%3D146.70.175.01#zw%2001%20hk
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInp4IDA2IFBMIiwNCiAgImFkZCI6ICIyNjA2OjQ3MDA6OTBkMjo6NzMzNToxMmY0IiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogIjAzZmNjNjE4LWI5M2QtNjc5Ni02YWVkLThhMzhjOTc1ZDU4MSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZGRkLnpjcjA3LnVzLktnIiwNCiAgInBhdGgiOiAiL21heC5tYW5rYWRtdS5jb206NDQzL2xpbmt2d3MiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiZGRkLnpjcjA3LnVzLktnIiwNCiAgImFscG4iOiAiaDMsaDIsaHR0cC8xLjEiLA0KICAiZnAiOiAiYW5kcm9pZCINCn0=
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:3036:0:d26f:7884:57b6:14a2]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#zx%2006-clone
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2a06:98c1:3121::349f:361d]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#zx%2006-clone-clone
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInp5IDAxQ0EiLA0KICAiYWRkIjogIjI2MDY6NDcwMDozMDM2OmJiODY6ZTk2MTpjYzNjOjJkYzg6NWYzZiIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICJmMzg3OGU3OS04MTY2LTQxNDAtOGRiZS1lMWYzNWI2NTBlMWMiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIjE0MS43MjQwNjQueHl6IiwNCiAgInBhdGgiOiAiL2dtdmZ2d3MiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInp5IDA1IENBIiwNCiAgImFkZCI6ICIyNjA2OjQ3MDA6MzAzNjpkZDphZjEwOjk5YzQ6NTAyOmFlYTEiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiNWRlMWZmNDQtYWFmOC00NzkwLWIwZmItZTU1YWFiMDYyNjIyIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIxNDUuNzI0MDY0Lnh5eiIsDQogICJwYXRoIjogIi96cnFydndzIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
trojan://trojan@[2606:4700:90c1::4c77:26ab]:2096?security=tls&sni=ygtrj.zcr07.us.kg&fp=random&type=ws&host=ygtrj.zcr07.us.kg&path=%2FproxyIP%3D104.27.0.0#zy%2008%20SG
vless://c62c1bd7-1fa0-4528-b637-20ac8b8abedd@[2606:4700:8d73::15a9:4357]:443?encryption=none&security=tls&sni=1.zbb07.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=1.zbb07.filegear-sg.me&path=%2F%3Fproxyip%3Dproxyip.sg.fxxk.dedyn.io#zz02%20Fr
trojan://zbb@[2606:4700:9a97::5b7b:2f75]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#zz05%20Hk
vless://bae36924-69da-4065-bc92-de38d9b041cd@[2606:4700:ff00::7b9d:5e8d]:443?encryption=none&security=tls&sni=ziz.zcr07.us.kg&fp=randomized&type=ws&host=ziz.zcr07.us.kg&path=%2F%3Fed%3D2048#zz06%20Hk
trojan://zbb@[2606:4700:3055::568e:61d4]:443?security=tls&sni=tr3.zcr07.us.kg&fp=random&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#zz07%20Hk
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@69.84.182.115:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#zzz01
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@69.84.182.192:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#zzz02
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@69.84.182.26:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#zzz03
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@13.57.241.143:80?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#zzz04
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2a06:98c1:3120::4717:ae7]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#zzz05
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036::2093:17dc]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#zzzz02
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:9b0b::2f6b:5fb3]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#zzzz04
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:f4::3f7b:2155]:443?encryption=none&security=tls&sni=Xb.zCr07.Rr.NU&fp=random&type=ws&host=Xb.Zcr07.rr.nu&path=%2FproxyIP%3D146.70.175.174#zzzz06%20Hk
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInp6enowNyBHQiIsDQogICJhZGQiOiAiMjYwNjo0NzAwOjI6OjMwYjc6NGU4IiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogIjAzZmNjNjE4LWI5M2QtNjc5Ni02YWVkLThhMzhjOTc1ZDU4MSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJhdXRvIiwNCiAgImhvc3QiOiAiZGRkLnpjcjA3LnVzLktnIiwNCiAgInBhdGgiOiAiL3NhcmVpa2VsYS5jb206NDQzL2xpbmt2d3MiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiZGRkLnpjcjA3LnVzLktnIiwNCiAgImFscG4iOiAiaHR0cC8xLjEiLA0KICAiZnAiOiAicmFuZG9tIg0KfQ==
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:4400::75a3:6e09]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#zzzz09%20Hk
trojan://trojan@[2606:4700:9763::11c2:3c91]:2053?security=tls&sni=ygt.z07.rr.nu&fp=randomized&type=ws&host=ygt.z07.rr.nu&path=%2F%3Fed%3D2560#zzzzz02%20Hk
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInp6enp6MDMgRnIiLA0KICAiYWRkIjogIjI2MDY6NDcwMDozMDM2OjA6M2JhMzpkYzA0OmE4ZDg6ZGQzYiIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIzOWNlYzE4Zi1hNDM5LTQyN2MtOWE0ZS1hZWI2ZmNkZjZmNTMiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAiYXV0byIsDQogICJob3N0IjogImRkZC56YmIuRG5zLWRZbkFtSWMuTmVUIiwNCiAgInBhdGgiOiAiL2xpbmphMDUuaHdjYXIuc2JzOjQ0My9saW5rd3MiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiZGRkLnpiYi5EbnMtZFluQW1JYy5OZVQiLA0KICAiYWxwbiI6ICJodHRwLzEuMSIsDQogICJmcCI6ICJjaHJvbWUiDQp9
vless://c62c1bd7-1fa0-4528-b637-20ac8b8abedd@[2606:4700:9ae3::23c8:3e3e]:443?encryption=none&security=tls&sni=1.zbb07.filegear-sg.me&fp=random&type=ws&host=1.zbb07.filegear-sg.me&path=%2FproxyIP%3D138.3.222.135#zzzzz04%20Hk
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:a0::1a9f:7b1a]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#zzzzz05%20Hk
trojan://zbb@[2606:4700:ff00::41bb:1682]:443?security=tls&sni=vm.zcr07.filegear-sg.me&fp=randomized&type=ws&host=vm.zcr07.filegear-sg.me&path=%2F%3Fed%3D2560#zzzzz07
trojan://zbb@[2606:4700:90d9::3573:6535]:443?security=tls&sni=afei.zb9.us.kg&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#zzzzzz02
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:e7::1760:24f6]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=sg.ipdb.rr.nu#zzzzzz03
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:f4::50ab:7c89]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#zzzzzz04
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@[2606:4700:9ad5::1816:38d0]:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=sg.ipdb.rr.nu#zzzzzz05
trojan://trojan@[2606:4700:9ad2::781:3cb]:2096?security=tls&sni=ygt.z07.rr.nu&fp=randomized&type=ws&host=ygt.z07.rr.nu&path=%2F%3Fed%3D2560#zzzzzz06%20Hk
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:e:70d0:db46:eeef:529]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#zzzzzz07
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:0:710d:d893:7f7d:66d1]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#zzzzzz08
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:3deb:949c:5c05:6456:e02b]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#zzzzzz09
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:3d55:fedd:543c:d075:cf6b]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#zzzzzzZ02
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:0:710d:ef9d:3a73:5187]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#zzzzzzZ03
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:3d55:fedd:ccf1:bfd9:7b2f]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#zzzzzzZ04
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:3d55:fedd:cc29:51cf:9a58]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#zzzzzzZ05
trojan://zbb@[2a06:98c1:3103::2a62:34c0]:443?security=tls&type=ws&host=2.zcr07.filegear-sg.me&path=%2F#zzzzzzZ07
trojan://zbb@[2a06:98c1:53::41fe:4b56]:8443?security=tls&sni=yg42.zbb96.dynv6.net&fp=random&type=ws&host=yg42.zbb96.dynv6.net&path=%2F%3Fed%3D2560#zzzzzzZ08
trojan://zbb@[2606:4700:a0::3294:6969]:8443?security=tls&sni=yg2.zcr07.myfw.us&fp=random&type=ws&host=yg2.zcr07.myfw.us&path=%2F%3Fed%3D2560#zzzzzzZ09
trojan://zbb@[2606:4700:e2::141e:527d]:8443?security=tls&sni=yg3.zcr07.rr.nu&fp=random&type=ws&host=yg3.zcr07.rr.nu&path=%2F%3Fed%3D2560#zzzzzzZZ01

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
