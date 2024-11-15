<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 2. Dibujo en proyección y representación de vistas'" :subTitulo="'1. Proyecciones ortogonales y representación de vistas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.justify-content-center.mb-5
      .col-lg-7
        p.mb-4(data-aos="fade-up") La proyección ortogonal es un método de dibujo técnico utilizado para representar objetos tridimensionales en un formato bidimensional mediante vistas planas. Consiste en proyectar cada cara del objeto sobre un plano mediante líneas perpendiculares, permitiendo observar y analizar su forma y dimensiones sin efectos de perspectiva.
        p.mb-4(data-aos="fade-up") Las vistas principales en una proyección ortogonal incluyen la frontal, superior y lateral, cada una de las cuales muestra una perspectiva específica del objeto, como si fuera vista directamente desde el frente, arriba o el costado.

        .bg-color-3.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/1.svg', alt='')
            .col-lg
              p.mb-0 Este método es fundamental en ingeniería, arquitectura y diseño industrial, ya que asegura precisión en la representación de proporciones y dimensiones, facilitando la comunicación de detalles técnicos clave.

      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/2.png', alt='')

    #t_1_1.titulo-segundo
      h2 #[span 1.1]  Tipos de Proyección Ortogonal

    p(data-aos="fade-up") En dibujo técnico, se utilizan distintos tipos de proyecciones ortogonales para representar objetos tridimensionales en un formato bidimensional. Los tipos principales son:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.align-items-start
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema1/3.png', alt='')

            .col-md-12.col-lg-7.mb-4.mb-md-0
              .ps-4
                h5 Proyección ortogonal multivista
                p Esta técnica representa el objeto mediante varias vistas independientes y alineadas entre sí, como la vista frontal, lateral y superior. Es muy común en ingeniería y diseño, ya que permite ver cada cara del objeto sin distorsión y con exactitud dimensional.

          .row.p-4.px-md-5.py-lg-5.align-items-center
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema1/4.png', alt='')

            .col-md-12.col-lg-7.mb-4.mb-md-0
              .ps-4
                h5 Proyección isométrica
                p En esta proyección, el objeto se muestra en tres dimensiones, con los ejes separados en ángulos de 120° entre sí y manteniendo la misma escala en los tres ejes. Este tipo es común en diseño industrial y ensamblaje, ya que ofrece una vista del objeto en conjunto sin perspectiva.
                p Similar a la isométrica, esta proyección mantiene la escala en dos de los tres ejes, mientras el tercero se representa en una escala distinta, permitiendo resaltar ciertas dimensiones del objeto.


          .row.p-4.px-md-5.py-lg-5.align-items-center
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema1/5.png', alt='')

            .col-md-12.col-lg-7.mb-4.mb-md-0
              .ps-4
                h5 Proyección dimétrica
                p Similar a la isométrica, esta proyección mantiene la escala en dos de los tres ejes, mientras el tercero se representa en una escala distinta, permitiendo resaltar ciertas dimensiones del objeto.


          .row.p-4.px-md-5.py-lg-5.align-items-center
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema1/6.png', alt='')

            .col-md-12.col-lg-7.mb-4.mb-md-0
              .ps-4
                h5 Proyección trimétrica
                p Con ángulos y escalas diferentes en cada uno de los tres ejes, esta proyección es más compleja pero útil en ilustraciones técnicas donde se necesita detalle sin perspectiva clásica.

          .row.p-4.px-md-5.py-lg-5.align-items-center
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema1/7.png', alt='')

            .col-md-12.col-lg-7.mb-4.mb-md-0
              .ps-4
                h5 Proyección caballera
                p Este tipo de proyección presenta el objeto con dos dimensiones en vista frontal, mientras la tercera se proyecta en ángulo (usualmente de 45°). Es útil en esquemas y planos arquitectónicos que requieren una visualización simplificada sin distorsión.

    #t_1_2.titulo-segundo
      h2 #[span 1.2]  Las vistas en dibujo técnico

    .row.justify-content-center.mb-5
      .col-lg-7
        p.mb-4(data-aos="fade-up") En el dibujo técnico, las vistas son herramientas fundamentales para representar en dos dimensiones un objeto tridimensional. Cada vista ofrece una proyección específica de uno de los lados del objeto, permitiendo detallar sus características de forma, tamaño y estructura de manera precisa. Estas representaciones ayudan a comunicar con claridad la forma y funcionalidad de un diseño, proporcionando una guía clara y detallada para quienes trabajan en su desarrollo o manufactura.

        .bg-color-2.p-4.mb-4
          p.mb-0 La claridad en las vistas facilita que el objeto sea comprendido por otras personas, ya sean ingenieros, diseñadores o fabricantes, quienes dependen de esta información para replicar el diseño sin ambigüedades. Al no necesitar una representación tridimensional, las vistas ofrecen una solución simplificada para comunicar la estructura y el acabado de cada lado del objeto, desde su cara principal hasta los detalles más pequeños que deben considerarse en el proceso de fabricación.

      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/8.png', alt='')

    h2.mb-4(data-aos="fade-up") Disposición de las vistas en dibujo técnico
    p.mb-4(data-aos="fade-up") En el dibujo técnico, la disposición de las vistas es fundamental para interpretar correctamente un objeto. Según el método de proyección, ya sea el ISO A (americano) o el ISO E (europeo), las vistas cambian de posición para facilitar su comprensión en distintas regiones. Lo invitamos a revisar el video para profundizar: 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/afV-H2S3ALg?si=vbRZ140Nfi0BbCXg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Leyenda del video

    .row.material-complementario
      h2 MATERIAL COMPLEMENTARIO
      .col-12.col-md-6.col-lg-7
        p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
        p.d-flex.my-4
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
          a(href="https://archive.org/details/engineeringdrawi00fren" target="_blank" rel="noopener noreferrer") French, T. E., Vierck, C. J., & Foster, R. J. (2002). Engineering Drawing and Graphic Technology. McGraw-Hill.
        p.d-flex.my-4
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
          a(href="https://www.academia.edu/32721635/MANUAL_DE_DIBUJO_T%C3%89CNICO_I" target="_blank" rel="noopener noreferrer") Siqueiros, C. A. (2010). Manual de dibujo técnico. Academia de Ingeniería. Recuperado de Academia de Ingeniería de México:
        p.d-flex.my-4
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
          a(href="https://scholar.lib.vt.edu/ejournals/JTE/" target="_blank" rel="noopener noreferrer") Stoli, C. (2010). A primer on technical drawing. Journal of Technology Education, 22(1). Recuperado de Journal of Technology Education:
        p.d-flex.my-4
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
          a(href="https://docs.google.com/viewerng/viewer?url=ijarlie.com/AdminUpload/Pdf/An_overview_of_teaching_learning_process_in_Engineering_Graphics_ijarlie9390.pdf" target="_blank" rel="noopener noreferrer") Dixit, S., & Kumar, S. (2017). An overview of engineering graphics. International Journal of Engineering Research and Technology, 6(5), 78-83. Recuperado de ResearchGate:
        p.d-flex.my-4
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
          a(href="https://www.academia.edu/35825997/NTC_Compendio_de_Dibujo_Tecnico_1.pdf" target="_blank" rel="noopener noreferrer") Instituto Colombiano de Normas Técnicas y Certificación. (2002). Compendio de dibujo técnico: Norma técnica colombiana.
      .col-12.col-md-6.col-lg-3.offset-lg-1
        figure
          img(src='@/assets/componentes/material-complementario.svg', alt='')
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
