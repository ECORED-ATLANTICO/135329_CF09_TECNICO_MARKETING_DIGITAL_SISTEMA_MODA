<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/intro/img01.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 Las marcas de moda comunican mediante imágenes, textos, colores y contenidos audiovisuales. Estos recursos permiten presentar productos, expresar una identidad y ofrecer información que facilite su reconocimiento y elección.

        .container
          .row.align-items-center.bg-color-09.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 La construcción de un mensaje requiere comprender a quién se dirige, qué se desea comunicar y dónde se publicará. El diseño, la fotografía y la producción audiovisual aportan herramientas para organizar esa información de manera clara y coherente.
          
        p.mb-0(data-aos="fade-right") Este componente desarrolla los fundamentos para elaborar y adaptar piezas comunicacionales digitales. Su aplicación integra criterios de composición, accesibilidad e identidad de marca en situaciones propias del Sistema Moda.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
