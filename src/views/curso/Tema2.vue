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


    h2(data-aos="fade-up")#t_2_1 Secciones

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


    h2(data-aos="fade-up")#t_2_2 Tipos de secciones

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



    h2(data-aos="fade-up")#t_2_1 Cortes

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
        h2(data-aos="fade-up")#t_2_3 Relevancia de secciones y cortes
      
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
  
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'

export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  data() {
    return {
      items: [
        { text: 'Ingeniería mecánica, eléctrica, entre otras.' },
        { text: 'Diseño de productos y embalajes.' },
        { text: 'Fabricación y producción.' },
        { text: 'Educación y capacitación técnica.' },
        { text: 'Investigación y desarrollo.' },
        { text: 'Industria manufacturera.' },
        { text: 'Arquitectura y construcción.' },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
