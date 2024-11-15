<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'UNIDAD 1. FUNDAMENTOS DEL DIBUJO TÉCNICO'" :subTitulo="'SINTESIS'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
      p(data-aos="fade-up").mb-5 Esta unidad presenta los conceptos básicos del dibujo técnico, una herramienta fundamental para comunicar y documentar proyectos en ingeniería y diseño. Se exploran elementos esenciales como tipos de líneas, proyecciones, escalas y normas internacionales (ISO, ANSI, DIN) que garantizan precisión y coherencia en la representación gráfica de objetos y sistemas.

      .row.justify-content-center
        .col-lg-12.mb-5
          figure.bg-color-sintesis.p-5.brounded
            img(src='@/assets/curso/sintesis/sintesis.svg', alt='')
  </template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema4',
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

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
