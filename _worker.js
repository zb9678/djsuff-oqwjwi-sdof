
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
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@j.r08.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#c01
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@k.r08.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#c02
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@l.r08.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#c03
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@m.r08.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#c04
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@n.r08.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#c05
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@o.r08.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#c06
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@p.r08.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#c07
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@q.r08.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#c08
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@r.r08.us.kg:2053?encryption=none&security=tls&sni=BP.zcR07.FINDHERE.Org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.finDHeRe.oRG&path=%2Fi8PcVNuzXhd1sENh%2FdHMuaHBjLnR3%3Fed%3D2560#c09
vless://b4c6b261-922d-4732-b634-1cfdba80ec50@vcrdb.net:443?encryption=none&security=tls&sni=edg.w07.us.kg&alpn=h3&fp=randomized&type=ws&host=edg.w07.us.kg&path=%2Fpyip%3Dts.hpc.tw#d%2001
vless://034b0d4e-8903-497c-87e1-d4c5b924994b@www.gg274.com:2053?encryption=none&security=tls&sni=kJ8.zBB07.uS.Kg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=KJ8.zBB07.US.kg&path=%2Fc2zh68oMc7147FpP%2FdHMuaHBjLnR3%3Fed%3D2560#z03
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@881396.com:8443?encryption=none&security=tls&sni=BP.zcR07.FinDHEre.oRG&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.zCR07.fINDhere.orG&path=%2F5ioYJ61DfDzKXCv7%2FdHMuaHBjLnR3%3Fed%3D2560#d%2002
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@bp.zcr07.findhere.org:2096?encryption=none&security=tls&sni=bP.ZCR07.FiNdHERE.org&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bp.ZcR07.fInDhere.oRg&path=%2F9Gzx8xlyvZ1lZJwN%2FdHMuaHBjLnR3%3Fed%3D2560#z02
vless://37691131-db68-49bc-b1bb-840277c54390@xfbk.cc:2087?encryption=none&security=tls&sni=xb.ZCR07.Rr.Nu&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=Xb.zCR07.rr.nu&path=%2FlUOBSgIqmc3YSdiw%2FdHMuaHBjLnR3%3Fed%3D2560#d%2003
vless://2f0afcf4-5b46-49c7-8d15-5aa08edf9226@edg.w07.us.kg:443?encryption=none&security=tls&sni=BpB.Zcr07.US.kg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bpb.Zcr07.us.Kg&path=%2FLRUwQMOLwX8QQBRX%2FdHMuaHBjLnR3%3Fed%3D2560#z01
vless://8abf406e-95c3-4886-aba4-dae9dd66124a@bpb-66p.pages.dev.:2083?encryption=none&security=tls&sni=ZbPB.r07.clOUDNs.be&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=zbpb.R07.CloUdNS.Be&path=%2F7ZR6iUmKaQD16OgQ%2FdHMuaHBjLnR3%3Fed%3D2560#d%2004.
vless://b2ca329a-f595-4b17-92ec-c59604e64f9c@jubt4.xyz:443?encryption=none&security=tls&sni=zyh.z07.us.Kg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=zyh.z07.us.Kg&path=%2FCMzIq2kkkyHmhYLB%2FdHMuaHBjLnR3%3Fed%3D2560#z04
vless://034b0d4e-8903-497c-87e1-d4c5b924994b@x777r.com:443?encryption=none&security=tls&sni=kj8.zBb07.US.kg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=kJ8.zbb07.Us.kg&path=%2FV4T7B4kR5TblyMkb%2FdHMuaHBjLnR3%3Fed%3D2560#d%2005
vless://37691131-db68-49bc-b1bb-840277c54390@draw9.com:2083?encryption=none&security=tls&sni=Xb.zCR07.rr.Nu&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=xB.ZcR07.rR.NU&path=%2FkilOrcevyZYzK4BJ%2FdHMuaHBjLnR3%3Fed%3D2560#z05
vless://8abf406e-95c3-4886-aba4-dae9dd66124a@ms331.cc:2053?encryption=none&security=tls&sni=ZBPB.R07.CLoUDns.be&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=Zbpb.R07.CLoUdns.be&path=%2F1I0oK2KptXvqaoV4%2FdHMuaHBjLnR3%3Fed%3D2560#d%2006
vless://2f0afcf4-5b46-49c7-8d15-5aa08edf9226@www.jubt4.xyz:2096?encryption=none&security=tls&sni=bPb.ZCR07.Us.KG&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=Bpb.zCr07.uS.Kg&path=%2Ff8wj65S6c1DOdZyl%2FdHMuaHBjLnR3%3Fed%3D2560#z06
vless://c0b15b55-80dc-4afb-b49d-c109175c9bd6@cl.3269x.xyz:2096?encryption=none&security=tls&sni=jP.zCr07.CloudNS.BiZ&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=JP.ZCr07.cloudNs.BIz&path=%2F5LpTDLyPfSr5b4yX%2FdHMuaHBjLnR3%3Fed%3D2560#z07
vless://37691131-db68-49bc-b1bb-840277c54390@www.hhgg04.com:8443?encryption=none&security=tls&sni=Xb.ZCr07.rR.nU&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=xb.ZCr07.rr.nu&path=%2FpsBoanPKZBehN79W%2FdHMuaHBjLnR3%3Fed%3D2560#d%2007
vless://8abf406e-95c3-4886-aba4-dae9dd66124a@11863.com:2083?encryption=none&security=tls&sni=zBpB.r07.CLOudns.BE&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=zbpB.r07.CLOUdNs.BE&path=%2Fs5cxGQBwxEwCaCeg%2FdHMuaHBjLnR3%3Fed%3D2560#z08
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@hhgg04.com:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&fp=randomized&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#d%2008
vless://37691131-db68-49bc-b1bb-840277c54390@f2f97.com:2096?encryption=none&security=tls&sni=XB.zcR07.rr.nu&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=xB.zcR07.rr.nu&path=%2FX8ZM0dvOO41rJXHE%2FdHMuaHBjLnR3%3Fed%3D2560#d%2009
vless://14e3a0f4-96f0-49b8-b4ea-7c26ef211156@www.4hu12k.com:2053?encryption=none&security=tls&sni=Bpb.zCr07.COm.mP&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bPB.Zcr07.coM.mP&path=%2FKe37f1sLr8vf8eXe%2FdHMuaHBjLnR3%3Fed%3D2560#z09
trojan://zbb@[2606:4700:e7:70ed:333d:728e:288e:6b49]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#nm01
trojan://zbb@[2606:4700:e7:6588:804:5f40:7699:7d9d]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#nm02
trojan://zbb@[2606:4700:4::11d5:6a3]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#nm03
trojan://zbb@[2606:4700:9a6d::117b:5514]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#nm04
trojan://zbb@[2606:4700:e7:0:b9c4:2d08:b9b8:8074]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#nm05
trojan://zbb@[2606:4700:e7:6588:ff97:ed89:2de5:c7d0]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#nm06
trojan://zbb@[2606:4700:e7:88:85ff:eba2:5ce1:e86a]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#nm07
trojan://zbb@[2606:4700:3113::38eb:1a42]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#nm08
trojan://zbb@[2606:4700:e7:0:31:9ca8:517:5eec]:443?security=tls&type=ws&host=afei.zb9.us.kg&path=%2F%3Fed%3D2560#nm09
trojan://zbb@198.62.62.10:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#nn01
trojan://zbb@198.62.62.14:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#nn02
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@198.62.62.144:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#nn03
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@198.62.62.152:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#nn04
trojan://zbb@198.62.62.161:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#nn05
vless://b4c6b261-922d-4732-b634-1cfdba80ec50@198.62.62.174:443?encryption=none&security=tls&sni=edg.w07.us.kg&alpn=h3&fp=random&type=ws&host=edg.w07.us.kg&path=%2F%3Fproxyip%3Dproxyip.us.fxxk.dedyn.io#nn06
vless://b4c6b261-922d-4732-b634-1cfdba80ec50@198.62.62.176:443?encryption=none&security=tls&sni=edg.w07.us.kg&alpn=h3&fp=random&type=ws&host=edg.w07.us.kg&path=%2F%3Fproxyip%3Dproxyip.us.fxxk.dedyn.io#nn07
trojan://zbb@69.84.182.78:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#nn08
trojan://zbb@69.84.182.85:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#nn09



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
