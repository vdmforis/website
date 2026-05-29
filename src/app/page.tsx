import { HeroForm } from "@/components/HeroForm";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cream via-cream to-secondary" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-32">
          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
              Costa del Azahar · Castellón
            </p>
            <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl lg:text-6xl">
              Een huis kopen in Spanje zonder de typische valkuilen — van NIE tot notaris, in het Nederlands geregeld.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80">
              We wonen in Grau de Castellón, kennen de notarissen, banken en bouwers
              persoonlijk, en hebben het hele aankooptraject net zelf doorlopen — zowel
              privé als via onze B.V.
            </p>
            <ul className="mt-8 space-y-3 text-foreground/85">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                <span>Onafhankelijk — we krijgen geen commissie van verkopers</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                <span>Vaste prijs, vooraf afgesproken — geen verrassingen achteraf</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                <span>Ter plaatse in Castellón, Nederlandstalig contact</span>
              </li>
            </ul>
          </div>
          <div id="contact" className="flex flex-col justify-center scroll-mt-24">
            <HeroForm />
          </div>
        </div>
      </section>

      {/* Soon / proof strip */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
                Eigen ervaring
              </p>
              <p className="mt-2 text-foreground/85">
                3 jaar wonen in Grau de Castellón. Eigen huis gekocht in 2023, villa via
                onze B.V. in 2026. We kennen de paperassen van binnenuit.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
                In opbouw
              </p>
              <p className="mt-2 text-foreground/85">
                Foris is in oprichting. RAICV-registratie (verplicht voor vastgoed&shy;bemiddeling
                in de Comunitat Valenciana) loopt — verwachte goedkeuring Q3 2026.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
                Specialisatie
              </p>
              <p className="mt-2 text-foreground/85">
                Off-plan nieuwbouw aan de kuststrook tussen Vinaròs en Burriana — een
                groeisegment waar nog weinig Nederlandse begeleiding voor beschikbaar is.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
