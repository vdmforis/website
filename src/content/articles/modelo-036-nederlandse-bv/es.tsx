import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";
import { GidsCallout } from "@/components/GidsCallout";
import { Section, H2, Lead, P, UL, OL, Callout, Step } from "@/components/article/Prose";

/** Traducción al español del artículo neerlandés. */
export default function Body() {
  return (
    <>
      <Section>
        <Lead>
          En pocas palabras: el Modelo 036 es la declaración censal, el alta
          fiscal ante la Agencia Tributaria. Para las B.V. neerlandesas que
          quieren comprar un inmueble en España, esperar el Modelo 036 suele ser
          la parte más lenta de toda la compra. Pasamos por este trámite en mayo
          de 2026 con nuestra propia B.V., y aquí está todo lo que aprendimos por
          el camino.
        </Lead>
        <GidsCallout variant="inline" locale="es" />
      </Section>

      <Section>
        <H2>Qué es el Modelo 036, explicado sin tecnicismos</H2>
        <P>
          El Modelo 036 (oficialmente:{" "}
          <em>
            Declaración censal de alta, modificación y baja en el Censo de
            Empresarios, Profesionales y Retenedores
          </em>
          ) es el formulario estándar con el que una entidad se da de alta,
          comunica cambios o se da de baja ante Hacienda. En los Países Bajos
          equivaldría a combinar el alta en el IVA con el alta como empresa ante la
          administración tributaria neerlandesa (Belastingdienst).
        </P>
        <P>
          Para una B.V. neerlandesa que quiere comprar un inmueble en España, el
          Modelo 036 tiene una función concreta: es la vía para obtener un{" "}
          <strong>CIF</strong> español (el NIF de las personas jurídicas, que en
          las entidades extranjeras empieza por N). Sin ese número no hay cuenta
          bancaria española, ni escritura ante notario, ni pagos a partes
          españolas por encima de cierto umbral.
        </P>
      </Section>

      <Section>
        <H2>¿Cuándo lo necesitas de verdad?</H2>
        <P>No todos los compradores extranjeros tienen que presentar el Modelo 036:</P>
        <UL>
          <li>
            <strong>Las personas físicas</strong> compran con su NIE. No necesitan
            el Modelo 036.
          </li>
          <li>
            <strong>Las B.V. neerlandesas que compran de forma puntual</strong> para
            uso propio están técnicamente en una zona gris, pero en la práctica los
            bancos y notarios españoles casi siempre piden un CIF antes de trabajar
            contigo.
          </li>
          <li>
            <strong>Las B.V. neerlandesas que prestan servicios en España de forma habitual</strong>{" "}
            (alquiler vacacional, intermediación inmobiliaria, asesoría): es
            obligatorio.
          </li>
        </UL>
        <P>
          Nuestra conclusión: si compras a través de tu B.V., preséntalo. Las
          instituciones españolas aceptan cada vez menos a personas jurídicas
          extranjeras anónimas al otro lado de una operación.
        </P>
      </Section>

      <Section>
        <H2>CIF, NIF, NIE: ¿en qué se diferencian?</H2>
        <P>
          Antes de ver cómo se presenta el Modelo 036, conviene saber qué número
          vas a recibir y en qué se diferencia de otros números fiscales.
        </P>
        <UL>
          <li>
            <strong>NIF (Número de Identificación Fiscal)</strong>: término
            genérico, la identidad fiscal española tanto de personas físicas como
            jurídicas.
          </li>
          <li>
            <strong>NIE (Número de Identidad de Extranjero)</strong>: el NIF de las
            personas físicas extranjeras, que empieza por X, Y o Z.
          </li>
          <li>
            <strong>CIF (Código de Identificación Fiscal)</strong>: antes era el
            nombre propio del NIF de las personas jurídicas. Desde 2008 ya no
            existe oficialmente como denominación aparte, pero se sigue usando mucho
            en el lenguaje empresarial.
          </li>
          <li>
            <strong>NIF de entidades extranjeras</strong>: las personas jurídicas
            extranjeras reciben un NIF que empieza por <strong>N</strong> (B.V.
            neerlandesa: N + 7 cifras + letra).
          </li>
        </UL>
        <P>
          Para tu B.V. neerlandesa, lo que obtienes es formalmente un NIF, aunque
          en el lenguaje empresarial del día a día se le suele llamar CIF.
        </P>
      </Section>

      <Section>
        <H2>¿Qué necesitas antes de empezar?</H2>
        <P>
          El Modelo 036 solo se puede presentar con la documentación completa.
          Nosotros lo presentamos a través de un gestor en Castellón. Con la
          solicitud llevábamos:
        </P>
        <OL>
          <li>
            <strong>El propio Modelo 036</strong>: cumplimentado y firmado por el
            apoderado.
          </li>
          <li>
            <strong>Poder notarial</strong>: escritura neerlandesa que designa al
            apoderado para representar a la B.V. en España. Con traducción jurada
            al español. Apostillado.
          </li>
          <li>
            <strong>Escritura de constitución de la B.V. neerlandesa</strong>: con
            traducción jurada y apostilla. En nuestro caso: 15 páginas de estatutos
            y cláusulas finales, todo traducido.
          </li>
          <li>
            <strong>Extracto de la Cámara de Comercio neerlandesa (KvK)</strong>:
            preferiblemente en la versión española,{" "}
            <em>Extracto del Registro Mercantil</em>. La propia KvK la emite, lo
            que ahorra una traducción.
          </li>
          <li>
            <strong>Extracto del registro de titulares reales (UBO)</strong> de
            los propietarios de la B.V.: con traducción jurada.
          </li>
          <li>
            <strong>NIE del apoderado</strong>: copia.
          </li>
          <li>
            <strong>Mandato de representación</strong>: contrato de representación
            en español entre la B.V. y el gestor.
          </li>
        </OL>
        <Callout>
          <p>
            <strong>Importante:</strong> todas las traducciones deben ser juradas,
            hechas por un <em>traductor jurado</em> inscrito en el Ministerio de
            Asuntos Exteriores. Una traducción normal de agencia se rechaza. El
            coste puede llegar a 800 a 1.200 € por un juego completo.
          </p>
        </Callout>
      </Section>

      <Section>
        <H2>Paso a paso: cómo lo presentamos</H2>
        <P>
          Presentamos nuestro Modelo 036 el 26 de mayo de 2026, a través de un
          gestor y por vía electrónica (
          <a
            href="https://sede.agenciatributaria.gob.es"
            className="text-terracotta hover:underline"
            rel="noopener noreferrer"
          >
            sede.agenciatributaria.gob.es
          </a>
          ).
        </P>
        <div className="mt-6 space-y-6">
          <Step className="" number={1} title="Cumplimentar el Modelo 036">
            <P>Lo rellena el gestor. Los campos principales para una entidad extranjera:</P>
            <UL>
              <li>Marcar la casilla &quot;Alta&quot;</li>
              <li>
                Persona jurídica → <em>Entidad extranjera con personalidad
                jurídica</em>
              </li>
              <li>
                Código país: <strong>NL</strong>
              </li>
              <li>Domicilio fiscal: la dirección en los Países Bajos</li>
              <li>Representante (apoderado): el apoderado con NIE</li>
              <li>
                Marcar la clave 332 (Voluntaria): la representación es voluntaria,
                no legal
              </li>
            </UL>
          </Step>
          <Step className="" number={2} title="Presentación telemática">
            <P>
              El gestor entra en la sede electrónica de la AEAT con su propio
              certificado y presenta en tu nombre. Recibes un{" "}
              <em>número de asiento registral</em>. Guárdalo bien.
            </P>
          </Step>
          <Step className="" number={3} title="Aportar la documentación adicional">
            <P>
              En los 10 días siguientes a la presentación tienes que subir todos los
              anexos mediante <em>Aportar documentación complementaria</em>.
              Nosotros enviamos 11 archivos: la escritura de constitución
              neerlandesa y su traducción, el poder con traducción y apostilla, el
              extracto de la KvK, los extractos de titulares reales de la holding y
              de la propia B.V., la copia del NIE y el mandato.
            </P>
          </Step>
          <Step className="" number={4} title="Esperar el NIF definitivo">
            <P>
              La AEAT confirma primero la recepción (en 24 horas). El plazo legal
              para asignar un <strong>NIF provisional</strong> es de 10 días
              hábiles; en la práctica, por la vía consular, suele tardar de 2 a 4
              semanas. Para el <strong>NIF definitivo</strong>, la entidad tiene
              después 6 meses para aportar toda la documentación; en la práctica se
              resuelve en 2 a 3 meses desde la presentación. Nuestro contrato de
              compraventa ya llevaba un NIF provisional, lo que da una idea de lo
              habitual que es.
            </P>
          </Step>
        </div>
      </Section>

      <Section>
        <H2>Cuánto cuesta</H2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/50 text-navy">
              <tr>
                <th className="px-6 py-4 text-left font-medium">Concepto</th>
                <th className="px-6 py-4 text-right font-medium">Precio orientativo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              <tr>
                <td className="px-6 py-4">Honorarios del gestor por el Modelo 036</td>
                <td className="px-6 py-4 text-right">250 a 500 €</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Poder notarial en los Países Bajos</td>
                <td className="px-6 py-4 text-right">350 a 600 €</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Apostilla (juzgado)</td>
                <td className="px-6 py-4 text-right">25 a 50 €</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Traducciones juradas neerlandés → español (juego completo)</td>
                <td className="px-6 py-4 text-right">600 a 1.200 €</td>
              </tr>
              <tr className="bg-navy/5 font-medium text-navy">
                <td className="px-6 py-4">Total</td>
                <td className="px-6 py-4 text-right">1.500 a 2.500 €</td>
              </tr>
            </tbody>
          </table>
        </div>
        <P>
          Cuenta con una horquilla de 1.500 a 2.500 € para todo el trámite del
          Modelo 036, sin contar tu propio tiempo.
        </P>
      </Section>

      <Section>
        <H2>Plazos: de 6 a 10 semanas</H2>
        <P>
          No es cuestión de &quot;lo presento mañana y la semana que viene está
          listo&quot;. Un calendario realista:
        </P>
        <UL>
          <li>Semanas 1 a 2: preparar y firmar el poder notarial en los Países Bajos</li>
          <li>Semanas 2 a 3: apostilla en el juzgado</li>
          <li>Semanas 3 a 4: traducciones juradas (un traductor jurado necesita 1 a 2 semanas)</li>
          <li>Semana 4: presentación del Modelo 036 con los anexos</li>
          <li>Semanas 5 a 8: asignación del CIF provisional</li>
          <li>Semanas 8 a 12: CIF definitivo (a menudo en paralelo a la compra)</li>
        </UL>
        <Callout>
          <p>
            <strong>Regla práctica:</strong> empieza con el Modelo 036 al menos 8
            semanas antes de querer hacer un pago desde tu B.V. a España. Muchos
            compradores no inician el trámite hasta después de firmar un contrato
            español, y luego se atascan con los plazos de pago.
          </p>
        </Callout>
      </Section>

      <Section>
        <H2>Seis errores que conviene evitar</H2>
        <OL>
          <li>
            <strong>Traducciones hechas por un traductor no jurado</strong>: la
            AEAT las rechaza sin más. Siempre traductor jurado.
          </li>
          <li>
            <strong>Olvidar la apostilla</strong>: España solo acepta escrituras
            neerlandesas con apostilla. Cuenta con 1 a 2 semanas más.
          </li>
          <li>
            <strong>No tramitar antes el NIE del apoderado</strong>: necesitas un
            NIE válido para presentar como apoderado. ¿El apoderado aún no tiene
            NIE? Para y tramita primero el NIE.
          </li>
          <li>
            <strong>Marcar por error que existe un establecimiento permanente</strong>:
            si marcas esa casilla, la AEAT entiende que tienes un{" "}
            <em>establecimiento permanente</em> en España y tendrás que pagar el
            Impuesto sobre Sociedades en España. Cambia toda la estructura fiscal.
          </li>
          <li>
            <strong>No declarar a todos los titulares reales</strong>: las B.V.
            neerlandesas también deben indicar sus titulares reales en el Modelo
            036 (página 10). Olvidarlo supone retrasos.
          </li>
          <li>
            <strong>Olvidar el mandato de representación</strong>: si presentas a
            través de un gestor, debe existir un mandato que le autorice a actuar
            en nombre de tu B.V. ante la AEAT.
          </li>
        </OL>
      </Section>

      <Section>
        <H2>Qué pasa después de la confirmación</H2>
        <P>En cuanto tengas el CIF provisional:</P>
        <UL>
          <li>Ya puedes abrir una cuenta bancaria española</li>
          <li>El notario puede preparar una escritura para tu B.V.</li>
          <li>Los proveedores y promotores españoles pueden facturarte</li>
          <li>
            Puedes darte de alta para el Modelo 720 (declaración obligatoria de
            bienes en el extranjero) si pasas a tener un establecimiento permanente
            en España
          </li>
        </UL>
        <P>
          El CIF definitivo (al cabo de 2 a 3 meses) tiene los mismos derechos que
          el provisional, así que no hace falta forzar ese paso.
        </P>
      </Section>

      <Section>
        <H2>¿Necesitas ayuda?</H2>
        <P>
          Pasamos por este trámite a principios de 2026 con nuestra B.V.
          neerlandesa, constituida en septiembre de 2025, y teníamos el CIF español
          antes de mayo de 2026. Si estás a punto de hacer lo mismo y no quieres
          pelearte tú con el papeleo, nuestro{" "}
          <Link
            href="/es/diensten#papierwinkel"
            className="text-terracotta hover:underline"
          >
            servicio de papeleo
          </Link>{" "}
          te guía de principio a fin: precio cerrado, acordado por adelantado, sin
          sorpresas.
        </P>
      </Section>

      <GidsCallout variant="card" locale="es" />

      <div className="mt-16 rounded-3xl border border-olive/40 bg-olive/5 p-8 text-center">
        <h3 className="font-heading text-2xl text-navy">
          El mismo trámite para tu B.V., sin pelearte tú con el papeleo
        </h3>
        <p className="mt-3 text-foreground/80">
          Desde 350 € por trámite nos encargamos de tu NIE, CIF, cuenta bancaria y
          Modelo 036. Un único interlocutor de habla neerlandesa para todo el
          proceso.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/es/diensten#papierwinkel"
            className="rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-terracotta/90"
          >
            Ver el servicio de papeleo
          </Link>
          <BookCallButton
            locale="es"
            className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-terracotta"
          >
            O reserva una llamada
          </BookCallButton>
        </div>
      </div>
    </>
  );
}
