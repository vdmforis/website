import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";
import { GidsCallout } from "@/components/GidsCallout";
import { Section, H2, H3, Lead, P, UL, OL, Callout } from "@/components/article/Prose";

/** Traducción al español del artículo neerlandés. */
export default function Body() {
  return (
    <>
      <Section>
        <Lead>
          En España, elegir entre obra nueva y segunda mano es una decisión más
          de fondo que en los Países Bajos. No se trata solo de estilo o año de
          construcción, sino también de impuestos, garantías legales, proceso de
          compra y de la paciencia que tendrás que traer. A continuación, una
          comparación honesta sin preferencias de entrada.
        </Lead>
        <GidsCallout variant="inline" locale="es" />
      </Section>

      <Section>
        <H2>Las diferencias clave de un vistazo</H2>
        <P>
          Para quien tenga poco tiempo, estas son las diferencias que de verdad
          importan. Debajo explicamos cada línea con cifras.
        </P>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/50 text-navy">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Concepto</th>
                <th className="px-4 py-3 text-left font-medium">Obra nueva</th>
                <th className="px-4 py-3 text-left font-medium">Segunda mano</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              <tr>
                <td className="px-4 py-3 font-medium text-navy">Impuesto de compra</td>
                <td className="px-4 py-3">IVA 10%</td>
                <td className="px-4 py-3">ITP 6 a 13% (según la comunidad autónoma)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-navy">AJD (Valencia)</td>
                <td className="px-4 py-3">1,5% sobre el precio</td>
                <td className="px-4 py-3">No aplica</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-navy">Plazo</td>
                <td className="px-4 py-3">9 a 18 meses (sobre plano)</td>
                <td className="px-4 py-3">2 a 3 meses</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-navy">Forma de pago</td>
                <td className="px-4 py-3">Cuatro pagos</td>
                <td className="px-4 py-3">Un solo pago en la escritura</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-navy">Garantías</td>
                <td className="px-4 py-3">10 años (Ley 38/1999)</td>
                <td className="px-4 py-3">Ninguna legal</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-navy">Aval bancario</td>
                <td className="px-4 py-3">Obligatorio</td>
                <td className="px-4 py-3">No aplica</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-navy">Certificado energético</td>
                <td className="px-4 py-3">A o B</td>
                <td className="px-4 py-3">Varía de A a G</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-navy">Margen de negociación</td>
                <td className="px-4 py-3">Limitado</td>
                <td className="px-4 py-3">Posible 5 a 15%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <H2>Impuestos comparados, en concreto</H2>
        <P>
          Para una vivienda de <strong>350.000 €</strong>, los impuestos quedan así
          (Comunidad Valenciana):
        </P>
        <UL>
          <li>
            <strong>Obra nueva:</strong> 350.000 € + IVA 10% (35.000 €) + AJD 1,5%
            (5.250 €) = <strong>390.250 €</strong> en total
          </li>
          <li>
            <strong>Segunda mano:</strong> 350.000 € + ITP 10% (35.000 €) ={" "}
            <strong>385.000 €</strong> en total
          </li>
        </UL>
        <P>
          Diferencia: unos 5.000 € a favor de la segunda mano. Nada espectacular,
          pero se nota.
        </P>
        <Callout>
          <p>
            <strong>El ITP varía por comunidad y cambia con frecuencia.</strong> A
            junio de 2026:
          </p>
          <ul className="mt-3 ml-5 list-disc space-y-1">
            <li>
              <strong>Comunidad Valenciana</strong>: 10% general{" "}
              <em>hasta el 1 de junio de 2026</em>, después rebajado al{" "}
              <strong>9%</strong>. Por encima de 1 millón sigue en el 11%. Tipo
              reducido del <strong>6%</strong> para primera vivienda de menos de
              180.000 € para menores de 35 años.
            </li>
            <li>
              <strong>Madrid</strong>: 6% general
            </li>
            <li>
              <strong>Andalucía</strong>: tipo único del 7%; reducido del 3,5 al 6%
              en casos concretos (jóvenes, precio bajo, familias numerosas)
            </li>
            <li>
              <strong>Catalunya</strong>: progresivo desde junio de 2025: 10% hasta
              600.000 € / 11% hasta 900.000 € / 12% hasta 1,5 millones / 13% por
              encima de 1,5 millones. Más un recargo del 20% para{" "}
              <em>grandes tenedores</em>
            </li>
          </ul>
          <p className="mt-3">
            Pide siempre a tu gestor el tipo vigente en tu comunidad: la normativa
            puede cambiar cada ejercicio fiscal.
          </p>
        </Callout>
      </Section>

      <Section>
        <H2>¿Cuándo elegir obra nueva?</H2>
        <P>Cuatro situaciones en las que la obra nueva suele ser la mejor opción:</P>
        <OL>
          <li>
            <strong>La eficiencia energética es prioritaria.</strong> La obra nueva
            posterior a 2020 cumple requisitos de aislamiento exigentes (CTE-DB-HE)
            y casi siempre tiene calificación A o B. Con la subida de la energía,
            eso supone miles de euros al año.
          </li>
          <li>
            <strong>No quieres un proyecto de reforma.</strong> En obra nueva,
            &quot;llave en mano&quot; casi siempre lo es de verdad: cocina, baño,
            electricidad, fontanería, todo nuevo y con garantía.
          </li>
          <li>
            <strong>Valoras una garantía estructural de 10 años.</strong> Según la
            Ley 38/1999, los constructores están obligados a dar garantía:{" "}
            <strong>10 años</strong> para defectos estructurales,{" "}
            <strong>3 años</strong> para defectos que afectan a la habitabilidad y{" "}
            <strong>1 año</strong> para los elementos de terminación o acabado.
          </li>
          <li>
            <strong>Tienes tiempo.</strong> Comprar sobre plano supone esperar de 9
            a 18 meses a la entrega, con pagos repartidos durante la obra. Si no
            tienes prisa y tu liquidez lo permite, no hay problema.
          </li>
        </OL>
      </Section>

      <Section>
        <H2>¿Cuándo elegir segunda mano?</H2>
        <P>Cuatro situaciones en las que la segunda mano encaja mejor:</P>
        <OL>
          <li>
            <strong>Quieres poder entrar enseguida.</strong> Con segunda mano puedes
            tener las llaves en 2 a 3 meses desde la firma. Con obra nueva a menudo
            esperas un año.
          </li>
          <li>
            <strong>En la zona no hay obra nueva.</strong> Cascos antiguos (centro
            de Castellón, casco histórico de Peñíscola), primera línea de playa en
            un paseo ya edificado: ahí no hay obra nueva y dependes de viviendas
            existentes.
          </li>
          <li>
            <strong>El carácter y lo singular son importantes.</strong> Una casa de
            pueblo de 100 años en el interior tiene un alma que la obra nueva no
            puede imitar. Para algunos compradores, esa es justo la razón.
          </li>
          <li>
            <strong>Quieres negociar.</strong> En segunda mano, un descuento del 5
            al 15% sobre el precio de salida es un objetivo realista, sobre todo si
            la vivienda lleva tiempo vacía. En obra nueva la lista de precios es
            pública y hay poco margen.
          </li>
        </OL>
      </Section>

      <Section>
        <H2>Costes ocultos: diferencias que a menudo no se ven venir</H2>
        <P>
          Además de los gastos principales, hay partidas que varían según el tipo
          de vivienda. Esta es la lista honesta.
        </P>

        <H3>En obra nueva</H3>
        <UL>
          <li>
            <strong>Comunidad de propietarios en constitución.</strong> En los
            primeros meses tras la entrega, la comunidad aún no está en marcha.
            Cuenta con cierto caos con el mantenimiento de la piscina, los jardines
            comunes y los pequeños arreglos.
          </li>
          <li>
            <strong>Repasos de obra.</strong> Casi toda obra nueva tiene más de 20
            pequeños defectos en la entrega (una mancha de pintura, un enchufe
            torcido, un grifo que gotea). Hay que comunicarlos en 14 días, lo que
            requiere tiempo y estar presente.
          </li>
          <li>
            <strong>El jardín a menudo no está incluido.</strong> Un &quot;jardín
            privado&quot; suele significar arena y grava. Plantas, riego y terraza
            corren de tu cuenta. Calcula de 5.000 a 15.000 €.
          </li>
          <li>
            <strong>Un entorno vacío.</strong> En las urbanizaciones nuevas, los
            servicios (tiendas, colegios, transporte público) llegan más tarde.
            Vivir unos años algo apartado puede ser una tranquilidad bienvenida, o
            una molestia.
          </li>
        </UL>

        <H3>En segunda mano</H3>
        <UL>
          <li>
            <strong>Mantenimiento atrasado.</strong> Baño, cocina, tuberías,
            electricidad: la mayoría de viviendas de más de 25 años necesitan al
            menos una reforma importante. Calcula de 15.000 a 60.000 € según la
            antigüedad y el estado.
          </li>
          <li>
            <strong>Rehabilitación energética.</strong> Pasar de una calificación F
            o G a A/B suele costar de 10.000 a 30.000 € (aislamiento, ventanas,
            aerotermia). Con la directiva europea EPBD, España debe elaborar planes
            nacionales de rehabilitación que previsiblemente exigirán la letra E a
            partir de 2030 y la D a partir de 2033 como mínimo para vender o
            alquilar. No es una prohibición directa de la UE, pero sí una dirección
            política que conviene tener en cuenta con viviendas antiguas.
          </li>
          <li>
            <strong>Vicios ocultos.</strong> Humedades, fugas, amianto en tejados
            antiguos, grietas. Un <em>informe técnico</em> independiente de un
            arquitecto español cuesta de 300 a 600 € y siempre merece la pena.
          </li>
          <li>
            <strong>Plusvalía municipal a veces a cargo del comprador.</strong> Por
            ley la paga el vendedor, pero en la práctica a veces se repercute en el
            precio o en el contrato. Léelo con atención.
          </li>
        </UL>
      </Section>

      <Section>
        <H2>Nuestra propia elección: por qué elegimos obra nueva</H2>
        <P>
          Para nuestra compra elegimos obra nueva: un chalet adosado en el Grao de
          Castellón, comprado a Metrovacesa en 2025, con entrega de llaves en junio
          de 2026.
        </P>
        <P>Lo que pesó en la decisión:</P>
        <UL>
          <li>
            La eficiencia energética pesaba mucho: vivimos allí y no queremos
            facturas altas en una casa que queremos usar 30 años
          </li>
          <li>
            No queríamos sumar una reforma: llevamos años viviendo en España y no
            teníamos la cabeza para el estrés de una obra
          </li>
          <li>Teníamos tiempo: ninguna urgencia por entrar a vivir en tres meses</li>
          <li>
            La garantía estructural de 10 años daba tranquilidad en una costa donde
            el aire salino afecta a la estructura
          </li>
        </UL>
        <P>
          La contrapartida: 18 meses entre la reserva y las llaves, cuatro pagos
          que aprietan la liquidez y el trabajo mental de seguir el aval, las
          traducciones y el Modelo 036. Eso lo subestimamos: no los importes, sino
          la cantidad de pequeñas decisiones durante el proceso.
        </P>
        <P>
          Lee la historia completa en{" "}
          <Link href="/es/onze-ervaring" className="text-terracotta hover:underline">
            Nuestra experiencia
          </Link>
          .
        </P>
      </Section>

      <Section>
        <H2>Cinco preguntas para decidir</H2>
        <P>
          Responde con sinceridad a estas cinco preguntas y la elección suele salir
          sola:
        </P>
        <OL>
          <li>
            <strong>¿Cuándo quieres poder estar allí?</strong> Ya → segunda mano. En
            12 a 18 meses está bien → la obra nueva es una opción.
          </li>
          <li>
            <strong>¿Qué importancia tiene la eficiencia energética?</strong>{" "}
            Crucial → obra nueva. Estoy dispuesto a invertir en ella → segunda mano
            con plan de reforma.
          </li>
          <li>
            <strong>¿Cómo está tu liquidez?</strong> Cuatro pagos en 18 meses está
            bien → obra nueva. Prefiero un solo momento → segunda mano y, si hace
            falta, hipoteca.
          </li>
          <li>
            <strong>¿Quieres negociar?</strong> Sí, forma parte del sector
            inmobiliario → segunda mano. No, un precio cerrado me parece bien → obra
            nueva.
          </li>
          <li>
            <strong>¿Cuánta garantía quieres?</strong> 10 años de estructura me dan
            tranquilidad → obra nueva. Confío en un buen informe técnico → segunda
            mano.
          </li>
        </OL>
      </Section>

      <Section>
        <H2>Para terminar</H2>
        <P>
          No hay una elección buena para todos. La obra nueva y la segunda mano son
          dos productos distintos, cada uno con sus costes, su ritmo y sus riesgos.
          La elección correcta depende del momento vital en que estés, de lo que
          vale tu tiempo y de cómo veas el mantenimiento.
        </P>
        <P>
          Lo que vale en ambos casos: un acompañamiento independiente, de alguien
          que trabaja para ti y no para el vendedor, evita la mayoría de errores
          caros. Ya sea un abogado que revisa el contrato de compraventa, un
          gestor que coordina el papeleo o alguien que te acompaña durante toda la
          compra.
        </P>
      </Section>

      <GidsCallout variant="card" locale="es" />

      <div className="mt-16 rounded-3xl border border-olive/40 bg-olive/5 p-8 text-center">
        <h3 className="font-heading text-2xl text-navy">
          ¿Aún dudas entre obra nueva y segunda mano?
        </h3>
        <p className="mt-3 text-foreground/80">
          Reserva una llamada de 30 minutos sin compromiso. Hablamos de tu
          situación, la zona y lo que buscas, y te decimos con sinceridad qué
          dirección tiene sentido para ti.
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
        <Link
          href="/es/artikelen/modelo-036-nederlandse-bv"
          className="mt-3 block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-terracotta/60"
        >
          <p className="font-heading text-lg text-navy">
            Modelo 036 para una B.V. neerlandesa: lo que debes saber en 2026
          </p>
          <p className="mt-2 text-sm text-foreground/75">
            Guía de primera mano para presentar el Modelo 036 y obtener un CIF
            español. Documentos, costes, plazos y errores habituales.
          </p>
          <span className="mt-3 inline-block text-sm text-terracotta">
            Leer el artículo →
          </span>
        </Link>
      </div>
    </>
  );
}
