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


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://cadcamiutjaa.wordpress.com/wp-content/uploads/2019/02/guc3ada-de-ajustes-y-tolerancias-v1.1.pdf" target="_blank" rel="noopener noreferrer") Verde, E. (2019) Guia de tolerancias y ajustes. Unefa

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/live/WCmpd1Iglwo?si=LXmxhXe8UhvSYTlu" target="_blank" rel="noopener noreferrer") ¿Cómo saber interpretar adecuadamente un plano 2D?

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Sistemas numéricos y álgebra de Boole',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Qué tipo de ajuste permite el movimiento relativo entre dos piezas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Ajuste interferente',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Ajuste a presión',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Ajuste deslizante',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Ajuste permanente',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es la función principal de las tolerancias en los planos técnicos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Establecer el color de las piezas',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Asegurar la precisión en las dimensiones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Representar el diseño en 3D',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Determinar los ángulos de los ejes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes es una vista adicional en dibujo técnico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Vista lateral',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Vista isométrica',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Vista inferior',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Vista superior',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'La proyección caballera presenta el objeto en:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Tres dimensiones sin perspectiva',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Dos dimensiones en vista frontal, con el tercer eje en ángulo',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Una vista simplificada',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Una vista detallada de un área específica',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: 'Una sección parcial en dibujo técnico muestra:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Todo el objeto en sección',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Solo una parte del objeto en sección',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Una vista desde el frente',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Una vista desde el costado',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 6,
            texto: 'Las tolerancias geométricas incluyen:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Variaciones en el color de la pieza',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Dimensiones lineales',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Características de forma, orientación y ubicación',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Solo la longitud y el ancho',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
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
