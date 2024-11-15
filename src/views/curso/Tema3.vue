<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'UNIDAD 1. FUNDAMENTOS DEL DIBUJO TÉCNICO'" :subTitulo="'3.Tipos de líneas, proyecciones ortogonales y escalas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p(data-aos="fade-up").mb-5 En el dibujo técnico, los tipos de líneas definen bordes, ejes y detalles ocultos. Las proyecciones ortogonales descomponen un objeto en vistas (frontal, lateral y superior), mientras que las escalas ajustan el tamaño del dibujo al formato, manteniendo la proporción con las dimensiones reales del objeto.


    .bg-full-width.bg-fondo-2.mb-5
      .px-4.px-md-5.pb-md-5
        h2(data-aos="fade-up")#t_3_1 Tipos de líneas

        p(data-aos="fade-up").mb-5 #[strong Según la NTC 1777], que establece normas para el dibujo técnico en Colombia, se definen varios tipos de líneas que deben usarse en un plano técnico. A continuación, encontramos los principales tipos de líneas y sus usos específicos:

        .row.justify-content-center.align-items-center
          .col-lg-12
            SlyderF(columnas="col-12 col-lg-6 col-xl-4")
              .bg-color-white.p-3.py-md-5.px-md-4.box-shadow.h-100.brounded-sm
                img(src='@/assets/curso/tema3/1.png' alt='AvatarTop').mx-auto.mb-4
                h5.text-center.mb-4 Línea continua
                p.text-center Contornos visibles de objetos, la línea más común en los dibujos técnicos. Ejemplo: bordes y límites de piezas.
              .bg-color-white.p-3.py-md-5.px-md-4.box-shadow.h-100.brounded-sm
                img(src='@/assets/curso/tema3/2.png' alt='AvatarTop').mx-auto.mb-4
                h5.text-center.mb-4 Línea discontinua (o de trazo y espacio)
                p.text-center Contornos invisibles o bordes ocultos. Ejemplo: bordes de piezas que no son visibles desde la vista actual.
              .bg-color-white.p-3.py-md-5.px-md-4.box-shadow.h-100.brounded-sm
                img(src='@/assets/curso/tema3/3.png' alt='AvatarTop').mx-auto.mb-4
                h5.text-center.mb-4 Línea de centro
                p.text-center Indica ejes de simetría y centros de círculos. Ejemplo: ejes de rotación.

    h2(data-aos="fade-up")#t_3_2 Proyecciones ortogonales

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-up") Las proyecciones ortogonales son un método de representación gráfica empleado en el dibujo técnico para mostrar un objeto desde diferentes vistas bidimensionales. Este método es fundamental en la ingeniería y el diseño, ya que facilita la representación precisa de la forma y dimensiones de un objeto.
        .bg-color-2.p-4.mb-4(data-aos="fade-up")
          p.mb-0 Las proyecciones ortogonales son representaciones de un objeto en las que las líneas de proyección son perpendiculares a los planos de proyección. Esto garantiza que las dimensiones y proporciones del objeto se mantengan exactas, evitando distorsiones en las vistas.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/4.png', alt='')

    
    h2(data-aos="fade-up")#t_3_3 Vistas principales

    p(data-aos="fade-up") Generalmente, se emplean tres vistas principales en las proyecciones ortogonales:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .titulo-figura.mb-2
          h5 Figura 1. 
          span Vistas de un objeto  
        figure
          img(src='@/assets/curso/tema3/5.png', alt='') 
          figcaption Nota. #[span Tomado de Méndez, G. (2017)]
      .col-lg-6
        ol.lista-ol--cuadro.mt-5
          li 
            .lista-ol--cuadro__vineta
              span A
            | #[strong Vista de frente o alzado]: muestra la altura y el ancho del objeto. Es la vista más comúnmente utilizada.
          li 
            .lista-ol--cuadro__vineta
              span B
            | #[strong Vista superior o planta]: muestra el ancho y la profundidad del objeto, desde arriba.
          li 
            .lista-ol--cuadro__vineta
              span C
            | #[strong Vista derecha o lateral derecha]: muestra la altura y la profundidad del objeto desde un lado
          li 
            .lista-ol--cuadro__vineta
              span D
            | #[strong Vista izquierda o lateral izquierda]: muestra la altura y la profundidad del objeto desde un lado
          li 
            .lista-ol--cuadro__vineta
              span E
            | #[strong Vista inferior]: muestra el ancho y la profundidad del objeto, desde abajo.
          li 
            .lista-ol--cuadro__vineta
              span F
            | #[strong Vista posterior]: muestra la altura y el ancho del objeto, desde atrás. 


    h2(data-aos="fade-up")#t_3_4 Organización de las vistas

    p(data-aos="fade-up") #[strong Las normas ISO (Organización Internacional de Normalización)] que son esenciales en el dibujo técnico, indican que #[strong ISO-A] e #[strong ISO-E] se refieren a diferentes métodos de proyección utilizados en los dibujos técnicos de la siguiente manera:


    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Sistema Americano ISO-A" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Sistema Americano ISO-A
            p Conocido como el método de proyección del tercer ángulo, es más común en América del Norte. Aquí, el plano de proyección se coloca entre el observador y el objeto
        
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/6.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Sistema Europeo ISO-E" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Sistema Europeo ISO-E
            p También conocido como el método de proyección del primer ángulo, es comúnmente utilizado en Europa y Asia. En este método, el objeto se coloca entre el observador y el plano de proyección.
        
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/7.png', alt='')


    h2(data-aos="fade-up")#t_3_5 Dimensiones y cotas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bg-color-1.p-4
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema3/8.svg', alt='')
            .col-lg
              p.mb-0 Las proyecciones ortogonales incluyen cotas y dimensiones para especificar medidas críticas, como longitud, ancho, altura y diámetros. Esto es esencial para la fabricación y el ensamblaje.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/9.png', alt='')

    h2(data-aos="fade-up")#t_3_6 Proyecciones auxiliares

    p(data-aos="fade-up") Además de las vistas principales, pueden crearse proyecciones auxiliares para representar ángulos o características que no se pueden mostrar claramente en las vistas estándar.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .titulo-figura.mb-2
          h5 Figura 2. 
          span Plano auxiliar
        figure
          img(src='@/assets/curso/tema3/5.png', alt='') 
          figcaption #[strong Nota]. #[span Tomado de Universidad Nacional de San Juan. (2020).]
      .col-lg-6
        p.mb-4 Las ventajas de las proyecciones ortogonales son: 
        .bg-color-3.p-4.mb-2(v-for="item in items" :key="item.text" data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
            .col-lg
              p.mb-0(v-html="item.text")
        .bg-color-4.p-4.mt-4
          h5 Ejemplo práctico
          p Para conocer sobre la aplicación de proyecciones ortogonales lo invitamos a consultar el PDF ejemplo práctico.
          a.anexo.bg-white.w-fit(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejemplo práctico


    .row.material-complementario
      h2 MATERIAL COMPLEMENTARIO
      .col-12.col-md-6.col-lg-7
        p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
        p.d-flex.my-4
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
          span Peña, G. E. G. (2021). Las fuentes del derecho. Lecciones de introducción al derecho, 189
        p.d-flex.my-4
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
          span Suárez, E. (2020). Introducción al derecho. Ediciones UNL
        p.d-flex.my-4
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
          span De Sousa, M. T. (2019). Introducción al derecho. Temis 
        p.d-flex.my-4
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
          span Nieto, A. (2019). Una introducción al derecho.
      .col-12.col-md-6.col-lg-3.offset-lg-1
        figure
          img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data() {
    return {
      items: [
        {
          text:
            '<b>Claridad.</b> Permiten una comprensión clara de la geometría del objeto.',
        },
        {
          text:
            '<b>Precisión.</b> Mantienen las dimensiones reales, evitando distorsiones.',
        },
        {
          text:
            '<b>Estándar.</b> Facilitan la comunicación entre ingenieros, arquitectos y fabricantes.',
        },
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

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
