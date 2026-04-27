<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Tehila International Logistics Ltd | Clearing, Forwarding & Transportation – Uganda</title>
  <meta name="description" content="Tehila International Logistics Ltd provides expert customs clearing, freight forwarding, transportation and consolidation services in Uganda and across East Africa."/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --navy:     #08112A;
      --navy-mid: #0E1E44;
      --navy-lt:  #152759;
      --gold:     #C8952A;
      --gold-lt:  #E4B955;
      --gold-pale:#F7E8C4;
      --cream:    #FAF6EE;
      --white:    #FFFFFF;
      --text:     #1C2A4A;
      --text-lt:  #4A5C82;
      --border:   rgba(200,149,42,0.25);
      --shadow:   0 8px 48px rgba(8,17,42,0.18);
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--cream);
      color: var(--text);
      overflow-x: hidden;
    }

    /* ─── UTILITY ─────────────────────────────── */
    .container { max-width: 1200px; margin: 0 auto; padding: 0 32px; }
    .gold { color: var(--gold); }
    .reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.7s ease, transform 0.7s ease; }
    .reveal.visible { opacity: 1; transform: none; }

    /* ─── NAV ──────────────────────────────────── */
    nav {
      position: fixed; top: 0; width: 100%; z-index: 100;
      padding: 0 40px;
      display: flex; align-items: center; justify-content: space-between;
      height: 72px;
      background: rgba(8,17,42,0.92);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
      transition: background 0.3s;
    }
    .nav-logo {
      display: flex; align-items: center; gap: 12px;
      text-decoration: none;
    }
    .nav-logo-mark {
      width: 40px; height: 40px;
      border: 2px solid var(--gold);
      border-radius: 6px;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 22px; color: var(--gold);
      letter-spacing: 1px;
      flex-shrink: 0;
    }
    .nav-logo-text { display: flex; flex-direction: column; }
    .nav-logo-name {
      font-family: 'Cormorant Garamond', serif;
      font-size: 15px; font-weight: 600;
      color: var(--white); letter-spacing: 0.5px;
      line-height: 1.2;
    }
    .nav-logo-tag {
      font-size: 9px; font-weight: 500;
      color: var(--gold-lt); letter-spacing: 2px;
      text-transform: uppercase;
    }
    .nav-links { display: flex; align-items: center; gap: 32px; }
    .nav-links a {
      font-size: 13px; font-weight: 500; letter-spacing: 0.5px;
      color: rgba(255,255,255,0.75);
      text-decoration: none; transition: color 0.2s;
    }
    .nav-links a:hover { color: var(--gold-lt); }
    .nav-cta {
      background: var(--gold); color: var(--navy) !important;
      padding: 9px 22px; border-radius: 4px;
      font-weight: 600 !important; transition: background 0.2s !important;
    }
    .nav-cta:hover { background: var(--gold-lt) !important; color: var(--navy) !important; }
    .nav-toggle { display: none; cursor: pointer; background: none; border: none; }
    .nav-toggle span { display: block; width: 22px; height: 2px; background: var(--white); margin: 5px 0; border-radius: 2px; transition: 0.3s; }

    /* ─── HERO ─────────────────────────────────── */
    #hero {
      min-height: 100vh;
      background: var(--navy);
      display: flex; align-items: center;
      position: relative; overflow: hidden;
    }
    .hero-bg {
      position: absolute; inset: 0;
      background:
        radial-gradient(ellipse 60% 50% at 80% 40%, rgba(200,149,42,0.12) 0%, transparent 70%),
        radial-gradient(ellipse 40% 60% at 10% 70%, rgba(21,39,89,0.8) 0%, transparent 70%);
    }
    .hero-grid {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(200,149,42,0.07) 1px, transparent 1px),
        linear-gradient(90deg, rgba(200,149,42,0.07) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
    }
    .hero-inner {
      position: relative; z-index: 2;
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 60px; align-items: center;
      padding: 100px 40px 80px;
      max-width: 1200px; margin: 0 auto; width: 100%;
    }
    .hero-eyebrow {
      display: flex; align-items: center; gap: 12px;
      margin-bottom: 20px;
    }
    .hero-eyebrow-line { width: 36px; height: 2px; background: var(--gold); }
    .hero-eyebrow-text {
      font-size: 11px; font-weight: 600; letter-spacing: 3px;
      text-transform: uppercase; color: var(--gold);
    }
    .hero-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(38px, 5vw, 64px);
      font-weight: 600; line-height: 1.1;
      color: var(--white);
      margin-bottom: 24px;
    }
    .hero-title em { font-style: italic; color: var(--gold-lt); }
    .hero-subtitle {
      font-size: 16px; font-weight: 300;
      color: rgba(255,255,255,0.65);
      line-height: 1.7; max-width: 460px;
      margin-bottom: 40px;
    }
    .hero-buttons { display: flex; gap: 16px; flex-wrap: wrap; }
    .btn-primary {
      background: var(--gold); color: var(--navy);
      padding: 14px 32px; border-radius: 4px;
      font-weight: 600; font-size: 14px;
      text-decoration: none; letter-spacing: 0.3px;
      transition: background 0.2s, transform 0.2s;
      display: inline-block;
    }
    .btn-primary:hover { background: var(--gold-lt); transform: translateY(-2px); }
    .btn-outline {
      border: 1.5px solid rgba(255,255,255,0.3); color: var(--white);
      padding: 14px 32px; border-radius: 4px;
      font-weight: 500; font-size: 14px;
      text-decoration: none; letter-spacing: 0.3px;
      transition: border-color 0.2s, background 0.2s;
      display: inline-block;
    }
    .btn-outline:hover { border-color: var(--gold); background: rgba(200,149,42,0.08); }
    .hero-stats {
      display: flex; gap: 36px; margin-top: 52px;
      padding-top: 40px;
      border-top: 1px solid rgba(200,149,42,0.2);
    }
    .hero-stat-num {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 36px; color: var(--gold);
      line-height: 1;
    }
    .hero-stat-label { font-size: 12px; color: rgba(255,255,255,0.5); letter-spacing: 0.5px; margin-top: 4px; }

    /* Hero right – animated container visual */
    .hero-visual {
      display: flex; justify-content: center; align-items: center;
      position: relative; height: 420px;
    }
    .hero-globe {
      width: 300px; height: 300px; border-radius: 50%;
      border: 1.5px solid rgba(200,149,42,0.3);
      position: relative; animation: spin 24s linear infinite;
    }
    .hero-globe::before {
      content: ''; position: absolute; inset: 20px; border-radius: 50%;
      border: 1px dashed rgba(200,149,42,0.2);
    }
    .hero-globe::after {
      content: ''; position: absolute; inset: 50px; border-radius: 50%;
      border: 1.5px solid rgba(200,149,42,0.15);
    }
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    .globe-dot {
      position: absolute; width: 8px; height: 8px;
      border-radius: 50%; background: var(--gold);
      transform: translate(-50%, -50%);
      box-shadow: 0 0 10px var(--gold);
    }
    .globe-dot-1 { top: 20%; left: 60%; animation: pulse 2.5s ease-in-out infinite; }
    .globe-dot-2 { top: 55%; left: 85%; animation: pulse 2.5s ease-in-out 0.5s infinite; }
    .globe-dot-3 { top: 75%; left: 35%; animation: pulse 2.5s ease-in-out 1s infinite; }
    .globe-dot-4 { top: 30%; left: 15%; animation: pulse 2.5s ease-in-out 1.5s infinite; }
    @keyframes pulse { 0%,100%{opacity:0.4;transform:translate(-50%,-50%) scale(1)} 50%{opacity:1;transform:translate(-50%,-50%) scale(1.5)} }
    .globe-line {
      position: absolute; background: linear-gradient(90deg, transparent, rgba(200,149,42,0.5), transparent);
      height: 1px; transform-origin: left center;
    }
    .globe-center-icon {
      position: absolute; top: 50%; left: 50%;
      transform: translate(-50%,-50%);
      font-size: 48px;
    }
    .hero-badge {
      position: absolute; bottom: 20px; right: 0;
      background: rgba(14,30,68,0.9);
      border: 1px solid var(--border);
      border-radius: 8px; padding: 14px 20px;
      backdrop-filter: blur(8px);
      animation: float 4s ease-in-out infinite;
    }
    @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
    .hero-badge-label { font-size: 10px; color: var(--gold); font-weight: 600; letter-spacing: 2px; text-transform: uppercase; }
    .hero-badge-value { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 600; color: var(--white); margin-top: 2px; }

    /* ─── MARQUEE ──────────────────────────────── */
    .marquee-bar {
      background: var(--gold);
      padding: 12px 0; overflow: hidden;
      border-top: 1px solid rgba(0,0,0,0.1);
    }
    .marquee-track { display: flex; gap: 0; animation: marquee 22s linear infinite; white-space: nowrap; }
    .marquee-item {
      font-size: 12px; font-weight: 600; letter-spacing: 2px;
      text-transform: uppercase; color: var(--navy);
      padding: 0 40px;
    }
    .marquee-sep { color: rgba(8,17,42,0.4); padding: 0 4px; }
    @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }

    /* ─── SERVICES ─────────────────────────────── */
    #services { padding: 100px 0; background: var(--cream); }
    .section-header { text-align: center; margin-bottom: 64px; }
    .section-eyebrow {
      font-size: 11px; font-weight: 600; letter-spacing: 3px;
      text-transform: uppercase; color: var(--gold);
      margin-bottom: 14px; display: block;
    }
    .section-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(28px, 4vw, 48px);
      font-weight: 600; color: var(--navy);
      line-height: 1.15;
    }
    .section-title span { color: var(--gold); font-style: italic; }
    .section-desc { font-size: 16px; color: var(--text-lt); max-width: 560px; margin: 16px auto 0; line-height: 1.7; }
    .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
    .service-card {
      background: var(--white);
      padding: 44px 36px; position: relative; overflow: hidden;
      border: 1px solid rgba(200,149,42,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
      cursor: default;
    }
    .service-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 24px 60px rgba(8,17,42,0.12);
    }
    .service-card::before {
      content: ''; position: absolute; top: 0; left: 0;
      width: 4px; height: 0; background: var(--gold);
      transition: height 0.4s ease;
    }
    .service-card:hover::before { height: 100%; }
    .service-icon {
      font-size: 36px; margin-bottom: 20px; display: block;
      filter: grayscale(0); transition: transform 0.3s;
    }
    .service-card:hover .service-icon { transform: scale(1.15); }
    .service-number {
      position: absolute; top: 20px; right: 24px;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 56px; color: rgba(200,149,42,0.08);
      line-height: 1; pointer-events: none;
      transition: color 0.3s;
    }
    .service-card:hover .service-number { color: rgba(200,149,42,0.15); }
    .service-name {
      font-family: 'Cormorant Garamond', serif;
      font-size: 22px; font-weight: 600; color: var(--navy);
      margin-bottom: 12px; line-height: 1.2;
    }
    .service-desc { font-size: 14px; line-height: 1.7; color: var(--text-lt); }
    .service-features { margin-top: 20px; display: flex; flex-direction: column; gap: 6px; }
    .service-feat {
      display: flex; align-items: center; gap: 8px;
      font-size: 12.5px; color: var(--text-lt);
    }
    .service-feat::before { content: '—'; color: var(--gold); font-weight: 600; }

    /* ─── ABOUT ────────────────────────────────── */
    #about {
      padding: 100px 0;
      background: var(--navy);
      position: relative; overflow: hidden;
    }
    #about::before {
      content: '';
      position: absolute; top: -100px; right: -100px;
      width: 600px; height: 600px; border-radius: 50%;
      background: radial-gradient(circle, rgba(200,149,42,0.08) 0%, transparent 70%);
      pointer-events: none;
    }
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
    .about-label {
      display: inline-flex; align-items: center; gap: 10px;
      background: rgba(200,149,42,0.12);
      border: 1px solid rgba(200,149,42,0.3);
      padding: 8px 16px; border-radius: 2px;
      margin-bottom: 24px;
    }
    .about-label-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); animation: pulse 2s ease-in-out infinite; }
    .about-label-text { font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: var(--gold); }
    .about-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(26px, 3.5vw, 44px);
      font-weight: 600; color: var(--white);
      line-height: 1.15; margin-bottom: 24px;
    }
    .about-title em { font-style: italic; color: var(--gold-lt); }
    .about-text { font-size: 15px; color: rgba(255,255,255,0.65); line-height: 1.8; margin-bottom: 16px; }
    .about-verse {
      background: rgba(200,149,42,0.1);
      border-left: 3px solid var(--gold);
      padding: 16px 24px; margin: 32px 0;
      border-radius: 0 4px 4px 0;
    }
    .about-verse-text {
      font-family: 'Cormorant Garamond', serif;
      font-size: 17px; font-style: italic;
      color: var(--gold-lt); line-height: 1.6;
    }
    .about-verse-ref { font-size: 12px; color: rgba(255,255,255,0.4); margin-top: 8px; letter-spacing: 1px; }
    .about-right { position: relative; }
    .about-card-stack { position: relative; height: 440px; }
    .about-card {
      position: absolute;
      background: rgba(21,39,89,0.6);
      border: 1px solid rgba(200,149,42,0.2);
      border-radius: 8px; padding: 28px;
      backdrop-filter: blur(8px);
    }
    .about-card-main { inset: 0; top: 40px; }
    .about-card-accent { width: 200px; bottom: 0; right: 0; background: rgba(200,149,42,0.15); border-color: rgba(200,149,42,0.4); }
    .about-card-title { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 600; color: var(--white); margin-bottom: 20px; }
    .about-card-list { display: flex; flex-direction: column; gap: 12px; }
    .about-card-item { display: flex; align-items: flex-start; gap: 12px; }
    .about-card-bullet { width: 20px; height: 20px; border-radius: 50%; background: rgba(200,149,42,0.2); border: 1px solid var(--gold); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
    .about-card-bullet-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); }
    .about-card-text { font-size: 13.5px; color: rgba(255,255,255,0.7); line-height: 1.5; }
    .about-card-accent-num { font-family: 'Bebas Neue', sans-serif; font-size: 48px; color: var(--gold); line-height: 1; }
    .about-card-accent-label { font-size: 12px; color: rgba(255,255,255,0.6); margin-top: 4px; }

    /* ─── WHY US ────────────────────────────────── */
    #why { padding: 100px 0; background: var(--cream); }
    .why-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
    .why-card {
      background: var(--white);
      border: 1px solid rgba(200,149,42,0.12);
      border-radius: 6px; padding: 36px;
      display: flex; gap: 24px; align-items: flex-start;
      transition: border-color 0.3s, box-shadow 0.3s;
    }
    .why-card:hover { border-color: var(--gold); box-shadow: 0 8px 32px rgba(8,17,42,0.08); }
    .why-icon-box {
      width: 52px; height: 52px; border-radius: 8px;
      background: linear-gradient(135deg, rgba(200,149,42,0.15), rgba(200,149,42,0.05));
      border: 1px solid rgba(200,149,42,0.25);
      display: flex; align-items: center; justify-content: center;
      font-size: 22px; flex-shrink: 0;
    }
    .why-title { font-family: 'Cormorant Garamond', serif; font-size: 19px; font-weight: 600; color: var(--navy); margin-bottom: 8px; }
    .why-desc { font-size: 14px; color: var(--text-lt); line-height: 1.7; }

    /* ─── PROCESS ──────────────────────────────── */
    #process {
      padding: 100px 0;
      background: linear-gradient(180deg, var(--navy-mid) 0%, var(--navy) 100%);
    }
    .process-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; position: relative; margin-top: 60px; }
    .process-steps::before {
      content: ''; position: absolute;
      top: 36px; left: 12.5%; right: 12.5%;
      height: 1px; background: linear-gradient(90deg, transparent, rgba(200,149,42,0.5), transparent);
    }
    .process-step { text-align: center; padding: 0 20px; }
    .step-num-wrap { position: relative; display: inline-flex; margin-bottom: 20px; }
    .step-num {
      width: 72px; height: 72px; border-radius: 50%;
      border: 1.5px solid var(--gold);
      background: var(--navy);
      display: flex; align-items: center; justify-content: center;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 28px; color: var(--gold);
      position: relative; z-index: 1;
      transition: background 0.3s;
    }
    .process-step:hover .step-num { background: rgba(200,149,42,0.15); }
    .step-icon { font-size: 24px; margin-bottom: 12px; }
    .step-title { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 600; color: var(--white); margin-bottom: 8px; }
    .step-desc { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.6; }

    /* ─── TESTIMONIAL ──────────────────────────── */
    #testimonials { padding: 80px 0; background: var(--cream); }
    .testimonial-strip {
      background: var(--white);
      border: 1px solid rgba(200,149,42,0.15);
      border-radius: 8px; padding: 48px 56px;
      display: flex; gap: 48px; align-items: flex-start;
    }
    .quote-mark {
      font-family: 'Cormorant Garamond', serif;
      font-size: 96px; color: var(--gold); line-height: 0.6;
      flex-shrink: 0; padding-top: 16px;
    }
    .testimonial-text {
      font-family: 'Cormorant Garamond', serif;
      font-size: 22px; font-style: italic;
      color: var(--navy); line-height: 1.6;
      margin-bottom: 20px;
    }
    .testimonial-author { font-size: 13px; font-weight: 600; color: var(--gold); letter-spacing: 1px; text-transform: uppercase; }
    .testimonial-role { font-size: 12px; color: var(--text-lt); margin-top: 2px; }

    /* ─── CONTACT ──────────────────────────────── */
    #contact {
      padding: 100px 0;
      background: var(--navy);
      position: relative; overflow: hidden;
    }
    #contact::after {
      content: 'TEHILA';
      position: absolute; bottom: -40px; right: -20px;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 200px; color: rgba(200,149,42,0.04);
      pointer-events: none; line-height: 1;
    }
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; }
    .contact-lead {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(26px, 3.5vw, 44px);
      font-weight: 600; color: var(--white);
      line-height: 1.15; margin-bottom: 20px;
    }
    .contact-lead em { font-style: italic; color: var(--gold-lt); }
    .contact-subtext { font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 40px; }
    .contact-items { display: flex; flex-direction: column; gap: 24px; }
    .contact-item { display: flex; gap: 16px; align-items: flex-start; }
    .contact-item-icon {
      width: 44px; height: 44px; border-radius: 6px;
      border: 1px solid rgba(200,149,42,0.3);
      display: flex; align-items: center; justify-content: center;
      font-size: 18px; flex-shrink: 0;
      background: rgba(200,149,42,0.08);
    }
    .contact-item-label { font-size: 11px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold); margin-bottom: 4px; }
    .contact-item-value { font-size: 14px; color: rgba(255,255,255,0.75); }
    /* contact form */
    .contact-form-wrap {
      background: rgba(21,39,89,0.4);
      border: 1px solid rgba(200,149,42,0.2);
      border-radius: 8px; padding: 40px;
    }
    .form-title { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: var(--white); margin-bottom: 28px; }
    .form-group { margin-bottom: 20px; }
    .form-group label { display: block; font-size: 12px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: var(--gold); margin-bottom: 8px; }
    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      background: rgba(8,17,42,0.5);
      border: 1px solid rgba(200,149,42,0.2);
      border-radius: 4px; padding: 12px 16px;
      color: var(--white); font-size: 14px;
      font-family: 'DM Sans', sans-serif;
      transition: border-color 0.2s;
      outline: none;
    }
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus { border-color: var(--gold); }
    .form-group select option { background: var(--navy-mid); }
    .form-group textarea { resize: vertical; min-height: 100px; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .form-submit {
      width: 100%; padding: 14px;
      background: var(--gold); color: var(--navy);
      font-weight: 700; font-size: 14px; letter-spacing: 0.5px;
      border: none; border-radius: 4px; cursor: pointer;
      transition: background 0.2s, transform 0.2s;
      font-family: 'DM Sans', sans-serif;
    }
    .form-submit:hover { background: var(--gold-lt); transform: translateY(-2px); }
    .form-note { text-align: center; font-size: 11.5px; color: rgba(255,255,255,0.35); margin-top: 12px; }

    /* ─── FOOTER ───────────────────────────────── */
    footer {
      background: #050D1E;
      border-top: 1px solid rgba(200,149,42,0.15);
      padding: 48px 0 28px;
    }
    .footer-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap; }
    .footer-logo-block { max-width: 280px; }
    .footer-logo-name { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: var(--white); }
    .footer-logo-sub { font-size: 11px; color: var(--gold); letter-spacing: 2px; text-transform: uppercase; margin-top: 2px; }
    .footer-motto { font-size: 13px; color: rgba(255,255,255,0.4); margin-top: 12px; font-style: italic; }
    .footer-links { display: flex; flex-direction: column; gap: 8px; }
    .footer-links a { font-size: 13px; color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.2s; }
    .footer-links a:hover { color: var(--gold-lt); }
    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.06);
      margin-top: 36px; padding-top: 20px;
      display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;
    }
    .footer-copy { font-size: 12px; color: rgba(255,255,255,0.3); }
    .footer-reg { font-size: 12px; color: rgba(200,149,42,0.5); }

    /* ─── MOBILE ───────────────────────────────── */
    @media (max-width: 900px) {
      .nav-links { display: none; flex-direction: column; position: absolute; top: 72px; left: 0; right: 0; background: var(--navy); padding: 20px 32px; gap: 16px; border-bottom: 1px solid var(--border); }
      .nav-links.open { display: flex; }
      .nav-toggle { display: block; }
      .hero-inner { grid-template-columns: 1fr; padding: 100px 24px 60px; }
      .hero-visual { display: none; }
      .services-grid { grid-template-columns: 1fr; }
      .about-grid { grid-template-columns: 1fr; }
      .about-card-stack { display: none; }
      .why-grid { grid-template-columns: 1fr; }
      .process-steps { grid-template-columns: 1fr 1fr; }
      .process-steps::before { display: none; }
      .contact-grid { grid-template-columns: 1fr; }
      .testimonial-strip { flex-direction: column; padding: 32px 24px; gap: 16px; }
      .footer-inner { flex-direction: column; align-items: flex-start; }
      .form-row { grid-template-columns: 1fr; }
      .hero-stats { flex-wrap: wrap; gap: 20px; }
    }
    @media (max-width: 600px) {
      .container { padding: 0 20px; }
      nav { padding: 0 20px; }
      .process-steps { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

<!-- ─── NAVIGATION ────────────────────────────── -->
<nav id="main-nav">
  <a href="#hero" class="nav-logo">
    <div class="nav-logo-mark">TIL</div>
    <div class="nav-logo-text">
      <span class="nav-logo-name">Tehila International Logistics</span>
      <span class="nav-logo-tag">Uganda · East Africa</span>
    </div>
  </a>
  <div class="nav-links" id="nav-links">
    <a href="#services">Services</a>
    <a href="#about">About</a>
    <a href="#why">Why Us</a>
    <a href="#process">Process</a>
    <a href="#contact" class="nav-cta">Get a Quote</a>
  </div>
  <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- ─── HERO ──────────────────────────────────── -->
<section id="hero">
  <div class="hero-bg"></div>
  <div class="hero-grid"></div>
  <div class="hero-inner">
    <div class="hero-content">
      <div class="hero-eyebrow">
        <span class="hero-eyebrow-line"></span>
        <span class="hero-eyebrow-text">Licensed Clearing &amp; Forwarding Agents · Uganda</span>
      </div>
      <h1 class="hero-title">
        Moving Cargo<br/>
        Across <em>Borders</em><br/>
        With Precision.
      </h1>
      <p class="hero-subtitle">
        Tehila International Logistics Ltd provides seamless customs clearing, freight forwarding, transportation and consolidation services throughout Uganda and East Africa — with integrity, efficiency and excellence.
      </p>
      <div class="hero-buttons">
        <a href="#contact" class="btn-primary">Request a Quote</a>
        <a href="#services" class="btn-outline">Our Services</a>
      </div>
      <div class="hero-stats">
        <div>
          <div class="hero-stat-num">URA</div>
          <div class="hero-stat-label">Licensed Agent</div>
        </div>
        <div>
          <div class="hero-stat-num">EAC</div>
          <div class="hero-stat-label">Regional Coverage</div>
        </div>
        <div>
          <div class="hero-stat-num">24/7</div>
          <div class="hero-stat-label">Client Support</div>
        </div>
        <div>
          <div class="hero-stat-num">100%</div>
          <div class="hero-stat-label">Compliance Rate</div>
        </div>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-globe">
        <div class="globe-dot globe-dot-1"></div>
        <div class="globe-dot globe-dot-2"></div>
        <div class="globe-dot globe-dot-3"></div>
        <div class="globe-dot globe-dot-4"></div>
        <div class="globe-center-icon">🌍</div>
      </div>
      <div class="hero-badge">
        <div class="hero-badge-label">Based in</div>
        <div class="hero-badge-value">Nakawa / Entebbe, Uganda</div>
      </div>
    </div>
  </div>
</section>

<!-- ─── MARQUEE ────────────────────────────────── -->
<div class="marquee-bar">
  <div class="marquee-track">
    <span class="marquee-item">Customs Clearing <span class="marquee-sep">✦</span></span>
    <span class="marquee-item">Freight Forwarding <span class="marquee-sep">✦</span></span>
    <span class="marquee-item">Transportation <span class="marquee-sep">✦</span></span>
    <span class="marquee-item">Cargo Consolidation <span class="marquee-sep">✦</span></span>
    <span class="marquee-item">URA Declarations <span class="marquee-sep">✦</span></span>
    <span class="marquee-item">ASYCUDA World Filing <span class="marquee-sep">✦</span></span>
    <span class="marquee-item">Bills of Entry <span class="marquee-sep">✦</span></span>
    <span class="marquee-item">Import &amp; Export Handling <span class="marquee-sep">✦</span></span>
    <!-- duplicate for seamless loop -->
    <span class="marquee-item">Customs Clearing <span class="marquee-sep">✦</span></span>
    <span class="marquee-item">Freight Forwarding <span class="marquee-sep">✦</span></span>
    <span class="marquee-item">Transportation <span class="marquee-sep">✦</span></span>
    <span class="marquee-item">Cargo Consolidation <span class="marquee-sep">✦</span></span>
    <span class="marquee-item">URA Declarations <span class="marquee-sep">✦</span></span>
    <span class="marquee-item">ASYCUDA World Filing <span class="marquee-sep">✦</span></span>
    <span class="marquee-item">Bills of Entry <span class="marquee-sep">✦</span></span>
    <span class="marquee-item">Import &amp; Export Handling <span class="marquee-sep">✦</span></span>
  </div>
</div>

<!-- ─── SERVICES ──────────────────────────────── -->
<section id="services">
  <div class="container">
    <div class="section-header reveal">
      <span class="section-eyebrow">What We Do</span>
      <h2 class="section-title">End-to-End <span>Logistics Solutions</span></h2>
      <p class="section-desc">From port documentation to final-mile delivery, we manage every link in your supply chain with speed and precision.</p>
    </div>
    <div class="services-grid">
      <div class="service-card reveal">
        <span class="service-number">01</span>
        <span class="service-icon">📋</span>
        <h3 class="service-name">Customs Clearing &amp; Documentation</h3>
        <p class="service-desc">Expert preparation and lodgement of all customs entries including Single Administrative Documents (SADs) on ASYCUDA World, ensuring swift URA release.</p>
        <div class="service-features">
          <div class="service-feat">Import &amp; Export Declarations</div>
          <div class="service-feat">HS Tariff Classification</div>
          <div class="service-feat">Duty &amp; Tax Calculation</div>
          <div class="service-feat">Bills of Entry Processing</div>
        </div>
      </div>
      <div class="service-card reveal">
        <span class="service-number">02</span>
        <span class="service-icon">🚢</span>
        <h3 class="service-name">International Freight Forwarding</h3>
        <p class="service-desc">Comprehensive sea, air and road freight solutions connecting Uganda and East Africa with global markets through trusted carrier partnerships.</p>
        <div class="service-features">
          <div class="service-feat">Sea Freight (FCL &amp; LCL)</div>
          <div class="service-feat">Air Freight Coordination</div>
          <div class="service-feat">Road Freight – EAC Corridor</div>
          <div class="service-feat">Letter of Credit Support</div>
        </div>
      </div>
      <div class="service-card reveal">
        <span class="service-number">03</span>
        <span class="service-icon">🚛</span>
        <h3 class="service-name">Transportation &amp; Delivery</h3>
        <p class="service-desc">Reliable road transport of cleared goods from Entebbe/Mombasa/Dar es Salaam ports to warehouses or final destinations anywhere in Uganda.</p>
        <div class="service-features">
          <div class="service-feat">Port-to-Door Delivery</div>
          <div class="service-feat">Bulk &amp; Project Cargo</div>
          <div class="service-feat">Refrigerated Transport</div>
          <div class="service-feat">Live GPS Tracking</div>
        </div>
      </div>
      <div class="service-card reveal">
        <span class="service-number">04</span>
        <span class="service-icon">📦</span>
        <h3 class="service-name">Cargo Consolidation (LCL)</h3>
        <p class="service-desc">Cost-effective groupage solutions for small to medium shipments — we consolidate cargo from multiple shippers into a single container to reduce freight costs.</p>
        <div class="service-features">
          <div class="service-feat">China–Uganda Consolidation</div>
          <div class="service-feat">Mombasa Groupage Hub</div>
          <div class="service-feat">Shared Container Services</div>
          <div class="service-feat">Transparent Cost Sharing</div>
        </div>
      </div>
      <div class="service-card reveal">
        <span class="service-number">05</span>
        <span class="service-icon">🏪</span>
        <h3 class="service-name">Warehousing &amp; Distribution</h3>
        <p class="service-desc">Secure short and long-term warehousing near Entebbe and Nakawa with flexible distribution options to support your inventory management needs.</p>
        <div class="service-features">
          <div class="service-feat">Bonded &amp; General Warehousing</div>
          <div class="service-feat">Pick &amp; Pack Services</div>
          <div class="service-feat">Inventory Management</div>
          <div class="service-feat">Last-Mile Distribution</div>
        </div>
      </div>
      <div class="service-card reveal">
        <span class="service-number">06</span>
        <span class="service-icon">🔍</span>
        <h3 class="service-name">Logistics Consultancy</h3>
        <p class="service-desc">Expert advisory on import/export procedures, duty optimisation, EAC trade compliance, and supply chain structuring for businesses entering the Ugandan market.</p>
        <div class="service-features">
          <div class="service-feat">URA Compliance Advisory</div>
          <div class="service-feat">EAC Rules of Origin</div>
          <div class="service-feat">Trade Finance Guidance</div>
          <div class="service-feat">Regulatory Submissions</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ─── ABOUT ───────────────────────────────────── -->
<section id="about">
  <div class="container">
    <div class="about-grid">
      <div class="reveal">
        <div class="about-label">
          <span class="about-label-dot"></span>
          <span class="about-label-text">About Tehila International Logistics</span>
        </div>
        <h2 class="about-title">Built on <em>Integrity</em>, Driven by Excellence</h2>
        <p class="about-text">
          Tehila International Logistics Ltd is a Uganda-based clearing and forwarding company operating from Nakawa and Entebbe — Uganda's gateway to global trade. Founded with a commitment to transparent, efficient and ethical logistics, we serve importers, exporters, manufacturers and traders across East Africa.
        </p>
        <p class="about-text">
          Led by Director <strong style="color:rgba(255,255,255,0.85)">Fred Rwakyooya</strong>, a seasoned logistics professional with deep expertise in URA customs procedures, ASYCUDA World declarations, freight forwarding and supply chain management, Tehila delivers results that go beyond mere compliance — we become your strategic logistics partner.
        </p>
        <div class="about-verse">
          <div class="about-verse-text">"The name Tehila means praise — and in all that we do, we strive to be a company worthy of it."</div>
          <div class="about-verse-ref">— Our Company Philosophy</div>
        </div>
      </div>
      <div class="about-right reveal">
        <div class="about-card-stack">
          <div class="about-card about-card-main">
            <div class="about-card-title">Our Core Commitments</div>
            <div class="about-card-list">
              <div class="about-card-item">
                <div class="about-card-bullet"><div class="about-card-bullet-dot"></div></div>
                <div class="about-card-text"><strong style="color:rgba(255,255,255,0.9)">Compliance First</strong> — Every declaration is accurate, complete and filed on time. We protect your cargo and your reputation.</div>
              </div>
              <div class="about-card-item">
                <div class="about-card-bullet"><div class="about-card-bullet-dot"></div></div>
                <div class="about-card-text"><strong style="color:rgba(255,255,255,0.9)">Transparent Costing</strong> — No hidden charges. You receive full itemised invoices for every service.</div>
              </div>
              <div class="about-card-item">
                <div class="about-card-bullet"><div class="about-card-bullet-dot"></div></div>
                <div class="about-card-text"><strong style="color:rgba(255,255,255,0.9)">Speed &amp; Reliability</strong> — We understand that delayed cargo means lost revenue. We act fast.</div>
              </div>
              <div class="about-card-item">
                <div class="about-card-bullet"><div class="about-card-bullet-dot"></div></div>
                <div class="about-card-text"><strong style="color:rgba(255,255,255,0.9)">Client Communication</strong> — Real-time updates on your shipment status throughout the clearance journey.</div>
              </div>
            </div>
          </div>
          <div class="about-card about-card-accent">
            <div class="about-card-accent-num">EAC</div>
            <div class="about-card-accent-label">East Africa Coverage</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ─── WHY US ──────────────────────────────────── -->
<section id="why">
  <div class="container">
    <div class="section-header reveal">
      <span class="section-eyebrow">Why Choose Us</span>
      <h2 class="section-title">The <span>Tehila Advantage</span></h2>
      <p class="section-desc">What sets us apart in Uganda's competitive logistics landscape.</p>
    </div>
    <div class="why-grid">
      <div class="why-card reveal">
        <div class="why-icon-box">🏛️</div>
        <div>
          <h3 class="why-title">URA Licensed &amp; Compliant</h3>
          <p class="why-desc">We are a fully licensed clearing and forwarding agent registered with Uganda Revenue Authority, operating within all EAC Customs Management Act regulations.</p>
        </div>
      </div>
      <div class="why-card reveal">
        <div class="why-icon-box">⚡</div>
        <div>
          <h3 class="why-title">Fast Clearance Turnaround</h3>
          <p class="why-desc">Leveraging ASYCUDA World expertise and strong URA relationships, we achieve one of the fastest clearance turnaround times in the industry — minimising demurrage and storage charges.</p>
        </div>
      </div>
      <div class="why-card reveal">
        <div class="why-icon-box">🌐</div>
        <div>
          <h3 class="why-title">East African Regional Network</h3>
          <p class="why-desc">With partners across the Northern and Central Corridors — including Mombasa, Dar es Salaam and Busia — we provide seamless cross-border logistics throughout the EAC bloc.</p>
        </div>
      </div>
      <div class="why-card reveal">
        <div class="why-icon-box">👨‍💼</div>
        <div>
          <h3 class="why-title">Experienced Leadership</h3>
          <p class="why-desc">Our team is led by professionals with hands-on experience in government freight, commercial imports, fish export logistics and international trade finance.</p>
        </div>
      </div>
      <div class="why-card reveal">
        <div class="why-icon-box">💰</div>
        <div>
          <h3 class="why-title">Competitive &amp; Transparent Rates</h3>
          <p class="why-desc">We offer market-competitive pricing with full cost transparency. Our consultative approach identifies duty savings and consolidation opportunities to maximise your value.</p>
        </div>
      </div>
      <div class="why-card reveal">
        <div class="why-icon-box">🤝</div>
        <div>
          <h3 class="why-title">Personal &amp; Dedicated Service</h3>
          <p class="why-desc">You always deal directly with your assigned logistics officer. No call centres — just dedicated, responsive professionals committed to your cargo's success.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ─── PROCESS ─────────────────────────────────── -->
<section id="process">
  <div class="container">
    <div class="section-header reveal">
      <span class="section-eyebrow" style="color:var(--gold-lt)">How It Works</span>
      <h2 class="section-title" style="color:var(--white)">Our <span>Clearance Process</span></h2>
      <p class="section-desc" style="color:rgba(255,255,255,0.55)">A proven, step-by-step approach to getting your cargo cleared and delivered without delays.</p>
    </div>
    <div class="process-steps">
      <div class="process-step reveal">
        <div class="step-num-wrap">
          <div class="step-num">01</div>
        </div>
        <div class="step-icon">📄</div>
        <div class="step-title">Submit Documents</div>
        <p class="step-desc">Provide commercial invoice, packing list, Bill of Lading / Airway Bill and permits. We handle the rest.</p>
      </div>
      <div class="process-step reveal">
        <div class="step-num-wrap">
          <div class="step-num">02</div>
        </div>
        <div class="step-icon">🖥️</div>
        <div class="step-title">ASYCUDA Filing</div>
        <p class="step-desc">We lodge your declaration on ASYCUDA World, applying correct HS codes and EAC CET duty rates for full URA compliance.</p>
      </div>
      <div class="process-step reveal">
        <div class="step-num-wrap">
          <div class="step-num">03</div>
        </div>
        <div class="step-icon">✅</div>
        <div class="step-title">Customs Release</div>
        <p class="step-desc">After assessment and duty payment, we obtain the release order and supervise physical examination where required.</p>
      </div>
      <div class="process-step reveal">
        <div class="step-num-wrap">
          <div class="step-num">04</div>
        </div>
        <div class="step-icon">🚛</div>
        <div class="step-title">Delivery &amp; Handover</div>
        <p class="step-desc">Your cargo is transported to your specified destination and handed over with full documentation and delivery confirmation.</p>
      </div>
    </div>
  </div>
</section>

<!-- ─── TESTIMONIAL ─────────────────────────────── -->
<section id="testimonials">
  <div class="container">
    <div class="testimonial-strip reveal">
      <div class="quote-mark">"</div>
      <div>
        <p class="testimonial-text">Tehila handled our machinery imports from China flawlessly — from consolidation in Guangzhou to delivery at our Kampala factory. The level of expertise, communication and dedication was outstanding. Fred and the team saved us significant time and duty costs.</p>
        <div class="testimonial-author">A Satisfied Importer</div>
        <div class="testimonial-role">Manufacturing Sector, Kampala, Uganda</div>
      </div>
    </div>
  </div>
</section>

<!-- ─── CONTACT ─────────────────────────────────── -->
<section id="contact">
  <div class="container" style="position:relative;z-index:2">
    <div class="contact-grid">
      <div class="reveal">
        <h2 class="contact-lead">Let's Move Your<br/><em>Cargo Forward</em></h2>
        <p class="contact-subtext">Whether you have an urgent clearance, a regular import/export programme or a complex project cargo requirement — our team is ready to deliver. Get in touch today.</p>
        <div class="contact-items">
          <div class="contact-item">
            <div class="contact-item-icon">📍</div>
            <div>
              <div class="contact-item-label">Office Address</div>
              <div class="contact-item-value">Richflo Building, Kalitunsi, Nakawa, Kampala, Uganda</div>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-item-icon">📞</div>
            <div>
              <div class="contact-item-label">Phone / WhatsApp</div>
              <div class="contact-item-value">
                Tel: +256 392 989 522<br/>
                Mob: +256 702 206 320<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+256 718 780 000<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+256 772 493 706<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+256 712 728 282
              </div>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-item-icon">✉️</div>
            <div>
              <div class="contact-item-label">Email</div>
              <div class="contact-item-value">
                tehilalogisticsltd@aol.com<br/>
                fredrwakyooya@gmail.com<br/>
                fredrwakyooya@aol.com
              </div>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-item-icon">🕐</div>
            <div>
              <div class="contact-item-label">Business Hours</div>
              <div class="contact-item-value">Mon – Fri: 8:00 AM – 6:00 PM<br/>Sat: 9:00 AM – 1:00 PM</div>
            </div>
          </div>
        </div>
      </div>
      <div class="reveal">
        <div class="contact-form-wrap">
          <h3 class="form-title">Request a Free Quote</h3>
          <div class="form-row">
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Your name"/>
            </div>
            <div class="form-group">
              <label>Company</label>
              <input type="text" placeholder="Company name"/>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Phone / WhatsApp</label>
              <input type="tel" placeholder="+256 ..."/>
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="email@company.com"/>
            </div>
          </div>
          <div class="form-group">
            <label>Service Required</label>
            <select>
              <option value="">Select a service…</option>
              <option>Customs Clearing &amp; Documentation</option>
              <option>International Freight Forwarding</option>
              <option>Transportation &amp; Delivery</option>
              <option>Cargo Consolidation (LCL)</option>
              <option>Warehousing &amp; Distribution</option>
              <option>Logistics Consultancy</option>
            </select>
          </div>
          <div class="form-group">
            <label>Shipment Details / Message</label>
            <textarea placeholder="Describe your cargo, origin/destination, volume or any specific requirements…"></textarea>
          </div>
          <button class="form-submit" onclick="alert('Thank you! Tehila International Logistics will contact you shortly.')">Send Request →</button>
          <p class="form-note">We respond to all enquiries within 2 business hours.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ─── FOOTER ──────────────────────────────────── -->
<footer>
  <div class="container">
    <div class="footer-inner">
      <div class="footer-logo-block">
        <div class="footer-logo-name">Tehila International Logistics Ltd</div>
        <div class="footer-logo-sub">Clearing · Forwarding · Transportation</div>
        <div class="footer-motto">"Moving cargo across borders — with integrity, precision and excellence."</div>
      </div>
      <div>
        <div style="font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:12px;">Services</div>
        <div class="footer-links">
          <a href="#services">Customs Clearing</a>
          <a href="#services">Freight Forwarding</a>
          <a href="#services">Transportation</a>
          <a href="#services">Consolidation</a>
          <a href="#services">Warehousing</a>
        </div>
      </div>
      <div>
        <div style="font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:12px;">Company</div>
        <div class="footer-links">
          <a href="#about">About Us</a>
          <a href="#why">Why Choose Us</a>
          <a href="#process">Our Process</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Get a Quote</a>
        </div>
      </div>
      <div>
        <div style="font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:12px;">Coverage</div>
        <div class="footer-links">
          <a href="#contact">Richflo Building, Kalitunsi, Nakawa</a>
          <a href="#contact">Kenya (Mombasa Corridor)</a>
          <a href="#contact">Tanzania (Dar Corridor)</a>
          <a href="#contact">Rwanda / Burundi</a>
          <a href="#contact">South Sudan</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">© 2025 Tehila International Logistics Ltd. All rights reserved.</div>
      <div class="footer-reg">Registered in Uganda · Licensed Clearing &amp; Forwarding Agent</div>
    </div>
  </div>
</footer>

<script>
  // Scroll-reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => io.observe(r));

  // Mobile nav
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Nav scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('main-nav').style.background =
      window.scrollY > 60 ? 'rgba(8,17,42,0.98)' : 'rgba(8,17,42,0.92)';
  });
</script>
</body>
</html>
