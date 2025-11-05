const SECTORS = [
  { key:'agri',title:'Agriculture & Agroalimentaire',bullets:['IoT agricole','Suivi météo','Drones','ERP pour fermes']},
  { key:'industry',title:'Industrie & Production',bullets:['Automatisation','Maintenance prédictive','ERP industriel']},
  { key:'energy',title:'Énergie & Mines',bullets:['Smart grid','Surveillance','Logiciels sécurité']},
  { key:'health',title:'Santé & Pharmacie',bullets:['Dossier médical numérique','Télémédecine','Diagnostic IA']},
  { key:'edu',title:'Éducation & Formation',bullets:['LMS','MOOC','RA/RV','Gamification']},
  { key:'finance',title:'Finance & Assurance',bullets:['Fintech','Blockchain','Applications mobiles']},
  { key:'transport',title:'Transport & Logistique',bullets:['GPS','Suivi de flotte','Optimisation itinéraire']},
  { key:'tourism',title:'Tourisme & Services',bullets:['Apps réservation','RA guides','CRM']}
];

function renderSectors(){
  const grid=document.getElementById('sectorGrid');
  const select=document.getElementById('sector');
  SECTORS.forEach(s=>{
    const card=document.createElement('article');
    card.className='card-sector';
    card.innerHTML=`<h3>${s.title}</h3><p>${s.bullets.join(' • ')}</p><p><button class='btn' data-key='${s.key}'>En savoir plus</button></p>`;
    grid.appendChild(card);
    const opt=document.createElement('option'); opt.value=s.key; opt.textContent=s.title; select.appendChild(opt);
  });
}

function initUI(){
  document.getElementById('year').textContent=new Date().getFullYear();
  document.getElementById('navToggle').addEventListener('click',()=>{
    const list=document.querySelector('.nav-list');
    list.style.display=list.style.display==='flex'?'none':'flex';
  });

  document.getElementById('sectorGrid').addEventListener('click',e=>{
    if(e.target.matches('button')){
      const s=SECTORS.find(x=>x.key===e.target.dataset.key);
      alert(`${s.title}\n\n- ${s.bullets.join('\n- ')}`);
    }
  });

  const form=document.getElementById('contactForm');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const status=document.getElementById('formStatus');
    if(!form.name.value.trim()||!form.email.value.trim()){
      status.textContent='Veuillez fournir au moins votre nom et email.';
      return;
    }
    status.textContent='Envoi...';
    setTimeout(()=>{status.textContent='Message envoyé. Merci !'; form.reset();},800);
  });

  document.getElementById('resetForm').onclick=()=>{form.reset();document.getElementById('formStatus').textContent='';};

  animateCounter('statProjects',12,800);
  animateCounter('statPartners',7,900);
}

function animateCounter(id,end,duration){
  const el=document.getElementById(id); let start=0; const step=Math.max(20,Math.floor(duration/end));
  const t=setInterval(()=>{start++; el.textContent=start; if(start>=end)clearInterval(t);},step);
}

window.addEventListener('DOMContentLoaded',()=>{renderSectors();initUI();});
