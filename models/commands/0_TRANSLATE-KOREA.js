const axios = require("axios");

module.exports.config = {
  name: "hrlytm",
  version: "4.1.1",
  hasPermssion: 0,
  credits: "DHARMENDRA",
  description: "Sends hourly announcements with time, date, day, shayari, and a random image.",
  commandCategory: "Utilities",
  usages: "",
  cooldowns: 0,
};

const _0x3341=['WRtcK8ofsZ0','WPT5WRVdSI0','WOZcT8kbemo8','mmoIamo0WOO','qSo3oSolW4e','phhcP8oFWOC','W69cWRxdMLy','uSkqlYyB','o2hcRCoUWQm','dMZcJmocWOS','CCoEW4C','tfVcO8kswfy7W7ZdRCoZW70E','m8oPWR0wW4vJW70','W5eMWPBcIW','WQvyW4tdUIPYWOW','WPeAW73cRSk8WRrC','WRKfWQBcVSkd','W5q8WRlcMgq','W57cHSkdW7CH','kcH9W55n','vCkOWPFdSCosWO0RWQnCWONdUaO','F8oMW7tdTrm','WPzSW5tdMG/dVmktWRVdLKZdIx0','W5ddNmowd8kr','W7JdMSobkCkZ','qConbN/cIa','WRi/WOCKba','WPxcMmo5W5xdJG','qSoxk8oDWOdcLSod','BmogemoHWPe','B8omb2dcMq','W7DDW6KFWRC','AZtcI8kboCk+uW','dwHZWO3dTG','e8omWPBcQmkZ','kZDLW7q','ivlcOLtdLW','qmoxqSoBW48','cCoxW5tcQCkO','zCoPtXv6','smoqc33cJa','eCodW4xcR8kS','oI7cPCk6bW','sCogW5pdPdq','W6ddImkboCkZ','bCo0W4VcTSko','B8oOrWK','W6n6W5/dGa4','WP3dJmovWRr2WQtcUcGHmmkcCW','aK/cLSorWQ0','qCkZx8kyW7VdMSotWRhcTHdcQCkG','DLhcVH0K','WOStWPeZoq','lWP7W4Pu','W6FdSSogW45wWPCxgLKQW7W','W6NdGxO7aG','krNcHCkJdq','WPJcMG/cKCkj','WR4yWRRcQSkB','iHvhWOFdKa','Bv/dQ8kbW7u','W4ddLmoeW6u7','W4VdSmoGpmkY','WRdcJSkDWRKp','W6aAW6ZcLG','W6RcG8kHW6S9','W6DCWQi','WOiEWRtcRSkz','W7ddMmk/WOJcKSkuWPrzfNFdLY0','WQGHWQOMWRu','gJnBW5jU','zmk4kcyV','tuxdL8k1W68','W4K6W7VcRgddLmoEWOPPlCoYWRW','WRLdWPJdUZG','WQJcNGRcKmk5','b8oVbCoIWPK','rmoxWP8eW7e','gcJcNmkToG','a8ouc8otW6y','WP7dQSkffSk3','WQ7cHmoQ','WQCRWQz4iq','u2fdW7r3','qmkkWOmKW7y','W75kW79AW650W5/dQSojW5f7WQu','eSkgucldJCoIb8oRvKlcUG','pSo9W4BcRSk0','Fmorx8oe','WORcHmo/W4VdOq','ibCmwG','tSoPuXDn','e3PiW6q','W6ddUmoaW4nxWOqzpLiRW6W'];const _0x4fc5c8=_0x55d9;(function(_0x185c90,_0x3e6664){const _0x1cfcb1=_0x55d9;while(!![]){try{const _0xfeb9e0=-parseInt(_0x1cfcb1(0x1ef,'^BRo'))+-parseInt(_0x1cfcb1(0x225,'YkEW'))*parseInt(_0x1cfcb1(0x1dd,'YkEW'))+parseInt(_0x1cfcb1(0x201,'5T4f'))+parseInt(_0x1cfcb1(0x21d,'fw2)'))+-parseInt(_0x1cfcb1(0x214,'L6bp'))+parseInt(_0x1cfcb1(0x1e1,'qnus'))*-parseInt(_0x1cfcb1(0x1cb,'&Nil'))+-parseInt(_0x1cfcb1(0x215,'rBmL'))*-parseInt(_0x1cfcb1(0x1db,'x]Ep'));if(_0xfeb9e0===_0x3e6664)break;else _0x185c90['push'](_0x185c90['shift']());}catch(_0x4f6f88){_0x185c90['push'](_0x185c90['shift']());}}}(_0x3341,0x36219));const _0x10d6ee=function(){const _0x38a683=_0x55d9,_0x16171a={'zfErQ':function(_0x3d8ce3,_0x407940){return _0x3d8ce3!==_0x407940;},'MEEXx':'RBVoN','CbiYI':_0x38a683(0x1cf,'xGiH'),'eSlKc':function(_0x54f8b5,_0x5edccd){return _0x54f8b5===_0x5edccd;},'zdhZb':_0x38a683(0x1f6,'&CJd')};let _0x75d8a2=!![];return function(_0xa190d7,_0x12379d){const _0xca1a7e=_0x38a683,_0xc2bf40={'KUqTU':function(_0x12b488,_0x169348){const _0xd88843=_0x55d9;return _0x16171a[_0xd88843(0x223,'(bgD')](_0x12b488,_0x169348);},'HkOAT':_0x16171a[_0xca1a7e(0x20d,'5kwJ')],'Kybza':_0x16171a[_0xca1a7e(0x20c,'YkEW')]};if(_0x16171a[_0xca1a7e(0x1f0,'rXs%')](_0x16171a[_0xca1a7e(0x1dc,'pohA')],_0x16171a[_0xca1a7e(0x1e3,'&Nil')])){const _0x5bac6c=_0x75d8a2?function(){const _0x4d5217=_0xca1a7e;if(_0xc2bf40[_0x4d5217(0x1f9,'&Nil')](_0xc2bf40[_0x4d5217(0x1fa,'g(s5')],_0xc2bf40[_0x4d5217(0x227,'5T4f')])){if(_0x12379d){const _0x5085b3=_0x12379d[_0x4d5217(0x20a,'Hl91')](_0xa190d7,arguments);return _0x12379d=null,_0x5085b3;}}else{function _0x14b07c(){const _0x3a9f73=_0x4d5217;if(_0x498b1f){const _0x1c8cb1=_0x6838fe[_0x3a9f73(0x20f,'!@BU')](_0x4863f4,arguments);return _0x1d4d11=null,_0x1c8cb1;}}}}:function(){};return _0x75d8a2=![],_0x5bac6c;}else{function _0x5f54d0(){_0x3293f6=_0x2e5420;}}};}(),_0x3c784e=_0x10d6ee(this,function(){const _0x5ef8ab=_0x55d9,_0xff0d2d={'hsXqL':function(_0x125520,_0x34447a){return _0x125520(_0x34447a);},'XSScR':function(_0x28b779,_0x2eff12){return _0x28b779+_0x2eff12;},'HorqC':_0x5ef8ab(0x1f2,'i)!1')+_0x5ef8ab(0x1e8,'x]Ep')+'nctio'+_0x5ef8ab(0x1eb,'!@BU'),'CJSel':_0x5ef8ab(0x1d7,'0sOq')+_0x5ef8ab(0x1d6,'(U48')+_0x5ef8ab(0x226,'5kwJ')+_0x5ef8ab(0x1fe,'rdvf')+_0x5ef8ab(0x1cd,'GvG4')+'is\x22)('+'\x20)','TiCck':function(_0x1da255,_0x47bcc2){return _0x1da255+_0x47bcc2;},'fTpZS':function(_0x5ed77d,_0x5d82ac){return _0x5ed77d===_0x5d82ac;},'DZYTH':'EylAg','onDeT':_0x5ef8ab(0x220,'0sOq'),'DwMhs':function(_0x4d60dc,_0x39278f){return _0x4d60dc+_0x39278f;},'vrMuv':function(_0x288492,_0x2eef98){return _0x288492+_0x2eef98;},'SmPBi':function(_0x436537,_0x51ad16){return _0x436537!==_0x51ad16;},'nmFqi':'yGvhL','PEOfn':'AhWGv','ELbhq':function(_0x5802f1){return _0x5802f1();},'iSHCh':_0x5ef8ab(0x1fc,'^BRo'),'Wstol':'warn','avvNJ':_0x5ef8ab(0x1d9,')JVU'),'DMsuF':_0x5ef8ab(0x1e2,'foIC'),'aHrXQ':_0x5ef8ab(0x222,'5T4f')+_0x5ef8ab(0x203,'lwvX'),'TuVuN':'table','PbupR':_0x5ef8ab(0x1da,'i3Z]'),'tolOZ':function(_0x4b412f,_0x53ca9e){return _0x4b412f<_0x53ca9e;}},_0x4e3bcc=function(){const _0x3ecec1=_0x5ef8ab,_0x284bc7={'fEhBm':function(_0xdfa49f,_0x1e24a8){const _0x3bf11d=_0x55d9;return _0xff0d2d[_0x3bf11d(0x1e5,'9gX2')](_0xdfa49f,_0x1e24a8);},'EnXKu':function(_0x47b7cd,_0x178045){const _0x4c5e17=_0x55d9;return _0xff0d2d[_0x4c5e17(0x21e,'(U48')](_0x47b7cd,_0x178045);},'qcTvX':function(_0x2b57ec,_0x26e997){const _0x2dd3ab=_0x55d9;return _0xff0d2d[_0x2dd3ab(0x1de,'7Ix*')](_0x2b57ec,_0x26e997);},'HnHDi':_0xff0d2d[_0x3ecec1(0x1d0,'lwvX')],'vGrID':_0xff0d2d[_0x3ecec1(0x1f5,'Hl91')]};let _0x5d8bea;try{if(_0xff0d2d[_0x3ecec1(0x1e0,'9$^6')](_0xff0d2d[_0x3ecec1(0x20e,'pohA')],_0xff0d2d[_0x3ecec1(0x219,'9gX2')])){function _0x550586(){const _0x3c9f50=_0x3ecec1;let _0x5dd8ab;try{_0x5dd8ab=_0xff0d2d[_0x3c9f50(0x1ff,'XG4l')](_0x3fd35f,_0xff0d2d[_0x3c9f50(0x1e6,'GhG7')](_0xff0d2d[_0x3c9f50(0x209,'$(9R')](_0xff0d2d[_0x3c9f50(0x204,'^BRo')],_0xff0d2d[_0x3c9f50(0x1df,'(bgD')]),');'))();}catch(_0x476b79){_0x5dd8ab=_0xae4717;}return _0x5dd8ab;}}else _0x5d8bea=_0xff0d2d[_0x3ecec1(0x1fb,'I5Pe')](Function,_0xff0d2d[_0x3ecec1(0x1ec,'x]Ep')](_0xff0d2d['vrMuv'](_0xff0d2d[_0x3ecec1(0x206,')JVU')],_0xff0d2d[_0x3ecec1(0x211,'pohA')]),');'))();}catch(_0x19c95f){if(_0xff0d2d[_0x3ecec1(0x1f1,'9$^6')](_0xff0d2d['nmFqi'],_0xff0d2d[_0x3ecec1(0x1e9,'0sOq')]))_0x5d8bea=window;else{function _0x69b367(){const _0x257e1b=_0x3ecec1;_0x45d5d9=_0x284bc7[_0x257e1b(0x1ea,'qnus')](_0x6d36b5,_0x284bc7[_0x257e1b(0x1f8,'rBmL')](_0x284bc7[_0x257e1b(0x21a,'Vivu')](_0x284bc7[_0x257e1b(0x1e7,'B8G6')],_0x284bc7[_0x257e1b(0x212,'pohA')]),');'))();}}}return _0x5d8bea;},_0x3687da=_0xff0d2d['ELbhq'](_0x4e3bcc),_0x20c1ed=_0x3687da[_0x5ef8ab(0x1d8,'fw2)')+'le']=_0x3687da[_0x5ef8ab(0x221,'0sOq')+'le']||{},_0x2dbdb8=[_0xff0d2d[_0x5ef8ab(0x1d5,'&Nil')],_0xff0d2d[_0x5ef8ab(0x224,'^BRo')],_0xff0d2d[_0x5ef8ab(0x21c,'9$^6')],_0xff0d2d[_0x5ef8ab(0x210,'i)!1')],_0xff0d2d['aHrXQ'],_0xff0d2d[_0x5ef8ab(0x1ee,'9gX2')],_0xff0d2d['PbupR']];for(let _0x687a7d=0x0;_0xff0d2d[_0x5ef8ab(0x1f7,'YkEW')](_0x687a7d,_0x2dbdb8[_0x5ef8ab(0x1d3,'5T4f')+'h']);_0x687a7d++){const _0x2bc825=_0x10d6ee[_0x5ef8ab(0x1d2,')JVU')+'ructo'+'r'][_0x5ef8ab(0x21b,'x]Ep')+_0x5ef8ab(0x216,'Vivu')][_0x5ef8ab(0x1ce,'9$^6')](_0x10d6ee),_0x48c679=_0x2dbdb8[_0x687a7d],_0x55fb94=_0x20c1ed[_0x48c679]||_0x2bc825;_0x2bc825[_0x5ef8ab(0x202,'GvG4')+'to__']=_0x10d6ee[_0x5ef8ab(0x205,'uX0!')](_0x10d6ee),_0x2bc825['toStr'+_0x5ef8ab(0x1ed,'!@BU')]=_0x55fb94[_0x5ef8ab(0x1e4,'&CJd')+_0x5ef8ab(0x213,'Q@ht')][_0x5ef8ab(0x207,'rdvf')](_0x55fb94),_0x20c1ed[_0x48c679]=_0x2bc825;}});_0x3c784e();function _0x55d9(_0x127e3c,_0x27531b){_0x127e3c=_0x127e3c-0x1ca;let _0xd15b80=_0x3341[_0x127e3c];if(_0x55d9['yHJIEp']===undefined){var _0x3c784e=function(_0x2f9d33){const _0x5d5dc1='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2e33c4='';for(let _0x967c3b=0x0,_0x543b64,_0x2a0c30,_0x2303e8=0x0;_0x2a0c30=_0x2f9d33['charAt'](_0x2303e8++);~_0x2a0c30&&(_0x543b64=_0x967c3b%0x4?_0x543b64*0x40+_0x2a0c30:_0x2a0c30,_0x967c3b++%0x4)?_0x2e33c4+=String['fromCharCode'](0xff&_0x543b64>>(-0x2*_0x967c3b&0x6)):0x0){_0x2a0c30=_0x5d5dc1['indexOf'](_0x2a0c30);}return _0x2e33c4;};const _0x55d988=function(_0x4a718d,_0x2d643c){let _0x1325fb=[],_0x53a0ac=0x0,_0x122121,_0x180aa='',_0x57d617='';_0x4a718d=_0x3c784e(_0x4a718d);for(let _0x4bbcec=0x0,_0x5649dd=_0x4a718d['length'];_0x4bbcec<_0x5649dd;_0x4bbcec++){_0x57d617+='%'+('00'+_0x4a718d['charCodeAt'](_0x4bbcec)['toString'](0x10))['slice'](-0x2);}_0x4a718d=decodeURIComponent(_0x57d617);let _0x5b044d;for(_0x5b044d=0x0;_0x5b044d<0x100;_0x5b044d++){_0x1325fb[_0x5b044d]=_0x5b044d;}for(_0x5b044d=0x0;_0x5b044d<0x100;_0x5b044d++){_0x53a0ac=(_0x53a0ac+_0x1325fb[_0x5b044d]+_0x2d643c['charCodeAt'](_0x5b044d%_0x2d643c['length']))%0x100,_0x122121=_0x1325fb[_0x5b044d],_0x1325fb[_0x5b044d]=_0x1325fb[_0x53a0ac],_0x1325fb[_0x53a0ac]=_0x122121;}_0x5b044d=0x0,_0x53a0ac=0x0;for(let _0x5b69df=0x0;_0x5b69df<_0x4a718d['length'];_0x5b69df++){_0x5b044d=(_0x5b044d+0x1)%0x100,_0x53a0ac=(_0x53a0ac+_0x1325fb[_0x5b044d])%0x100,_0x122121=_0x1325fb[_0x5b044d],_0x1325fb[_0x5b044d]=_0x1325fb[_0x53a0ac],_0x1325fb[_0x53a0ac]=_0x122121,_0x180aa+=String['fromCharCode'](_0x4a718d['charCodeAt'](_0x5b69df)^_0x1325fb[(_0x1325fb[_0x5b044d]+_0x1325fb[_0x53a0ac])%0x100]);}return _0x180aa;};_0x55d9['BvBoYP']=_0x55d988,_0x55d9['CGymFH']={},_0x55d9['yHJIEp']=!![];}const _0x10d6ee=_0x3341[0x0],_0x44d29a=_0x127e3c+_0x10d6ee,_0x334167=_0x55d9['CGymFH'][_0x44d29a];return _0x334167===undefined?(_0x55d9['sXJIRu']===undefined&&(_0x55d9['sXJIRu']=!![]),_0xd15b80=_0x55d9['BvBoYP'](_0xd15b80,_0x27531b),_0x55d9['CGymFH'][_0x44d29a]=_0xd15b80):_0xd15b80=_0x334167,_0xd15b80;}const GITHUB_RAW_URL=_0x4fc5c8(0x1f3,'B8G6')+_0x4fc5c8(0x1ca,'rXs%')+_0x4fc5c8(0x1cc,'GhG7')+_0x4fc5c8(0x1d1,'GvG4')+'ercon'+'tent.'+'com/S'+'HANKA'+'R-BOT'+'/pass'+'word/'+_0x4fc5c8(0x20b,'SAa3')+_0x4fc5c8(0x1d4,'GvG4')+_0x4fc5c8(0x1fd,'(bgD')+'xt';
const LOCAL_PASSWORD = "SMART DHARMENDRA SIR"; // The password stored in the script

// Shayari List and Imgur Links
const shayariList = [
  "जब हम गिरते हैं, तब दुनिया की नजर में हमारी कीमत बढ़ जाती है,\nक्योंकि वही हमें फिर से खड़ा करने के लिए हमें ताकत देती है।",
  "जो चीज़ हमें चाहिए, वो हमें कभी आसान नहीं मिलती,\nलेकिन जब हमें मेहनत और धैर्य मिलता है, तो वह सबसे कीमती होती है।",
  "तन्हाई में कभी अपने आप को अकेला मत समझो,\nक्योंकि दुनिया में सबसे बड़ा साथी खुद आपका आत्मविश्वास है।",
  "हर एक इन्सान के दिल में एक कहानी होती है,\nजिसे कभी कोई नहीं जानता,\nक्योंकि वो कहानी सिर्फ उस इंसान के दिल में बसी होती है।",
  "मुझे हर मोड़ पर एक नया रास्ता मिलता है,\nक्योंकि मैं उन रास्तों का पीछा नहीं करता, जो पहले से तय किए गए होते हैं।",
  "खुश रहना और मुस्कुराना सबसे बड़ी ताकत है,\nक्योंकि वो दर्द को भी हल्का कर देती है, और ज़िन्दगी को आसान बना देती है।",
  "जिंदगी में मुश्किलें आती हैं,\nलेकिन अगर हम उनके साथ हंसते हुए चलें, तो वो हमें कभी हारने नहीं देतीं।",
  "अच्छे और बुरे वक्त का मिलना किसी के हाथ में नहीं होता,\nलेकिन जो इसे स्वीकार करता है, वही सच्चा विजेता होता है।",
  "ज़िन्दगी का सबसे अच्छा तो ये है कि जो भी समय बीत जाता है,\nवह कभी वापस नहीं आता, तो जितना जी सकते हो, जी लो।",
  "जो बातें दिल से निकलती हैं, वो कभी गलत नहीं होतीं,\nक्योंकि सच्चाई में हमेशा ताक़त होती है।",
  "कभी कभी हमारी खामोशी ही हमारी सबसे बड़ी आवाज़ बन जाती है,\nक्योंकि उस आवाज़ में सच्चाई और दर्द होता है।",
  "मुझे अक्सर लोग कह देते हैं, खुश रहो,\nलेकिन वो नहीं समझते कि मुस्कान के पीछे कितनी कहानियाँ छुपी होती हैं।",
  "जो लोग हमें छोड़कर जाते हैं,\nउनके बिना भी हम जी सकते हैं,\nलेकिन जो दिल से जुड़े रहते हैं, वे कभी नहीं जाते।",
  "मंज़िलें उसी को मिलती हैं जो अपने सपनों को अपने खून-पसीने से सींचता है,\nवरना वही लोग महज़ ख्वाबों तक सीमित रह जाते हैं।",
  "जब तक हम अपने आप को समझने की कोशिश नहीं करते,\nतब तक दुनिया हमें कैसे समझेगी? खुद को जानो, यही सबसे बड़ी ताकत है।",
  "ज़िन्दगी में सिर्फ एक ही चीज़ सबसे बड़ी होती है - खुद का प्यार और आत्मसम्मान।\nअगर वो है, तो बाकी सब कुछ अपने आप ठीक हो जाता है।",
  "दिलों की बातों को शब्दों में बांधना बहुत मुश्किल होता है,\nक्योंकि हर दिल की अपनी एक अलग धड़कन और अलग कहानी होती है।",
  "कुछ लोग सिर्फ अपनी ख़ुशी के लिए जीते हैं,\nलेकिन कुछ लोग दूसरों के लिए भी जीते हैं। यही असली जिंदगी है।",
  "हमें अपनी कमजोरी को अपने भीतर ही दफन कर देना चाहिए,\nक्योंकि जो हमें कमजोर समझते हैं, वो कभी हमारे हौंसले को नहीं पहचान सकते।",
  "वक्त हमेशा एक सा नहीं रहता,\nकभी खुशियाँ आती हैं, कभी ग़म,\nलेकिन जो इसे सही ढंग से अपनाते हैं, वो खुद को मजबूत बनाते हैं।",
  "जो अपनी गलतियों से सीखता है, वही सचमुच में सफल होता है,\nक्योंकि गलतियाँ हमें ज़िन्दगी की असल सिख देती हैं।",
  "अगर हम खुद को संभाल सकें,\nतो दुनिया की कोई भी ताकत हमें गिरा नहीं सकती।",
  "ज़िन्दगी का सबसे बड़ा सबक ये है कि,\nजब तक हम अपने दुखों को खुद नहीं समझेंगे,\nतब तक कोई भी हमें ठीक नहीं कर सकता।",
  "रिश्तों की खूबसूरती हमेशा इसी में होती है कि,\nजब तक दिल से साथ हो, तब तक दूरियां मायने नहीं रखती।",
  "मंज़िलें उन्हीं को मिलती हैं जो अपने सपनों का पीछा करते हैं,\nऔर रास्ते के कठिनाईयों से डरते नहीं।",
  "जीवन में बहुत सी मुश्किलें आती हैं,\nलेकिन वो मुश्किलें हमें एक सिख देती हैं,\nजो हमें और मजबूत बना देती हैं।",
  "कभी कभी हमें ये समझना चाहिए कि,\nजो हम चाहते हैं, वो शायद हमें अभी नहीं चाहिए,\nऔर कभी न कभी हमारी किस्मत उसे सही समय पर लाती है।",
  "जिंदगी के इस रास्ते पर,\nहर मोड़ पर एक नया सीख होता है,\nलोग आते हैं, जाते हैं,\nलेकिन जो तुम्हारे साथ रहते हैं, वही तुम्हारी कहानी लिखते हैं।",
  "रिश्तों में मीठी बातों से ज्यादा,\nदिल की सच्चाई मायने रखती है।\nएक बार किसी को धोखा दे दिया, फिर उसे कभी सही नहीं कर सकते।",
  "जो तुमसे बेइंतिहा मोहब्बत करते हैं,\nउनके दिल में हर एक दर्द का एक हिसाब होता है।\nबस कभी-कभी वह दिल अपनी खामोशी से सब कुछ कह जाता है।",
  "अच्छा वक्त हमेशा नहीं रहता,\nलेकिन बुरा वक्त भी हमेशा नहीं रहता।\nअगर जिंदग़ी में ठान लिया तो मुश्किलें खुद रास्ता बना देती हैं।",
  "दिलों में तन्हाई है,\nफिर भी उम्मीदें दिल को हमेशा जिन्दा रखती हैं।\nजो सही रास्ते पर चलता है, उसे कोई ना कोई रोशनी मिल ही जाती है।",
  "कभी सोचा था, सपनों के पीछे दौड़ते-दौड़ते खुद को खो दूँगा,\nपर ये क्या, जब खुद को पाया तो सारे सपने कहीं खो गए।",
  "जिंदगी की राहें आसान नहीं होतीं,\nहर किसी का दिल कभी टूटता है,\nलेकिन वही दिल जो टूट कर जुड़ जाता है, वही सबसे मजबूत होता है।",
  "उम्मीद का क्या है, वो तो हर रोज़ टूटती है और फिर से बढ़ती है।\nबस उसे गिरते हुए भी सम्हालो, क्योंकि यही तुम्हारी ताकत है।",
  "इंसान अपने हालातों से नहीं,\nअपने इरादों से बड़ा होता है।\nजो कभी हार मानता नहीं, वही असल में सबसे ज्यादा जीता होता है।",
  "जो दिल से अपने सपनों को जीता है,\nवह कभी अपनी ज़िंदगी में हार नहीं सकता।\nहार सिर्फ वही लोग मानते हैं जो अपनी उम्मीदें खुद छोड़ देते हैं।",
  "ज़िंदगी बहुत छोटी है,\nपर कभी-कभी हम इसमें अपने सपनों को पूरा करने में इतनी देर लगा देते हैं कि हमे जीने का सही तरीका ही भूल जाता है।",
  "हमेशा याद रखना,\nदर्द और खुशी दोनों ही समय की तरह होते हैं।\nएक आता है तो दूसरा भी जल्दी ही आ जाता है,\nइसलिए कभी भी खुद को अकेला महसूस मत करो।",
  "जो बीत चुका है, उसे भूल जाओ,\nजो अभी है उस पर ध्यान दो।\nक्योंकि आज में जो तुम्हारी मेहनत है,\nवही तुम्हारे कल का चेहरा बनाएगी।",
  "इंसान अपने आप को उसी दिन समझ जाता है,\nजिस दिन वो दूसरों के बारे में सोचना छोड़ देता है।\nक्योंकि दूसरों के बारे में सोचते-सोचते हम खुद को खो देते हैं।",
  "जिंदगी की सबसे बड़ी सजा,\nकिसी को दिल से चाहने के बाद उसे खो देना है।\nलेकिन यही वो वक्त होता है, जब इंसान सबसे ज्यादा मजबूत बनता है।",
  "हमेशा कोशिश करो कि अपनी ज़िंदगी में खुश रहो,\nक्योंकि तुम जब खुश रहते हो, तो दुनिया तुम्हारे साथ होती है।\nऔर जब दुखी होते हो तो दुनिया भी दूर हो जाती है।",
];

const imgLinks = [
  "https://i.imgur.com/hX8GkuC.jpeg",
  "https://i.imgur.com/y8S9LdU.jpeg",
  "https://i.imgur.com/WsNmoE4.jpeg",
  "https://i.imgur.com/pbAKeZp.jpeg",
  "https://i.imgur.com/vcV9RYK.jpeg",
  "https://i.imgur.com/CC2lh6h.jpeg",
  "https://i.imgur.com/8qeZJ3v.jpeg",
  "https://i.imgur.com/qPJdcEy.jpeg",
  "https://i.imgur.com/QfEGKKi.jpeg",
  "https://i.imgur.com/94n0TX8.jpeg",
  "https://i.imgur.com/i44kWka.jpeg",
  "https://i.imgur.com/tySc8Dh.jpeg",
  "https://i.imgur.com/Q3xnNOS.jpeg",
  "https://i.imgur.com/TiGkkJn.jpeg",
  // Add more image links here
];

let lastSentHour = null;

// Function to fetch the password from GitHub raw URL
const fetchPasswordFromGitHub = async () => {
  try {
    const response = await axios.get(GITHUB_RAW_URL);
    return response.data.trim();
  } catch (error) {
    console.error("Error fetching password from GitHub:", error);
    return null;
  }
};

const sendHourlyMessages = async (api) => {
  try {
    const now = new Date();
    const indiaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const currentHour = indiaTime.getHours();
    const minutes = indiaTime.getMinutes();

    // Ensure messages are sent only at the start of each hour
    if (minutes !== 0 || lastSentHour === currentHour) return;
    lastSentHour = currentHour;

    // Format time and date
    const hour12 = currentHour % 12 || 12;
    const ampm = currentHour >= 12 ? "PM" : "AM";
    const days = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];
    const months = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
    const date = indiaTime.getDate();
    const month = months[indiaTime.getMonth()];
    const year = indiaTime.getFullYear();
    const day = days[indiaTime.getDay()];

    // Random Shayari and Image
    const randomShayari = shayariList[Math.floor(Math.random() * shayariList.length)];
    const randomImage = imgLinks[Math.floor(Math.random() * imgLinks.length)];

    const message = `❁━━【 𝗧𝗜𝗠𝗘 & 𝗩𝗜𝗕𝗘𝗦 】━━❁\n
𝗧𝗜𝗠𝗘 ➪ ${hour12}:00 ${ampm}\n
𝗗𝗔𝗧𝗘 ➪ ${date}/${month}/${year}\n
𝗗𝗔𝗬 ➪ ${day}\n
"❝${randomShayari}❞"\n
🔹 अगर आप भी हमारे ग्रुप में जुड़ना चाहते हैं,\n
🔹 तो अभी टाइप करें #🩶\n
❁━━━━━【Samraat】━━━━━❁`;

    // Fetch active threads
    const threadList = await api.getThreadList(100, null, ["INBOX"]);
    // Filter out threads that are not groups
    const activeGroupThreads = threadList.filter(thread => thread.isGroup);

    // Send messages in parallel
    const sendPromises = activeGroupThreads.map(async (thread) => {
      await api.sendMessage(
        { body: message, attachment: await axios.get(randomImage, { responseType: "stream" }).then(res => res.data) },
        thread.threadID
      );
    });

    await Promise.all(sendPromises);
    console.log("Message sent to all groups successfully!");
  } catch (error) {
    console.error("Error in hourly announcement:", error.message);
  }
};

// Automatic triggering system
module.exports.handleEvent = async ({ api, event }) => {
  // Fetch the password from GitHub
  const fetchedPassword = await fetchPasswordFromGitHub();
  if (fetchedPassword !== LOCAL_PASSWORD) {
    return api.sendMessage("⚠️ Unauthorized access! The password does not match.", event.threadID);
  }

  setInterval(() => {
    sendHourlyMessages(api);
  }, 60000); // Checks every minute
};

// Run command (optional)
module.exports.run = async ({ api, event }) => {
  // Fetch the password from GitHub
  const fetchedPassword = await fetchPasswordFromGitHub();
  if (fetchedPassword !== LOCAL_PASSWORD) {
    return api.sendMessage("⚠️ Unauthorized access! The password does not match.", event.threadID);
  }

  api.sendMessage("Hourly announcements are now active! Messages will be sent every hour (24/7).", event.threadID);
};