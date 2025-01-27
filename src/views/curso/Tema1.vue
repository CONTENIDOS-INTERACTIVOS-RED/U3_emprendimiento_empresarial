<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Modelo y plan de negocio'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8(data-aos="fade-left")
        .bg-rojo-claro.p-4.h-100
          span El modelo y plan de negocio son herramientas fundamentales en el mundo del emprendimiento, ya que te proporcionan una guía estructurada para transformar una idea en una empresa viable, rentable y sostenible. Aunque están estrechamente relacionados, es importante entender sus diferencias y cómo cada uno aporta valor al desarrollo de proyectos emprendedores.

    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Modelo de negocio

    p.mb-4 El modelo de negocio es un marco conceptual que define cómo una organización opera, genera ingresos y entrega valor a sus clientes. Este esquema permite estructurar ideas, identificar recursos y entender dinámicas esenciales para la sostenibilidad y rentabilidad de un negocio. Su flexibilidad y adaptabilidad son clave para enfrentar cambios en el entorno y aprovechar oportunidades emergentes.
    h2 Principales componentes del modelo de negocio
    p.mb-4 A continuación, se detallan los componentes fundamentales de un modelo de negocio, organizados para facilitar su comprensión:

    .row.position-relative.mb-4.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5.ms-auto(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Propuesta de valor
              p Responde al "por qué" de la preferencia del cliente, resolviendo problemas o satisfaciendo necesidades. Ejemplo: Innovación tecnológica o calidad natural, como en productos orgánicos sostenibles.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5.ms-auto(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Segmentos de clientes
              p Identifica al público objetivo segmentado por demografía o intereses. Ejemplo: Usuarios interesados en innovación tecnológica o productos ecoamigables.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5.ms-auto(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Relación con clientes
              p Estrategias para fidelizar al cliente. Ejemplo: Programas de fidelización o soporte técnico personalizado.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5.ms-auto(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Canales de distribución
              p Formas de entregar la propuesta de valor (físicos o digitales). Ejemplo: Tiendas físicas combinadas con plataformas de comercio electrónico.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5.ms-auto(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Fuentes de ingresos
              p Métodos para generar ingresos. Ejemplo: Suscripciones, ventas directas o modelos freemium.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5.ms-auto(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Recursos clave
              p Activos esenciales como infraestructura, personal o propiedad intelectual. Ejemplo: Talento especializado o patentes tecnológicas.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5.ms-auto(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Actividades clave
              p Acciones para entregar valor. Ejemplo: Producción en manufactura o atención al cliente en servicios.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5.ms-auto(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Socios estratégicos
              p Alianzas que maximizan la  eficiencia. Ejemplo: Proveedores confiables o colaboraciones con otras empresas.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5.ms-auto(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Estructura de costos
              p Gestión de costos fijos y variables. Ejemplo: Alquileres, salarios, materias primas y transporte.
              

    h2 Innovación y flexibilidad en el modelo de negocio
    p.mb-4 Un modelo de negocio no es estático; su capacidad para evolucionar frente a las condiciones cambiantes del mercado, las preferencias del consumidor y los avances tecnológicos es crucial. Por ejemplo: 
    .row.mb-4
      .col-8.col-md-6.col-lg-3.col-xl-2.mx-auto(data-aos="zoom-in")
        img.h-100(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
      .col-12.col-md-6.col-lg-5.col-xl-4
        .mx-auto.d-flex.flex-column.h-100(data-aos="fade-up")
          .bg-amarillo-oscuro.p-4.mb-0.text-center
            p.text-bold.mb-0 Adaptaciones exitosas
          .bg-amarillo.p-4.text-center.h-100
            span.text-center.text-small Amazon amplió su modelo de negocio desde la ventana de libros en línea hasta abarcar comercio electrónico global y servicios de nube (AWS).
      .col-8.col-md-6.col-lg-3.col-xl-2.mx-auto(data-aos="zoom-in")
        img.h-100(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
      .col-12.col-md-6.col-lg-5.col-xl-4
        .mx-auto.d-flex.flex-column.h-100(data-aos="fade-up")
          .bg-amarillo-3.p-4.mb-0.text-center
            p.text-bold.mb-0 Modelos disruptivos
          .bg-amarillo-3-claro.p-4.text-center.h-100
            span.text-center.text-small Airbnb y Uber revolucionaron sus sectores mediante la economía colaborativa, conectando usuarios y proveedores sin poseer los activos tradicionales.

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 Un modelo de negocio bien diseñado:
        .bg-rojo-claro.p-4.mb-4
          div.d-flex.mb-4
            p.me-3.mb-0 •
            p.mb-0 Estructura ideas y optimiza recursos.
          div.d-flex.mb-4
            p.me-3.mb-0 •
            p.mb-0 Facilita la construcción de relaciones sólidas con clientes.
          div.d-flex.mb-4
            p.me-3.mb-0 •
            p.mb-0 Garantiza sostenibilidad y resiliencia frente a cambios en el mercado.
          div.d-flex.mb-4
            p.me-3.mb-0 •
            p.mb-0 Fomenta la innovación y el liderazgo en un entorno dinámico.
        span Este marco no solo ayuda a las empresas a mantenerse competitivas, sino también a maximizar su impacto en el mercado, demostrando que la estrategia y la ejecución son igualmente importantes para el éxito organizacional.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-md-10.col-lg-8.mx-auto(data-aos="fade-up")

        .rounded.shadow.p-3.py-lg-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2
              img(src="@/assets/componentes/link-icon-circle.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Modelo de negocio
                  p.text-small Para profundizar en el modelo de negocio, se recomienda consultar el siguiente recurso:
                .col-sm-auto
                  a.download-btn.boton.bg-azul-2.text-white(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/277315" target="_blank")
                    span.text-small Ir al sitio
                    i.fas.fa-arrow-right

    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2  
        h2 Plan de negocio


    p.mb-4 El plan de negocio es una herramienta estratégica imprescindible para convertir una idea empresarial en una realidad sostenible.
    .row.mb-4
      .col-10.col-md-8.col-lg-6.mx-auto(data-aos="fade-up")
        TarjetaAudio.color-primario.bg-white.mb-3(
              texto="Proceso de descarga de Estructura estratégica del plan de negocio"
              tiempo
              :audio="require('../../assets/componentes/audios/Podcast_contenido_unidad_III_Emprendimiento empresarial.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )

    .bg-fondo-2.bg-full-width
      .px-5.pb-md-3.py-4

        p.mb-4 Los elementos adicionales del plan de negocio son:

        .row.mb-4.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-16.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Resumen ejecutivo
              p.px-1.text-small.mb-0.d-flex.text-center Se elabora al final del proceso y condensa la misión, visión, propuesta de valor y objetivos estratégicos de manera clara y persuasiva. Captura la atención de inversores y aliados.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-17.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Descripción del negocio
              p.px-1.text-small.mb-0.d-flex.text-center Detalla el propósito del proyecto, el sector en el que opera, la estructura organizativa y los fundamentos de la empresa, como la misión y visión. Define el enfoque estratégico.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-18.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Análisis de mercado
              p.px-1.text-small.mb-0.d-flex.text-center Identifica características del público objetivo, tendencias del mercado y analiza la competencia. Proporciona información clave para posicionar el producto o servicio.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos="fade-left")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-19.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Plan de marketing
              p.px-1.text-small.mb-0.d-flex.text-center Define estrategias para atraer y fidelizar clientes, incluyendo fijación de precios, promociones y selección de canales de distribución adecuados.
        
        
    h2 Ejemplo práctico
    p.mb-4 En un negocio enfocado en tecnologías sostenibles, un plan de negocio incluiría:
    
    .row.mb-4.justify-content-center 
      .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos="fade-right")
        .bg-amarillo.custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-20.svg', style="width: 60px")
          p.text-bold.mb-4.text-center Plan de marketing
          p.px-1.text-small.mb-0.d-flex.text-center Estrategias digitales para atraer clientes interesados en sostenibilidad.
      .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos="fade-up")
        .bg-rojo-claro.custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-21.svg', style="width: 60px")
          p.text-bold.mb-4.text-center Plan financiero
          p.px-1.text-small.mb-0.d-flex.text-center Proyecciones de inversión en energías renovables.
      .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos="fade-left")
        .bg-azul.custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-22.svg', style="width: 60px")
          p.text-bold.mb-4.text-center Impacto ambiental
          p.px-1.text-small.mb-0.d-flex.text-center Implementación de políticas de reciclaje y reducción de carbono.


    p.mb-4 Un plan de negocio efectivo no es estático; debe actualizarse para reflejar cambios en el mercado y tendencias. Este documento es una inversión estratégica que prepara al emprendedor para enfrentar desafíos, aprovechar oportunidades y liderar con confianza en un entorno competitivo.
    .row.mb-4
      .col-12.col-md-10.col-lg-8.mx-auto(data-aos="fade-up")

        .rounded.shadow.p-3.py-lg-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2
              img(src="@/assets/componentes/video-icon-circle.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Plan de negocio 
                  p.text-small Para conocer sobre el plan de negocio, se recomienda revisar el siguiente video:
                .col-sm-auto
                  a.download-btn.boton.bg-rojo-2.text-white(href="https://www.youtube.com/watch?v=ZzhAPRTIR_8" target="_blank")
                    span.text-small Ver video
                    i.fas.fa-arrow-right

    .row.bg-azul.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Relación entre modelo y plan de negocio en el emprendimiento
          p.mb-5 Lo invitamos a explorar el documento titulado Relación entre modelo y plan de negocio en el emprendimiento , donde se analiza cómo estas herramientas trabajan de forma complementaria para transformar ideas en proyectos viables y escalables. Este documento destaca la importancia de estructurar una propuesta de valor clara, detallar estrategias prácticas y adaptarse a los cambios del mercado, fortaleciendo la credibilidad y el éxito del emprendimiento.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Relación entre modelo y plan de negocio en el emprendimiento.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Relación entre modelo y plan de negocio en el emprendimiento.
             
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
