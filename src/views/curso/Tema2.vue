<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 2. Dibujo en proyección y representación de vistas'" :subTitulo="'2. Secciones y cortes en el dibujo industrial'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0

    .bg-color-3.mb-4
      .row.justify-content-center.align-items-center
        .col-lg
          .px-5
            p.mb-0(data-aos="fade-up") En el contexto del dibujo técnico, las secciones y cortes son representaciones gráficas que permiten visualizar el interior de un objeto, revelando detalles que no son visibles en las vistas externas. Estas técnicas son fundamentales para comprender la geometría interna y la disposición de los componentes de un objeto, facilitando su fabricación y construcción.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')


    h2(data-aos="fade-up") Secciones

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p(data-aos="fade-up") Una sección es la representación de un objeto que ilustra cómo se vería al ser cortado a través de un plano específico.
        AcordionA(tipo="b")
          .div(titulo="Objetivo")
            p Las secciones permiten visualizar características internas, como la forma de los componentes, materiales utilizados, cavidades y otros aspectos que no son evidentes en las vistas exteriores.
          .div(titulo="Representación")
            p En los dibujos técnicos, las áreas cortadas se suelen marcar con líneas de sección, que a menudo tienen un patrón particular (por ejemplo, líneas inclinadas) y se acompañan de etiquetas que indican la dirección del corte.

      .col-lg-6
        .titulo-figura.mb-2
          h5 Figura 1. 
          span Secciones
        figure
          img(src='@/assets/curso/tema2/2.png', alt='')
          figcaption #[strong Nota]. #[span Figura tomada de Dibujo Técnico (2015).]


    h2(data-aos="fade-up") Tipos de secciones

    p(data-aos="fade-up") Las secciones en dibujo técnico se clasifican en varias categorías según la parte del objeto que representan y el detalle que brindan.

    .bg-full-width.bg-fondo-1.mb-5.pb-5
      .p-4.p-md-5
        ImagenInfografica.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/info1.png', alt='', style="max-width: 1160px;").mx-auto

          .bg-color-9.p-3(x="13%" y="94%" numero="+")
            p Representa el objeto en su totalidad, como si se hubiera cortado a través de él.

          .bg-color-9.p-3(x="50%" y="94%" numero="+")
            p Muestra solo una parte del objeto en sección, destacando áreas específicas de interés.

          .bg-color-9.p-3(x="78%" y="94%" numero="+")
            p Ofrece un nivel de detalle mayor en un área particular de la sección.



    h2(data-aos="fade-up") Cortes

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p(data-aos="fade-up") Un corte es similar a una sección, pero se refiere más específicamente a un plano que muestra una vista del objeto a través de una línea de corte, a menudo representando un único elemento o un conjunto de elementos.
        AcordionA(tipo="b")
          .div(titulo="Objetivo")
            p Los cortes permiten entender la disposición y relación entre diferentes componentes de un objeto, especialmente en estructuras complejas donde es necesario visualizar cómo interactúan las partes.
          .div(titulo="Representación")
            p Los cortes suelen señalar la dirección de la vista y se etiquetan con letras o números que hacen referencia a las vistas correspondientes

      .col-lg-6
        .titulo-figura.mb-2
          h5 Figura 2. 
          span Cortes
        figure
          img(src='@/assets/curso/tema2/3.png', alt='')
          figcaption #[strong Nota]. #[span Imagen tomada de Dibujo Técnico (2015).]



    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        h2(data-aos="fade-up") Relevancia de secciones y cortes
      
        p(data-aos="fade-up").mb-5 Las secciones y cortes son elementos esenciales en el dibujo técnico debido a los siguientes aspectos:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Claridad
                p.mb-0 Ayudan a entender la geometría interna de un objeto, permitiendo que ingenieros, diseñadores y fabricantes interpreten el diseño de manera precisa.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Detallado
                p.mb-0 Proporcionan información esencial sobre las dimensiones y la disposición de los componentes internos, crucial para la fabricación, ensamblaje y mantenimiento.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Comunicación
                p.mb-0 Facilitan la transmisión de ideas complejas en el diseño y la construcción, asegurando que todos los involucrados comprendan claramente el producto final.
  
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
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
