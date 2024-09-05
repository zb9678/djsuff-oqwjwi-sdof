
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
vless://37691131-db68-49bc-b1bb-840277c54390@www.hong27.com:2087?encryption=none&security=tls&sni=xB.ZCr07.rR.NU&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=Xb.ZCr07.Rr.Nu&path=%2FpL0SkBX4pEEcZzMW%2FdHMuaHBjLnR3%3Fed%3D2560#zz01
trojan://trojan@www.anypornxvideos.com:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#009
trojan://trojan@wap.bcrenb.top:2053?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#006
vless://034b0d4e-8903-497c-87e1-d4c5b924994b@www.811xe.com:8443?encryption=none&security=tls&sni=Kj8.ZbB07.US.KG&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=Kj8.zBB07.Us.Kg&path=%2FLxRDj7AKr37cjZB8%2FdHMuaHBjLnR3%3Fed%3D2560#zz03
vless://c0b15b55-80dc-4afb-b49d-c109175c9bd6@a234pn.com:2053?encryption=none&security=tls&sni=jP.zCr07.CLOuDNs.BIz&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=Jp.ZCr07.CLOUDns.Biz&path=%2FZG5ZNwc3mTsy824v%2FdHMuaHBjLnR3%3Fed%3D2560#002
trojan://trojan@hjca73.top:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#007
trojan://zbb@www.vcrdb.net:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2Fpyip%3Dts.hpc.tw#005
vless://37691131-db68-49bc-b1bb-840277c54390@tx4.cc:2083?encryption=none&security=tls&sni=xb.Zcr07.rR.nU&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=xB.ZcR07.Rr.nu&path=%2FS2An5PejKUrWsB51%2FdHMuaHBjLnR3%3Fed%3D2560#zzzzz05
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@520ggxx.com:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#001
vless://37691131-db68-49bc-b1bb-840277c54390@0505nn.com:443?encryption=none&security=tls&sni=XB.ZCR07.RR.nU&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=xb.zCr07.rr.nu&path=%2FoJDBUYvwFWZI6eGg%2FdHMuaHBjLnR3%3Fed%3D2560#zzzzz07
vless://8abf406e-95c3-4886-aba4-dae9dd66124a@kj.r08.us.kg:2087?encryption=none&security=tls&sni=ZbPb.R07.cLOUDnS.bE&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=zbpB.R07.clouDNs.BE&path=%2F1SbwLzfgjbcsOzV1%2FdHMuaHBjLnR3%3Fed%3D2560#zzzzz01
trojan://trojan@hs.taokong8.com:8443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#004
vless://c0b15b55-80dc-4afb-b49d-c109175c9bd6@www.a234aa.com:2096?encryption=none&security=tls&sni=jp.zcR07.CLOUdnS.BIz&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=jP.ZCR07.CLoudNs.bIZ&path=%2FIXbg2Cb15sCrcVEF%2FdHMuaHBjLnR3%3Fed%3D2560#zz05
vless://37691131-db68-49bc-b1bb-840277c54390@xb.zcr07.rr.nu:8443?encryption=none&security=tls&sni=xb.ZcR07.rR.NU&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=XB.Zcr07.rR.nU&path=%2FpJYHEQSfDjbETisS%2FdHMuaHBjLnR3%3Fed%3D2560#zz08
vless://37691131-db68-49bc-b1bb-840277c54390@md631.xyz:2083?encryption=none&security=tls&sni=xB.zcR07.rR.NU&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=XB.ZCR07.Rr.nU&path=%2Fbsg2vtvEtb68wNiW%2FdHMuaHBjLnR3%3Fed%3D2560#zz02
vless://8abf406e-95c3-4886-aba4-dae9dd66124a@ca.zbb07.us.kg:2083?encryption=none&security=tls&sni=ZbpB.r07.cLOuDNS.Be&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=zbPB.R07.CLOUdNS.Be&path=%2FJrL80JKdUITfLzBI%2FdHMuaHBjLnR3%3Fed%3D2560#zzzzz02
vless://37691131-db68-49bc-b1bb-840277c54390@www.8a7c5.com:2096?encryption=none&security=tls&sni=xb.zcr07.rR.nu&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=Xb.zCr07.Rr.Nu&path=%2FieKD933efBCzyDMx%2FdHMuaHBjLnR3%3Fed%3D2560#zzzzz03
vless://c0b15b55-80dc-4afb-b49d-c109175c9bd6@bpbsg.pages.dev.:2087?encryption=none&security=tls&sni=Jp.Zcr07.cLoUDns.bIz&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=jP.ZCr07.clOUDnS.BiZ&path=%2FuK1qPKw82VqMQQhc%2FdHMuaHBjLnR3%3Fed%3D2560#zz06
trojan://trojan@www.8a8c8.com:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#008
trojan://trojan@soss.vip:8443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#003
vless://c0b15b55-80dc-4afb-b49d-c109175c9bd6@www.bcrenb.top:2083?encryption=none&security=tls&sni=Jp.zCr07.clOuDNS.BIz&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=JP.zCR07.cloudNS.BIz&path=%2F3Qbu1YSopHLpsOz3%2FdHMuaHBjLnR3%3Fed%3D2560#zz07
vless://37691131-db68-49bc-b1bb-840277c54390@www.0505nn.com:8443?encryption=none&security=tls&sni=xB.zCr07.Rr.nU&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=XB.zCr07.rR.NU&path=%2Ftkx0gT9DX8Ya0Amg%2FdHMuaHBjLnR3%3Fed%3D2560#zzzzz06
vless://8abf406e-95c3-4886-aba4-dae9dd66124a@ziz.zcr07.us.kg:2096?encryption=none&security=tls&sni=zBpB.r07.CLoUDNS.Be&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=zBPb.r07.CLOudns.Be&path=%2FtUMMG5mCMAxbJnCh%2FdHMuaHBjLnR3%3Fed%3D2560#zz09
vless://37691131-db68-49bc-b1bb-840277c54390@738mm.com:2053?encryption=none&security=tls&sni=Xb.Zcr07.rR.nu&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=Xb.zcR07.rr.nU&path=%2F05A0HmP4pTl87Lbz%2FdHMuaHBjLnR3%3Fed%3D2560#zzzzz04
vless://14e3a0f4-96f0-49b8-b4ea-7c26ef211156@east.im:443?encryption=none&security=tls&sni=BPB.zcr07.CoM.MP&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bPB.ZcR07.Com.mP&path=%2Ftjpa1K41P6TApdEe%2FdHMuaHBjLnR3%3Fed%3D2560#zzzzz08
vless://034b0d4e-8903-497c-87e1-d4c5b924994b@www.467yy.com:443?encryption=none&security=tls&sni=KJ8.zBB07.US.KG&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=Kj8.zBb07.US.kg&path=%2FqBbCoTpBdWBnXAeo%2FdHMuaHBjLnR3%3Fed%3D2560#zz04
vless://b2ca329a-f595-4b17-92ec-c59604e64f9c@11863.com:443?encryption=none&security=tls&sni=ZYH.Z07.uS.kG&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=ZYh.z07.US.Kg&path=%2FDCBPRArkJz7SuBkf%2FdHMuaHBjLnR3%3Fed%3D2560#zzzzz09



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
