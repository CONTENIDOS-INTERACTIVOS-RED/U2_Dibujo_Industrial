<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'UNIDAD 1. FUNDAMENTOS DEL DIBUJO TÉCNICO'" :subTitulo="'1. Fundamentos de Dibujo Técnico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.justify-content-center.align-items-center.mb-5
      .col-lg
        p.mb-4(data-aos="fade-up") El dibujo técnico, como lenguaje universal de las disciplinas técnicas, es la forma gráfica de plasmar objetos, productos, sistemas y estructuras. Se basa en técnicas y convenciones estandarizadas que permiten transmitir información detallada y precisa sobre su diseño, construcción o funcionamiento. Esta forma de comunicación visual ha sido fundamental en la ingeniería y otras disciplinas técnicas desde tiempos remotos.
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema1/1.svg', alt='', style="width: 80px;")

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            LineaTiempoE.color-primario
              .row(titulo="Prehistoria y Antigüedad" subtitulo="")
                .col-lg-6.mb-4.mb-lg-0
                  p La historia del dibujo técnico comienza con los primeros seres humanos que usaron el dibujo como una forma de expresión y comunicación. Los trazos en las paredes de las cuevas representaban escenas de caza y la realidad de forma rudimentaria. Con las civilizaciones de Egipto y Mesopotamia, el dibujo evolucionó a registros en papiros y tablillas de arcilla, esenciales para la planificación de construcciones monumentales como pirámides y templos, marcando un avance hacia técnicas más precisas.
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema1/2.png', alt='')

              .row(titulo="Edad media" subtitulo="")
                .col-lg-6.mb-4.mb-lg-0
                  p Durante esta época, el dibujo técnico fue desarrollado por una élite selecta. Monjes creaban manuscritos ilustrados que combinaban arte y técnica, detallando principios arquitectónicos y cálculos astronómicos. Ingenieros y artistas plasmaron conocimientos en códices con diseños de máquinas y planificación estructural. Un ejemplo notable es Leonardo da Vinci, cuyas obras anticiparon inventos revolucionarios.
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema1/3.png', alt='')

              .row(titulo="Renacimiento" subtitulo="")
                .col-lg-6.mb-4.mb-lg-0
                  p Este período transformó la representación del mundo tridimensional con la introducción de la perspectiva. Artistas e ingenieros como Brunelleschi y Leonardo da Vinci perfeccionaron las técnicas de proyección, lo cual permitió que los dibujos técnicos fueran más realistas y precisos, representando fielmente las estructuras y el espacio.
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema1/4.png', alt='')

              .row(titulo="Revolución Industrial" subtitulo="")
                .col-lg-6.mb-4.mb-lg-0
                  p El dibujo técnico se volvió indispensable con la industrialización. La producción en masa demandaba estándares rigurosos, surgiendo las primeras normas para facilitar la comunicación entre ingenieros y fabricantes. Además, herramientas como el compás y la escuadra mejoraron la precisión de los dibujos, convirtiendo al dibujo técnico en un pilar de la industria.
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema1/5.png', alt='')

              .row(titulo="Siglo XX" subtitulo="")
                .col-lg-6.mb-4.mb-lg-0
                  p La llegada de la tecnología cambió profundamente el dibujo técnico. La invención de la computadora trajo el diseño asistido por computadora (CAD), sustituyendo el dibujo manual y permitiendo niveles de precisión y complejidad antes impensables. Normas globales de la ISO aseguraron la consistencia en la representación gráfica, favoreciendo la colaboración internacional.
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema1/6.png', alt='')

              .row(titulo="Actualidad" subtitulo="")
                .col-lg-6.mb-4.mb-lg-0
                  p Hoy, el dibujo técnico es digital. Software avanzado permite crear dibujos detallados, modelar en 3D, simular y analizar la viabilidad estructural de proyectos. Además, se integra con tecnologías emergentes como la realidad aumentada, la impresión 3D y la ingeniería asistida por computadora, expandiendo su influencia a muchas disciplinas.
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema1/7.png', alt='')
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

<style lang="sass"></style>
