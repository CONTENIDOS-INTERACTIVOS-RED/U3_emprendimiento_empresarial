<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. ¿Qué es el emprendimiento social como modelo de negocio?'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 El emprendimiento social se centra en resolver problemas sociales o ambientales mediante modelos de negocio innovadores y sostenibles. Como emprendedor social, tu objetivo principal no es solo generar ingresos, sino también crear un impacto positivo en la sociedad. Esto puede incluir proyectos que mejoren la educación, reduzcan la pobreza, promuevan la inclusión o aborden desafíos ambientales.

    .row.mb-4
      .col-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8.mx-auto(data-aos="fade-left")
        .bg-rojo-claro.p-4
          span En Colombia, un ejemplo destacado es el de Crepes & Waffles, que ha adoptado un modelo de negocio social al emplear a mujeres en situaciones vulnerables, proporcionándoles oportunidades laborales y un ambiente de crecimiento personal. Este caso demuestra cómo el emprendimiento social puede ser rentable y al mismo tiempo beneficiar a las comunidades.
    
    p.mb-4 Un modelo de negocio social efectivo debe incluir una propuesta de valor clara, fuentes de financiamiento diversificadas y un enfoque medible en el impacto social. Herramientas como el Impact Measurement and Management (IMM) te ayudan a evaluar y comunicar los resultados de tus iniciativas sociales, lo que es crucial para atraer inversores y garantizar la sostenibilidad a largo plazo.

    .row.mb-4
      .col-12.col-md-10.col-lg-8.mx-auto(data-aos="fade-up")

        .rounded.shadow.p-3.py-lg-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2
              img(src="@/assets/componentes/link-icon-circle.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Emprendimiento social 
                  p.text-small Para profundizar en el emprendimiento social, se recomienda consultar el siguiente recurso:
                .col-sm-auto
                  a.download-btn.boton.bg-azul-2.text-white(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/232108" target="_blank")
                    span.text-small Ir al sitio
                    i.fas.fa-arrow-right

    #t_3_1.titulo-segundo
      div.d-flex
        span.me-3 3.1  
        h2 Fundamentos del emprendimiento social

    p.mb-4 El emprendimiento social responde de manera innovadora a los complejos problemas sociales y ambientales actuales. Combina herramientas y prácticas empresariales con un propósito transformador, orientándose hacia la creación de impacto social y ambiental mientras asegura ingresos sostenibles. A continuación, se estructuran sus principales fundamentos:

    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Creación de valor social")
            p Su objetivo principal no es el beneficio económico, sino soluciones que atiendan necesidades sociales, como pobreza, educación, salud o medio ambiente, priorizando el bienestar colectivo sin descuidar la viabilidad económica.
          .div(titulo="Innovación social")
            p Desarrolla ideas, productos o modelos disruptivos que enfrentan problemas sociales. Ejemplos como los microcréditos o sistemas de energía solar en comunidades rurales son clave.
          .div(titulo="Autosostenibilidad económica")
            p Genera ingresos propios para financiar sus operaciones, asegurando continuidad, crecimiento y escalabilidad mediante modelos de negocio sólidos alineados con una misión social.
          .div(titulo="Alineación con los ODS")
            p Contribuye a los Objetivos de Desarrollo Sostenible (ODS), como erradicación de pobreza, igualdad de género o acción climática, alineándose con metas globales y redes de apoyo.
    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Participación comunitaria")
            p Colabora con comunidades, escuchando necesidades, diseñando soluciones conjuntas y empoderándolas en la implementación. Este enfoque garantiza soluciones adaptadas a las realidades locales y refuerza la sostenibilidad.
          .div(titulo="Medición del impacto")
            p Evalúa el desempeño mediante indicadores sociales y ambientales, como acceso al agua potable o reducción de emisiones, en lugar de limitarse a métricas económicas. Estas mediciones permiten demostrar valor y mejorar continuamente.
          .div(titulo="Colaboración intersectorial")
            p Promueve alianzas con gobiernos, empresas privadas y ONG para abordar problemas complejos, maximizando recursos, conocimientos y capacidades compartidas.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')


    p.mb-4 A continuación, se presentan otros de los elementos clave para el éxito de proyectos sostenibles y responsables.

    .row.position-relative.mb-4.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-5.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Ética empresarial
              p Opera con integridad, transparencia y responsabilidad, respetando derechos humanos, promoviendo igualdad y minimizando impactos ambientales negativos. Esto fortalece la credibilidad del proyecto e inspira confianza en beneficiarios y socios.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-5.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Escalabilidad y replicabilidad
              p Diseña iniciativas que puedan crecer y replicarse en otros contextos, maximizando el impacto a gran escala. Modelos como el microcrédito son ejemplos de éxito global debido a su adaptabilidad.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-5.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Educación y sensibilización
              p Además de soluciones, fomenta cambios culturales promoviendo prácticas sostenibles y responsables entre comunidades y consumidores, reforzando el impacto a largo plazo.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-5.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Uso de tecnologías emergentes
              p Integra herramientas como inteligencia artificial, análisis de datos y plataformas digitales para desarrollar soluciones eficientes y accesibles, como conectar productores agrícolas con mercados internacionales mediante plataformas en línea.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-5.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Adaptabilidad y resiliencia
              p Actúa en entornos complejos y cambiantes, ajustando estrategias para responder a desafíos y aprovechar oportunidades emergentes.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-5.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Financiamiento de impacto 
              p Accede a inversiones que buscan beneficios sociales y retornos económicos, permitiendo crecer sin comprometer valores ni misión.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-5.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Equidad e inclusión
              p Diseña soluciones que beneficien especialmente a los más vulnerables, asegurando que nadie quede excluido del progreso. Esto refuerza la justicia social y el tejido comunitario.

    p.mb-4 Cada uno de estos fundamentos refleja la esencia del emprendimiento social, combinando la sostenibilidad económica con un impacto significativo en las comunidades y el medio ambiente.
    
    .row.mb-4
      .col-12.col-md-10.col-lg-8.mx-auto(data-aos="fade-up")

        .rounded.shadow.p-3.py-lg-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2
              img(src="@/assets/componentes/video-icon-circle.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Fundamentos del emprendimiento social 
                  p.text-small Para profundizar en los fundamentos del emprendimiento social, se recomienda ver el siguiente video:
                .col-sm-auto
                  a.download-btn.boton.bg-rojo-2.text-white(href="https://www.youtube.com/watch?v=CF1gLAjNfDc" target="_blank")
                    span.text-small Ver video
                    i.fas.fa-arrow-right

    #t_3_2.titulo-segundo
      div.d-flex
        span.me-3 3.2  
        h2 Características del Emprendimiento Social

    p.mb-4 El emprendimiento social se caracteriza por su enfoque en la generación de impacto social y ambiental mientras asegura la sostenibilidad económica. Estas particularidades fortalecen su capacidad para abordar problemáticas complejas de manera integral. A continuación, se presentan las primeras características principales:

    
    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Propósito dual")
            p Combina la generación de ingresos con metas sociales o ambientales, priorizando la resolución de necesidades específicas sobre el interés económico.
          .div(titulo="Orientación a la solución")
            p Se centra en entender las causas profundas de los problemas sociales y ambientales, diseñando soluciones sostenibles y efectivas en conexión directa con las comunidades afectadas.
          .div(titulo="Capacidad de adaptación")
            p Responde de manera flexible y rápida a los cambios en el entorno y a los desafíos emergentes, ajustando estrategias según sea necesario.
          .div(titulo="Compromiso con las comunidades")
            p Promueve la participación activa de las comunidades en el diseño e implementación de soluciones, fomentando la sostenibilidad y relevancia a largo plazo.
    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Inclusión de perspectivas diversas")
            p Valora la colaboración entre personas con diferentes orígenes y habilidades para enriquecer las soluciones y abordar necesidades desde múltiples ángulos.
          .div(titulo="Compromiso ético")
            p Se rige por principios de transparencia, integridad y respeto a los derechos humanos, fortaleciendo la confianza de clientes, socios y beneficiarios.
          .div(titulo="Redes globales")
            p Permite colaborar con actores internacionales en problemáticas globales, como cambio climático o igualdad de género, ampliando el alcance y fortaleciendo la iniciativa.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')

    p.mb-4 Además de las características iniciales, el emprendimiento social cuenta con otros aspectos que fortalecen su capacidad transformadora. Estas cualidades adicionales permiten diseñar proyectos que trascienden las problemáticas inmediatas y generan un impacto sostenible y escalable:


    .row.position-relative.mb-4.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-5.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Uso de tecnología 
              p Integra herramientas digitales, aplicaciones y plataformas en línea para optimizar procesos, medir resultados y ampliar el impacto. Ejemplo: plataformas de crowdfunding para financiar proyectos.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-5.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Medición del impacto social
              p Evalúa tanto los ingresos como los cambios positivos en la sociedad y el medio ambiente, identificando áreas de mejora y demostrando el valor de la iniciativa.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-5.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Enfoque en sostenibilidad 
              p Diseña soluciones sostenibles y escalables que transformen las estructuras sociales a largo plazo, asegurando beneficios perpetuos.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-5.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Trabajo en red
              p Colabora con gobiernos, ONG y empresas privadas para combinar recursos y conocimientos, multiplicando el impacto y aumentando la sostenibilidad del proyecto.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-5.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Innovación constante
              p Aplica enfoques disruptivos para resolver problemas sociales, posicionando la iniciativa como un referente en el mercado.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-5.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Principio de equidad
              p Busca reducir desigualdades y garantizar que los beneficios lleguen a quienes más los necesitan, generando un impacto inclusivo y transformador.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-54.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-5.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Rentabilidad consciente
              p Reinvierte los ingresos en la misión social o ambiental, creando un ciclo virtuoso que refuerza el propósito del proyecto.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-55.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-5.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Liderazgo inspirador
              p Motiva al equipo y a otros actores a sumarse a la causa, fomentando una cultura de compromiso y creatividad que impulsa el éxito del proyecto.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-56.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-5.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Enfoque a largo plazo
              p Diseña soluciones que trasciendan problemas inmediatos, transformando las estructuras subyacentes y generando un cambio duradero.

    p.mb-4 Estas características complementarias subrayan el potencial del emprendimiento social para generar cambios estructurales en la sociedad mediante proyectos que integran innovación, sostenibilidad y equidad.

    .row.mb-4
      .col-12.col-md-10.col-lg-8.mx-auto(data-aos="fade-up")

        .rounded.shadow.p-3.py-lg-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2
              img(src="@/assets/componentes/video-icon-circle.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Características del emprendimiento social 
                  p.text-small Para profundizar en las características del emprendimiento social, se recomienda ver el siguiente video:
                .col-sm-auto
                  a.download-btn.boton.bg-rojo-2.text-white(href="https://www.youtube.com/watch?v=E0KmB9izQ1s" target="_blank")
                    span.text-small Ver video
                    i.fas.fa-arrow-right

    .row.bg-azul.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Rentabilidad del emprendimiento social
          p.mb-5 Lo invitamos a leer el documento titulado Rentabilidad del emprendimiento social, donde se exploran estrategias clave para equilibrar el propósito social y la sostenibilidad económica. Este documento analiza factores como diversificación de ingresos, eficiencia operativa y financiamiento de impacto, ofreciendo herramientas prácticas para maximizar el alcance y el impacto positivo de las iniciativas sociales.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Rentabilidad del emprendimiento social
             
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-57.png', alt='Texto que describa la imagen')



    .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Análisis de Mercado y Estrategia Empresarial',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué objetivo tiene el análisis competitivo en un plan de negocio?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar oportunidades y amenazas en el mercado',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Garantizar la exclusión de competidores del sector',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir la necesidad de un plan financiero',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la inversión en marketing',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de innovación mejora la entrega de la propuesta de valor a los clientes?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Innovación de procesos', esCorrecta: true },
            { id: 'b', texto: 'Innovación disruptiva', esCorrecta: false },
            { id: 'c', texto: 'Innovación de producto', esCorrecta: false },
            { id: 'd', texto: 'Innovación financiera', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cómo se clasifican los clientes en función de su relación con la empresa?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Activos, potenciales y pasivos',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Recurrentes, ocasionales y estratégicos',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Primarios, secundarios y terciarios',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivos, potenciales y ocasionales',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué asegura la implementación de indicadores clave de desempeño (KPI) en un negocio?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La automatización de procesos operativos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La medición del progreso hacia los objetivos estratégicos',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La eliminación de riesgos externos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La reducción de costos fijos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué diferencia a un mercado objetivo de un mercado general?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Su segmentación en función de características específicas',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Su exclusividad para productos premium',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Su relación directa con los canales de distribución',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Su enfoque únicamente en clientes de altos ingresos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
