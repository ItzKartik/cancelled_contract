(function(){var e={1467:function(e,t,n){"use strict";var a=n(49963),i=n(66252);const r={class:"main"};function s(e,t,n,a,s,o){const u=(0,i.up)("TheNavbar"),p=(0,i.up)("ErrorMessage"),d=(0,i.up)("router-view"),l=(0,i.up)("TheFooter"),y=(0,i.up)("WalletModal");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(u),o.errorShown?((0,i.wg)(),(0,i.j4)(p,{key:0})):(0,i.kq)("",!0),(0,i._)("div",r,[(0,i.Wm)(d)]),(0,i.Wm)(l),o.walletConnectModalShown?((0,i.wg)(),(0,i.j4)(y,{key:1})):(0,i.kq)("",!0)],64)}var o=n(5755),u=n(92003),p=n.n(u),d=n(3577);(0,i.dD)("data-v-22506aa9");const l={class:"navbar-left"},y=(0,i.Uk)("Carbon "),c=(0,i._)("span",null,"Finance",-1),m=(0,i.Uk)("Farm"),f=(0,i.Uk)("Info"),b=(0,i._)("a",{class:"tab",href:"https://bridge.arbitrum.io/",target:"_blank"},"Bridge",-1),w=(0,i.Uk)("Connect "),T=(0,i._)("span",null,"Wallet",-1);function v(e,t,n,a,r,s){const o=(0,i.up)("router-link"),u=(0,i.up)("Button");return(0,i.wg)(),(0,i.iD)("nav",null,[(0,i._)("div",l,[(0,i.Wm)(o,{to:"/",class:"brand-name"},{default:(0,i.w5)((()=>[y,c])),_:1}),(0,i.Wm)(o,{class:(0,d.C_)(["tab",{selected:"Farm"===s.route}]),to:"/"},{default:(0,i.w5)((()=>[m])),_:1},8,["class"]),(0,i.Wm)(o,{class:(0,d.C_)(["tab",{selected:"Info"===s.route}]),to:"/info"},{default:(0,i.w5)((()=>[f])),_:1},8,["class"]),b]),null==s.connectedAddress?((0,i.wg)(),(0,i.j4)(u,{key:0,onClick:s.connectWallet},{default:(0,i.w5)((()=>[w,T])),_:1},8,["onClick"])):((0,i.wg)(),(0,i.j4)(u,{key:1},{default:(0,i.w5)((()=>[(0,i.Uk)((0,d.zw)(s.shortenedAddress),1)])),_:1}))])}function h(e,t){return(0,i.wg)(),(0,i.iD)("button",null,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])}(0,i.Cn)();const g={};g.render=h,g.__scopeId="data-v-f35008dc";var M=g,C={components:{Button:M},methods:{async connectWallet(){this.$store.commit("setWalletConnectModalShown",!0)}},computed:{route(){return this.$route.name},shortenedAddress(){return this.connectedAddress.substring(0,6)+"..."+this.connectedAddress.substring(this.connectedAddress.length-4)},connectedAddress(){return this.$store.state.connectedAddress}}};C.render=v,C.__scopeId="data-v-22506aa9";var k=C;function _(e,t,n,a,r,s){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",{class:(0,d.C_)(["warn",s.errorType]),onClick:t[0]||(t[0]=(...e)=>s.fixWarning&&s.fixWarning(...e))},(0,d.zw)(s.errorMessage),3)])}var x={computed:{errorShown(){return this.$store.state.errorShown},errorType(){return this.$store.state.errorType},errorMessage(){return this.$store.state.errorMessage}},methods:{fixWarning(){"Not connected to arbitrum, click to swap!"==this.errorMessage&&this.addArbitrum()},async addArbitrum(){try{await window.web3.send("wallet_switchEthereumChain",[{chainId:"0x"+"A4B1".toString(16)}])}catch(e){if(4902===e.code)try{window.web3.send("wallet_addEthereumChain",[{chainId:"0x"+"A4B1".toString(16),chainName:"Arbitrum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:["https://arb1.arbitrum.io/rpc"],blockExplorerUrls:["https://arbiscan.io/"]}])}catch(t){console.log(t)}}}}};x.render=_,x.__scopeId="data-v-a3f5caae";var A=x,S=n.p+"img/twitter.bf36f3f6.svg",O=n.p+"img/discord.9a823ca6.svg";(0,i.dD)("data-v-1bb520a3");const E=(0,i._)("a",{href:"https://twitter.com/carbonfi_io",target:"_blank"},[(0,i._)("img",{src:S,alt:""})],-1),P=(0,i._)("a",{href:"https://discord.gg/XAp6bBJR4y",target:"_blank"},[(0,i._)("img",{src:O,alt:""})],-1),I=[E,P];function D(e,t,n,a,r,s){return(0,i.wg)(),(0,i.iD)("div",null,I)}(0,i.Cn)();var F={};F.render=D,F.__scopeId="data-v-1bb520a3";var $=F,W=n.p+"img/metamask.c901ad35.svg",L=n.p+"img/walletconnect.dfa25e47.svg",H=n.p+"img/coinbase.9fa41556.svg";(0,i.dD)("data-v-dde3a518");const R=(0,i._)("img",{src:W,alt:""},null,-1),B=(0,i._)("div",null,"Metamask",-1),N=[R,B],j=(0,i._)("img",{src:L,alt:""},null,-1),U=(0,i._)("div",null,"WalletConnect",-1),V=[j,U],q=(0,i._)("img",{src:H,alt:""},null,-1),J=(0,i._)("div",null,"Coinbase Wallet",-1),Q=[q,J];function z(e,t,n,r,s,o){return(0,i.wg)(),(0,i.iD)("div",{class:"bg",onClick:t[4]||(t[4]=(...e)=>o.closeModal&&o.closeModal(...e))},[(0,i._)("div",{class:"modal",onClick:t[3]||(t[3]=(0,a.iM)((()=>{}),["stop"]))},[(0,i._)("div",{class:"modal-row",onClick:t[0]||(t[0]=(...e)=>o.connectMetamask&&o.connectMetamask(...e))},N),(0,i._)("div",{class:"modal-row",onClick:t[1]||(t[1]=(...e)=>o.connectWalletConnect&&o.connectWalletConnect(...e))},V),(0,i._)("div",{class:"modal-row",onClick:t[2]||(t[2]=(...e)=>o.connectCoinbase&&o.connectCoinbase(...e))},Q)])])}(0,i.Cn)();var Y=n(72485),Z=n(80983),K={methods:{closeModal(){this.$store.commit("setWalletConnectModalShown",!1)},async connectMetamask(){let e=window.ethereum;window.web3=new o.Q(e),await window.web3.send("eth_requestAccounts",[]),this.$store.dispatch("setWalletData"),this.$store.commit("setConnectModal",!1)},async connectWalletConnect(){const e=new Y.Z({infuraId:"9e63d02ca12d426ab9de1339f9de9340"});await e.enable(),window.web3=new o.Q(e),await window.web3.listAccounts(),this.$store.dispatch("setWalletData"),this.$store.commit("setConnectModal",!1)},async connectCoinbase(){const e=new Z.ZP({appName:"Hermetica",appLogoURI:"www.google.com",darkMode:!0});let t=e.makeWeb3Provider("https://mainnet.infura.io/v3/9e63d02ca12d426ab9de1339f9de9340",1);window.web3=new o.Q(t),await window.web3.send("eth_requestAccounts",[]),this.$store.dispatch("setWalletData"),this.$store.commit("setConnectModal",!1)}}};K.render=z,K.__scopeId="data-v-dde3a518";var X=K,G={components:{TheNavbar:k,ErrorMessage:A,TheFooter:$,WalletModal:X},computed:{errorShown(){return this.$store.state.errorShown},walletConnectModalShown(){return this.$store.state.walletConnectModalShown}},created(){(async()=>{let e=await p()();null!=e?(e=new o.Q(e),window.web3=e,this.$store.dispatch("setWalletData"),e.provider.on("accountsChanged",(async()=>{window.location.reload()})),e.provider.on("chainChanged",(async()=>{window.location.reload()}))):this.$store.commit("setError",{message:"No wallet detected, please download metamask",type:"error"})})()}};G.render=s;var ee=G,te=n(42119);const ne=()=>n.e(279).then(n.bind(n,23279)),ae=()=>n.e(714).then(n.bind(n,25714)),ie=[{path:"/",name:"Farm",component:ne},{path:"/info",name:"Info",component:ae}],re=(0,te.p7)({history:(0,te.PO)("/"),routes:ie});var se=re,oe=n(34709),ue=n(2593),pe=n(50387),de=n(77616),le=n(84929),ye=n(67489),ce=JSON.parse('[{"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token0","type":"address"},{"indexed":true,"internalType":"address","name":"token1","type":"address"},{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"PairCreated","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allPairs","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allPairsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"createPair","outputs":[{"internalType":"address","name":"pair","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeToSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"migrator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairCodeHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_feeTo","type":"address"}],"name":"setFeeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"name":"setFeeToSetter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_migrator","type":"address"}],"name":"setMigrator","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),me=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sync","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]');const fe="0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",be="0x82af49447d8a07e3bd95bd0d56f35241523fbab1",we="0x0000000000000000000000000000000000000000",Te="0xfa42DA1bd08341537a44a4ca9D236D1c00A98b40",ve=6,he=18,ge="0x27F0408729dCC6A4672e1062f5003D2a07E4E10D",Me="0x701e594B58b183b93C1ebaE437fBC9a9A3eC97d7",Ce="0x2C5058325373d02Dfd6c08E48d91FcAf8fD49f45",ke="0x45acd6Af27B2506ad68C0fEA9F597D6eE6818722",_e="0x08da83452Ae158c3F348d4e0789b7A78989f34eE",xe="0xc35dadb65012ec5796536bd9864ed8773abc74c4",Ae="0x0BcC628397Ca51562d85376C35eD016968890Ac3",Se=ue.O$.from("86400"),Oe=ue.O$.from(1e8),Ee=[ge,Me,Ce,ke,Ae];async function Pe(e,t){let n=new pe.CH(xe,ce,window.web3),a=await n.getPair(e,t);return a}var Ie={state:{circulatingSupply:0,ETHPrice:0,CarbonPrice:0,TVL:0,farmInfo:{}},getters:{displayMarketCap(e){return e.CarbonPrice&&e.circulatingSupply?parseInt(e.CarbonPrice.mul(e.circulatingSupply).mul(e.ETHPrice).div(ue.O$.from(10).pow(18))).toLocaleString():0},TVLInUSD(e){return e.TVL&&e.ETHPrice?parseInt(e.TVL.mul(e.ETHPrice).div(ue.O$.from(10).pow(18))).toLocaleString():0},displayCirculatingSupply(e){return parseInt(e.circulatingSupply).toLocaleString()},displayTVL(e){let t=de.bM(e.TVL,18);return t.substring(0,t.indexOf(".")+2)},displayCarbonPriceInUSD(e){if(e.CarbonPrice&&e.ETHPrice){let t=de.bM(e.ETHPrice.mul(e.CarbonPrice).toString(),18);return t.substr(0,t.indexOf(".")+4)}return""}},actions:{async calculateCirculatingSupply({commit:e}){let t=ue.O$.from(15e5);for(let n of Ee){let e=new pe.CH(n,le,window.web3),a=await e.periodFinish(),i=await e.rewardRate(),r=Math.round(Date.now()/1e3);t=t.add(i.mul(a.sub(r)).div(ue.O$.from(10).pow(18)))}e("setCirculatingSupply",Oe.sub(t))},async getETHPrice({commit:e}){let t=await Pe(be,fe),n=new pe.CH(t,me,window.web3),a=await n.token0(),i=await n.getReserves(),r=a!==be?i._reserve1:i._reserve0,s=a!==be?i._reserve0:i._reserve1,o=r.mul(ue.O$.from(10).pow(he)),u=s.sub(1),p=o.div(u).div(ue.O$.from(10).pow(ve));e("setETHPrice",p)},async getCarbonPrice({commit:e}){let t=await Pe(be,Te),n=new pe.CH(t,me,window.web3),a=await n.token0(),i=await n.getReserves(),r=a===be?i._reserve1:i._reserve0,s=a===be?i._reserve0:i._reserve1,o=ue.O$.from(1),u=r.mul(o).mul(ue.O$.from(10).pow(18)),p=s.sub(o),d=u.div(p);e("setCarbonPrice",d)},async getTVL({commit:e,state:t}){let n=ue.O$.from(0);for(let a of Object.values(t.farmInfo))n=n.add(a.valueOfTotalStaked);e("setTVL",n)},async getFarmInfo({commit:e,rootState:t},n){let a,i=new pe.CH(n,le,window.web3),r=await i.rewardToken(),s=new pe.CH(r,ye,window.web3),o=await s.symbol(),u=await i.stakedToken(),p=new pe.CH(u,ye,window.web3);a=u!=we?await p.name():"ETH";let d=await i.rewardRate(),l=await i.totalSupply(),y=0,c=0,m=0,f=0,b=ue.O$.from(0);t.connectedAddress&&(f=await s.balanceOf(t.connectedAddress),u!=we?(a=await p.name(),m=await p.balanceOf(t.connectedAddress),b=await p.allowance(t.connectedAddress,n)):(b=ue.O$.from(1),m=await window.web3.getBalance(t.connectedAddress)),y=await i.balanceOf(t.connectedAddress),c=await i.earned(t.connectedAddress));let w,T=d.mul(Se),v=T.mul(t.farm.CarbonPrice);if(u===we&&(w=l),u===_e){let e=new pe.CH(r,ye,window.web3),n=await e.balanceOf(u);w=n.mul(2).mul(t.farm.CarbonPrice).div(ue.O$.from(10).pow(18))}if(u==Te&&(w=l.mul(t.farm.CarbonPrice).div(ue.O$.from(10).pow(18))),"0x89450F6C7d7f2c5971E9Ee28e94d8b199d17f673"==u){let e=new pe.CH(r,ye,window.web3),n=await e.balanceOf(u);w=n.mul(2).mul(t.farm.CarbonPrice).div(ue.O$.from(10).pow(18))}let h=v.div(w),g=de.bM(h.mul(365),16),M={address:n,stakedToken:u,rewardToken:r,stakedName:a,rewardName:o,rewardRate:d,totalSupply:l,valueOfTotalStaked:w,APR:g,depositedByUser:y,rewardsEarned:c,stakeTokenBalance:m,rewardTokenBalance:f,approvedAmount:b};return e("setFarmInfo",M),!0}},mutations:{setCirculatingSupply(e,t){e.circulatingSupply=t},setETHPrice(e,t){e.ETHPrice=t},setCarbonPrice(e,t){e.CarbonPrice=t},setTVL(e,t){e.TVL=t},setFarmInfo(e,t){e.farmInfo[t.address]=t}}};const De="0x27F0408729dCC6A4672e1062f5003D2a07E4E10D",Fe="0x701e594B58b183b93C1ebaE437fBC9a9A3eC97d7",$e="0x2C5058325373d02Dfd6c08E48d91FcAf8fD49f45",We="0x45acd6Af27B2506ad68C0fEA9F597D6eE6818722",Le="0x0BcC628397Ca51562d85376C35eD016968890Ac3",He=[De,Fe,$e,We,Le];var Re=(0,oe.MT)({state:{connectedAddress:null,connectedChain:null,errorMessage:"",errorShown:!1,errorType:"",walletConnectModalShown:!1,farmInfoLoaded:!1},getters:{connectedToArbitrum:e=>42161==e.connectedChain,isConnected:e=>null!=e.connectedAddress},actions:{async refreshData({dispatch:e}){return e("calculateCirculatingSupply"),e("getETHPrice"),await e("getCarbonPrice"),await Promise.all(He.map((async t=>await e("getFarmInfo",t)))),e("getTVL"),!0},async setWalletData({commit:e,dispatch:t}){const n=await window.web3.listAccounts();n.length>0&&e("setAddress",n[0]);const a=await window.web3.getNetwork();e("setChain",a.chainId),42161!=a.chainId?e("setError",{message:"Not connected to arbitrum, click to swap!",type:"warning"}):(await t("refreshData"),e("setFarmInfoLoaded",!0),setInterval((async()=>{t("refreshData")}),1e4))}},mutations:{setFarmInfoLoaded(e,t){e.farmInfoLoaded=t},setAddress(e,t){e.connectedAddress=t},setChain(e,t){e.connectedChain=t},setError(e,{message:t,type:n}){e.errorMessage=t,e.errorType=n,e.errorShown=!0},clearError(e){e.errorShown=!1,e.errorMessage=""},setWalletConnectModalShown(e,t){e.walletConnectModalShown=t}},modules:{farm:Ie}});(0,a.ri)(ee).use(Re).use(se).mount("#app")},36563:function(){},46601:function(){},89214:function(){},69386:function(){},31616:function(){},29120:function(){},46586:function(){},69862:function(){},40964:function(){},71408:function(){},23646:function(){},42602:function(){},84929:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_rewardToken","type":"address"},{"internalType":"contract IERC20","name":"_stakedToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint128","name":"reward","type":"uint128"},{"internalType":"uint64","name":"duration","type":"uint64"}],"name":"setRewardParams","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint128","name":"amount","type":"uint128"}],"name":"stake","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"forWhom","type":"address"},{"internalType":"uint128","name":"amount","type":"uint128"}],"name":"stakeFor","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"stakedToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewards","outputs":[{"internalType":"uint128","name":"userRewardPerTokenPaid","type":"uint128"},{"internalType":"uint128","name":"rewards","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint128","name":"amount","type":"uint128"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawReward","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},67489:function(e){"use strict";e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,a,i,r){if(!a){var s=1/0;for(d=0;d<e.length;d++){a=e[d][0],i=e[d][1],r=e[d][2];for(var o=!0,u=0;u<a.length;u++)(!1&r||s>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[u])}))?a.splice(u--,1):(o=!1,r<s&&(s=r));if(o){e.splice(d--,1);var p=i();void 0!==p&&(t=p)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,i,r]}}(),function(){n.F={},n.E=function(e){Object.keys(n.F).map((function(t){n.F[t](e)}))}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{279:"4156f9bc",714:"e38cae54"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(143===e?"app":e)+"."+{143:"86e9dbd6",279:"79d761f6",714:"95f35467"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="carbon:";n.l=function(a,i,r,s){if(e[a])e[a].push(i);else{var o,u;if(void 0!==r)for(var p=document.getElementsByTagName("script"),d=0;d<p.length;d++){var l=p[d];if(l.getAttribute("src")==a||l.getAttribute("data-webpack")==t+r){o=l;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",t+r),o.src=a),e[a]=[i];var y=function(t,n){o.onerror=o.onload=null,clearTimeout(c);var i=e[a];if(delete e[a],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(e){return e(n)})),t)return t(n)},c=setTimeout(y.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=y.bind(null,o.onerror),o.onload=y.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var r=function(r){if(i.onerror=i.onload=null,"load"===r.type)n();else{var s=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=o,i.parentNode.removeChild(i),a(u)}};return i.onerror=i.onload=r,i.href=t,document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var i=n[a],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){i=s[a],r=i.getAttribute("data-href");if(r===e||r===t)return i}},a=function(a){return new Promise((function(i,r){var s=n.miniCssF(a),o=n.p+s;if(t(s,o))return i();e(a,o,i,r)}))},i={143:0};n.f.miniCss=function(e,t){var n={279:1,714:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=a(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(n,a){i=e[t]=[n,a]}));a.push(i[2]=r);var s=n.p+n.u(t),o=new Error,u=function(a){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",o.name="ChunkLoadError",o.type=r,o.request=s,i[1](o)}};n.l(s,u,"chunk-"+t,t)}},n.F.j=function(t){if(!n.o(e,t)||void 0===e[t]){e[t]=null;var a=document.createElement("link");n.nc&&a.setAttribute("nonce",n.nc),a.rel="prefetch",a.as="script",a.href=n.p+n.u(t),document.head.appendChild(a)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,r,s=a[0],o=a[1],u=a[2],p=0;if(s.some((function(t){return 0!==e[t]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(u)var d=u(n)}for(t&&t(a);p<s.length;p++)r=s[p],n.o(e,r)&&e[r]&&e[r][0](),e[s[p]]=0;return n.O(d)},a=self["webpackChunkcarbon"]=self["webpackChunkcarbon"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}(),function(){n.O(0,[143],(function(){n.E(279),n.E(714)}),5)}();var a=n.O(void 0,[998],(function(){return n(1467)}));a=n.O(a)})();
//# sourceMappingURL=app.519949ef.js.map