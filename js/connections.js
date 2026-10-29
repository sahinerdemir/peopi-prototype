/* End-to-end prototype state and interactions */
const demoPeople=[
  {id:0,name:'Alex Morgan',anonymous:'Alex M.',role:'Product designer · Startup',verified:true},
  {id:1,name:'Jordan Lee',anonymous:'Jordan L.',role:'Software engineer · AI',verified:false},
  {id:2,name:'Sam Kim',anonymous:'Sam K.',role:'Founder · Climate tech',verified:false},
  {id:3,name:'Taylor Brooks',anonymous:'Taylor B.',role:'Brand strategist · Creative',verified:false},
  {id:4,name:'Casey Rivera',anonymous:'Casey R.',role:'Growth lead · SaaS',verified:false},
  {id:5,name:'Morgan Patel',anonymous:'Morgan P.',role:'Architect · Urban design',verified:false},
  {id:6,name:'Riley Chen',anonymous:'Riley C.',role:'Investor · Climate',verified:true},
  {id:7,name:'Elena Rostova',anonymous:'Elena R.',role:'Staff ML engineer · Autonomous AI',verified:true},
  {id:8,name:'Marcus Vance',anonymous:'Marcus V.',role:'Principal product architect · FinTech',verified:false},
  {id:9,name:'Maya Lin',anonymous:'Maya L.',role:'Creative director · Brand & Type',verified:false},
  {id:10,name:'David Park',anonymous:'David P.',role:'Head of engineering · Distributed systems',verified:true},
  {id:11,name:'Sofia Al-Mansoor',anonymous:'Sofia A.',role:'Partner · Climate VC',verified:true},
  {id:12,name:'Lucas Thorne',anonymous:'Lucas T.',role:'Senior iOS engineer · Swift & UX',verified:false},
  {id:13,name:'Nadia O\'Connor',anonymous:'Nadia O.',role:'Chief of staff · Series B',verified:false},
  {id:14,name:'Tariq Benali',anonymous:'Tariq B.',role:'Robotics engineer · Hardware',verified:false},
  {id:15,name:'Chloe Dubois',anonymous:'Chloe D.',role:'Product lead · HealthTech',verified:false},
  {id:16,name:'Aris Thorne',anonymous:'Aris T.',role:'Design systems architect · Mobile',verified:true},
  {id:17,name:'Zeynep Kaya',anonymous:'Zeynep K.',role:'Senior data scientist · Generative NLP',verified:false},
  {id:18,name:'Liam O\'Sullivan',anonymous:'Liam O.',role:'VP of product · Enterprise SaaS',verified:false},
  {id:19,name:'Hanna Lindqvist',anonymous:'Hanna L.',role:'Spatial audio engineer · AR/VR',verified:false},
  {id:20,name:'Kenji Takahashi',anonymous:'Kenji T.',role:'Security lead · Zero-trust',verified:true},
  {id:21,name:'Nina Rostova',anonymous:'Nina R.',role:'Staff Product Manager · AI',verified:true},
  {id:22,name:'Mateo Silva',anonymous:'Mateo S.',role:'Cloud Infrastructure Lead · DevTools',verified:false},
  {id:23,name:'Aisha Morales',anonymous:'Aisha M.',role:'Principal UX Researcher · FinTech',verified:true},
  {id:24,name:'Soren Nielsen',anonymous:'Soren N.',role:'Systems Programmer · Rust & WebAssembly',verified:false},
  {id:25,name:'Priya Sharma',anonymous:'Priya S.',role:'Staff Data Engineer · Streaming Analytics',verified:true},
  {id:26,name:'Julian Vance',anonymous:'Julian V.',role:'Industrial Designer · Connected Hardware',verified:false},
  {id:27,name:'Mei Zhang',anonymous:'Mei Z.',role:'Frontend Architect · Design Systems',verified:true},
  {id:28,name:'Callum Fraser',anonymous:'Callum F.',role:'DevOps & SRE Lead · Cloud Native',verified:false},
  {id:29,name:'Ananya Rao',anonymous:'Ananya R.',role:'Machine Learning Scientist · Healthcare',verified:true},
  {id:30,name:'Gabriel Costa',anonymous:'Gabriel C.',role:'Brand & Creative Director · Studio',verified:false},
  {id:31,name:'Freya Lind',anonymous:'Freya L.',role:'Spatial Computing Engineer · AR/VR',verified:false},
  {id:32,name:'Leo Zhang',anonymous:'Leo Z.',role:'Security Analyst · Threat Intelligence',verified:true},
  {id:33,name:'Yasmin Khan',anonymous:'Yasmin K.',role:'Product Marketing Lead · Developer Tools',verified:false},
  {id:34,name:'Oliver Hayes',anonymous:'Oliver H.',role:'Backend Engineer · Distributed Go',verified:true},
  {id:35,name:'Clara Dupont',anonymous:'Clara D.',role:'Biotech Founder · Synthetic Biology',verified:false},
  {id:36,name:'Damian Cruz',anonymous:'Damian C.',role:'VP Engineering · Distributed Teams',verified:true},
  {id:37,name:'Leila Abbasi',anonymous:'Leila A.',role:'Accessibility & Interaction Designer',verified:false},
  {id:38,name:'Stefan Becker',anonymous:'Stefan B.',role:'Robotics Perception Engineer',verified:true},
  {id:39,name:'Tara Montgomery',anonymous:'Tara M.',role:'Climate Tech Investor · Early Stage',verified:false},
  {id:40,name:'Hiroshi Sato',anonymous:'Hiroshi S.',role:'Acoustic DSP Engineer · Audio UX',verified:true},
  {id:41,name:'Camille Laurent',anonymous:'Camille L.',role:'Head of Growth · Consumer Mobile',verified:false},
  {id:42,name:'Devon Thorne',anonymous:'Devon T.',role:'Growth Marketing · Ad Networks',verified:false},
  {id:43,name:'Bianca Rossi',anonymous:'Bianca R.',role:'Crypto Trader · Web3 Outreach',verified:false},
  {id:44,name:'Austin Miller',anonymous:'Austin M.',role:'Lead Generation Specialist',verified:false},
  {id:45,name:'Selina Gomez',anonymous:'Selina G.',role:'Commercial Cold Outreach Lead',verified:false},
  {id:46,name:'Viktor Petrov',anonymous:'Viktor P.',role:'Affiliate Marketing Consultant',verified:false},
  {id:47,name:'Nadine Schultz',anonymous:'Nadine S.',role:'Automated Bot Campaigns',verified:false},
  {id:48,name:'Trevor Bell',anonymous:'Trevor B.',role:'Outreach & Spam Operator',verified:false},
  {id:49,name:'Alistair Wong',anonymous:'Alistair W.',role:'Unsolicited Sales Representative',verified:false}
];
const default20Connections=[0,1,7,8,9,10,11,12,13,14,15,16,17,18,19];
const default20Dates={0:'2025-06-12',1:'2025-07-04',7:'2026-01-10',8:'2026-02-14',9:'2026-03-01',10:'2026-03-22',11:'2026-04-18',12:'2026-05-09',13:'2026-06-14',14:'2026-07-01',15:'2026-08-11',16:'2026-09-03',17:'2026-09-20',18:'2026-10-02',19:'2026-10-09'};
const defaultRequests={
  20:'received',21:'received',22:'received',23:'received',24:'received',25:'received',26:'received',27:'received',28:'received',29:'received',30:'received',
  31:'sent',32:'sent',33:'sent',34:'sent',35:'sent',36:'sent',37:'sent',38:'sent',39:'sent',40:'sent',41:'sent'
};
const defaultRequestNotes={
  20:'Hey! Let\'s connect on local encryption protocols.',
  21:'Loved your side project on modular workflows! ☕',
  22:'Are you open to comparing notes on scalable backend architectures?',
  23:'Saw your profile nearby. Would love to exchange UX research ideas! 🤝',
  24:'Building low-latency networking tools. Open to collaborating!',
  25:'Heading to the tech talk nearby—free for a 15m chat? ⏱️',
  26:'Would love to discuss hardware perception and industrial robotics.',
  27:'Excited to share thoughts on design systems and variable typography! 💡',
  28:'Working on zero-downtime deployments. Let\'s connect!',
  29:'Collaborating on healthcare AI models—let\'s grab a coffee nearby! ☕',
  30:'Great portfolio! Open to quick coffee nearby? ☕',
  31:'Excited about spatial audio and immersive UI!',
  32:'Let\'s connect on zero-trust privacy infrastructure.',
  33:'Would love to discuss developer go-to-market strategies!',
  34:'Sharing notes on distributed systems and Go.',
  35:'Inspiring work in computational biology.',
  36:'Open to comparing cloud-native infrastructure approaches.',
  37:'Would love to connect on mobile accessibility standards! 🤝',
  38:'Let\'s talk mechatronics and actuator firmware.',
  39:'Sharing early product metrics and climate tech ideas.',
  40:'Excited to exchange ideas on acoustic room simulation!',
  41:'Let\'s chat about organic growth loops.'
};
const defaultHidden=[7,8,9,10,11,12,13,15];
const defaultBlocked=[42,43,44,45,46,47,48,49];

const journeyKey='peopi-journey-v2';
let journey={
  requests:{...defaultRequests},
  requestNotes:{...defaultRequestNotes},
  connections:[...default20Connections],
  connectionDates:{...default20Dates},
  hidden:[...defaultHidden],
  muted:[],
  blocked:[...defaultBlocked],
  chats:{},
  notifications:{connection:true,messages:true,session:true,product:false},
  currentPerson:0,
  requestTab:'received'
};
try{
  const saved=JSON.parse(localStorage.getItem(journeyKey)||'null');
  if(saved&&typeof saved==='object'){
    journey={...journey,...saved};
  }
  if(!Array.isArray(journey.muted))journey.muted=[];
  if(!Array.isArray(journey.hidden)||journey.hidden.length<5)journey.hidden=[...defaultHidden];
  if(!Array.isArray(journey.blocked)||journey.blocked.length<5)journey.blocked=[...defaultBlocked];
  if(!Array.isArray(journey.connections)||journey.connections.length<5)journey.connections=[...default20Connections];
  if(!journey.requests||typeof journey.requests!=='object'||Object.keys(journey.requests).length<10){
    journey.requests={...defaultRequests};
    journey.requestNotes={...defaultRequestNotes};
  }
  journey.requestTab='received';
}catch(e){}

function getPeerRelation(id){
  const numId=Number(id);
  if(typeof journey==='undefined'){
    return { status:'unknown', isConnected:false, isPendingSent:false, isPendingReceived:false, isBlocked:false };
  }
  if(Array.isArray(journey.blocked)&&journey.blocked.map(Number).includes(numId)){
    return { status:'blocked', isConnected:false, isPendingSent:false, isPendingReceived:false, isBlocked:true };
  }
  if(Array.isArray(journey.connections)&&journey.connections.map(Number).includes(numId)){
    return { status:'connected', isConnected:true, isPendingSent:false, isPendingReceived:false, isBlocked:false };
  }
  const req=(journey.requests&&(journey.requests[numId]||journey.requests[String(numId)]))||null;
  if(req==='sent'){
    return { status:'sent', isConnected:false, isPendingSent:true, isPendingReceived:false, isBlocked:false };
  }
  if(req==='received'){
    return { status:'received', isConnected:false, isPendingSent:false, isPendingReceived:true, isBlocked:false };
  }
  return { status:'unknown', isConnected:false, isPendingSent:false, isPendingReceived:false, isBlocked:false };
}
window.getPeerRelation=getPeerRelation;

function saveJourney(){
  try{
    const toSave={...journey};
    delete toSave.requestTab;
    localStorage.setItem(journeyKey,JSON.stringify(toSave));
  }catch(e){}
  if(typeof updateNotifBadge==='function')updateNotifBadge();
}

function journeyPerson(id){
  const numId=Number(id);
  const p=demoPeople.find(p=>p.id===numId)||(demoPeople[0]||{id:0,name:'Alex Morgan',anonymous:'Alex M.',role:'Product designer · Startup',verified:true});
  const rel=getPeerRelation(numId);
  return {...p,name:rel.isConnected?p.name:p.anonymous};
}

function journeyEmpty(title,desc){return '<div class="journey-empty"><i class="ph ph-users-three" aria-hidden="true"></i><strong>'+title+'</strong>'+desc+'</div>'}
function makeVerifiedBadge(){const badge=document.createElement('span');badge.className='li-verified-badge';badge.title='LinkedIn connected (demo)';badge.setAttribute('aria-label','LinkedIn connected — demo');badge.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 0.8 14.5 2.6 17.6 2.4 19 5.2 21.8 6.6 21.6 9.7 23.2 12 21.6 14.3 21.8 17.4 19 18.8 17.6 21.6 14.5 21.4 12 23.2 9.5 21.4 6.4 21.6 5 18.8 2.2 17.4 2.4 14.3 0.8 12 2.4 9.7 2.2 6.6 5 5.2 6.4 2.4 9.5 2.6Z"/><path d="m7.3 12.1 3.1 3.1 6.5-6.6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';return badge}
function markVerifiedName(el,id){el.querySelectorAll('.li-verified-badge').forEach(x=>x.remove());if(demoPeople[Number(id)]?.verified)el.append(makeVerifiedBadge())}

/* Demo portraits: photos become sharp only for accepted connections. */
const demoPortraits=[
  'https://i.pravatar.cc/240?img=12','https://i.pravatar.cc/240?img=47','https://i.pravatar.cc/240?img=33','https://i.pravatar.cc/240?img=49',
  'https://i.pravatar.cc/240?img=15','https://i.pravatar.cc/240?img=44','https://i.pravatar.cc/240?img=68','https://i.pravatar.cc/240?img=25',
  'https://i.pravatar.cc/240?img=11','https://i.pravatar.cc/240?img=38','https://i.pravatar.cc/240?img=53','https://i.pravatar.cc/240?img=45',
  'https://i.pravatar.cc/240?img=60','https://i.pravatar.cc/240?img=20','https://i.pravatar.cc/240?img=59','https://i.pravatar.cc/240?img=42',
  'https://i.pravatar.cc/240?img=64','https://i.pravatar.cc/240?img=32','https://i.pravatar.cc/240?img=67','https://i.pravatar.cc/240?img=29',
  'https://i.pravatar.cc/240?img=56','https://i.pravatar.cc/240?img=36','https://i.pravatar.cc/240?img=57','https://i.pravatar.cc/240?img=41',
  'https://i.pravatar.cc/240?img=51','https://i.pravatar.cc/240?img=43','https://i.pravatar.cc/240?img=52','https://i.pravatar.cc/240?img=31',
  'https://i.pravatar.cc/240?img=55','https://i.pravatar.cc/240?img=48','https://i.pravatar.cc/240?img=54','https://i.pravatar.cc/240?img=39',
  'https://i.pravatar.cc/240?img=61','https://i.pravatar.cc/240?img=35','https://i.pravatar.cc/240?img=62','https://i.pravatar.cc/240?img=28',
  'https://i.pravatar.cc/240?img=63','https://i.pravatar.cc/240?img=26','https://i.pravatar.cc/240?img=65','https://i.pravatar.cc/240?img=24',
  'https://i.pravatar.cc/240?img=69','https://i.pravatar.cc/240?img=23','https://i.pravatar.cc/240?img=70','https://i.pravatar.cc/240?img=17',
  'https://i.pravatar.cc/240?img=18','https://i.pravatar.cc/240?img=16','https://i.pravatar.cc/240?img=14','https://i.pravatar.cc/240?img=13',
  'https://i.pravatar.cc/240?img=9','https://i.pravatar.cc/240?img=8'
];
function paintDemoPortrait(el,id){
  if(!el)return;
  const numId=Number(id);
  const full=people[numId]||people[0];
  el.classList.add('demo-photo-avatar');
  const rel=getPeerRelation(numId);
  const connected=rel.isConnected;
  const photoUrl=connected?(demoPortraits[numId]||null):null;
  el.classList.toggle('photo-private',!connected);
  el.classList.toggle('photo-no-image',!photoUrl);
  if(el.matches('#mapview .pin')){
    el.classList.toggle('connection-pin',connected);
    el.setAttribute('aria-label',(connected?'Your connection: ':'Nearby professional: ')+(connected?full.name:full.initial));
  }
  el.style.backgroundColor=full.color;
  el.textContent=full.initial;
  if(!photoUrl){
    el.style.color='#141922';
  }else{
    el.style.removeProperty('color');
  }
  if(photoUrl){
    const photo=document.createElement('img');
    photo.src=photoUrl;
    photo.alt='';
    photo.loading='lazy';
    photo.onerror=()=>{
      photo.remove();
      el.classList.remove('photo-private');
      el.classList.add('photo-no-image');
      el.style.color='#141922';
    };
    el.append(photo);
  }
}
function refreshMapPortraits(){document.querySelectorAll('#mapview .pin[data-person]').forEach(el=>{const id=Number(el.dataset.person);const badge=el.querySelector('.pin-verified');paintDemoPortrait(el,id);if(badge)el.append(badge)});document.querySelectorAll('#listview .listitem').forEach(el=>{const id=Number(el.dataset.listperson);paintDemoPortrait(el.querySelector('.avatar'),id)})}
refreshMapPortraits();
function setJourneyRowUnread(row,isUnread){if(!row)return;const btn=row.querySelector('button');const existingIndicator=row.querySelector('.network-unread-indicator');const existingSr=row.querySelector('.network-unread-sr,.sr-only');const legacyBadge=row.querySelector('.ds-network-unread-badge');if(legacyBadge)legacyBadge.remove();if(isUnread){if(btn){btn.classList.add('has-unread');if(!btn.dataset.originalAriaLabel){btn.dataset.originalAriaLabel=btn.getAttribute('aria-label')||'';}const rawName=row.querySelector('strong')?.childNodes[0]?.textContent?.trim()||'connection';const baseLabel=btn.dataset.originalAriaLabel||('View profile for '+rawName);btn.setAttribute('aria-label',baseLabel+' (1 unread message)');if(!existingIndicator){const indicator=document.createElement('span');indicator.className='network-unread-indicator';indicator.setAttribute('aria-hidden','true');indicator.innerHTML='<span class="network-unread-dot"></span><span class="network-unread-ring ring-1" aria-hidden="true"></span><span class="network-unread-ring ring-2" aria-hidden="true"></span>';btn.append(indicator);}if(!existingSr){const sr=document.createElement('span');sr.className='sr-only network-unread-sr';sr.textContent='1 unread message';btn.append(sr);}}}else{if(existingIndicator)existingIndicator.remove();if(existingSr)existingSr.remove();if(btn){btn.classList.remove('has-unread');if(btn.dataset.originalAriaLabel){btn.setAttribute('aria-label',btn.dataset.originalAriaLabel);}else{btn.removeAttribute('aria-label');}delete btn.dataset.originalAriaLabel;}}}
if(typeof window!=='undefined'){window.setJourneyRowUnread=setJourneyRowUnread;}
function journeyRow(p,desc,actions){const el=document.createElement('div');el.className='journey-person';const avatar=document.createElement('div');avatar.className='initials';paintDemoPortrait(avatar,p.id);const info=document.createElement('div'),name=document.createElement('strong'),sub=document.createElement('small');name.textContent=p.name;const nameLine=document.createElement('div');nameLine.className='verified-name-line';nameLine.append(name);if(p.verified)name.append(makeVerifiedBadge());sub.textContent=desc||p.role;info.append(nameLine,sub);el.append(avatar,info);if(actions){const btn=document.createElement('button');btn.type='button';if(actions.icon){btn.className=actions.className||'journey-row-icon-btn';if(actions.ariaLabel||actions.label)btn.setAttribute('aria-label',actions.ariaLabel||actions.label);if(actions.title||actions.label)btn.setAttribute('title',actions.title||actions.label);btn.innerHTML='<i class="ph '+actions.icon+'" aria-hidden="true"></i>';}else{if(actions.className)btn.className=actions.className;btn.textContent=actions.label;if(actions.ariaLabel)btn.setAttribute('aria-label',actions.ariaLabel);}btn.onclick=()=>actions.onClick(p.id);el.append(btn);if(actions.unread){setJourneyRowUnread(el,true);}}return el}
function setJourneyView(id){journey.currentPerson=Number(id);saveJourney()}
let currentNetworkFilter='all';
function renderNetwork(){
  const box=$('#network-list');if(!box)return;box.replaceChildren();
  const totalCount=journey.connections.length;
  const pillCountAll=$('#pill-count-all');if(pillCountAll)pillCountAll.textContent=totalCount;
  const searchInput=$('#network-search');
  if(searchInput)searchInput.placeholder='Search '+totalCount+' connections by name or skill...';
  const reqRec = demoPeople.filter(p=>!journey.blocked.includes(p.id)&&journey.requests[p.id]==='received').length;
  const reqSent = demoPeople.filter(p=>!journey.blocked.includes(p.id)&&journey.requests[p.id]==='sent').length;
  const reqStat=$('#network-requests-stat');
  if(reqStat){
    if(reqRec>0&&reqSent>0)reqStat.textContent=reqRec+' received · '+reqSent+' sent';
    else if(reqRec>0)reqStat.textContent=reqRec+' pending';
    else if(reqSent>0)reqStat.textContent=reqSent+' sent pending';
    else reqStat.textContent='None pending';
  }
  const hiddenStat=$('#network-hidden-stat');if(hiddenStat)hiddenStat.textContent=(journey.hidden?.length||0)+' hidden';
  const q=(searchInput?.value||'').trim().toLowerCase();
  const clearBtn=$('#network-search-clear');if(clearBtn)clearBtn.classList.toggle('hide',!q);
  const ps=journey.connections.map(journeyPerson).filter(p=>{
    const full=people[p.id]||people[0];
    const skillsText=(full.skills||[]).join(' ');
    const searchable=(p.name+' '+p.role+' '+(full.headline||'')+' '+(full.sector||'')+' '+skillsText).toLowerCase();
    if(q&&!searchable.includes(q))return false;
    if(currentNetworkFilter==='design')return /design|creative|brand|type|ux|ui/i.test(p.role+' '+skillsText);
    if(currentNetworkFilter==='engineering')return /engineer|software|system|hardware|dev|cloud|ios|robotics|architect/i.test(p.role+' '+skillsText);
    if(currentNetworkFilter==='founders')return /founder|ceo|partner|investor|vc|chief/i.test(p.role+' '+skillsText);
    if(currentNetworkFilter==='ai')return /ai|ml|data|nlp|model/i.test(p.role+' '+skillsText);
    if(currentNetworkFilter==='verified')return Boolean(p.verified);
    return true;
  });
  if(!ps.length){
    const emptyBox=document.createElement('div');
    emptyBox.className='journey-empty';
    emptyBox.innerHTML='<i class="ph ph-magnifying-glass" aria-hidden="true"></i><strong>No connections found</strong>'+(q?('No results for “'+escapeProfileText(q)+'”.'):'No connections found in this category.')+'<button type="button" class="journey-quiet" id="network-reset-filter" style="margin-top:10px;font-size:13px;color:var(--accent);font-weight:650;">Reset search &amp; filters</button>';
    box.append(emptyBox);
    const resetBtn=emptyBox.querySelector('#network-reset-filter');
    if(resetBtn){
      resetBtn.onclick=()=>{
        if(searchInput)searchInput.value='';
        currentNetworkFilter='all';
        all('#network-filter-pills .network-pill').forEach(b=>b.classList.toggle('active',b.dataset.filter==='all'));
        renderNetwork();
      };
    }
    refreshIcons();
    return;
  }
  ps.forEach(p=>{
    const full=people[p.id]||people[0];
    const card=document.createElement('div');
    card.className='network-person-card';
    card.setAttribute('role','button');
    card.setAttribute('tabindex','0');
    card.setAttribute('aria-label',p.name+', '+p.role);
    const avatar=document.createElement('div');
    avatar.className='initials';
    paintDemoPortrait(avatar,p.id);
    const info=document.createElement('div');
    info.className='network-person-info';
    const nameLine=document.createElement('div');
    nameLine.className='network-person-name';
    const strongName=document.createElement('span');
    strongName.textContent=p.name;
    nameLine.append(strongName);
    if(p.verified)nameLine.append(makeVerifiedBadge());
    const roleSpan=document.createElement('span');
    roleSpan.className='network-person-role';
    roleSpan.textContent=p.role;
    info.append(nameLine,roleSpan);
    const actionsGroup=document.createElement('div');
    actionsGroup.className='network-actions-group';
    const chatBtn=document.createElement('button');
    chatBtn.type='button';
    chatBtn.className='network-chat-btn';
    chatBtn.setAttribute('aria-label','Chat with '+p.name);
    chatBtn.title='Send message';
    chatBtn.innerHTML='<i class="ph ph-chat-circle-dots" aria-hidden="true"></i>';
    chatBtn.onclick=e=>{
      e.stopPropagation();
      journey.readChats=journey.readChats||{};
      journey.readChats[p.id]=true;
      saveJourney();
      updateNotifBadge();
      setJourneyView(p.id);
      go('conversation');
    };
    actionsGroup.append(chatBtn);
    card.append(avatar,info,actionsGroup);
    card.onclick=()=>{setJourneyView(p.id);go('connectiondetail')};
    card.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();card.click()}};
    box.append(card);
  });
  refreshIcons();
}
function cancelRequestButton(name){const button=document.createElement('button');button.type='button';button.className='request-cancel';button.setAttribute('aria-label','Cancel request to '+name);button.title='Cancel request';button.innerHTML='<i class="ph ph-x" aria-hidden="true"></i>';return button}
function renderRequests(){
  const box=$('#request-list');box.replaceChildren();
  if(!journey.requestTab)journey.requestTab='received';
  all('#requests [data-request-tab]').forEach(b=>b.classList.toggle('selected',b.dataset.requestTab===journey.requestTab));
  const reqRec = demoPeople.filter(p=>!journey.blocked.includes(p.id)&&journey.requests[p.id]==='received').length;
  const reqSent = demoPeople.filter(p=>!journey.blocked.includes(p.id)&&journey.requests[p.id]==='sent').length;
  const recBadge = $('#req-count-received'); if(recBadge) recBadge.textContent = reqRec;
  const sentBadge = $('#req-count-sent'); if(sentBadge) sentBadge.textContent = reqSent;
  const received=journey.requestTab==='received';
  const ps=demoPeople.filter(p=>!journey.blocked.includes(p.id)&&journey.requests[p.id]===(received?'received':'sent')).map(p=>journeyPerson(p.id));
  if(!ps.length){
    if(received){
      box.innerHTML=journeyEmpty('No incoming requests','New introductions will appear here.');
    } else {
      box.innerHTML='<div class="journey-empty"><i class="ph ph-compass" aria-hidden="true"></i><strong>Nothing pending</strong><p>Request to connect with professionals while active in discovery.</p><button type="button" class="journey-primary" data-go="closed" style="margin-top:14px;font-size:14px;padding:11px 20px;">Explore nearby professionals</button></div>';
      box.querySelector('[data-go="closed"]')?.addEventListener('click',()=>go('closed'));
    }
    return;
  }
  ps.forEach(p=>{
    const note=journey.requestNotes?.[p.id];
    const sub=note?('“'+note+'”'):p.role;
    const row=journeyRow(p,sub);
    const acts=document.createElement('div');
    acts.className='person-actions';
    if(received){
      const acceptBtn=document.createElement('button');
      acceptBtn.type='button';
      acceptBtn.className='activity-btn-accept';
      acceptBtn.setAttribute('data-action','accept');
      acceptBtn.setAttribute('data-person',p.id);
      acceptBtn.textContent='Accept';
      acceptBtn.onclick=()=>{
        journey.connections.push(p.id);
        journey.connections=[...new Set(journey.connections)];
        journey.connectionDates={...(journey.connectionDates||{}),[p.id]:new Date().toISOString().slice(0,10)};
        delete journey.requests[p.id];
        saveJourney();
        updateNotifBadge();
        renderRequests();
        renderNetwork();
        const fullP=people[p.id]||p;
        toast('Connected with '+(fullP.name||p.name)+'!', 'Open chat ↗', ()=>{
          setJourneyView(p.id);
          go('conversation');
        });
      };
      const declineBtn=document.createElement('button');
      declineBtn.type='button';
      declineBtn.className='activity-btn-decline';
      declineBtn.setAttribute('data-action','decline');
      declineBtn.setAttribute('data-person',p.id);
      declineBtn.textContent='Decline';
      declineBtn.onclick=()=>{
        delete journey.requests[p.id];
        if(journey.requestNotes)delete journey.requestNotes[p.id];
        saveJourney();
        updateNotifBadge();
        renderRequests();
        renderNetwork();
        toast('Request declined');
      };
      acts.append(acceptBtn,declineBtn);
      row.classList.add('request-received');
      row.append(acts);
    } else {
      const cancelBtn=cancelRequestButton(p.name);
      cancelBtn.setAttribute('data-action','cancel');
      cancelBtn.setAttribute('data-person',p.id);
      cancelBtn.onclick=()=>{
        modal('Cancel request?', 'Are you sure you want to cancel your connection request to '+p.name+'?', 'Cancel request', ()=>{
          delete journey.requests[p.id];
          if(journey.requestNotes)delete journey.requestNotes[p.id];
          saveJourney();
          updateNotifBadge();
          renderRequests();
          renderNetwork();
          toast('Connection request cancelled');
        });
      };
      row.append(cancelBtn);
    }
    box.append(row);
  });
}
$('#connection-message-fab').addEventListener('click',()=>{if(journey.connections.includes(journey.currentPerson))go('conversation')});function renderConnectionDetail(){const id=journey.currentPerson,p=journeyPerson(id),full=people[id]||people[0];const since=journey.connectionDates?.[id]||({0:'2025-06-12',1:'2026-02-18'})[id]||null;const sinceEl=$('#connection-since');sinceEl.textContent=since?'Since '+new Date(since+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}):'';$('#connection-privacy-hint').classList.toggle('hide',!journey.connections.includes(id));$('#connection-message-fab').classList.toggle('hide',!journey.connections.includes(id));paintConnectionCount('#connection-connection-count',id,journey.connections.includes(id));paintDemoPortrait($('#connection-avatar'),id);$('#connection-name').textContent=journey.connections.includes(id)?full.name:journeyPerson(id).name;markVerifiedName($('#connection-name'),id);$('#connection-headline').textContent=full.headline;$('#connection-sector').textContent=full.sector;$('#connection-intent').textContent=full.intent;$('#connection-bio').textContent=full.bio;$('#connection-looking').textContent=full.looking;const skills=$('#connection-skills');skills.replaceChildren(...full.skills.map(skill=>{const tag=document.createElement('span');tag.textContent=skill;return tag}));$('#connection-project').classList.toggle('hide',!full.project);$('#connection-project-name').textContent=full.project||'';$('#connection-project-desc').textContent=full.projectdesc||'';$('#connectiondetail .journey-card[data-go="conversation"]').disabled=!journey.connections.includes(id);const hide=$('#connectiondetail .journey-card[data-go="hiddenconnections"]');hide.querySelector('strong').textContent=journey.hidden.includes(id)?'Manage hidden presence':'Hide my active presence';renderConnectionDocs(id);renderConnectionExperience(id);refreshIcons()}
function renderHidden(){
  const box=$('#hidden-list');if(!box)return;
  box.replaceChildren();
  const q = ($('#hidden-search')?.value || '').trim().toLowerCase();
  const hiddenIds = (journey.hidden || []).filter(id => journey.connections.includes(id));
  const ps = hiddenIds.map(journeyPerson).filter(p => {
    if(q && !p.name.toLowerCase().includes(q) && !p.role.toLowerCase().includes(q)) return false;
    return true;
  });
  if(!ps.length){
    box.innerHTML=journeyEmpty('No hidden connections', q ? 'No hidden connections match your search.' : 'Connections whose presence you hide from nearby radar will appear here.');
    return;
  }
  ps.forEach(p=>{
    const row = journeyRow(p, 'Presence hidden from nearby radar', {
      label: 'Unhide',
      className: 'journey-quiet-action-btn',
      ariaLabel: 'Unhide presence for ' + p.name,
      title: 'Unhide presence for ' + p.name,
      onClick: id => {
        journey.hidden = journey.hidden.filter(x => x !== id);
        saveJourney();
        renderHidden();
        renderNetwork();
        toast('Presence unhidden for ' + p.name);
      }
    });
    row.classList.add('is-hidden-connection');
    box.append(row);
  });
}
$('#hidden-search')?.addEventListener('input', renderHidden);
function renderBlocked(){
  const box=$('#blocked-list');if(!box)return;
  box.replaceChildren();
  const ps=(journey.blocked||[]).map(journeyPerson);
  if(!ps.length){
    box.innerHTML=journeyEmpty('No blocked accounts','People you block will appear here.');
    return;
  }
  ps.forEach(p=>box.append(journeyRow(p,'Blocked in this demo',{
    label:'Unblock',
    className:'journey-quiet-action-btn',
    ariaLabel:'Unblock ' + p.name,
    title:'Unblock ' + p.name,
    onClick:id=>{
      journey.blocked=journey.blocked.filter(x=>x!==id);
      saveJourney();
      renderBlocked();
      toast('Unblocked ' + p.name);
    }
  })));
}function renderNotifications(){const box=$('#notification-list');box.replaceChildren();for(const [key,title,desc] of [['connection','Connection requests','Invitations and acceptance updates'],['messages','New messages','Updates from your connections'],['session','Session reminders','Reminder before visibility ends'],['product','Product updates','Occasional feature announcements']]){const row=document.createElement('div');row.className='journey-person';const info=document.createElement('div');info.style.flex='1';const strong=document.createElement('strong');strong.textContent=title;const small=document.createElement('small');small.textContent=desc;info.append(strong,small);const toggle=document.createElement('button');toggle.className='settings-toggle'+(journey.notifications[key]?'':' off');toggle.setAttribute('role','switch');toggle.setAttribute('aria-checked',String(!!journey.notifications[key]));toggle.setAttribute('aria-label',title);toggle.innerHTML='<i></i>';toggle.onclick=()=>{journey.notifications[key]=!journey.notifications[key];if(key==='session'){privacyPrefs.reminders=journey.notifications[key];try{localStorage.setItem('peopi-demo-privacy',JSON.stringify(privacyPrefs))}catch(e){}paintPrivacy();paintSettings()}if(key==='connection'){privacyPrefs.requests=journey.notifications[key];try{localStorage.setItem('peopi-demo-privacy',JSON.stringify(privacyPrefs))}catch(e){}paintPrivacy();paintSettings()}saveJourney();renderNotifications()};row.append(info,toggle);box.append(row)}}let onboardingSlideIndex = 0;
const totalOnboardingSlides = 3;
function goToOnboardingSlide(idx){
  if(idx < 0) idx = 0;
  if(idx >= totalOnboardingSlides) idx = totalOnboardingSlides - 1;
  onboardingSlideIndex = idx;
  const slides = document.getElementById("onboarding-slides");
  if(slides) slides.style.transform = "translateX(-" + (onboardingSlideIndex * (100 / totalOnboardingSlides)) + "%)";
  const copyTrack = document.getElementById("onboarding-copy-track");
  if(copyTrack) copyTrack.style.transform = "translateX(-" + (onboardingSlideIndex * (100 / totalOnboardingSlides)) + "%)";
  const dots = document.querySelectorAll(".onboarding-dot");
  dots.forEach((d, i) => {
    d.classList.toggle("active", i === onboardingSlideIndex);
    d.setAttribute("aria-selected", String(i === onboardingSlideIndex));
  });
  const nextBtn = document.getElementById("onboarding-next");
  if(nextBtn){
    if(onboardingSlideIndex === totalOnboardingSlides - 1){
      nextBtn.innerHTML = "Get Started <i class=\"ph ph-arrow-right\" aria-hidden=\"true\"></i>";
    } else {
      nextBtn.innerHTML = "Continue <i class=\"ph ph-arrow-right\" aria-hidden=\"true\"></i>";
    }
  }
  refreshIcons();
}
function initOnboarding(){
  const nextBtn = document.getElementById("onboarding-next");
  if(nextBtn){
    nextBtn.onclick = () => {
      if(onboardingSlideIndex < totalOnboardingSlides - 1){
        goToOnboardingSlide(onboardingSlideIndex + 1);
      } else {
        openAuthFlow("signup");
      }
    };
  }
  const skipBtn = document.getElementById("onboarding-skip");
  if(skipBtn) skipBtn.onclick = () => openAuthFlow("signup");
  const dots = document.querySelectorAll(".onboarding-dot");
  dots.forEach(d => {
    d.onclick = () => {
      const targetIdx = parseInt(d.getAttribute("data-slide-to"), 10);
      if(!isNaN(targetIdx)) goToOnboardingSlide(targetIdx);
    };
  });
  const swipeTarget = document.getElementById("onboarding");
  if(swipeTarget){
    let startX = 0, startY = 0;
    swipeTarget.addEventListener("touchstart", e => {
      if(e.touches && e.touches[0]){
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }
    }, { passive: true });
    swipeTarget.addEventListener("touchend", e => {
      if(e.changedTouches && e.changedTouches[0]){
        const diffX = e.changedTouches[0].clientX - startX;
        const diffY = e.changedTouches[0].clientY - startY;
        if(Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40){
          if(diffX < 0 && onboardingSlideIndex < totalOnboardingSlides - 1){
            goToOnboardingSlide(onboardingSlideIndex + 1);
          } else if(diffX > 0 && onboardingSlideIndex > 0){
            goToOnboardingSlide(onboardingSlideIndex - 1);
          }
        }
      }
    }, { passive: true });
  }
}
initOnboarding();
all('#permissions [data-action]').forEach(b=>b.addEventListener('click',()=>{const act=b.dataset.action;if(act==='location')toast('Approximate location is active during sessions.');else if(act==='notification')toast('Notification preferences can be customized in Settings.');}));
function renderReportUser(){
  const card=$('#report-target-card');
  if(!card)return;
  const targetId=(journey.currentPerson!==undefined&&journey.currentPerson!==null)?Number(journey.currentPerson):(journey.connections[0]??0);
  const p=journeyPerson(targetId);
  const full=people[targetId]||people[0];
  const isConn=journey.connections.includes(targetId);
  const displayName=isConn?full.name:p.name;
  card.replaceChildren();
  const avatar=document.createElement('div');
  avatar.className='initials';
  paintDemoPortrait(avatar,targetId);
  const info=document.createElement('div');
  info.className='report-target-info';
  const nameLine=document.createElement('div');
  nameLine.className='verified-name-line';
  const nameEl=document.createElement('strong');
  nameEl.textContent=displayName;
  nameLine.append(nameEl);
  if(full.verified||p.verified){
    nameLine.append(makeVerifiedBadge());
  }
  const roleEl=document.createElement('small');
  roleEl.textContent=full.headline||p.role;
  const metaEl=document.createElement('span');
  metaEl.className='report-target-badge';
  metaEl.textContent=isConn?'Confirmed connection':'Nearby professional';
  info.append(nameLine,roleEl,metaEl);
  card.append(avatar,info);
  const blockBtn=$('#report-block');
  if(blockBtn){
    blockBtn.textContent='Block '+displayName;
  }
  const reasonSelect=$('#report-reason');
  if(reasonSelect)reasonSelect.value='';
  const detailsInput=$('#report-details');
  if(detailsInput)detailsInput.value='';
}
function updateJourneyScreen(to){
  if(to === 'reportuser') renderReportUser();
  if(to==='onboarding')goToOnboardingSlide(0);
  if(to==='active'){refreshMapPortraits();if(view==='list')renderDiscoveryList();if(typeof updateTimer==='function')updateTimer();}
  if(to==='network')renderNetwork();
  if(to==='requests')renderRequests();
  if(to==='messages')renderMessages();
  if(to==='activity')renderActivity();
  if(to==='conversation')renderConversation();
  if(to==='connectiondetail')renderConnectionDetail();
  if(to==='hiddenconnections')renderHidden();
  if(to==='blockedaccounts')renderBlocked();
  if(to==='notifications')renderNotifications();
  if(to==='firstprofile'){
    const map={name:'on-name',headline:'on-headline',city:'on-city',bio:'on-bio',skills:'on-skills'};
    Object.entries(map).forEach(([key,id])=>{
      const el=$('#'+id);
      if(el){
        if(key==='name'&&(ownProfile[key]==='Your name'||!ownProfile[key])){
          el.value='';
        } else {
          el.value=ownProfile[key]||'';
        }
      }
    });
  }
  if(to==='appsettings')paintSettings();
}
const goBeforeJourneys=go;go=function(to,dir){goBeforeJourneys(to,dir);updateJourneyScreen(to);refreshIcons()};
let authMode = 'signup';
function openAuthFlow(mode){
  authMode = mode || 'signup';
  const isLogin = authMode === 'login';
  const eyebrow = $('#auth-eyebrow');
  const title = $('#auth-title');
  const heading = $('#auth-heading');
  const subheading = $('#auth-subheading');
  if(eyebrow) eyebrow.textContent = isLogin ? 'WELCOME BACK' : 'WELCOME TO PEOPI';
  if(title) title.textContent = isLogin ? 'Log In' : 'Join Peopi';
  if(heading) heading.textContent = isLogin ? 'Welcome back to Peopi.' : 'Connections begin here.';
  if(subheading) subheading.textContent = isLogin ? 'Sign in to access your connections and discovery.' : 'Choose your sign-in method to try the demo.';
  const emailInput = $('#auth-email');
  if(emailInput) emailInput.value = isLogin ? 'alex.morgan@example.com' : '';
  const codeInput = $('#auth-code');
  if(codeInput) codeInput.value = '';
  $('#auth-email-stage')?.classList.remove('hide');
  $('#auth-code-stage')?.classList.add('hide');
  go('auth');
}
const welcomeLoginBtn = $('#welcome-login-btn');
if(welcomeLoginBtn){
  welcomeLoginBtn.onclick = () => openAuthFlow('login');
}
$('#auth-continue').onclick=()=>{const email=$('#auth-email').value.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){toast('Enter a valid email address');return}$('#auth-email-stage').classList.add('hide');$('#auth-code-stage').classList.remove('hide')};
$('#auth-verify').onclick=()=>{
  if($('#auth-code').value.trim()!=='123456'){toast('Use demo code 123456');return}
  if(authMode === 'login'){
    go('closed');
    toast('Signed in successfully');
  } else {
    go('firstprofile');
  }
};
$('#auth-resend').onclick=()=>toast('Demo verification code: 123456');
$('#on-profile-next').onclick=()=>{if(!$('#on-name').value.trim()||!$('#on-headline').value.trim()||!$('#on-city').value.trim()){toast('Name, headline and city are required');return}const keys={name:'on-name',headline:'on-headline',city:'on-city'};Object.entries(keys).forEach(([k,id])=>{const el=$('#'+id);if(el)ownProfile[k]=el.value.trim();});paintProfile();go('firstintent')};
all('#on-intent-options [data-choice]').forEach(b=>b.onclick=()=>{b.classList.toggle('selected');refreshIcons()});
$('#on-finish').onclick=()=>{const selected=all('#on-intent-options .selected').map(x=>x.dataset.choice);if(!selected.length){toast('Select at least one interest');return}ownProfile.intent=selected[0];ownProfile.goals=selected.join(' · ');try{localStorage.setItem('peopi-demo-profile',JSON.stringify(ownProfile))}catch(e){}paintProfile();go('permissions');toast('Interests saved. Review app permissions.')};
$('#recovery-send').onclick=()=>{
  const email = ($('#recovery-email')?.value || '').trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){toast('Enter a valid email');return}
  $('#recovery-form-stage')?.classList.add('hide');
  $('#recovery-result-stage')?.classList.remove('hide');
  const targetEmail = $('#recovery-target-email');
  if(targetEmail) targetEmail.textContent = email;
};
$('#recovery-change-email-btn')?.addEventListener('click', () => {
  $('#recovery-result-stage')?.classList.add('hide');
  $('#recovery-form-stage')?.classList.remove('hide');
  $('#recovery-email')?.focus();
});
$('#recovery-resend-btn')?.addEventListener('click', () => {
  toast('Demo recovery link resent');
});
$('#network-search').addEventListener('input',renderNetwork);
$('#network-search-clear')?.addEventListener('click',()=>{const input=$('#network-search');if(input){input.value='';input.focus()}renderNetwork()});
all('#network-filter-pills .network-pill').forEach(pill=>{pill.addEventListener('click',()=>{all('#network-filter-pills .network-pill').forEach(p=>p.classList.remove('active'));pill.classList.add('active');currentNetworkFilter=pill.dataset.filter||'all';renderNetwork()})});
all('[data-request-tab]').forEach(b=>b.onclick=()=>{journey.requestTab=b.dataset.requestTab;if(!isSyncingHash&&document.querySelector('#requests.active')){setHash('screen=requests&tab='+journey.requestTab)}renderRequests()});
