/* Uhired AI — PC clickable demo. Follows Figma file AmwUV9dpNkUxJg5K6qqSwK, page "PC":
   Landing (41:29181) · Start now flow (02, 03, 04, 04b, 05, 07, 08, H01, H02) · Mock interview flow (M01, M02, M02c, M10, M11, M12) */

const ICONS = {
  lock:'M6 11h12v10H6z|M8 11V7a4 4 0 0 1 8 0v4',
  upload:'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4|M17 8l-5-5-5 5|M12 3v12',
  paperclip:'M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48',
  'arrow-up':'M12 19V5M19 12l-7-7-7 7', 'arrow-right':'M5 12h14M12 19l7-7-7-7', 'arrow-left':'M12 19l-7-7 7-7|M19 12H5',
  plus:'M12 5v14M5 12h14', check:'M20 6L9 17l-5-5', x:'M18 6L6 18M6 6l12 12',
  sparkles:'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z|M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z',
  file:'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z|M14 2v6h6|M8 13h8M8 17h5',
  mic:'M15 5a3 3 0 0 0-6 0v6a3 3 0 0 0 6 0z|M5 10a7 7 0 0 0 14 0M12 17v5',
  phone:'M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z|M12 18h.01',
  briefcase:'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z|M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16',
  chat:'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  'chevron-down':'M6 9l6 6 6-6', 'chevron-right':'M9 18l6-6-6-6',
  loader:'M21 12a9 9 0 1 1-6.22-8.56',
  crown:'M2 6l4 10h12l4-10-6 5-4-7-4 7-6-5z|M6 20h12', play:'M7 4l13 8-13 8V4z',
  pin:'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z|M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  edit:'M12 20h9|M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z',
  clock:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z|M12 7v5l3 2',
  lightbulb:'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5a6 6 0 0 0-12 0c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5|M9 18h6|M10 22h4',
  history:'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8|M3 3v5h5|M12 7v5l4 2',
  pause:'M17 4h-2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z|M9 4H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z',
  'trending-up':'M16 7h6v6|M22 7l-8.5 8.5-5-5L2 17',
  target:'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z|M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z|M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  'panel-left':'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z|M9 3v18',
  menu:'M4 6h16M4 12h16M4 18h16',
  volume:'M11 5L6 9H2v6h4l5 4V5z|M15.54 8.46a5 5 0 0 1 0 7.07|M19.07 4.93a10 10 0 0 1 0 14.14',
};
const ic = (n, s = 18, st = '') => `<svg class="i" width="${s}" height="${s}" viewBox="0 0 24 24" style="${st}">${ICONS[n].split('|').map(d => `<path d="${d}"/>`).join('')}</svg>`;
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

/* ---------------- data (from the board) ---------------- */
const MOCK_QS = [
  ['Tell me about a time you calmed down an angry customer.', 'Behavioral'],
  ['How do you keep handle time low without rushing the caller?', 'Situational'],
  ['Walk me through how you log and escalate a ticket in Zendesk.', 'Technical'],
  ['Why do you want to work in a BPO, and why Atlas CX?', 'Motivation'],
  ['A caller asks for a refund you can’t give. What do you say?', 'Situational'],
];
const PRACTICE_QS = [
  ['Q2', 'How do you keep handle time low without rushing the caller?', 'Situational'],
  ['Q3', 'Walk me through how you log and escalate a ticket in Zendesk.', 'Technical'],
  ['Q4', 'Why do you want to work night shift for a US account?', 'Behavioral'],
  ['Q5', 'A customer asks for something against policy. What do you say?', 'Situational'],
];
const PRO_FEATS = [
  ['mic', 'Unlimited mock interviews', 'Finish this one, then practice for any role, anytime'],
  ['briefcase', 'Open role recommendations', 'New matches picked from your resume and chats'],
  ['chat', 'Unlimited chat', 'Ask your coach anything, with no daily limit'],
  ['phone', 'Live help in real interviews', 'Answer prompts during the call, in the Uhired app'],
];

/* ---------------- state ---------------- */
const S = {
  view: 'landing',          // landing | chat | mock | results
  plan: 'free',             // free | pro
  stage: 'welcome',         // welcome | reading | results | inline | after   (BPO coach)
  readStep: 2,              // 03 progress: index of running step
  bot: 'bpo', hasVA: false,
  panel: null,              // null | practice | history
  modal: null,              // null | newbot
  collapsed: false,
  newbot: { name: 'VA coach', resume: 0, where: 'Remote · Philippines' },
  practiceTab: 0,
  mock: { phase: 'ready', t: 0, q: 0, qt: 0, hints: true, micHints: true, pro: false },
};
let timers = [];
const later = (fn, ms) => timers.push(setTimeout(fn, ms));
const clearTimers = () => { timers.forEach(clearTimeout); timers = []; clearInterval(S._tick); clearInterval(S._rv); };

function go(patch) { Object.assign(S, patch); render(); }

/* ---------------- shared pieces ---------------- */
const btn = (label, cls = 'primary', act = '', extra = '') => `<button class="btn ${cls}" ${act ? `data-act="${act}"` : ''} ${extra}>${label}</button>`;
const botAv = () => `<div class="bot-av">${ic('sparkles', 18)}</div>`;
const botMsg = t => `<div class="botmsg">${botAv()}<div class="msg grow">${t}</div></div>`;

function sidebar() {
  const pro = S.plan === 'pro';
  const bots = [];
  if (S.hasVA) bots.push({ id: 'va', letter: 'V', name: 'VA coach', sub: 'Building Q&A…' });
  if (S.stage === 'welcome') bots.push({ id: 'bpo', letter: '+', name: 'New bot', sub: 'Waiting for your resume' });
  else bots.push({ id: 'bpo', letter: 'B', name: 'BPO coach', sub: S.stage === 'reading' ? 'Analyzing resume…' : 'Customer Service · 12 Q&A' });
  if (S.collapsed) {
    return `<aside class="sidebar collapsed">
      <div class="mark" style="margin-bottom:12px">U</div>
      <button class="icon-btn" data-act="expand" title="Expand sidebar" style="margin-bottom:12px">${ic('panel-left', 18)}</button>
      <button class="sbc-sq sbc-new" data-act="newbot" title="New bot">${ic('plus', 18)}</button>
      <div class="sbc-div"></div>
      ${bots.map(b => `<div class="sbc-bot ${S.bot === b.id ? 'on' : ''}" data-bot="${b.id}" title="${b.name}"><div class="bbadge li ${b.id === 'bpo' && S.hasVA ? 'alt' : ''}" style="${S.bot !== b.id ? 'background:#fff;border:1px solid var(--border);color:var(--primary)' : ''}">${b.letter}</div></div>`).join('')}
      <div style="flex:1"></div>
      ${pro ? '' : `<button class="sbc-sq" style="background:var(--primary-soft);margin-bottom:12px" data-act="mock" title="Try a mock interview">${ic('crown', 18)}</button>`}
      <div class="avatar lbg">MS</div>
    </aside>`;
  }
  return `<aside class="sidebar">
    <div class="sb-logo"><div class="lg"><div class="mark">U</div><span class="logo">Uhired AI</span></div><div class="grow"></div>
      <button class="icon-btn" data-act="collapse" title="Collapse sidebar">${ic('panel-left', 18)}</button></div>
    <button class="newbot lb" data-act="newbot">${ic('plus', 18)}New bot</button>
    <div class="sb-label le">Your bots</div>
    ${bots.map(b => `<div class="botitem ${S.bot === b.id ? 'on' : ''}" data-bot="${b.id}">
        <div class="bbadge li ${S.bot !== b.id ? 'alt' : ''}">${b.letter}</div>
        <div class="col grow"><span class="h4">${b.name}</span><span class="bs muted">${b.sub}</span></div></div>`).join('')}
    <div style="flex:1"></div>
    ${pro ? '' : `<div class="promo"><div class="row" style="gap:8px">${ic('crown', 18)}<span class="h4">Try a mock interview</span></div>
      <span class="bs body">Practice live with an AI interviewer. The first 30 seconds are free.</span>
      <div class="lnk lb" data-act="mock">Start free trial ${ic('arrow-right', 16)}</div></div>`}
    <div class="user"><div class="avatar lbg">MS</div><div class="col"><span class="h4">Maria Santos</span><span class="bs muted">${pro ? 'Pro plan' : 'Free plan'}</span></div></div>
  </aside>`;
}

function chatHeader() {
  let name = 'BPO coach', tag = 'Customer Service';
  if (S.bot === 'va') { name = 'VA coach'; tag = 'Virtual Assistant'; }
  else if (S.stage === 'welcome') { name = 'New bot'; tag = 'Getting started'; }
  return `<div class="chat-header"><span class="h3">${name}</span><span class="tag lbg">${tag}</span><div class="grow"></div>
    ${S.panel ? '' : `<span class="getapp ln">${ic('phone', 18)}Get the app</span>`}
    ${btn('Start mock interview', 'dark sm', 'mock')}</div>`;
}

function composer(tray = '') {
  return `<div class="composer-area">${tray}
    <div class="composer"><div class="cinput">${ic('paperclip', 20)}<input placeholder="Tell Uhired about your target role…">${ic('mic', 20)}<button class="send">${ic('arrow-up', 18)}</button></div>
    <span class="bs muted">Uhired can make mistakes. Review answers before your interview.</span></div></div>`;
}

const userUpload = () => `<div class="usermsgs">
  <div class="fileatt"><div class="ib">${ic('file', 18)}</div><div class="col"><span class="h4">Maria_Santos_Resume.pdf</span><span class="bs muted">PDF · 182 KB</span></div></div>
  <div class="bubble bd">Here's my resume. I'm aiming for BPO customer service roles in Metro Manila.</div></div>`;

function progressCard(steps, running, fill) {
  return `<div class="indent"><div class="pcard">${steps.map((s, i) => {
    const st = i < running ? 'done' : i === running ? 'run' : 'todo';
    return `<div class="pstep"><div class="pst ${st}">${st === 'done' ? ic('check', 14) : st === 'run' ? ic('loader', 14) : ''}</div>
      <div class="col" style="gap:2px"><span class="h4 ${st === 'todo' ? 'muted' : ''}">${s[0]}</span><span class="bs muted">${s[1]}</span></div></div>`;
  }).join('')}<div class="pbar"><i style="width:${fill}%"></i></div></div></div>`;
}

const nextSteps = () => `<div class="indent nextsteps">
  <div class="mockcard"><div class="ib">${ic('play', 20)}</div><div class="col grow" style="gap:2px"><span class="h4 white">Mock interview</span><span class="bs" style="color:var(--on-dark-muted)">Practice these 12 questions live</span><span class="lc" style="color:var(--primary-light)">${S.plan === 'pro' ? 'Unlimited with Pro · 10 min' : 'Free 30-second preview'}</span></div>${btn('Start', 'light sm', 'mock')}</div>
  <div class="appcard"><div class="qr">${qrSvg()}</div><div class="col" style="gap:2px"><span class="h4">Get the Uhired app</span><span class="bs muted">Live help in real interviews</span><span class="lbg pri row" style="gap:4px;padding-top:4px">Download for iOS ${ic('arrow-right', 14)}</span></div></div></div>`;

function qrSvg() {
  let r = ''; const seed = [0x7f, 0x41, 0x5d, 0x5d, 0x5d, 0x41, 0x7f];
  for (let y = 0; y < 21; y++) for (let x = 0; x < 21; x++) {
    let on;
    const fin = (fx, fy) => x >= fx && x < fx + 7 && y >= fy && y < fy + 7 ? ((seed[y - fy] >> (6 - (x - fx))) & 1) : null;
    on = fin(0, 0) ?? fin(14, 0) ?? fin(0, 14) ?? (((x * 7 + y * 13 + x * y) % 5) < 2 ? 1 : 0);
    if (on) r += `<rect x="${x}" y="${y}" width="1" height="1"/>`;
  }
  return `<svg width="46" height="46" viewBox="0 0 21 21" fill="#171b20">${r}</svg>`;
}

function tray(history) { // history: false | '4 sessions' | '1 session'
  return `<div class="tray">
    <span class="pchip ${S.panel === 'practice' ? 'on' : ''}" data-act="practice">${ic('chat', 16)}<span class="lbg">Interview practice</span><span class="lc muted meta hide-narrow">12 questions</span>${ic('chevron-right', 14, '', 'chev')}</span>
    <span class="pchip ${S.panel === 'roles' ? 'on' : ''}" data-act="roles">${ic('briefcase', 16)}<span class="lbg">Open roles</span><span class="lc muted meta hide-narrow">18 matches</span>${ic('chevron-right', 14)}</span>
    ${history ? `<span class="pchip ${S.panel === 'history' ? 'on' : ''}" data-act="history">${ic('history', 16)}<span class="lbg">Mock history</span><span class="lc muted meta hide-narrow">${history}</span>${S.seenHistory ? '' : '<i class="newdot"></i>'}${ic('chevron-right', 14)}</span>` : ''}
  </div>`;
}
/* 05 / 05b: the chat collapses to two cards while a side panel is open */
const collapsedCards = () => `${botMsg("Done! Your 4 years in customer support stand out. Here's what I built for you:")}
  <div class="indent col" style="gap:12px">
    <div class="ccard ${S.panel === 'practice' ? 'on' : ''}" data-act="practice"><div class="ib">${ic('chat', 18)}</div><div class="col grow" style="gap:2px"><span class="h4">Interview practice</span><span class="bs muted">12 questions · in your voice</span></div><span class="lbg ${S.panel === 'practice' ? 'pri' : 'muted'}">${S.panel === 'practice' ? 'Open' : 'View'}</span></div>
    <div class="ccard ${S.panel === 'roles' ? 'on' : ''}" data-act="roles"><div class="ib">${ic('briefcase', 18)}</div><div class="col grow" style="gap:2px"><span class="h4">Open roles for you</span><span class="bs muted">18 matches in Metro Manila</span></div><span class="lbg ${S.panel === 'roles' ? 'pri' : 'muted'}">${S.panel === 'roles' ? 'Open' : 'View'}</span></div></div>`;

/* ---------------- chat screens ---------------- */
const resultCards = () => `<div class="indent row" style="gap:16px;align-items:stretch">
        <div class="rcard2"><div class="rhead"><div class="ib">${ic('chat', 20)}</div><div class="col"><span class="h3">Interview practice</span><span class="bs muted">12 questions · answers written in your voice</span></div></div>
          <div>${MOCK_QS.slice(0, 3).map((q, i) => `<div class="qrow click" data-act="practice"><div class="qnum lbg">Q${i + 1}</div><div class="col grow" style="gap:4px"><span class="h4">${q[0]}</span><span class="bs muted">${['Behavioral', 'Situational', 'Technical'][i]}</span></div>${ic('chevron-right', 18, 'color:var(--text-muted)')}</div>`).join('')}</div>
          <div style="flex:1"></div><div>${btn('Open practice set', 'primary', 'practice')}</div></div>
        <div class="rcard2"><div class="rhead"><div class="ib">${ic('briefcase', 20)}</div><div class="col"><span class="h3">Open roles for you</span><span class="bs muted">18 matches in Metro Manila · updated today</span></div></div>
          <div>${[['A', 'var(--ink)', 'Customer Service Representative', 'Atlas CX · Taguig · ₱26–32k/mo', 94], ['N', 'var(--primary)', 'Technical Support Associate', 'Northwind Connect · Pasig · ₱28–35k/mo', 89], ['B', 'var(--primary-light)', 'Chat Support Specialist', 'BrightCall · Remote · ₱24–30k/mo', 86]].map(r => `<div class="qrow" style="align-items:center"><div class="rlogo li" style="background:${r[1]}">${r[0]}</div><div class="col grow" style="gap:2px"><span class="h4">${r[2]}</span><span class="bs muted" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r[3]}</span></div><span class="match lbg">${r[4]}% match</span></div>`).join('')}</div>
          <div style="flex:1"></div><div>${btn('See all 18 roles', 'sec', 'roles')}</div></div>
      </div>`;
function chatBody() {
  if (S.bot === 'va') {
    return `<div class="conv">${botMsg("Your VA coach is ready. I'll reuse your resume from BPO coach and focus on Virtual Assistant roles — remote work, client communication and managing your own schedule.")}
      ${botMsg('Writing Virtual Assistant questions in your voice and looking for remote roles…')}
      ${progressCard([['Read your experience', 'Reusing your resume from BPO coach'], ['Matched your skills', 'Email & chat support, scheduling, Google Workspace'], ['Writing interview questions in your voice', 'Remote work, client updates, time management'], ['Finding remote VA roles', 'Remote · Philippines']], 2, 58)}</div>${composer()}`;
  }
  const hi = botMsg("Hi, I'm Uhired. I'm here to help you find the right job, prepare for your interviews, and get hired. First, let me get to know you.");
  if (S.stage === 'welcome') {
    return `<div class="conv">${hi}
      <div class="indent"><div class="dropzone" data-act="upload"><div class="ib">${ic('upload', 24)}</div><span class="h3l">Drop your resume here</span><span class="bc muted">PDF or DOCX · up to 10 MB · stays private to you</span><div style="height:12px"></div>${btn('Choose file', 'primary', 'upload')}</div>
      <div class="chips">${['Paste resume text', "I don't have a resume yet", 'What can you do?'].map(t => `<span class="chip ln">${ic('plus', 14)}${t}</span>`).join('')}</div></div>
    </div>${composer()}`;
  }
  if (S.stage === 'reading') {
    const steps = [['Read your experience', '3 roles · 4 years in customer support'], ['Matched your skills', 'De-escalation, Zendesk, email & chat support, QA scores'], ['Writing interview questions in your voice', 'Behavioral, situational and technical'], ['Finding open roles near you', 'Metro Manila · onsite & hybrid']];
    return `<div class="conv">${hi}${userUpload()}${botMsg('Got it, Maria. Reading your resume now. This takes about 20 seconds.')}${progressCard(steps, S.readStep, [20, 40, 58, 82, 100][S.readStep])}</div>${composer()}`;
  }
  if ((S.panel === 'practice' || S.panel === 'roles') && S.stage !== 'after') {
    return `<div class="conv">${collapsedCards()}</div>${composer(tray(S.stage === 'unfinished' ? '1 session' : false))}`;
  }
  if (S.stage === 'unfinished') { // 04c — ended early or after the 30s preview
    const m = S.mock;
    return `<div class="conv">${S.panel ? '' : userUpload() + botMsg("Done! Your 4 years in customer support stand out — especially your de-escalation and QA scores. Here's what I built for you. Both are also pinned above the message box.") + resultCards()}
      ${botMsg('You ended your mock interview early, so I saved it as Unfinished. Pick up right where you stopped whenever you’re ready. Results and advice come after all 5 questions.')}
      <div class="indent"><div class="ufcard"><div class="ib">${ic('history', 20)}</div>
        <div class="col grow" style="gap:2px"><div class="row" style="gap:8px"><span class="h4">Mock interview · Atlas CX</span><span class="stag lbg" style="background:var(--warning-soft);color:var(--warning)">Unfinished</span></div>
          <span class="bs muted">Customer Service Rep. · 1 of 5 answered · saved at ${fmt(m.t).slice(1)}</span></div>
        ${btn('Resume', 'dark sm', 'resume-saved')}</div></div>
    </div>${composer(tray('1 session'))}`;
  }
  if (S.stage === 'inline') {
    return `<div class="conv">${userUpload()}${botMsg("Done! Your 4 years in customer support stand out — especially your de-escalation and QA scores. Here's what I built for you:")}
      ${resultCards()}
      ${botMsg("Want sharper answers and better matches? Tell me a bit more about what you're aiming for — every detail makes your Q&A and role list more personal.")}${nextSteps()}</div>${composer()}`;
  }
  const done = botMsg("Done! Your 4 years in customer support stand out — especially your de-escalation and QA scores. Here's what I built for you. Both are also pinned above the message box.") + resultCards();
  if (S.stage === 'results') {
    return `<div class="conv">${userUpload()}${done}${botMsg("Want sharper answers and better matches? Tell me a bit more about what you're aiming for — every detail makes your Q&A and role list more personal.")}${nextSteps()}</div>${composer(tray(false))}`;
  }
  // after (H01 / H02)
  return `<div class="conv">${S.panel ? '' : userUpload() + done}
    <div class="daydiv lc"><i></i>Today<i></i></div>
    ${botMsg('Mock interview done. You scored 7.6, up from 6.8 last time, and your openings got much sharper. Your answers, scores and advice are saved in Mock history, pinned below.')}
    <div class="indent"><div class="resultcard" data-act="results">
      <div class="ring" style="width:56px;height:56px;--p:76;--w:5px"><div><span class="h3">7.6</span></div></div>
      <div class="col grow" style="gap:2px"><div class="row" style="gap:8px"><span class="h4">Mock interview · Atlas CX</span><span class="dpill lbg">${ic('trending-up', 12)}+0.8</span></div>
        <span class="lc muted">${S.panel ? 'Customer Service Rep.' : 'Customer Service Representative'} · 5 questions · 11:42</span></div>
      ${S.panel ? '' : `<div style="width:24px"></div>${btn('View results', 'sec sm', 'results')}`}</div></div>
  </div>${composer(tray('4 sessions'))}`;
}

function practicePanel() {
  const star = [['Situation', 'At Atlas CX, a caller was furious because his refund had been delayed twice and he threatened to cancel his plan.'], ['Task', 'I needed to calm him down, fix the refund, and keep him as a customer — within our 8-minute handle-time target.'], ['Action', 'I let him finish, apologized for the delay, and repeated the issue back so he knew I understood. Then I escalated the refund in Zendesk and stayed on the line until it was approved.'], ['Result', 'He stayed with us and rated the call 5/5. That month my CSAT was 96%, the highest on my team.']];
  return `<section class="panel">
    <div class="panel-h"><div class="col grow" style="gap:2px"><span class="h3l">Interview practice</span><span class="bs muted">BPO coach · 12 questions · answers in your voice</span></div><button class="icon-btn" data-act="close-panel">${ic('x', 20)}</button></div>
    <div class="tabs">${['All 12', 'Behavioral 5', 'Situational 4', 'Technical 3'].map((t, i) => `<button class="${S.practiceTab === i ? 'on' : ''}" data-tab="${i}">${t}</button>`).join('')}</div>
    <div class="panel-b"><div class="qexp">
      <div class="row" style="gap:8px"><span class="mtag lbg" style="background:var(--primary);color:#fff">Q1</span><span class="mtag lbg" style="background:var(--primary-soft);color:var(--primary)">Behavioral</span><span class="mtag lbg muted" style="background:#fff">Asked in 8 of 10 BPO interviews</span></div>
      <span class="h3l">Tell me about a time you calmed down an angry customer.</span>
      <div class="row pri" style="gap:6px">${ic('sparkles', 16)}<span class="le">Suggested answer · in your voice</span></div>
      ${star.map(s => `<div class="star"><span class="k lbg">${s[0]}</span><span class="bd body">${s[1]}</span></div>`).join('')}
      <div class="tip bs">Coach tip: end with a number. Interviewers remember "96% CSAT" more than "the customer was happy".</div>
      <div class="row" style="gap:10px">${btn('Practice aloud', 'primary', 'mock')}${btn('Regenerate', 'sec')}<span class="row ln body" style="gap:6px;padding-left:6px;cursor:pointer">${ic('edit', 16)}Edit answer</span></div></div>
      <div style="padding-top:8px">${PRACTICE_QS.map(q => `<div class="qrow" style="align-items:center"><div class="qnum lbg">${q[0]}</div><div class="col grow" style="gap:4px"><span class="h4">${q[1]}</span><span class="bs muted">${q[2]}</span></div>${ic('chevron-right', 18, 'color:var(--text-muted)')}</div>`).join('')}</div></div>
    <div class="dark-foot"><div class="col grow" style="gap:2px"><span class="h4 white">Ready to say it out loud?</span><span class="bs" style="color:var(--on-dark-muted)">${S.plan === 'pro' ? 'Run these questions in a mock interview.' : 'Run these questions in a mock interview — the first 30 seconds are free.'}</span></div>${btn('Start mock', 'light', 'mock')}</div>
  </section>`;
}

function historyPanel() {
  const sess = [
    { s: '7.6', tone: 'success', title: 'Atlas CX · Customer Service Rep.', tag: 'Latest', meta: 'Today, 3:40 PM · 5 questions · 11:42', focus: 'Focus: open with a one-line summary', act: 'results' },
    { s: '6.8', tone: 'primary', title: 'Atlas CX · Customer Service Rep.', meta: 'Nov 7, 8:15 PM · 5 questions · 10:58', focus: 'Focus: add numbers to your results', act: 'results' },
    { s: null, title: 'Teleperformance · Chat Support', meta: 'Nov 5, 9:30 PM · stopped at Q2 of 5', focus: 'No results yet. Finish it to get your score and advice.' },
    { s: '6.1', tone: 'warning', title: 'Concentrix · Technical Support', meta: 'Nov 3, 9:02 PM · 5 questions · 12:20', focus: 'Focus: slow down on the “why BPO” answer', act: 'results' },
  ];
  return `<section class="panel">
    <div class="panel-h"><div class="col grow" style="gap:2px"><span class="h3l">Mock history</span><span class="bs muted">BPO coach · 4 sessions · built from this chat</span></div><button class="icon-btn" data-act="close-panel">${ic('x', 20)}</button></div>
    <div class="panel-b" style="padding-top:8px;display:flex;flex-direction:column;gap:16px">
      <div class="hprog"><div class="row" style="gap:16px">
        <div class="col grow" style="gap:6px"><span class="le pri">Your progress</span><div class="row" style="gap:6px;align-items:baseline"><span class="h2">7.6</span><span class="lc muted">/ 10 latest</span></div>
          <span><span class="dpill lbg">${ic('trending-up', 12)}+1.5 since your first mock</span></span></div>
        <div class="bars">${[['Nov 3', 6.1], ['Nov 7', 6.8], ['Today', 7.6]].map((b, i) => `<div class="b"><span class="lbg ${i === 2 ? 'pri' : 'muted'}">${b[1].toFixed(1)}</span><i style="height:${Math.round(b[1] * 12)}px;background:var(--${i === 2 ? 'primary' : 'primary-light'})"></i><span class="lc ${i === 2 ? '' : 'muted'}">${b[0]}</span></div>`).join('')}</div></div>
        <div style="height:1px;background:var(--border)"></div>
        <div class="row" style="gap:12px">${[['target', 'Strongest', 'Relevance to the role · 85', 'success'], ['lightbulb', 'Work on next', 'Confidence · 64', 'warning']].map(x => `<div class="row grow" style="gap:10px"><div class="ico-tile" style="width:32px;height:32px;border-radius:10px;background:var(--${x[3]}-soft);color:var(--${x[3]})">${ic(x[0], 16)}</div><div class="col"><span class="lc muted">${x[1]}</span><span class="ln">${x[2]}</span></div></div>`).join('')}</div></div>
      <div class="row" style="padding-top:4px"><span class="h4 grow">Sessions</span></div>
      <div class="col" style="gap:10px">${sess.map(x => `<div class="sess ${x.tag ? 'latest' : ''}" ${x.act ? `data-act="${x.act}"` : ''}>
        <div class="sbadge" style="${x.s ? `background:var(--${x.tone}-soft);color:var(--${x.tone})` : 'background:var(--bg-page);border:1px solid var(--border);color:var(--text-muted)'}">${x.s ? `<span class="h3">${x.s}</span>` : ic('pause', 18)}</div>
        <div class="col grow" style="gap:3px"><div class="row" style="gap:8px"><span class="h4">${x.title}</span>${x.tag ? `<span class="stag lt" style="background:var(--primary-soft);color:var(--primary)">${x.tag}</span>` : ''}${x.s ? '' : '<span class="stag lt" style="background:var(--warning-soft);color:var(--warning)">Unfinished</span>'}</div>
          <span class="lc muted">${x.meta}</span><span class="row bs ${x.s ? 'body' : 'muted'}" style="gap:6px;padding-top:3px">${x.s ? ic('lightbulb', 13) : ''}${x.focus}</span></div>
        ${x.s ? ic('chevron-right', 16, 'color:var(--text-muted)') : btn('Resume', 'sec sm', 'resume')}</div>`).join('')}</div>
    </div>
  </section>`;
}

/* 05b — Open roles side panel */
const ROLES = [
  ['A', 'var(--ink)', 'Customer Service Representative', 'Atlas CX · Taguig · ₱26–32k/mo', 94, ['Night shift', 'On-site', 'Posted 2 days ago'], 'Your 4 years of phone support and Zendesk use'],
  ['N', 'var(--primary)', 'Technical Support Associate', 'Northwind Connect · Pasig · ₱28–35k/mo', 89, ['Night shift', 'Hybrid', 'Posted 5 days ago'], 'Your ticket escalation stories fit tier-1 tech support'],
  ['B', 'var(--primary-light)', 'Chat Support Specialist', 'BrightCall · Remote · ₱24–30k/mo', 86, ['Day shift', 'Remote', 'Posted 1 week ago'], 'Chat and email support from your last role'],
];
function rolesPanel() {
  return `<section class="panel">
    <div class="panel-h"><div class="col grow" style="gap:2px"><span class="h3l">Open roles</span><span class="bs muted">BPO coach · 18 matches from your resume · Metro Manila</span></div><button class="icon-btn" data-act="close-panel">${ic('x', 20)}</button></div>
    <div class="tabs">${['All 18', 'Night shift 11', 'Hybrid or remote 6', 'Entry level 7'].map((t, i) => `<button class="${(S.rolesTab || 0) === i ? 'on' : ''}" data-rtab="${i}">${t}</button>`).join('')}</div>
    <div class="panel-b col" style="gap:12px">${ROLES.map(r => `<div class="rolecard">
        <div class="rrow"><div class="rlogo li" style="background:${r[1]}">${r[0]}</div><div class="col grow" style="gap:2px"><span class="h4">${r[2]}</span><span class="bc muted">${r[3]}</span></div><span class="match lbg">${r[4]}% match</span></div>
        <div class="row" style="gap:6px">${r[5].map(t => `<span class="rtag lc body">${t}</span>`).join('')}</div>
        <div class="row bs muted" style="gap:6px"><span class="pri">${ic('target', 14)}</span>Why it fits: ${r[6]}</div>
        <div class="row" style="gap:16px">${btn('Mock for this role', 'sec sm', 'mock')}<span class="row lb pri" style="gap:4px;cursor:pointer">View job ${ic('arrow-right', 14)}</span></div></div>`).join('')}
      ${btn('Show 15 more roles', 'sec full')}</div>
    <div class="dark-foot"><div class="col grow" style="gap:2px"><span class="h4 white">Interview coming up?</span><span class="bs" style="color:var(--on-dark-muted)">Run a mock built for the role and company.</span></div>${btn('Start mock', 'light', 'mock')}</div>
  </section>`;
}

function newBotModal() {
  const nb = S.newbot;
  const opt = (i, icon, t, s) => `<div class="ropt ${nb.resume === i ? 'on' : ''}" data-resume="${i}"><span class="radio"></span>${ic(icon, 18, 'color:var(--primary)')}<div class="col grow" style="gap:2px"><span class="h4">${t}</span><span class="bs muted">${s}</span></div></div>`;
  return `<div class="scrim" data-act="close-modal"><div class="modal" style="width:600px" data-stop>
    <button class="mclose" style="background:none" data-act="close-modal">${ic('x', 22)}</button>
    <div class="col" style="gap:6px;padding-right:40px"><span class="h3l">Create a new bot</span><span class="bc muted">Each bot coaches you for one target role — with its own Q&A, mock interviews and job matches.</span></div>
    <div class="field"><span class="h4">Bot name</span><label class="inp"><input id="nb-name" value="${esc(nb.name)}"></label></div>
    <div class="field"><span class="h4">Resume</span>${opt(0, 'file', 'Use Maria_Santos_Resume.pdf', 'From your BPO coach · uploaded 2 days ago')}${opt(1, 'upload', 'Upload a different resume', 'Tailored resumes give sharper answers')}</div>
    <div class="field"><span class="h4">Where do you want to work?</span><label class="inp">${ic('pin', 18, 'color:var(--text-muted)')}<input id="nb-where" value="${esc(nb.where)}"></label></div>
    ${S.plan === 'pro' ? '' : `<div class="row tip" style="gap:10px">${ic('crown', 18, 'color:var(--primary)')}<span class="bs">Free plan: 2 bots. Pro unlocks unlimited bots and mock interviews.</span></div>`}
    <div class="row" style="gap:10px;justify-content:flex-end">${btn('Cancel', 'sec', 'close-modal')}${btn('Create bot', 'primary', 'create-bot')}</div>
  </div></div>`;
}

function chatView() {
  const panel = S.panel === 'practice' ? practicePanel() : S.panel === 'history' ? historyPanel() : S.panel === 'roles' ? rolesPanel() : '';
  return `<div class="app">${sidebar()}<div class="main ${panel ? 'panel-open' : ''}">${chatHeader()}${chatBody()}</div>${panel}${S.modal === 'newbot' ? newBotModal() : ''}</div>`;
}

/* ---------------- mock interview ---------------- */
const fmt = t => `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
const Q_AUTO = 35; // AI moves on to the next question after ~35s of answering (demo pacing)
const hintFor = q => REVIEW[q].hint.replace(/\[\[|\]\]/g, '');
function topbar(right, back = 'back-chat', backLabel = 'BPO coach', title = 'Mock interview') {
  return `<div class="topbar"><button class="back ln" data-act="${back}">${ic('arrow-left', 18)}${backLabel}</button><div class="vdiv"></div>
    <div class="row" style="gap:10px"><span class="h4">${title}</span><span class="lc muted">Customer Service Representative · Atlas CX</span></div><div class="grow"></div>${right}</div>`;
}
const proPill = () => `<span class="pill lbg" style="background:var(--primary-soft);color:var(--primary)">${ic('sparkles', 14)}Pro</span>`;

function mockReady() {
  const pro = S.plan === 'pro';
  return `<div class="mock">${topbar(pro ? proPill() : `<span class="pill lbg" style="background:var(--primary-soft);color:var(--primary)">${ic('sparkles', 14)}Free preview · 30 sec</span>`)}
  <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px 40px"><div class="ready">
    <div class="col" style="gap:8px"><div class="ico-tile" style="width:56px;height:56px;border-radius:16px;background:var(--grad-bot);color:#fff;margin-bottom:8px">${ic('mic', 26)}</div>
      <span class="hq">Ready for your mock interview?</span>
      <span class="bd body">Your AI interviewer asks what a recruiter at Atlas CX would, based on this chat and your practice set. Just answer out loud. You’ll get your results and advice at the end.</span></div>
    <div class="col" style="gap:10px">${[['chat', 'Questions come from this chat and your practice set'], ['clock', '5 questions with follow-ups · about 10 minutes'], ['sparkles', 'Results and advice for every answer at the end']].map(r => `<div class="hrow"><div class="ib">${ic(r[0], 16)}</div><span class="bc">${r[1]}</span></div>`).join('')}</div>
    <div class="col" style="gap:10px;padding:14px 16px;border-radius:16px;background:var(--primary-soft)"><span class="row lbg pri" style="gap:6px">${ic('sparkles', 14)}Tailored with what you told me</span>
      <div class="row" style="gap:6px;flex-wrap:wrap">${[['briefcase', 'Customer Service Rep · Atlas CX'], ['pin', 'Metro Manila'], ['file', '4 yrs support · resume'], ['chat', 'Practice set · 12 Q&A']].map(c => `<span class="ctxchip lc">${ic(c[0], 13)}${c[1]}</span>`).join('')}</div></div>
    <div class="miccheck"><div class="ico-tile" style="width:40px;height:40px;border-radius:20px;background:var(--success-soft);color:var(--success)">${ic('mic', 18)}</div>
      <div class="col grow" style="gap:2px"><span class="lc muted">Microphone</span><span class="row ln" style="gap:4px">MacBook Pro Microphone ${ic('chevron-down', 16, 'color:var(--text-muted)')}</span></div>
      <div class="col" style="gap:6px;align-items:center"><div class="lvl">${[8, 12, 16, 20, 14, 18, 10].map((h, i) => `<i style="height:${h}px;animation-delay:${-i * .13}s"></i>`).join('')}${'<i class="off" style="height:6px"></i>'.repeat(5)}</div><span class="lc" style="color:var(--success)">Sounds good</span></div></div>
    <div class="row" style="gap:16px"><span class="ln grow">Answer hints</span><span class="sw lg ${S.mock.hints ? 'on' : ''}" data-act="hints"><i></i></span></div>
    ${btn('Start interview', 'primary full', 'start')}
    ${pro ? '' : '<span class="lc muted" style="text-align:center">The first 30 seconds are free. Continue with Pro to finish and see your results.</span>'}
  </div></div></div>`;
}

function mockLive() {
  const m = S.mock, pro = S.plan === 'pro';
  const paused = m.phase === 'paused';
  const ended = m.phase === 'paywall';
  let pills = '';
  if (ended) pills = `<span class="pill lbg" style="background:var(--warning-soft);color:var(--warning)">${ic('sparkles', 14)}Free preview ended</span>`;
  else if (pro) pills = proPill();
  else pills = `<span class="pill lbg" style="background:var(--primary-soft);color:var(--primary)">${ic('sparkles', 14)}Free trial</span>`;
  const timer = paused ? `<span class="pill lbg" style="background:var(--warning-soft);color:var(--warning)">${ic('clock', 14)}Paused · <span id="tm">${fmt(m.t)}</span></span>`
    : `<span class="pill lbg" style="background:var(--bg-page)">${ic('clock', 14)}<span id="tm">${fmt(m.t)}</span></span>`;
  const waveH = [10, 18, 28, 16, 34, 22, 12, 26, 14];
  const q = m.q || 0, Q = MOCK_QS[q];
  return `<div class="mock">${topbar(`${pills}${timer}${btn('End interview', 'sec sm', 'end')}`, ended ? 'end-save' : 'back-mock')}
  <div class="row" style="flex:1;align-items:stretch;min-height:0">
    <aside class="rail"><div class="row"><span class="h4 grow">Questions</span><span class="lc muted">${q + 1} of 5</span></div>
      <div class="segs">${MOCK_QS.map((_, i) => `<i class="${i <= q ? 'on' : ''}"></i>`).join('')}</div>
      <div class="col" style="gap:4px">${MOCK_QS.map((x, i) => `<div class="rq ${i === q ? 'on' : i < q ? 'done' : ''}"><div class="n lbg">${i < q ? ic('check', 14) : i + 1}</div><div class="col grow" style="gap:2px"><span class="bc t ${i > q ? 'muted' : ''}">${x[0]}</span><span class="lc ${i === q ? 'pri' : 'muted'}" style="${i < q ? 'color:var(--success)' : ''}">${i === q ? 'Answering now · ' + x[1] : i < q ? 'Answered · ' + x[1] : x[1]}</span></div></div>`).join('')}</div>
      <div style="flex:1"></div>
      <div class="col" style="gap:6px;padding:16px;border-radius:16px;background:var(--primary-soft)">
        ${paused ? `<span class="row lbg pri" style="gap:8px">${ic('lightbulb', 16)}Hints are on</span><span class="lc body">Hints are a guide built from your resume. Pause anytime; the mic turns off until you continue.</span>`
      : `<span class="row lbg pri" style="gap:8px">${ic('lightbulb', 16)}Answer with STAR</span><span class="lc body">Situation, Task, Action, Result. Interviewers listen for all four, especially the result.</span>`}</div></aside>
    <div class="mmain"><div class="mcol">
      <div class="qcard"><div class="row" style="gap:10px"><span class="pill lbg" style="background:var(--primary-soft);color:var(--primary)">${Q[1]}</span><span class="lc muted">Question ${q + 1} of 5</span><div class="grow"></div><button class="skip lc" data-act="next-q">Skip</button></div>
        <span class="hq">${Q[0]}</span></div>
      <div class="answer ${m.hints ? '' : 'off'}"><div class="row" style="gap:8px"><span class="pri">${ic('sparkles', 16)}</span><span class="lbg grow">Suggested answer</span><span class="lc muted">Hints</span><span class="sw ${m.hints ? 'on' : ''}" data-act="hints"><i></i></span></div>
        <div class="txt" id="ans">${esc(hintFor(q))}</div></div>
      <div class="recorder ${paused || ended ? 'paused' : 'live'}">
        <div class="row" style="gap:8px">${paused || ended ? '<i class="livedot" style="background:var(--warning);animation:none"></i><span class="ln" style="color:var(--warning)">Paused · mic off</span>' : '<i class="livedot"></i><span class="ln">Mic on · listening</span>'}</div>
        <div class="row" style="gap:24px"><div class="wave">${waveH.map(h => `<i style="height:${h}px"></i>`).join('')}</div>
          <button class="bigbtn" data-act="${paused ? 'resume-live' : 'pause'}">${paused || ended ? ic('play', 28) : ic('pause', 28)}</button>
          <div class="wave">${waveH.slice().reverse().map(h => `<i style="height:${h}px"></i>`).join('')}</div></div>
        ${btn(q === 4 ? 'Done, finish interview' : 'Done, next question', 'sec sm', 'next-q')}</div>
    </div></div>
  </div>
  ${m.phase === 'paywall' ? paywall() : ''}${m.phase === 'proOn' ? proOn() : ''}${m.phase === 'confirm' ? endConfirm() : ''}${S.toast ? `<div class="toast lb">${S.toast}</div>` : ''}</div>`;
}

const feats = () => `<div class="col" style="gap:14px">${PRO_FEATS.map(f => `<div class="feat"><div class="ib">${ic(f[0], 18)}</div><div class="col"><span class="ln">${f[1]}</span><span class="lc muted">${f[2]}</span></div></div>`).join('')}</div>`;
function paywall() {
  return `<div class="scrim"><div class="modal" style="width:560px">
    <button class="mclose" data-act="end-save">${ic('x', 18)}</button>
    <div class="ico-tile" style="width:56px;height:56px;border-radius:16px;background:var(--grad-bot);color:#fff">${ic('crown', 26)}</div>
    <div class="col" style="gap:8px"><span class="hq">Your 30-second preview is up</span><span class="bd body">Nice start, Maria. Upgrade to finish all 5 questions. We’ll keep what you’ve said so far and show your results and advice at the end.</span></div>
    <div class="col" style="gap:8px;padding:12px 16px;border-radius:14px;background:var(--bg-page)"><div class="row"><span class="lbg grow">Question ${(S.mock.q || 0) + 1} of 5 · saved at ${fmt(S.mock.t).slice(1)}</span><span class="lc muted">${4 - (S.mock.q || 0)} to go</span></div>
      <div class="segs">${[0, 1, 2, 3, 4].map(k => k <= (S.mock.q || 0)).map(o => `<i style="background:var(--${o ? 'primary' : 'border'})"></i>`).join('')}</div></div>
    ${feats()}
    <div class="row" style="gap:12px;padding:16px 20px;border-radius:16px;background:var(--bg-page);border:1px solid var(--border)">
      <div class="col grow" style="gap:2px"><span class="row ln" style="gap:6px"><span class="pri">${ic('crown', 16)}</span>Uhired Pro</span><span class="lc muted">Billed monthly · cancel anytime</span></div>
      <div class="row" style="gap:4px;align-items:baseline"><span class="h2">$9.99</span><span class="lc muted">/ month</span></div></div>
    ${btn('Upgrade and continue', 'primary full', 'upgrade')}
    <button class="ln muted" style="align-self:center" data-act="end-save">End interview</button>
  </div></div>`;
}
/* M02e — end early? saved as Unfinished */
function endConfirm() {
  const m = S.mock, s = Math.floor(m.t);
  return `<div class="scrim"><div class="modal" style="width:560px">
    <button class="mclose" data-act="keep-going">${ic('x', 18)}</button>
    <div class="ico-tile" style="width:56px;height:56px;border-radius:16px;background:var(--grad-bot);color:#fff">${ic('history', 26)}</div>
    <div class="col" style="gap:8px"><span class="hq">End this mock interview?</span><span class="bd body">You’re ${s} seconds in, on question ${(m.q || 0) + 1} of 5. We’ll keep it in Mock history as Unfinished, so you can resume right where you stopped. Results and advice come after all 5.</span></div>
    <div class="col" style="gap:8px;padding:12px 16px;border-radius:14px;background:var(--bg-page)"><div class="row"><span class="lbg grow">Question ${(m.q || 0) + 1} of 5 · saved at ${fmt(m.t).slice(1)}</span><span class="lc muted">Unfinished</span></div>
      <div class="segs">${[0, 1, 2, 3, 4].map(k => k <= (m.q || 0)).map(o => `<i style="background:var(--${o ? 'primary' : 'border'})"></i>`).join('')}</div></div>
    ${btn('Keep going', 'primary full', 'keep-going')}
    <button class="ln muted" style="align-self:center" data-act="end-save">End and save for later</button>
  </div></div>`;
}
function proOn() {
  return `<div class="scrim"><div class="modal" style="width:520px;padding:40px 32px 32px;align-items:center;text-align:center">
    <div class="ico-tile" style="width:72px;height:72px;border-radius:36px;background:var(--success-soft);color:var(--success)">${ic('check', 34)}</div>
    <div class="col" style="gap:8px"><span class="hq">You’re on Pro</span><span class="bd body">Your interview is saved at ${fmt(S.mock.t).slice(1)}. Pick up right where you left off.</span></div>
    <div style="text-align:left;width:100%">${feats()}</div>
    ${btn('Continue interview', 'primary full', 'continue')}
  </div></div>`;
}

/* ---------------- results (M12) ---------------- */
function resultsView() {
  const ans = [
    ['Tell me about a time you calmed down an angry customer.', 'Advice: open with a one-line summary before the story', '8 / 10', 'success'],
    ['How do you keep handle time low without rushing the caller?', 'Advice: give a real number, like your average handle time', '7 / 10', 'primary'],
    ['Walk me through how you log and escalate a ticket in Zendesk.', 'Advice: great Zendesk detail, keep it this clear', '9 / 10', 'success'],
    ['Why do you want to work in a BPO, and why Atlas CX?', 'Advice: slow down and name one thing you like about Atlas CX', '6 / 10', 'warning'],
    ['A caller asks for a refund you can’t give. What do you say?', 'Advice: offer what you can do before saying no', '8 / 10', 'success'],
  ];
  return `<div class="mock">${topbar(proPill())}<div class="res"><div class="rescol">
    <div class="rhero"><div class="ring" style="width:150px;height:150px;--p:76;--w:12px"><div><span class="dstat" style="font-size:40px">7.6</span><span class="lc muted" style="margin-top:4px">average / 10</span></div></div>
      <div class="col grow" style="gap:10px"><span class="le pri">Mock interview complete</span><span class="hq">Nice work, Maria. You’re close to interview-ready.</span>
        <span class="bd body">Based on this chat and your practice set for Atlas CX. Your stories are clear and end with real results. Tighten your openings and you’re ready.</span>
        <div class="row" style="gap:12px;margin-top:6px">${[['5 / 5', 'answered'], ['11:42', 'total time'], ['9 / 10', 'best · Q3']].map(s => `<div class="statb col"><span class="h3l">${s[0]}</span><span class="lc muted">${s[1]}</span></div>`).join('')}</div></div></div>
    <div class="row" style="gap:20px;align-items:stretch">
      <div class="rcardw grow col" style="gap:14px"><div class="row"><span class="h4 grow">Skill breakdown</span><span class="prochip lbg">${ic('crown', 14)}Pro</span></div>
        ${[['Structure (STAR)', 82], ['Clarity', 76], ['Relevance to the role', 85], ['Confidence', 64]].map(s => `<div><div class="row"><span class="lc grow">${s[0]}</span><span class="lbg">${s[1]}</span></div><div class="sbar"><i style="width:${s[1]}%"></i></div></div>`).join('')}</div>
      <div class="rcardw col" style="width:330px;flex:none;gap:12px"><div class="row" style="gap:10px"><span class="ico-tile" style="width:22px;height:22px;border-radius:11px;background:var(--warning-soft);color:var(--warning)">${ic('target', 14)}</span><span class="h4">Focus next</span></div>
        ${[['Open with a one-line summary', 'Came up in 3 of 5 answers'], ['Add numbers to your results', 'Handle time, CSAT, tickets per day'], ['Slow down on the “why BPO” answer', 'Pace hit 171 wpm on Q4']].map(f => `<div class="focus-i col" style="gap:2px"><span class="ln">${f[0]}</span><span class="lc muted">${f[1]}</span></div>`).join('')}</div></div>
    <div class="rcardw"><div class="row" style="margin-bottom:4px"><span class="h4 grow">Your answers</span><span class="row lc muted" style="gap:6px;cursor:pointer" data-act="history-from-results">${ic('history', 14)}Saved to Mock history</span></div>
      ${ans.map((a, i) => `<div class="arow click" data-review="${i}"><span class="anum lc">${i + 1}</span><div class="col grow" style="gap:2px"><span class="ln">${a[0]}</span><span class="lc muted">${a[1]}</span></div>
        <span class="spill lbg" style="background:var(--${a[3]}-soft);color:var(--${a[3]})">${a[2]}</span><span class="row lbg pri" style="gap:2px">Detail ${ic('chevron-right', 14)}</span></div>`).join('')}</div>
    <div class="row">${btn('Back to BPO coach', 'sec', 'back-after')}<div class="grow"></div><span class="lc muted" style="margin-right:12px;cursor:pointer" data-act="history-from-results">Saved to Mock history</span>${btn('Practice again', 'primary', 'mock')}</div>
  </div></div></div>`;
}

/* ---------------- answer review (M13) ---------------- */
// said: sentences of the real recording ({{um}} = filler). at: sentence start times (s).
// hint: what was on screen ([[…]] = part you skipped). check: [title, detail, ok]
const REVIEW = [
  { cat: 'Behavioral', score: 8, tone: 'success', dur: 112, when: '3:24 PM', hints: true, wpm: '142 wpm · good pace', wpmTone: 'success', fillers: 2, chk: 'STAR 4 / 4', at: [0, 24, 38, 56, 84],
    said: ['So, {{um}}, last year I had a caller whose internet was down for three days, and he’d already called twice, so he was really upset.', 'My goal was to keep him on the line and actually fix it this time.', 'I listened first, said sorry, and told him what I’d check.', 'In Zendesk I saw his ticket was closed by mistake, so I reopened it and escalated it to our field team.', '{{Uh}}, the next day his line was working and he gave us five out of five.'],
    hint: "Last year a caller was upset because his internet had been down for three days and he'd already called twice. My goal was to keep him on the line and fix it this time. I listened, apologized and told him what I'd check first. In Zendesk I saw his ticket had been closed by mistake, so I reopened it, escalated it to our field team [[and booked a technician for the next morning]]. The next day the line was working and he rated us 5 out of 5.",
    checkLabel: 'STAR check', check: [['Situation', 'Internet down for 3 days, already called twice', 1], ['Task', 'Keep him on the line and fix it this time', 1], ['Action', 'Reopened the ticket in Zendesk and escalated it', 1], ['Result', 'Line working next day, rated 5 out of 5', 1]],
    worked: ['Problem and goal in the first 15 seconds', 'A real tool detail — you named Zendesk'],
    improve: [['Open with a one-line summary', 'Say the outcome first, then tell the story'], ['You skipped the follow-up', 'The hint had “booked a technician” — it shows ownership']],
    opener: '“I turned a caller who’d been offline for three days into a 5-star rating — here’s how.”' },
  { cat: 'Situational', score: 7, tone: 'primary', dur: 125, when: '3:26 PM', hints: true, wpm: '138 wpm · good pace', wpmTone: 'success', fillers: 1, chk: 'STAR 3 / 4',
    said: ['I keep the call moving by asking the right questions early.', '{{Like}}, I confirm the account and the issue in the first minute.', 'Then I tell the caller what I’m doing while I search, so the silence doesn’t feel long.', 'If it needs more time, I set a callback instead of keeping them on hold.'],
    hint: "I aim to solve it in one call without rushing. I confirm the account and the issue in the first minute, and I talk the caller through what I'm checking so the silence never feels long. If something needs research, I offer a callback instead of a long hold. [[Last quarter my average handle time was 6 minutes 40 seconds with a 94% CSAT.]]",
    checkLabel: 'STAR check', check: [['Situation', 'Busy queue, callers who want it fixed fast', 1], ['Task', 'Keep handle time low without rushing', 1], ['Action', 'Confirm early, talk while searching, offer callbacks', 1], ['Result', 'No number for your handle time or CSAT', 0]],
    worked: ['Clear steps, in the order you do them', 'Callback instead of a long hold'],
    improve: [['Give a real number', 'Your hint had 6:40 handle time and 94% CSAT — say it'], ['Name the result', 'End with what happened to your scores']],
    opener: '“My average handle time last quarter was 6:40, with 94% CSAT — here’s how I keep it there.”' },
  { cat: 'Technical', score: 9, tone: 'success', dur: 151, when: '3:29 PM', hints: false, wpm: '146 wpm · good pace', wpmTone: 'success', fillers: 0, chk: 'Steps 4 / 4',
    said: ['First I search the customer in Zendesk so I don’t make a duplicate ticket.', 'I log the issue in their words, add the steps I already tried, and tag the right category and priority.', 'If it’s past what tier one can fix, I escalate to the right group with a short summary, and I tell the customer when they’ll hear back.', 'Then I set a follow-up so it doesn’t get lost.'],
    hint: "I start by searching the customer in Zendesk to avoid duplicate tickets. I log the issue in the customer's words, list what I've already tried, and set the category and priority. If it needs tier 2, I escalate with a three-line summary and give the customer a time to expect an update. Then I add a follow-up reminder so nothing falls through.",
    checkLabel: 'Answer check', check: [['Search first', 'No duplicate tickets', 1], ['Log clearly', 'Customer’s words, steps tried, tags', 1], ['Escalate right', 'Right group, short summary', 1], ['Close the loop', 'Follow-up so it doesn’t get lost', 1]],
    worked: ['Exact Zendesk steps, in order', 'You closed the loop with a follow-up'],
    improve: [['Add one real example', 'Name a ticket you escalated and how it ended']],
    opener: '“I treat every ticket like someone else will pick it up tomorrow.”' },
  { cat: 'Motivation', score: 6, tone: 'warning', dur: 98, when: '3:31 PM', hints: false, wpm: '171 wpm · too fast', wpmTone: 'warning', fillers: 3, chk: 'Points 2 / 4',
    said: ['{{Um}}, I like BPO because, {{um}}, I’m good with people and I like solving problems.', 'And Atlas CX is, {{uh}}, a big company with good training, so I think I can grow there.', 'I also like that it’s in Taguig, near my place.'],
    hint: "I've spent four years turning frustrated callers into happy ones, and that's the part of the job I enjoy most. I want to keep doing it at a company that invests in its people. Atlas CX's training academy and its telecom accounts match what I've done, so I can add value from day one and keep growing.",
    checkLabel: 'Answer check', check: [['Why BPO', 'You’re good with people and like solving problems', 1], ['Why Atlas CX', 'Only “big company” — name something specific', 0], ['Proof', 'No example from your 4 years', 0], ['Growth', 'You want to grow there', 1]],
    worked: ['Honest, warm tone'],
    improve: [['Slow down', 'You hit 171 wpm — aim for about 140'], ['Name one thing you like about Atlas CX', 'Like their training academy or a client you’d love to support']],
    opener: '“I’ve spent 4 years making angry callers happy, and I want to do it where training is taken seriously — that’s Atlas CX.”' },
  { cat: 'Situational', score: 8, tone: 'success', dur: 107, when: '3:33 PM', hints: false, wpm: '140 wpm · good pace', wpmTone: 'success', fillers: 1, chk: 'Points 3 / 4',
    said: ['I’d say sorry first and explain the policy in simple words, so they know it’s not personal.', 'Then I’d tell them what I can do, like a credit on their next bill or a supervisor callback.', '{{Uh}}, most callers calm down when they hear there’s still an option.'],
    hint: "I'd start with what I can do: a credit on the next bill, or a callback from my supervisor. Then I'd explain the refund policy in plain words so it doesn't feel personal. Most callers calm down once they hear there's still a real option on the table.",
    checkLabel: 'Answer check', check: [['Empathy', 'You said sorry first', 1], ['Policy', 'Explained in simple words', 1], ['Alternative', 'Credit or supervisor callback', 1], ['Order', 'You said no before the option', 0]],
    worked: ['Concrete options: a credit or a callback', 'Plain words, not policy-speak'],
    improve: [['Offer what you can do before saying no', 'Lead with the option, then the policy']],
    opener: '“Here’s what I can do for you today…” — then explain the policy.' },
];
const WAVE = [10, 18, 26, 14, 30, 22, 12, 28, 34, 20, 16, 26, 10, 22, 30, 18, 12, 24, 32, 16, 20, 28, 14, 10, 24, 30, 18, 12, 22, 26, 16, 34, 20, 12, 28, 18, 10, 24, 14, 20, 30, 16, 22, 12];
const mmss = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
function rvStarts(r) {
  if (r.at) return r.at;
  const lens = r.said.map(s => s.length), tot = lens.reduce((a, b) => a + b, 0); let acc = 0;
  return lens.map(l => { const s = acc / tot * r.dur; acc += l; return s; });
}
const rvCur = r => { const st = rvStarts(r); let c = 0; st.forEach((s, i) => { if (S.rv.t >= s) c = i; }); return S.rv.t > 0 || S.rv.playing ? c : -1; };
function reviewView() {
  const i = S.rv.q, r = REVIEW[i], cur = rvCur(r), played = Math.floor(S.rv.t / r.dur * WAVE.length);
  const hint = esc(r.hint.replace(/\[\[|\]\]/g, ''));
  const last = i === REVIEW.length - 1;
  return `<div class="mock">${topbar(`${proPill()}${btn('Previous', 'sec sm', 'rv-prev', i === 0 ? 'disabled style="opacity:.4;cursor:default"' : '')}${btn(last ? 'Back to results' : 'Next question', 'dark sm', last ? 'back-results' : 'rv-next')}`, 'back-results', 'Results', 'Answer review')}
  <div class="row" style="flex:1;align-items:stretch;min-height:0">
    <aside class="rail"><div class="row"><span class="h4 grow">Your answers</span><span class="lc muted">7.6 avg</span></div>
      <div class="segs">${REVIEW.map(() => '<i class="on"></i>').join('')}</div>
      <div class="col" style="gap:4px">${MOCK_QS.map((q, k) => `<div class="rq click ${k === i ? 'on' : 'done'}" data-rv="${k}"><div class="n lbg">${k === i ? k + 1 : ic('check', 14)}</div><div class="col grow" style="gap:2px"><span class="bc t">${q[0]}</span><span class="lc ${k === i ? 'pri' : ''}" style="${k === i ? '' : 'color:var(--success)'}">${REVIEW[k].score} / 10 · ${k === i ? 'Reviewing now' : q[1]}</span></div></div>`).join('')}</div>
      <div style="flex:1"></div>
      <div class="col" style="gap:6px;padding:16px;border-radius:16px;background:var(--primary-soft)"><span class="row lbg pri" style="gap:8px">${ic('lightbulb', 16)}About hints</span><span class="lc body">Hints were on for Q1 and Q2. Try Q1 again with hints off to see if the story sticks.</span></div></aside>
    <div class="rv-main">
      <div class="rv-left">
        <div class="qcard"><div class="row" style="gap:10px"><span class="pill lbg" style="background:var(--primary-soft);color:var(--primary)">${r.cat}</span><span class="lc muted">Question ${i + 1} of 5 · answered in ${mmss(r.dur)}</span><div class="grow"></div><span class="pill lbg" style="background:var(--${r.tone}-soft);color:var(--${r.tone})">${r.score} / 10</span></div>
          <span class="hq">${MOCK_QS[i][0]}</span></div>
        <div class="card"><div class="row" style="gap:8px"><span class="pri">${ic('volume', 16)}</span><span class="h4 grow">Your recording</span><span class="bs muted">Recorded today, ${r.when}</span></div>
          <div class="player"><button class="playbtn" data-act="rv-play">${ic(S.rv.playing ? 'pause' : 'play', 20)}</button>
            <div class="rvwave" id="rv-wave">${WAVE.map((h, k) => `<i class="${k < played ? 'p' : ''}" style="height:${h}px"></i>`).join('')}</div>
            <span class="lc body" id="rv-time" style="white-space:nowrap">${mmss(S.rv.t)} / ${mmss(r.dur)}</span><button class="spd lbg" data-act="rv-speed">${S.rv.speed}x</button></div>
          <div class="row" style="gap:8px">${[[r.wpm, r.wpmTone], [`${r.fillers} filler word${r.fillers === 1 ? '' : 's'}`, r.fillers ? 'warning' : 'success'], [r.chk, 'primary']].map(s => `<span class="stag lbg" style="padding:4px 10px;background:var(--${s[1]}-soft);color:var(--${s[1]})">${s[0]}</span>`).join('')}</div>
          <div class="col" style="gap:8px"><span class="le muted">What you said</span>
            <div class="said" id="rv-said">${r.said.map((s, k) => `<span class="${k === cur ? 'cur' : ''}" data-seek-s="${k}">${s.replace(/\{\{(.+?)\}\}/g, '<em class="fill">$1</em>')}</span>`).join(' ')}</div></div></div>
        <div class="card"><div class="row" style="gap:8px"><span class="pri">${ic('sparkles', 16)}</span><span class="h4 grow">${r.hints ? 'Hints you saw' : 'Suggested answer'}</span><span class="lc muted">${r.hints ? 'Shown while you answered · a guide, not a script' : 'Hints were off for this answer'}</span></div>
          <div class="hint-t ${r.hints ? '' : 'off'}">${hint}</div>
</div>
      </div>
    </div>
  </div></div>`;
}
function rvPaint() { // light DOM update while the recording plays
  const r = REVIEW[S.rv.q], played = Math.floor(S.rv.t / r.dur * WAVE.length), cur = rvCur(r);
  const tm = document.getElementById('rv-time'); if (tm) tm.textContent = `${mmss(S.rv.t)} / ${mmss(r.dur)}`;
  const wv = document.getElementById('rv-wave'); if (wv) [...wv.children].forEach((el, k) => el.className = k < played ? 'p' : '');
  const sd = document.getElementById('rv-said'); if (sd) [...sd.children].forEach((el, k) => el.className = k === cur ? 'cur' : '');
}
function rvTick() {
  clearInterval(S._rv);
  if (!S.rv.playing) return;
  S._rv = setInterval(() => {
    if (S.view !== 'review' || !S.rv.playing) return clearInterval(S._rv);
    const r = REVIEW[S.rv.q]; S.rv.t = Math.min(r.dur, S.rv.t + 0.25 * S.rv.speed);
    if (S.rv.t >= r.dur) { S.rv.playing = false; clearInterval(S._rv); render(); } else rvPaint();
  }, 250);
}
function openReview(q, t = 0, playing = false) { S.rv = { q, t, playing, speed: (S.rv && S.rv.speed) || 1 }; go({ view: 'review' }); rvTick(); }

/* ---------------- landing ---------------- */
function landing() {
  const roles = ['Customer Service', 'Remote Work', 'Healthcare', 'Tech', 'BPO', 'Call Center', 'Virtual Assistant', 'Nursing', 'Data Analyst', 'IT'];
  const tick = roles.concat(roles).map(r => `<span class="it h4">${r}<i></i></span>`).join('');
  return `<div class="landing-wrap" id="lw"><div class="landing" id="land">
    <header class="l-header"><div class="row" style="gap:8px"><div class="mark">U</div><span class="logo">Uhired AI</span></div>
      <nav class="l-nav ln">${['Jobs', 'Use cases', 'Blog', 'Glossary', 'Compare', 'FAQ', 'How it works'].map(n => `<span>${n}</span>`).join('')}</nav><div class="row" style="gap:8px">${btn('Download app', 'sec sm')}${btn('Start now', 'primary sm', 'start-now')}</div></header>
    <section class="hero"><div class="glow" style="width:384px;height:384px;left:1190px;top:-122px;background:var(--primary-soft)"></div><div class="glow" style="width:288px;height:288px;left:-80px;top:159px;background:rgba(60,92,250,.1)"></div>
      <span class="badge-pill lbg pri"><i class="dot8"></i>New · Resume → interview prep + matched jobs, in one chat</span>
      <h1 class="h1">Upload your resume.<br><em>Walk in already ready.</em></h1>
      <p class="lead bl" style="width:760px">In about 20 seconds, Uhired turns your resume into interview answers in your voice, finds open jobs that match you, and lets you practice with an AI interviewer.</p>
      <div class="upcard" data-act="upload"><div class="dz"><div class="ib">${ic('upload', 22)}</div><div class="col grow" style="gap:2px"><span class="h3l">Drop your resume here</span><span class="bs muted">PDF or DOCX · free · stays private to you</span></div>${btn('Start now', 'primary', 'upload')}</div></div>
      <div class="row" style="gap:8px;padding-top:20px"><span class="bd muted">No resume handy? Try a sample:</span>${['BPO agent', 'Virtual assistant', 'Overseas nurse'].map(t => `<span class="chip ln" data-act="upload">${ic('plus', 14)}${t}</span>`).join('')}</div>
      <div class="flowsteps">${['Upload your resume', 'Get answers in your voice + matched jobs', 'Practice with AI', 'Live AI hints in your real interview'].map((t, i) => `<div class="fstep"><i class="fnum lbg">${i + 1}</i><div class="col" style="gap:6px"><span class="h4">${t}</span>${i === 3 ? `<span class="ftag lc">${ic('phone', 12)}Phone app · runs in the background</span>` : ''}</div></div>`).join('')}</div>
      <div class="video-card"><img src="img/hero.jpg" alt="Illustrative scenario: BPO interview practice"><span class="vc-cap lc">Illustrative scenario: BPO interview practice</span><span class="vc-live lt"><i class="pulse"></i>Live AI</span></div></section>
    <div class="ticker"><div class="track">${tick}</div></div>
    <section class="jobsec"><div class="row" style="align-items:flex-end"><div class="col grow" style="gap:12px"><span class="le pri">Open roles · Metro Manila &amp; remote</span><span class="h2">Jobs hiring now</span><span class="bl muted">Upload your resume and Uhired shows how well you match each one — then preps you for that exact interview.</span></div>
        <span class="row lb pri click" style="gap:6px" data-act="start-now">Browse all open jobs ${ic('arrow-right', 16)}</span></div>
      <div class="row" style="gap:8px">${['All jobs', 'BPO & call center', 'Virtual assistant', 'Nursing', 'Remote'].map((f, i) => `<span class="fpill ln ${i ? '' : 'on'}">${f}</span>`).join('')}</div>
      <div class="jgrid">${[['A', 'var(--ink)', 'Customer Service Representative', 'Atlas CX · Taguig', '₱26–32k / month', ['Full-time', 'Onsite'], '2 days ago'], ['N', 'var(--primary)', 'Technical Support Associate', 'Northwind Connect · Pasig', '₱28–35k / month', ['Full-time', 'Hybrid'], '1 day ago'], ['B', 'var(--primary-light)', 'Chat Support Specialist', 'BrightCall · Remote', '₱24–30k / month', ['Full-time', 'Remote'], '3 days ago'], ['L', 'var(--success)', 'Virtual Assistant, E-commerce', 'Lumen Remote · Remote', '₱35–45k / month', ['Part-time', 'Remote'], 'Today']].map(j => `<div class="jcard click" data-act="start-now"><div class="row"><div class="jlogo li" style="background:${j[1]}">${j[0]}</div><div class="grow"></div><span class="lc muted">${j[6]}</span></div>
        <div class="col" style="gap:4px"><span class="h3l">${j[2]}</span><span class="bs muted">${j[3]}</span></div><span class="h4">${j[4]}</span>
        <div class="row" style="gap:6px">${j[5].map(t => `<span class="jtag lc">${t}</span>`).join('')}</div><div style="flex:1"></div><div class="jdiv"></div>
        <div class="row"><span class="mlock lbg">${ic('lock', 12)}?? % match</span><div class="grow"></div><span class="row lb pri" style="gap:4px">See my match ${ic('arrow-right', 14)}</span></div></div>`).join('')}</div></section>
    <section class="samplesec"><div class="col" style="gap:12px;align-items:center;text-align:center"><span class="le pri">See a sample</span><span class="h2">One resume in. Everything you need out.</span><span class="bl muted">Here’s what Uhired built from a sample BPO resume in about 20 seconds. Yours is next.</span></div>
      <div class="stabs">${['BPO agent', 'Virtual assistant', 'Overseas nurse'].map((t, i) => `<span class="ln ${i ? '' : 'on'}">${t}</span>`).join('')}</div>
      <div class="row" style="gap:24px;align-items:center">
        <div class="sresume"><span class="le muted">Sample resume</span><div class="file"><div class="ib">${ic('file', 18)}</div><div class="col"><span class="h4">Maria_Santos_Resume.pdf</span><span class="lc muted">PDF · 182 KB</span></div></div>
          ${['Maria Santos · Quezon City', '4 years in customer support', 'De-escalation, Zendesk, QA score 96%', 'Wants: BPO roles in Metro Manila'].map(l => `<span class="row bd body" style="gap:10px"><span style="color:var(--success)">${ic('check', 16)}</span>${l}</span>`).join('')}</div>
        <div class="col" style="gap:8px;align-items:center"><span class="sarrow">${ic('arrow-right', 20)}</span><span class="lc muted">~20 sec</span></div>
        <div class="sample-out col" style="gap:16px">${(resultCards() + nextSteps()).replace(/data-act="[^"]*"/g, 'data-act="upload"')}</div></div>
      <div class="row" style="gap:12px">${btn('Try it with my resume', 'primary', 'start-now')}${btn('Open this sample', 'sec', 'upload')}</div></section>
    <section class="stats">${[['6+', 'Role categories supported'], ['4', 'Core AI features'], ['100%', 'Personalized to your resume']].map(s => `<div><span class="dstat pri">${s[0]}</span><span class="bc body">${s[1]}</span></div>`).join('')}</section>
    <section class="lsec"><div class="col" style="gap:16px;width:672px"><span class="le pri">What it does</span><span class="h2">From your resume to the real interview, in four steps.</span></div>
      <div class="fgrid">${[['upload', '1 · Upload your resume', 'Drop a PDF or DOCX. Uhired reads your experience, skills and the roles you want in about 20 seconds.'], ['chat', '2 · Answers in your voice + matched jobs', 'Likely interview questions with answers written the way you talk, plus open roles ranked by how well you match.'], ['mic', '3 · Practice with AI', 'Answer out loud in a mock interview with an AI interviewer. Hints help when you’re stuck; advice comes at the end.'], ['phone', '4 · Live AI help in the real interview', 'The Uhired phone app runs in the background during your real interview and shows hints the moment you need them.']].map(f => `<div class="fcard"><div class="ico-tile li">${ic(f[0], 20)}</div><div class="h3">${f[1]}</div><p class="bd body" style="margin-top:8px">${f[2]}</p></div>`).join('')}</div></section>
    <section class="lsec dark-sec"><div class="glow" style="width:288px;height:288px;left:-75px;top:55px;background:rgba(60,92,250,.15)"></div>
      <div class="col" style="gap:16px;position:relative"><span class="le" style="color:var(--primary-light)">How it works</span><span class="h2 white">Your flow at a glance</span></div>
      <div class="steps">${[['Upload', 'Share your resume and the job description.'], ['Analyze', 'AI pairs your experience with the role to predict questions.'], ['Refine', 'Tweak every answer until it sounds like you.'], ['Practice', 'Rehearse with mock interviews and live prompts.'], ['Interview', 'Live assist during the real call.'], ['Recap', 'Review feedback and improve for next time.']].map((s, i) => `<div class="stepc"><div class="stepn" style="color:rgba(255,255,255,.2)">0${i + 1}</div><div class="h4 white" style="margin-top:8px">${s[0]}</div><p class="bs" style="color:var(--on-dark-muted);margin-top:4px">${s[1]}</p></div>`).join('')}</div></section>
    <section class="lsec"><div class="col" style="gap:16px"><span class="le pri">Who it's for</span><span class="h2">Practice for the role you actually want</span></div>
      <div class="rcards">${[['role-bpo', 'BPO & call center', 'Customer empathy, de-escalation, and service-metric answers.'], ['role-va', 'Virtual assistant', 'Communication, ownership, and remote-work interview answers.'], ['role-nurse', 'Overseas nursing', 'English clinical scenarios with structured, patient-safe answers.']].map(r => `<div class="rcard"><img src="img/${r[0]}.jpg" alt=""><div class="c"><span class="h3l">${r[1]}</span><span class="bd body">${r[2]}</span><span class="lb pri" style="margin-top:12px">Explore use case</span></div></div>`).join('')}</div></section>
    <section class="closing dark-sec"><div class="glow" style="width:256px;height:256px;left:1250px;top:-10px;background:rgba(60,92,250,.25)"></div><div class="glow" style="width:265px;height:265px;left:-60px;top:164px;background:rgba(148,166,255,.15)"></div>
      <span class="dcta white" style="width:760px;position:relative">Invisible. But always thinking with you.</span>
      <p class="blt" style="color:var(--on-dark-muted);width:576px;padding-top:20px;position:relative">Confidence comes from rock-solid prep and a quiet safety net. Uhired gives you both.</p>
      <div class="row" style="gap:12px;padding-top:32px;position:relative">${btn('Start now — it’s free', 'light', 'start-now')}${btn('Download on iOS', '', '', 'style="border:1px solid rgba(255,255,255,.3);color:#fff"')}</div></section>
    <footer class="l-foot bc"><div class="links">${['privacy-policy', 'terms-of-use', 'use-cases', 'blog', 'glossary', 'compare', 'faq'].map(l => `<span>${l}</span>`).join('')}</div><span>© 2025 Uhired AI. All rights reserved.</span></footer>
  </div></div>${btn('Start now', 'primary float-cta', 'start-now', 'id="fcta"')}`;
}

/* ---------------- demo menu ---------------- */
const SCREENS = [
  ['Start now', [['—', 'Landing', () => reset({ view: 'landing' })], ['02', 'Welcome · upload resume', () => reset({ view: 'chat', stage: 'welcome' })], ['03', 'Reading resume', () => { reset({ view: 'chat', stage: 'reading', readStep: 0 }); runReading(); }],
    ['04', 'Results · cards in chat', () => reset({ view: 'chat', stage: 'inline' })], ['04b', 'Results · pinned above the box', () => reset({ view: 'chat', stage: 'results' })], ['04c', 'Ended early · saved as Unfinished', () => { reset({ view: 'chat', stage: 'unfinished' }); S.mock.t = 18; render(); }],
    ['05', 'Practice set panel', () => reset({ view: 'chat', stage: 'results', panel: 'practice' })], ['05b', 'Open roles panel', () => reset({ view: 'chat', stage: 'results', panel: 'roles' })],
    ['07', 'New bot', () => reset({ view: 'chat', stage: 'results', modal: 'newbot' })], ['08', 'VA coach created', () => reset({ view: 'chat', stage: 'results', hasVA: true, bot: 'va' })]]],
  ['Mock interview', [['M01', 'Ready + mic check', () => reset({ view: 'mock' })], ['M02', 'AI mock · listening', () => { reset({ view: 'mock' }); startLive(); }], ['M02c', 'Paused', () => { reset({ view: 'mock' }); S.mock.t = 12; S.mock.phase = 'paused'; render(); }],
    ['M02e', 'End early? confirm', () => { reset({ view: 'mock' }); S.mock.t = 18; S.mock.phase = 'confirm'; S.mock.prev = 'live'; render(); }],
    ['M10', '30s preview ends', () => { reset({ view: 'mock' }); S.mock.t = 30; S.mock.phase = 'paywall'; render(); }], ['M11', 'Pro activated', () => { reset({ view: 'mock', plan: 'pro' }); S.mock.t = 30; S.mock.phase = 'proOn'; render(); }],
    ['M12', 'Results + advice', () => reset({ view: 'results', plan: 'pro', stage: 'after' })], ['M13', 'Answer review · recording + hints', () => { reset({ plan: 'pro', stage: 'after' }); openReview(0, 42, true); }]]],
  ['Mock history', [['H01', 'Back in chat · history pinned', () => reset({ view: 'chat', plan: 'pro', stage: 'after' })], ['H02', 'Mock history panel', () => reset({ view: 'chat', plan: 'pro', stage: 'after', panel: 'history', seenHistory: true })]]],
];
let menuOpen = false;
function demoMenu() {
  return `<button class="demo-btn" data-act="menu" title="Screens">${ic('menu', 16)}</button>
  ${menuOpen ? `<div class="demo-menu">${SCREENS.map((g, gi) => `<h6>${g[0]}</h6>${g[1].map((s, si) => `<button data-jump="${gi}.${si}"><b>${s[0]}</b>${s[1]}</button>`).join('')}`).join('')}</div>` : ''}`;
}
function reset(patch) {
  clearTimers(); clearInterval(S._rv);
  Object.assign(S, { rv: { q: 0, t: 0, playing: false, speed: 1 }, rolesTab: 0, view: 'landing', plan: 'free', stage: 'welcome', readStep: 2, bot: 'bpo', hasVA: false, panel: null, modal: null, toast: null, seenHistory: false, mock: { phase: 'ready', t: 0, q: 0, qt: 0, hints: true } }, patch);
  menuOpen = false; render();
}

/* ---------------- flows ---------------- */
function runReading() {
  clearTimers(); S.readStep = 0; render();
  [1, 2, 3, 4].forEach((s, i) => later(() => { S.readStep = s; render(); }, 700 + i * 800));
  later(() => go({ stage: 'results' }), 4300);
}
function tickLive() {
  clearInterval(S._tick);
  S._tick = setInterval(() => {
    const m = S.mock; if (m.phase !== 'live') return;
    m.t += 0.25; m.qt = (m.qt || 0) + 0.25;
    const tm = document.getElementById('tm'); if (tm) tm.textContent = fmt(m.t);
    if (S.plan === 'free' && m.t >= 30) { m.phase = 'paywall'; clearInterval(S._tick); render(); }
    else if (m.qt >= Q_AUTO) nextQuestion(true); // AI decides you're done and moves on
  }, 250);
}
// Done / Skip / AI auto-advance → next question; after Q5 the interview ends (Pro → results)
function nextQuestion(auto) {
  const m = S.mock;
  if ((m.q || 0) >= MOCK_QS.length - 1) { clearInterval(S._tick); m.phase = 'done'; S.toast = 'Interview finished · building your results…'; render(); later(() => { S.toast = null; go({ view: 'results', stage: 'after', plan: 'pro' }); }, 1400); return; }
  m.q = (m.q || 0) + 1; m.qt = 0;
  S.toast = auto ? 'Got it · next question' : null; render();
  if (auto) later(() => { S.toast = null; if (S.view === 'mock') render(); }, 1300);
}
function startLive() { S.mock.phase = 'live'; render(); tickLive(); }

/* ---------------- render + events ---------------- */
const app = document.getElementById('app');
function render() {
  let html;
  if (S.view === 'landing') html = landing();
  else {
    const inner = S.view === 'chat' ? chatView() : S.view === 'results' ? resultsView() : S.view === 'review' ? reviewView() : (S.mock.phase === 'ready' ? mockReady() : mockLive());
    html = `<div class="stage" id="stage">${inner}</div>`;
  }
  const lw = document.getElementById('lw'); const sc = lw ? lw.scrollTop : 0;
  app.innerHTML = html + demoMenu();
  if (S.view === 'landing') { const n = document.getElementById('lw'); if (n) n.scrollTop = sc; }
  if (S.view === 'chat' && (S.stage === 'unfinished' || S.stage === 'after')) { const sb = () => { const c = document.querySelector('.conv'); if (c) c.scrollTop = c.scrollHeight; }; sb(); requestAnimationFrame(sb); setTimeout(sb, 120); if (document.fonts) document.fonts.ready.then(sb); } // newest message in view, like 04c / H01
  fit();
}
function fit() {
  const st = document.getElementById('stage');
  if (st) { const s = Math.min(innerWidth / 1440, innerHeight / 900); st.style.transform = `translate(-50%,-50%) scale(${s})`; st.style.transformOrigin = '50% 50%'; st.style.left = '50%'; st.style.top = '50%'; }
  const land = document.getElementById('land');
  if (land) { const s = innerWidth / 1440; land.style.zoom = s; const f = document.getElementById('fcta'); if (f) { f.style.zoom = s; } }
}
addEventListener('resize', fit);

const ACTIONS = {
  'start-now': () => go({ view: 'chat', stage: 'welcome' }),
  upload: () => { S.view = 'chat'; S.stage = 'reading'; runReading(); },
  collapse: () => go({ collapsed: true }), expand: () => go({ collapsed: false }),
  newbot: () => go({ modal: 'newbot' }), 'close-modal': () => go({ modal: null }),
  'create-bot': () => { const n = document.getElementById('nb-name'); S.newbot.name = n ? n.value : S.newbot.name; go({ modal: null, hasVA: true, bot: 'va', panel: null }); },
  practice: () => go({ panel: S.panel === 'practice' ? null : 'practice' }),
  history: () => go({ panel: S.panel === 'history' ? null : 'history', seenHistory: true }),
  'close-panel': () => go({ panel: null }),
  mock: () => { clearTimers(); S.mock = { phase: 'ready', t: 0, q: 0, qt: 0, hints: S.mock.hints }; go({ view: 'mock', panel: null, modal: null }); },
  start: () => startLive(),
  resume: () => { clearTimers(); S.mock = { phase: 'ready', t: 0, q: 0, qt: 0, hints: true }; S.view = 'mock'; S.panel = null; startLive(); },
  pause: () => { S.mock.phase = 'paused'; render(); },
  'resume-live': () => startLive(),
  'next-q': () => { if (S.mock.phase === 'live' || S.mock.phase === 'paused') { if (S.mock.phase === 'paused') S.mock.phase = 'live'; nextQuestion(false); if (S.mock.phase === 'live') tickLive(); } },
  hints: () => { S.mock.hints = !S.mock.hints; render(); },
  roles: () => go({ panel: S.panel === 'roles' ? null : 'roles' }),
  // End interview: Pro → results for what you answered (M11 → M12); free → confirm (M02 → M02e)
  end: () => {
    if (S.mock.phase === 'paywall') return ACTIONS['end-save']();
    if (S.plan === 'pro' && S.mock.phase !== 'ready') { clearTimers(); return go({ view: 'results', stage: 'after' }); }
    clearInterval(S._tick); S.mock.prev = S.mock.phase; S.mock.phase = 'confirm'; render();
  },
  'back-mock': () => { if (S.plan === 'pro') return ACTIONS['back-chat'](); ACTIONS.end(); },
  'keep-going': () => { const p = S.mock.prev || 'live'; if (p === 'live') startLive(); else { S.mock.phase = p; render(); } },
  'end-save': () => { clearTimers(); go({ view: 'chat', stage: 'unfinished', panel: null, modal: null, seenHistory: false }); },
  'resume-saved': () => { clearTimers(); S.view = 'mock'; S.panel = null; if (S.plan === 'free' && S.mock.t >= 30) { S.mock.phase = 'paywall'; render(); } else startLive(); },
  'back-results': () => { clearTimers(); go({ view: 'results' }); },
  'rv-prev': () => { if (S.rv.q > 0) openReview(S.rv.q - 1); },
  'rv-next': () => { if (S.rv.q < REVIEW.length - 1) openReview(S.rv.q + 1); },
  'rv-play': () => { const r = REVIEW[S.rv.q]; if (S.rv.t >= r.dur) S.rv.t = 0; S.rv.playing = !S.rv.playing; render(); rvTick(); },
  'rv-speed': () => { S.rv.speed = S.rv.speed === 1 ? 1.5 : S.rv.speed === 1.5 ? 2 : 1; render(); rvTick(); },
  upgrade: () => { S.plan = 'pro'; S.mock.phase = 'proOn'; render(); },
  continue: () => startLive(),
  'back-chat': () => { clearTimers(); go({ view: 'chat' }); },
  'back-after': () => go({ view: 'chat', stage: 'after', panel: null }),
  results: () => go({ view: 'results' }),
  'history-from-results': () => go({ view: 'chat', stage: 'after', panel: 'history', seenHistory: true }),
  menu: () => { menuOpen = !menuOpen; render(); },
};
app.addEventListener('click', e => {
  const j = e.target.closest('[data-jump]');
  if (j) { const [g, s] = j.dataset.jump.split('.').map(Number); SCREENS[g][1][s][2](); return; }
  const tab = e.target.closest('[data-tab]'); if (tab) return go({ practiceTab: +tab.dataset.tab });
  const rt = e.target.closest('[data-rtab]'); if (rt) return go({ rolesTab: +rt.dataset.rtab });
  const rvw = e.target.closest('[data-review]'); if (rvw) return openReview(+rvw.dataset.review);
  const rvq = e.target.closest('[data-rv]'); if (rvq) return openReview(+rvq.dataset.rv);
  const wv = e.target.closest('#rv-wave');
  if (wv) { const b = wv.getBoundingClientRect(), r = REVIEW[S.rv.q]; S.rv.t = Math.max(0, Math.min(1, (e.clientX - b.left) / b.width)) * r.dur; rvPaint(); return; }
  const sk = e.target.closest('[data-seek-s]');
  if (sk) { S.rv.t = rvStarts(REVIEW[S.rv.q])[+sk.dataset.seekS] + 0.01; if (!S.rv.playing) { S.rv.playing = true; render(); rvTick(); } else rvPaint(); return; }
  const ro = e.target.closest('[data-resume]'); if (ro) { S.newbot.resume = +ro.dataset.resume; const n = document.getElementById('nb-name'); if (n) S.newbot.name = n.value; return render(); }
  const b = e.target.closest('[data-bot]'); if (b) return go({ bot: b.dataset.bot, panel: null });
  const a = e.target.closest('[data-act]');
  if (!a) { if (menuOpen && !e.target.closest('.demo-menu')) { menuOpen = false; render(); } return; }
  if (a.dataset.act === 'close-modal' && a.classList.contains('scrim') && e.target.closest('[data-stop]')) return;
  if (menuOpen && a.dataset.act !== 'menu') menuOpen = false;
  ACTIONS[a.dataset.act]?.();
});
addEventListener('keydown', e => { if (e.key === 'Escape') { if (S.view === 'mock' && S.mock.phase === 'confirm') ACTIONS['keep-going'](); else if (S.modal) go({ modal: null }); else if (S.panel) go({ panel: null }); } });

/* deep link: #m01, #h02 … */
const hash = location.hash.slice(1).toLowerCase();
const flat = SCREENS.flatMap(g => g[1]);
const hit = flat.find(s => s[0].toLowerCase() === hash);
if (hit) hit[2](); else render();
