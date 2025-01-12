<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-1.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 El emprendimiento representa una fuerza transformadora en el ámbito económico y social, ya que permite a individuos y organizaciones materializar ideas innovadoras y generar impacto en diversas áreas. En este contexto, el modelo y plan de negocio se destacan como herramientas fundamentales para estructurar y guiar los proyectos empresariales, proporcionando claridad sobre cómo operar, generar ingresos y entregar valor a los clientes. Estas herramientas son esenciales para convertir ideas en empresas sostenibles y competitivas en un mercado dinámico.

    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8(data-aos="fade-left")
        .bg-azul.p-4.mb-4
          span Por otro lado, las nuevas tendencias, como el emprendimiento sostenible y la economía colaborativa, están redefiniendo las reglas del juego empresarial. Estos enfoques integran prácticas responsables y modelos basados en la compartición de recursos, respondiendo a los retos globales actuales, como la sostenibilidad ambiental y la inclusión social. Este tipo de emprendimientos no solo buscan generar valor económico, sino también contribuir de manera significativa al bienestar de las comunidades y la protección del medio ambiente.
        span El emprendimiento social, como un modelo innovador, se centra en resolver problemas sociales y ambientales a través de iniciativas que combinan propósito y rentabilidad. Este enfoque promueve la creación de valor compartido, involucrando a comunidades, promoviendo la equidad y asegurando la sostenibilidad económica a largo plazo. Juntos, estos conceptos reflejan la evolución del emprendimiento hacia un enfoque más consciente y alineado con las necesidades del mundo actual.


</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
