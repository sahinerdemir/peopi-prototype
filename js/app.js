const $=s=>document.querySelector(s),all=s=>[...document.querySelectorAll(s)];let page='closed',duration=60,intent='Meet new people',endTime=null,interval=null,person=0,view='map',fiveMinuteNotified=false;const people=[
{name:'Alex Morgan',initial:'AM',role:'Product designer · Startup',intent:'Open to collaboration',color:'#e1c9c6',headline:'Product Designer',sector:'Early-stage products · Startup',bio:'I turn messy early-stage ideas into clear product experiences. I enjoy small teams, rapid prototyping, and thoughtful design systems.',looking:'A technical co-founder or engineering collaborator to test a new B2B workflow product.',skills:['Product strategy','UX/UI','Prototyping','B2B SaaS'],project:'Sidepath',projectdesc:'A lightweight workflow tool for independent creative teams. Early concept, looking for a builder.',onepager:null},
{name:'Jordan Lee',initial:'JL',role:'Software engineer · AI',intent:'Exploring new projects',color:'#d4bfd0',headline:'Software Engineer',sector:'Applied AI · Developer tools',bio:'I build practical AI features and reliable systems. Most interested in tools that save people time rather than chasing demos.',looking:'Founders and product designers working on useful AI-powered software.',skills:['Python','LLMs','APIs','Full-stack'],project:'Signalkit',projectdesc:'Prototype for turning scattered customer feedback into actionable product themes.',onepager:null},
{name:'Sam Kim',initial:'SK',role:'Founder · Climate tech',intent:'Looking to exchange ideas',color:'#c9d8c4',headline:'Startup Founder',sector:'Climate technology · Sustainability',bio:'Working on practical tools for small businesses to understand their resource usage and find meaningful savings.',looking:'Conversations with operators, sustainability experts, and potential pilot partners.',skills:['Climate tech','Operations','Go-to-market'],project:'Northloop',projectdesc:'Exploring an energy insights platform for small commercial spaces. Currently validating the problem.',onepager:null},
{"name":"Taylor Brooks","initial":"TB","role":"Brand strategist · Creative","intent":"Open to collaboration","color":"#d9c9b9","headline":"Brand Strategist","sector":"Brand identity · Creative strategy","bio":"Helping emerging businesses find a clear voice and build memorable brands.","looking":"Creative founders and thoughtful product teams.","skills":["Brand strategy","Storytelling","Creative direction"],"project":"Fieldnotes","projectdesc":"Independent creative strategy studio.","onepager":null},
{"name":"Casey Rivera","initial":"CR","role":"Growth lead · SaaS","intent":"Sharing ideas","color":"#bfd6d7","headline":"Growth Lead","sector":"B2B SaaS · Growth","bio":"I love turning customer insights into experiments that help products grow sustainably.","looking":"Product leaders and early-stage teams.","skills":["Growth","Analytics","Lifecycle"],"project":null,"projectdesc":"","onepager":null},
{"name":"Morgan Patel","initial":"MP","role":"Architect · Urban design","intent":"Meeting new people","color":"#e2c7a9","headline":"Urban Designer","sector":"Architecture · Cities","bio":"Exploring how spaces and technology can bring people together.","looking":"Designers, community builders, and collaborators.","skills":["Architecture","Urbanism","Community"],"project":"Common Ground","projectdesc":"Research on more connected public spaces.","onepager":null},
{"name":"Riley Chen","initial":"RC","role":"Investor · Climate","intent":"Exploring new projects","color":"#b9cfc0","headline":"Early-stage Investor","sector":"Climate · Venture","bio":"Backing practical teams building a more resilient future.","looking":"Founders with ambitious, grounded ideas.","skills":["Venture","Climate","Strategy"],"project":null,"projectdesc":"","onepager":null},
{"name":"Elena Rostova","initial":"ER","role":"Staff ML engineer · Autonomous AI","intent":"Open to collaboration","color":"#c5d1eb","headline":"Staff ML Engineer","sector":"Autonomous Systems · AI","bio":"Focusing on edge inference efficiency and safety alignment for autonomous machines.","looking":"Collaborators in robotics, simulation, and edge computing.","skills":["PyTorch","Edge AI","Robotics","CUDA"],"project":"EdgeSim","projectdesc":"Deterministic simulation testbed for mobile edge robotics.","onepager":null},
{"name":"Marcus Vance","initial":"MV","role":"Principal product architect · FinTech","intent":"Sharing ideas","color":"#d8cbe8","headline":"Principal Architect","sector":"FinTech · Embedded Finance","bio":"Designing high-availability financial ledgers and modern developer checkout flows.","looking":"Founders exploring next-gen commerce infrastructure.","skills":["FinTech","API Design","Distributed Systems"],"project":null,"projectdesc":"","onepager":null},
{"name":"Maya Lin","initial":"ML","role":"Creative director · Brand & Type","intent":"Meeting new people","color":"#f2d0c2","headline":"Creative Director","sector":"Typography · Editorial & Brand","bio":"Shaping type-driven identities and tactile digital experiences for modern brands.","looking":"Product founders who value deep aesthetic craft.","skills":["Typography","Art Direction","Brand Systems"],"project":"Monotype Study","projectdesc":"Independent publication exploring variable typography in mobile interfaces.","onepager":null},
{"name":"David Park","initial":"DP","role":"Head of engineering · Distributed systems","intent":"Looking to exchange ideas","color":"#c8e2dc","headline":"Head of Engineering","sector":"Cloud Infrastructure · Scalability","bio":"Scaling infrastructure from 10k to 10M concurrent users without drama or burnouts.","looking":"Engineering managers and platform builders.","skills":["Go","Kubernetes","Distributed Systems"],"project":null,"projectdesc":"","onepager":null},
{"name":"Sofia Al-Mansoor","initial":"SA","role":"Partner · Climate VC","intent":"Exploring new projects","color":"#edd3b4","headline":"Venture Partner","sector":"DeepTech · Climate Capital","bio":"Investing in physical infrastructure, carbon removal, and practical grid decarbonization.","looking":"Seed-stage technical founders building foundational solutions.","skills":["Venture Capital","Clean Energy","Due Diligence"],"project":null,"projectdesc":"","onepager":null},
{"name":"Lucas Thorne","initial":"LT","role":"Senior iOS engineer · Swift & UX","intent":"Open to collaboration","color":"#d0dbe5","headline":"Senior iOS Engineer","sector":"Mobile Engineering · Cupertino Craft","bio":"Obsessed with frame pacing, fluid gesture-driven UI, and zero-latency micro-interactions.","looking":"Designers who care about 120fps animations and native Swift craft.","skills":["Swift","SwiftUI","CoreAnimation","Metal"],"project":"GestureKit","projectdesc":"Open-source interactive spring-physics transitions for SwiftUI.","onepager":null},
{"name":"Nadia O'Connor","initial":"NO","role":"Chief of staff · Series B","intent":"Sharing ideas","color":"#ebd5e3","headline":"Chief of Staff","sector":"Organizational Operations · Scale","bio":"Bridging product strategy, executive hiring, and cross-functional momentum in high-growth startups.","looking":"Operators and early-stage CEOs scaling past 50 people.","skills":["Operations","Executive Strategy","Org Design"],"project":null,"projectdesc":"","onepager":null},
{"name":"Tariq Benali","initial":"TB","role":"Robotics engineer · Hardware","intent":"Looking to exchange ideas","color":"#cce4d6","headline":"Hardware Systems Engineer","sector":"Robotics · Industrial Automation","bio":"Building ruggedized perception suites and mechanical actuators for logistics robots.","looking":"Hardware co-founders, firmware engineers, and supply-chain mentors.","skills":["Mechatronics","Embedded C++","ROS2"],"project":"Kinesis","projectdesc":"Modular brushless motor driver for collaborative robotic arms.","onepager":null},
{"name":"Chloe Dubois","initial":"CD","role":"Product lead · HealthTech","intent":"Open to collaboration","color":"#ebd8c8","headline":"Product Lead","sector":"Digital Health · Patient Experience","bio":"Designing secure, compassionate health-tech workflows that clinicians and patients actually enjoy.","looking":"Healthcare innovators, clinical advisors, and privacy specialists.","skills":["HealthTech","HIPAA Compliance","Product Strategy"],"project":null,"projectdesc":"","onepager":null},
{"name":"Aris Thorne","initial":"AT","role":"Design systems architect · Mobile","intent":"Meeting new people","color":"#cde0e2","headline":"Design Systems Architect","sector":"Design Tokens · Multi-Platform","bio":"Aligning design tokens and motion contracts across Figma, iOS, and Web prototypes.","looking":"Cross-platform teams wrestling with token automation and accessibility.","skills":["Design Systems","Accessibility","Tokens & Tooling"],"project":"TokenSync","projectdesc":"Compiler from W3C design tokens to Swift and CSS variables.","onepager":null},
{"name":"Zeynep Kaya","initial":"ZK","role":"Senior data scientist · Generative NLP","intent":"Sharing ideas","color":"#dfcce8","headline":"Senior Data Scientist","sector":"Applied NLP · Knowledge Retrieval","bio":"Fine-tuning compact language models for verifiable enterprise semantic search.","looking":"Researchers and ML engineers working on retrieval-augmented generation.","skills":["NLP","Transformers","Vector Search","Python"],"project":null,"projectdesc":"","onepager":null},
{"name":"Liam O'Sullivan","initial":"LO","role":"VP of product · Enterprise SaaS","intent":"Looking to exchange ideas","color":"#cad8cc","headline":"VP of Product","sector":"Enterprise Platforms · B2B","bio":"Simplifying complex enterprise workflows into delightful, consumer-grade software.","looking":"Product thinkers, enterprise sales leaders, and aspiring PMs.","skills":["Enterprise SaaS","Product Strategy","GTM Execution"],"project":null,"projectdesc":"","onepager":null},
{"name":"Hanna Lindqvist","initial":"HL","role":"Spatial audio engineer · AR/VR","intent":"Exploring new projects","color":"#e8d5cb","headline":"Spatial Audio Engineer","sector":"Immersive Tech · Acoustics","bio":"Creating real-time binaural sound rendering and acoustic room simulation for spatial apps.","looking":"AR/VR developers, game engine architects, and sound designers.","skills":["Spatial Audio","DSP","Unity & Unreal","C++"],"project":"AmbisonicLab","projectdesc":"Real-time web-based spatial acoustic room reverberation previewer.","onepager":null},
{"name":"Kenji Takahashi","initial":"KT","role":"Security lead · Zero-trust","intent":"Sharing ideas","color":"#cfdbe8","headline":"Security & Cryptography Lead","sector":"Cybersecurity · Privacy Infrastructure","bio":"Engineering end-to-end encrypted protocols and zero-knowledge privacy guarantees.","looking":"Privacy advocates, cryptographers, and distributed infrastructure engineers.","skills":["Applied Cryptography","Zero-Trust","Rust","Network Security"],"project":"CryptMesh","projectdesc":"Local-first peer-to-peer authenticated discovery protocol specification.","onepager":null}
];function go(to,dir){page=to;all('.screen').forEach(x=>x.classList.toggle('active',x.id===to));all('[data-go]').forEach(x=>x.classList.toggle('selected',x.dataset.go===to&&x.closest('.controls')))}window.goBack=window.goBack||function(fallback){go(fallback||'closed');};all('[data-go]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.go)));['auth-google','auth-apple'].forEach(id=>$('#'+id).addEventListener('click',()=>toast('Social sign-in is a UI demo. OAuth is not connected yet.')));$('#theme').onclick=()=>{const dark=$('#phone').classList.toggle('dark');$('#theme').innerHTML=dark?'<i class="ph ph-sun" aria-hidden="true"></i>':'<i class="ph ph-moon" aria-hidden="true"></i>';$('#theme').setAttribute('aria-pressed',String(dark));$('#theme').setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');refreshIcons()};all('[data-intent]').forEach(b=>b.onclick=()=>{intent=b.dataset.intent;all('[data-intent]').forEach(x=>x.classList.toggle('chosen',x===b));updateClosedIntentBubble(intent)});all('[data-duration]').forEach(b=>b.onclick=()=>{const d=Number(b.dataset.duration);duration=d;all('[data-duration]').forEach(x=>{const isChosen=x===b;x.classList.toggle('chosen',isChosen);x.setAttribute('aria-pressed',String(isChosen))})});function updateTimer(){if(!endTime)return;const remaining=Math.max(0,Math.ceil((endTime-Date.now())/1000));if(remaining<=300&&remaining>0&&!fiveMinuteNotified){fiveMinuteNotified=true;$('#session-alert').classList.remove('hide')}if(!remaining){clearInterval(interval);endTime=null;$('#session-alert').classList.add('hide');go('closed');toast('You are invisible again.')}}let introSkillsList = [];
const phIconName=name=>({"pencil":"pencil-simple","trash-2":"trash","external-link":"arrow-square-out","lock-keyhole":"lock-key","navigation":"navigation-arrow","menu":"list","settings-2":"sliders","users-round":"users-three","user-round":"user","user-round-pen":"user-circle-gear","user-round-x":"user-minus","shield-check":"shield-check","shield-alert":"shield-warning","eye-off":"eye-slash","sliders-horizontal":"sliders-horizontal","check-circle-2":"check-circle","clock-3":"clock","message-circle":"chat-circle","badge-check":"seal-check","link-2":"link","scan-face":"scan","bell-ring":"bell-ringing","refresh-cw":"arrows-clockwise","circle-help":"question","log-out":"sign-out","loader-circle":"spinner","circle-check":"check-circle","circle-alert":"warning-circle","arrow-up-right":"arrow-up-right","maximize":"arrows-out","minimize":"arrows-in","x":"x","map-pin":"map-pin","radar":"radar","compass":"compass","map":"map-trifold","list":"list","sun":"sun","moon":"moon","settings":"gear","flag":"flag","camera":"camera","sparkles":"sparkle","handshake":"handshake","mail":"envelope","lock":"lock","users":"users","info":"info","chevron-down":"caret-down","chevron-right":"caret-right","arrow-left":"arrow-left","arrow-right":"arrow-right","arrow-up":"arrow-up","check":"check","plus":"plus","minus":"minus","bell":"bell","search":"magnifying-glass","filter":"funnel","eye":"eye","heart":"heart","bookmark":"bookmark","share-2":"share-network"}[name]||name);
function refreshIcons(){/* Phosphor icon font renders automatically; no DOM replacement required. */}
const specs={
 "closed": {
  "code": "02.1",
  "section": "Discover",
  "title": "Invisible state",
  "summary": "Primary discovery landing screen when live presence broadcasting is turned off.",
  "purpose": "Provide a safe, calm overview of nearby professional activity without exposing the user's own presence or requiring real-time sharing.",
  "actions": [
   "Inspect approximate nearby area and count badge (7 nearby).",
   "View profile completion card with live score and navigate to profile completion.",
   "Tap 'Show up' or hero area to open Session Setup (02.2).",
   "Access top messages and notifications counters.",
   "Switch between Discover, Connections, and Profile root navigation tabs."
  ],
  "states": [
   "Default root tab landing upon app launch or session expiration.",
   "Egress to Session Setup (02.2) via 'Show up' CTA.",
   "Root navigation switches to Connections (03.1) or Profile (05.1).",
   "State preserves user's current chosen networking intent in the floating bubble."
  ],
  "rules": [
   "Strictly invisible by default; no background broadcasting or pinging.",
   "No individual markers, photos, verification badges, or identities revealed while in invisible state; subtle abstract aggregated activity zones indicate general nearby density without revealing individual locations or counts.",
   "Location is strictly approximate; Collins Ave/Biscayne Blvd map grid is illustrative.",
   "Creating an account, completing profile, or viewing the screen never turns visibility on."
  ],
  "components": [
   "Hero radar pulse stage with concentric wave rings (.closed-center-hero).",
   "Subtle aggregated activity zones (.closed-activity-zone).",
   "Floating intent speech bubble (.closed-intent-bubble).",
   "Profile completeness progress card with 116pt bottom clearance (.completeness).",
   "Root navigation bar with 70pt height, 16pt inset, and icon badges (.nav)."
  ],
  "motion": [
   "Concentric radar ripples animate smoothly using shared ease-out token.",
   "Root tab switching uses instant state preservation with smooth crossfade.",
   "Prefers-reduced-motion replaces beacon ripple animations with static concentric circles.",
   "Touch targets adhere to minimum 44pt accessible dimensions."
  ],
  "integration": [
   "Nearby professional count is illustrative; real client requires server-side geohashing query.",
   "Completeness indicator computes from saved local demo profile fields; backend sync required.",
   "Permissions are not triggered until explicit session setup confirmation."
  ]
 },
 "setup": {
  "code": "02.2",
  "section": "Discover",
  "title": "Start session",
  "summary": "Configuration screen for time-limited, purpose-driven nearby discovery.",
  "purpose": "Let members choose their immediate networking intent and duration before broadcasting active presence.",
  "actions": [
   "Select a networking intent (Meet new people, Explore collaboration, Share ideas).",
   "Pick bounded visibility duration preset: 30 minutes, 60 minutes (default), or 120 minutes.",
   "Tap 'Go visible' to trigger profile introduction check and initiate active session.",
   "Tap 'Not now' or Back button to return to Invisible state without sharing presence."
  ],
  "states": [
   "Ingress from Invisible state (02.1) 'Show up' button.",
   "Incomplete profile trigger: opens 'Complete your introduction' sheet if bio or skill is missing.",
   "Egress to Active Discovery (02.3) upon explicit 'Go visible' confirmation."
  ],
  "rules": [
   "Presence is strictly opt-in and bound to an automatic expiration timer (30, 60, or 120 minutes). Arbitrary custom duration inputs are disallowed to prevent indefinite or misconfigured broadcasting.",
   "Go visible requires at least a short bio and one skill; other fields remain optional.",
   "Canceling or navigating back guarantees the user remains completely invisible.",
   "Selected duration and intent are saved for the duration of the setup attempt."
  ],
  "components": [
   "Radio-style single select options with animated indicator (.option).",
   "Preset duration pills container (.durations).",
   "Primary action button and secondary dismiss button (.setupfoot)."
  ],
  "motion": [
   "Push transition from B01 with horizontal ease-out curve.",
   "Press scale feedback (0.97) on duration presets and intent choices.",
   "Honor system Reduce Motion by disabling slide transitions in favor of crossfades."
  ],
  "integration": [
   "Session expiration relies on local timer in prototype; real implementation requires server-side TTL lease.",
   "Device location permission check must be verified natively before broadcasting.",
   "Live session beacon publication requires authenticated websocket or push sync."
  ]
 },
 "active": {
  "code": "02.3",
  "section": "Discover",
  "title": "Active discovery",
  "summary": "Live nearby map and list view during an active discovery session.",
  "purpose": "Allow members to explore and filter nearby professionals and open their professional profile previews.",
  "actions": [
   "Switch between Map and List representations.",
   "Pan and drag map canvas with elastic boundary resistance.",
   "Tap floating recenter button to smoothly return to user's location.",
   "Select nearby professional pins to view profile card preview.",
   "Open discovery filters dialog to filter by professional specialty or intent.",
   "Dismiss active filter chips to reset filters inline.",
   "Tap 'Go invisible' to terminate the session early via confirmation modal."
  ],
  "states": [
   "Ingress from Session Setup (02.2) upon valid Go visible action.",
   "Map view active with interactive pins and beacon; List view active with scrollable items.",
   "Profile preview card: floats above bottom navigation when a pin is selected.",
   "5-minute expiration warning banner with '+30 min' extension option.",
   "Egress back to Invisible state (02.1) upon session timer end or manual Go invisible."
  ],
  "rules": [
   "Map and list share the identical filtered dataset and count (7 nearby demo professionals).",
   "Discovery pins convey approximate proximity via diffusion halos; production APIs and client payloads must never transmit precise raw coordinates.",
   "Unconnected profiles display initials-only avatars with photos withheld on the server; full portraits and names unlock only after mutual connection acceptance.",
   "Hidden connections from user's network are excluded from active presence visibility."
  ],
  "components": [
   "Segmented view control Map/List (.seg).",
   "Interactive pan canvas with rubber-band bounds (.map-canvas).",
   "User approximate beacon with radar waves (.map-user-beacon).",
   "Floating profile preview card with quick metadata (.profilecard).",
   "Active filter chips strip (.discovery-applied-chips).",
   "Floating map recenter button (.map-recenter-btn)."
  ],
  "motion": [
   "Fluid spring drag and momentum release on map canvas pan.",
   "Recenter button fades and scales in when canvas moves >32pt from origin.",
   "Selection pulse and border highlight on active pin.",
   "Profile card slides up with 0.24s cubic-bezier curve from bottom."
  ],
  "integration": [
   "Pins represent simulated local records; real app consumes real-time proximity clustering service.",
   "Background location updates must be throttled to coarse battery-efficient geofences.",
   "Server must revoke presence token immediately upon manual session termination."
  ]
 },
 "profile": {
  "code": "02.4",
  "section": "Discover",
  "title": "Professional profile",
  "summary": "Pre-connection profile bottom sheet showing professional background.",
  "purpose": "Provide meaningful context on a professional's background, skills, and projects to support purposeful connection decisions.",
  "actions": [
   "Review headline, sector, bio, and what they are looking for.",
   "Inspect skills and interests tags.",
   "Review past experience entries with 'Show all experience' toggle.",
   "Review attached documents preview (blurred for unconnected visitors).",
   "For unconnected contacts: compose custom note and tap 'Request to connect'.",
   "For connected contacts: tap primary 'Send Message' or secondary 'Go to profile'.",
   "Dismiss sheet to return to Active Discovery."
  ],
  "states": [
   "Bottom modal sheet opened from Active Discovery pin, list item, or search result.",
   "Unconnected state: shows 'Request to connect' button and blurred photo/documents.",
   "Pending request state: displays 'Request pending ✓'.",
   "Connected state: shows 'Send Message' primary button and 'Go to profile' link.",
   "Request note composer: expandable input for adding a 200-char introduction note."
  ],
  "rules": [
   "Initials only for unconnected members; full name revealed only after mutual connection.",
   "Pre-connection profiles use initials-only avatars with photos withheld on the server, avoiding reliance on client-side blur for privacy.",
   "Conceal mutual connection previews and counts until mutual connection is accepted.",
   "Documents and attachments remain blurred placeholders until connection is established.",
   "Professional background, bio, skills, and project descriptions are intentionally visible to facilitate connection.",
   "Sending a request does not expose user's live coordinates."
  ],
  "components": [
   "Modal bottom sheet container with drag grabber (.profile-sheet-scroll).",
   "Anonymous portrait avatar with sector badge (.anonavatar).",
   "Collapsible experience list (.peopi-exp-list).",
   "Document attachments preview card (.peopi-docs-grid).",
   "Request note composition field with live character counter (.profile-request-note)."
  ],
  "motion": [
   "Bottom sheet slide-up animation (0.24s cubic-bezier(0.16, 1, 0.3, 1)).",
   "Backdrop dim with animated opacity fade.",
   "Experience toggle expands smoothly with height transition.",
   "Reduce motion disables slide transform, keeping smooth opacity crossfade."
  ],
  "integration": [
   "Connection requests are local prototype state; production requires signed backend mutations.",
   "Document downloading requires access-token validation verifying active mutual connection.",
   "Push notification dispatch to recipient on request submission."
  ]
 },
 "onboarding": {
  "code": "01.2",
  "section": "Onboarding & Auth",
  "title": "Onboarding Tour",
  "summary": "3-step interactive product walkthrough introducing core value props.",
  "purpose": "Educate new members on spontaneous proximity, privacy by default, and purposeful networking before account creation.",
  "actions": [
   "Swipe left or tap 'Continue' to advance through 3 illustrated slides.",
   "Tap 'Skip' to proceed directly to Sign In (01.3).",
   "Slide 3 'Get started' button routes directly to Sign In (01.3).",
   "Tap 'I already have an account' to proceed to Sign In (01.3)."
  ],
  "states": [
   "Initial first-launch screen for unauthenticated users.",
   "Slide 01: Spontaneous Proximity (radar orbit illustration).",
   "Slide 02: Privacy by Default (invisible default shield illustration).",
   "Slide 03: Purposeful Networking (collaboration card illustration).",
   "Egress directly to Sign in (01.3) on completion or skip."
  ],
  "rules": [
   "Zero device permissions requested during onboarding walkthrough.",
   "Skip button is always accessible at 44pt minimum touch target.",
   "Completing or skipping onboarding never starts nearby visibility."
  ],
  "components": [
   "Swipeable carousel slides container (.onboarding-slides-container).",
   "Orbit ring vector illustration with animated pulse (.illus-orbit-ring).",
   "Dot indicator pagination (.onboarding-dots).",
   "Primary and quiet journey action buttons (.onboarding-actions)."
  ],
  "motion": [
   "Touch swipe gesture with resistance bounds.",
   "Animated dot indicator transitions tracking carousel offset.",
   "Illustrative radar pulses and floating avatar micro-animations.",
   "Accessible fallback: buttons provide complete functional parity with swipe gestures."
  ],
  "integration": [
   "First-launch flag tracked locally; server onboarding state synced upon account creation.",
   "Analytics events for slide view and drop-off tracking.",
   "Offline capable static asset delivery."
  ]
 },
 "welcome": {
  "code": "01.1",
  "section": "Onboarding & Auth",
  "title": "Welcome",
  "summary": "Atmospheric branded landing screen presenting Peopi's mission.",
  "purpose": "Serve as an alternative visual brand portal communicating the core philosophy: Good things start with showing up.",
  "actions": [
   "Tap 'Get started' to enter registration and sign in (01.3).",
   "Tap 'I already have an account' to sign in (01.3).",
   "Inspect orbiting avatars representing diverse creative specialties."
  ],
  "states": [
   "Alternative entry screen accessible from navigation tree.",
   "Interactive orbiting demo avatars (.orbit-avatar).",
   "Egress to Sign In (01.3)."
  ],
  "rules": [
   "No location, push, or device permissions requested on welcome.",
   "Brand copy emphasizes privacy-first, meaningful networking.",
   "Invisible by default premise introduced immediately."
  ],
  "components": [
   "Dual-track planetary orbit animation (.welcome-orbit-track).",
   "Peopi brand wordmark with accent dot (.welcome-center).",
   "Primary journey action button (.journey-primary)."
  ],
  "motion": [
   "Smooth continuous CSS keyframe rotation on inner and outer orbit rings.",
   "Reduce motion pauses orbital rotation and displays static arrangement.",
   "Button active state provides instant visual scale feedback."
  ],
  "integration": [
   "Static standalone marketing screen; no network calls required.",
   "Deep links can route directly to Welcome or Sign In depending on campaign context."
  ]
 },
 "auth": {
  "code": "01.3",
  "section": "Onboarding & Auth",
  "title": "Sign in",
  "summary": "Email and social authentication interface.",
  "purpose": "Authenticate users securely with social providers or passwordless email verification code.",
  "actions": [
   "Tap 'Continue with Google' or 'Continue with Apple' (demonstrated via UI notice).",
   "Enter email address and tap 'Continue with email'.",
   "Enter 6-digit verification code (demo code: 123456).",
   "Tap 'Resend demo code' if code was not received.",
   "Tap 'Trouble signing in?' to navigate to Account Recovery (01.3.1).",
   "Tap Back button to return to previous screen."
  ],
  "states": [
   "Social sign-in buttons displayed at top, followed by divider.",
   "Email input stage active (.auth-email-stage).",
   "Verification code stage active upon email submission (.auth-code-stage).",
   "Egress to Profile Setup (01.4) upon successful verification code entry."
  ],
  "rules": [
   "Order: Social sign-in options, divider, email input field, email submit button directly beneath.",
   "Authentication is simulated in this browser demo; no actual email is transmitted.",
   "Signing in does NOT make the user discoverable in nearby sessions."
  ],
  "components": [
   "Social sign-in branded buttons with Google and Apple SVG marks (.auth-social-btn).",
   "Divider with centered label (.auth-or-divider).",
   "Accessible text field with floating label styling (.journey-field).",
   "Primary journey CTA with trailing directional arrow (.journey-primary)."
  ],
  "motion": [
   "Crossfade transition between email input stage and verification code stage.",
   "Native keyboard handling with auto-focus on first code digit.",
   "Immediate inline validation feedback without full-page reloads."
  ],
  "integration": [
   "OAuth 2.0 / OpenID Connect integration required for Google and Apple sign-in.",
   "Passwordless OTP service (e.g. Supabase Auth / Firebase Auth) required for production email codes."
  ]
 },
 "recovery": {
  "code": "01.3.1",
  "section": "Onboarding & Auth",
  "title": "Account recovery",
  "summary": "Passwordless account access recovery interface.",
  "purpose": "Provide a clean, trustworthy recovery mechanism for members who lost access to their account email.",
  "actions": [
   "Enter registered account email address.",
   "Tap 'Send recovery link'.",
   "View confirmation card displaying entered target email.",
   "Tap 'Resend recovery link' to re-trigger email.",
   "Tap 'Change email' to return to input form.",
   "Tap Back to return to Sign in."
  ],
  "states": [
   "Initial input stage with email input and submit button (#recovery-form-stage).",
   "Sent confirmation stage with email highlight and resend controls (#recovery-result-stage).",
   "Egress back to Sign In (01.3) via back navigation."
  ],
  "rules": [
   "Displays the entered email address clearly in confirmation state.",
   "Allows immediate email correction without navigating away.",
   "No account modifications or actual emails occur in this prototype."
  ],
  "components": [
   "Card surface with confirmation envelope emblem (.recovery-sent-card).",
   "Standard accessible email input (.journey-field).",
   "Primary and quiet action buttons (.journey-primary, .journey-quiet)."
  ],
  "motion": [
   "Horizontal push navigation from Sign in.",
   "Clean crossfade between form input stage and confirmation state.",
   "Reduced motion maintains direct state replacement."
  ],
  "integration": [
   "Production requires rate-limited magic link or secure recovery token dispatch.",
   "Timing-attack safe response (same confirmation displayed even if email does not exist)."
  ]
 },
 "firstprofile": {
  "code": "01.4",
  "section": "Onboarding & Auth",
  "title": "Profile setup",
  "summary": "Essential registration step collecting identity basics.",
  "purpose": "Collect only the minimum viable professional information (Name, Headline, City) so users can enter the app quickly without unnecessary friction.",
  "actions": [
   "Enter Full name (required).",
   "Enter Professional headline (required).",
   "Enter City or area (required).",
   "Tap 'Continue' to proceed to Intent setup (01.5).",
   "Tap Back to return to Sign In."
  ],
  "states": [
   "Step 01 of 02 in onboarding registration.",
   "Form contains only 3 fields: Name, Headline, City.",
   "Bio and skills are deferred to later discovery readiness check.",
   "Egress to Intent setup (01.5) on validation success."
  ],
  "rules": [
   "Strictly restricted to Full name, Professional headline, and City / area.",
   "No bio or skills inputs on this initial registration screen.",
   "Completing this step does not activate visibility or expose data to strangers.",
   "Sample text serves as helpful placeholder guidance, not fake default data."
  ],
  "components": [
   "Grouped form container (.ui-form-group).",
   "High-contrast accessible text inputs (.journey-field).",
   "Primary continuation button (.journey-primary)."
  ],
  "motion": [
   "Horizontal slide-in transition from auth verification.",
   "Validation errors shake subtly or display clear toast messaging.",
   "Focus management moves sequentially across fields."
  ],
  "integration": [
   "Draft profile stored locally in demo; synced to backend user table in production.",
   "City autocomplete can integrate with approximate geographic places service."
  ]
 },
 "firstintent": {
  "code": "01.5",
  "section": "Onboarding & Auth",
  "title": "Intent setup",
  "summary": "Networking intent and goal multi-selection step.",
  "purpose": "Allow new members to select multiple networking goals to shape their future discovery sessions.",
  "actions": [
   "Select one or more networking purposes using checkbox controls.",
   "Toggle between Meet new people, Explore collaborations, Share ideas, Find co-founders, etc.",
   "Tap 'Finish setup' to complete onboarding and enter the application.",
   "Tap Back to return to Profile setup."
  ],
  "states": [
   "Step 02 of 02 in onboarding registration.",
   "Multi-selection checkbox list with check-square / square iconography.",
   "Egress to Invisible Discover landing (02.1) with 'You are invisible by default' toast."
  ],
  "rules": [
   "Uses explicit checkbox / multi-select iconography (ph-check-square / ph-square), not radio buttons.",
   "Requires at least one selected goal to finish setup.",
   "Finishing setup enters the app in an INVISIBLE state; discovery session does NOT start."
  ],
  "components": [
   "Multi-select journey choice buttons (.journey-choice).",
   "Tactile 26px rounded checkbox indicator (.intent-checkbox) with bold checkmark.",
   "Notice box reinforcing privacy default (.journey-notice)."
  ],
  "motion": [
   "Instant checkbox state toggle with press scale feedback.",
   "Completion routes smoothly into root Discover tab with toast confirmation.",
   "Reduce motion respects instantaneous tab switch."
  ],
  "integration": [
   "Selected intents stored in user preference profile in database.",
   "Intents serve as default options when configuring future discovery sessions."
  ]
 },
 "permissions": {
  "code": "01.6",
  "section": "Onboarding & Auth",
  "title": "App permissions",
  "summary": "Educational screen explaining just-in-time system permissions.",
  "purpose": "Explain how location and notifications are used, ensuring members understand permissions are requested only when needed.",
  "actions": [
   "Read approximate location privacy explanation.",
   "Read notification preferences explanation.",
   "Tap 'Continue to Discover' to enter the main app."
  ],
  "states": [
   "Informational permission education screen.",
   "Egress to Invisible Discover (02.1)."
  ],
  "rules": [
   "Permissions are requested just-in-time during actual feature usage, not upfront.",
   "Notification permission is optional and NOT a prerequisite to discovery.",
   "No device system permission dialogs are simulated or faked in this web demo."
  ],
  "components": [
   "Feature explanation card list (.permissions-list).",
   "Shield icon callout (.journey-notice).",
   "Primary continuation button (.journey-primary)."
  ],
  "motion": [
   "Calm vertical card reveal.",
   "Accessible touch targets with minimum 44pt touch area."
  ],
  "integration": [
   "Native iOS / Android runtime permission prompts (CoreLocation, UNUserNotificationCenter) triggered on device."
  ]
 },
 "network": {
  "code": "03.1",
  "section": "Connections",
  "title": "My network",
  "summary": "Central connections hub and relationship management screen.",
  "purpose": "Provide access to all accepted professional connections, quick management hubs, and real-time search.",
  "actions": [
   "Search connections dynamically by name, role, or skill.",
   "Filter connections by Specialty pills (All, Design, Engineering, Founders, AI, Verified).",
   "Tap compact 'Requests' hub card to manage pending introductions.",
   "Tap compact 'Hidden list' hub card to manage presence visibility.",
   "Tap any connection card to view Connection Detail (03.1.1).",
   "Tap message icon on a connection card to jump directly to chat thread."
  ],
  "states": [
   "Root navigation tab 'Connections'.",
   "Search input active with dynamic count in placeholder.",
   "Filtered category view active via horizontal filter pills.",
   "Empty state with 'Reset search & filters' when no records match."
  ],
  "rules": [
   "Requests and Hidden list hub cards are styled compactly so search and contacts appear higher up.",
   "Search placeholder dynamically reflects actual connection count (e.g. Search 15 connections...).",
   "Confirmed connections reveal full names and sharp profile portraits.",
   "Active nearby sessions do not alter or disconnect existing network connections."
  ],
  "components": [
   "Compact management hub grid (.network-quick-hub).",
   "Interactive search field with clear action (.network-search-box).",
   "Horizontal filter pill carousel (.network-filter-pills).",
   "Connection card with verified badge and direct chat shortcut (.network-person-card)."
  ],
  "motion": [
   "Instant filter pill selection with background pill highlight.",
   "Card list updates live during typing without layout jumps.",
   "Chat shortcut provides responsive tactile touch feedback."
  ],
  "integration": [
   "Connections query powered by indexed relational table with full-text search.",
   "Optimistic local caching ensures instant offline list inspection."
  ]
 },
 "connectiondetail": {
  "code": "03.1.1",
  "section": "Connections",
  "title": "Connection detail",
  "summary": "Full profile view and relationship management for an accepted connection.",
  "purpose": "Review a confirmed connection's complete professional background, verified credentials, and manage presence privacy.",
  "actions": [
   "Inspect full name, sharp photo, headline, sector, bio, and what they are looking for.",
   "Inspect full list of skills and past experience roles with toggle.",
   "Inspect attached documents and credentials (downloadable for confirmed connections).",
   "Tap floating 'Message' action button to open 1-on-1 Conversation.",
   "Tap '…' menu button to access presence and relationship management options.",
   "Toggle 'Hide my active presence' to conceal future live sessions from this specific person.",
   "Tap Back to return to My Network."
  ],
  "states": [
   "Ingress from My Network connection card or Conversation profile link.",
   "Experience list: displays latest 2 roles with 'Show all experience' toggle.",
   "Hide active presence status dynamically updates button label.",
   "Egress back to My Network or Conversation."
  ],
  "rules": [
   "Management shortcut uses three-dots icon ('…') instead of a gear icon.",
   "Hide My Presence conceals live nearby presence from this person without removing connection or chat.",
   "The other person is NOT notified when you hide presence.",
   "Blocking is an explicit separate action from presence hiding."
  ],
  "components": [
   "Full profile hero with sharp avatar and verified badge (.profilehero).",
   "Connection confirmation pill with connection date (.privacyhint).",
   "Three-dots management button (.connection-manage-shortcut).",
   "Floating message action button (.connection-message-fab).",
   "Grouped detail blocks for bio, skills, experience, and attachments (.detailblock)."
  ],
  "motion": [
   "Push transition from Network list with standard iOS curve.",
   "Floating message FAB animates in with gentle scale-up.",
   "Experience expansion reveals hidden roles smoothly."
  ],
  "integration": [
   "Mutual connection token grants access to unblurred attachments in object storage.",
   "Selective presence exclusion list checked by edge presence server before pinging."
  ]
 },
 "requests": {
  "code": "03.2",
  "section": "Connections",
  "title": "Connection requests",
  "summary": "Management screen for incoming and outgoing connection requests.",
  "purpose": "Allow members to review incoming invitations, make accept/decline decisions, and track sent requests.",
  "actions": [
   "Switch between 'Received (N)' and 'Sent (N)' tabs.",
   "Accept an incoming request (adds to network, unlocks chat, removes request).",
   "Decline an incoming request (removes request).",
   "Cancel a pending sent request.",
   "If Sent tab is empty, tap 'Explore nearby professionals' to navigate to Discover."
  ],
  "states": [
   "Received tab active: displays incoming requests with Accept/Decline action buttons.",
   "Sent tab active: displays pending outgoing invitations with cancel action.",
   "Empty Sent state: displays friendly illustration and primary CTA routing to Discover (02.1)."
  ],
  "rules": [
   "Accept/Decline buttons use compact, elegant styling positioned underneath the person row.",
   "Accept button is transparent with accent outline; Decline button is subtle muted surface.",
   "Tab headers display live numerical counts (Received (N) / Sent (N)).",
   "Chat is unlocked ONLY after mutual connection acceptance."
  ],
  "components": [
   "Segmented requests tab bar (.journey-tabs).",
   "Request row with note excerpt (.journey-person.request-received).",
   "Two-button decision component under person row (.person-actions).",
   "Empty state with navigation CTA button (.journey-empty)."
  ],
  "motion": [
   "Inline card dismiss animation upon accept or decline without reloading tab.",
   "Badge numbers decrement smoothly with counter transition.",
   "Tab switch crossfades list content."
  ],
  "integration": [
   "Mutations dispatched via transactional API endpoint updating friendship status.",
   "Acceptance triggers push notification and creates direct chat channel."
  ]
 },
 "messages": {
  "code": "04.1",
  "section": "Connections",
  "title": "Messages",
  "summary": "Conversations inbox for all confirmed connection threads.",
  "purpose": "Provide quick, reliable access to direct message conversations with accepted professional connections.",
  "actions": [
   "Switch between 'Conversations' and 'All' tabs.",
   "Tap any conversation row to open the thread directly.",
   "View last message snippet, timestamp, and unread dot indicator.",
   "Access top navigation or bottom tabs."
  ],
  "states": [
   "Conversations tab: lists threads with active message history.",
   "All tab: lists all confirmed connections available for chat.",
   "Empty state: guidance when no active conversations exist.",
   "Egress to Conversation thread (04.1.1) upon row tap."
  ],
  "rules": [
   "Tab is labeled 'Conversations', replacing legacy 'Current' label.",
   "Entire row is clickable to open conversation; standalone chat button removed.",
   "Displays accurate last message relative timestamp (e.g. 15m ago, 2h ago).",
   "Unread badge counts ONLY conversations containing unread messages, not total connections."
  ],
  "components": [
   "Inbox tab bar (.messages-tabs).",
   "Clickable conversation row (.journey-person.conversation-clickable-row).",
   "Unread accent dot (.activity-unread-dot).",
   "Timestamp metadata label (.conversation-time-meta)."
  ],
  "motion": [
   "Row press highlight with smooth fade.",
   "Unread dot fades out immediately upon opening thread.",
   "Push transition into conversation view."
  ],
  "integration": [
   "Websocket subscription for real-time conversation updates and typing indicators.",
   "Local SQLite database cache for offline message retrieval."
  ]
 },
 "conversation": {
  "code": "04.1.1",
  "section": "Connections",
  "title": "Conversation detail",
  "summary": "Direct message thread with meetup prompts and safety controls.",
  "purpose": "Enable secure, contextual messaging between confirmed connections with quick in-person meetup suggestions.",
  "actions": [
   "Compose and send text messages up to 2000 characters.",
   "Tap quick meetup prompt pills to insert suggestions into draft input without auto-sending.",
   "Tap coffee meetup button in composer to view meeting prompts.",
   "Open '…' conversation options menu to View Profile, Download Chat, Hide Presence, or Block.",
   "Tap Back to return to Messages inbox."
  ],
  "states": [
   "Active conversation history with timestamps and speech bubbles.",
   "Top banner (.chat-meetup-banner) coordinates nearby meetups without obscuring header.",
   "Draft input: prompt clicks populate the input field for user review and edit.",
   "Conversation options menu: expandable dropdown menu (#conversation-menu)."
  ],
  "rules": [
   "Meetup prompts insert draft text; messages are NEVER sent automatically without user approval.",
   "Location sharing suggests general venue landmarks ('Near main entrance / lobby'), never exact GPS coordinates.",
   "Header and top banner have adequate clearance and never collide.",
   "Hide Presence conceals live session without closing thread or alerting contact."
  ],
  "components": [
   "Peer header with verified badge and options trigger (.chat-peer, .chat-more-btn).",
   "In-person meetup coordinate banner (.chat-meetup-banner).",
   "Horizontal quick prompts strip (.chat-quick-prompts).",
   "Composer with meetup toggle, text input, and send button (.chat-compose).",
   "Three-dots dropdown menu with safety options (.chat-menu-dropdown)."
  ],
  "motion": [
   "Auto-scroll to latest message upon sending or opening.",
   "Keyboard avoidance resizing composer wrap smoothly.",
   "Options menu slides down with subtle scale and fade."
  ],
  "integration": [
   "End-to-end encrypted or securely authenticated messaging protocol.",
   "Ephemeral presence status attached to meetup coordination."
  ]
 },
 "activity": {
  "code": "04.2",
  "section": "Connections",
  "title": "Notifications feed",
  "summary": "Unified activity feed for connection updates and session notices.",
  "purpose": "Consolidate connection invitations and session status alerts in a single reverse-chronological timeline.",
  "actions": [
   "Filter feed between 'All' and 'Requests'.",
   "Accept or decline incoming requests directly in the activity item.",
   "Tap system notification to jump to relevant target screen (Setup or Edit Profile).",
   "Tap Back to return to previous screen."
  ],
  "states": [
   "All updates tab active: shows both requests and system session notifications.",
   "Requests tab active: filters strictly to incoming connection requests.",
   "Empty state: friendly message when all notifications are resolved."
  ],
  "rules": [
   "Notification time is aligned in a dedicated column, distinct from the title.",
   "Request cards use the identical compact Accept/Decline decision button styling as the Requests screen.",
   "Accept button is transparent with accent outline; Decline button is subtle muted surface.",
   "No device notifications are faked; all items derive from local user actions."
  ],
  "components": [
   "Filter tabs (.activity-tabs).",
   "Activity item card with avatar and event badge (.activity-item).",
   "Aligned top line with title and timestamp (.activity-top-line).",
   "Inline decision actions grid (.activity-actions)."
  ],
  "motion": [
   "Inline decision button click provides immediate feedback and removes card with fade.",
   "Tab filter switch crossfades list without layout stutter."
  ],
  "integration": [
   "Notification inbox synced with remote push notification gateway and APNs/FCM."
  ]
 },
 "myprofile": {
  "code": "05.1",
  "section": "Profile & Privacy",
  "title": "My profile",
  "summary": "Overview of user's own professional identity, credentials, and settings.",
  "purpose": "Show members how their professional profile appears to others and provide access to editing, documents, and privacy controls.",
  "actions": [
   "Inspect personal identity card with calculated Profile Strength percentage.",
   "Tap 'Edit profile' to modify bio, headline, city, skills, experience, and attachments.",
   "Tap Edit shortcut on Experience or Documents sections to jump to respective editors.",
   "Tap 'Privacy & safety' menu item to open Privacy controls (05.3).",
   "Tap top settings icon to open App Settings (05.5)."
  ],
  "states": [
   "Root navigation tab 'Profile'.",
   "Profile strength bar updates dynamically based on actual saved profile fields.",
   "Empty states displayed cleanly for Experience and Documents when none have been added.",
   "Scroll area adheres to 116pt bottom fade extent."
  ],
  "rules": [
   "Displays meaningful empty states when experience or documents are absent, avoiding fake data.",
   "Profile strength reflects real saved fields, distinct from minimum visibility requirements.",
   "Viewing profile never starts nearby visibility.",
   "Photo and real name are hidden from strangers in nearby discovery by default."
  ],
  "components": [
   "Grouped identity card with initials avatar and completion bar (.myprofile-identity-card).",
   "Section headers with inline edit actions (.myprofile-sectionhead).",
   "Skill chip tags display (.myprofile-chips).",
   "Clean empty state placeholders (.peopi-empty-state).",
   "Bottom menu navigation row (.myprofile-menu)."
  ],
  "motion": [
   "Root tab switch crossfade with persistent scroll position.",
   "Completion track bar smoothly animates width based on calculated score."
  ],
  "integration": [
   "User profile record fetched from secure database with local optimistic persistence."
  ]
 },
 "editprofile": {
  "code": "05.2",
  "section": "Profile & Privacy",
  "title": "Edit profile",
  "summary": "Comprehensive editing form for professional identity, experience, and credentials.",
  "purpose": "Allow members to update their profile details, manage role history via bottom sheets, and attach documents with unsaved changes protection.",
  "actions": [
   "Edit Full name, Professional headline, City / area, and About me.",
   "Select Networking intent and optional context goals.",
   "Add skills via interactive chip input (type + Enter / Add button; click × to remove; max 8).",
   "Add or edit past experience roles via dedicated bottom sheet (#exp-sheet).",
   "Attach or manage credentials and documents via dedicated bottom sheet (#doc-sheet).",
   "Tap Save changes to commit updates to local profile.",
   "Tap Back or Discard changes (protected by unsaved changes confirmation modal)."
  ],
  "states": [
   "Form editing state with initial snapshot captured on open.",
   "Unsaved changes guard: back navigation triggers confirmation modal if fields were modified.",
   "Experience bottom sheet (#exp-sheet) slides up for adding/editing roles.",
   "Document bottom sheet (#doc-sheet) slides up for adding/editing attachments."
  ],
  "rules": [
   "Skills input uses interactive chip adder, enforcing maximum 8 skills limit.",
   "Core fields remain in primary scroll flow; complex lists (roles, files) open dedicated sheets.",
   "Unsaved changes must trigger discard confirmation before abandoning edits.",
   "Saving updates My Profile, Profile Strength, and Active Discovery previews simultaneously."
  ],
  "components": [
   "Grouped input surface sections (.editgroup).",
   "Interactive skills chip adder with input (.skills-chip-input-wrap).",
   "Experience row items with edit and delete actions (.edit-exp-item).",
   "Document row items with edit and delete actions (.edit-doc-item).",
   "Floating bottom save CTA with checkmark (.edit-save-bottom)."
  ],
  "motion": [
   "Push transition from Profile screen.",
   "Experience and document bottom sheets slide up with 0.24s spring curve.",
   "Skill chips animate into place upon addition."
  ],
  "integration": [
   "Multipart file upload endpoint for documents and resume attachments.",
   "Validation schemas for input length, character limits, and allowed file formats."
  ]
 },
 "privacy": {
  "code": "05.3",
  "section": "Profile & Privacy",
  "title": "Privacy & safety",
  "summary": "Privacy controls, immutable protections, and safety entry points.",
  "purpose": "Provide clear, transparent visibility controls, distinguishing mutable user preferences from fixed architectural protections.",
  "actions": [
   "Review live visibility status (Invisible by default).",
   "Review immutable protections: Approximate area only (Always on), Timed visibility (Always on).",
   "Manage Hidden connections list.",
   "Toggle Connection requests and Session reminders preferences.",
   "Access Blocked people management (05.3.2).",
   "Access Report a concern interface (05.3.3).",
   "Tap Back to return to My profile."
  ],
  "states": [
   "Compact hero banner displaying current presence state.",
   "Divided into two clean grouped surfaces: Discovery Controls and Interactions & Safety.",
   "Toggles save instantly to local preferences."
  ],
  "rules": [
   "Compact header area ensures controls appear early without excessive scrolling.",
   "Clear separation between mutable preferences and immutable built-in protections.",
   "Hide presence is explicitly distinct from blocking.",
   "Toggles persist immediately upon interaction."
  ],
  "components": [
   "Compact privacy status card (.privacy-status).",
   "Setting row with immutable lock indicator (.privacy-fixed).",
   "Interactive toggle switches (.settings-toggle).",
   "Navigation row items with chevron (.privacy-link)."
  ],
  "motion": [
   "Push transition from Profile screen.",
   "Smooth spring toggle animation on switches."
  ],
  "integration": [
   "Privacy preferences synced with user privacy settings table in database."
  ]
 },
 "hiddenconnections": {
  "code": "05.3.1",
  "section": "Profile & Privacy",
  "title": "Hidden connections",
  "summary": "Granular live presence exclusion management for confirmed connections.",
  "purpose": "Allow members to hide their active nearby presence from specific confirmed connections while keeping connection and messaging intact.",
  "actions": [
   "Search connections by name or role.",
   "Switch between 'All (N)' and 'Hidden (N)' tabs.",
   "Tap the presence icon button on a connection to conceal active sessions from them.",
   "Tap again to restore normal active presence visibility.",
   "Tap Back to return to Privacy & safety."
  ],
  "states": [
   "All tab displays complete network with presence permission status.",
   "Hidden tab filters strictly to connections with presence currently concealed.",
   "Search input filters connection list in real time."
  ],
  "rules": [
   "Hiding presence does NOT block the contact, remove the connection, or clear chat history.",
   "The other contact is NEVER notified that they have been hidden.",
   "Clear status copy used: 'Presence hidden from active discovery' vs 'Active presence visible when discoverable'."
  ],
  "components": [
   "Search box with magnifying glass (.network-search-box).",
   "Filter tabs with numerical badges (.journey-tabs).",
   "Person row with unhide/hide toggle action (.journey-person).",
   "Informational privacy assurance callout (.journey-notice)."
  ],
  "motion": [
   "Instant button label transition with tactile feedback.",
   "Search query filters list smoothly without layout redraws."
  ],
  "integration": [
   "Hidden user IDs maintained in exclusion array checked by presence routing server."
  ]
 },
 "blockedaccounts": {
  "code": "05.3.2",
  "section": "Profile & Privacy",
  "title": "Blocked accounts",
  "summary": "Blocklist management and account unblocking screen.",
  "purpose": "Allow members to review and unblock previously blocked accounts with clear expectations about relationship state.",
  "actions": [
   "Review list of blocked accounts.",
   "Tap 'Unblock' to remove an account from blocklist.",
   "Tap 'Need to report someone?' to open Report screen.",
   "Tap Back to return to Privacy & safety."
  ],
  "states": [
   "List of blocked demo profiles.",
   "Empty state when no accounts are blocked.",
   "Advisory note explaining that unblocking does not automatically restore connections."
  ],
  "rules": [
   "Unblocking an account does NOT automatically restore previous connections or chat history.",
   "Blocked accounts cannot discover, message, or request connection with user.",
   "Blocking is completely separate from selective presence hiding."
  ],
  "components": [
   "Blocked account row item with Unblock CTA (.journey-person).",
   "Empty state container (.journey-empty).",
   "Advisory notice box (.journey-notice)."
  ],
  "motion": [
   "Unblock button dismisses row with smooth inline fade."
  ],
  "integration": [
   "Server-enforced bidirectional block table preventing socket and query interaction."
  ]
 },
 "reportuser": {
  "code": "05.3.3",
  "section": "Profile & Privacy",
  "title": "Report a concern",
  "summary": "Safety reporting preview for flagging disrespectful or unsafe behavior.",
  "purpose": "Provide a responsible safety reporting workflow allowing users to flag safety concerns and optionally block contacts.",
  "actions": [
   "Target member card is displayed directly from active profile/interaction context.",
   "Select a reporting reason (starts unselected with prompt).",
   "Enter optional additional details explaining what happened.",
   "Tap 'Preview report submission' to preview report submission.",
   "Tap 'Block [Member Name]' to block user immediately.",
   "Tap Back to return to previous screen."
  ],
  "states": [
   "Target member card automatically rendered with photo/initial, verified badge, and headline.",
   "Reason dropdown starts unselected with 'Select a reason…' disabled placeholder.",
   "Block button dynamically reflects the active target member's name as an explicit separate action."
  ],
  "rules": [
   "Target is automatically resolved from current profile, connection or conversation context.",
   "Reason select must not start pre-selected; requires explicit user selection.",
   "Reporting and Blocking remain separate actions with independent consequences.",
   "Reports are simulated locally in this prototype; no data leaves the browser."
  ],
  "components": [
   "Target member identity card (.report-target-card).",
   "Reason dropdown with placeholder (.journey-field select).",
   "Multi-line textarea for report context (.journey-field textarea).",
   "Primary preview submit button and secondary quiet block button."
  ],
  "motion": [
   "Standard push transition.",
   "Modal alert confirms report preview or block action."
  ],
  "integration": [
   "Production reports routed to moderation queue with snapshot of recent interaction tokens."
  ]
 },
 "verification": {
  "code": "05.4",
  "section": "Profile & Privacy",
  "title": "Verification",
  "summary": "Optional trust signals and professional account linking.",
  "purpose": "Allow members to build trust through optional signals while maintaining clear distinctions between account linking and identity verification.",
  "actions": [
   "Review verified LinkedIn connection status.",
   "Tap 'Connect LinkedIn' to simulate OAuth linking.",
   "Tap 'Disconnect demo connection' to reset verified state.",
   "Review core trust principles explaining how trust operates on Peopi.",
   "Tap Back to return to My profile."
  ],
  "states": [
   "Unconnected state: shows Connect LinkedIn CTA and unverified indicator.",
   "Connected state: shows LinkedIn blue verified badge with seal icon and Disconnect CTA."
  ],
  "rules": [
   "Screen title is strictly 'Verification' (not renamed to 'Linked accounts').",
   "LinkedIn connection indicates a linked profile signal, NOT certified identity, background, or credential verification.",
   "Verified icon uses LinkedIn blue (#0A66C2) with filled seal check mark (ph-fill ph-seal-check).",
   "Connecting an account never triggers nearby visibility."
  ],
  "components": [
   "Verification hero with blue seal badge (.verify-emblem).",
   "Trust signal card panel with LinkedIn emblem (.verify-panel).",
   "Trust principles feature list (.verify-principles).",
   "Primary connect and secondary disconnect buttons (.verify-primary, .verify-secondary)."
  ],
  "motion": [
   "Push transition from Profile screen.",
   "Badge crossfade on linking/unlinking."
  ],
  "integration": [
   "OAuth 2.0 flow with LinkedIn API for public profile verification in production."
  ]
 },
 "appsettings": {
  "code": "05.5",
  "section": "Profile & Privacy",
  "title": "Settings",
  "summary": "Application preferences, appearance mode, account navigation, and support.",
  "purpose": "Provide a central hub for configuring application preferences, theme appearance, and accessing account tools.",
  "actions": [
   "Navigate to Edit profile, Verification, or Privacy & safety.",
   "Toggle Session reminders and Connection requests switches.",
   "Tap 'Appearance' to cycle between System, Light mode, and Dark mode.",
   "Open Notification preferences (05.5.1).",
   "Access Help & support and About dialogs.",
   "Tap Sign out to view prototype session notice.",
   "Tap Back to return to My profile."
  ],
  "states": [
   "Account header displaying current user avatar, name, and headline.",
   "Appearance control supports three modes: System, Light, and Dark.",
   "Toggles reflect synced state with Privacy preferences."
  ],
  "rules": [
   "Appearance explicitly supports System / Light / Dark options.",
   "Settings adjustments never silently trigger nearby visibility.",
   "Sign out is illustrative and preserves demo local data in this prototype."
  ],
  "components": [
   "Account preview tile (.settings-account).",
   "Grouped settings category containers (.settings-group).",
   "Interactive switches with accessible switch role (.settings-toggle).",
   "Settings row item with icon and chevron (.settings-item)."
  ],
  "motion": [
   "Smooth theme transition on appearance change.",
   "Push transition to nested preference screens."
  ],
  "integration": [
   "App settings synced with cloud user settings record."
  ]
 },
 "notifications": {
  "code": "05.5.1",
  "section": "Profile & Privacy",
  "title": "Notification preferences",
  "summary": "Granular notification category toggles and advisory notices.",
  "purpose": "Allow members to customize which notification categories they receive with instant local persistence.",
  "actions": [
   "Toggle Connection requests notifications.",
   "Toggle New messages notifications.",
   "Toggle Session reminders notifications.",
   "Toggle Product updates notifications.",
   "Tap 'Close' to return to Settings."
  ],
  "states": [
   "List of 4 notification categories with descriptions and interactive switches.",
   "System permission advisory notice banner at top.",
   "Close button at bottom dismissing screen."
  ],
  "rules": [
   "Toggles save immediately upon tap; Close button simply dismisses without implying pending changes.",
   "Device notification permissions advisory clearly states permissions are managed in system settings.",
   "Session reminder toggle remains synchronized with Privacy & safety settings."
  ],
  "components": [
   "Category notification row with description (.journey-person).",
   "Interactive switch toggle (.settings-toggle).",
   "System permissions advisory banner (.journey-notice).",
   "Primary Close button (.journey-primary)."
  ],
  "motion": [
   "Toggle spring switch animation.",
   "Standard push/pop screen transitions."
  ],
  "integration": [
   "Push notification channel preferences synced with backend notification dispatcher."
  ]
 },
 "helpsupport": {
  "code": "05.5.2",
  "section": "Profile & Privacy",
  "title": "Help & support",
  "summary": "Knowledge base, privacy FAQs, and direct member inquiry channel.",
  "purpose": "Provide clear guidance on Peopi's ephemeral discovery model, privacy guarantees, trust & safety principles, and offer responsive support.",
  "actions": [
   "Search help articles and FAQs with live keyword filtering.",
   "Filter FAQs by category: Privacy & presence, Connections & chat, Trust & safety, Profile & identity.",
   "Expand and collapse FAQ accordions for detailed answers.",
   "Tap 'Contact support' to trigger a direct encrypted assistance request.",
   "Tap Back to return to Settings."
  ],
  "states": [
   "Interactive search bar with real-time filtering.",
   "Categorized quick-access tiles with iconography.",
   "Accordion FAQ list covering invisible mode, approximate location, document locking, and confidential reporting.",
   "Direct support inquiry banner with SLA disclosure."
  ],
  "rules": [
   "Help content must accurately reflect Peopi's real privacy mechanisms (no continuous tracking, mutual connection reveals).",
   "Support submission states clearly state expected response times (under 24h).",
   "Searching filters questions dynamically without page reloading or layout shifts."
  ],
  "components": [
   "Search field (.help-search-input).",
   "Category card grid (.help-categories-grid, .help-cat-card).",
   "Accordion FAQ list (.help-faq-list, .help-faq-item, .help-faq-q, .help-faq-a).",
   "Support contact card (.help-contact-card, .help-contact-btn)."
  ],
  "motion": [
   "Smooth accordion height expansion with ease-out curve.",
   "Push/pop navigation with Settings."
  ],
  "integration": [
   "Connected to Zendesk/Intercom support ticketing and knowledge base search API in production."
  ]
 },
 "aboutpeopi": {
  "code": "05.5.3",
  "section": "Profile & Privacy",
  "title": "About Peopi",
  "summary": "Product philosophy, core design pillars, version info, and legal compliance.",
  "purpose": "Articulate Peopi's mission of intentional, consent-driven professional discovery while providing transparent access to legal policies, licenses, and product provenance.",
  "actions": [
   "Inspect product version, build number, and environment information.",
   "Read Peopi's three core pillars: Intentional Visibility, Approximate Proximity, and Mutual Consent.",
   "Review Privacy Policy, Terms of Service, and Open Source Licenses via interactive sheets.",
   "Tap Back to return to Settings."
  ],
  "states": [
   "Brand emblem hero with version tag.",
   "Product philosophy card detailing intentional proximity.",
   "Legal & compliance interactive row list.",
   "Platform and design system specifications card."
  ],
  "rules": [
   "All policy links open clear in-app disclosures rather than leaving the app.",
   "Version numbers reflect actual client build metadata.",
   "Copyright and brand marks strictly adhere to Peopi brand identity."
  ],
  "components": [
   "Hero brand surface (.about-hero-surface, .about-brand-mark).",
   "Grouped informational cards (.about-card, .about-pillars).",
   "Interactive policy rows with icons and chevrons (.about-info-row)."
  ],
  "motion": [
   "Push/pop screen transitions.",
   "Modal presentation for legal terms."
  ],
  "integration": [
   "Dynamic legal version checks from backend policy repository."
  ]
 }
};
