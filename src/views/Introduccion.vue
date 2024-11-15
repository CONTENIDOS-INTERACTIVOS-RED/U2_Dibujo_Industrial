<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'unidad 1: FUNDAMENTOS DEL DIBUJO TÉCNICO'" :subTitulo="'INTRODUCCIÓN'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      p.mb-4(data-aos="fade-up") #[strong Bienvenidos a la Unidad 1 del curso de Dibujo Industrial.] En esta unidad, los estudiantes explorarán los conceptos fundamentales del dibujo técnico, una herramienta esencial para comunicar ideas de diseño de manera precisa y estandarizada en el ámbito de la ingeniería y la industria. ¡Que comience este fascinante recorrido por el mundo del dibujo técnico!
  

      .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/1.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Importancia del dibujo técnico
                p.mb-0 El dibujo técnico actúa como un lenguaje universal que facilita la comprensión y desarrollo de proyectos complejos entre profesionales de distintas áreas, permitiendo una comunicación precisa.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Contenidos de la unidad
                p.mb-0 La unidad abarca la creación de planos, la aplicación de normativas internacionales y el uso de software especializado, lo que garantiza una representación clara de objetos y estructuras.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Desarrollo de habilidades prácticas
                p.mb-0 A través de ejercicios prácticos y teoría, los participantes adquieren las competencias necesarias para realizar dibujos técnicos que cumplan con altos estándares de calidad, aplicables en la elaboración de planos y esquemas.
  
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
