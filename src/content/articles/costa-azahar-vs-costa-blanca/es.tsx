import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";
import { GidsCallout } from "@/components/GidsCallout";
import { Section, H2, H3, Lead, P, UL, Callout } from "@/components/article/Prose";

/** Traducción al español del artículo neerlandés (escrito para compradores neerlandeses). */
export default function Body() {
  return (
    <>
      <Section>
        <Lead>
          Pregunta a un neerlandés por &ldquo;la costa española&rdquo; y en el 80%
          de los casos oirás Benidorm, Calpe o Torrevieja: todo Costa Blanca. Para
          la mayoría de los neerlandeses, la Costa del Azahar (la provincia de
          Castellón, justo al norte de Valencia) es un punto ciego. Injustamente:
          es otra costa, en otra provincia, con otro nivel de precios, otra
          demografía y otro motivo para vivir allí. Este artículo compara las dos
          como lo haría alguien que vive en el Azahar y visita la Blanca con
          frecuencia.
        </Lead>
        <GidsCallout variant="inline" locale="es" />
      </Section>

      <Section>
        <H2>Lo primero: de verdad son dos costas distintas</H2>
        <P>
          Un malentendido que encontramos a menudo: que el Azahar y la Blanca
          limitan entre sí. No es así. Entre ambas hay unos 110 km de{" "}
          <strong>Costa de Valencia</strong>, la costa de la provincia de Valencia,
          con Sagunto, Valencia ciudad, Cullera, Gandía y Oliva. La Costa del
          Azahar termina en Almenara (extremo sur de la provincia de Castellón) y
          la Costa Blanca no empieza hasta Dénia (extremo norte de la provincia de
          Alicante).
        </P>
        <P>
          La <strong>Costa del Azahar</strong> va más o menos de Vinaròs (límite
          con Cataluña) a Almenara y mide unos 120 a 130 km. Las principales
          localidades costeras son Vinaròs, Benicarló, Peñíscola, Alcossebre,
          Oropesa del Mar, Benicàssim, el Grao de Castellón, Almassora, Burriana,
          Nules, Moncofa y Almenara.
        </P>
        <P>
          La <strong>Costa Blanca</strong> va de Dénia a Pilar de la Horadada y,
          con 200 a 244 km, es casi el doble de larga. Los nombres que conocen los
          neerlandeses: Dénia, Jávea (Xàbia), Moraira, Calpe, Altea, Benidorm,
          Villajoyosa, El Campello, Alicante ciudad, Santa Pola, Guardamar,
          Torrevieja y Orihuela Costa.
        </P>
        <Callout>
          <strong>Importante para el papeleo:</strong> las dos costas están en la
          misma comunidad autónoma, la Comunitat Valenciana. Los impuestos
          autonómicos (ITP, AJD) y las leyes autonómicas sobre vivienda turística
          son, por tanto, idénticos. Las normas municipales (como el IBI o las
          limitaciones al alquiler turístico) sí cambian de un municipio a otro,
          pero eso no depende de &ldquo;qué costa&rdquo;.
        </Callout>
      </Section>

      <Section>
        <H2>La mayor diferencia: el precio por m²</H2>
        <P>
          Por una calidad comparable junto al mar, en la Costa del Azahar pagas
          aproximadamente <strong>un 30 a 50% menos</strong> que en el norte de la
          Costa Blanca. Abajo, las cifras por municipio del segundo trimestre de
          2026 de Idealista. Son precios de oferta publicados, así que los precios
          de cierre suelen ser algo más bajos.
        </P>
        <H3>Costa Blanca: gama alta</H3>
        <UL>
          <li>
            <strong>Moraira (Teulada)</strong>: 3.566 a 4.497 € / m², el municipio
            más caro de toda la provincia
          </li>
          <li>
            <strong>Jávea / Xàbia</strong>: 3.958 € / m² (+19,8% interanual)
          </li>
          <li>
            <strong>Calpe</strong>: 3.438 € / m²
          </li>
          <li>
            <strong>Altea</strong>: 3.415 € / m²
          </li>
          <li>
            <strong>Benidorm</strong>: 3.246 € / m² (+15% interanual)
          </li>
          <li>
            <strong>Dénia</strong>: 3.217 € / m² (+14% interanual)
          </li>
        </UL>
        <H3>Costa Blanca: gama media</H3>
        <UL>
          <li>
            <strong>Alicante ciudad</strong>: 2.549 a 2.811 € / m², nuevo récord en
            abril de 2026
          </li>
          <li>
            <strong>Torrevieja</strong>: 2.502 € / m²
          </li>
          <li>
            <strong>Orihuela Costa</strong>: 2.500 a 3.000 € / m² (media municipal
            2.847 / m², zonas de costa más altas)
          </li>
        </UL>
        <H3>Costa del Azahar</H3>
        <UL>
          <li>
            <strong>Benicàssim</strong>: 2.708 a 2.744 € / m², el más caro de la
            provincia de Castellón
          </li>
          <li>
            <strong>Peñíscola</strong>: 2.171 € / m² (+13,8% interanual)
          </li>
          <li>
            <strong>Oropesa del Mar</strong>: 1.957 € / m²
          </li>
          <li>
            <strong>Castelló de la Plana (ciudad + Grao)</strong>: 1.326 a 1.666 € /
            m² según el barrio
          </li>
          <li>
            <strong>Vinaròs / Benicarló</strong>: unos 1.300 a 1.700 € / m²
          </li>
          <li>
            <strong>Burriana</strong>: 1.109 € / m² (+14,5% interanual)
          </li>
        </UL>
        <Callout>
          <strong>Un ejemplo concreto:</strong> un chalet adosado de obra nueva de
          120 m² con 50 m² de jardín en una buena zona de Benicàssim cuesta unos
          330.000 a 360.000 €. Una casa comparable en Calpe o Moraira cuesta de
          420.000 a 540.000 €. Si compras a través de una B.V. neerlandesa
          (sociedad limitada), esa diferencia repercute directamente en el IVA
          (10%), en la financiación que necesitas y en el rendimiento anual.
        </Callout>
        <P>
          Importante: el precio no lo es todo. Lo que obtienes por tu dinero
          también cambia. En el norte de la Costa Blanca pagas más por un mercado
          consolidado (alquiler fuerte, revalorización estable, demanda amplia). En
          la Costa del Azahar estás en un mercado que aún está despegando: ventaja
          en el precio de entrada, desventaja en liquidez si quieres vender mañana.
        </P>
      </Section>

      <Section>
        <H2>Cómo llegar desde los Países Bajos</H2>
        <P>
          Es la diferencia que muchos neerlandeses subestiman, aunque es menor de
          lo que parece. La Costa Blanca tiene un gran aeropuerto propio; la Costa
          del Azahar aprovecha el de Valencia.
        </P>
        <H3>Alicante-Elche (ALC): para la Costa Blanca</H3>
        <UL>
          <li>
            <strong>19,9 millones de pasajeros en 2025</strong> (+8,5% interanual,
            récord)
          </li>
          <li>
            Desde Ámsterdam: <strong>unos 71 vuelos a la semana</strong> (Transavia
            23, KLM 2, además de Vueling y easyJet). A diario, a menudo varias veces
            al día
          </li>
          <li>
            Tiempos en coche: Torrevieja 40 min, Benidorm 45 min, Calpe 1 h aprox.,
            Jávea 1 h 15 aprox., Dénia 1 h 20 aprox.
          </li>
        </UL>
        <H3>Valencia (VLC): para la Costa del Azahar</H3>
        <UL>
          <li>Unos 9 millones de pasajeros en 2025 (+8,2%, año récord)</li>
          <li>
            Desde Ámsterdam: <strong>KLM y Transavia, vuelos directos diarios</strong>.
            Menos volumen que ALC, pero la conexión diaria con los Países Bajos está
            asegurada
          </li>
          <li>
            Tiempos en coche: Castelló de la Plana 50 min aprox., Benicàssim 58 min
            aprox., Peñíscola 1 h 26 aprox., Vinaròs 1 h 45 aprox.
          </li>
        </UL>
        <H3>Castellón-Costa Azahar (CDT)</H3>
        <UL>
          <li>
            Pequeño aeropuerto regional con unos 291.000 pasajeros (enero a octubre
            de 2025)
          </li>
          <li>
            <strong>Sin vuelo directo desde Ámsterdam.</strong> Solo Ryanair, con
            rutas de verano a Manchester, Stansted, Bruselas-Charleroi, Berlín,
            Düsseldorf-Weeze, Budapest, Milán, Bolonia, Cracovia y Oporto
          </li>
          <li>
            A 25 min de Castellón ciudad, 30 min de Peñíscola y 45 min de
            Benicàssim. Práctico para visitas desde Bélgica y Alemania
          </li>
        </UL>
        <P>
          <strong>Qué significa en la práctica:</strong> para los neerlandeses,
          Valencia es el aeropuerto principal para el Azahar. Una hora en coche de
          VLC a Benicàssim no es muy distinta de una hora de ALC a Calpe. Eso sí:
          los vuelos a ALC suelen ser más baratos por volumen, y el aeropuerto de
          Castellón completa la oferta para quien vuela más por Europa que a los
          Países Bajos.
        </P>
      </Section>

      <Section>
        <H2>Presencia extranjera y cultura</H2>
        <P>
          Aquí hay una diferencia que para unos es <em>el</em> argumento a favor de
          una costa y para otros a favor de la otra.
        </P>
        <H3>Costa Blanca: hecha a medida del norte de Europa</H3>
        <P>
          En 2024 la provincia de Alicante tenía{" "}
          <strong>464.601 residentes extranjeros</strong>, el 23,3% de la
          población, el porcentaje más alto de España. Por nacionalidad: 70.786
          británicos (con diferencia el grupo más grande), 17.777 neerlandeses y
          15.503 alemanes. El resultado: barrios enteros de Benidorm hablan
          inglés, en Torrevieja hay supermercados neerlandeses y en el corredor de
          l&apos;Albir los carteles están en cuatro idiomas.
        </P>
        <P>
          Para algunos compradores, justo por eso eligen la Costa Blanca. Sin
          barrera idiomática en el día a día, es posible encontrar médico de
          cabecera y dentista neerlandeses, hacer amigos es fácil a través de
          clubes de expatriados y las grandes fiestas se celebran al estilo
          neerlandés.
        </P>
        <H3>Costa del Azahar: sobre todo española</H3>
        <P>
          La provincia de Castellón también tiene unos 130.000 residentes
          extranjeros (alrededor del 20% de la población), pero el perfil es muy
          distinto. Los grupos más numerosos son rumanos y marroquíes, que trabajan
          sobre todo en la industria cerámica del interior. Los residentes del
          norte de Europa en la costa (británicos, neerlandeses, alemanes) son
          muchos menos. En Castellón ciudad o en el Grao se nota enseguida: casi
          nadie habla inglés o neerlandés en casa.
        </P>
        <P>
          Para algunos compradores, esa es la gracia. Sin burbuja de expatriados,
          sin supermercado neerlandés en la calle principal, y en un año hablas un
          español funcional porque no te queda otra. Para otros es un obstáculo: el
          médico y el gestor tienes que resolverlos en español o con un asesor que
          hable neerlandés, y hacer vida social cuesta algo más. Nosotros lo vemos
          como una ventaja, pero es una preferencia personal, no un hecho objetivo.
        </P>
        <H3>¿Y el turismo?</H3>
        <P>
          La Costa Blanca superó los 36 millones de pernoctaciones entre enero y
          septiembre de 2025. La Costa del Azahar creció (fue la única provincia
          valenciana con crecimiento en mayo de 2025), pero juega en otra liga. Una
          tarde de julio, en la playa de Benicàssim no hay las mismas toallas que
          en la de Benidorm. Para disfrutar de tu casa es una ventaja que se nota;
          para una inversión pura de alquiler, un inconveniente.
        </P>
      </Section>

      <Section>
        <H2>Clima</H2>
        <P>
          Las dos costas tienen clima mediterráneo subtropical, pero hay una
          diferencia medible.
        </P>
        <UL>
          <li>
            <strong>Alicante</strong>: unas 2.953 horas de sol al año, media de
            18,3 °C, unos 310 mm de lluvia al año: una de las zonas más secas de
            España
          </li>
          <li>
            <strong>Castelló (Benicàssim, Peñíscola)</strong>: unas 2.700 a 2.800
            horas de sol al año, media de 17,8 °C, unos 450 mm de lluvia al año: más
            lluvia, sobre todo en otoño
          </li>
        </UL>
        <P>
          La diferencia se nota sobre todo en octubre y noviembre: en Castellón a
          veces llega de golpe una &ldquo;gota fría&rdquo;, un aguacero intenso que
          puede dejar más de 100 mm en pocas horas. En verano la diferencia es
          despreciable; las dos están secas, calurosas y soleadas.
        </P>
      </Section>

      <Section>
        <H2>Infraestructuras: AVE, hospitales, colegios</H2>
        <H3>Alta velocidad (AVE)</H3>
        <UL>
          <li>
            <strong>Madrid → Alicante</strong>: 2 h 20 min, línea AVE directa, alta
            frecuencia
          </li>
          <li>
            <strong>Madrid → Castelló de la Plana</strong>: 2 h 50 min, trayecto AVE
            por Valencia en vía mixta
          </li>
          <li>
            <strong>Valencia ↔ Alicante</strong>: ahora 2 h 15 min por vía mixta. El
            nuevo eje AVE Castellón, Valencia y Alicante está previsto para 2027: a
            partir de entonces, unos 50 min entre Valencia y Alicante y sin
            transbordo entre las dos provincias
          </li>
        </UL>
        <P>
          Conclusión: si tienes que ir a menudo a Madrid en tren, Alicante es algo
          más rápida y tiene más frecuencias. Castellón tiene AVE directo, pero
          menos trenes al día.
        </P>
        <H3>Sanidad</H3>
        <P>
          La Costa Blanca tiene una red sanitaria privada potente: Quirónsalud
          Torrevieja, HLA Vistahermosa Alicante y clínicas privadas en casi todas
          las localidades grandes. Hay muchos especialistas que hablan inglés.
        </P>
        <P>
          Castellón tiene una buena oferta pública (Hospital General Universitari,
          Hospital Provincial) y Vithas Castellón en la privada. Para atención
          especializada compleja se suele ir a Valencia (1 h aprox.). Para una
          pareja sana de menos de 60 años apenas hay diferencia; para quien necesita
          especialistas con frecuencia, la Costa Blanca es más cómoda.
        </P>
        <H3>Colegios internacionales</H3>
        <P>
          Para familias con hijos en edad escolar es un factor de peso. La Costa
          Blanca tiene más de 15 colegios internacionales repartidos de Dénia a
          Orihuela; la enseñanza primaria y secundaria en inglés y alemán es
          habitual.
        </P>
        <P>
          La Costa del Azahar / provincia de Castellón tiene dos:{" "}
          <strong>British School of Vila-real</strong> (currículo británico, de 2 a
          18 años) y el <strong>International English School of Castellón
          (IESC)</strong>, del grupo Dukes Education. Suficiente para quien se queda
          en Castellón, pero sin mucha elección.
        </P>
      </Section>

      <Section>
        <H2>Impuestos y normas: idénticos para ambas</H2>
        <P>
          Como las dos costas están en la misma comunidad autónoma (Comunitat
          Valenciana), se aplican los mismos impuestos autonómicos. Desde el 1 de
          junio de 2026, el tipo del ITP en segunda mano es del{" "}
          <strong>9%</strong> (antes 10%). Por encima de 1 millón sigue en el 11%.
          Primera vivienda para menores de 35 años, con requisitos de renta y
          precio ≤ 180.000 €: 6%. Para familias numerosas o personas con
          discapacidad ≥ 33% en primera vivienda ≤ 180.000 €: 3%. Al mismo tiempo,
          el AJD en obra nueva bajó del 1,5% al 1,4%.
        </P>
        <P>
          La <strong>vivienda turística</strong> tiene un mismo marco autonómico
          (Decreto 10/2021 + Decreto-ley 9/2024) y la misma numeración:
          VT-XXXXXX-A para Alicante, VT-XXXXXX-CS para Castellón. Pero las
          restricciones <em>municipales</em> varían mucho:
        </P>
        <UL>
          <li>
            <strong>En la Costa Blanca</strong>, Benidorm, Calpe y Alicante ciudad
            tienen zonificaciones y moratorias que dificultan las nuevas licencias
          </li>
          <li>
            <strong>En la Costa del Azahar</strong>, Peñíscola y Benicàssim siguen
            poco a poco la misma línea, pero Vinaròs, Oropesa, Burriana y la mayoría
            de los demás municipios siguen relativamente abiertos
          </li>
        </UL>
        <P>
          Si compras pensando en alquilar: consulta siempre antes de comprar en el
          ayuntamiento del municipio concreto si todavía se conceden nuevos números
          VUT, sea cual sea la costa.
        </P>
      </Section>

      <Section>
        <H2>Tipo de inmueble y estilo de construcción</H2>
        <P>
          <strong>Costa Blanca</strong>: muy orientada a las urbanizaciones. Muchos
          apartamentos en altura en primera línea (el skyline de Benidorm es famoso
          en todo el mundo), villas en resorts de golf en el interior,
          urbanizaciones cerradas en Orihuela Costa y cientos de promociones de
          chalets adosados pensadas para el mercado turístico. Mucha oferta, fácil
          de comparar, un mercado transparente.
        </P>
        <P>
          <strong>Costa del Azahar</strong>: un desarrollo menos concentrado. Más
          chalets españoles en las afueras de los pueblos y una costa de menor
          altura con paseos marítimos (sin grandes torres salvo en algunas zonas de
          Benicàssim). Las promociones de obra nueva que hay, como las de
          Metrovacesa en el Grao de Castellón o junto a Sant Jordi, se dirigen cada
          vez más a compradores extranjeros, pero no están construidas &ldquo;para
          turistas&rdquo; todo el año. Menos oferta y por tanto menos elección,
          pero también menos competencia cuando compras.
        </P>
      </Section>

      <Section>
        <H2>Playas y entorno</H2>
        <P>
          Las dos costas tienen playas excelentes. Una medida objetiva es el número
          de Banderas Azules (FEE):
        </P>
        <UL>
          <li>
            <strong>Alicante 2026</strong>: 95 playas con Bandera Azul, primer
            puesto de España
          </li>
          <li>
            <strong>Castellón 2026</strong>: 39 playas con Bandera Azul, un buen
            resultado para una costa mucho más corta
          </li>
        </UL>
        <P>
          Por kilómetro de costa, Castellón puntúa igual o mejor. Lo que cambia es
          lo que hay detrás. La Costa Blanca tiene mucho interior rocoso (Serra
          Gelada, Montgó); la Costa del Azahar limita con el parque natural de la
          Serra d&apos;Irta y con la llanura húmeda de La Plana. Para senderistas y
          ciclistas de montaña, cada costa tiene su propio carácter, sin
          solaparse.
        </P>
      </Section>

      <Section>
        <H2>Para quién tiene más sentido la Costa Blanca</H2>
        <P>
          No decimos: elige siempre el Azahar. La Costa Blanca encaja mejor si uno
          o varios de estos puntos son decisivos para ti:
        </P>
        <UL>
          <li>
            Quieres vivir o ir y venir <strong>dentro de una comunidad de habla
            neerlandesa</strong>, con sanidad, amigos y tiendas en neerlandés cerca
          </li>
          <li>
            Compras como <strong>pura inversión de alquiler</strong> y quieres la
            demanda turística más contrastada
          </li>
          <li>
            Los <strong>vuelos directos baratos</strong> desde los Países Bajos son
            decisivos para ti: varias veces al día desde y hacia Ámsterdam frente a
            una vez al día por Valencia
          </li>
          <li>
            Tienes <strong>hijos en edad escolar</strong> que necesitan un colegio
            internacional y quieres mucha elección
          </li>
          <li>
            Necesitas <strong>atención médica compleja recurrente</strong> y quieres
            especialistas que hablen inglés cerca
          </li>
          <li>
            Ya tienes una red en la Costa Blanca (familia, amigos) y quieres estar
            cerca
          </li>
        </UL>
      </Section>

      <Section>
        <H2>Para quién tiene más sentido la Costa del Azahar</H2>
        <P>
          Y al revés: el Azahar encaja mejor si uno o varios de estos puntos te
          importan:
        </P>
        <UL>
          <li>
            Quieres un <strong>precio de entrada un 30 a 50% más bajo</strong> por
            una calidad comparable en el Mediterráneo
          </li>
          <li>
            Buscas <strong>vivir a la española de verdad</strong>, no dentro de una
            burbuja británica o neerlandesa
          </li>
          <li>
            Valoras una <strong>costa tranquila y poco turística</strong>: sin
            tardes de julio abarrotadas en la playa ni paseos llenos de bullicio
          </li>
          <li>
            Te atrae <strong>aprender español</strong> (y el entorno te obliga)
          </li>
          <li>
            Aceptas que el <strong>aeropuerto esté a una hora en coche</strong>:
            Valencia es accesible, con vuelos diarios desde Ámsterdam, pero no hay
            un vuelo cada dos horas como en Alicante
          </li>
          <li>
            Quieres un mercado que todavía <strong>está creciendo</strong>: más
            rentabilidad de entrada, menos liquidez demostrada
          </li>
        </UL>
      </Section>

      <Section>
        <H2>Transparencia: por qué acompañamos compras en el Azahar</H2>
        <P>
          Vivimos en el Grao de Castellón desde julio de 2023. Aquí compramos
          nuestra propia casa a través de nuestra B.V., conocemos personalmente a
          los gestores, notarios y abogados, y sabemos qué barrios de qué
          municipios merecen la pena y cuáles no. La Costa Blanca la conocemos como
          visitantes: hemos estado, tenemos familia y amigos allí, pero no vivimos
          allí.
        </P>
        <P>
          Por eso <strong>nuestros servicios de acompañamiento cubren la Costa del
          Azahar (provincia de Castellón) y los municipios cercanos del norte de
          Valencia</strong>. No porque la Costa Blanca sea una mala elección; para
          muchos compradores es la adecuada. Sino porque allí no tenemos el
          conocimiento de primera mano que sí ofrecemos en el Azahar. ¿Te vendría
          bien alguien de habla neerlandesa que acompañe compras en la Costa
          Blanca? Pregúntanos sin problema; podemos pasarte algunos nombres.
        </P>
      </Section>

      <Section>
        <H2>Para terminar: en las dos costas hay neerlandeses que viven felices</H2>
        <P>
          No hay un &ldquo;ganador&rdquo; objetivo entre la Costa del Azahar y la
          Costa Blanca. En las dos hay neerlandeses que llevan años viviendo allí y
          no se irían por nada. La pregunta es cuál encaja con cómo quieres vivir,
          cómo planteas la financiación y qué valoras del entorno: idioma,
          afluencia, precio, accesibilidad, colegios, sanidad.
        </P>
        <P>
          Si estás sopesándolo y quieres un consejo honesto (¿qué recomendaría
          alguien que vive aquí?), reserva una llamada gratuita de 30 minutos.
          Escuchamos tu situación y te decimos con sinceridad qué costa nos parece
          más lógica para ti. Aunque sea la Costa Blanca.
        </P>
      </Section>

      <GidsCallout variant="card" locale="es" />

      <div className="mt-16 rounded-3xl border border-olive/40 bg-olive/5 p-8 text-center">
        <h3 className="font-heading text-2xl text-navy">
          ¿Aún dudas entre las dos costas?
        </h3>
        <p className="mt-3 text-foreground/80">
          Reserva una llamada de 30 minutos sin compromiso. Hablamos de tu
          situación, tu presupuesto y lo que buscas, y te decimos con sinceridad
          qué costa tiene más sentido para ti, aunque no sea el Azahar.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <BookCallButton
            locale="es"
            className="rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-terracotta/90"
          >
            Reserva una llamada gratis
          </BookCallButton>
          <Link
            href="/es/gratis-gids"
            className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-terracotta"
          >
            O descarga antes nuestra guía (en neerlandés)
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
          Lee también
        </p>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <Link
            href="/es/artikelen/nieuwbouw-of-bestaande-bouw-spanje"
            className="block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-terracotta/60"
          >
            <p className="font-heading text-lg text-navy">
              Obra nueva o segunda mano en España: ¿cuál encaja contigo?
            </p>
            <p className="mt-2 text-sm text-foreground/75">
              Comparación de impuestos, garantías, plazos y costes ocultos, con una
              lista de cinco preguntas.
            </p>
            <span className="mt-3 inline-block text-sm text-terracotta">
              Leer el artículo →
            </span>
          </Link>
          <Link
            href="/es/artikelen/nie-aanvragen-spanje-stappenplan"
            className="block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-terracotta/60"
          >
            <p className="font-heading text-lg text-navy">
              Cómo solicitar el NIE en España: guía paso a paso 2026
            </p>
            <p className="mt-2 text-sm text-foreground/75">
              En el Consulado General en Ámsterdam o en España: documentos, coste y
              plazos.
            </p>
            <span className="mt-3 inline-block text-sm text-terracotta">
              Leer el artículo →
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
