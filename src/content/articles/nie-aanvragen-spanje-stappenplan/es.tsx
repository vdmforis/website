import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";
import { GidsCallout } from "@/components/GidsCallout";
import { Section, H2, Lead, P, UL, OL, Callout, Step } from "@/components/article/Prose";

const linkCls = "text-terracotta hover:underline";

/** Traducción al español del artículo neerlandés. */
export default function Body() {
  return (
    <>
      <Section>
        <Lead>
          Para la mayoría de los neerlandeses, la solicitud del NIE es el primer
          paso real del proceso en España, y también el primero que a menudo sale
          mal o llega tarde. Si empiezas pronto, es sencillo. Si esperas a tener
          una casa en mente, te quedas semanas bloqueado, porque todo lo que viene
          después (cuenta bancaria, contrato, Modelo 036) necesita antes tu NIE.
        </Lead>
        <GidsCallout variant="inline" locale="es" />
      </Section>

      <Section>
        <H2>Qué es el NIE, en pocas palabras</H2>
        <P>
          El NIE (<em>Número de Identidad de Extranjero</em>) es tu número personal
          de identificación fiscal en España como extranjero. Se compone de una
          letra (X, Y o Z), siete cifras y una letra de control. Por ejemplo:
          Y1234567A.
        </P>
        <P>Para qué sirve:</P>
        <UL>
          <li>Abrir una cuenta bancaria española</li>
          <li>Firmar un contrato de compraventa</li>
          <li>Firmar un contrato de alquiler</li>
          <li>Dar de alta los suministros (agua, luz, gas, internet)</li>
          <li>Poner un coche o una moto a tu nombre</li>
          <li>Presentar la declaración de la renta (Modelo 100 o 210)</li>
          <li>Darte de alta en la Seguridad Social si vas a trabajar</li>
        </UL>
        <P>
          Una vez asignado, el NIE es <strong>válido de por vida</strong>. No
          figura en tu pasaporte ni hay que renovarlo: se solicita una vez y se
          conserva para siempre.
        </P>
      </Section>

      <Section>
        <H2>¿Cuándo lo necesitas de verdad?</H2>
        <P>
          En cualquier trámite jurídico o financiero serio en España alguien te
          pedirá el NIE. Momentos concretos en los que ya no puedes aplazarlo:
        </P>
        <UL>
          <li>
            Vas a firmar un <strong>contrato de reserva</strong> en una promoción
            de obra nueva: la mayoría de promotoras ya lo piden
          </li>
          <li>
            Vas a abrir una <strong>cuenta bancaria española</strong> como
            particular o para tu B.V. (sociedad limitada neerlandesa): es un
            requisito de identificación previo y obligatorio
          </li>
          <li>
            Vas a <strong>dar de alta los suministros</strong> en una vivienda
            recién alquilada o comprada
          </li>
          <li>
            Vas a <strong>comprar un coche o una moto</strong>: la DGT no acepta la
            matriculación sin NIE
          </li>
        </UL>
        <Callout>
          <p>
            <strong>Regla práctica:</strong> si en los próximos 12 meses quieres
            hacer cualquier cosa con cierto peso en España, solicita el NIE ahora.
            El trámite casi no cuesta nada y es fácil, y te ahorra esperas justo en
            el momento en que lo necesites.
          </p>
        </Callout>
      </Section>

      <Section>
        <H2>Dos vías: ¿desde los Países Bajos o en España?</H2>
        <P>Puedes solicitar el NIE de dos maneras:</P>
        <OL>
          <li>
            <strong>En la Embajada o un Consulado de España en los Países
            Bajos</strong>: La Haya o Ámsterdam
          </li>
          <li>
            <strong>En España</strong>: en una <em>Oficina de Extranjería</em> o en
            una <em>Comisaría de Policía Nacional</em>
          </li>
        </OL>
        <P>
          Las dos llevan exactamente al mismo número de NIE y son jurídicamente
          equivalentes. Qué vía elegir depende de dónde estés y de la prisa que
          tengas.
        </P>
      </Section>

      <Section>
        <H2>Vía 1: solicitar el NIE desde los Países Bajos</H2>
        <P>
          Es la vía más utilizada por los neerlandeses que se están informando o
          quieren comprar una segunda residencia.
        </P>

        <Step number={1} title="Pedir cita en el Consulado General en Ámsterdam">
          <P>
            <strong>Conviene saber</strong>: en La Haya solo está la{" "}
            <em>Embajada de España</em>, sin sección consular. Todos los trámites
            consulares de los Países Bajos, incluido el NIE, se hacen en el{" "}
            <a
              href="https://www.exteriores.gob.es/Consulados/amsterdam/es/Paginas/index.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Consulado General de España en Ámsterdam
            </a>
            .
          </P>
          <P>
            Pide cita online en su web para la solicitud del NIE: elige la opción
            &quot;NIE para no residentes&quot; o similar. Cuenta con una espera de{" "}
            <strong>2 a 8 semanas</strong> hasta la siguiente cita disponible, según
            la temporada. En verano hay más demanda.
          </P>
        </Step>

        <Step number={2} title="Rellenar el formulario EX-15">
          <P>
            El formulario oficial EX-15 lo gestiona la <em>Policía Nacional</em>.
            Lo encontrarás en la{" "}
            <a
              href="https://sede.policia.gob.es/portalCiudadano/_es/tramites_extranjeria_tramite_asignacion_nie.php"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Sede Electrónica de la Policía Nacional
            </a>{" "}
            (trámite: <em>Asignación de NIE</em>). Está en español, pero casi todo
            son datos básicos. Campos importantes:
          </P>
          <UL>
            <li>
              <strong>Datos personales</strong>: nombre, apellidos, lugar y fecha
              de nacimiento, nacionalidad
            </li>
            <li>
              <strong>Domicilio en España</strong>: déjalo en blanco si aún no
              tienes dirección; si no, pon la del hotel o el alojamiento donde te
              quedas
            </li>
            <li>
              <strong>Domicilio en el país de origen</strong>: tu dirección en los
              Países Bajos
            </li>
            <li>
              <strong>Motivos de la solicitud</strong>: elige el motivo correcto:
              casi siempre <em>económicos</em> (para un inmueble) o{" "}
              <em>profesionales</em>
            </li>
          </UL>
        </Step>

        <Step number={3} title="Redactar un escrito de motivación">
          <P>
            La solicitud del NIE necesita una justificación. No tiene que ser
            larga: basta una breve declaración en español explicando por qué pides
            el número. Un texto habitual para compradores de vivienda:
          </P>
          <Callout>
            <p style={{ fontStyle: "italic" }}>
              &quot;Solicito el Número de Identidad de Extranjero (NIE) con el fin
              de poder realizar trámites económicos en España relacionados con la
              compra de un inmueble en la Comunitat Valenciana, incluida la
              apertura de una cuenta bancaria, la firma del contrato de
              compraventa, y la formalización de los servicios públicos
              correspondientes.&quot;
            </p>
          </Callout>
          <P>
            Añade debajo tu nombre, la fecha y tu firma. No hace falta traducción
            al neerlandés: basta con el español.
          </P>
        </Step>

        <Step number={4} title="Pagar el Modelo 790 código 012">
          <P>
            La tasa oficial por la asignación del NIE es de <strong>9,84 €</strong>{" "}
            (Modelo 790, código 012). Puedes generar el impreso en la{" "}
            <a
              href="https://sede.policia.gob.es/Tasa790_012/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Sede de la Policía Nacional
            </a>
            .
          </P>
          <P>
            Rellénalo online, imprímelo y paga la tasa en una{" "}
            <em>entidad colaboradora</em> española (CaixaBank, BBVA, Santander,
            Sabadell, Ibercaja, Bankinter o Unicaja). Te devuelven un justificante
            sellado que debes llevar a la cita.
          </P>
          <P>
            Para quien solicita desde los Países Bajos: si vas por el Consulado
            General en Ámsterdam, normalmente pagas las tasas en el propio
            consulado en lugar de con el Modelo 790. Pregunta los importes exactos
            al confirmar la cita; cambian periódicamente.
          </P>
        </Step>

        <Step number={5} title="Llevar los documentos a la cita">
          <P>Qué llevar al consulado:</P>
          <UL>
            <li>Pasaporte en vigor (original y copia de la página de datos)</li>
            <li>
              Dos fotos de carné en <strong>formato español de 32 × 26 mm</strong>{" "}
              (no el neerlandés de 35 × 45 mm), fondo blanco, recientes
            </li>
            <li>EX-15 cumplimentado (2 ejemplares)</li>
            <li>Escrito de motivación firmado, en español</li>
            <li>Justificante de pago de la tasa</li>
          </UL>
          <Callout>
            <p>
              <strong>Ojo con las fotos:</strong> el estándar español de 32 × 26 mm
              no coincide con el formato internacional que se usa en los Países
              Bajos (35 × 45 mm). Muchos fotógrafos neerlandeses no lo saben. Pide
              expresamente una <em>&quot;foto carnet español DNI&quot;</em> o
              hazlas en España en un fotomatón.
            </p>
          </Callout>
        </Step>

        <Step number={6} title="Esperar la resolución">
          <P>
            El plazo legal es de <strong>5 días hábiles</strong> desde el registro
            por el organismo competente. En la práctica, a través de un consulado
            en los Países Bajos, cuenta con <strong>2 a 6 semanas</strong> hasta
            que te entreguen el NIE, según la temporada y la carga de trabajo. El
            consulado te llama o te escribe en cuanto el documento está listo.
            Recibes un <em>Resguardo de NIE</em>, un certificado en papel con tu
            número. Guárdalo bien.
          </P>
        </Step>
      </Section>

      <Section>
        <H2>Vía 2: solicitar el NIE en España</H2>
        <P>
          Si ya estás en España (de vacaciones, en un viaje para ver viviendas o
          residiendo temporalmente), también puedes solicitar el NIE aquí. Suele
          ser más rápido que desde los Países Bajos, pero tiene algunas trampas.
        </P>

        <Step number={1} title="Reservar cita previa en sede.administracionespublicas.gob.es">
          <P>
            Entra en{" "}
            <a
              href="https://sede.administracionespublicas.gob.es/icpplustiem/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              sede.administracionespublicas.gob.es
            </a>{" "}
            y reserva <em>cita previa</em> en la provincia donde te alojas. Elige
            la categoría &quot;Asignación de NIE&quot;.
          </P>
          <Callout>
            <p>
              <strong>La gran trampa:</strong> en zonas con mucha demanda (Alicante,
              Málaga, la costa de Valencia) a menudo no hay citas durante semanas o
              meses. El sistema muestra entonces que no hay citas disponibles.
              Prueba cada día a las 9:00, cuando se liberan nuevos huecos. O prueba
              una provincia menos saturada (Castellón y Tarragona suelen ser más
              realistas que Alicante).
            </p>
          </Callout>
        </Step>

        <Step number={2} title="Preparar el EX-15 y el Modelo 790 código 012">
          <P>
            Rellena en casa el EX-15 y el Modelo 790 (ver vía 1). Imprime ambos
            antes de ir a la cita. Paga la tasa de unos 10 € en un banco español
            hasta 1 semana antes de la cita.
          </P>
        </Step>

        <Step number={3} title="Acudir a la cita">
          <P>
            Preséntate a la cita, normalmente en una{" "}
            <em>Comisaría de Policía Nacional</em> o en una{" "}
            <em>Oficina de Extranjería</em>. Sé puntual (15 minutos antes). Qué
            llevar:
          </P>
          <UL>
            <li>Pasaporte (original y copia)</li>
            <li>EX-15 cumplimentado</li>
            <li>Justificante de pago del Modelo 790 código 012</li>
            <li>La motivación (también se puede explicar de palabra)</li>
            <li>
              A veces lo piden: copia de un contrato de alquiler, una reserva de
              hotel o un contrato de compraventa que justifique tu estancia
            </li>
          </UL>
        </Step>

        <Step number={4} title="Recibir el NIE">
          <P>
            El plazo legal es de <strong>5 días hábiles</strong> desde el registro.
            En zonas costeras con mucha demanda (Costa Blanca, Mallorca) cuenta con{" "}
            <strong>1 a 3 semanas</strong>. A veces te lo dan en el momento, según
            la rapidez de la comisaría. Lo recibes en un <em>Resguardo</em> de
            papel con tu número; no es una tarjeta de plástico.
          </P>
        </Step>
      </Section>

      <Section>
        <H2>¿Qué vía encaja con cada caso?</H2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/50 text-navy">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Situación</th>
                <th className="px-4 py-3 text-left font-medium">Mejor vía</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              <tr>
                <td className="px-4 py-3">Al principio de la búsqueda, sin viaje previsto</td>
                <td className="px-4 py-3">Consulado en los Países Bajos: con calma</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Viaje para ver viviendas en breve</td>
                <td className="px-4 py-3">En España, durante el viaje</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Ya tengo una casa en mente</td>
                <td className="px-4 py-3">Camino más rápido: en España</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Lo quiero solo &quot;por si acaso&quot;</td>
                <td className="px-4 py-3">Consulado en los Países Bajos: no cuesta nada adelantarlo</td>
              </tr>
              <tr>
                <td className="px-4 py-3">No tengo tiempo para esperar semanas</td>
                <td className="px-4 py-3">España, si hay cita disponible</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <H2>¿Cuánto cuesta de verdad?</H2>
        <P>
          La tasa oficial es de <strong>9,84 €</strong> (Modelo 790 código 012,
          específica para la asignación del NIE). Aparte, solo tus propios gastos
          de viaje y tiempo:
        </P>
        <UL>
          <li>
            Viaje a Ámsterdam (Consulado General: unos 10 a 30 € en transporte
            público dentro de los Países Bajos)
          </li>
          <li>
            Fotos en formato español (7 a 10 € en un fotógrafo: pide formato DNI,
            32 × 26 mm)
          </li>
          <li>Comisiones bancarias internacionales si tienes que pagar en España (5 a 20 €)</li>
          <li>
            Ayuda de un gestor (opcional): 100 a 200 € si quieres externalizar todo
            el trámite
          </li>
        </UL>
        <P>
          Cuenta con un gasto total de <strong>20 a 50 €</strong> si lo haces tú,
          o de <strong>150 a 300 €</strong> si contratas a un gestor para toda la
          coordinación.
        </P>
      </Section>

      <Section>
        <H2>Siete errores que conviene evitar</H2>
        <OL>
          <li>
            <strong>Confundir el EX-15 con el EX-18.</strong> El EX-18 es el{" "}
            <em>Certificado de Registro de Ciudadano de la Unión</em>, para
            ciudadanos de la UE que se establecen como residentes. El EX-15 es para
            la asignación del NIE como no residente. Para la mayoría de compradores
            de segunda residencia: siempre el EX-15.
          </li>
          <li>
            <strong>Una motivación demasiado escueta.</strong> &quot;Para comprar
            una casa&quot; es demasiado vago. Sé concreto: zona, tipo de vivienda,
            finalidad (uso propio o inversión).
          </li>
          <li>
            <strong>Pasaporte caducado.</strong> El pasaporte debe tener al menos 6
            meses de validez en la fecha de la cita. Compruébalo antes.
          </li>
          <li>
            <strong>Pedir cita en España demasiado pronto.</strong> Algunos
            consulados y comisarías exigen que acudas en los 30 días siguientes a
            la reserva. Reserva solo cuando tengas fecha de viaje.
          </li>
          <li>
            <strong>Intentar pagar la tasa en efectivo.</strong> El Modelo 790
            código 012 se paga en un banco español, no en efectivo en la
            ventanilla.
          </li>
          <li>
            <strong>Dar por hecho que recibirás una tarjeta.</strong> Recibes un{" "}
            <em>Resguardo</em> en papel, no un documento de plástico. Guárdalo en
            una carpeta en casa y escanéalo enseguida.
          </li>
          <li>
            <strong>Equivocarte con la letra inicial.</strong> El NIE siempre
            empieza por X, Y o Z. Algunos sistemas preguntan si es un DNI español:
            no lo confirmes, elige la opción &quot;NIE&quot;.
          </li>
        </OL>
      </Section>

      <Section>
        <H2>¿Qué hacer cuando ya lo tienes?</H2>
        <P>Nada más recibir el NIE:</P>
        <UL>
          <li>
            Escanea el <em>Resguardo</em> y guárdalo en digital en varios sitios
            (Drive, un correo a ti mismo, en local)
          </li>
          <li>Guarda el original con cuidado en tu &quot;carpeta de España&quot;</li>
          <li>
            Añádelo a tus documentos más importantes: lo necesitarás en casi todos
            los trámites en España
          </li>
          <li>
            Si es tu caso: presenta enseguida el{" "}
            <Link href="/es/artikelen/modelo-036-nederlandse-bv" className={linkCls}>
              Modelo 036
            </Link>{" "}
            de tu B.V., que necesita tu NIE como apoderado
          </li>
          <li>
            Abre tu cuenta bancaria española (normalmente basta con el NIE, el
            pasaporte y un justificante de residencia)
          </li>
        </UL>
      </Section>

      <Section>
        <H2>Para terminar</H2>
        <P>
          La solicitud del NIE es técnicamente sencilla: un formulario, una tasa y
          algo de paciencia. El problema no es la complejidad sino el momento: la
          gente lo pide tarde y después se atasca en cada paso siguiente (banco,
          contrato, Modelo 036).
        </P>
        <P>
          Nuestra recomendación sincera: solicita el NIE en cuanto te plantees en
          serio una casa en España, no cuando ya la hayas encontrado. Es un trámite
          administrativo único con validez de por vida. Sin riesgo, solo ventaja.
        </P>
      </Section>

      <GidsCallout variant="card" locale="es" />

      <div className="mt-16 rounded-3xl border border-olive/40 bg-olive/5 p-8 text-center">
        <h3 className="font-heading text-2xl text-navy">
          ¿Quieres que te acompañemos en la solicitud del NIE?
        </h3>
        <p className="mt-3 text-foreground/80">
          Nuestro servicio de papeleo se encarga del NIE, la cuenta bancaria, el
          Modelo 036 y las traducciones: precio cerrado por adelantado y un único
          interlocutor de habla neerlandesa.
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

      <div className="mt-12">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
          Lee también
        </p>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <Link
            href="/es/artikelen/modelo-036-nederlandse-bv"
            className="block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-terracotta/60"
          >
            <p className="font-heading text-lg text-navy">
              Modelo 036 para una B.V. neerlandesa
            </p>
            <p className="mt-2 text-sm text-foreground/75">
              Guía paso a paso para solicitar un CIF español para tu B.V.
              neerlandesa.
            </p>
          </Link>
          <Link
            href="/es/artikelen/nieuwbouw-of-bestaande-bouw-spanje"
            className="block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-terracotta/60"
          >
            <p className="font-heading text-lg text-navy">¿Obra nueva o segunda mano?</p>
            <p className="mt-2 text-sm text-foreground/75">
              Comparación honesta de impuestos y garantías, con una lista de cinco
              preguntas.
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
