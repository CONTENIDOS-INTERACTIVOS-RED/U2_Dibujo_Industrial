<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 2. Dibujo en proyección y representación de vistas'" :subTitulo="'3. Tolerancias y ajustes en los planos técnicos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .bg-color-3.mb-4
      .row.justify-content-center.align-items-center
        .col-lg
          .px-5
            p.mb-0(data-aos="fade-up") Las tolerancias y ajustes son conceptos esenciales en el dibujo técnico y la ingeniería, fundamentales para asegurar que las piezas se ensamblen y funcionen correctamente dentro de un sistema. A continuación, se detallan estos términos y su importancia en la elaboración de planos técnicos.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')


    h2(data-aos="fade-up") Tolerancias

    p(data-aos="fade-up").mb-5 La tolerancia se refiere al rango de variación permitido en las dimensiones de una pieza, establecido para garantizar que, a pesar de posibles variaciones en el proceso de fabricación, la pieza siga siendo funcional y cumpla con las especificaciones requeridas.

    
    h2(data-aos="fade-up").mb-5 Tipos de tolerancias

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-7
        p(data-aos="fade-up").mb-5 Esta clasificación permite entender cómo cada tipo de tolerancia contribuye a asegurar la precisión y funcionalidad de los componentes en un sistema de ensamblaje o fabricación.
        AcordionA(tipo="b")
          .div(titulo="Tolerancias dimensionales")
            p Enfocadas en la variación permitida en dimensiones lineales (como longitud y ancho) de una pieza.
          .div(titulo="Tolerancias geométricas")
            p Relacionadas con la forma, orientación y ubicación de características de la pieza, incluyendo planitud, perpendicularidad y concentricidad.

      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/2.png', alt='')


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p(data-aos="fade-up").mt-4 Las tolerancias son fundamentales para asegurar un ajuste adecuado de las piezas. Una tolerancia demasiado amplia puede resultar en un ensamblaje impreciso o suelto, mientras que tolerancias excesivamente estrictas pueden incrementar los costos de producción.

    p(data-aos="fade-up").mb-5 Las tolerancias son fundamentales para asegurar un ajuste adecuado de las piezas. Una tolerancia demasiado amplia puede resultar en un ensamblaje impreciso o suelto, mientras que tolerancias excesivamente estrictas pueden incrementar los costos de producción.

    .titulo-figura.mb-4
      h5 Figura 3. 
      span Ejemplo de tolerancias 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure.mb-4
          img(src='@/assets/curso/tema3/3.png', alt='')
          figcaption #[strong Nota]. #[span Figura tomada de Martínez y Pérez (2019).]

        .bg-color-3.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema3/8.svg', alt='')
            .col-lg
              h5.mb-1 Representación en planos
              p.mb-0 En los planos técnicos, las tolerancias se indican mediante símbolos o notaciones específicas, que incluyen el valor nominal seguido de un rango de tolerancia (por ejemplo, 10 ± 0,1 mm).




    h2(data-aos="fade-up") Ajustes

    p(data-aos="fade-up").mb-5 El ajuste describe la relación de tolerancias entre dos piezas que deben ensamblarse. Esta relación se define por las tolerancias de cada pieza y cómo interactúan entre sí.


    h2(data-aos="fade-up").mb-5 Tipos de ajustes

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-7
        p(data-aos="fade-up").mb-5 Cada tipo de ajuste define el nivel de holgura o interferencia entre las piezas, afectando así el movimiento, la estabilidad y la funcionalidad del ensamblaje en aplicaciones mecánicas.
        AcordionA(tipo="b")
          .div(titulo="Ajuste deslizante")
            p Permite el movimiento relativo entre las piezas, como un eje que se desliza dentro de un orificio.
          .div(titulo="Ajuste a presión")
            p Las piezas se ensamblan con un ajuste apretado que requiere fuerza para unirlas, como un pasador encajado en un orificio.
          .div(titulo="Ajuste interferente")
            p Genera una interferencia intencionada entre las piezas, resultando en un ajuste muy apretado o conexiones permanentes.Genera una interferencia intencionada entre las piezas, resultando en un ajuste muy apretado o conexiones permanentes.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/4.png', alt='')


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p(data-aos="fade-up").mt-4 La elección del tipo de ajuste es crucial para la funcionalidad y el rendimiento del ensamblaje. Un ajuste incorrecto puede generar desgaste prematuro, fallos en el ensamblaje o problemas operativos.

    p(data-aos="fade-up").mb-5 Las tolerancias son fundamentales para asegurar un ajuste adecuado de las piezas. Una tolerancia demasiado amplia puede resultar en un ensamblaje impreciso o suelto, mientras que tolerancias excesivamente estrictas pueden incrementar los costos de producción.

    .titulo-figura.mb-4
      h5 Figura 4. 
      span Representación en planos 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure.mb-4
          img(src='@/assets/curso/tema3/5.png', alt='')
          figcaption #[strong Nota]. #[span Figura tomada de IMH Campus. (s.f.).]

        .bg-color-3.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema3/8.svg', alt='')
            .col-lg
              h5.mb-1 Representación en planos
              p.mb-0 Los ajustes se especifican junto con las tolerancias en los planos técnicos, indicando la relación dimensional entre las piezas que se ensamblarán.

    .bg-color-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg
          .px-5
            p.mb-0(data-aos="fade-up") Las tolerancias y ajustes son elementos clave en la creación de planos técnicos, ya que aseguran que las piezas se fabriquen dentro de límites aceptables y funcionen adecuadamente en un ensamblaje. Una especificación y representación adecuada de estos aspectos en los planos resulta esencial para el éxito en el diseño y producción de componentes y sistemas mecánicos. 
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/6.png', alt='')

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
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>
