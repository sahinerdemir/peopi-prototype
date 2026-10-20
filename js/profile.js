const defaultOwnExperience=[
 {id:'exp-own-1',title:'Senior Product Designer',company:'Studio Monolith',country:'United States',period:'2022 – Present'},
 {id:'exp-own-2',title:'UX & Interaction Designer',company:'Veloce Labs',country:'Germany',period:'2019 – 2022'}
];
const defaultDemoExperience={
 0:[
  {id:'exp-0-1',title:'Lead Product Designer',company:'Sidepath Studio',country:'United States',period:'2023 – Present'},
  {id:'exp-0-2',title:'Senior Product Designer',company:'Basecamp Ventures',country:'United States',period:'2020 – 2023'},
  {id:'exp-0-3',title:'UX Designer',company:'Method Interactive',country:'United Kingdom',period:'2017 – 2020'}
 ],
 1:[
  {id:'exp-1-1',title:'Senior ML & Software Engineer',company:'Signalkit AI',country:'United States',period:'2022 – Present'},
  {id:'exp-1-2',title:'Systems Engineer',company:'DataFlow Systems',country:'Canada',period:'2019 – 2022'},
  {id:'exp-1-3',title:'Backend Developer',company:'CloudScale Labs',country:'United States',period:'2016 – 2019'}
 ],
 2:[
  {id:'exp-2-1',title:'Founder & CEO',company:'Northloop Energy',country:'United States',period:'2022 – Present'},
  {id:'exp-2-2',title:'Sustainability Director',company:'Terraform Partners',country:'Germany',period:'2018 – 2022'},
  {id:'exp-2-3',title:'Operations Lead',company:'GreenGrid Solutions',country:'United States',period:'2015 – 2018'}
 ],
 3:[
  {id:'exp-3-1',title:'Creative Strategy Director',company:'Fieldnotes Studio',country:'United States',period:'2021 – Present'},
  {id:'exp-3-2',title:'Senior Brand Strategist',company:'Pentagram Design',country:'United Kingdom',period:'2018 – 2021'}
 ],
 4:[
  {id:'exp-4-1',title:'Growth Lead',company:'AcquireFlow SaaS',country:'United States',period:'2022 – Present'},
  {id:'exp-4-2',title:'Lifecycle Marketing Manager',company:'ScaleUp Lab',country:'United States',period:'2019 – 2022'}
 ],
 5:[
  {id:'exp-5-1',title:'Lead Urban Architect',company:'Common Ground Lab',country:'United States',period:'2021 – Present'},
  {id:'exp-5-2',title:'Associate Architect',company:'Studio Metro Design',country:'France',period:'2017 – 2021'}
 ],
 6:[
  {id:'exp-6-1',title:'Principal Climate Investor',company:'Horizon Ventures',country:'United States',period:'2022 – Present'},
  {id:'exp-6-2',title:'Strategy Consultant',company:'Carbon Solutions Group',country:'United States',period:'2018 – 2022'}
 ],
 7:[
  {id:'exp-7-1',title:'Staff ML Engineer',company:'EdgeSim Autonomous',country:'United States',period:'2021 – Present'},
  {id:'exp-7-2',title:'Robotics Research Scientist',company:'DeepMind / Robotics Lab',country:'Switzerland',period:'2017 – 2021'}
 ],
 8:[
  {id:'exp-8-1',title:'Principal Architect',company:'Apex FinTech Core',country:'United States',period:'2020 – Present'},
  {id:'exp-8-2',title:'Senior Infrastructure Engineer',company:'Stripe Platform',country:'United States',period:'2016 – 2020'}
 ],
 9:[
  {id:'exp-9-1',title:'Creative Director',company:'Monotype Study',country:'United States',period:'2021 – Present'},
  {id:'exp-9-2',title:'Lead Editorial Designer',company:'Kinfolk & Studio',country:'Denmark',period:'2017 – 2021'}
 ],
 10:[
  {id:'exp-10-1',title:'Head of Engineering',company:'ScaleGrid Cloud',country:'United States',period:'2020 – Present'},
  {id:'exp-10-2',title:'Principal Infrastructure Architect',company:'Kubernetes Core',country:'United States',period:'2016 – 2020'}
 ],
 11:[
  {id:'exp-11-1',title:'Venture Partner',company:'Decarb Fund',country:'United States',period:'2021 – Present'},
  {id:'exp-11-2',title:'Clean Energy Analyst',company:'Bain & Company',country:'United Arab Emirates',period:'2017 – 2021'}
 ],
 12:[
  {id:'exp-12-1',title:'Staff iOS Craft Engineer',company:'GestureKit Labs',country:'United States',period:'2021 – Present'},
  {id:'exp-12-2',title:'Senior Mobile Engineer',company:'Apple Ecosystem Partner',country:'Sweden',period:'2017 – 2021'}
 ],
 13:[
  {id:'exp-13-1',title:'Chief of Staff',company:'VentureScale Inc.',country:'United States',period:'2022 – Present'},
  {id:'exp-13-2',title:'Operations Director',company:'Horizon Scale',country:'United Kingdom',period:'2018 – 2022'}
 ],
 14:[
  {id:'exp-14-1',title:'Hardware Systems Engineer',company:'Kinesis Robotics',country:'United States',period:'2021 – Present'},
  {id:'exp-14-2',title:'Mechatronics Specialist',company:'Bosch Robotics',country:'Germany',period:'2017 – 2021'}
 ],
 15:[
  {id:'exp-15-1',title:'Product Lead',company:'Vitality HealthTech',country:'United States',period:'2021 – Present'},
  {id:'exp-15-2',title:'Senior Product Manager',company:'CareSync Health',country:'France',period:'2018 – 2021'}
 ],
 16:[
  {id:'exp-16-1',title:'Design Systems Architect',company:'TokenSync',country:'United States',period:'2022 – Present'},
  {id:'exp-16-2',title:'Principal UI Engineer',company:'Design Token Consortium',country:'Netherlands',period:'2018 – 2022'}
 ],
 17:[
  {id:'exp-17-1',title:'Senior Data Scientist',company:'Nexus NLP Research',country:'United States',period:'2021 – Present'},
  {id:'exp-17-2',title:'ML Research Engineer',company:'TÜBİTAK AI Labs',country:'Turkey',period:'2018 – 2021'}
 ],
 18:[
  {id:'exp-18-1',title:'VP of Product',company:'EnterpriseCloud B2B',country:'United States',period:'2020 – Present'},
  {id:'exp-18-2',title:'Director of Product',company:'SaaS Works Global',country:'Ireland',period:'2016 – 2020'}
 ],
 19:[
  {id:'exp-19-1',title:'Spatial Audio Engineer',company:'AmbisonicLab',country:'United States',period:'2021 – Present'},
  {id:'exp-19-2',title:'Acoustic DSP Developer',company:'Dolby Spatial Research',country:'Sweden',period:'2017 – 2021'}
 ],
 20:[
  {id:'exp-20-1',title:'Security & Cryptography Lead',company:'CryptMesh Protocol',country:'United States',period:'2021 – Present'},
  {id:'exp-20-2',title:'Senior Systems Security Engineer',company:'ZeroTrust Infrastructure',country:'Japan',period:'2017 – 2021'}
 ]
};
function getPersonExperience(id){
 if(id==='own')return ownProfile.experience||[];
 if(defaultDemoExperience[id])return defaultDemoExperience[id];
 const p=people[id];if(!p)return [];
 const comp=p.project||(p.headline?p.headline.replace(/^(Lead|Senior|Staff|Principal|Head of|VP of)\s+/i,'')+' Studio':'Innovations Lab');
 const prevRole=p.skills&&p.skills[0]?(p.skills[0]+' Specialist'):'Senior Specialist';
 return [
  {id:'exp-'+id+'-1',title:p.headline||'Professional',company:comp,country:'United States',period:'2022 – Present'},
  {id:'exp-'+id+'-2',title:prevRole,company:'Global Innovations Inc.',country:'International',period:'2018 – 2022'}
 ];
}
const defaultOwnDocs=[
 {id:'doc-own-1',title:'CV / Resume',filename:'Sahin_Erdemir_Resume.pdf',format:'pdf',size:'2.4 MB',date:'Oct 2026'},
 {id:'doc-own-2',title:'One Pager',filename:'Product_Vision_OnePager.docx',format:'docx',size:'1.1 MB',date:'Sep 2026'},
 {id:'doc-own-3',title:'Portfolio Deck',filename:'Selected_Works_2026.png',format:'png',size:'4.8 MB',date:'Aug 2026'}
];
const defaultDemoDocs={
 0:[{id:'doc-0-1',title:'CV / Resume',filename:'Alex_Morgan_Design_Resume.pdf',format:'pdf',size:'1.8 MB',date:'2026'},{id:'doc-0-2',title:'Sidepath One Pager',filename:'Sidepath_Product_Brief.docx',format:'docx',size:'850 KB',date:'2026'}],
 1:[{id:'doc-1-1',title:'CV / Resume',filename:'Jordan_Lee_Staff_AI.pdf',format:'pdf',size:'2.1 MB',date:'2026'},{id:'doc-1-2',title:'Signalkit Architecture',filename:'Signalkit_Whitepaper.docx',format:'docx',size:'1.4 MB',date:'2026'}],
 2:[{id:'doc-2-1',title:'Executive Summary',filename:'Northloop_OnePager.pdf',format:'pdf',size:'3.2 MB',date:'2026'},{id:'doc-2-2',title:'Financial Model',filename:'Northloop_Unit_Economics.xlsx',format:'xlsx',size:'620 KB',date:'2026'}],
 3:[{id:'doc-3-1',title:'Brand Deck',filename:'Fieldnotes_Studio_Deck.pdf',format:'pdf',size:'5.6 MB',date:'2026'},{id:'doc-3-2',title:'Case Study',filename:'Brand_Identity_Overview.jpg',format:'jpg',size:'3.1 MB',date:'2026'}],
 7:[{id:'doc-7-1',title:'CV / Publications',filename:'Elena_Rostova_ML_CV.pdf',format:'pdf',size:'1.5 MB',date:'2026'},{id:'doc-7-2',title:'Simulation Benchmarks',filename:'EdgeSim_Benchmark_Data.xlsx',format:'xlsx',size:'940 KB',date:'2026'}],
 10:[{id:'doc-10-1',title:'Engineering Resume',filename:'David_Park_Distributed_Systems.pdf',format:'pdf',size:'1.9 MB',date:'2026'}],
 12:[{id:'doc-12-1',title:'iOS Portfolio & Resume',filename:'Lucas_Thorne_iOS_Staff.pdf',format:'pdf',size:'2.7 MB',date:'2026'}],
 16:[{id:'doc-16-1',title:'TokenSync Spec',filename:'TokenSync_Design_Spec.pdf',format:'pdf',size:'2.2 MB',date:'2026'}]
};
function getPersonDocs(id){
 if(id==='own')return ownProfile.documents||[];
 if(defaultDemoDocs[id])return defaultDemoDocs[id];
 const p=people[id];if(!p)return [];
 const safe=(p.name||'Professional').replace(/\s+/g,'_');
 return [
  {id:'doc-'+id+'-1',title:'CV / Resume',filename:safe+'_Resume.pdf',format:'pdf',size:'1.6 MB',date:'2026'},
  {id:'doc-'+id+'-2',title:'One Pager',filename:safe+'_OnePager.docx',format:'docx',size:'920 KB',date:'2026'}
 ];
}
function getFormatIcon(fmt){
 const f=(fmt||'pdf').toLowerCase();
 if(f==='pdf')return 'ph-file-pdf';
 if(f==='docx'||f==='doc')return 'ph-file-doc';
 if(f==='xlsx'||f==='xls')return 'ph-file-xls';
 if(f==='jpg'||f==='jpeg'||f==='png')return 'ph-file-image';
 return 'ph-file-text';
}
function renderDocCard(doc,isEditable,isLocked){
 const format=(doc.format||'pdf').toLowerCase();
 const iconClass=getFormatIcon(format);
 const ext=format.toUpperCase();
 if(isLocked){
  return '<div class="peopi-doc-card doc-locked" data-doc-id="'+doc.id+'" role="button" tabindex="0" aria-label="Attached document (Unlocks after connecting)"><div class="peopi-doc-icon format-'+format+'"><i class="ph '+iconClass+'" aria-hidden="true"></i></div><div class="peopi-doc-info peopi-doc-blurred"><div class="peopi-doc-title">'+escapeProfileText(doc.title)+'</div><div class="peopi-doc-meta"><span class="peopi-doc-filename">'+escapeProfileText(doc.filename)+'</span><span class="peopi-doc-dot">·</span><span class="peopi-doc-size">'+escapeProfileText(doc.size||'1.2 MB')+'</span></div></div><div class="peopi-doc-lock-tag"><i class="ph ph-lock-key" aria-hidden="true"></i><span>Connect to view</span></div></div>';
 }
 const actBtn=isEditable?'<div class="peopi-doc-action"><button type="button" class="peopi-doc-del-btn" data-doc-del="'+doc.id+'" aria-label="Remove '+escapeProfileText(doc.title)+'" title="Remove"><i class="ph ph-trash" aria-hidden="true"></i></button></div>':'';
 return '<div class="peopi-doc-card" data-doc-id="'+doc.id+'" role="button" tabindex="0" aria-label="'+escapeProfileText(doc.title)+' ('+ext+')"><div class="peopi-doc-icon format-'+format+'"><i class="ph '+iconClass+'" aria-hidden="true"></i></div><div class="peopi-doc-info"><div class="peopi-doc-title">'+escapeProfileText(doc.title)+'</div><div class="peopi-doc-meta"><span class="peopi-doc-filename">'+escapeProfileText(doc.filename)+'</span><span class="peopi-doc-dot">·</span><span class="peopi-doc-size">'+escapeProfileText(doc.size||'1.2 MB')+'</span></div></div>'+actBtn+'</div>';
}
function renderMyProfileDocs(){
 const list=$('#myprofile-docs-list');if(!list)return;
 const docs=ownProfile.documents||[];
 if(!docs.length){list.innerHTML='<div class="edit-docs-empty">No documents added yet. Tap Edit to add your CV, Cover Letter or One Pager.</div>';return;}
 list.innerHTML=docs.map(d=>renderDocCard(d,false)).join('');
}
function renderEditDocItem(doc){
 const format=(doc.format||'pdf').toLowerCase();
 const iconClass=getFormatIcon(format);
 return '<div class="edit-doc-item" data-doc-id="'+doc.id+'">'
  + '<div class="peopi-doc-icon format-'+format+'"><i class="ph '+iconClass+'" aria-hidden="true"></i></div>'
  + '<div class="edit-doc-info">'
  + '<strong>'+escapeProfileText(doc.title||'Untitled document')+'</strong>'
  + '<div class="edit-doc-meta"><span class="edit-doc-filename" title="'+escapeProfileText(doc.filename||'document')+'">'+escapeProfileText(doc.filename||'document')+'</span></div>'
  + '</div>'
  + '<div class="edit-exp-actions">'
  + '<button type="button" class="peopi-exp-action-btn edit" data-doc-edit="'+doc.id+'" aria-label="Edit '+escapeProfileText(doc.title||'document')+'" title="Edit"><i class="ph ph-pencil-simple" aria-hidden="true"></i></button>'
  + '<button type="button" class="peopi-exp-action-btn del" data-doc-del="'+doc.id+'" aria-label="Remove '+escapeProfileText(doc.title||'document')+'" title="Remove"><i class="ph ph-x" aria-hidden="true"></i></button>'
  + '</div>'
  + '</div>';
}
function renderEditDocsList(){
 const list=$('#edit-docs-list');if(!list)return;
 const docs=ownProfile.documents||[];
 if(!docs.length){list.innerHTML='<div class="edit-docs-empty">No documents attached yet. Tap "Add document" below to attach your CV, Cover Letter or Portfolio.</div>';return;}
 list.innerHTML=docs.map(renderEditDocItem).join('');
}
let editingDocId=null;
let currentDocSheetFile=null;
function updateDocSheetFilePreview(file){
 currentDocSheetFile=file;
 const box=$('#doc-sheet-selected-box');
 const uploadBtn=$('#doc-sheet-upload-btn');
 if(!file){
  if(box)box.classList.add('hide');
  if(uploadBtn)uploadBtn.classList.remove('hide');
  return;
 }
 if(box)box.classList.remove('hide');
 if(uploadBtn)uploadBtn.classList.add('hide');
 const nameEl=$('#doc-sheet-selected-name');
 const metaEl=$('#doc-sheet-selected-meta');
 const iconEl=$('#doc-sheet-selected-icon');
 if(nameEl)nameEl.textContent=file.filename;
 const fmt=(file.format||'pdf').toLowerCase();
 if(metaEl)metaEl.textContent=fmt.toUpperCase()+' · '+(file.size||'1.2 MB');
 if(iconEl){
  iconEl.className='peopi-doc-icon format-'+fmt;
  iconEl.innerHTML='<i class="ph '+getFormatIcon(fmt)+'" aria-hidden="true"></i>';
 }
}
function openDocSheet(id){
 const sheet=$('#doc-sheet');if(!sheet)return;
 const titleInput=$('#doc-sheet-title-input');
 const sheetTitle=$('#doc-sheet-title');
 const sheetDesc=$('#doc-sheet-desc');
 const saveBtn=$('#btn-save-doc-sheet');
 const fileInput=$('#doc-sheet-file-input');
 if(fileInput)fileInput.value='';
 if(id){
  const doc=(ownProfile.documents||[]).find(x=>x.id===id);
  if(!doc)return;
  editingDocId=id;
  if(sheetTitle)sheetTitle.textContent='Edit document';
  if(sheetDesc)sheetDesc.textContent='Update title or file attachment for your confirmed connections.';
  if(saveBtn)saveBtn.textContent='Save changes';
  if(titleInput)titleInput.value=doc.title||'';
  updateDocSheetFilePreview({filename:doc.filename,format:doc.format,size:doc.size});
 }else{
  editingDocId=null;
  if(sheetTitle)sheetTitle.textContent='Add document';
  if(sheetDesc)sheetDesc.textContent='Attach a document visible only to your confirmed connections.';
  if(saveBtn)saveBtn.textContent='Save document';
  if(titleInput)titleInput.value='';
  updateDocSheetFilePreview(null);
 }
 sheet.classList.remove('hide');
 setTimeout(()=>titleInput?.focus(),80);
}
function closeDocSheet(){
 const sheet=$('#doc-sheet');
 if(sheet)sheet.classList.add('hide');
 editingDocId=null;
 currentDocSheetFile=null;
}
function saveDocFromSheet(){
 const titleInput=$('#doc-sheet-title-input');
 const title=(titleInput?.value||'').trim();
 if(!title){
  toast('Please enter a document title');
  titleInput?.focus();
  return;
 }
 if(!currentDocSheetFile){
  toast('Please choose a file to upload');
  return;
 }
 ownProfile.documents=ownProfile.documents||[];
 if(editingDocId){
  const idx=ownProfile.documents.findIndex(x=>x.id===editingDocId);
  if(idx!==-1){
   ownProfile.documents[idx]={
    ...ownProfile.documents[idx],
    title:title,
    filename:currentDocSheetFile.filename,
    format:currentDocSheetFile.format,
    size:currentDocSheetFile.size
   };
   toast('Document updated');
  }
 }else{
  const newDoc={
   id:'doc-user-'+Date.now(),
   title:title,
   filename:currentDocSheetFile.filename,
   format:currentDocSheetFile.format,
   size:currentDocSheetFile.size,
   date:'2026'
  };
  ownProfile.documents.push(newDoc);
  toast('Added '+title);
 }
 try{localStorage.setItem('peopi-demo-profile',JSON.stringify(ownProfile))}catch(e){}
 closeDocSheet();
 renderEditDocsList();
 renderMyProfileDocs();
 paintProfile();
 refreshIcons();
}
function renderConnectionDocs(id,isConnected){
 const list=$('#connection-docs-list');if(!list)return;
 const connected=isConnected!==undefined?isConnected:journey.connections.includes(Number(id));
 const docs=getPersonDocs(id);
 if(!docs.length){list.innerHTML='<div class="edit-docs-empty">No documents attached.</div>';return;}
 if(connected){
  list.innerHTML=docs.map(d=>renderDocCard(d,false,false)).join('');
 }else{
  list.innerHTML=docs.map(d=>renderDocCard(d,false,true)).join('')+'<p class="connection-docs-locked-hint"><i class="ph ph-lock-key" aria-hidden="true"></i> Documents unlock after connecting.</p>';
 }
}
function renderProfileSheetDocs(id,isConnected){
 const box=$('#detail-docs-content');if(!box)return;
 const docs=getPersonDocs(id);
 if(!docs.length){box.innerHTML='<div class="edit-docs-empty">No documents attached.</div>';return;}
 if(isConnected){
  box.innerHTML='<div class="peopi-docs-grid">'+docs.map(d=>renderDocCard(d,false,false)).join('')+'</div>';
 }else{
  box.innerHTML='<div class="peopi-docs-grid">'+docs.map(d=>renderDocCard(d,false,true)).join('')+'</div><p class="connection-docs-locked-hint"><i class="ph ph-lock-key" aria-hidden="true"></i> Documents unlock after connecting.</p>';
 }
}
function initDocEventHandlers(){
 $('#btn-open-add-doc')?.addEventListener('click',()=>openDocSheet(null));
 $('#close-doc-sheet')?.addEventListener('click',closeDocSheet);
 $('#doc-sheet')?.addEventListener('click',e=>{if(e.target===$('#doc-sheet'))closeDocSheet();});
 $('#btn-save-doc-sheet')?.addEventListener('click',saveDocFromSheet);
 const fileInput=$('#doc-sheet-file-input');
 const uploadBtn=$('#doc-sheet-upload-btn');
 const changeBtn=$('#doc-sheet-change-file');
 if(uploadBtn&&fileInput){
  uploadBtn.onclick=()=>fileInput.click();
 }
 if(changeBtn&&fileInput){
  changeBtn.onclick=()=>fileInput.click();
 }
 if(fileInput){
  fileInput.onchange=()=>{
   const file=fileInput.files&&fileInput.files[0];if(!file)return;
   const ext=file.name.split('.').pop().toLowerCase();
   const allowed=['pdf','docx','xlsx','jpg','jpeg','png'];
   if(!allowed.includes(ext)){
    modal('Unsupported format','Please upload .docx, .pdf, .xlsx, .jpg, or .png documents.','Got it');
    fileInput.value='';
    return;
   }
   const sizeMb=(file.size/(1024*1024)).toFixed(1);
   const sizeStr=sizeMb>=1?sizeMb+' MB':Math.round(file.size/1024)+' KB';
   const format=ext==='jpeg'?'jpg':ext;
   const titleInput=$('#doc-sheet-title-input');
   if(titleInput&&!titleInput.value.trim()){
    let cleanName=file.name.replace(/\.[^/.]+$/,"").replace(/[_-]/g," ");
    cleanName=cleanName.charAt(0).toUpperCase()+cleanName.slice(1);
    titleInput.value=cleanName;
   }
   updateDocSheetFilePreview({filename:file.name,format:format,size:sizeStr});
   fileInput.value='';
  };
 }
 $('#myprofile-manage-docs')?.addEventListener('click',()=>{
  openProfileEditor();
  setTimeout(()=>{const g=$('#edit-docs-group');if(g)g.scrollIntoView({behavior:'smooth'})},150);
 });
 document.addEventListener('click',e=>{
  const editBtn=e.target.closest('[data-doc-edit]');
  if(editBtn){
   e.stopPropagation();
   const docId=editBtn.dataset.docEdit;
   openDocSheet(docId);
   return;
  }
  const delBtn=e.target.closest('[data-doc-del]');
  if(delBtn){
   e.stopPropagation();
   const docId=delBtn.dataset.docDel;
   const doc=(ownProfile.documents||[]).find(x=>x.id===docId);
   const docTitle=doc?doc.title||doc.filename:'this document';
   modal('Delete document?','Are you sure you want to remove "'+docTitle+'" from your profile?','Delete',()=>{
    ownProfile.documents=(ownProfile.documents||[]).filter(d=>d.id!==docId);
    try{localStorage.setItem('peopi-demo-profile',JSON.stringify(ownProfile))}catch(err){}
    renderEditDocsList();
    renderMyProfileDocs();
    paintProfile();
    toast('Document removed');
    refreshIcons();
   });
   return;
  }
  const viewCard=e.target.closest('.peopi-doc-card');
  if(viewCard&&!e.target.closest('.peopi-doc-del-btn')){
   if(viewCard.classList.contains('doc-locked')){
    toast('Documents unlock once you become connected.');
    return;
   }
   const filename=viewCard.querySelector('.peopi-doc-filename')?.textContent||'document';
   toast('Opening '+filename+'... (Demo preview)');
  }
 });
 document.addEventListener('keydown',e=>{
  if(e.key==='Enter'||e.key===' '){
   const viewCard=e.target.closest('.peopi-doc-card');
   if(viewCard&&!e.target.closest('.peopi-doc-del-btn')){
    e.preventDefault();
    viewCard.click();
   }
  }
 });
}
function renderExperienceCard(item){
 return '<div class="peopi-exp-card"><div class="peopi-exp-head"><strong class="peopi-exp-title">'+escapeProfileText(item.title||'Role')+'</strong><span class="peopi-exp-company">'+escapeProfileText(item.company||'Company')+'</span></div><div class="peopi-exp-meta"><span class="peopi-exp-country"><i class="ph ph-map-pin" aria-hidden="true"></i> '+escapeProfileText(item.country||'—')+'</span><span class="peopi-exp-dot">·</span><span class="peopi-exp-dates"><i class="ph ph-calendar-blank" aria-hidden="true"></i> '+escapeProfileText(item.period||'—')+'</span></div></div>';
}
function renderMyProfileExperience(){
 const list=$('#myprofile-exp-list');if(!list)return;
 const items=ownProfile.experience||[];
 if(!items.length){list.innerHTML='<div class="edit-docs-empty">No experience listed yet. Tap Edit to add your roles.</div>';return;}
 list.innerHTML=items.map(renderExperienceCard).join('');
}
function renderConnectionExperience(id){
 const list=$('#connection-exp-list');if(!list)return;
 const items=getPersonExperience(id);
 if(!items.length){list.innerHTML='<div class="edit-docs-empty">No experience listed.</div>';return;}
 list.innerHTML=items.map(renderExperienceCard).join('');
}
let profileExpExpanded = {};
function renderProfileSheetExperience(id){
 const list=$('#detail-exp-list');if(!list)return;
 const items=getPersonExperience(id);
 if(!items.length){list.innerHTML='<div class="edit-docs-empty">No experience listed.</div>';return;}
 const isExp = Boolean(profileExpExpanded['prof_' + id]);
 const displayItems = isExp || items.length <= 2 ? items : items.slice(0, 2);
 let out = displayItems.map(renderExperienceCard).join('');
 if(items.length > 2){
   out += '<button type="button" class="peopi-exp-toggle-btn" id="btn-toggle-prof-exp">' + (isExp ? 'Show less' : 'Show all experience (' + items.length + ')') + ' <i class="ph ph-caret-' + (isExp ? 'up' : 'down') + '"></i></button>';
 }
 list.innerHTML = out;
 $('#btn-toggle-prof-exp')?.addEventListener('click', () => {
   profileExpExpanded['prof_' + id] = !isExp;
   renderProfileSheetExperience(id);
   refreshIcons();
 });
}
let connExpExpanded = {};
function renderConnectionExperience(id){
 const list=$('#connection-exp-list');if(!list)return;
 const items=getPersonExperience(id);
 if(!items.length){list.innerHTML='<div class="edit-docs-empty">No experience listed.</div>';return;}
 const isExp = Boolean(connExpExpanded['conn_' + id]);
 const displayItems = isExp || items.length <= 2 ? items : items.slice(0, 2);
 let out = displayItems.map(renderExperienceCard).join('');
 if(items.length > 2){
   out += '<button type="button" class="peopi-exp-toggle-btn" id="btn-toggle-conn-exp">' + (isExp ? 'Show less' : 'Show all experience (' + items.length + ')') + ' <i class="ph ph-caret-' + (isExp ? 'up' : 'down') + '"></i></button>';
 }
 list.innerHTML = out;
 $('#btn-toggle-conn-exp')?.addEventListener('click', () => {
   connExpExpanded['conn_' + id] = !isExp;
   renderConnectionExperience(id);
   refreshIcons();
 });
}
let editingExpId=null;
function populateExpYears(){
 const startSelect=$('#exp-sheet-start-year');
 const endSelect=$('#exp-sheet-end-year');
 if(!startSelect||!endSelect)return;
 if(startSelect.children.length>1)return;
 const currentYear=2026;
 startSelect.innerHTML='<option value="">Start year</option>';
 endSelect.innerHTML='<option value="Present">Present (Current)</option>';
 for(let y=currentYear;y>=1980;y--){
  startSelect.innerHTML+='<option value="'+y+'">'+y+'</option>';
  endSelect.innerHTML+='<option value="'+y+'">'+y+'</option>';
 }
}
function parseExpPeriod(period){
 if(!period)return {start:'',end:'Present'};
 const str=period.trim();
 const matchRange=str.match(/(\d{4})\s*[-–—]\s*(Present|\d{4})/i);
 if(matchRange){
  const endVal=/^present$/i.test(matchRange[2])?'Present':matchRange[2];
  return {start:matchRange[1],end:endVal};
 }
 const matchSingle=str.match(/\b(\d{4})\b/);
 if(matchSingle){
  return {start:matchSingle[1],end:matchSingle[1]};
 }
 return {start:'',end:'Present'};
}
function formatExpPeriod(start,end){
 const s=(start||'').trim();
 const e=(end||'').trim();
 if(!s&&!e)return '—';
 if(s&&(!e||e==='Present'))return s+' – Present';
 if(!s&&e)return (e==='Present')?'Present':e;
 if(s===e)return s;
 return s+' – '+e;
}
function openExpSheet(id){
 populateExpYears();
 const sheet=$('#exp-sheet');if(!sheet)return;
 const titleInput=$('#exp-sheet-title-input');
 const compInput=$('#exp-sheet-company-input');
 const countryInput=$('#exp-sheet-country-input');
 const startYearSelect=$('#exp-sheet-start-year');
 const endYearSelect=$('#exp-sheet-end-year');
 const sheetTitle=$('#exp-sheet-title');
 const sheetDesc=$('#exp-sheet-desc');
 const saveBtn=$('#btn-save-exp-sheet');
 if(id){
  const item=(ownProfile.experience||[]).find(x=>x.id===id);
  if(!item)return;
  editingExpId=id;
  if(sheetTitle)sheetTitle.textContent='Edit experience';
  if(sheetDesc)sheetDesc.textContent='Update this role in your professional profile.';
  if(saveBtn)saveBtn.textContent='Save changes';
  if(titleInput)titleInput.value=item.title||'';
  if(compInput)compInput.value=item.company||'';
  if(countryInput)countryInput.value=item.country||'';
  const parsed=parseExpPeriod(item.period);
  if(startYearSelect)startYearSelect.value=parsed.start;
  if(endYearSelect)endYearSelect.value=parsed.end;
 }else{
  editingExpId=null;
  if(sheetTitle)sheetTitle.textContent='Add experience';
  if(sheetDesc)sheetDesc.textContent='Add your past or current role to your profile.';
  if(saveBtn)saveBtn.textContent='Add experience';
  if(titleInput)titleInput.value='';
  if(compInput)compInput.value='';
  if(countryInput)countryInput.value='';
  if(startYearSelect)startYearSelect.value='';
  if(endYearSelect)endYearSelect.value='Present';
 }
 sheet.classList.remove('hide');
 setTimeout(()=>titleInput?.focus(),80);
}
function closeExpSheet(){
 const sheet=$('#exp-sheet');
 if(sheet)sheet.classList.add('hide');
 editingExpId=null;
}
function saveExpFromSheet(){
 const titleInput=$('#exp-sheet-title-input');
 const compInput=$('#exp-sheet-company-input');
 const countryInput=$('#exp-sheet-country-input');
 const startYearSelect=$('#exp-sheet-start-year');
 const endYearSelect=$('#exp-sheet-end-year');
 const title=(titleInput?.value||'').trim();
 const company=(compInput?.value||'').trim();
 const country=(countryInput?.value||'').trim()||'—';
 const startYear=(startYearSelect?.value||'').trim();
 const endYear=(endYearSelect?.value||'').trim();
 if(!title||!company){
  toast('Please enter title and company');
  if(!title)titleInput?.focus();else compInput?.focus();
  return;
 }
 if(startYear&&endYear&&endYear!=='Present'){
  const sy=parseInt(startYear,10);
  const ey=parseInt(endYear,10);
  if(!isNaN(sy)&&!isNaN(ey)&&ey<sy){
   toast('End year cannot be earlier than start year');
   endYearSelect?.focus();
   return;
  }
 }
 const period=formatExpPeriod(startYear,endYear);
 ownProfile.experience=ownProfile.experience||[];
 if(editingExpId){
  const idx=ownProfile.experience.findIndex(x=>x.id===editingExpId);
  if(idx!==-1){
   ownProfile.experience[idx]={
    ...ownProfile.experience[idx],
    title:title,
    company:company,
    country:country,
    period:period
   };
   toast('Experience updated');
  }
 }else{
  const newExp={
   id:'exp-user-'+Date.now(),
   title:title,
   company:company,
   country:country,
   period:period
  };
  ownProfile.experience.push(newExp);
  toast('Added '+title);
 }
 try{localStorage.setItem('peopi-demo-profile',JSON.stringify(ownProfile))}catch(e){}
 closeExpSheet();
 renderEditExperienceList();
 paintProfile();
 refreshIcons();
}
function renderEditExperienceList(){
 const list=$('#edit-exp-list');if(!list)return;
 const items=ownProfile.experience||[];
 if(!items.length){list.innerHTML='<div class="edit-docs-empty">No experience added yet. Tap "Add experience" to list your roles.</div>';return;}
 list.innerHTML=items.map(item=>'<div class="edit-exp-item" data-exp-id="'+item.id+'"><div class="edit-exp-info"><strong>'+escapeProfileText(item.title||'Role')+'</strong><span class="edit-exp-company">'+escapeProfileText(item.company||'Company')+'</span><div class="edit-exp-meta"><span>'+escapeProfileText(item.country||'—')+'</span><span class="peopi-exp-dot">·</span><span>'+escapeProfileText(item.period||'—')+'</span></div></div><div class="edit-exp-actions"><button type="button" class="peopi-exp-action-btn edit" data-exp-edit="'+item.id+'" aria-label="Edit '+escapeProfileText(item.title)+'" title="Edit"><i class="ph ph-pencil-simple" aria-hidden="true"></i></button><button type="button" class="peopi-exp-action-btn del" data-exp-del="'+item.id+'" aria-label="Remove '+escapeProfileText(item.title)+'" title="Remove"><i class="ph ph-x" aria-hidden="true"></i></button></div></div>').join('');
}
function initExpEventHandlers(){
 $('#btn-open-add-exp')?.addEventListener('click',()=>openExpSheet(null));
 $('#close-exp-sheet')?.addEventListener('click',closeExpSheet);
 $('#exp-sheet')?.addEventListener('click',e=>{if(e.target===$('#exp-sheet'))closeExpSheet();});
 $('#btn-save-exp-sheet')?.addEventListener('click',saveExpFromSheet);
 $('#myprofile-manage-exp')?.addEventListener('click',()=>{
  openProfileEditor();
  setTimeout(()=>{const g=$('#edit-exp-group');if(g)g.scrollIntoView({behavior:'smooth'})},150);
 });
 $('#myprofile-manage-about')?.addEventListener('click',()=>{
  openProfileEditor();
  setTimeout(()=>{const el=$('#edit-bio');if(el){el.scrollIntoView({behavior:'smooth',block:'center'});el.focus();}},150);
 });
 $('#myprofile-manage-intent')?.addEventListener('click',()=>{
  openProfileEditor();
  setTimeout(()=>{const el=$('#edit-intent');if(el){el.scrollIntoView({behavior:'smooth',block:'center'});el.focus();}},150);
 });
 $('#myprofile-manage-skills')?.addEventListener('click',()=>{
  openProfileEditor();
  setTimeout(()=>{const el=$('#edit-skill-input');if(el){el.scrollIntoView({behavior:'smooth',block:'center'});el.focus();}},150);
 });
 document.addEventListener('click',e=>{
  const editBtn=e.target.closest('[data-exp-edit]');
  if(editBtn){
   e.stopPropagation();
   const expId=editBtn.dataset.expEdit;
   openExpSheet(expId);
   return;
  }
  const delBtn=e.target.closest('[data-exp-del]');
  if(delBtn){
   e.stopPropagation();
   const expId=delBtn.dataset.expDel;
   const item=(ownProfile.experience||[]).find(x=>x.id===expId);
   const roleName=item?item.title+(item.company?' at '+item.company:''):'this role';
   modal('Delete experience?','Are you sure you want to remove '+roleName+' from your profile?','Delete',()=>{
    ownProfile.experience=(ownProfile.experience||[]).filter(x=>x.id!==expId);
    try{localStorage.setItem('peopi-demo-profile',JSON.stringify(ownProfile))}catch(err){}
    renderEditExperienceList();
    paintProfile();
    toast('Experience removed');
    refreshIcons();
   });
  }
 });
}
const profileDefaults={name:'Your name',headline:'Product & Experience Designer',city:'Miami, FL',bio:'Building thoughtful digital experiences.',intent:'Meaningful connections',goals:'Collaboration · Ideas',skills:'Product design, UX strategy, Startups, AI products',documents:defaultOwnDocs,experience:defaultOwnExperience};let ownProfile={...profileDefaults};try{const saved=JSON.parse(localStorage.getItem('peopi-demo-profile')||'null');if(saved&&typeof saved==='object'){ownProfile={...profileDefaults,...saved};if(!Array.isArray(ownProfile.documents)||!ownProfile.documents.length)ownProfile.documents=[...defaultOwnDocs];if(!Array.isArray(ownProfile.experience)||!ownProfile.experience.length)ownProfile.experience=[...defaultOwnExperience];}}catch(e){}const profileFields={name:'edit-name',headline:'edit-headline',city:'edit-city',bio:'edit-bio',intent:'edit-intent',goals:'edit-goals',skills:'edit-skills'};function profileInitials(name){const words=(name||'').trim().split(/\s+/).filter(Boolean);return words.length>1?(words[0][0]+words[words.length-1][0]).toUpperCase():words[0]&&words[0]!=='Your'?words[0].slice(0,2).toUpperCase():'ME'}function profileSkills(raw){return String(raw||'').split(',').map(x=>x.trim()).filter(Boolean).slice(0,8)}function profileStrength(p){return Math.round(Object.keys(profileFields).filter(k=>String(p[k]||'').trim()&&p[k]!==profileDefaults[k]).length/Object.keys(profileFields).length*100)}function updateClosedIntentBubble(intentStr){
  const cbText = document.getElementById("closed-bubble-text");
  if(cbText) cbText.textContent = intentStr || "Meet new people";
}
let editSkillsList = [];
let profileEditorSnapshot = null;
function renderEditSkillsChips(){
  const container = $('#edit-skills-chips');
  if(!container) return;
  container.replaceChildren(...editSkillsList.map((skill, idx) => {
    const item = document.createElement('span');
    item.className = 'skills-chip-item';
    item.innerHTML = '<span>' + escapeProfileText(skill) + '</span><button type="button" aria-label="Remove ' + escapeProfileText(skill) + '">×</button>';
    item.querySelector('button').onclick = (e) => {
      e.stopPropagation();
      e.preventDefault();
      editSkillsList.splice(idx, 1);
      renderEditSkillsChips();
      $('#edit-skills').value = editSkillsList.join(', ');
    };
    return item;
  }));
  const hiddenInp = $('#edit-skills');
  if(hiddenInp) hiddenInp.value = editSkillsList.join(', ');
}
function addEditSkillFromInput(){
  const inp = $('#edit-skill-input');
  if(!inp) return;
  const val = inp.value.trim().replace(/,/g, '');
  if(!val) return;
  if(editSkillsList.length >= 8){ toast('Maximum 8 skills allowed'); return; }
  if(!editSkillsList.includes(val)){
    editSkillsList.push(val);
    renderEditSkillsChips();
  }
  inp.value = '';
  inp.focus();
}
function getProfileEditorValues(){
  const vals = {};
  Object.entries(profileFields).forEach(([k, id]) => {
    vals[k] = ($('#' + id)?.value || '').trim();
  });
  return JSON.stringify(vals);
}
function isProfileEditorDirty(){
  if(!profileEditorSnapshot) return false;
  return getProfileEditorValues() !== profileEditorSnapshot;
}
function populateProfileEditor(){
  if(!ownProfile) return;
  Object.entries(profileFields).forEach(([key,id])=>{
    const el=$('#'+id);if(el)el.value=ownProfile[key]||'';
  });
  editSkillsList = profileSkills(ownProfile.skills);
  renderEditSkillsChips();
  const bioInput=$('#edit-bio');
  const bioCount=$('#bio-count');
  if(bioInput&&bioCount)bioCount.textContent=bioInput.value.length;
  const avatarPrev=$('#edit-avatar-preview');
  if(avatarPrev)avatarPrev.textContent=profileInitials(ownProfile.name);
  renderEditDocsList();
  renderEditExperienceList();
  profileEditorSnapshot = getProfileEditorValues();
}
function openProfileEditor(){
  populateProfileEditor();
  go('editprofile');
}
$('#edit-add-skill-btn')?.addEventListener('click', addEditSkillFromInput);
$('#edit-skill-input')?.addEventListener('keydown', e => { if(e.key === 'Enter'){ e.preventDefault(); addEditSkillFromInput(); } });
$('#edit-skills-wrap')?.addEventListener('click', e => { if(!e.target.closest('button')) $('#edit-skill-input')?.focus(); });function paintProfile(){const p=ownProfile;updateClosedIntentBubble(p.intent);const cbInitials=document.getElementById("closed-avatar-fallback");if(cbInitials)cbInitials.textContent=profileInitials(p.name);$('#own-name').textContent=p.name||'Your name';$('#own-title').textContent=p.headline||'Add a professional headline';const hero=$('.myprofile-hero');if(hero){hero.querySelector('.myprofile-avatar').firstChild.textContent=profileInitials(p.name);hero.querySelector('.myprofile-location').innerHTML='<i class="ph ph-map-pin" aria-hidden="true"></i> '+escapeProfileText(p.city||'Add a city');}$('.myprofile-section>p').textContent=p.bio||'Add a short introduction about yourself.';$('.myprofile-intent strong').textContent=p.intent||'Add a networking intent';$('.myprofile-intent small').textContent=p.goals||'Describe what you are looking for';$('.myprofile-chips').replaceChildren(...profileSkills(p.skills).map(skill=>{const el=document.createElement('span');el.textContent=skill;return el}));renderMyProfileDocs();renderMyProfileExperience();populateProfileEditor();const score=profileStrength(p);$('.completion-top>b').textContent=score+'%';$('.completion-track i').style.width=score+'%';$('.completion-track').setAttribute('aria-valuenow',String(score));refreshIcons();}function escapeProfileText(t){return String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}function updateSkillPreview(){$('#edit-skill-preview').replaceChildren(...profileSkills($('#edit-skills').value).map(skill=>{const el=document.createElement('span');el.textContent=skill;return el}))}function saveProfile(){const next={};Object.entries(profileFields).forEach(([key,id])=>next[key]=$('#'+id).value.trim());next.skills=profileSkills(next.skills).join(', ');next.documents=ownProfile.documents||[];next.experience=ownProfile.experience||[];if(!next.name){$('#edit-name').focus();return}ownProfile=next;try{localStorage.setItem('peopi-demo-profile',JSON.stringify(ownProfile))}catch(e){}paintProfile();go('myprofile')}all('.myprofile-edit').forEach(b=>b.onclick=openProfileEditor);$('#myprofile-completion').onclick=openProfileEditor;function handleEditProfileDiscard(){
  if(isProfileEditorDirty()){
    modal('Discard changes?', 'You have unsaved changes in your profile. Are you sure you want to discard them?', 'Discard', () => {
      populateProfileEditor();
      window.goBack ? window.goBack('myprofile') : go('myprofile');
    });
  } else {
    window.goBack ? window.goBack('myprofile') : go('myprofile');
  }
}
$('#edit-back').onclick = handleEditProfileDiscard;
$('#edit-cancel').onclick = handleEditProfileDiscard;$('#edit-save-top').onclick=saveProfile;$('#edit-save-bottom').onclick=saveProfile;$('#edit-bio').addEventListener('input',()=>$('#bio-count').textContent=$('#edit-bio').value.length);$('#edit-skills').addEventListener('input',updateSkillPreview);$('#edit-name').addEventListener('input',()=>$('#edit-avatar-preview').textContent=profileInitials($('#edit-name').value));const showPhotoModal=()=>modal('Profile photo','Photo upload is planned for the mobile app. Your image will not be shared in nearby discovery without your choice.','Got it');$('#edit-avatar-container')?.addEventListener('click',showPhotoModal);$('#edit-avatar-container')?.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showPhotoModal();}});$('#myprofile-privacy').onclick=()=>go('privacy');$('#myprofile-settings').onclick=()=>go('appsettings');initDocEventHandlers();initExpEventHandlers();paintProfile();
const privacyDefaults={requests:true,reminders:true};let privacyPrefs={...privacyDefaults};try{const p=JSON.parse(localStorage.getItem('peopi-demo-privacy')||'null');if(p&&typeof p==='object')privacyPrefs={...privacyDefaults,...p}}catch(e){}function paintPrivacy(){[['requests','privacy-requests'],['reminders','privacy-reminders']].forEach(([key,id])=>{const b=$('#'+id);if(b){b.classList.toggle('off',!privacyPrefs[key]);b.setAttribute('aria-checked',String(!!privacyPrefs[key]))}})}['requests','reminders'].forEach(key=>{const b=$('#privacy-'+key);if(b)b.onclick=()=>{privacyPrefs[key]=!privacyPrefs[key];try{localStorage.setItem('peopi-demo-privacy',JSON.stringify(privacyPrefs))}catch(e){}paintPrivacy()}});paintPrivacy();$('#privacy-back').onclick=()=>(window.goBack?window.goBack('myprofile'):go('myprofile'));$('#privacy-presence-action').onclick=()=>go('closed');$('#manage-hidden').onclick=()=>modal('Hidden connections','Choose which existing connections cannot see your active nearby presence. They can still view your profile and message you. Selection and enforcement will be built with authenticated connections.','Got it');$('#privacy-blocked').onclick=()=>modal('Blocked people','A future safety screen will let you review and unblock accounts. Blocking is different from simply hiding your active presence.','Got it');$('#privacy-report').onclick=()=>modal('Report a concern','Reporting will let you flag unsafe interactions to the moderation team. No report is submitted from this prototype.','Got it');
let linkedinDemo=false;try{linkedinDemo=localStorage.getItem('peopi-demo-linkedin')==='true'}catch(e){}function paintVerification(){const state=$('#verify-linkedin-state'),sub=$('#verify-linkedin-sub');if(state){state.textContent=linkedinDemo?'Demo linked':'Not linked';state.classList.toggle('linked',linkedinDemo)}if(sub){if(linkedinDemo){sub.innerHTML='<i class="ph-fill ph-seal-check" aria-hidden="true"></i> Verified';sub.classList.add('is-verified')}else{sub.textContent='Not connected';sub.classList.remove('is-verified')}}$('#verify-connect')?.classList.toggle('hide',linkedinDemo);$('#verify-disconnect')?.classList.toggle('hide',!linkedinDemo)}function saveLinkedinDemo(v){linkedinDemo=v;try{localStorage.setItem('peopi-demo-linkedin',String(v))}catch(e){}paintVerification()}$('#verify-connect').onclick=()=>{saveLinkedinDemo(true);modal('LinkedIn verified','Your LinkedIn connection is now active. Your profile displays the verified trust badge.','Got it')};$('#verify-disconnect').onclick=()=>saveLinkedinDemo(false);$('#verify-back').onclick=()=>(window.goBack?window.goBack('myprofile'):go('myprofile'));paintVerification();
function paintSettings(){const p=ownProfile;$('#settings-avatar').textContent=profileInitials(p.name);$('#settings-name').textContent=p.name||'Your name';$('#settings-headline').textContent=p.headline||'Add a headline';const darkAppearance=$('#phone').classList.contains('dark');$('#settings-appearance-label').textContent=typeof appearanceMode !== 'undefined' && appearanceMode === 'system' ? 'System' : (darkAppearance ? 'Dark mode' : 'Light mode');const appearanceIcon=$('#settings-appearance .settings-ico i');if(appearanceIcon){appearanceIcon.className='ph ph-'+(darkAppearance?'moon':'sun');refreshIcons()}}$('#settings-back').onclick=()=>(window.goBack?window.goBack('myprofile'):go('myprofile'));const setAccCard=$('#settings-account-card')||$('.settings-account');if(setAccCard)setAccCard.onclick=()=>(window.goBack?window.goBack('myprofile'):go('myprofile'));$('#settings-profile').onclick=openProfileEditor;$('#settings-verification').onclick=()=>go('verification');$('#settings-privacy').onclick=()=>go('privacy');let appearanceMode = 'system';
function applyAppearance(mode){
  appearanceMode = mode;
  let isDark = false;
  if(mode === 'dark') isDark = true;
  else if(mode === 'light') isDark = false;
  else isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  $('#phone')?.classList.toggle('dark', isDark);
  const themeBtn = $('#theme');
  if(themeBtn){
    themeBtn.innerHTML = isDark ? '<i class="ph ph-sun" aria-hidden="true"></i>' : '<i class="ph ph-moon" aria-hidden="true"></i>';
    themeBtn.setAttribute('aria-pressed', String(isDark));
  }
  paintSettings();
  refreshIcons();
}
$('#settings-appearance').onclick=()=>{
  const modes = ['system', 'light', 'dark'];
  const next = modes[(modes.indexOf(appearanceMode) + 1) % modes.length];
  applyAppearance(next);
  toast('Appearance: ' + (next === 'system' ? 'System theme' : next === 'dark' ? 'Dark mode' : 'Light mode'));
};$('#settings-help').onclick=()=>go('helpsupport','push');$('#settings-about').onclick=()=>go('aboutpeopi','push');$('#settings-signout').onclick=()=>modal('Sign out','Sign-out is unavailable in this prototype because there is no authenticated session. Your local demo profile and preferences remain in this browser.','Got it');const previousGoForSettings=go;go=function(to,dir){previousGoForSettings(to,dir);if(to==='appsettings')paintSettings();if(to==='myprofile')paintProfile();if(to==='editprofile')populateProfileEditor();};paintSettings();
