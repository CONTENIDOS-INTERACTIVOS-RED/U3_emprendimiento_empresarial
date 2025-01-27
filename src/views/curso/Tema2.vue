<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Emprendimiento, motivación y liderazgo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4
      .col-8.col-md-6.col-lg-4.mx-auto(data-aos="fade-right")
        .bg-rojo-claro.p-4.h-100
          span El emprendimiento sostenible y la economía colaborativa son conceptos que están redefiniendo la forma en que se crean y gestionan los negocios en un contexto global que exige mayor responsabilidad social, ambiental y económica.
      .col-3.d-none.d-lg-block(data-aos="fade-up")
        img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')

      .col-8.col-md-6.col-lg-4.mx-auto(data-aos="fade-left")
        .bg-azul.p-4.h-100
          span Ambos enfoques se complementan y ofrecen un marco para desarrollar modelos de negocio que no solo generen valor económico, sino que también contribuyan al bienestar de la sociedad y al cuidado del medio ambiente. Entender y aplicar estos conceptos te permite adaptarte a las tendencias del mercado actual, al mismo tiempo que te posiciona como un agente de cambio en tu sector.


    .row.mb-4
      .col-12.col-md-10.col-lg-8.mx-auto(data-aos="fade-up")

        .rounded.shadow.p-3.py-lg-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2
              img(src="@/assets/componentes/link-icon-circle.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Emprendimiento sostenible y economía colaborativa 
                  p.text-small Para profundizar en el emprendimiento sostenible y la economía colaborativa, se recomienda consultar el siguiente recurso:
                .col-sm-auto
                  a.download-btn.boton.bg-azul-2.text-white(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/69103" target="_blank")
                    span.text-small Ir al sitio
                    i.fas.fa-arrow-right


    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Emprendimiento sostenible

    p.mb-4 El emprendimiento sostenible se posiciona como una transformación empresarial esencial en el siglo XXI, respondiendo a retos globales como el cambio climático, la pérdida de biodiversidad, la desigualdad social y la escasez de recursos. Este modelo se enfoca en crear negocios que generen valor económico sin comprometer la estabilidad social y ambiental, redefiniendo el éxito empresarial hacia un bienestar integral y prosperidad a largo plazo.

    .row.mb-5
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.d-flex.flex-column
        p.mb-4 Triple línea base  
        .d-flex.align-items-start.bg-azul.p-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-26.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up")  Evalúa el desempeño en tres áreas clave: económica, social y ambiental. Este enfoque garantiza que las decisiones empresariales sean éticas y estratégicas, creando resiliencia y adaptabilidad frente a las exigencias del mercado y reguladores.    

    .bg-fondo-3.bg-full-width
      .px-5.pb-md-3.py-4

        p.mb-4 Las dimensiones del emprendimiento sostenible son:
        .row.mb-4
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Económica
                p.text-small.px-4.text-center.pb-2 Creación de valor a largo plazo mediante modelos financieramente viables que integren prácticas responsables, como tecnologías limpias o materiales ecológicos.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Ambiental
                p.text-small.px-4.text-center.pb-2 Minimización de impactos negativos mediante reducción de emisiones, uso eficiente de recursos y regeneración del ecosistema (e.g., técnicas de agroforestería).
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Social
                p.text-small.px-4.text-center.pb-2 Promoción de igualdad, inclusión y justicia social, con iniciativas que mejoren la calidad de vida de comunidades vulnerables (e.g., empresas textiles que colaboran con artesanos locales).

    p.mb-4 La innovación es un motor clave en el emprendimiento sostenible, con enfoques como:

    .row.mb-4
      .col-10.mx-auto
        .row
          .col-12.col-md-6.mx-auto.d-flex.flex-column(data-aos="fade-right")
            .bg-rojo.px-4.py-3.px-xl-5.mb-0(style="border-radius: 16px 16px 0px 0px")
              p.text-bold.mb-0.text-center Economía circular
            .bg-rojo-claro.p-4.px-xl-5.h-100.text-center(style="border-radius: 0px 0px 16px 16px")
              span Prolongación del ciclo de vida de productos mediante reutilización y reciclaje (Patagonia y su servicio de reparación de ropa).
          .col-12.col-md-6.mx-auto.d-flex.flex-column(data-aos="fade-right")
            .bg-azul.px-4.py-3.px-xl-5.mb-0(style="border-radius: 16px 16px 0px 0px")
              p.text-bold.mb-0.text-center Consumo responsable
            .bg-azul-claro.p-4.px-xl-5.h-100.text-center(style="border-radius: 0px 0px 16px 16px")
              span Crecimiento en la demanda de productos que reflejen principios éticos y ambientales, como alimentos orgánicos y de comercio justo.

    p.text-bold.mb-4 Relación con los Objetivos de Desarrollo Sostenible (ODS)
    p.mb-4 El emprendimiento sostenible se alinea con los ODS de la ONU, proporcionando un marco para abordar problemas globales como la pobreza y el cambio climático. Esto no solo mejora la reputación de las empresas, sino que también atrae inversores interesados en generar impacto positivo.
    p.mb-4 La colaboración intersectorial y una regulación adecuada son pilares fundamentales para abordar desafíos complejos en el ámbito empresarial y social. 

    .row.mb-2
      .col-12.col-md-4.col-lg-3(data-aos="fade-right")
        .bg-amarillo-3.p-4.mb-0.text-center.h-100
          p.mb-0.text-bold Colaboración intersectorial
      .col-12.col-md-8.col-lg-9(data-aos="fade-left")
        .bg-amarillo-3-claro.p-4.text-center.h-100
          span Alianzas estratégicas entre empresas, gobiernos y ONG  para abordar problemas complejos, compartiendo recursos y conocimientos.

    .row.mb-4
      .col-12.col-md-4.col-lg-3(data-aos="fade-right")
        .bg-amarillo-2.p-4.mb-0.text-center.h-100.d-flex.justify-content-center.align-items-center
          p.mb-0.text-bold Marco normativo
      .col-12.col-md-8.col-lg-9(data-aos="fade-left")
        .bg-amarillo.p-4.text-center.h-100
          span Políticas públicas que incentivan prácticas responsables, como subsidios para energías renovables y sanciones para empresas contaminantes. Cumplir con estas normativas no solo evita sanciones, sino que también fortalece la competitividad empresarial.

    h2 Herramientas y oportunidades financieras
    p.mb-4 El emprendimiento sostenible está atrayendo la atención de inversores y programas gubernamentales que ofrecen:
    
    .row.mb-4
      .col-4.d-none.d-lg-block.ms-lg-auto.me-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
      .col-10.col-lg-6.mx-auto(data-aos="fade-left")
        .bg-gris.p-4.h-100
          div.d-flex.mb-4
            p.me-3.mb-0 •
            p.mb-0 Fondos especializados en proyectos sostenibles.
          div.d-flex.mb-4
            p.me-3.mb-0 •
            p.mb-0 Financiamiento y capacitación para emprendedores que adopten prácticas responsables.
          
    h2 Desafíos y tecnologías emergentes
    p.mb-4 El emprendimiento sostenible enfrenta retos como las inversiones iniciales y la comunicación del valor de la sostenibilidad en mercados sensibles al precio. Sin embargo, herramientas como el big data, la inteligencia artificial y el IoT están optimizando procesos y mejorando la sostenibilidad (e.g., monitoreo energético en tiempo real).
    
    .row.mb-4
      .col-10.col-lg-7.mx-auto.ms-lg-auto.me-lg-0(data-aos="fade-right")
        .bg-gris.p-4.h-100
          span El emprendimiento sostenible no es solo una tendencia, sino un modelo empresarial que equilibra crecimiento económico con responsabilidad social y ambiental. Adoptarlo no solo asegura relevancia en el mercado, sino que también contribuye al bienestar colectivo y posiciona a las empresas como líderes y agentes de cambio.
      .col-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

    .row.mb-5
      .col-12.col-md-10.col-lg-8.mx-auto(data-aos="fade-up")

        .rounded.shadow.p-3.py-lg-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2
              img(src="@/assets/componentes/link-icon-circle.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Sostenibilidad para el emprendimiento
                  p.text-small Para profundizar en la sostenibilidad para el emprendimiento, se recomienda consultar el siguiente recurso:
                .col-sm-auto
                  a.download-btn.boton.bg-azul-2.text-white(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274734" target="_blank")
                    span.text-small Ir al sitio
                    i.fas.fa-arrow-right

    #t_2_2.titulo-segundo
      div.d-flex
        span.me-3 2.2  
        h2 Economía colaborativa

    p.mb-4 La economía colaborativa representa un cambio profundo en cómo las personas y empresas interactúan con bienes, servicios y recursos. Este modelo, centrado en el intercambio y uso conjunto de recursos mediante plataformas tecnológicas, optimiza el acceso a bienes y promueve la sostenibilidad. Más que una alternativa al consumo tradicional, aborda problemas como el acceso desigual a bienes, el desperdicio y la sobreexplotación de recursos naturales. Por ejemplo, plataformas como BlaBlaCar y Uber reducen costos individuales y emisiones de carbono al compartir vehículos, maximizando el uso de recursos infrautilizados.
    h2 Beneficios de la economía colaborativa
    p.mb-4 La economía colaborativa se ha consolidado como un modelo que transforma la manera de acceder y utilizar bienes y servicios, generando beneficios significativos tanto para las personas como para el entorno.

    ImagenInfografica.color-secundario.mb-4
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="9.3%" y="26%" numero="+")
        .h5.mb-2 Optimización de recursos
        p El acceso reemplaza la propiedad, promoviendo el alquiler y la compartición. Por ejemplo, un automóvil compartido tiene un uso más eficiente.
      .tarjeta.bg-white.p-4(x="29.6%" y="13.8%" numero="+")
        .h5.mb-2 Democratización del acceso
        p Permite disfrutar de bienes y servicios a costos reducidos, sin necesidad de poseerlos.
      .tarjeta.bg-white.p-4(x="50%" y="0%" numero="+")
        .h5.mb-2 Sostenibilidad
        p Al reducir la producción y prolongar el uso de bienes, se genera un impacto positivo en el medio ambiente.
      .tarjeta.bg-white.p-4(x="70.3%" y="13.8%" numero="+")
        .h5.mb-2 Impacto social
        p Fomenta comunidades colaborativas basadas en confianza, solidaridad y cooperación.
      .tarjeta.bg-white.p-4(x="90.6%" y="26%" numero="+")
        .h5.mb-2 Oportunidades empresariales
        p Estimula emprendimientos sostenibles, como plataformas para vender o intercambiar bienes usados.

    p.mb-4 La siguiente tabla presenta una visión general de los beneficios y retos de la economía colaborativa.
    p.mb-4 <b>Tabla 1.</b> Beneficios y retos de la economía colaborativa

    .row.mb-4
      .col-12.col-md-10.mx-auto

        .tabla-a.mb-5
          table
            thead
              tr
                th.bg-verde-oscuro.text-white.text-center Beneficios
                th.bg-verde-oscuro.text-white.text-center Retos
            tbody
              tr
                td.bg-verde-claro.text-center.border-bottom Democratización del acceso a bienes y servicios 
                td.bg-verde-claro.text-center.border-bottom Regulaciones insuficientes en varios países
              tr
                td.bg-verde-claro.text-center.border-bottom Reducción de desperdicio y sobreproducción
                td.bg-verde-claro.text-center.border-bottom Sostenibilidad económica de las plataformas
              tr
                td.bg-verde-claro.text-center.border-bottom Promoción de la sostenibilidad ambiental
                td.bg-verde-claro.text-center.border-bottom Competencia desleal con modelos tradicionales
              tr
                td.bg-verde-claro.text-center.border-bottom Creación de comunidades colaborativas
                td.bg-verde-claro.text-center.border-bottom Seguridad y confianza entre usuarios
              tr
                td.bg-verde-claro.text-center.border-bottom Fomento del emprendimiento sostenible
                td.bg-verde-claro.text-center.border-bottom Dudas sobre derechos laborales y protección

    .bg-fondo-3.bg-full-width
      .px-5.pb-md-3.py-4
        
        h2 Elementos clave y desafíos
        p.mb-4 La economía colaborativa se sustenta en elementos clave que facilitan su funcionamiento y relevancia en la sociedad actual.
        .row.mb-4.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-33.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Tecnología
              p.px-1.text-small.mb-0.d-flex.text-center Las plataformas digitales permiten conexiones eficientes y transparentes entre usuarios y proveedores. Herramientas como la inteligencia artificial y el blockchain mejoran la seguridad y eficiencia de las transacciones. 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-34.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Confianza
              p.px-1.text-small.mb-0.d-flex.text-center Elemento fundamental para las transacciones entre individuos, fomentado por sistemas de calificaciones, reseñas y perfiles verificables. 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-left")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-35.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Impacto cultural
              p.px-1.text-small.mb-0.d-flex.text-center Redefine las nociones tradicionales de éxito y propiedad, priorizando experiencias sobre posesiones materiales.
          
    h2 Retos principales
    p.mb-4 La economía colaborativa enfrenta retos significativos que deben ser abordados para garantizar su sostenibilidad y equidad.
    .row.mb-4
      .col-6.col-md-5.col-xl-4.mx-auto.d-flex.flex-column(data-aos="fade-up")
        .bg-azul.p-4.mb-0.text-center
          p.text-bold.mb-0 Regulación
        .bg-azul-claro.p-4.text-center.h-100
          span.text-center Ajustar las leyes a las particularidades de este modelo.
      .col-6.col-md-5.col-xl-4.mx-auto.d-flex.flex-column(data-aos="fade-up")
        .bg-rojo.p-4.mb-0.text-center
          p.text-bold.mb-0 Sostenibilidad económica
        .bg-rojo-claro.p-4.text-center.h-100
          span.text-center Lograr equilibrio entre atraer usuarios y monetizar servicios.
      .col-6.col-md-5.col-xl-4.mx-auto.d-flex.flex-column(data-aos="fade-up")
        .bg-amarillo.p-4.mb-0.text-center
          p.text-bold.mb-0 Transformación del mercado laboral
        .bg-amarillo-claro.p-4.text-center.h-100
          span.text-center Asegurar seguridad y derechos para trabajadores en economías colaborativas.

    p.mb-4 La economía colaborativa redefine cómo interactuamos con los recursos y entre nosotros, ofreciendo un camino hacia un futuro más equitativo y sostenible. Impulsada por la tecnología y valores de cooperación, este modelo no solo responde a necesidades actuales, sino que también transforma las dinámicas culturales y económicas.
    
    .row.mb-5
      .col-12.col-md-10.col-lg-8.mx-auto(data-aos="fade-up")

        .rounded.shadow.p-3.py-lg-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2
              img(src="@/assets/componentes/link-icon-circle.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Economía colaborativa
                  p.text-small Para profundizar en la economía colaborativa, se recomienda consultar el siguiente recurso:
                .col-sm-auto
                  a.download-btn.boton.bg-azul-2.text-white(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/269989" target="_blank")
                    span.text-small Ir al sitio
                    i.fas.fa-arrow-right


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
