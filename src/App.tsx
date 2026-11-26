import { useEffect, useRef, useState } from "react"
import { Zap, Infinity as Inf, Globe, ShieldCheck, Mail, ChevronRight, Clock, Check, MessageCircle, Salad, Sandwich, Moon, Cake, HelpCircle, Shuffle, Search, Smartphone, Star, ArrowRight, Flame, Wheat } from "lucide-react"
import { DishOrbitCarousel } from "./components/ui/dish-orbit-carousel"
import { CHECKOUT_URL, CTA_TEXT, SUPPORT_MAIL, WHATSAPP, dishes, wheel, chapters, bonos, faqs } from "./data"

const BAR_H = 46
const CTA_H = 76

function Cta({ id, big }: { id?: string; big?: boolean }) {
  return (
    <a id={id} className={"cta" + (big ? " cta-big" : "")} href={CHECKOUT_URL} target="_blank" rel="noopener">
      <span className="cta-shine" aria-hidden="true" />
      <span className="cta-txt">{CTA_TEXT}</span>
      <ArrowRight className="cta-arrow" size={22} strokeWidth={3} aria-hidden="true" />
    </a>
  )
}

function TimerBar() {
  const [left, setLeft] = useState(60)
  useEffect(() => {
    const t = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000)
    return () => clearInterval(t)
  }, [])
  const done = left === 0
  const mm = String(Math.floor(left / 60)).padStart(2, "0")
  const ss = String(left % 60).padStart(2, "0")
  return (
    <div className={"timer" + (done ? " timer-done" : "")} style={{ height: BAR_H }} role="timer" aria-live="off">
      {done ? (
        <p className="timer-msg"><strong>¡Tiempo finalizado!</strong> Adquiere el pack completo: las 200 recetas y los 5 bonos.</p>
      ) : (
        <p className="timer-msg"><Clock size={18} aria-hidden="true" /> Bonus por tiempo limitado: <span className="timer-num">{mm}:{ss}</span></p>
      )}
    </div>
  )
}

function Wheel() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const update = () => {
      const c = el.scrollLeft + el.clientWidth / 2
      el.querySelectorAll<HTMLElement>(".wh-card").forEach((card) => {
        const d = (card.offsetLeft + card.offsetWidth / 2 - c) / el.clientWidth
        const a = Math.min(Math.abs(d), 1)
        card.style.setProperty("--s", String(1 - a * 0.22))
        card.style.setProperty("--r", String(-d * 26) + "deg")
        card.style.setProperty("--o", String(1 - a * 0.45))
      })
    }
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update) }
    update()
    el.addEventListener("scroll", on, { passive: true })
    window.addEventListener("resize", on)
    return () => { el.removeEventListener("scroll", on); window.removeEventListener("resize", on); cancelAnimationFrame(raf) }
  }, [])
  return (
    <div className="wh" ref={ref} tabIndex={0} aria-label="Platos reales del recetario">
      {wheel.map((w) => (
        <figure className="wh-card" key={w.img}>
          <img src={`/img/${w.img}.webp`} alt={w.name} width={900} height={900} decoding="async" draggable={false} />
          <figcaption><span className={"tag tag-" + w.cat.toLowerCase()}>{w.cat}</span>{w.name}</figcaption>
        </figure>
      ))}
    </div>
  )
}

const chapIcons = [Wheat, Salad, Moon, Cake]

export default function App() {
  return (
    <>
      <div className="topbar"><TimerBar /></div>

      <main>
        {/* CARRUSEL */}
        <section className="theme-car" aria-label="Platos de ejemplo">
          <DishOrbitCarousel dishes={dishes} loop={false} top={BAR_H} height={`calc(100svh - ${BAR_H + CTA_H}px)`} />
        </section>

        {/* HÉROE */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-txt">
              <span className="eyebrow-pill"><Zap size={16} fill="currentColor" aria-hidden="true" />Acceso inmediato por correo</span>
              <p className="hero-kicker">Llévate el pack completo</p>
              <h1 className="h1"><span className="c1">Vivir con diabetes</span> <span className="c2">no debería significar comer siempre lo mismo</span></h1>
              <p className="big200"><span className="n">200</span><span className="t">recetas con los números a la vista<small>Desayuno, almuerzo, cena y postre. Cada una con ingredientes, paso a paso y valores nutricionales.</small></span></p>
              <ul className="four">
                {chapters.map((c, i) => { const I = chapIcons[i]; return (
                  <li key={c.n}><span className="four-ic"><I size={22} aria-hidden="true" /></span><b>50</b><span>{c.title}</span></li>
                )})}
              </ul>
              <ul className="ticks">
                <li><Check size={18} strokeWidth={3} aria-hidden="true" />Carbohidratos, fibra y calorías en cada receta</li>
                <li><Check size={18} strokeWidth={3} aria-hidden="true" />Ingredientes de supermercado, nada raro ni caro</li>
                <li><Check size={18} strokeWidth={3} aria-hidden="true" />En tu celular, tablet o computadora</li>
              </ul>
            </div>
            <div className="hero-img"><img src="/img/hero-mockup.webp" alt="Pack del recetario 200 Recetas para Personas con Diabetes" width={1254} height={1254} fetchPriority="high" /></div>
          </div>
          <div className="wrap hero-cta">
            <Cta id="cta-hero" big />
            <ul className="under">
              <li><Mail size={17} aria-hidden="true" />Acceso mediante correo</li>
              <li><Inf size={17} aria-hidden="true" />De por vida</li>
              <li><Globe size={17} aria-hidden="true" />Compra con tu moneda local</li>
            </ul>
            <p className="legal-mini">Material educativo y culinario. No sustituye la atención médica ni nutricional. Consulta con tu médico o nutricionista.</p>
          </div>
        </section>

        {/* DOLOR */}
        <section className="sec pain">
          <div className="wrap">
            <h2 className="h2">¿Te pasa esto <em>todos los días</em>?</h2>
            <ul className="pain-list">
              <li><Shuffle size={26} aria-hidden="true" /><p>¿Sientes que comes <b>casi lo mismo</b> semana tras semana?</p></li>
              <li><HelpCircle size={26} aria-hidden="true" /><p>¿Te quedas <b>dudando frente al plato</b> sin saber qué hay en él?</p></li>
              <li><Search size={26} aria-hidden="true" /><p>¿Pierdes tiempo buscando <b>recetas sueltas</b> en videos, capturas y papeles?</p></li>
              <li><Flame size={26} aria-hidden="true" /><p>¿Terminas cocinando “lo de siempre” porque <b>no tienes tiempo de pensar</b> qué preparar?</p></li>
            </ul>
            <div className="change">
              <span className="change-tag">El cambio real</span>
              <p className="change-q">El problema no es tu fuerza de voluntad.</p>
              <p className="change-a">Es no tener <mark>las opciones ordenadas</mark>.</p>
              <p className="change-s">Al abrir tu celular y ver 50 desayunos con tiempo de preparación y carbohidratos, elegir deja de ser un problema: cocinas con calma, con variedad y sabiendo qué comes.</p>
            </div>
          </div>
        </section>

        {/* RUEDA */}
        <section className="sec alt wheel-sec">
          <div className="wrap">
            <p className="kicker">Platos reales del recetario</p>
            <h2 className="h2">Mira lo que vas a cocinar</h2>
            <p className="swipe-hint"><ChevronRight size={16} aria-hidden="true" />Desliza para ver más<ChevronRight size={16} aria-hidden="true" /></p>
          </div>
          <Wheel />
        </section>

        {/* CAPÍTULOS */}
        <section className="sec">
          <div className="wrap">
            <p className="kicker">Lo que hay adentro</p>
            <h2 className="h2 up">4 capítulos, 50 recetas cada uno</h2>
            <div className="chap-grid">
              {chapters.map((c) => (
                <article className="chap" key={c.n}>
                  <div className="chap-img"><img src={`/img/${c.img}.webp`} alt={`Capítulo ${c.n}: ${c.title}`} width={1536} height={1024} loading="lazy" /><span className="chap-n">Capítulo {c.n}</span></div>
                  <div className="chap-body">
                    <h3>{c.title}</h3>
                    <p className="chap-meta"><b>50 recetas</b><span>5 categorías</span></p>
                    <ol>{c.recipes.map((r) => <li key={r}>{r}</li>)}</ol>
                    <p className="chap-more">…y 45 más, {c.more}.</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EJEMPLO */}
        <section className="sec alt">
          <div className="wrap">
            <p className="kicker">La diferencia está en el detalle</p>
            <h2 className="h2">Así es cada una de nuestras recetas</h2>
            <article className="recipe">
              <div className="recipe-top">
                <img src="/img/desayuno-omelette.webp" alt="Omelette de espinaca y hongos" width={900} height={900} loading="lazy" />
                <div>
                  <span className="recipe-no">Receta 01 · Huevos y proteínas</span>
                  <h3>Omelette de espinaca y hongos</h3>
                  <ul className="chips"><li>1 porción</li><li><Clock size={14} aria-hidden="true" />Prep. 10 min</li><li>Total 18 min</li></ul>
                </div>
              </div>
              <div className="nutri-title">Valor nutricional aproximado</div>
              <div className="nutri">
                <div className="nb nb-c"><b>12<small>g</small></b><span>Carbohidratos</span></div>
                <div className="nb nb-f"><b>5<small>g</small></b><span>Fibra</span></div>
                <div className="nb nb-p"><b>23<small>g</small></b><span>Proteína</span></div>
                <div className="nb nb-g"><b>22<small>g</small></b><span>Grasa</span></div>
              </div>
              <p className="nutri-sub">330 kcal · 360 mg sodio</p>
              <div className="rcols">
                <div>
                  <h4>Ingredientes</h4>
                  <ul className="ing"><li>2 huevos</li><li>1 taza de espinaca</li><li>½ taza de champiñones</li><li>½ taza de tomates cherry</li><li>1 cdta. de aceite de oliva</li><li>1 cda. de queso rallado ligero</li></ul>
                </div>
                <div>
                  <h4>Paso a paso</h4>
                  <ol className="steps-r"><li>Saltea los champiñones 4 minutos; añade la espinaca.</li><li>Bate los huevos y viértelos en la sartén.</li><li>Agrega los vegetales y el queso; dobla el omelette.</li></ol>
                </div>
              </div>
              <p className="tip"><Star size={18} fill="currentColor" aria-hidden="true" /><span><b>Consejo:</b> acompaña con vegetales en lugar de jugo para sumar fibra.</span></p>
            </article>
          </div>
        </section>

        {/* CÓMO LO RECIBES */}
        <section className="sec">
          <div className="wrap">
            <p className="kicker">¿Cómo lo recibes?</p>
            <h2 className="h2 up big">No es un <span className="red">PDF</span> que se pierde entre tus descargas</h2>
            <img className="lib" src="/img/biblioteca-miembros.webp" alt="Área de miembros con la biblioteca de recetas en laptop y celular" width={1536} height={1024} loading="lazy" />
            <h3 className="h3">Lo tienes en 3 pasos simples</h3>
            <ol className="steps3">
              <li><span className="s-n">1</span><div><b>Haces tu compra</b><p>Hotmart procesa el pago y te envía la confirmación.</p></div></li>
              <li><span className="s-n">2</span><div><b>Te llega el correo de MemberApp</b><p>En un mensaje aparte llegan tu enlace de acceso, usuario y la contraseña.</p></div></li>
              <li><span className="s-n">3</span><div><b>Entras y empiezas a cocinar</b><p>Desde celular, tablet o computadora, las veces que quieras.</p></div></li>
            </ol>
            <p className="note-mail"><Mail size={18} aria-hidden="true" />Si no lo ves en unos minutos, busca “MemberApp” y revisa Spam, Promociones y Notificaciones.</p>
          </div>
        </section>

        {/* BONOS */}
        <section className="sec alt">
          <div className="wrap">
            <p className="kicker">Bonos</p>
            <h2 className="h2">5 bonos que completan tu día a día</h2>
            <div className="bonos">
              {bonos.map((b, i) => (
                <article className="bono" key={b.img}>
                  <img src={`/img/${b.img}.webp`} alt={`Bono ${i + 1}: ${b.t}`} width={1000} height={1000} loading="lazy" />
                  <span className="inc"><Check size={13} strokeWidth={3.5} aria-hidden="true" />Incluido</span>
                  <h3>{b.t}</h3>
                  <p>{b.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section className="sec">
          <div className="wrap">
            <p className="kicker">Testimonios reales</p>
            <h2 className="h2">Lo que dicen quienes ya lo tienen</h2>
            <div className="testi">
              <figure><img src="/img/testimonio1.webp" alt="Comentario real de un cliente" width={1040} height={1408} loading="lazy" /><figcaption>Comentario real de un cliente</figcaption></figure>
              <figure><img src="/img/testimonio2.webp" alt="Comentario real de una persona que usa el recetario" width={480} height={867} loading="lazy" /><figcaption>Una experiencia con el recetario</figcaption></figure>
              <figure><img src="/img/testimonio3.webp" alt="Otro comentario real de un cliente" width={480} height={1007} loading="lazy" /><figcaption>Otra experiencia con el recetario</figcaption></figure>
              <figure><img src="/img/valoraciones.webp" alt="Valoración 4,7 de 5 en Hotmart con 6 evaluaciones" width={634} height={1024} loading="lazy" /><figcaption>4,7 de 5 · 6 evaluaciones en Hotmart</figcaption></figure>
            </div>
            <p className="legal-mini c">Experiencias personales: los resultados pueden variar de una persona a otra.</p>
          </div>
        </section>

        {/* OFERTA */}
        <section className="sec offer">
          <div className="wrap">
            <div className="bonus-red"><span className="bonus-ic"><Clock size={28} aria-hidden="true" /></span><b>Bonus por tiempo limitado</b><span>Pack completo: 200 recetas + 5 bonos</span></div>
            <div className="offer-box">
              <h2>Qué incluye tu pack</h2>
              <ul>
                <li><Check size={20} strokeWidth={3} aria-hidden="true" />200 recetas para personas con diabetes</li>
                <li><Check size={20} strokeWidth={3} aria-hidden="true" />Capítulo 1: 50 desayunos</li>
                <li><Check size={20} strokeWidth={3} aria-hidden="true" />Capítulo 2: 50 almuerzos</li>
                <li><Check size={20} strokeWidth={3} aria-hidden="true" />Capítulo 3: 50 cenas ligeras</li>
                <li><Check size={20} strokeWidth={3} aria-hidden="true" />Capítulo 4: 50 postres y snacks</li>
                <li><Check size={20} strokeWidth={3} aria-hidden="true" />5 bonos prácticos</li>
                <li><Check size={20} strokeWidth={3} aria-hidden="true" />Área de miembros, sin vencimiento</li>
              </ul>
              <Cta id="cta-offer" big />
              <p className="offer-line">Paga con tu moneda local · Acceso inmediato · Pago único y de por vida</p>
              <img className="pay" src="/img/metodos-pago.webp" alt="Medios de pago disponibles en Hotmart" width={1200} height={519} loading="lazy" />
              <p className="legal-mini c">Los medios de pago disponibles dependen de tu país.</p>
            </div>
            <div className="guar">
              <img src="/img/garantia-7-dias.webp" alt="Garantía de 7 días" width={600} height={600} loading="lazy" />
              <div><h3>Pruébalo 7 días. Si no es para ti, te devolvemos el dinero.</h3><p>Entra al área de miembros, mira las 200 recetas y cocina lo que quieras. Si no te sirve, escríbenos dentro de los primeros 7 días y recibes el reembolso completo a través de Hotmart.</p></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec alt">
          <div className="wrap narrow">
            <h2 className="h2">Preguntas frecuentes</h2>
            {faqs.map((f) => (
              <details className="faq" key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
        </section>

        {/* CIERRE */}
        <section className="sec close">
          <div className="wrap c">
            <h2 className="h2 on-dark">Mañana puedes desayunar algo distinto y saber exactamente qué estás comiendo</h2>
            <p>200 recetas, 5 bonos y tu área de miembros, con acceso inmediato por correo.</p>
            <Cta id="cta-close" big />
            <p className="under-txt"><ShieldCheck size={18} aria-hidden="true" />Acceso inmediato · Garantía de 7 días · Pago seguro con Hotmart</p>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <p><b>Recetarios Vida Sana</b> · Material digital educativo y culinario. Este recetario es una guía general de alimentación y no sustituye la atención médica ni nutricional individual. No promete resultados médicos específicos; la experiencia y los resultados pueden variar de una persona a otra. Consulta siempre con tu médico o nutricionista antes de hacer cambios en tu alimentación, especialmente si tomas medicación para la diabetes.</p>
          <p>© 2026 Recetarios Vida Sana · Soporte: <a href={`mailto:${SUPPORT_MAIL}`}>{SUPPORT_MAIL}</a></p>
        </div>
      </footer>

      <a className="wa" href={WHATSAPP} target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp"><MessageCircle size={26} aria-hidden="true" /></a>
      <div className="sticky" style={{ height: CTA_H }}><Cta id="cta-sticky" /></div>
    </>
  )
}
