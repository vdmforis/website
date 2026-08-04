"use client";

import { useEffect, useRef } from "react";

const STEPS = [
  {
    num: "Stap 01 · Fundament kiezen",
    title: "Oriëntatie & projectkeuze",
    body: "In anderhalf uur staat je plan op papier: budget, regio en welk nieuwbouwproject bij je past — met een regiogids op maat en warme introducties naar gestor, bank en advocaat.",
    label: "Stap 01 · Oriëntatie",
    dienst: "orientatie",
  },
  {
    num: "Stap 02 · Papieren als fundering",
    title: "De papierwinkel",
    body: "NIE, CIF, Spaanse bankrekening, modelo 036, vertalingen en apostilles — geregeld voor privé én B.V., zonder dat je ervoor naar Spanje hoeft.",
    label: "Stap 02 · Papierwinkel",
    dienst: "papierwinkel",
  },
  {
    num: "Stap 03 · Toezicht op de bouw",
    title: "Nieuwbouwtoezicht",
    body: "Wij zijn je ogen op de bouwplaats: bouwbezoeken met fotorapportage, controle van de bankgarantie en een opleveringsinspectie — terwijl jij gewoon in Nederland zit.",
    label: "Stap 03 · Nieuwbouwtoezicht",
    dienst: "nieuwbouwtoezicht",
  },
  {
    num: "Stap 04 · Reservering tot sleutel",
    title: "Volledige aankoopbegeleiding",
    body: "Reserveringscontract juridisch gecheckt door een Spaanse advocaat, bankgarantie geverifieerd, en het hele notaristraject tot en met de sleuteloverdracht. Beschikbaar zodra onze RAICV-vergunning binnen is.",
    label: "Stap 04 · Reservering tot sleutel",
    dienst: "aankoopbegeleiding",
  },
  {
    num: "Stap 05 · Zorgeloos bezit",
    title: "Concierge na de koop",
    body: "Sleutelbeheer, periodieke checks, post en klusjescoördinatie — in drie niveaus, van licht tot villa-grade.",
    label: "Stap 05 · Concierge",
    dienst: "concierge",
  },
];

const SAND = "#dcc9a3";
const CONCRETE = "#c9c2b2";
const WALL = "#f7f1e4";
const TERRA = "#c9603a";
const NAVYC = "#16354d";
const GLASS = "#8fb6c9";
const GREEN = "#5a6e3a";
const TRUNK = "#8a6844";
const POOL = "#4f93ad";
const WATER = "#7dc0d8";
const WARM = "#f0c05a";
const PATH = "#e8dcc2";

function shade(hex: string, f: number): string {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.min(255, Math.round(((n >> 16) & 255) * f));
  const g = Math.min(255, Math.round(((n >> 8) & 255) * f));
  const b = Math.min(255, Math.round((n & 255) * f));
  return `rgb(${r},${g},${b})`;
}

/** Cuboid: w,h,d in px, geplaatst op (x, yBottom, z) met y omhoog. */
function box(
  parent: HTMLElement,
  w: number,
  h: number,
  d: number,
  x: number,
  yBottom: number,
  z: number,
  color: string,
) {
  const c = document.createElement("div");
  c.style.position = "absolute";
  c.style.transformStyle = "preserve-3d";
  const cy = -(yBottom + h / 2);
  c.style.transform = `translate3d(${x}px,${cy}px,${z}px)`;
  const faces: [string, number, number, number, number][] = [
    ["rotateY(0deg)", d / 2, w, h, 0.92],
    ["rotateY(180deg)", d / 2, w, h, 0.72],
    ["rotateY(90deg)", w / 2, d, h, 0.8],
    ["rotateY(-90deg)", w / 2, d, h, 0.66],
    ["rotateX(90deg)", h / 2, w, d, 1.06],
    ["rotateX(-90deg)", h / 2, w, d, 0.55],
  ];
  for (const [rot, tz, fw, fh, tint] of faces) {
    const f = document.createElement("div");
    f.style.position = "absolute";
    f.style.left = "50%";
    f.style.top = "50%";
    f.style.width = `${fw}px`;
    f.style.height = `${fh}px`;
    f.style.background = shade(color, tint);
    f.style.backfaceVisibility = "hidden";
    f.style.transform = `translate(-50%,-50%) ${rot} translateZ(${tz}px)`;
    c.appendChild(f);
  }
  parent.appendChild(c);
  return c;
}

function stageGroup(world: HTMLElement) {
  const g = document.createElement("div");
  g.className = "w3d-stage";
  g.style.transformStyle = "preserve-3d";
  world.appendChild(g);
  return g;
}

function buildScene(world: HTMLElement) {
  const stages: HTMLElement[] = [];
  for (let i = 0; i < 5; i++) stages.push(stageGroup(world));

  // Fase 1 — perceel; landmeter-paaltjes apart zodat ze verdwijnen zodra de bouw start
  box(stages[0], 320, 14, 320, 0, -14, 0, SAND);
  const stakes = stageGroup(world);
  for (const [px, pz] of [
    [-140, -140],
    [140, -140],
    [-140, 140],
    [140, 140],
  ]) {
    box(stakes, 6, 30, 6, px, 0, pz, TERRA);
  }

  // Fase 2 — fundering + lage muren
  box(stages[1], 236, 10, 176, -10, 0, 0, CONCRETE);
  box(stages[1], 220, 26, 160, -10, 10, 0, WALL);

  // Fase 3 — volledige muren, tweede volume, platte daken, ramen
  box(stages[2], 220, 62, 160, -10, 36, 0, WALL);
  box(stages[2], 90, 40, 90, 85, 98, -20, WALL);
  box(stages[2], 236, 10, 176, -10, 98, 0, TERRA);
  box(stages[2], 104, 8, 104, 85, 138, -20, TERRA);
  box(stages[2], 46, 34, 3, -70, 46, 81, GLASS);
  box(stages[2], 46, 34, 3, 40, 46, 81, GLASS);
  box(stages[2], 40, 20, 3, 85, 108, 26, GLASS);
  box(stages[2], 3, 26, 40, 101, 50, 20, GLASS);

  // Fase 4 — sleuteloverdracht: deur, luifel, tuinpad, en de lichten gaan aan
  box(stages[3], 34, 52, 4, -12, 0, 81, NAVYC);
  box(stages[3], 4, 52, 4, -33, 0, 81, WALL);
  box(stages[3], 4, 52, 4, 9, 0, 81, WALL);
  box(stages[3], 52, 5, 26, -12, 56, 88, TERRA);
  box(stages[3], 3, 3, 3, -20, 26, 84, WARM);
  box(stages[3], 30, 2, 22, -12, 0, 104, PATH);
  box(stages[3], 26, 2, 20, -12, 0, 128, PATH);
  box(stages[3], 22, 2, 18, -12, 0, 150, PATH);
  box(stages[3], 42, 30, 2, -70, 48, 82.5, WARM);
  box(stages[3], 42, 30, 2, 40, 48, 82.5, WARM);

  // Fase 5 — zwembad + palm
  box(stages[4], 96, 4, 68, -60, 0, 108, WALL);
  box(stages[4], 84, 6, 56, -60, 0, 108, POOL);
  box(stages[4], 76, 3, 48, -60, 4, 108, WATER);
  box(stages[4], 10, 34, 10, 120, 0, 110, TRUNK);
  box(stages[4], 8, 30, 8, 120, 34, 110, TRUNK);
  box(stages[4], 10, 8, 10, 120, 62, 110, GREEN);
  for (const a of [0, 60, 120, 180, 240, 300]) {
    const frond = document.createElement("div");
    frond.style.position = "absolute";
    frond.style.transformStyle = "preserve-3d";
    frond.style.transform = `translate3d(120px,-66px,110px) rotateY(${a}deg) rotateZ(-22deg)`;
    box(frond, 40, 5, 12, 24, -3, 0, GREEN);
    box(frond, 16, 4, 9, 48, -8, 0, GREEN);
    stages[4].appendChild(frond);
  }

  return { stages, stakes };
}

export function Werkwijze3D() {
  const journeyRef = useRef<HTMLElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const journey = journeyRef.current;
    const world = worldRef.current;
    const card = cardRef.current;
    if (!journey || !world || !card) return;

    world.innerHTML = "";
    const { stages, stakes } = buildScene(world);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ry = -40;
    let rx = -24;
    let tiltX = 0;
    let tiltY = 0;
    let curTX = 0;
    let curTY = 0;
    let raf = 0;

    const update = () => {
      const r = journey.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 1;
      const active = Math.min(4, Math.floor(p * 5 + 0.15));
      stages.forEach((s, i) => s.classList.toggle("on", i <= active));
      stakes.classList.toggle("on", active <= 1);
      stepRefs.current.forEach((s, i) =>
        s?.classList.toggle("w3d-step-active", i === active),
      );
      dotRefs.current.forEach((d, i) =>
        d?.classList.toggle("w3d-dot-active", i === active),
      );
      if (labelRef.current) labelRef.current.textContent = STEPS[active].label;
      ry = -46 + p * 60;
      rx = -24 + p * 5;
    };

    if (reduced) {
      stages.forEach((s) => s.classList.add("on"));
      world.style.transform = "rotateX(-22deg) rotateY(-30deg)";
      update();
      return () => {
        world.innerHTML = "";
      };
    }

    const frame = () => {
      curTX += (tiltX - curTX) * 0.08;
      curTY += (tiltY - curTY) * 0.08;
      world.style.transform = `rotateX(${rx + curTX}deg) rotateY(${ry + curTY}deg)`;
      raf = requestAnimationFrame(frame);
    };
    const onMove = (e: MouseEvent) => {
      const b = card.getBoundingClientRect();
      tiltY = ((e.clientX - b.left) / b.width - 0.5) * 14;
      tiltX = ((e.clientY - b.top) / b.height - 0.5) * -8;
    };
    const onLeave = () => {
      tiltX = 0;
      tiltY = 0;
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      world.innerHTML = "";
    };
  }, []);

  return (
    <section ref={journeyRef} className="border-t border-border bg-cream">
      <style>{`
        .w3d-stage {
          opacity: 0;
          transform: translate3d(0, -70px, 0);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .w3d-stage.on { opacity: 1; transform: translate3d(0, 0, 0); }
        .w3d-step { opacity: 0.35; transition: opacity 0.4s; }
        .w3d-step-active { opacity: 1; }
        .w3d-dot { transition: background-color 0.3s, transform 0.3s; }
        .w3d-dot-active { background-color: var(--terracotta) !important; transform: scale(1.35); }
        @media (prefers-reduced-motion: reduce) {
          .w3d-stage, .w3d-step, .w3d-dot { transition: none; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 pt-16 md:pt-20">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
          Het traject
        </p>
        <h2 className="mt-3 max-w-2xl font-heading text-3xl text-navy md:text-4xl">
          Van eerste oriëntatie tot ver na de sleutel — stap voor stap.
        </h2>
        <p className="mt-4 max-w-2xl text-foreground/80">
          Elke stap is los af te nemen. Scroll door het traject: de villa bouwt met
          je mee.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-2 md:gap-12">
        <div className="order-first py-2 max-md:sticky max-md:top-0 max-md:z-10 max-md:bg-cream md:order-2 md:py-[10vh]">
          <div className="md:sticky md:top-[6vh] md:flex md:h-[88vh] md:items-center">
            <div
              ref={cardRef}
              className="relative aspect-square max-h-[46vh] w-full overflow-hidden rounded-3xl border border-border md:max-h-[80vh]"
              style={{
                background:
                  "radial-gradient(60% 35% at 70% 8%, #f3e3cf, transparent 70%), linear-gradient(180deg, #ead7bd, #f5efe6)",
              }}
            >
              <div
                className="absolute left-4 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-2"
                aria-hidden
              >
                {STEPS.map((s, i) => (
                  <button
                    key={s.label}
                    ref={(el) => {
                      dotRefs.current[i] = el;
                    }}
                    title={s.label}
                    className="w3d-dot h-2.5 w-2.5 rounded-full border-0 bg-border p-0"
                    onClick={() =>
                      stepRefs.current[i]?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                    }
                  />
                ))}
              </div>
              <div
                className="absolute inset-0"
                style={{ perspective: "1300px" }}
              >
                <div
                  ref={worldRef}
                  className="absolute left-1/2 top-[58%]"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(-24deg) rotateY(-40deg)",
                  }}
                />
              </div>
              <p
                ref={labelRef}
                className="absolute inset-x-0 bottom-4 z-10 text-center font-mono text-[0.65rem] uppercase tracking-[0.22em] text-foreground/60"
              >
                {STEPS[0].label}
              </p>
            </div>
          </div>
        </div>

        <div className="pb-[10vh] md:py-[10vh]">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className="w3d-step flex min-h-[62vh] flex-col justify-center md:min-h-[72vh]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
                {s.num}
              </p>
              <h3 className="mt-2 font-heading text-2xl text-navy">{s.title}</h3>
              <p className="mt-3 max-w-lg text-foreground/80">{s.body}</p>
              <p className="mt-4">
                <a
                  href={`/offerte?dienst=${s.dienst}`}
                  className="text-sm font-medium text-terracotta underline-offset-4 hover:underline"
                >
                  Vraag een offerte aan →
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
