<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-3 El componente formativo Comunicación gráfica integra los fundamentos para construir mensajes visuales y comerciales en el sistema moda. La composición, la percepción, el color y la tipografía permiten organizar información y facilitar su lectura.
    p.mb-3 Sobre esta base, la fotografía y la producción audiovisual aportan recursos para presentar productos, explicar características y desarrollar relatos. Su elaboración articula planeación, captura, edición y revisión, considerando la fidelidad de la información y la accesibilidad.
    p.mb-5 Las herramientas digitales permiten adaptar y preparar estas piezas para distintos medios. Su aplicación, orientada por la identidad de marca, contribuye a mantener una comunicación coherente con la oferta y las necesidades del público.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="El componente formativo Comunicación gráfica integra diseño, fotografía, producción audiovisual y edición digital para crear mensajes accesibles y coherentes con la identidad de marca y las necesidades del público en el Sistema Moda.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
