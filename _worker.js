
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
vless://8abf406e-95c3-4886-aba4-dae9dd66124a@ios.wowowo14.top:8443?encryption=none&security=tls&sni=zbpB.R07.cLouDNS.BE&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=zBPb.R07.cloUdNs.Be&path=%2FV4hx2LWdjbfCJLLI%2FdHMuaHBjLnR3%3Fed%3D2560#0000001
trojan://trojan@hs.taokong8.com:8443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#004
trojan://zbb@lz.taokong8.com:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#005
trojan://zbb@pt.taokong8.com:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#006
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@www.bcrenb.top:2087?encryption=none&security=tls&sni=BP.zCR07.FINDHeRe.oRG&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=BP.zcR07.FiNDhere.ORG&path=%2Fv43uwvtEZXkoYPaV%2FdHMuaHBjLnR3%3Fed%3D2560#0000003
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@wikiwiki.t7t7i7.com:443?encryption=none&security=tls&sni=bp.zcr07.findhERE.oRg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bP.Zcr07.fINDhEre.org&path=%2FLZzA2TPulz9om2vO%2FdHMuaHBjLnR3%3Fed%3D2560#0000004
vless://c0b15b55-80dc-4afb-b49d-c109175c9bd6@game.wowowo14.top:8443?encryption=none&security=tls&sni=jp.zcR07.cLouDnS.BiZ&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=jP.zcR07.CLOUdNs.biz&path=%2FSfVWWuPidHBmfGdD%2FdHMuaHBjLnR3%3Fed%3D2560#0000005
vless://2f0afcf4-5b46-49c7-8d15-5aa08edf9226@h4p9z1.t7t7i7.com:2053?encryption=none&security=tls&sni=bPb.zcr07.us.Kg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bpB.ZcR07.uS.Kg&path=%2FjKcPyo636Nbs0Tdb%2FdHMuaHBjLnR3%3Fed%3D2560#0000006
vless://c0b15b55-80dc-4afb-b49d-c109175c9bd6@www.811xe.com:443?encryption=none&security=tls&sni=jP.ZCR07.ClOudNs.BIz&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=jP.zCR07.CloudNs.BIZ&path=%2Fx6dcVfeDL0wETXnc%2FdHMuaHBjLnR3%3Fed%3D2560#0000008
vless://8abf406e-95c3-4886-aba4-dae9dd66124a@hentai2read.info:2087?encryption=none&security=tls&sni=zBpb.R07.clouDNS.be&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=zBpb.R07.cLoUdNS.Be&path=%2FAFKXb0pQ8uBkvNIn%2FdHMuaHBjLnR3%3Fed%3D2560#00000006
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@3g.bcrenb.top:2053?encryption=none&security=tls&sni=BP.zcR07.finDHEre.ORg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=Bp.ZCR07.FinDHeRE.ORg&path=%2Fe6abfWwph8TPwR19%2FdHMuaHBjLnR3%3Fed%3D2560#00000007
vless://8abf406e-95c3-4886-aba4-dae9dd66124a@a.wowowo14.top:2087?encryption=none&security=tls&sni=zbpb.R07.CloUDNs.BE&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=zbpb.r07.ClOudNS.BE&path=%2FFtx6X4vzA07bk0Zy%2FdHMuaHBjLnR3%3Fed%3D2560#00000009
vless://034b0d4e-8903-497c-87e1-d4c5b924994b@www.467yy.com:2096?encryption=none&security=tls&sni=kj8.Zbb07.us.Kg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=kj8.ZBb07.uS.kG&path=%2FsFH2wCSsFHuWCJqc%2FdHMuaHBjLnR3%3Fed%3D2560#0008
vless://8abf406e-95c3-4886-aba4-dae9dd66124a@467yy.com:8443?encryption=none&security=tls&sni=ZBPB.R07.cloUDns.be&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=zbPB.r07.cLoUDNs.bE&path=%2FHGZGZfpkWumQKiv6%2FdHMuaHBjLnR3%3Fed%3D2560#0009
vless://14e3a0f4-96f0-49b8-b4ea-7c26ef211156@xx435.com:443?encryption=none&security=tls&sni=BPB.ZCr07.com.mp&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=BpB.zCr07.com.mP&path=%2FG5Egy3H7Wukm6qMJ%2FdHMuaHBjLnR3%3Fed%3D2560#d%2001
vless://14e3a0f4-96f0-49b8-b4ea-7c26ef211156@73d6d.com:8443?encryption=none&security=tls&sni=BPB.ZcR07.Com.mP&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=Bpb.zCr07.COM.Mp&path=%2F0l1tkYcI4JYGtcTq%2FdHMuaHBjLnR3%3Fed%3D2560#d%2002
vless://14e3a0f4-96f0-49b8-b4ea-7c26ef211156@haijiaovip.com:2083?encryption=none&security=tls&sni=BPB.ZCR07.com.mp&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bpb.zcR07.CoM.mp&path=%2FoXbPWcZL3Ovo8naA%2FdHMuaHBjLnR3%3Fed%3D2560#d%2005
vless://2f0afcf4-5b46-49c7-8d15-5aa08edf9226@www.xx435.com:443?encryption=none&security=tls&sni=BPb.ZCr07.uS.kg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bpB.zCr07.uS.kg&path=%2FLsa7fcSdonBFSwC6%2FdHMuaHBjLnR3%3Fed%3D2560#d%2009
vless://034b0d4e-8903-497c-87e1-d4c5b924994b@www.bb33ss.com:2053?encryption=none&security=tls&sni=kj8.zbB07.US.kg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=Kj8.ZbB07.Us.Kg&path=%2Fb5RvlwdED9jx6pAa%2FdHMuaHBjLnR3%3Fed%3D2560#d%20002
vless://034b0d4e-8903-497c-87e1-d4c5b924994b@www.1678vvv.com:8443?encryption=none&security=tls&sni=kj8.ZBB07.us.kG&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=kJ8.zbB07.uS.Kg&path=%2FJv4lBZfnpgvAzVew%2FdHMuaHBjLnR3%3Fed%3D2560#d%20003
vless://0c96d302-076e-4e46-a5b1-4e3a523beb8b@bb33ss.com:443?encryption=none&security=tls&sni=kjg.zbb07.us.kg&fp=randomized&type=ws&host=kjg.zbb07.us.kg&path=%2F%3Fed%3D2048#d%20005
vless://034b0d4e-8903-497c-87e1-d4c5b924994b@kj8.zbb07.us.kg:2087?encryption=none&security=tls&sni=kj8.ZbB07.us.Kg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=kj8.Zbb07.uS.kG&path=%2FThLbjBrOy9840xSJ%2FdHMuaHBjLnR3%3Fed%3D2560#d%20006
vless://034b0d4e-8903-497c-87e1-d4c5b924994b@kj.r08.us.kg:2087?encryption=none&security=tls&sni=kj8.ZbB07.us.Kg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=kj8.Zbb07.uS.kG&path=%2FThLbjBrOy9840xSJ%2FdHMuaHBjLnR3%3Fed%3D2560#d%20007
vless://c0b15b55-80dc-4afb-b49d-c109175c9bd6@jp.zcr07.cloudns.biz:2096?encryption=none&security=tls&sni=JP.ZCr07.CloUdNs.bIZ&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=jp.zcr07.clOudns.biZ&path=%2FzmNDyRg4INuswPv1%2FdHMuaHBjLnR3%3Fed%3D2560#d%20008
vless://c0b15b55-80dc-4afb-b49d-c109175c9bd6@www.ddwhm.com:2087?encryption=none&security=tls&sni=JP.zCr07.ClOuDnS.biZ&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=jp.zCr07.CLouDNs.BIz&path=%2F1WdHJWsSE1kdentY%2FdHMuaHBjLnR3%3Fed%3D2560#d%20009
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@edg.zbb07.us.kg:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&fp=randomized&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#d%200007
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogImQgMDAwMDYiLA0KICAiYWRkIjogImRkZC56Y3IwNy5jbG91ZG5zLmJpeiIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIwNTY0MWNmNS01OGQyLTRiYTQtYTlmMS1iM2NkYTBiMWZiMWQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogImRkZC56Y3IwNy5jTE9VZG5TLkJJWiIsDQogICJwYXRoIjogIi9vYmRpaS5jZmQ6NDQzL2xpbmt3cyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJkZGQuemNyMDcuY0xPVWRuUy5CSVoiLA0KICAiYWxwbiI6ICJoMiIsDQogICJmcCI6ICJzYWZhcmkiDQp9
vless://8abf406e-95c3-4886-aba4-dae9dd66124a@xn--vjqt4ya07q.xn--vjqt4ya07q.xn--vjqt4ya07q.xn--vjqt4ya07q.xn--vjqt4ya07q.xn--vjqt4ya07q.xn--vjqt4ya07q.xn--vjqt4ya07q.xn--vjqt4ya07q.xn--vjqt4ya07q.xn--vjqt4ya07q.xn--vjqt4ya07q.xn--vjqt4ya07q.xn--vjqt4ya07q.by-ktff-intel.im.114514782.xyz:2096?encryption=none&security=tls&sni=zBpB.r07.CLoUDNS.Be&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=zBPb.r07.CLOudns.Be&path=%2FtUMMG5mCMAxbJnCh%2FdHMuaHBjLnR3%3Fed%3D2560#d%200009




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
