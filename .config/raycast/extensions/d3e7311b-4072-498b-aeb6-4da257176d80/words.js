"use strict";var be=Object.create;var h=Object.defineProperty;var Ee=Object.getOwnPropertyDescriptor;var Me=Object.getOwnPropertyNames;var Le=Object.getPrototypeOf,xe=Object.prototype.hasOwnProperty;var o=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),Ue=(e,r)=>{for(var t in r)h(e,t,{get:r[t],enumerable:!0})},H=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of Me(r))!xe.call(e,a)&&a!==t&&h(e,a,{get:()=>r[a],enumerable:!(n=Ee(r,a))||n.enumerable});return e};var We=(e,r,t)=>(t=e!=null?be(Le(e)):{},H(r||!e||!e.__esModule?h(t,"default",{value:e,enumerable:!0}):t,e)),ke=e=>H(h({},"__esModule",{value:!0}),e);var U=o(c=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});c.FORMAT_PLAIN=c.FORMAT_HTML=c.FORMATS=void 0;var z="html";c.FORMAT_HTML=z;var X="plain";c.FORMAT_PLAIN=X;var qe=[z,X];c.FORMATS=qe});var ee=o(i=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.UNIT_WORDS=i.UNIT_WORD=i.UNIT_SENTENCES=i.UNIT_SENTENCE=i.UNIT_PARAGRAPHS=i.UNIT_PARAGRAPH=i.UNITS=void 0;var V="words";i.UNIT_WORDS=V;var J="word";i.UNIT_WORD=J;var K="sentences";i.UNIT_SENTENCES=K;var Q="sentence";i.UNIT_SENTENCE=Q;var Y="paragraphs";i.UNIT_PARAGRAPHS=Y;var Z="paragraph";i.UNIT_PARAGRAPH=Z;var De=[V,J,K,Q,Y,Z];i.UNITS=De});var W=o(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});P.WORDS=void 0;var Fe=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"];P.WORDS=Fe});var re=o(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});N.LINE_ENDINGS=void 0;var Ce={POSIX:`
`,WIN32:`\r
`};N.LINE_ENDINGS=Ce});var te=o(S=>{"use strict";Object.defineProperty(S,"__esModule",{value:!0});S.default=void 0;var Ge=function(r){var t=r.trim();return t.charAt(0).toUpperCase()+t.slice(1)},$e=Ge;S.default=$e});var ne=o((R,k)=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});R.default=void 0;var je=function(){return typeof k<"u"&&!!k.exports},Be=je;R.default=Be});var ae=o(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});O.default=void 0;var He=function(){var r=!1;try{r=navigator.product==="ReactNative"}catch{r=!1}return r},ze=He;O.default=ze});var ie=o(w=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});w.SUPPORTED_PLATFORMS=void 0;var Xe={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"};w.SUPPORTED_PLATFORMS=Xe});var ue=o(y=>{"use strict";Object.defineProperty(y,"__esModule",{value:!0});y.default=void 0;var Ve=ie(),Je=function(){var r=!1;try{r=process.platform===Ve.SUPPORTED_PLATFORMS.WIN32}catch{r=!1}return r},Ke=Je;y.default=Ke});var q=o(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.default=void 0;var Qe=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Array.apply(null,Array(r)).map(function(t,n){return n})},Ye=Qe;I.default=Ye});var oe=o(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.default=void 0;var Ze=er(q());function er(e){return e&&e.__esModule?e:{default:e}}var rr=function(r,t){var n=(0,Ze.default)(r);return n.map(function(){return t()})},tr=rr;A.default=tr});var D=o(m=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});Object.defineProperty(m,"capitalize",{enumerable:!0,get:function(){return nr.default}});Object.defineProperty(m,"isNode",{enumerable:!0,get:function(){return ar.default}});Object.defineProperty(m,"isReactNative",{enumerable:!0,get:function(){return ir.default}});Object.defineProperty(m,"isWindows",{enumerable:!0,get:function(){return ur.default}});Object.defineProperty(m,"makeArrayOfLength",{enumerable:!0,get:function(){return or.default}});Object.defineProperty(m,"makeArrayOfStrings",{enumerable:!0,get:function(){return sr.default}});var nr=p(te()),ar=p(ne()),ir=p(ae()),ur=p(ue()),or=p(q()),sr=p(oe());function p(e){return e&&e.__esModule?e:{default:e}}});var de=o(b=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.default=void 0;var dr=W(),F=D();function fr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function se(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function cr(e,r,t){return r&&se(e.prototype,r),t&&se(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function T(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var mr=function(){function e(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=r.sentencesPerParagraph,n=t===void 0?{max:7,min:3}:t,a=r.wordsPerSentence,s=a===void 0?{max:15,min:5}:a,f=r.random,g=r.seed,d=r.words,v=d===void 0?dr.WORDS:d;if(fr(this,e),T(this,"sentencesPerParagraph",void 0),T(this,"wordsPerSentence",void 0),T(this,"random",void 0),T(this,"words",void 0),n.min>n.max)throw new Error("Minimum number of sentences per paragraph (".concat(n.min,") cannot exceed maximum (").concat(n.max,")."));if(s.min>s.max)throw new Error("Minimum number of words per sentence (".concat(s.min,") cannot exceed maximum (").concat(s.max,")."));this.sentencesPerParagraph=n,this.words=v,this.wordsPerSentence=s,this.random=f||Math.random}return cr(e,[{key:"generateRandomInteger",value:function(t,n){return Math.floor(this.random()*(n-t+1)+t)}},{key:"generateRandomWords",value:function(t){var n=this,a=this.wordsPerSentence,s=a.min,f=a.max,g=t||this.generateRandomInteger(s,f);return(0,F.makeArrayOfLength)(g).reduce(function(d,v){return"".concat(n.pluckRandomWord()," ").concat(d)},"").trim()}},{key:"generateRandomSentence",value:function(t){return"".concat((0,F.capitalize)(this.generateRandomWords(t)),".")}},{key:"generateRandomParagraph",value:function(t){var n=this,a=this.sentencesPerParagraph,s=a.min,f=a.max,g=t||this.generateRandomInteger(s,f);return(0,F.makeArrayOfLength)(g).reduce(function(d,v){return"".concat(n.generateRandomSentence()," ").concat(d)},"").trim()}},{key:"pluckRandomWord",value:function(){var t=0,n=this.words.length-1,a=this.generateRandomInteger(t,n);return this.words[a]}}]),e}(),lr=mr;b.default=lr});var me=o(L=>{"use strict";Object.defineProperty(L,"__esModule",{value:!0});L.default=void 0;var E=U(),fe=re(),gr=pr(de()),M=D();function pr(e){return e&&e.__esModule?e:{default:e}}function vr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function ce(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _r(e,r,t){return r&&ce(e.prototype,r),t&&ce(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function hr(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var Pr=function(){function e(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E.FORMAT_PLAIN,n=arguments.length>2?arguments[2]:void 0;if(vr(this,e),this.format=t,this.suffix=n,hr(this,"generator",void 0),E.FORMATS.indexOf(t.toLowerCase())===-1)throw new Error("".concat(t," is an invalid format. Please use ").concat(E.FORMATS.join(" or "),"."));this.generator=new gr.default(r)}return _r(e,[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,M.isReactNative)()&&(0,M.isNode)()&&(0,M.isWindows)()?fe.LINE_ENDINGS.WIN32:fe.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(t){return this.format===E.FORMAT_HTML?"<p>".concat(t,"</p>"):t}},{key:"formatStrings",value:function(t){var n=this;return t.map(function(a){return n.formatString(a)})}},{key:"generateWords",value:function(t){return this.formatString(this.generator.generateRandomWords(t))}},{key:"generateSentences",value:function(t){return this.formatString(this.generator.generateRandomParagraph(t))}},{key:"generateParagraphs",value:function(t){var n=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,M.makeArrayOfStrings)(t,n)).join(this.getLineEnding())}}]),e}(),Nr=Pr;L.default=Nr});var ge=o(_=>{"use strict";Object.defineProperty(_,"__esModule",{value:!0});Object.defineProperty(_,"LoremIpsum",{enumerable:!0,get:function(){return le.default}});_.loremIpsum=void 0;var Sr=U(),l=ee(),Rr=W(),le=Or(me());function Or(e){return e&&e.__esModule?e:{default:e}}var wr=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=r.count,n=t===void 0?1:t,a=r.format,s=a===void 0?Sr.FORMAT_PLAIN:a,f=r.paragraphLowerBound,g=f===void 0?3:f,d=r.paragraphUpperBound,v=d===void 0?7:d,Re=r.random,C=r.sentenceLowerBound,Oe=C===void 0?5:C,G=r.sentenceUpperBound,we=G===void 0?15:G,$=r.units,ye=$===void 0?l.UNIT_SENTENCES:$,j=r.words,Ie=j===void 0?Rr.WORDS:j,B=r.suffix,Ae=B===void 0?"":B,Te={random:Re,sentencesPerParagraph:{max:v,min:g},words:Ie,wordsPerSentence:{max:we,min:Oe}},x=new le.default(Te,s,Ae);switch(ye){case l.UNIT_PARAGRAPHS:case l.UNIT_PARAGRAPH:return x.generateParagraphs(n);case l.UNIT_SENTENCES:case l.UNIT_SENTENCE:return x.generateSentences(n);case l.UNIT_WORDS:case l.UNIT_WORD:return x.generateWords(n);default:return""}};_.loremIpsum=wr});var Ar={};Ue(Ar,{default:()=>Se});module.exports=ke(Ar);var u=require("@raycast/api"),ve=We(ge()),pe=1e3,yr={sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}},Ir=new ve.LoremIpsum(yr);var _e=e=>Ir.generateWords(e),he=async e=>{e||(e="1");try{let r=parseInt(e,10);return isNaN(r)||r>pe?{error:{message:`Please enter a valid integer number, no more than ${pe}`},safeLoremIpsumNumber:null}:{error:null,safeLoremIpsumNumber:r}}catch{return{error:{message:"Something went wrong"},safeLoremIpsumNumber:null}}},Pe=async e=>{await(0,u.closeMainWindow)(),await(0,u.showToast)(u.Toast.Style.Failure,e)},Ne=async e=>{let{action:r="clipboard"}=(0,u.getPreferenceValues)();switch(await(0,u.closeMainWindow)(),r){case"clipboard":await u.Clipboard.copy(e),await(0,u.showToast)(u.Toast.Style.Success,"Copied to clipboard! \u{1F4CB}");break;case"paste":await u.Clipboard.paste(e),await(0,u.showToast)(u.Toast.Style.Success,"Pasted to active app! \u{1F4DD}");break}};async function Se(e){let r=e?.arguments.numberOfWords,{error:t,safeLoremIpsumNumber:n}=await he(r);if(t)await Pe(t.message);else{let a=_e(n);await Ne(a)}}
