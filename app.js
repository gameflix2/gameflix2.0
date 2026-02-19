const games=[
{ id:1,t:"Cyberpunk 2077",img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_600x900.jpg"},
{ id:2,t:"Elden Ring",img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_600x900.jpg"},
{ id:3,t:"RDR2",img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/library_600x900.jpg"},
{ id:4,t:"Baldur's Gate 3",img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/library_600x900.jpg"},
{ id:5,t:"Starfield",img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/library_600x900.jpg"}
];

const app=document.getElementById("app");

function saveContinue(id){
localStorage.setItem("continue",id);
}

function Home(){
return `
<div class="nav"><div class="logo">GAMEFLIX</div></div>
<div class="hero">${games[0].t}</div>

<div class="row">
<h2>Populares</h2>
<div class="list">
${games.map(g=>`
<div class="card" style="background-image:url(${g.img})" onclick="Details(${g.id})"></div>
`).join("")}
</div>
</div>

<div id="modal" class="modal"></div>
`;
}

function Details(id){
const g=games.find(x=>x.id===id);
const modal=document.getElementById("modal");
modal.classList.add("show");
modal.innerHTML=`
<h1>${g.t}</h1>
<br>
<button class="btn" onclick="Play(${g.id})">Jogar</button>
<button class="btn" onclick="closeModal()">Fechar</button>
`;
}

function closeModal(){
document.getElementById("modal").classList.remove("show");
}

function Play(id){
saveContinue(id);
app.innerHTML=`
<div style="height:100vh;background:#000;display:flex;align-items:center;justify-content:center;font-size:40px">
PLAYER GAMEFLIX
</div>
`;
}

function init(){
app.innerHTML=Home();
}

init();
