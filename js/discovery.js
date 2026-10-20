function renderIntroSkillsChips(){
  const container = $('#intro-skills-chips');
  if(!container) return;
  container.replaceChildren(...introSkillsList.map((skill, idx) => {
    const item = document.createElement('span');
    item.className = 'skills-chip-item';
    item.innerHTML = '<span>' + escapeProfileText(skill) + '</span><button type="button" aria-label="Remove ' + escapeProfileText(skill) + '">×</button>';
    item.querySelector('button').onclick = (e) => {
      e.stopPropagation();
      e.preventDefault();
      introSkillsList.splice(idx, 1);
      renderIntroSkillsChips();
    };
    return item;
  }));
}
function openIntroSheet(needsBio, needsSkills){
  const sheet = $('#intro-sheet');
  if(!sheet) return;
  $('#intro-bio-group')?.classList.toggle('hide', !needsBio);
  $('#intro-skills-group')?.classList.toggle('hide', !needsSkills);
  const bioInput = $('#intro-bio-input');
  if(bioInput && needsBio) bioInput.value = '';
  introSkillsList = profileSkills(ownProfile.skills);
  renderIntroSkillsChips();
  sheet.classList.remove('hide');
  setTimeout(()=>{ if(needsBio) $('#intro-bio-input')?.focus(); else $('#intro-skill-input')?.focus(); }, 100);
}
function closeIntroSheet(){
  $('#intro-sheet')?.classList.add('hide');
}
function saveIntroSheet(){
  const needsBio = !$('#intro-bio-group').classList.contains('hide');
  const needsSkills = !$('#intro-skills-group').classList.contains('hide');
  if(needsBio){
    const b = ($('#intro-bio-input')?.value || '').trim();
    if(!b){ toast('Please enter a brief bio'); $('#intro-bio-input')?.focus(); return; }
    ownProfile.bio = b;
  }
  if(needsSkills){
    if(!introSkillsList.length){ toast('Please add at least 1 skill'); $('#intro-skill-input')?.focus(); return; }
    ownProfile.skills = introSkillsList.join(', ');
  }
  try{ localStorage.setItem('peopi-demo-profile', JSON.stringify(ownProfile)); }catch(e){}
  paintProfile();
  closeIntroSheet();
  toast('Profile introduction saved. Tap Go visible to confirm.');
}
function addIntroSkillFromInput(){
  const inp = $('#intro-skill-input');
  if(!inp) return;
  const val = inp.value.trim().replace(/,/g, '');
  if(!val) return;
  if(introSkillsList.length >= 8){ toast('Maximum 8 skills allowed'); return; }
  if(!introSkillsList.includes(val)){
    introSkillsList.push(val);
    renderIntroSkillsChips();
  }
  inp.value = '';
  inp.focus();
}
$('#close-intro-sheet')?.addEventListener('click', closeIntroSheet);
$('#intro-sheet')?.addEventListener('click', e => { if(e.target === $('#intro-sheet')) closeIntroSheet(); });
$('#btn-save-intro-sheet')?.addEventListener('click', saveIntroSheet);
$('#intro-add-skill-btn')?.addEventListener('click', addIntroSkillFromInput);
$('#intro-skill-input')?.addEventListener('keydown', e => { if(e.key === 'Enter'){ e.preventDefault(); addIntroSkillFromInput(); } });
$('#intro-skills-wrap')?.addEventListener('click', e => { if(!e.target.closest('button')) $('#intro-skill-input')?.focus(); });

$('#start').onclick=()=>{
  const userBio = (ownProfile.bio || '').trim();
  const userSkills = profileSkills(ownProfile.skills);
  const needsBio = !userBio;
  const needsSkills = userSkills.length === 0;
  if(needsBio || needsSkills){
    openIntroSheet(needsBio, needsSkills);
    return;
  }
  endTime=Date.now()+duration*60000;
  fiveMinuteNotified=false;
  $('#session-alert').classList.add('hide');
  clearInterval(interval);
  interval=setInterval(updateTimer,1000);
  updateTimer();
  go('active');
  clearMapSelection();
  if(window.recenterDiscoveryMap)window.recenterDiscoveryMap();
};$('#extend-session').onclick=()=>{endTime+=30*60000;fiveMinuteNotified=false;$('#session-alert').classList.add('hide');toast('You’ll stay open for 30 more minutes.')};$('#dismiss-alert').onclick=()=>$('#session-alert').classList.add('hide');function clearMapSelection(){person=null;$('#profilecard').classList.add('hide');$('#profilecard').classList.remove('is-own-preview');$('#map-user-beacon')?.classList.remove('chosen');all('#mapview .pin[data-person]').forEach(x=>x.classList.remove('chosen'));const cta=$('#viewprofile');if(cta){cta.textContent='View Profile ↗';cta.onclick=openProfile;}}$('#close-profilecard').addEventListener('click',clearMapSelection);function showOwnProfilePreview(){person='own';all('#mapview .pin[data-person]').forEach(x=>x.classList.remove('chosen'));$('#map-user-beacon')?.classList.add('chosen');const card=$('#profilecard');card.classList.remove('hide');card.classList.add('is-own-preview');card.classList.remove('is-connected');const av=$('#avatar');av.className='avatar anonymous';av.style.background='var(--muted)';av.style.color='var(--accent)';av.textContent=profileInitials(ownProfile.name);const words=(ownProfile.name||'Your name').trim().split(/\s+/).filter(Boolean);const publicName=words.length>1?words[0]+' '+words[words.length-1][0]+'.':(words[0]||'You');$('#personname').textContent=publicName;if(typeof linkedinDemo!=='undefined'&&linkedinDemo){$('#personname').append(makeVerifiedBadge());}else{$('#personname').querySelectorAll('.li-verified-badge').forEach(x=>x.remove());}$('#personrole').textContent=ownProfile.headline||'Product & Experience Designer';$('#personintent').textContent=ownProfile.intent||'Meaningful connections';const hint=$('#preview-connected-hint');hint.classList.add('hide');hint.innerHTML='';const cta=$('#viewprofile');cta.textContent='Go to profile ↗';cta.onclick=()=>{go('myprofile')};}(function initMapPan(){const mapview=$('#mapview'),canvas=$('#map-canvas'),recenterBtn=$('#map-recenter-btn');if(!mapview||!canvas)return;let isPointerDown=false,hasDragged=false,startX=0,startY=0,currentX=0,currentY=0,dragOriginX=0,dragOriginY=0;function updateRecenter(){if(!recenterBtn)return;const dist=Math.hypot(currentX,currentY);recenterBtn.classList.toggle('hide',dist<32)}function applyTransform(x,y,animate){currentX=x;currentY=y;if(animate)canvas.classList.remove('is-dragging');canvas.style.transform='translate3d('+Math.round(x)+'px,'+Math.round(y)+'px,0)';updateRecenter()}function onPointerDown(e){if(e.button!==undefined&&e.button!==0)return;if(e.target.closest('#filters,.discovery-location-notice,#map-recenter-btn,.discovery-map-count'))return;isPointerDown=true;hasDragged=false;startX=e.clientX;startY=e.clientY;dragOriginX=currentX;dragOriginY=currentY}function onPointerMove(e){if(!isPointerDown)return;const dx=e.clientX-startX,dy=e.clientY-startY;if(!hasDragged&&Math.hypot(dx,dy)>6){hasDragged=true;canvas.classList.add('is-dragging');try{mapview.setPointerCapture(e.pointerId)}catch(_){}}if(hasDragged){const bound=130;let nx=dragOriginX+dx,ny=dragOriginY+dy;if(nx>bound)nx=bound+(nx-bound)*0.3;if(nx<-bound)nx=-bound+(nx+bound)*0.3;if(ny>bound)ny=bound+(ny-bound)*0.3;if(ny<-bound)ny=-bound+(ny+bound)*0.3;applyTransform(nx,ny,false)}}function onPointerUp(e){if(!isPointerDown)return;isPointerDown=false;canvas.classList.remove('is-dragging');try{mapview.releasePointerCapture(e.pointerId)}catch(_){}if(hasDragged){const bound=120;const cx=Math.max(-bound,Math.min(bound,currentX));const cy=Math.max(-bound,Math.min(bound,currentY));if(cx!==currentX||cy!==currentY)applyTransform(cx,cy,true);setTimeout(()=>{hasDragged=false},100)}}mapview.addEventListener('pointerdown',onPointerDown);mapview.addEventListener('pointermove',onPointerMove);mapview.addEventListener('pointerup',onPointerUp);mapview.addEventListener('pointercancel',onPointerUp);recenterBtn?.addEventListener('click',e=>{e.stopPropagation();applyTransform(0,0,true)});mapview.addEventListener('click',e=>{if(hasDragged){e.stopPropagation();e.preventDefault();return}const beacon=e.target.closest('#map-user-beacon');if(beacon){e.stopPropagation();showOwnProfilePreview();return}const pin=e.target.closest('.pin[data-person]');if(pin){e.stopPropagation();showPerson(Number(pin.dataset.person));return}if(!e.target.closest('#profilecard,#filters,#map-recenter-btn,.discovery-location-notice')){clearMapSelection()}});window.recenterDiscoveryMap=()=>applyTransform(0,0,true)})();function showPerson(i){person=i;const p=people[i];$('#map-user-beacon')?.classList.remove('chosen');$('#profilecard').classList.remove('is-own-preview');$('#profilecard').classList.toggle('hide',view!=='map');paintDemoPortrait($('#avatar'),i);const connected=typeof journey!=='undefined'&&journey.connections.includes(i);const reqSent=typeof journey!=='undefined'&&journey.requests[i]==='sent';$('#personname').textContent=connected?p.name:p.initial.split('').join('.')+'.';markVerifiedName($('#personname'),i);$('#personrole').textContent=p.role;$('#personintent').textContent=p.intent;if(connected){$('#preview-connected-hint').classList.remove('hide');$('#preview-connected-hint').innerHTML='<i class="ph ph-check-circle" aria-hidden="true"></i><span>You\'re connected.</span>';}else if(reqSent){$('#preview-connected-hint').classList.remove('hide');$('#preview-connected-hint').innerHTML='<i class="ph ph-clock" aria-hidden="true"></i><span>Request pending</span>';}else{$('#preview-connected-hint').classList.add('hide');}$('#profilecard').classList.toggle('is-connected',connected);all('#mapview .pin[data-person]').forEach(x=>x.classList.toggle('chosen',i===Number(x.dataset.person)));const cta=$('#viewprofile');if(cta){cta.textContent='View Profile ↗';cta.onclick=openProfile;}}all('[data-person]').forEach(b=>b.onclick=e=>{e.stopPropagation();showPerson(+b.dataset.person)});function showView(v){if(v==='list')renderDiscoveryList();view=v;$('#active')?.classList.toggle('is-list-view',v==='list');$('#active')?.classList.toggle('is-map-view',v==='map');$('#mapview').classList.toggle('hide',v!=='map');$('#listview').classList.toggle('hide',v!=='list');$('#profilecard').classList.toggle('hide',v!=='map'||person===null);all('#active [data-view]').forEach(b=>b.classList.toggle('chosen',b.dataset.view===v));$('#discovery-location-notice')?.classList.toggle('hide',v!=='map');$('#discovery-list-count')?.classList.toggle('hide',v!=='list');if(v==='list'){$('#discovery-list-count').textContent=filteredDiscoveryIds().length+' professionals nearby';}}all('#active [data-view]').forEach(b=>b.onclick=()=>showView(b.dataset.view));
let discoveryRole='all',discoveryGoal='all';
const nearbyDiscoveryIds = [0, 1, 2, 3, 4, 5, 6];
function filteredDiscoveryIds(){
  return nearbyDiscoveryIds.filter(i=>{
    const p=people[i];
    return (discoveryRole==='all'||(p.role+' '+p.headline+' '+p.sector).toLowerCase().includes(discoveryRole))&&(discoveryGoal==='all'||(p.intent+' '+p.looking).toLowerCase().includes(discoveryGoal));
  });
}
function renderDiscoveryAppliedChips(){
  const container = $('#discovery-applied-chips');
  if(!container) return;
  const chips = [];
  if(discoveryRole !== 'all'){
    const roleLabels = { design: 'Design', engineer: 'Engineering', founder: 'Founders', growth: 'Growth', invest: 'Investment' };
    chips.push({ label: 'Specialty: ' + (roleLabels[discoveryRole] || discoveryRole), clear: () => { discoveryRole = 'all'; syncDiscoveryFilters(); } });
  }
  if(discoveryGoal !== 'all'){
    const goalLabels = { collaborat: 'Collaboration', project: 'Projects', idea: 'Ideas' };
    chips.push({ label: 'Intent: ' + (goalLabels[discoveryGoal] || discoveryGoal), clear: () => { discoveryGoal = 'all'; syncDiscoveryFilters(); } });
  }
  if(!chips.length){
    container.classList.add('hide');
    container.replaceChildren();
    return;
  }
  container.classList.remove('hide');
  container.replaceChildren(...chips.map(ch => {
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'discovery-chip-tag';
    el.innerHTML = '<span>' + ch.label + '</span> <i class="ph ph-x" aria-hidden="true"></i>';
    el.onclick = ch.clear;
    return el;
  }));
}
function syncDiscoveryFilters(){
  const ids=filteredDiscoveryIds();
  all('#mapview [data-person]').forEach(b=>b.classList.toggle('hide',!ids.includes(Number(b.dataset.person))));
  const countText = ids.length + ' professionals nearby';
  const count=$('#mapview .discovery-map-count');
  if(count) count.textContent = countText;
  const listCount=$('#discovery-list-count');
  if(listCount) listCount.textContent = countText;
  const hasFilters=discoveryRole!=='all'||discoveryGoal!=='all';
  $('#filters')?.classList.toggle('has-active-filters',hasFilters);
  renderDiscoveryAppliedChips();
  if(view==='list')renderDiscoveryList();
  if(person!==null&&!ids.includes(person))$('#profilecard').classList.add('hide');
  refreshIcons();
}
function discoveryFilterMarkup(){return '<div class="discovery-filter-dialog" role="dialog" aria-modal="true" aria-label="Discovery filters"><div class="discovery-filter-head"><strong>Discovery filters</strong><button type="button" data-close aria-label="Close filters" title="Close"><i class="ph ph-x" aria-hidden="true"></i></button></div><p>Choose who appears nearby.</p><label for="discovery-role">Professional specialty</label><div class="discovery-filter-select-wrap"><select id="discovery-role"><option value="all">All specialties</option><option value="design">Design</option><option value="engineer">Engineering</option><option value="founder">Founders</option><option value="growth">Growth</option><option value="invest">Investment</option></select><i class="ph ph-caret-down discovery-filter-arrow" aria-hidden="true"></i></div><label for="discovery-goal">Collaboration intent</label><div class="discovery-filter-select-wrap"><select id="discovery-goal"><option value="all">Any intent</option><option value="collaborat">Collaboration</option><option value="project">Projects</option><option value="idea">Ideas</option></select><i class="ph ph-caret-down discovery-filter-arrow" aria-hidden="true"></i></div><div class="discovery-filter-actions"><button type="button" data-reset>Reset</button><button type="button" data-apply>Show results</button></div></div>'}
function openDiscoveryFilters(){
 const old=$('#discovery-filter-overlay');if(old)old.remove();
 const overlay=document.createElement('div');overlay.id='discovery-filter-overlay';overlay.className='discovery-filter-overlay';
 overlay.innerHTML=discoveryFilterMarkup();
 $('#active').append(overlay);overlay.querySelector('#discovery-role').value=discoveryRole;overlay.querySelector('#discovery-goal').value=discoveryGoal;
 const close=()=>window.PeopiMotion?PeopiMotion.dismiss(overlay,()=>overlay.remove()):overlay.remove();overlay.querySelector('[data-close]').onclick=close;overlay.onclick=e=>{if(e.target===overlay)close()};
 overlay.querySelector('[data-reset]').onclick=()=>{discoveryRole='all';discoveryGoal='all';syncDiscoveryFilters();close()};
 overlay.querySelector('[data-apply]').onclick=()=>{discoveryRole=overlay.querySelector('#discovery-role').value;discoveryGoal=overlay.querySelector('#discovery-goal').value;syncDiscoveryFilters();close()};
}
function renderDiscoveryList(){
 const ids=filteredDiscoveryIds();
 const countEl=$('#discovery-list-count');
 if(countEl)countEl.textContent=ids.length+' professionals nearby';
 $('#listview').innerHTML=people.map((p,i)=>({p,i})).filter(({i})=>ids.includes(i)).map(({p,i})=>{
  const connected=journey.connections.includes(i);
  const name=connected?p.name:p.initial.split('').join('.')+'.';
  const verified=demoPeople[i]?.verified?makeVerifiedBadge().outerHTML:'';
  return '<button type="button" class="listitem'+(connected?' listitem-connected':'')+'" data-listperson="'+i+'"><span class="avatar anonymous discovery-list-avatar" data-listavatar="'+i+'">'+p.initial+'</span><span class="discovery-list-info"><strong>'+name+verified+'</strong><small>'+p.role+'</small>'+(connected?'<span class="discovery-list-connected"><i class="ph ph-check-circle" aria-hidden="true"></i> Connected</span>':'<small>'+p.intent+'</small>')+'</span><i class="ph ph-caret-right discovery-list-chevron"></i></button>';
 }).join('')+(ids.length?'':'<div class="journey-empty">No matching professionals. Try resetting your filters.</div>');
 all('[data-listavatar]').forEach(el=>paintDemoPortrait(el,+el.dataset.listavatar));
 all('[data-listperson]').forEach(el=>el.onclick=()=>{showPerson(+el.dataset.listperson);openProfile()});
 refreshIcons();
}
let modalConfirmHandler=null;function modal(title,body,confirm,onConfirm){$('#modaltitle').textContent=title;$('#modaltext').textContent=body;$('#confirm').textContent=confirm;modalConfirmHandler=typeof onConfirm==='function'?onConfirm:null;$('#modal').classList.remove('hide')}$('#end').onclick=()=>modal('Go invisible?','You will no longer appear in nearby discovery. Your connections and chats stay available.','Go invisible');$('#dismiss').onclick=()=>{modalConfirmHandler=null;$('#modal').classList.add('hide')};const modalClose=$('#modal-close');if(modalClose)modalClose.onclick=()=>{modalConfirmHandler=null;$('#modal').classList.add('hide')};$('#modal').addEventListener('click',e=>{if(e.target===$('#modal')){modalConfirmHandler=null;$('#modal').classList.add('hide')}});$('#confirm').onclick=()=>{const onC=modalConfirmHandler;modalConfirmHandler=null;$('#modal').classList.add('hide');if(onC){onC();return}const isEnd=$('#confirm').textContent==='Go invisible';if(isEnd){clearInterval(interval);endTime=null;$('#session-alert').classList.add('hide');go('closed');toast('You are invisible again.')}else toast('Filters are illustrative in this prototype.')};$('#filters').onclick=()=>openDiscoveryFilters();let toastTimeout;function toast(message){clearTimeout(toastTimeout);$('#toast').textContent=message;$('#toast').classList.remove('hide');toastTimeout=setTimeout(()=>$('#toast').classList.add('hide'),3000)}all('[data-toast]').forEach(b=>b.onclick=()=>toast(b.dataset.toast));
/* Prototype-only connection counts; not real user/network data. */
const demoConnectionCounts=[128,96,74,183,112,65,209,142,88,175,230,310,95,120,84,165,192,115,275,62,180];
function paintConnectionCount(selector,id,connected){
 const el=$(selector);if(!el)return;el.classList.toggle('hide',!connected);
 const stack=el.querySelector('.profile-network-avatars');
 if(!connected){if(stack)stack.replaceChildren();return;}
 (el.querySelector('.profile-network-total')||el.querySelector('span')).textContent=demoConnectionCounts[id]+' connections';
 if(stack&&!stack.children.length){[0,1,7,8,9].forEach(mId=>{const img=document.createElement('img');img.src=demoPortraits[mId]||'';img.alt='';stack.appendChild(img);});}
}
function openProfile(){
 if(person==='own'){go('myprofile');return;}
 const p=people[person];
 paintDemoPortrait($('#detailinitials'),person);
 $('#detailname').textContent=typeof journey!=='undefined'&&journey.connections.includes(person)?p.name:p.initial.split('').join('.')+'.';
 markVerifiedName($('#detailname'),person);const connected=journey.connections.includes(person);paintConnectionCount('#detail-connection-count',person,connected);renderProfileSheetDocs(person,connected);$('#detail-privacy-hint').classList.toggle('connected-hint',connected);$('#detail-privacy-hint').innerHTML=connected?'<i class="ph ph-check-circle" aria-hidden="true"></i><span>You\'re connected.</span><button type="button" class="profile-message-link" id="profile-send-message">Send Message</button>':'<i class="ph ph-shield-check" aria-hidden="true"></i><span>Photo and name hidden until connected.</span>';refreshIcons();$('#detailrole').textContent=p.headline;
 $('#detailsector').textContent=p.sector;
 $('#detailbio').textContent=p.bio;
 $('#detaillooking').textContent=p.looking;
 $('#detailtags').replaceChildren(...p.skills.map(x=>{const n=document.createElement('span');n.textContent=x;return n}));
 renderProfileSheetExperience(person);
 $('#projectname').textContent=p.project||'';
 $('#projectdesc').textContent=p.projectdesc||'';
 $('#projectblock').classList.toggle('hide',!p.project);
 $('#onepager').classList.toggle('hide',!p.onepager);
 if(p.onepager)$('#onepager').href=p.onepager;
 resetProfileComposer();
 const connActions = $('#profile-connected-actions');
 const reqBtn = $('#requestFromProfile');
 if(connected){
   if(connActions) connActions.classList.remove('hide');
   if(reqBtn) reqBtn.classList.add('hide');
   const msgBtn = $('#profile-sheet-msg-btn');
   if(msgBtn) msgBtn.onclick = () => {
     setJourneyView(person);
     resetProfileComposer();
     $('#profsheet').classList.add('hide');
     go('conversation');
   };
   const viewBtn = $('#profile-sheet-view-btn');
   if(viewBtn) viewBtn.onclick = () => {
     setJourneyView(person);
     resetProfileComposer();
     $('#profsheet').classList.add('hide');
     go('connectiondetail');
   };
 } else {
   if(connActions) connActions.classList.add('hide');
   if(reqBtn){
     reqBtn.classList.remove('hide');
     reqBtn.textContent = journey.requests[person]==='sent' ? 'Request pending ✓' : 'Request to connect ↗';
   }
 }
 const sendMessage=$('#profile-send-message');if(sendMessage)sendMessage.onclick=()=>{setJourneyView(person);resetProfileComposer();$('#profsheet').classList.add('hide');go('conversation')};
 $('#profsheet .profile-sheet-scroll').scrollTop=0;
 $('#profsheet').classList.remove('hide');
}
let isComposingProfileRequest=false;
function resetProfileComposer(){
 isComposingProfileRequest=false;
 const composer=$('#profile-request-composer');
 if(composer)composer.classList.add('hide');
 const note=$('#profile-request-note');
 if(note)note.value='';
 const count=$('#profile-request-note-count');
 if(count)count.textContent='0';
}
function handleProfileRequestClick(){
 const id=person;
 if(typeof journey==='undefined')return;
 if(journey.blocked.includes(id)){toast('This account is blocked');return}
 if(journey.connections.includes(id)){
  resetProfileComposer();
  setJourneyView(id);
  $('#profsheet').classList.add('hide');
  go('connectiondetail');
  return;
 }
 if(journey.requests[id]==='sent'){
  delete journey.requests[id];
  if(journey.requestNotes)delete journey.requestNotes[id];
  saveJourney();
  updateNotifBadge();
  if(typeof renderRequests==='function')renderRequests();
  $('#requestFromProfile').textContent='Request to connect ↗';
  toast('Connection request cancelled (demo) — ready to test again');
  return;
 }
 if(!isComposingProfileRequest){
  isComposingProfileRequest=true;
  const composer=$('#profile-request-composer');
  if(composer)composer.classList.remove('hide');
  $('#requestFromProfile').textContent='Send Request ↗';
  const noteEl=$('#profile-request-note');
  if(noteEl)noteEl.focus();
  setTimeout(()=>{composer?.scrollIntoView({behavior:'smooth',block:'nearest'})},50);
  return;
 }
 const noteVal=$('#profile-request-note')?.value.trim()||'';
 journey.requests[id]='sent';
 if(noteVal){
  journey.requestNotes=journey.requestNotes||{};
  journey.requestNotes[id]=noteVal;
 }
 saveJourney();
 resetProfileComposer();
 $('#requestFromProfile').textContent='Request pending ✓';
 toast(noteVal?'Request sent with your note':'Demo request added to Sent requests');
 updateNotifBadge();
 if(typeof renderRequests==='function')renderRequests();
}
$('#viewprofile').onclick=openProfile;
$('#openDemoProfile').onclick=()=>{
  if(page!=='active')go('active');
  if(typeof journey!=='undefined'){
    delete journey.requests[2];
    if(journey.requestNotes)delete journey.requestNotes[2];
    saveJourney();
  }
  showPerson(2);
  openProfile();
};
$('#closeprofile').onclick=()=>{resetProfileComposer();$('#profsheet').classList.add('hide')};
$('#profsheet').addEventListener('click',e=>{if(e.target===$('#profsheet')){resetProfileComposer();$('#profsheet').classList.add('hide')}});
$('#requestFromProfile').onclick=handleProfileRequestClick;
$('#profile-request-composer-cancel')?.addEventListener('click',()=>{
 resetProfileComposer();
 if(typeof journey!=='undefined'&&journey.requests[person]==='sent'){
  $('#requestFromProfile').textContent='Request pending ✓';
 } else {
  $('#requestFromProfile').textContent='Request to connect ↗';
 }
});
document.addEventListener('click',e=>{
 const chip=e.target.closest('#profile-request-prompts .prompt-chip');
 if(chip){
  const promptText=chip.dataset.prompt||chip.textContent.trim();
  const note=$('#profile-request-note');
  if(note){
   note.value=promptText;
   const count=$('#profile-request-note-count');
   if(count)count.textContent=String(note.value.length);
   note.focus();
  }
 }
});
$('#profile-request-note')?.addEventListener('input',e=>{
 const count=$('#profile-request-note-count');
 if(count)count.textContent=String(e.target.value.length);
});
$('#completeness').onclick=()=>modal('Complete your profile','Demo progress: 65%. Add your professional bio, skills, and what you are looking for. A dedicated Edit Profile screen comes next.','Got it');
function updateNotifBadge(){const reqCount=Object.values(journey.requests).filter(v=>v==='received').length;const unreadMsgCount=journey.connections.filter(id=>journey.chats[id]&&journey.chats[id].length>0&&!(journey.readChats&&journey.readChats[id])&&!(journey.muted&&journey.muted.includes(id))).length;['#notif-badge','#network-notif-badge'].forEach(sel=>{const badge=$(sel);if(badge){if(reqCount>0){badge.textContent=reqCount;badge.classList.remove('hide')}else{badge.classList.add('hide')}}});['#messages-badge','#network-messages-badge'].forEach(sel=>{const badge=$(sel);if(badge){if(unreadMsgCount>0){badge.textContent=unreadMsgCount;badge.classList.remove('hide')}else{badge.classList.add('hide')}}})}

