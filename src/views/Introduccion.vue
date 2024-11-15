<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'Unidad 2. Dibujo en proyección y representación de vistas'" :subTitulo="'INTRODUCCIÓN'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.justify-content-center
        .col-lg-8
          p.mb-4(data-aos="fade-up") Hola ¡Bienvenidos a la segunda unidad del curso de Dibujo Industrial! 
          p.mb-4(data-aos="fade-up") En el ámbito del dibujo técnico, la representación precisa de objetos tridimensionales en un formato bidimensional es esencial para la comunicación efectiva de ideas y diseños. Este proceso se lleva a cabo mediante diversas técnicas de proyección, que permiten visualizar las características y dimensiones de los objetos sin la distorsión que a menudo conlleva la perspectiva.

          .bg-color-3.p-4.mb-4
            .row.justify-content-center.align-items-center
              .col-lg-auto
                figure
                  img(src='@/assets/curso/intro/1.svg', alt='')
              .col-lg
                p.mb-0 La proyección ortogonal, en particular, se destaca por su capacidad para #[strong proporcionar vistas claras y detalladas de cada cara de un objeto], lo que es fundamental en disciplinas como la ingeniería, la arquitectura y el diseño industrial.

          p.mb-4(data-aos="fade-up") También se analiza la disposición de las vistas según los estándares ISO, así como las secciones y cortes, que revelan la geometría interna de los objetos.  Por último, se profundiza en el papel de las tolerancias y ajustes, conceptos cruciales para asegurar la correcta fabricación y ensamblaje de piezas. A través de esta exploración, se busca destacar la relevancia de estos elementos en la práctica del dibujo técnico y su impacto en la producción industrial.


        .col-lg-4
          figure
            img(src='@/assets/curso/intro/2.png', alt='')


  
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
