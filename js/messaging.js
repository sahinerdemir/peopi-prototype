function renderMessages(){const box=$('#conversation-list');if(!box)return;box.replaceChildren();if(!journey.messagesTab)journey.messagesTab='current';all('#messages [data-messages-tab]').forEach(b=>b.classList.toggle('selected',b.dataset.messagesTab===journey.messagesTab));if(!journey.chats[0]||!journey.chats[0].length){const t0=Date.now()-42*60000,at=m=>new Date(t0+m*60000).toISOString();journey.chats[0]=[{text:"Hi! Thanks for connecting. Are you here for the product talks too?",mine:false,time:at(0),demo:true},{text:"Hey! Yes, just finished the design systems session. Really good one.",mine:true,time:at(2),demo:true},{text:"Same. The part about shared tokens across web and mobile was exactly what we're struggling with.",mine:false,time:at(3),demo:true},{text:"Sure. Coffee near the main hall in 15 minutes? ☕",mine:true,time:at(25),demo:true}];}if(!journey.chats[1]){const t1=Date.now()-85*60000;journey.chats[1]=[{text:"Hey Jordan! Heading to the spatial computing demo?",mine:true,time:new Date(t1).toISOString()},{text:"Yes! Catch you near the demo booth 👋",mine:false,time:new Date(t1+3*60000).toISOString()}];}if(!journey.chats[2]){const t2=Date.now()-140*60000;journey.chats[2]=[{text:"Great pitch on climate tech earlier today!",mine:true,time:new Date(t2).toISOString()},{text:"Thanks so much! Let's chat over coffee soon.",mine:false,time:new Date(t2+5*60000).toISOString()}];}if(!journey.chats[7]){const t7=Date.now()-210*60000;journey.chats[7]=[{text:"Are you attending the autonomous AI workshop?",mine:false,time:new Date(t7).toISOString()},{text:"Planning on it, see you there!",mine:true,time:new Date(t7+4*60000).toISOString()}];}let ps=journey.connections.map(journeyPerson);if(journey.messagesTab==='current'){ps=ps.filter(p=>journey.chats[p.id]&&journey.chats[p.id].length>0);}ps.sort((a,b)=>{const lastA=journey.chats[a.id]?.at(-1)?.time?new Date(journey.chats[a.id].at(-1).time).getTime():((journey.connectionDates?.[a.id]||(typeof default20Dates!=='undefined'&&default20Dates[a.id]))?new Date(((journey.connectionDates?.[a.id]||default20Dates[a.id]).includes('T')?(journey.connectionDates?.[a.id]||default20Dates[a.id]):(journey.connectionDates?.[a.id]||default20Dates[a.id])+'T12:00:00')).getTime():0);const lastB=journey.chats[b.id]?.at(-1)?.time?new Date(journey.chats[b.id].at(-1).time).getTime():((journey.connectionDates?.[b.id]||(typeof default20Dates!=='undefined'&&default20Dates[b.id]))?new Date(((journey.connectionDates?.[b.id]||default20Dates[b.id]).includes('T')?(journey.connectionDates?.[b.id]||default20Dates[b.id]):(journey.connectionDates?.[b.id]||default20Dates[b.id])+'T12:00:00')).getTime():0);return lastB-lastA;});if(!ps.length){const emptyTitle=journey.messagesTab==='current'?'No active conversations':'No conversations yet';const emptyDesc=journey.messagesTab==='current'?'Conversations from your active nearby sessions will appear here.':'Accept a connection request to open a private conversation.';box.innerHTML=journeyEmpty(emptyTitle,emptyDesc);return;}ps.forEach((p,idx)=>{
  const messages=journey.chats[p.id]||[];
  const last=messages.at(-1);
  let timeStr='';
  if(last&&last.time){
    timeStr=formatActivityTime(new Date(last.time).getTime());
  }else{
    const connDate=(journey.connectionDates&&journey.connectionDates[p.id])||(typeof default20Dates!=='undefined'&&default20Dates[p.id]);
    if(connDate){
      const connTs=new Date(connDate.includes('T')?connDate:(connDate+'T12:00:00')).getTime();
      timeStr=formatActivityTime(connTs);
    }else{
      timeStr=formatActivityTime(Date.now()-(idx+1)*86400000);
    }
  }
  const row=journeyRow(p, last ? last.text : 'Say hello to start a conversation');
  row.classList.add('conversation-clickable-row');
  row.onclick = () => {
    journey.readChats=journey.readChats||{};
    journey.readChats[p.id]=true;
    saveJourney();
    updateNotifBadge();
    setJourneyView(p.id);
    go('conversation');
  };
  if(timeStr){
    const timeSpan = document.createElement('span');
    timeSpan.className = 'conversation-time-meta';
    timeSpan.textContent = timeStr;
    row.querySelector('.verified-name-line')?.append(timeSpan);
  }
  if(!(journey.readChats&&journey.readChats[p.id])&&last){
    const dot=document.createElement('span');
    dot.className='activity-unread-dot';
    row.append(dot);
  }
  box.append(row);
});}function buildChatRow(text, isMine) {
  const row = document.createElement('div');
  row.className = 'chat-row' + (isMine ? ' mine' : '');
  const b = document.createElement('div');
  b.className = 'chat-bubble' + (isMine ? ' mine' : '');
  const textNode = document.createElement('div');
  textNode.className = 'chat-bubble-text';
  textNode.textContent = text;
  b.append(textNode);
  row.append(b);
  return row;
}
window.buildChatRow = buildChatRow;

function renderConversation(){closeConversationMenu();const p=journeyPerson(journey.currentPerson);if(p){journey.readChats=journey.readChats||{};journey.readChats[p.id]=true;saveJourney();updateNotifBadge();}$('#chat-peer').replaceChildren();const chatAvatar=document.createElement('div');chatAvatar.className='initials chat-peer-avatar';paintDemoPortrait(chatAvatar,p.id);const chatCopy=document.createElement('div');chatCopy.className='chat-peer-copy';const chatName=document.createElement('strong');chatName.className='verified-chat-name';chatName.textContent=p.name;if(p.verified)chatName.append(makeVerifiedBadge());const chatRole=document.createElement('small');chatRole.textContent=p.role;chatCopy.append(chatName,chatRole);$('#chat-peer').append(chatAvatar,chatCopy);const box=$('#chat-history');box.replaceChildren();const banner=document.createElement('div');banner.className='chat-meetup-banner';banner.innerHTML='<div class="chat-meetup-badge"><i class="ph ph-map-pin" aria-hidden="true"></i> <span>Nearby Meetup</span></div><p>Coordinate a quick in-person coffee or intro spot nearby. Exact coordinates stay private.</p>';box.append(banner);let msgs=journey.chats[p.id]||[];if(p.id===0&&(!msgs.length||(msgs.length<=5&&msgs[0].text==='Hi! Thanks for connecting. Are you here for the product talks too?'&&!msgs[0].demo))){const t0=Date.now()-42*60000,at=m=>new Date(t0+m*60000).toISOString();msgs=[{text:"Hi! Thanks for connecting. Are you here for the product talks too?",mine:false,time:at(0),demo:true},{text:"Hey! Yes, just finished the design systems session. Really good one.",mine:true,time:at(2),demo:true},{text:"Same. The part about shared tokens across web and mobile was exactly what we're struggling with.",mine:false,time:at(3),demo:true},{text:"Ha, us too. We keep drifting between Figma and the iOS build.",mine:true,time:at(5),demo:true},{text:"How big is your design team?",mine:false,time:at(6),demo:true},{text:"Four designers, two of us on mobile. You?",mine:true,time:at(7),demo:true},{text:"Just me and a freelancer for now. Early-stage startup, we're building a B2B workflow tool.",mine:false,time:at(9),demo:true},{text:"Nice. What stage are you at?",mine:true,time:at(10),demo:true},{text:"Private beta with eight teams. Lots of feedback, not enough research time 😅",mine:false,time:at(12),demo:true},{text:"I know that feeling. We do 30-minute weekly calls with two customers, it keeps us honest.",mine:true,time:at(13),demo:true},{text:"That's a good rhythm. Do you record them?",mine:false,time:at(15),demo:true},{text:"Yes, with consent. We tag clips in a shared board so engineers can watch too.",mine:true,time:at(16),demo:true},{text:"I'd love to see how you structure that board.",mine:false,time:at(18),demo:true},{text:"Happy to show you. It's simple, nothing fancy.",mine:true,time:at(19),demo:true},{text:"Are you staying for the afternoon panel?",mine:false,time:at(21),demo:true},{text:"Planning to. The one on AI in research ops?",mine:true,time:at(22),demo:true},{text:"That's the one. Want to grab a coffee before it starts?",mine:false,time:at(23),demo:true},{text:"Sure. Coffee near the main hall in 15 minutes?",mine:true,time:at(25),demo:true},{text:"Perfect, see you there ☕",mine:false,time:at(26),demo:true},{text:"I'll be the one with the orange notebook 🙂",mine:true,time:at(27),demo:true}];journey.chats[p.id]=msgs;saveJourney()}if(!msgs.length){const n=document.createElement('div');n.className='journey-empty';n.textContent='Say hello. Coordinate a quick nearby meetup.';box.append(n)}let lastDividerTime=null;msgs.forEach((m,idx)=>{const mDate=m.time?new Date(m.time):null;const needDivider=idx===0||(mDate&&lastDividerTime&&(mDate-lastDividerTime>15*60000));if(needDivider&&mDate){const div=document.createElement('div');div.className='chat-time-divider';const span=document.createElement('span');span.textContent='Today · '+mDate.toLocaleTimeString([],{hour:'numeric',minute:'2-digit'});div.append(span);box.append(div);lastDividerTime=mDate}const row=buildChatRow(m.text, m.mine);box.append(row);});box.scrollTop=box.scrollHeight;updateChatBarHeight()}$('#connection-manage-shortcut').addEventListener('click',()=>{const scroller=$('#connectiondetail .journey-body');const target=$('#connection-manage-target');if(!scroller||!target)return;const top=target.getBoundingClientRect().top-scroller.getBoundingClientRect().top+scroller.scrollTop-22;scroller.scrollTo({top:Math.max(0,top),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})});
function updateChatBarHeight(){const f=$('#chat-composer-wrap')||$('#chat-form');if(!f)return;const h=f.getBoundingClientRect().height;$('#conversation').style.setProperty('--chat-bar-height',Math.round(h)+'px')}
$('#chat-input').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();$('#chat-form').requestSubmit()}});
$('#chat-form').addEventListener('submit',e=>{e.preventDefault();const t=$('#chat-input').value.trim();if(!t)return;if(!journey.connections.includes(journey.currentPerson)){toast('Connect before sending a message');return}(journey.chats[journey.currentPerson]??=[]).push({text:t,mine:true,time:new Date().toISOString()});$('#chat-input').value='';saveJourney();renderConversation()});
document.addEventListener('click',e=>{const pBtn=e.target.closest('[data-prompt]');if(pBtn&&document.querySelector('#conversation.active')){const text=pBtn.dataset.prompt;const input=$('#chat-input');if(input){input.value=text;input.focus();const box=$('#chat-history');if(box)box.scrollTop=box.scrollHeight}}});

function closeConversationMenu(){
  const menu=$('#conversation-menu');
  const btn=$('#conversation-more-btn');
  if(menu)menu.classList.add('hide');
  if(btn)btn.setAttribute('aria-expanded','false');
}

function updateConversationMenuState(){
  const p=journeyPerson(journey.currentPerson);
  if(!p)return;
  journey.muted=journey.muted||[];
  const isMuted=journey.muted.includes(p.id);
  const muteText=$('#chat-menu-mute-text');
  const muteIcon=$('#chat-menu-mute-icon');
  if(muteText)muteText.textContent=isMuted?'Unmute notifications':'Mute notifications';
  if(muteIcon){
    muteIcon.className=isMuted?'ph ph-bell':'ph ph-bell-slash';
  }
  const isHidden=journey.hidden.includes(p.id);
  const hiddenText=$('#chat-menu-hidden-text');
  const hiddenIcon=$('#chat-menu-hidden-icon');
  if(hiddenText)hiddenText.textContent=isHidden?'Unhide presence':'Hide presence';
  if(hiddenIcon){
    hiddenIcon.className=isHidden?'ph ph-eye':'ph ph-eye-slash';
  }
  const blockText=$('#chat-menu-block-text');
  if(blockText)blockText.textContent='Block '+p.name;
}

function toggleConversationMenu(){
  const menu=$('#conversation-menu');
  const btn=$('#conversation-more-btn');
  if(!menu)return;
  const isClosed=menu.classList.contains('hide');
  if(isClosed){
    updateConversationMenuState();
    menu.classList.remove('hide');
    btn?.setAttribute('aria-expanded','true');
    refreshIcons();
  }else{
    closeConversationMenu();
  }
}

$('#conversation-more-btn')?.addEventListener('click',e=>{
  e.stopPropagation();
  toggleConversationMenu();
});

document.addEventListener('click',e=>{
  const menu=$('#conversation-menu');
  if(menu&&!menu.classList.contains('hide')){
    if(!e.target.closest('#conversation-menu')&&!e.target.closest('#conversation-more-btn')){
      closeConversationMenu();
    }
  }
});

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    closeConversationMenu();
  }
});

all('#conversation-menu .chat-menu-item').forEach(item=>{
  item.addEventListener('click',()=>{
    const action=item.dataset.chatAction;
    const p=journeyPerson(journey.currentPerson);
    closeConversationMenu();
    if(!p)return;
    if(action==='profile'){
      setJourneyView(p.id);
      go('connectiondetail','push');
    }else if(action==='export'){
      const msgs=journey.chats[p.id]||[];
      const lines=[
        'Peopi — Conversation Export',
        'Participant: '+p.name+' ('+p.role+')',
        'Exported: '+new Date().toLocaleString(),
        '----------------------------------------'
      ];
      if(!msgs.length){
        lines.push('No messages recorded.');
      }else{
        msgs.forEach(m=>{
          const sender=m.mine?'You':p.name;
          const time=m.time?new Date(m.time).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}):'';
          lines.push('['+time+'] '+sender+':\n'+m.text);
        });
      }
      const blob=new Blob([lines.join('\n\n')],{type:'text/plain;charset=utf-8'});
      const url=URL.createObjectURL(blob);
      const a=document.createElement('a');
      a.href=url;
      a.download='peopi-chat-'+p.name.toLowerCase().replace(/[^a-z0-9]/g,'-')+'.txt';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      toast('Conversation exported as .txt');
    }else if(action==='toggle-mute'){
      journey.muted=journey.muted||[];
      if(journey.muted.includes(p.id)){
        journey.muted=journey.muted.filter(x=>x!==p.id);
        toast('Notifications unmuted for '+p.name);
      }else{
        journey.muted.push(p.id);
        toast('Notifications muted for '+p.name);
      }
      saveJourney();
      updateConversationMenuState();
      if(typeof updateNotifBadge==='function')updateNotifBadge();
    }else if(action==='toggle-hidden'){
      if(journey.hidden.includes(p.id)){
        journey.hidden=journey.hidden.filter(x=>x!==p.id);
        toast('Active presence visible to '+p.name);
      }else{
        journey.hidden.push(p.id);
        toast('Active presence hidden from '+p.name);
      }
      saveJourney();
      updateConversationMenuState();
    }else if(action==='clear'){
      if(window.confirm('Clear conversation history with '+p.name+'?')){
        journey.chats[p.id]=[];
        saveJourney();
        renderConversation();
        toast('Chat history cleared');
      }
    }else if(action==='report'){
      setJourneyView(p.id);
      go('reportuser','push');
    }else if(action==='block'){
      if(window.confirm('Block '+p.name+'? You will no longer receive messages or connect.')){
        if(!journey.blocked.includes(p.id))journey.blocked.push(p.id);
        journey.connections=journey.connections.filter(x=>x!==p.id);
        journey.hidden=journey.hidden.filter(x=>x!==p.id);
        delete journey.chats[p.id];
        saveJourney();
        go('messages','pop');
        toast(p.name+' blocked');
      }
    }
  });
});
$('#connectiondetail .journey-card[data-go="conversation"]').onclick=()=>{if(journey.connections.includes(journey.currentPerson))go('conversation');else toast('Connect first')};
all('[data-action]').forEach(b=>b.onclick=()=>{if(b.dataset.action==='remove-connection'){const id=journey.currentPerson;if(!window.confirm('Remove this connection? Messaging will no longer be available.'))return;journey.connections=journey.connections.filter(x=>x!==id);journey.hidden=journey.hidden.filter(x=>x!==id);saveJourney();go('network');toast('Demo connection removed')}else if(b.dataset.action==='location')modal('Location permission','The production app will request approximate location only when you begin nearby discovery. No permission is requested here.','Got it');else if(b.dataset.action==='notification')modal('Notifications','A production app will request notification permission after explaining the benefits. No system dialog is triggered here.','Got it')});
$('#report-block').onclick=()=>{const targetId=(journey.currentPerson!==undefined&&journey.currentPerson!==null)?Number(journey.currentPerson):(journey.connections[0]??0);const p=journeyPerson(targetId);const full=people[targetId]||people[0];const displayName=journey.connections.includes(targetId)?full.name:p.name;if(!journey.blocked.includes(targetId))journey.blocked.push(targetId);journey.connections=journey.connections.filter(x=>x!==targetId);journey.hidden=journey.hidden.filter(x=>x!==targetId);delete journey.requests[targetId];delete journey.chats[targetId];saveJourney();go('blockedaccounts');toast(displayName+' blocked')};$('#report-submit').onclick=()=>{const targetId=(journey.currentPerson!==undefined&&journey.currentPerson!==null)?Number(journey.currentPerson):(journey.connections[0]??0);const p=journeyPerson(targetId);const full=people[targetId]||people[0];const displayName=journey.connections.includes(targetId)?full.name:p.name;const rsn=$('#report-reason').value;if(!rsn){toast('Please select a reason for reporting');return}const reasonText=$('#report-reason').selectedOptions[0]?.text||rsn;modal('Report preview only','Report submitted for '+displayName+'.\nReason: '+reasonText+'.\nThis prototype does not submit or store reports.','Got it')};
$('#requestFromProfile').onclick=handleProfileRequestClick;
$('#completeness').onclick=()=>openProfileEditor();
['#notif-btn','#network-notif-btn'].forEach(sel=>$(sel)?.addEventListener('click',()=>go('activity','push')));
['#messages-btn','#network-messages-btn'].forEach(sel=>$(sel)?.addEventListener('click',()=>go('messages','push')));
$('#manage-hidden').onclick=()=>go('hiddenconnections','push');
const reqLink=$('#privacy-requests-link');if(reqLink)reqLink.onclick=()=>go('notifications','push');
const remLink=$('#privacy-reminders-link');if(remLink)remLink.onclick=()=>go('notifications','push');
$('#privacy-blocked').onclick=()=>go('blockedaccounts','push');
$('#privacy-report').onclick=()=>go('reportuser','push');
document.addEventListener('click',e=>{
  const back=e.target.closest('.journey-back, .back, #setup-back, #setup-cancel, #messages-back, #requests-back, #activity-back, #conversation-back, #connectiondetail-back, #hiddenconnections-back, #blockedaccounts-back, #reportuser-back, #notifications-back, #notifications-done, #settings-back, #privacy-back, #edit-back, #edit-cancel, #verify-back, #helpsupport-back, #aboutpeopi-back');
  if(back){
    e.preventDefault();
    e.stopPropagation();
    if(back.id==='helpsupport-back'||back.id==='aboutpeopi-back'){
      go('appsettings','pop');
    } else if(window.goBack)window.goBack();
    else history.back();
  }
});
function initHelpAndAboutHandlers() {
  const hsBack = $('#helpsupport-back');
  if (hsBack) hsBack.onclick = (e) => { e.preventDefault(); e.stopPropagation(); go('appsettings', 'pop'); };
  const abBack = $('#aboutpeopi-back');
  if (abBack) abBack.onclick = (e) => { e.preventDefault(); e.stopPropagation(); go('appsettings', 'pop'); };

  // FAQ accordion toggle
  all('#helpsupport .help-faq-q').forEach(qBtn => {
    qBtn.onclick = (e) => {
      e.preventDefault();
      const item = qBtn.closest('.help-faq-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');
      all('#helpsupport .help-faq-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          const btn = other.querySelector('.help-faq-q');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });
      item.classList.toggle('open', !isOpen);
      qBtn.setAttribute('aria-expanded', String(!isOpen));
    };
  });

  const categoryNames = {
    privacy: 'Presence & Privacy',
    connections: 'Connections & Chat',
    safety: 'Trust & Safety',
    profile: 'Profile & Trust'
  };

  let activeCategory = null;
  const helpSearch = $('#help-search');
  const catCards = all('#helpsupport .help-cat-card');
  const activeBar = $('#help-active-filter-bar');
  const activeCatName = $('#help-active-cat-name');
  const clearFilterBtn = $('#help-clear-filter-btn');
  const emptySearch = $('#help-empty-search');
  const clearSearchBtn = $('#help-clear-search-btn');
  const faqList = $('#help-faq-list');
  const heading = $('#help-faq-heading');
  const countEl = $('#help-faq-count');

  function filterFaqs() {
    const q = (helpSearch ? helpSearch.value : '').trim().toLowerCase();
    let visibleCount = 0;
    all('#helpsupport .help-faq-item').forEach(item => {
      const cat = item.dataset.cat;
      const matchesCat = !activeCategory || cat === activeCategory;
      const text = item.textContent.toLowerCase();
      const matchesSearch = !q || text.includes(q);
      const isVisible = matchesCat && matchesSearch;
      item.style.display = isVisible ? '' : 'none';
      if (isVisible) {
        visibleCount++;
        if (q) {
          item.classList.add('open');
          const btn = item.querySelector('.help-faq-q');
          if (btn) btn.setAttribute('aria-expanded', 'true');
        }
      }
    });

    if (countEl) countEl.textContent = '(' + visibleCount + ')';
    if (heading) {
      if (activeCategory && categoryNames[activeCategory]) {
        heading.textContent = categoryNames[activeCategory].toUpperCase() + ' GUIDES';
      } else {
        heading.textContent = 'FREQUENTLY ASKED QUESTIONS';
      }
    }

    if (emptySearch && faqList) {
      if (visibleCount === 0) {
        emptySearch.classList.remove('hide');
        faqList.classList.add('hide');
      } else {
        emptySearch.classList.add('hide');
        faqList.classList.remove('hide');
      }
    }
  }

  // Category card clicks
  catCards.forEach(card => {
    card.onclick = (e) => {
      e.preventDefault();
      const cat = card.dataset.cat;
      if (activeCategory === cat) {
        activeCategory = null;
        card.classList.remove('active');
        if (activeBar) activeBar.classList.add('hide');
      } else {
        activeCategory = cat;
        catCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        if (activeBar && activeCatName) {
          activeCatName.textContent = categoryNames[cat] || cat;
          activeBar.classList.remove('hide');
        }
      }
      filterFaqs();
      const listEl = $('#help-faq-list');
      if (listEl) listEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };
  });

  if (clearFilterBtn) {
    clearFilterBtn.onclick = (e) => {
      e.preventDefault();
      activeCategory = null;
      catCards.forEach(c => c.classList.remove('active'));
      if (activeBar) activeBar.classList.add('hide');
      filterFaqs();
    };
  }

  if (helpSearch) {
    helpSearch.addEventListener('input', () => {
      filterFaqs();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.onclick = (e) => {
      e.preventDefault();
      if (helpSearch) helpSearch.value = '';
      activeCategory = null;
      catCards.forEach(c => c.classList.remove('active'));
      if (activeBar) activeBar.classList.add('hide');
      filterFaqs();
    };
  }

  // Support inquiry sheet
  const inqBtn = $('#help-inquiry-btn');
  const inqSheet = $('#inquiry-sheet');
  const closeInqSheet = $('#close-inquiry-sheet');
  const inqForm = $('#inquiry-form');
  const inqCategory = $('#inquiry-category');

  if (inqBtn && inqSheet) {
    inqBtn.onclick = () => {
      if (activeCategory && inqCategory) {
        inqCategory.value = activeCategory;
      }
      inqSheet.classList.remove('hide');
    };
  }

  if (closeInqSheet && inqSheet) {
    closeInqSheet.onclick = () => inqSheet.classList.add('hide');
    inqSheet.addEventListener('click', (e) => {
      if (e.target === inqSheet) inqSheet.classList.add('hide');
    });
  }

  if (inqForm) {
    inqForm.onsubmit = (e) => {
      e.preventDefault();
      const subject = ($('#inquiry-subject') ? $('#inquiry-subject').value : '').trim();
      const message = ($('#inquiry-message') ? $('#inquiry-message').value : '').trim();
      if (!message) {
        toast('Please enter your inquiry details.');
        return;
      }
      if (inqSheet) inqSheet.classList.add('hide');
      if ($('#inquiry-subject')) $('#inquiry-subject').value = '';
      if ($('#inquiry-message')) $('#inquiry-message').value = '';
      toast('Support inquiry submitted! We will reply within 24h. (#PEO-8492)');
    };
  }

  // Legal policy sheet
  const legalSheet = $('#legal-sheet');
  const closeLegalSheet = $('#close-legal-sheet');
  const btnCloseLegal = $('#btn-close-legal');
  const legalSheetTag = $('#legal-sheet-tag');
  const legalSheetTitle = $('#legal-sheet-title');
  const legalSheetMeta = $('#legal-sheet-meta');
  const legalSheetContent = $('#legal-sheet-content');

  const legalContentData = {
    privacy: {
      tag: 'PRIVACY & DATA PROTECTION',
      title: 'Privacy Policy',
      meta: 'Effective: October 2026 · Version 1.0',
      clauses: [
        {
          icon: 'ph-shield-check',
          title: 'Zero Background GPS Logging',
          text: 'Peopi does not track, collect, or store your geographical coordinates in the background. Location is queried strictly on-demand during active sessions and never recorded as historical location trails.'
        },
        {
          icon: 'ph-map-pin',
          title: 'Randomized Approximate Proximity',
          text: 'Discovery radar displays only approximate fuzzy distances within a randomized radius. Your precise GPS pin or street address is never exposed to other members, third parties, or marketing partners.'
        },
        {
          icon: 'ph-clock',
          title: 'Ephemeral Timed Visibility',
          text: 'Discovery sessions automatically expire after your chosen duration (30 min, 1 hour, or 2 hours). When time expires, your beacon shuts off and you instantly return to invisible mode.'
        },
        {
          icon: 'ph-lock-key',
          title: 'Mutual Consent Unlocks',
          text: 'Full names, unblurred photos, documents, and chat capabilities remain strictly encrypted and inaccessible to nearby strangers until both parties mutually accept an introduction request.'
        },
        {
          icon: 'ph-database',
          title: 'Your Data, Your Control',
          text: 'You may export your conversation logs (.txt) or permanently delete your account and profile data at any time from Settings. We do not sell member data to advertising brokers.'
        }
      ]
    },
    terms: {
      tag: 'TERMS OF SERVICE',
      title: 'Terms of Service',
      meta: 'Effective: October 2026 · Version 1.0',
      clauses: [
        {
          icon: 'ph-briefcase',
          title: 'Authentic Professional Identity',
          text: 'Peopi is reserved exclusively for authentic professionals seeking genuine career conversations, project collaboration, and peer networking. Fictitious accounts or impersonation violate our terms.'
        },
        {
          icon: 'ph-prohibit',
          title: 'Zero Tolerance for Harassment & Spam',
          text: 'Harassment, hate speech, inappropriate advances, automated bot outreach, financial schemes, and aggressive commercial cold pitches result in immediate permanent account termination.'
        },
        {
          icon: 'ph-handshake',
          title: 'Safety & Discretion First',
          text: 'Members must exercise sound judgment and respect personal boundaries during in-person meetups. Hiding presence, declining connection requests, and blocking contacts are unilateral rights.'
        },
        {
          icon: 'ph-shield-warning',
          title: 'Anti-Abuse Enforcement',
          text: 'Peopi reserves the right to suspend or ban any member exhibiting malicious activity, credential tampering, GPS spoofing, or conduct inconsistent with a safe professional environment.'
        }
      ]
    },
    standards: {
      tag: 'COMMUNITY & SAFETY STANDARDS',
      title: 'Community Standards',
      meta: 'Effective: October 2026 · Version 1.0',
      clauses: [
        {
          icon: 'ph-heart-straight',
          title: 'Respectful Professional Decorum',
          text: 'Engage with fellow founders, engineers, and creatives with honesty and mutual respect. Treat every interaction as an opportunity to build meaningful, authentic relationships.'
        },
        {
          icon: 'ph-megaphone-simple',
          title: 'No Cold Selling or Aggressive Solicitation',
          text: 'Do not use Peopi for unsolicited sales pipelines, high-pressure recruitment, or unsolicited promotional campaigns. Connections should begin with genuine shared interest.'
        },
        {
          icon: 'ph-flag',
          title: 'Confidential Member Reporting',
          text: 'If you encounter unsafe behavior, file a confidential report through the member profile or chat menu. Our Trust & Safety team investigates all reports within 24 hours.'
        },
        {
          icon: 'ph-code',
          title: 'Open Source Attributions & Notices',
          text: 'Peopi incorporates Phosphor Icons under the MIT License and modern standards-compliant mobile architecture designed for secure, responsive execution.'
        }
      ]
    }
  };

  function openLegalSheet(type) {
    const data = legalContentData[type];
    if (!data || !legalSheet) return;
    if (legalSheetTag) legalSheetTag.textContent = data.tag;
    if (legalSheetTitle) legalSheetTitle.textContent = data.title;
    if (legalSheetMeta) legalSheetMeta.textContent = data.meta;
    if (legalSheetContent) {
      legalSheetContent.innerHTML = data.clauses.map(c => `
        <div class="legal-clause">
          <h4><i class="ph ${c.icon}" aria-hidden="true"></i><span>${c.title}</span></h4>
          <p>${c.text}</p>
        </div>
      `).join('');
    }
    legalSheet.classList.remove('hide');
  }

  const privBtn = $('#about-privacy-btn');
  if (privBtn) privBtn.onclick = () => openLegalSheet('privacy');

  const termsBtn = $('#about-terms-btn');
  if (termsBtn) termsBtn.onclick = () => openLegalSheet('terms');

  const standardsBtn = $('#about-standards-btn');
  if (standardsBtn) standardsBtn.onclick = () => openLegalSheet('standards');

  if (closeLegalSheet && legalSheet) {
    closeLegalSheet.onclick = () => legalSheet.classList.add('hide');
  }
  if (btnCloseLegal && legalSheet) {
    btnCloseLegal.onclick = () => legalSheet.classList.add('hide');
  }
  if (legalSheet) {
    legalSheet.addEventListener('click', (e) => {
      if (e.target === legalSheet) legalSheet.classList.add('hide');
    });
  }
}
initHelpAndAboutHandlers();
all('.nav button[data-toast]').forEach(b=>{if(b.textContent.includes('Connections')){b.removeAttribute('data-toast');b.onclick=()=>go('network')}});renderNotifications();
const originalPaintProfile=paintProfile;paintProfile=function(){originalPaintProfile();const score=profileStrength(ownProfile);const el=$('#completeness');if(el){const pct=el.querySelector('.complete-pct');if(pct)pct.textContent=score+'% ready';el.querySelector('.track i').style.width=score+'%'}};
paintProfile();updateNotifBadge();

let activityTab='all';
all('#activity [data-activity-tab]').forEach(b=>b.addEventListener('click',()=>{
  activityTab=b.dataset.activityTab;
  renderActivity();
}));
all('#messages [data-messages-tab]').forEach(b=>b.addEventListener('click',()=>{
  journey.messagesTab=b.dataset.messagesTab;
  saveJourney();
  if(!isSyncingHash&&document.querySelector('#messages.active')){
    setHash('screen=messages&tab='+journey.messagesTab);
  }
  renderMessages();
}));

function formatActivityTime(ts){
  const diff=Math.max(0,Date.now()-ts);
  const min=Math.floor(diff/60000);
  if(min<1)return 'Just now';
  if(min<60)return min+'m ago';
  const hr=Math.floor(min/60);
  if(hr<24)return hr+'h ago';
  const d=Math.floor(hr/24);
  if(d<30)return d+'d ago';
  const m=Math.floor(d/30);
  if(m<12)return m+'mo ago';
  const y=Math.floor(m/12);
  return y+'y ago';
}

function buildActivityItem(it, onAccept, onDecline) {
  const card = document.createElement('div');
  card.className = 'activity-item';
  const avWrap = document.createElement('div');
  avWrap.className = 'activity-avatar-wrap';
  const av = document.createElement('div');
  av.className = 'activity-avatar';
  if (it.type === 'request') {
    paintDemoPortrait(av, it.person ? it.person.id : 0);
    avWrap.append(av);
  } else if (it.type === 'system') {
    av.innerHTML = '<i class="ph ph-' + (it.icon || 'bell') + '" aria-hidden="true"></i>';
    av.classList.add('system-avatar');
    avWrap.append(av);
  }
  const body = document.createElement('div');
  body.className = 'activity-body';
  const rowTop = document.createElement('div');
  rowTop.className = 'activity-top-line';
  const title = document.createElement('strong');
  title.className = 'activity-title';
  title.textContent = it.title || '';
  const time = document.createElement('time');
  time.className = 'activity-time';
  time.textContent = it.time || '';
  rowTop.append(title, time);
  body.append(rowTop);

  const sub = document.createElement('p');
  sub.className = 'activity-subtitle';
  sub.textContent = it.subtitle || '';
  body.append(sub);

  if (it.type === 'request') {
    const acts = document.createElement('div');
    acts.className = 'activity-actions';
    const acceptBtn = document.createElement('button');
    acceptBtn.type = 'button';
    acceptBtn.className = 'activity-btn-accept';
    acceptBtn.textContent = 'Accept';
    if (onAccept) acceptBtn.onclick = onAccept;
    const declineBtn = document.createElement('button');
    declineBtn.type = 'button';
    declineBtn.className = 'activity-btn-decline';
    declineBtn.textContent = 'Decline';
    if (onDecline) declineBtn.onclick = onDecline;
    acts.append(acceptBtn, declineBtn);
    body.append(acts);
  }
  card.append(avWrap, body);
  return card;
}
window.buildActivityItem = buildActivityItem;

function renderActivity(){
  const box=$('#activity-list');if(!box)return;
  box.replaceChildren();
  all('#activity [data-activity-tab]').forEach(b=>b.classList.toggle('selected',b.dataset.activityTab===activityTab));
  const items=[];
  const reqOffsets=[8,25,50,110,210,380,700,1300,2600,4200,5600,7200,9000];
  journey.requestTimes=journey.requestTimes||{};
  const reqPeople=demoPeople.filter(p=>!journey.blocked.includes(p.id)&&journey.requests[p.id]==='received');
  reqPeople.forEach((p,idx)=>{
    if(!journey.requestTimes[p.id]){
      const mins=reqOffsets[idx%reqOffsets.length];
      journey.requestTimes[p.id]=Date.now()-mins*60000;
    }
    const ts=journey.requestTimes[p.id];
    items.push({type:'request',person:p,timestamp:ts,time:formatActivityTime(ts),title:journeyPerson(p.id).name,subtitle:p.role});
  });
  const sys1Ts=Date.now()-65*60000;
  items.push({type:'system',icon:'clock',timestamp:sys1Ts,time:formatActivityTime(sys1Ts),title:'Nearby visibility session ended',subtitle:'Your timed discovery session expired. You are now invisible by default.',target:'setup'});
  const sys2Ts=Date.now()-185*60000;
  items.push({type:'system',icon:'sparkle',timestamp:sys2Ts,time:formatActivityTime(sys2Ts),title:'Profile completeness recommendation',subtitle:'Add skills and project details to strengthen your discovery matches.',target:'editprofile'});
  const sys3Ts=Date.now()-360*60000;
  items.push({type:'system',icon:'seal-check',timestamp:sys3Ts,time:formatActivityTime(sys3Ts),title:'LinkedIn credentials signal verified',subtitle:'LinkedIn badge confirmed. Exact professional credentials remain private.',target:'verification'});
  const sys4Ts=Date.now()-1440*60000;
  items.push({type:'system',icon:'shield-check',timestamp:sys4Ts,time:formatActivityTime(sys4Ts),title:'Weekly privacy report ready',subtitle:'Zero coordinates logged. Your discovery sessions remained ephemeral.',target:'privacy'});

  items.sort((a,b)=>b.timestamp-a.timestamp);

  const filtered=items.filter(it=>{
    if(activityTab==='all')return true;
    if(activityTab==='requests')return it.type==='request';
    return true;
  });

  if(!filtered.length){
    let emptyTitle='No notifications';let emptyDesc='You are all caught up. New updates will appear here.';
    if(activityTab==='requests'){emptyTitle='No pending requests';emptyDesc='New connection invitations will appear here.'}
    box.innerHTML=journeyEmpty(emptyTitle,emptyDesc);
    return;
  }

  filtered.forEach(it=>{
    let onAccept=null, onDecline=null;
    if(it.type==='request'){
      onAccept=(e)=>{
        e.stopPropagation();
        journey.connections.push(it.person.id);
        journey.connectionDates={...(journey.connectionDates||{}),[it.person.id]:new Date().toISOString().slice(0,10)};
        delete journey.requests[it.person.id];
        journey.connections=[...new Set(journey.connections)];
        saveJourney();
        renderActivity();
        renderRequests();
        renderNetwork();
        updateNotifBadge();
        toast('Connected with '+journeyPerson(it.person.id).name);
      };
      onDecline=(e)=>{
        e.stopPropagation();
        delete journey.requests[it.person.id];
        saveJourney();
        renderActivity();
        renderRequests();
        updateNotifBadge();
        toast('Request declined');
      };
    }
    const card=buildActivityItem(it, onAccept, onDecline);
    if(it.type==='request'){
      card.onclick=()=>{journey.requestTab='received';go('requests')};
    }else if(it.type==='system'){
      card.onclick=()=>{if(it.target)go(it.target)};
    }
    box.append(card);
  });
}

