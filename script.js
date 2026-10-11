/* ===== DADOS (edite aqui) ===== */
const E = {
 1981:{year:1981,coach:"Paulo César Carpegiani",rival:"Cobreloa (CHI)",place:"Montevidéu (Estádio Centenário)",date:"23/11/1981",score:[2,0],gf:2,ga:0,top:"Zico (11 gols)",topN:11,
  final:"Flamengo 2 x 0 Cobreloa (jogo-desempate)",
  tag:"1º título",
  story:["Primeira Libertadores da história rubro-negra, conquistada por um time comandado por Zico, Júnior, Adílio e companhia.","A final teve três jogos: vitória por 2 x 1 no Maracanã, derrota por 1 x 0 em Santiago e um jogo-desempate em Montevidéu.","No desempate, Zico marcou os dois gols e confirmou o título. Zico foi o artilheiro da edição, com 11 gols."],
  moments:["Zico decide o jogo-desempate com dois gols.","Final disputada em três partidas contra o Cobreloa.","Título abre a temporada que terminou com o Mundial de Clubes, em Tóquio."],
  form:"4-3-3",lines:[["Raul|1"],[["Leandro|2"],["Marinho|3"],["Mozer|4"],["Júnior|6"]],[["Andrade|5"],["Adílio|8"],["Zico|10"]],[["Tita|9"],["Nunes|7"],["Lico|11"]]],
  nums:"Números de camisa: confira no acervo oficial (indicados são os mais conhecidos).",bench:"—"},
 2019:{year:2019,coach:"Jorge Jesus",rival:"River Plate (ARG)",place:"Lima (Estádio Monumental)",date:"23/11/2019",score:[2,1],gf:2,ga:1,top:"Gabigol (9 gols)",topN:9,
  final:"Flamengo 2 x 1 River Plate",tag:"2º título",
  story:["Time de Jorge Jesus, que unia ofensividade e pressão alta, com Gabigol, Bruno Henrique, Arrascaeta e Everton Ribeiro.","Na semifinal, o Flamengo empatou por 1 x 1 em Porto Alegre e goleou o Grêmio por 5 x 0 no Maracanã.","Na final, o River abriu o placar com Santos Borré aos 14 minutos do primeiro tempo. Nos acréscimos, Gabigol empatou (89') e virou (92'), garantindo o título."],
  moments:["Gabigol marca dois gols em três minutos, aos 89' e aos 92'.","Goleada de 5 x 0 sobre o Grêmio na semifinal.","Gabigol terminou como artilheiro, com 9 gols."],
  form:"4-2-3-1",lines:[["Diego Alves|1"],[["Rafinha|13"],["Rodrigo Caio|3"],["Pablo Marí|4"],["Filipe Luís|16"]],[["Willian Arão|5"],["Gerson|8"]],[["Éverton Ribeiro|7"],["Arrascaeta|14"],["Bruno Henrique|27"]],[["Gabigol|9"]]],
  nums:"",bench:"—"},
 2022:{year:2022,coach:"Dorival Júnior",rival:"Athletico-PR (BRA)",place:"Guayaquil (Estádio Monumental)",date:"29/10/2022",score:[1,0],gf:1,ga:0,top:"—",topN:null,
  final:"Flamengo 1 x 0 Athletico-PR",tag:"3º título",
  story:["Campanha comandada por Dorival Júnior, com a força do elenco e a juventude de nomes como João Gomes e Pedro.","Na semifinal, o Flamengo eliminou o Vélez Sarsfield (ARG).","A final foi uma decisão 100% brasileira, em jogo único em Guayaquil. Gabigol marcou o gol da vitória por 1 x 0."],
  moments:["Final brasileira em jogo único.","Gol decisivo de Gabigol.","Terceira estrela continental."],
  form:"4-2-2-2",lines:[["Santos|1"],[["Rodinei|22"],["David Luiz|23"],["Léo Pereira|4"],["Ayrton Lucas|6"]],[["Thiago Maia|8"],["João Gomes|27"]],[["Éverton Ribeiro|7"],["Arrascaeta|14"]],[["Pedro|21"],["Gabigol|9"]]],
  nums:"Atenção: confira esta escalação e os números nas súmulas oficiais antes de publicar.",bench:"—"},
 2025:{year:2025,coach:"Filipe Luís",rival:"Palmeiras (BRA)",place:"Lima (Estádio Monumental)",date:"29/11/2025",score:[1,0],gf:1,ga:0,top:"—",topN:null,
  final:"Flamengo 1 x 0 Palmeiras",tag:"4º título",
  story:["Campanha comandada por Filipe Luís, ex-lateral campeão em 2019.","A final, outra vez em Lima e novamente entre brasileiros, foi decidida por um gol de Danilo, aos 67 minutos.","Quarta Libertadores do clube, que passa a ter quatro estrelas continentais."],
  moments:["Gol de Danilo aos 67' decide a final.","Filipe Luís vence a Libertadores como jogador e como técnico.","Quarto título continental."],
  form:"—",lines:[],
  nums:"Escalação da final não preenchida: adicione em E[2025].lines (veja os outros anos como modelo).",bench:"—"}
};
const YEARS=[1981,2019,2022,2025];
const PLAYERS=[
 // name, year, pos, num, games, goals, assists, mins  (null = sem dado)
 ["Raul",1981,"Goleiro",1,null,null,null,null],["Leandro",1981,"Defensor",2,null,null,null,null],["Marinho",1981,"Defensor",3,null,null,null,null],["Mozer",1981,"Defensor",4,null,null,null,null],["Júnior",1981,"Defensor",6,null,null,null,null],["Andrade",1981,"Meio-campista",5,null,null,null,null],["Adílio",1981,"Meio-campista",8,null,null,null,null],["Zico",1981,"Meio-campista",10,null,11,null,null],["Tita",1981,"Atacante",9,null,null,null,null],["Nunes",1981,"Atacante",7,null,null,null,null],["Lico",1981,"Atacante",11,null,null,null,null],
 ["Diego Alves",2019,"Goleiro",1,null,null,null,null],["Rafinha",2019,"Defensor",13,null,null,null,null],["Rodrigo Caio",2019,"Defensor",3,null,null,null,null],["Pablo Marí",2019,"Defensor",4,null,null,null,null],["Filipe Luís",2019,"Defensor",16,null,null,null,null],["Willian Arão",2019,"Meio-campista",5,null,null,null,null],["Gerson",2019,"Meio-campista",8,null,null,null,null],["Éverton Ribeiro",2019,"Meio-campista",7,null,null,null,null],["Arrascaeta",2019,"Meio-campista",14,null,null,null,null],["Bruno Henrique",2019,"Atacante",27,null,null,null,null],["Gabigol",2019,"Atacante",9,null,9,null,null],
 ["Santos",2022,"Goleiro",1,null,null,null,null],["Rodinei",2022,"Defensor",22,null,null,null,null],["David Luiz",2022,"Defensor",23,null,null,null,null],["Léo Pereira",2022,"Defensor",4,null,null,null,null],["Ayrton Lucas",2022,"Defensor",6,null,null,null,null],["Thiago Maia",2022,"Meio-campista",8,null,null,null,null],["João Gomes",2022,"Meio-campista",27,null,null,null,null],["Éverton Ribeiro",2022,"Meio-campista",7,null,null,null,null],["Arrascaeta",2022,"Meio-campista",14,null,null,null,null],["Pedro",2022,"Atacante",21,null,null,null,null],["Gabigol",2022,"Atacante",9,null,null,null,null],
 ["Danilo",2025,"Defensor",null,null,1,null,null]
];
const EVENTS=[
 ["1981","Flamengo conquista a primeira Libertadores, vencendo o Cobreloa no jogo-desempate (2 x 0), com dois gols de Zico."],
 ["2019","Virada heroica sobre o River Plate em Lima (2 x 1), com dois gols de Gabigol nos acréscimos."],
 ["2022","Decisão brasileira em Guayaquil: 1 x 0 sobre o Athletico-PR e terceira estrela."],
 ["2025","Gol de Danilo aos 67' vale o 1 x 0 sobre o Palmeiras, em Lima, e a quarta Libertadores."]
];
const GALLERY=[
 {t:"Zico, camisa 10",d:"O Galinho foi o grande nome de 1981, com 11 gols na edição.",img:""},
 {t:"Troféu de 1981",d:"A primeira Libertadores do Flamengo.",img:""},
 {t:"Gabigol, 2019",d:"Dois gols nos acréscimos viraram a final contra o River.",img:""},
 {t:"Jorge Jesus, 2019",d:"O técnico português comandou a campanha do bi.",img:""},
 {t:"Final de 2022",d:"Gol de Gabigol e título contra o Athletico-PR.",img:""},
 {t:"Final de 2025",d:"Danilo decide contra o Palmeiras.",img:""}
];
/* ===== UTIL ===== */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function tabs(el,items,cb,first){el.innerHTML="";items.forEach((it,i)=>{const b=document.createElement("button");b.className="tab";b.type="button";b.setAttribute("role","tab");b.textContent=it.l;b.setAttribute("aria-selected",i===first);b.onclick=()=>{[...el.children].forEach(c=>c.setAttribute("aria-selected","false"));b.setAttribute("aria-selected","true");cb(it.v)};el.appendChild(b)});cb(items[first].v)}
const yTabs=YEARS.map(y=>({l:y,v:y}));
/* ===== HERO ===== */
$("#cups").innerHTML=YEARS.map(y=>{const e=E[y];return `<a class="cup" href="#historia" data-y="${y}"><span class="y">${y}</span><span class="sc">${esc(e.final)}</span><small>${esc(e.tag)} · ${esc(e.place)}</small></a>`}).join("");
let selHist;
document.querySelectorAll(".cup").forEach(a=>a.addEventListener("click",()=>{const i=YEARS.indexOf(+a.dataset.y);$("#tabsHist").children[i].click()}));
/* ===== HISTÓRIA ===== */
function renderHist(y){const e=E[y];$("#hist").innerHTML=`
<div class="final"><em>Final da Libertadores ${y} · ${esc(e.date)} · ${esc(e.place)}</em>${esc(e.final)}</div>
<div class="grid">
<div class="card"><h3>A campanha</h3>${e.story.map(p=>`<p>${esc(p)}</p>`).join("")}</div>
<div class="card"><h3>Momentos decisivos</h3><ul class="clean">${e.moments.map(m=>`<li>${esc(m)}</li>`).join("")}</ul>
<p class="note" style="margin-top:14px">Técnico: ${esc(e.coach)}<br>Adversário na final: ${esc(e.rival)}<br>Artilheiro: ${esc(e.top)}</p></div></div>`}
tabs($("#tabsHist"),yTabs,renderHist,0);
/* ===== ESCALAÇÕES ===== */
function renderEsc(y){const e=E[y];let pitch="<p>Escalação não preenchida.</p>";
if(e.lines.length){pitch='<div class="pitch">'+e.lines.map(l=>{const arr=typeof l[0]==="string"?[l[0]]:l;return `<div class="line">${arr.map(p=>{const [n,k]=[].concat(p)[0].split("|");return `<div class="pl"><i>${k}</i>${esc(n)}</div>`}).join("")}</div>`}).join("")+"</div>"}
$("#esc").innerHTML=`<div class="card"><h3>Final ${y}: formação ${esc(e.form)}</h3><p>Técnico: ${esc(e.coach)}</p>${pitch}<p class="note">Reservas: ${esc(e.bench)}. ${esc(e.nums)}</p></div>`}
tabs($("#tabsEsc"),yTabs,renderEsc,0);
/* ===== TABELA ===== */
const fe=$("#fe");YEARS.forEach(y=>fe.add(new Option(y,y)));
let sk="year",sd=1;
function renderT(){const q=$("#q").value.trim().toLowerCase(),y=fe.value,p=$("#fp").value;
const idx={name:0,year:1,pos:2,num:3,games:4,goals:5,assists:6,mins:7}[sk];
let rows=PLAYERS.filter(r=>(!q||r[0].toLowerCase().includes(q))&&(!y||r[1]==y)&&(!p||r[2]===p));
rows.sort((a,b)=>{const x=a[idx],z=b[idx];if(x==null&&z==null)return 0;if(x==null)return 1;if(z==null)return -1;return (typeof x==="string"?x.localeCompare(z,"pt"):x-z)*sd});
const f=v=>v==null?"—":v;
$("#tb").innerHTML=rows.map(r=>`<tr><td>${esc(r[0])}</td><td>${r[1]}</td><td>${r[2]}</td><td>${f(r[3])}</td><td>${f(r[4])}</td><td>${f(r[5])}</td><td>${f(r[6])}</td><td>${f(r[7])}</td></tr>`).join("")||'<tr><td colspan="8">Nenhum jogador encontrado. Ajuste a busca ou os filtros.</td></tr>';
$("#cnt").textContent=rows.length+" jogador(es) exibido(s)."}
document.querySelectorAll("th").forEach(th=>th.onclick=()=>{const k=th.dataset.k;sd=sk===k?-sd:1;sk=k;renderT()});
["input","change"].forEach(ev=>{$("#q").addEventListener(ev,renderT);fe.addEventListener(ev,renderT);$("#fp").addEventListener(ev,renderT)});
renderT();
/* ===== GRÁFICOS ===== */
const M=[{l:"Gols do Flamengo na final",f:e=>e.gf},{l:"Gols sofridos na final",f:e=>e.ga},{l:"Gols do artilheiro",f:e=>e.topN}];
function renderBars(m){const vals=YEARS.map(y=>M[m].f(E[y]));const mx=Math.max(1,...vals.filter(v=>v!=null));
$("#bars").innerHTML=YEARS.map((y,i)=>`<div class="bar"><span>${y}</span><div class="t"><div class="f" data-w="${vals[i]==null?0:vals[i]/mx*100}"></div></div><span>${vals[i]==null?"—":vals[i]}</span></div>`).join("");
requestAnimationFrame(()=>requestAnimationFrame(()=>document.querySelectorAll(".f").forEach(f=>f.style.width=f.dataset.w+"%")))}
tabs($("#tabsChart"),M.map((m,i)=>({l:m.l,v:i})),renderBars,0);
/* ===== TIMELINE ===== */
$("#tl").innerHTML=EVENTS.map(e=>`<div class="ti"><b>${e[0]}</b><p>${esc(e[1])}</p></div>`).join("");
/* ===== GALERIA ===== */
$("#gal").innerHTML=GALLERY.map((g,i)=>`<button class="g" type="button" data-i="${i}">${g.img?`<img src="${esc(g.img)}" alt="${esc(g.t)}">`:""}<span>${esc(g.t)}</span></button>`).join("");
document.querySelectorAll(".g").forEach(b=>b.onclick=()=>{const g=GALLERY[b.dataset.i];$("#dt").textContent=g.t;$("#dd").textContent=g.d;$("#dlg").showModal()});
