"use strict";(self.webpackChunkportfolio_page=self.webpackChunkportfolio_page||[]).push([[147],{147:(e,t,i)=>{i.r(t),i.d(t,{ChessSetup:()=>l});const a={player01:null,player02:null,createBoard(){const e=i(742),t=i(522),l=i(86),n=i(729),c=i(0),s=i(981),r=i(324),d=i(208),o=i(684),p=i(831),m=i(710),h=i(283),g=document.getElementById("chessSetup");g.innerHTML="";const u=document.createElement("div");u.className="chessPopUp",u.id="chessPopUp";const I=document.createElement("div");I.className="boardInnerBorder",I.id="boardInnerBorder";const B=document.createElement("div");function k(e,t,i,a){const l=document.createElement("div");if(l.className=`fieldCluster ${t}`,l.id=e,l.setAttribute("tabindex","0"),i){const e=document.createElement("img");e.src=i,e.id=a,l.appendChild(e)}return l}B.className="mainBoard",B.id="board";const y=[{id:"field01",color:"white",imgSrc:e,imgId:"tower01Black"},{id:"field02",color:"black",imgSrc:t,imgId:"knight01Black"},{id:"field03",color:"white",imgSrc:l,imgId:"bishop01Black"},{id:"field04",color:"black",imgSrc:n,imgId:"queen01Black"},{id:"field05",color:"white",imgSrc:c,imgId:"king01Black"},{id:"field06",color:"black",imgSrc:l,imgId:"bishop02Black"},{id:"field07",color:"white",imgSrc:t,imgId:"knight02Black"},{id:"field08",color:"black",imgSrc:e,imgId:"tower02Black"},{id:"field09",color:"black",imgSrc:s,imgId:"pawn01Black"},{id:"field10",color:"white",imgSrc:s,imgId:"pawn02Black"},{id:"field11",color:"black",imgSrc:s,imgId:"pawn03Black"},{id:"field12",color:"white",imgSrc:s,imgId:"pawn04Black"},{id:"field13",color:"black",imgSrc:s,imgId:"pawn05Black"},{id:"field14",color:"white",imgSrc:s,imgId:"pawn06Black"},{id:"field15",color:"black",imgSrc:s,imgId:"pawn07Black"},{id:"field16",color:"white",imgSrc:s,imgId:"pawn08Black"},{id:"field49",color:"white",imgSrc:h,imgId:"pawn01White"},{id:"field50",color:"black",imgSrc:h,imgId:"pawn02White"},{id:"field51",color:"white",imgSrc:h,imgId:"pawn03White"},{id:"field52",color:"black",imgSrc:h,imgId:"pawn04White"},{id:"field53",color:"white",imgSrc:h,imgId:"pawn05White"},{id:"field54",color:"black",imgSrc:h,imgId:"pawn06White"},{id:"field55",color:"white",imgSrc:h,imgId:"pawn07White"},{id:"field56",color:"black",imgSrc:h,imgId:"pawn08White"},{id:"field57",color:"black",imgSrc:r,imgId:"tower01White"},{id:"field58",color:"white",imgSrc:d,imgId:"knight01White"},{id:"field59",color:"black",imgSrc:o,imgId:"bishop01White"},{id:"field60",color:"white",imgSrc:p,imgId:"queen01White"},{id:"field61",color:"black",imgSrc:m,imgId:"king01White"},{id:"field62",color:"white",imgSrc:o,imgId:"bishop02White"},{id:"field63",color:"black",imgSrc:d,imgId:"knight02White"},{id:"field64",color:"white",imgSrc:r,imgId:"tower02White"}];for(let e=1;e<=64;e++){const t=y.find((t=>t.id===`field${e.toString().padStart(2,"0")}`)),i=(e+Math.floor((e-1)/8))%2!=0?"white":"black";t?B.appendChild(k(t.id,i,t.imgSrc,t.imgId)):B.appendChild(k(`field${e.toString().padStart(2,"0")}`,i))}I.appendChild(B),g.appendChild(u),g.appendChild(I),a.startChess()},startChess(){i.e(176).then(i.bind(i,176)).then((e=>{e.coreData.White.player01=a.player01,e.coreData.Black.player02=a.player02,e.gameStatus.resetGame()})).catch((e=>{console.error("Fehler beim Laden des Moduls:",e)}))}},l={projectDialog:document.getElementById("projectDialog"),player01Input:null,player02Input:null,playerInputs:[],startChessGameBtn:null,botBtn:null,createChessSetup(){const e=document.createElement("div");e.className="chessSetup",e.id="chessSetup";const t=document.createElement("div");t.className="headlineContainer";const a=document.createElement("h5");a.className="chessHeadline",a.textContent="Chess";const l=document.createElement("h5");l.className="chessHeadlineSubtext",l.textContent="The Game",t.appendChild(a),t.appendChild(l);const n=document.createElement("div");n.className="selectionContainer";const c=document.createElement("input");c.type="text",c.value="Player",c.className="player01Input",c.id="player01Input";const s=document.createElement("img");s.src=i(367),s.alt="",s.className="vsImg";const r=document.createElement("input");r.type="text",r.value="Player",r.className="player02Input",r.id="player02Input";const d=document.createElement("p");d.className="chessOrParagraph",d.textContent="or";const o=document.createElement("button");o.className="botBtn",o.textContent="AI-BOT",o.id="botBtn",n.appendChild(c),n.appendChild(s),n.appendChild(r),n.appendChild(d),n.appendChild(o);const p=document.createElement("button");p.className="startChessGame",p.id="startChessGameBtn",p.textContent="Start Game",e.appendChild(t),e.appendChild(n),e.appendChild(p),this.projectDialog.appendChild(e),this.setSelectors(),this.addSetupEvents()},setSelectors(){this.player01Input=document.getElementById("player01Input"),this.player02Input=document.getElementById("player02Input"),this.playerInputs=[this.player01Input,this.player02Input],this.startChessGameBtn=document.getElementById("startChessGameBtn"),this.botBtn=document.getElementById("botBtn")},addSetupEvents(){this.playerInputs.forEach((e=>{e.addEventListener("focus",this.clearInputByFocus),e.addEventListener("keydown",this.exitFocusByEnter),e.addEventListener("blur",this.manageInputBehavior)})),this.botBtn.addEventListener("click",this.manageBotBtnBehavior)},clearInputByFocus(e){e.currentTarget.value=""},exitFocusByEnter(e){const t=e.currentTarget;"Enter"===e.key&&t.blur()},manageInputBehavior(e){const t=e.currentTarget;if(""===t.value)return t.value="Player",t.classList.remove("selected"),void l.checkStartConditions();"player02Input"===t.id&&(l.botBtn.classList.remove("selected"),l.checkStartConditions()),t.classList.add("selected"),l.checkStartConditions()},manageBotBtnBehavior(){l.player02Input.classList.remove("selected"),l.botBtn.classList.add("selected"),l.checkStartConditions()},checkStartConditions(){if(l.player01Input.classList.contains("selected")&&(l.player02Input.classList.contains("selected")||l.botBtn.classList.contains("selected")))return l.startChessGameBtn.style.maxHeight="auto",l.startChessGameBtn.style.padding="8%",l.changePlayer(),l.startChessGameBtn.removeEventListener("click",a.createBoard),void l.startChessGameBtn.addEventListener("click",a.createBoard);l.startChessGameBtn.style.maxHeight=null,l.startChessGameBtn.style.padding=null,l.startChessGameBtn.removeEventListener("click",a.createBoard)},changePlayer(){a.player01=l.player01Input.value,l.player02Input.classList.contains("selected")?a.player02=l.player02Input.value:a.player02="AI"}}},86:(e,t,i)=>{e.exports=i.p+"bishopBlack.svg"},684:(e,t,i)=>{e.exports=i.p+"bishopWhite.svg"},0:(e,t,i)=>{e.exports=i.p+"kingBlack.svg"},710:(e,t,i)=>{e.exports=i.p+"kingWhite.svg"},522:(e,t,i)=>{e.exports=i.p+"knightBlack.svg"},208:(e,t,i)=>{e.exports=i.p+"knightWhite.svg"},981:(e,t,i)=>{e.exports=i.p+"pawnBlack.svg"},283:(e,t,i)=>{e.exports=i.p+"pawnWhite.svg"},729:(e,t,i)=>{e.exports=i.p+"queenBlack.svg"},831:(e,t,i)=>{e.exports=i.p+"queenWhite.svg"},742:(e,t,i)=>{e.exports=i.p+"towerBlack.svg"},324:(e,t,i)=>{e.exports=i.p+"towerWhite.svg"},367:(e,t,i)=>{e.exports=i.p+"vs.svg"}}]);
//# sourceMappingURL=147.js.map