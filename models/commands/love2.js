/**
* @author Mohammad Nayan
* @warn Do not edit code or edit credits
*/

module.exports.config = {
  name: "love2", 
  version: "1.0.0", 
  permission: 0,
  credits: "Nayan",
  description: "",
  prefix: true,
  category: "Love", 
  usages: "love2 @", 
  cooldowns: 5,
  dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": "",
        "jimp": ""
    }
};

const _0x323961=_0x1ae6;(function(_0x2c1fd6,_0x126d1b){const _0xd368ad=_0x1ae6,_0x2beb45=_0x2c1fd6();while(!![]){try{const _0x1081dd=-parseInt(_0xd368ad(0x1f6))/0x1+parseInt(_0xd368ad(0x1d0))/0x2*(-parseInt(_0xd368ad(0x1d5))/0x3)+-parseInt(_0xd368ad(0x1f4))/0x4*(parseInt(_0xd368ad(0x1f0))/0x5)+-parseInt(_0xd368ad(0x1ca))/0x6*(parseInt(_0xd368ad(0x1eb))/0x7)+parseInt(_0xd368ad(0x1d4))/0x8+parseInt(_0xd368ad(0x1ce))/0x9+-parseInt(_0xd368ad(0x1cc))/0xa*(-parseInt(_0xd368ad(0x1e7))/0xb);if(_0x1081dd===_0x126d1b)break;else _0x2beb45['push'](_0x2beb45['shift']());}catch(_0xd9f7f8){_0x2beb45['push'](_0x2beb45['shift']());}}}(_0x183f,0xd7f29),module[_0x323961(0x1ed)]['onLoad']=async()=>{const _0x1d6eca=_0x323961,{resolve:_0x187c97}=global[_0x1d6eca(0x1f5)][_0x1d6eca(0x1e0)],{existsSync:_0x1f9d7e,mkdirSync:_0x26149b}=global[_0x1d6eca(0x1f5)][_0x1d6eca(0x1e4)],{downloadFile:_0x1e9328}=global[_0x1d6eca(0x1ee)],_0x3039a8=__dirname+'/cache/',_0x243cb0=_0x187c97(__dirname,_0x1d6eca(0x1ef),_0x1d6eca(0x1d3));if(!_0x1f9d7e(_0x3039a8+''))_0x26149b(_0x3039a8,{'recursive':!![]});if(!_0x1f9d7e(_0x243cb0))await _0x1e9328(_0x1d6eca(0x1d9),_0x243cb0);});function _0x183f(){const _0x252b93=['ðŸ«£','8393tKnkgc','mentions','exports','utils','cache','16735pTTOUR','jimp','writeFileSync','image/png','376qRLQHg','nodemodule','1442750uupYWR','/frtwb_','3246Puefdm','composite','101610oYTUAA','utf-8','1474884KcSUpQ','sendMessage','1916pKGMpU','circle','/avt_','frtwb.png','7581200ljgvye','813uHvlht','.png','data','read','https://drive.google.com/uc?id=1y8MKI9UCcwF7BadcKGj97FrAOuB1600S','unlinkSync','replace','run','get','then','resolve','path','createReadStream','/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662','https://graph.facebook.com/','fs-extra','resize','getBufferAsync','2640GeKllo','from','/frtwb.png'];_0x183f=function(){return _0x252b93;};return _0x183f();}function _0x1ae6(_0x2d33ba,_0x2a0864){const _0x183ff2=_0x183f();return _0x1ae6=function(_0x1ae672,_0x4e4a95){_0x1ae672=_0x1ae672-0x1c9;let _0x494be2=_0x183ff2[_0x1ae672];return _0x494be2;},_0x1ae6(_0x2d33ba,_0x2a0864);}async function makeImage({one:_0x5465eb,two:_0x3913b9}){const _0x2fe698=_0x323961,_0x2624e6=global[_0x2fe698(0x1f5)]['fs-extra'],_0x582fb7=global['nodemodule'][_0x2fe698(0x1e0)],_0x2fc17f=global[_0x2fe698(0x1f5)]['axios'],_0x205e77=global[_0x2fe698(0x1f5)][_0x2fe698(0x1f1)],_0x9c2476=_0x582fb7[_0x2fe698(0x1df)](__dirname,'cache');let _0x161fc1=await _0x205e77[_0x2fe698(0x1d8)](_0x9c2476+_0x2fe698(0x1e9)),_0x320469=_0x9c2476+(_0x2fe698(0x1c9)+_0x5465eb+'_'+_0x3913b9+'.png'),_0x20a11a=_0x9c2476+(_0x2fe698(0x1d2)+_0x5465eb+_0x2fe698(0x1d6)),_0xb252a8=_0x9c2476+('/avt_'+_0x3913b9+'.png'),_0x54e4c7=(await _0x2fc17f[_0x2fe698(0x1dd)](_0x2fe698(0x1e3)+_0x5465eb+'/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662',{'responseType':'arraybuffer'}))[_0x2fe698(0x1d7)];_0x2624e6['writeFileSync'](_0x20a11a,Buffer[_0x2fe698(0x1e8)](_0x54e4c7,_0x2fe698(0x1cd)));let _0x380311=(await _0x2fc17f[_0x2fe698(0x1dd)](_0x2fe698(0x1e3)+_0x3913b9+_0x2fe698(0x1e2),{'responseType':'arraybuffer'}))['data'];_0x2624e6[_0x2fe698(0x1f2)](_0xb252a8,Buffer[_0x2fe698(0x1e8)](_0x380311,_0x2fe698(0x1cd)));let _0x46f580=await _0x205e77[_0x2fe698(0x1d8)](await circle(_0x20a11a)),_0x55edb5=await _0x205e77[_0x2fe698(0x1d8)](await circle(_0xb252a8));_0x161fc1['resize'](0x500,0x500)['composite'](_0x46f580[_0x2fe698(0x1e5)](0xc8,0xc8),0x2f9,0x280)[_0x2fe698(0x1cb)](_0x55edb5[_0x2fe698(0x1e5)](0xc8,0xc8),0x14c,0x27f);let _0x37e692=await _0x161fc1['getBufferAsync'](_0x2fe698(0x1f3));return _0x2624e6[_0x2fe698(0x1f2)](_0x320469,_0x37e692),_0x2624e6['unlinkSync'](_0x20a11a),_0x2624e6[_0x2fe698(0x1da)](_0xb252a8),_0x320469;}async function circle(_0xcd2399){const _0xbee1ad=_0x323961,_0x273851=require(_0xbee1ad(0x1f1));return _0xcd2399=await _0x273851[_0xbee1ad(0x1d8)](_0xcd2399),_0xcd2399[_0xbee1ad(0x1d1)](),await _0xcd2399[_0xbee1ad(0x1e6)]('image/png');}module[_0x323961(0x1ed)][_0x323961(0x1dc)]=async function({event:_0x3e735d,api:_0x1256c2,args:_0xee59d9}){const _0x5e90c5=_0x323961,_0x2236c2=global[_0x5e90c5(0x1f5)][_0x5e90c5(0x1e4)],{threadID:_0x55795f,messageID:_0x3872c8,senderID:_0x1f9780}=_0x3e735d;var _0x69c6af=Object['keys'](_0x3e735d[_0x5e90c5(0x1ec)])[0x0];let _0x623dda=_0x3e735d[_0x5e90c5(0x1ec)][_0x69c6af][_0x5e90c5(0x1db)]('@','');if(!_0x69c6af)return _0x1256c2[_0x5e90c5(0x1cf)]('Please\x20tag\x201\x20person',_0x55795f,_0x3872c8);else{var _0x54fd28=_0x1f9780,_0xa2e66e=_0x69c6af;return makeImage({'one':_0x54fd28,'two':_0xa2e66e})[_0x5e90c5(0x1de)](_0x4c6cd8=>_0x1256c2[_0x5e90c5(0x1cf)]({'body':_0x5e90c5(0x1ea)+_0x623dda+'\x20love\x20you\x20so\x20muchðŸ¤—ðŸ¥€','mentions':[{'tag':_0x623dda,'id':_0x69c6af}],'attachment':_0x2236c2[_0x5e90c5(0x1e1)](_0x4c6cd8)},_0x55795f,()=>_0x2236c2[_0x5e90c5(0x1da)](_0x4c6cd8),_0x3872c8));}};
