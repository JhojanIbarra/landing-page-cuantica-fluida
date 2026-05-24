const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#B8860B",
  "warmCream": "#FEF9F3",
  "softGold": "#D4A853",
  "deepWarm": "#3D2E1E",
  "mutedWarm": "#8B7355"
}/*EDITMODE-END*/;

const phases = [
  ['Fase 1', 'Lo que no ves te está gobernando — El universo cuántico al alcance de todos'],
  ['Fase 2', 'El código que nadie te enseñó a leer — Neuroplasticidad y el piloto automático'],
  ['Fase 3', 'Fórmula para la maestría personal — Microacciones cuánticas y la fluidez'],
  ['Fase 4', 'Hackea tu alma — Tecnología sagrada para rediseñar tu campo'],
  ['Fase 5', 'Despierta tu potencial cuántico — Identidad energética y atracción'],
  ['Fase 6', 'La vida te responde — Tu realidad como espejo, señales y sincronicidades'],
  ['Fase 7', 'El manual del ser que ya eres — Integración total y práctica diaria']
];

const painItems = [
  'Sabes todo sobre desarrollo personal pero tu vida no refleja nada de eso',
  'Te autosaboteas exactamente cuando algo bueno está por llegar',
  'Manifiestas, afirmas, agradeces… y nada despega',
  'La espiritualidad se volvió otra fuente de culpa y exigencia',
  'Sientes que naciste para algo más pero no puedes activarlo',
  'Llevas años en terapia, en cursos, en retiros — y algo sigue sin encajar'
];

const shifts = [
  ['Repites los mismos ciclos aunque “ya sanaste” eso', 'Identificas y cortas patrones desde la raíz'],
  ['Manifiestas desde el pánico de que no llegue', 'Manifiestas desde la certeza de quien ya sabe que es suficiente'],
  ['Te destruyes cuando estás a punto de lograrlo', 'Tu identidad vibra en lo que quieres, no en lo que temes'],
  ['Lees, aprendes, inspiras… y al día siguiente igual', 'Cada día tiene un ritual que sostiene el cambio sin esfuerzo brutal'],
  ['Sientes que la vida te pasa a ti', 'Dejas de forcejear. Empiezas a fluir. Y lo notas.']
];

const benefits = [
  ['Rituales de 5 a 20 minutos que realmente mueven algo', 'No necesitas horas de meditación ni retiros caros. Necesitas intención, constancia y las herramientas correctas.'],
  ['Por fin entenderás por qué sabías todo y nada cambiaba', 'Esa brecha entre el conocimiento y la encarnación tiene nombre. Y tiene solución.'],
  ['Sin más culpa espiritual', 'Se acabaron las afirmaciones que recitas sin sentir y los rituales que cumples por obligación.'],
  ['Microacciones que reorganizan tu realidad desde lo invisible', '30 gestos conscientes que transforman tu campo sin que tengas que reinventar tu vida.'],
  ['Palabras que reprograman, no que se recitan', 'Secuencias lingüísticas diseñadas para penetrar el subconsciente y reconfigurar tu campo desde dentro.'],
  ['Un método que no te pide que abandones nada', 'No tienes que renunciar a tu trabajo, tu pareja ni tu vida. Solo habitarlos desde una frecuencia diferente.']
];

const bonuses = [
  ['BONO #1', 'Mapa de Frecuencias Emocionales', '$27', 'Un diagnóstico para saber desde dónde partes, qué le está haciendo a tu cuerpo y cómo salir de ahí.'],
  ['BONO #2', 'Ritual de Mañana (audio guiado)', '$19', '10 minutos para activar tu campo antes de que el mundo entre y te robe la frecuencia.'],
  ['BONO #3', 'Ritual Cuántico de Noche', '$19', '5 pasos para decidir qué le das a procesar a tu subconsciente mientras duermes.'],
  ['BONO #4', '25 Preguntas de Poder', '$17', 'Un diagnóstico mensual de tu energía, tus patrones y tu dirección para mantenerte en curso.']
];

const testimonials = [
  ['Carolina M.', 'emprendedora', 'Tres años de terapia, dos retiros, cuatro cursos. Y seguía en el mismo círculo. Cuántica Fluida tocó algo que nada de eso había alcanzado.'],
  ['Valentina R.', 'docente', 'A las tres horas estaba llorando frente al espejo por primera vez en años, pero de alivio. Como si alguien hubiera dicho lo que yo no me atrevía a nombrar.'],
  ['Mariana S.', 'CEO', 'Dejé de forzar. Mis ingresos se duplicaron en seis meses. Mi equipo me dice que soy otra persona. Yo digo que por fin soy la misma.'],
  ['Juliana P.', 'terapeuta', 'Ahora lo recomiendo antes de cualquier proceso terapéutico. Si no sabes desde qué frecuencia operas, estás sanando a ciegas.']
];

const faqs = [
  ['¿Cómo recibo la guía?', 'En menos de 2 minutos después de tu pago te llega un email con el enlace de descarga. PDF y EPUB listos para leer en cualquier dispositivo.'],
  ['¿Y si ya llevo años en desarrollo personal?', 'Especialmente para ti. Cuántica Fluida existe para quienes ya hicieron todo lo “correcto” y algo todavía no encaja. Vas a entender por qué.'],
  ['¿Y si no sé nada de energía ni de física cuántica?', 'No necesitas saber nada. Está escrito en el lenguaje de quien siente, no de quien estudia. Si eres humano y algo dentro de ti dice “hay más”, es suficiente.'],
  ['¿Funciona si ya empecé a trabajar en mí?', 'Funciona mejor. Porque ya tienes el terreno preparado. Solo te faltaba la semilla correcta.'],
  ['¿Cuánto tiempo necesito?', 'Los rituales van de 5 a 20 minutos. El libro lo avanzas a tu ritmo. No hay prisa. Hay intención.']
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [typeDone, setTypeDone] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set(['hero']));
  const sectionRefs = useRef({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setTypeDone(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const allSections = ['hero', 'dolor', 'cambio', 'beneficios', 'guia', 'bonos', 'testimonios', 'garantia', 'precio', 'faq', 'final'];

    if (reduceMotion) {
      setVisibleSections(new Set(allSections));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const key = entry.target.getAttribute('data-reveal');
          if (key) setVisibleSections((current) => new Set(current).add(key));
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -10% 0px' });

    Object.values(sectionRefs.current).forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const reveal = (key, extraClass = '') => ({
    ref: (node) => { sectionRefs.current[key] = node; },
    'data-reveal': key,
    className: `section reveal-section ${extraClass} ${visibleSections.has(key) ? 'is-visible' : ''}`.trim()
  });

  return (
    <main className="page">
      <style>{`
        *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;background:var(--ocd-tweak-warm-cream,#FEF9F3);color:var(--ocd-tweak-deep-warm,#3D2E1E);font-family:"DM Sans","Helvetica Neue",system-ui,sans-serif} ::selection{background:rgba(212,168,83,.35)}
        .page{--bg:var(--ocd-tweak-warm-cream,#FEF9F3);--accent:var(--ocd-tweak-accent-color,#B8860B);--gold:var(--ocd-tweak-soft-gold,#D4A853);--text:var(--ocd-tweak-deep-warm,#3D2E1E);--muted:var(--ocd-tweak-muted-warm,#8B7355);background:radial-gradient(circle at 15% 4%,rgba(212,168,83,.24),transparent 28rem),linear-gradient(180deg,#fffaf4 0%,var(--bg) 100%);min-height:100vh;overflow:hidden}
        .nav{position:fixed;inset:0 0 auto;z-index:20;height:70px;padding:0 clamp(18px,4vw,38px);display:flex;align-items:center;justify-content:space-between;background:${scrolled ? 'rgba(254,249,243,.88)' : 'transparent'};backdrop-filter:${scrolled ? 'blur(18px)' : 'none'};box-shadow:${scrolled ? '0 1px 0 rgba(61,46,30,.08)' : 'none'};transition:.25s}.logo{font-family:Georgia,serif;font-size:1.35rem;letter-spacing:-.02em}.nav button,.cta{border:0;border-radius:999px;background:linear-gradient(135deg,var(--accent),var(--gold));color:white;font-weight:800;cursor:pointer;box-shadow:0 14px 34px rgba(184,134,11,.28);transition:.2s;text-decoration:none}.nav button{padding:.72rem 1.15rem}.cta{display:inline-flex;padding:1.08rem 1.9rem;font-size:1rem}.cta:hover,.nav button:hover{transform:translateY(-2px);box-shadow:0 18px 42px rgba(184,134,11,.36)}.section{max-width:1120px;margin:auto;padding:clamp(70px,9vw,112px) clamp(20px,4vw,34px)}.hero{padding-top:150px;text-align:center;position:relative}.eyebrow{display:inline-flex;align-items:center;gap:.55rem;border:1px solid rgba(184,134,11,.22);background:rgba(255,255,255,.58);color:var(--accent);border-radius:999px;padding:.46rem .9rem;text-transform:uppercase;letter-spacing:.12em;font-size:.74rem;font-weight:800}.dot{width:.46rem;height:.46rem;border-radius:50%;background:var(--gold);box-shadow:0 0 0 6px rgba(212,168,83,.18)}h1,h2,h3{font-family:Georgia,"DM Serif Display",serif;font-weight:400;color:var(--text);letter-spacing:-.035em}h1{font-size:clamp(2.55rem,7vw,5.1rem);line-height:1.02;margin:1.25rem auto .55rem;max-width:940px}.hero-subtitle{font-family:Georgia,"DM Serif Display",serif;font-size:clamp(1.35rem,3.4vw,2.2rem);line-height:1.2;letter-spacing:-.02em;color:var(--accent);margin:0 auto 1.25rem;max-width:780px}h2{font-size:clamp(2rem,5vw,3.45rem);line-height:1.08;margin:0 0 1rem}.typewriter{display:inline-block;overflow:hidden;white-space:nowrap;border-right:2px solid rgba(184,134,11,.85);max-width:100%;animation:typing 3.2s steps(56,end) .15s both,caretBlink .75s step-end infinite}.typewriter-done{border-right:0}@keyframes typing{from{width:0}to{width:100%}}@keyframes caretBlink{50%{border-color:transparent}}h3{font-size:clamp(1.25rem,3vw,1.75rem);line-height:1.18;margin:.2rem 0 .75rem}p{font-size:1.04rem;line-height:1.75;color:var(--muted)}.lead{font-size:clamp(1.08rem,2vw,1.28rem);max-width:760px;margin:0 auto 2.1rem}.sealrow{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin:2.2rem auto 0;max-width:920px}.seal,.card{background:linear-gradient(170deg,rgba(255,255,255,.96) 0%,rgba(255,250,240,.92) 100%);border:1px solid rgba(184,134,11,.2);box-shadow:0 18px 50px rgba(61,46,30,.08),0 2px 0 rgba(255,255,255,.8) inset;border-radius:22px}.seal{padding:1rem;font-weight:700;color:var(--text)}.split{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:22px;align-items:start;max-width:1040px}.card{padding:clamp(24px,4vw,38px);position:relative;overflow:visible;isolation:isolate}.card::before{content:"";position:absolute;inset:0;background:linear-gradient(120deg,rgba(212,168,83,.16),rgba(212,168,83,0) 46%);opacity:.62;pointer-events:none;border-radius:22px;z-index:1}.card::after{content:"";position:absolute;width:220px;height:220px;border-radius:50%;background:radial-gradient(circle,rgba(212,168,83,.34) 0%,rgba(212,168,83,.16) 34%,rgba(212,168,83,0) 74%);pointer-events:none;filter:blur(3px);z-index:-1}.card>*{position:relative;z-index:2}.card:nth-of-type(3n+1)::after{left:-62px;top:-58px}.card:nth-of-type(3n+2)::after{right:-70px;top:22%}.card:nth-of-type(3n)::after{left:28%;bottom:-88px}.card{box-shadow:0 30px 76px rgba(61,46,30,.16),0 10px 24px rgba(61,46,30,.1),0 2px 0 rgba(255,255,255,.8) inset}.painlist{display:grid;gap:12px;margin:1.2rem 0}.painlist li{list-style:none;display:flex;gap:.7rem;color:var(--text);font-weight:650}.check{color:var(--accent);font-weight:900}.compare{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin-top:2rem;max-width:1040px;margin-inline:auto}.comparecol{border-radius:24px;overflow:hidden;background:linear-gradient(180deg,#fff 0%,#fffaf1 100%);border:1px solid rgba(184,134,11,.2);box-shadow:0 20px 44px rgba(61,46,30,.1)}.comparecol h3{padding:1rem 1.2rem;margin:0;font-family:inherit;font-size:.86rem;letter-spacing:.14em;text-transform:uppercase;font-weight:900}.comparecol:first-child h3{background:linear-gradient(135deg,rgba(139,115,85,.22),rgba(61,46,30,.14));color:#4a3522}.comparecol.after{position:relative;z-index:1;background:linear-gradient(160deg,rgba(255,250,241,.94) 0%,rgba(255,244,220,.98) 100%);border-color:rgba(184,134,11,.34);box-shadow:0 24px 56px rgba(184,134,11,.2),0 0 0 1px rgba(212,168,83,.18)}.comparecol.after::before{content:"";position:absolute;inset:-26px -20px -30px -20px;z-index:-1;border-radius:36px;background:radial-gradient(circle at 50% 58%,rgba(212,168,83,.58) 0%,rgba(212,168,83,.3) 42%,rgba(212,168,83,0) 74%);filter:blur(16px);pointer-events:none}.comparecol.after>*{position:relative;z-index:1}.comparecol.after h3{background:linear-gradient(135deg,rgba(184,134,11,.34),rgba(212,168,83,.42));color:#fff;text-shadow:0 1px 2px rgba(61,46,30,.32)}.comparecol p{margin:0;padding:1rem 1.2rem;border-top:1px solid rgba(184,134,11,.12);font-size:.98rem;color:#4f3a27}.comparecol.after p{border-top:1px solid rgba(184,134,11,.2);color:#3d2e1e;font-weight:560}.grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;max-width:1040px;margin-inline:auto}.num{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:rgba(184,134,11,.1);color:var(--accent);font-weight:900;margin-bottom:1rem}.phases{display:grid;gap:14px;margin-top:1.5rem}.phase{display:grid;grid-template-columns:92px 1fr;gap:18px;align-items:center;padding:1.08rem 1.2rem;background:linear-gradient(170deg,rgba(255,255,255,.98) 0%,rgba(255,250,240,.94) 100%);border:1px solid rgba(184,134,11,.2);border-radius:20px;position:relative;overflow:visible;isolation:isolate;box-shadow:0 24px 62px rgba(61,46,30,.14),0 8px 20px rgba(61,46,30,.1),0 2px 0 rgba(255,255,255,.82) inset}.phase::before{content:"";position:absolute;inset:0;border-radius:20px;background:linear-gradient(120deg,rgba(212,168,83,.18),rgba(212,168,83,0) 48%);opacity:.7;pointer-events:none;z-index:1}.phase::after{content:"";position:absolute;width:220px;height:220px;border-radius:50%;background:radial-gradient(circle,rgba(212,168,83,.36) 0%,rgba(212,168,83,.17) 34%,rgba(212,168,83,0) 74%);filter:blur(4px);pointer-events:none;z-index:-1}.phase>*{position:relative;z-index:2}.phase:nth-child(3n+1)::after{left:-62px;top:-58px}.phase:nth-child(3n+2)::after{right:-72px;top:24%}.phase:nth-child(3n)::after{left:28%;bottom:-90px}.phase strong{color:var(--accent);font-size:.98rem;letter-spacing:.02em}.bonusgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;max-width:1040px;margin-inline:auto}.testgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;max-width:1040px;margin-inline:auto}.value{color:var(--accent);font-weight:900}.quote{position:relative}.quote:before{content:'“';position:absolute;right:24px;top:8px;font-family:Georgia,serif;font-size:4rem;color:rgba(212,168,83,.28)}.pricebox{max-width:720px;margin:2rem auto 0;text-align:center;background:white;border:1px solid rgba(184,134,11,.16);border-radius:30px;padding:clamp(28px,5vw,48px);box-shadow:0 24px 80px rgba(61,46,30,.08)}.price{font-family:Georgia,serif;font-size:clamp(3rem,8vw,5rem);color:var(--accent);line-height:1}.strike{text-decoration:line-through;color:var(--muted);font-size:1.2rem}.faq{max-width:860px;margin:2rem auto 0;display:grid;gap:12px}.faq button{width:100%;display:flex;justify-content:space-between;gap:16px;padding:1.1rem 1.25rem;background:white;border:1px solid rgba(184,134,11,.14);border-radius:16px;text-align:left;color:var(--text);font-weight:800;cursor:pointer}.faq p{background:white;margin:-12px 0 0;padding:0 1.25rem 1.25rem;border:1px solid rgba(184,134,11,.14);border-top:0;border-radius:0 0 16px 16px}.center{text-align:center}.soft{background:linear-gradient(180deg,rgba(212,168,83,.06),rgba(255,255,255,.18))}.final{max-width:760px;text-align:center}.fine{font-size:.9rem}.focus:focus-visible,button:focus-visible{outline:3px solid rgba(184,134,11,.35);outline-offset:3px}.keygold{color:var(--accent);font-weight:800;text-shadow:0 1px 0 rgba(255,255,255,.35)}.guarantee-card{position:relative;background:linear-gradient(160deg,#fffefb 0%,#fff6e6 52%,#fffdf7 100%);border:1px solid rgba(184,134,11,.34);box-shadow:0 34px 90px rgba(61,46,30,.18),0 0 0 1px rgba(212,168,83,.22) inset}.guarantee-card::before{content:"";position:absolute;inset:-34px -26px -38px;z-index:-1;border-radius:34px;background:radial-gradient(circle at 64% 42%,rgba(212,168,83,.58) 0%,rgba(212,168,83,.25) 44%,rgba(212,168,83,0) 76%);filter:blur(22px);pointer-events:none}.guarantee-badge{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem .85rem;border-radius:999px;background:rgba(184,134,11,.14);border:1px solid rgba(184,134,11,.3);color:var(--accent);font-size:.76rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase}.guarantee-title{font-size:clamp(1.4rem,3.2vw,2rem);margin:.9rem 0 .6rem;color:#4a3522}.guarantee-points{display:grid;gap:.66rem;margin:1rem 0 1.2rem;padding:0}.guarantee-points li{list-style:none;display:flex;gap:.58rem;font-weight:700;color:#4a3522}.guarantee-points .check{font-size:1.02rem}.guarantee-note{margin-top:.3rem;padding:.8rem .9rem;border-radius:14px;background:rgba(255,255,255,.62);border:1px dashed rgba(184,134,11,.36);color:#654a2f;font-weight:650}@keyframes rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}.hero>*{animation:rise .7s ease both}.hero>*:nth-child(2){animation-delay:.08s}.hero>*:nth-child(3){animation-delay:.16s}.hero>*:nth-child(4){animation-delay:.24s}
        .reveal-section{opacity:0;transform:translateY(42px);filter:blur(14px);transition:opacity 1.6s cubic-bezier(.2,.9,.2,1),transform 1.6s cubic-bezier(.2,.9,.2,1),filter 1.9s ease}.reveal-section.is-visible{opacity:1;transform:none;filter:none}.reveal-section :is(h1,h2,h3,p,li,strong,a,.eyebrow,.seal){opacity:0;transform:translateY(18px);filter:blur(10px);transition:opacity 1.8s cubic-bezier(.16,.95,.2,1),transform 1.8s cubic-bezier(.16,.95,.2,1),filter 2.2s ease}.reveal-section.is-visible :is(h1,h2,h3,p,li,strong,a,.eyebrow,.seal){opacity:1;transform:none;filter:blur(0)}.reveal-section.is-visible :is(h1,h2,h3){transition-delay:.18s}.reveal-section.is-visible :is(p,li){transition-delay:.34s}.reveal-section.is-visible :is(a,.seal){transition-delay:.46s}.card,.seal,.phase,.comparecol,.pricebox{transition:transform .32s cubic-bezier(.2,.8,.2,1),box-shadow .32s cubic-bezier(.2,.8,.2,1),border-color .28s ease,filter .32s ease}.card:hover,.seal:hover,.phase:hover,.comparecol:hover{transform:translateY(-6px) scale(1.01);box-shadow:0 28px 88px rgba(61,46,30,.14),0 0 0 1px rgba(212,168,83,.24) inset;border-color:rgba(184,134,11,.32);filter:saturate(1.04)}.pricebox{animation:softGlow 4.8s ease-in-out infinite}.dot{animation:pulseGold 2.8s ease-in-out infinite}.faq button span:last-child{transition:transform .22s ease}.faq button[aria-expanded="true"] span:last-child{transform:rotate(180deg)}.faq p{animation:faqOpen .24s ease both}.phase:nth-child(2n),.bonusgrid .card:nth-child(2n),.testgrid .card:nth-child(2n){transition-delay:.05s}.grid3 .card:nth-child(3n+2),.comparecol.after{transition-delay:.08s}.grid3 .card:nth-child(3n),.phase:nth-child(3n){transition-delay:.12s}@keyframes softGlow{0%,100%{box-shadow:0 24px 80px rgba(61,46,30,.08),0 0 0 rgba(212,168,83,0)}50%{box-shadow:0 26px 92px rgba(61,46,30,.1),0 0 42px rgba(212,168,83,.18)}}@keyframes pulseGold{0%,100%{box-shadow:0 0 0 6px rgba(212,168,83,.18)}50%{box-shadow:0 0 0 10px rgba(212,168,83,.08)}}@keyframes faqOpen{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}@media (prefers-reduced-motion: reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}.reveal-section{opacity:1;transform:none;filter:none}}@media(max-width:820px){.sealrow,.split,.compare,.grid3,.bonusgrid,.testgrid{grid-template-columns:1fr}.hero{padding-top:120px}.phase{grid-template-columns:1fr}.nav{height:64px}.nav button{display:none}.section{padding-block:68px}}
      `}</style>

      <nav className="nav" aria-label="Principal"><span className="logo">Cuántica Fluida</span><button onClick={() => document.getElementById('precio').scrollIntoView()}>Quiero acceder</button></nav>

      <section {...reveal('hero', 'hero')}>
        <div className="eyebrow"><span className="dot" /> Reprogramación cuántica · 38 capítulos</div>
        <h1>Llevas años trabajando en ti.</h1>
        <p className="hero-subtitle">¿Por qué sigues atascada/o en lo mismo?</p>
        <p className="lead">No eres tú. No te falta fe. No te falta más esfuerzo. Te falta saber que el <span className="keygold">95% de tu vida</span> la gobierna tu subconsciente — y nadie te enseñó a cambiar eso. <strong className="keygold">Hasta hoy.</strong></p>
        <a className="cta focus" href="#precio">Quiero reprogramarme ahora</a>
        <div className="sealrow"><div className="seal">✓ Para quienes ya hicieron todo lo correcto</div><div className="seal">✓ Herramientas que se encarnan</div><div className="seal">✓ Transforma desde adentro</div></div>
      </section>

      <section {...reveal('dolor', 'split')} id="dolor">
        <div><div className="eyebrow"><span className="dot" /> Lo que nadie te dice</div><h2>Por qué sigues <span className="keygold">igual</span>.</h2><p>No es falta de voluntad. No es karma. No es que “todavía no es tu momento”.</p><p>Es que el <span className="keygold">95% de tu vida</span> la gobierna tu subconsciente. Mientras tú trabajas en la superficie, él sigue ejecutando el programa del miedo, la escasez y el “yo no merezco”.</p><p><strong>Ese programa no se cambia con más información. Se cambia con <span className="keygold">reprogramación energética profunda</span>.</strong></p></div>
        <div className="card"><h3>¿Reconoces alguno?</h3><ul className="painlist">{painItems.map((item) => <li key={item}><span className="check">✓</span>{item}</li>)}</ul><p><strong>Si asentiste aunque sea una vez, este libro fue escrito para ti.</strong></p></div>
      </section>

      <section {...reveal('cambio', 'soft')}><div className="center"><h2>Esto es lo que cambia cuando <span className="keygold">reprogramas tu frecuencia</span>.</h2></div><div className="compare"><div className="comparecol"><h3>Antes</h3>{shifts.map(([before]) => <p key={before}>{before}</p>)}</div><div className="comparecol after"><h3>Después</h3>{shifts.map(([, after]) => <p key={after}>{after}</p>)}</div></div></section>

      <section {...reveal('beneficios')}><div className="center"><div className="eyebrow"><span className="dot" /> Beneficios</div><h2>No es otro libro que te emociona 3 días.</h2><p className="lead">Es una tecnología de reprogramación que actúa en tu campo energético desde la primera página.</p></div><div className="grid3">{benefits.map(([title, text], i) => <article className="card" key={title}><div className="num">{i + 1}</div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section {...reveal('guia', 'split soft')}><div><div className="eyebrow"><span className="dot" /> Qué incluye</div><h2>Guía principal — 7 Fases de Expansión</h2><p>El método completo: desde entender que eres un campo cuántico en movimiento hasta integrar tu nueva identidad en cada área de tu vida. Sin teoría vacía. Sin promesas sin sustancia.</p></div><div className="phases">{phases.map(([n, text]) => <div className="phase" key={n}><strong>{n}</strong><span>{text}</span></div>)}</div></section>

      <section {...reveal('bonos')}><div className="center"><h2>Bonos incluidos para los primeros 500 lectores.</h2><p className="lead">Valor total de los bonos: <strong>$82</strong>. Hoy los recibes incluidos con tu acceso.</p></div><div className="bonusgrid">{bonuses.map(([tag, title, value, text]) => <article className="card" key={tag}><div className="eyebrow">{tag} · Valor {value}</div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section {...reveal('testimonios', 'soft')}><div className="center"><h2>Lo que otros encontraron dentro.</h2></div><div className="testgrid">{testimonials.map(([name, role, quote]) => <figure className="card quote" key={name}><blockquote><p>“{quote}”</p></blockquote><figcaption><strong>{name}</strong><br /><span>{role}</span></figcaption></figure>)}</div></section>

      <section {...reveal('garantia', 'split')}><div><div className="eyebrow"><span className="dot" /> Garantía</div><h2>7 días para sentirlo por dentro.<br />O te devolvemos todo.</h2><p>Una promesa clara para que entres con paz, no con dudas.</p></div><div className="card guarantee-card"><div className="guarantee-badge">Garantía real de 7 días</div><h3 className="guarantee-title">Sin riesgo. Sin drama. Sin letra pequeña.</h3><ul className="guarantee-points"><li><span className="check">✓</span><span>Si no sientes cambio interno, pides devolución.</span></li><li><span className="check">✓</span><span>Recibes el 100% de tu dinero de vuelta.</span></li><li><span className="check">✓</span><span>Sin formularios largos. Sin explicaciones incómodas.</span></li></ul><p>Si en 7 días sientes que Cuántica Fluida no movió nada en ti, te devolvemos cada centavo. Sin formularios complicados. Sin justificarnos. Sin preguntas.</p><p className="guarantee-note">Pero si llevas años buscando exactamente esto, sabrás que lo encontraste antes de terminar el primer capítulo.</p></div></section>

      <section {...reveal('precio')} id="precio"><div className="center"><h2>Todo esto por menos de lo que gastas en un curso que no terminas.</h2></div><div className="pricebox"><div className="strike">$97 USD</div><div className="price">$12 USD</div><p><strong>Todo incluido. Descarga inmediata. Sin suscripción. Sin letra pequeña.</strong></p><p>Incluye guía completa en PDF + EPUB, los 4 bonos exclusivos y acceso a comunidad de lectores.</p><a className="cta focus" href="#final">Quiero acceder antes de que suba</a><p className="fine"><strong>Este precio es de lanzamiento y no se mantendrá.</strong></p></div></section>

      <section {...reveal('final', 'final')} id="final"><h2>Hay una versión de ti que ya se cansó de entenderlo todo y seguir <span className="keygold">igual</span>.</h2><p>Se cansó de leer frases bonitas que no le cambian la vida.</p><p>Se cansó de prometer “mañana empiezo” y volver al mismo ciclo.</p><p>Se cansó de ver cómo otras personas avanzan mientras tú sigues negociando con tu miedo.</p><p><strong className="keygold">Si no haces nada diferente hoy, dentro de seis meses podrías estar exactamente en el mismo lugar.</strong></p><div className="card" style={{textAlign:'left', margin:'1.1rem 0 1.2rem'}}><p style={{marginTop:0}}><strong>Con:</strong></p><ul className="painlist" style={{marginTop:'.4rem'}}><li><span className="check">•</span>Las mismas dudas.</li><li><span className="check">•</span>El mismo autosabotaje.</li><li><span className="check">•</span>La misma sensación de estar cerca, pero nunca llegar.</li><li><span className="check">•</span>La misma vida pidiéndote que despiertes.</li></ul></div><p><strong>Pero el <span className="keygold">momento perfecto</span> no llega. Se elige.</strong></p><p><span className="keygold">Cuántica Fluida</span> no es para la parte de ti que quiere pensarlo una semana más; es para la parte de ti que ya sabe que seguir postergando también tiene un precio.</p><div className="card" style={{textAlign:'left', margin:'1.1rem 0 1.2rem'}}><p style={{marginTop:0}}><strong>No comprar también es decidir:</strong></p><ul className="painlist" style={{marginTop:'.4rem'}}><li><span className="check">•</span>Seguir intentando cambiar desde la misma energía que te mantiene atascada/o.</li><li><span className="check">•</span>Volver a dormir con esa sensación de “sé que nací para más, pero no sé cómo moverme”.</li><li><span className="check">•</span>Dejar que otro mes pase sin convertirte en la persona que dices que estás lista/o para ser.</li></ul></div><p>Hoy puedes cerrar esta página y seguir como si nada. Pero tú sabes que no sería “como si nada”.</p><p><strong>La pregunta no es si estás lista/o.</strong><br /><strong>La pregunta es cuánto más vas a pagar con tu <span className="keygold">paz, tu tiempo y tu energía</span> por seguir esperando.</strong></p><p><strong><span className="keygold">Accede ahora a Cuántica Fluida</span>. Empieza hoy, antes de que tu miedo vuelva a convencerte de dejarlo para después.</strong></p><a className="cta focus" href="#precio" style={{marginTop:'1.15rem'}}>→ Sí. Estoy lista/o para romper el ciclo y acceder ahora.</a><p className="fine">Descarga inmediata · <span className="keygold">Garantía de 7 días</span> · Sin riesgo</p></section>

      <section {...reveal('faq')}><div className="center"><h2>Preguntas frecuentes</h2></div><div className="faq">{faqs.map(([q, a], i) => <div key={q}><button onClick={() => setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i}><span>{q}</span><span>{activeFaq === i ? '−' : '+'}</span></button>{activeFaq === i && <p>{a}</p>}</div>)}</div></section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
