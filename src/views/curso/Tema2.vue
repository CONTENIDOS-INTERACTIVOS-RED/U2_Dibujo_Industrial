<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'UNIDAD 1. FUNDAMENTOS DEL DIBUJO TÉCNICO'" :subTitulo="'2. Conceptos básicos de dibujo técnico'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0

    .bg-color-1.mb-4
      .row.justify-content-center.align-items-center
        .col-lg
          .px-5
            p.mb-0(data-aos="fade-up") #[strong El dibujo técnico tiene dos propósitos fundamentales: comunicación y documentación]. El propósito de comunicación radica en transmitir ideas y diseños de forma clara y precisa, facilitando la comprensión entre los involucrados. Por su parte, el propósito de documentación se enfoca en servir como un registro detallado de especificaciones y aspectos técnicos, asegurando la fidelidad en la creación y el mantenimiento de proyectos.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')


    p(data-aos="fade-up") Un buen dibujo técnico debe cumplir con las siguientes características:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.align-items-center
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema2/2.png', alt='')

            .col-md-12.col-lg-7.mb-4.mb-md-0
              h5 Precisión y exactitud
              p La precisión y la exactitud son esenciales en el dibujo técnico para garantizar la correcta interpretación y construcción de un diseño. Un pequeño error en medidas o representaciones gráficas puede llevar a fallos estructurales, problemas en la producción o dificultades en la funcionalidad del producto final. Cada línea, ángulo y dimensión debe ser exacta para asegurar la integración y el funcionamiento adecuado de todas las partes del diseño, especialmente en campos como la ingeniería, arquitectura y diseño industrial, donde la seguridad es crucial. La precisión también facilita la comunicación clara entre los equipos involucrados en un proyecto.

          .row.p-4.px-md-5.py-lg-5.align-items-center
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema2/3.png', alt='')

            .col-md-12.col-lg-7.mb-4.mb-md-0
              h5 Representación en dos o tres dimensiones
              p El dibujo técnico se emplea tanto en 2D como en 3D, ya que cada formato tiene funciones específicas y aporta diferentes perspectivas del objeto o proyecto. La representación en 2D es ideal para detalles y medidas precisas, mientras que el 3D es útil para visualizar el diseño final y comprender su integración en un entorno tridimensional, permitiendo una evaluación más completa del proyecto.

          .row.p-4.px-md-5.py-lg-5.align-items-center
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema2/4.png', alt='')

            .col-md-12.col-lg-7.mb-4.mb-md-0
              h5 Uso de símbolos y notaciones estandarizadas
              p Los símbolos estandarizados en el dibujo técnico aseguran una interpretación uniforme de los planos, sin importar la ubicación geográfica o el idioma de los involucrados. Esto facilita la comunicación, reduce los errores y garantiza que los productos o estructuras se construyan según lo planificado. Sin estas normas, diferentes interpretaciones podrían generar resultados inconsistentes y un proceso caótico en la ejecución de proyectos.


    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/tema2/5.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Dibujos en dos dimensiones (2D)
            p.mb-0 Los dibujos en 2D son representaciones planas que se utilizan para ilustrar vistas específicas, como la vista frontal, lateral o superior. Esto permite comprender detalles y dimensiones exactas de cada componente. Son indispensables para la fabricación de piezas y la interpretación de los elementos individuales de un proyecto.
      .col-lg-6.mb-4(data-aos="zoom-in-down")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/tema2/6.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Dibujos en tres dimensiones (3D)
            p.mb-0 Los dibujos en 3D proporcionan una visión más completa y realista del objeto, lo que facilita la comprensión de cómo se ensamblan las partes y cómo será el producto final. Este tipo de representación es útil para visualizar y anticipar posibles problemas de diseño antes de iniciar la fase de producción.

    h2(data-aos="fade-up")#t_2_1 Uso de escalas y proporciones

    p(data-aos="fade-up") El dibujo técnico recurre a escalas y proporciones para representar objetos con precisión y en un tamaño manejable. ¿Cómo sería intentar dibujar un edificio a su tamaño real en papel? ¡Sería impracticable! Las escalas permiten ajustar el tamaño del dibujo, manteniendo las proporciones correctas y facilitando su interpretación y uso en distintos contextos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bg-color-2.p-4.mb-4(data-aos="fade-up")
          p.mb-0 Las escalas permiten reducir o aumentar las dimensiones reales de un objeto mientras se mantienen las proporciones exactas. Esto facilita la comprensión y revisión de los planos sin perder ningún detalle importante. Por ejemplo, una escala de 1:100 indica que 1 unidad en el dibujo representa 100 unidades en la realidad, lo cual es útil para representar grandes estructuras de forma manejable.
        p.mb-0(data-aos="fade-right") Mantener las proporciones correctas garantiza que todas las partes del objeto se relacionen de manera coherente, lo cual es fundamental para los procesos de fabricación, ensamblaje y construcción, asegurando que cada componente encaje adecuadamente en el diseño final.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema2/7.png', alt='')

    h2(data-aos="fade-up")#t_2_2 Incluir información sobre materiales y procesos
    
    p(data-aos="fade-up") #[strong El dibujo técnico debe proporcionar detalles precisos sobre los materiales y procesos necesarios para la correcta realización de un diseño]. Esta especificación asegura que la ejecución del proyecto se lleve a cabo conforme a lo planificado, permitiendo a los fabricantes y constructores seguir las indicaciones con precisión. Esto contribuye a que el producto final cumpla con las expectativas de #[strong funcionalidad y calidad].

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/tema2/8.png', alt='')
      .col-lg-7
        AcordionA(tipo="b")
          .div(titulo="Materiales")
            p Los materiales especificados en un dibujo técnico aseguran que las propiedades físicas y mecánicas del producto, como la resistencia, durabilidad y flexibilidad, sean las adecuadas. Esto es esencial para cumplir con los estándares de calidad y seguridad requeridos en cada proyecto, garantizando que el producto final tenga las características necesarias para su función.

          .div(titulo="Procesos")
            p Los procesos descritos en el dibujo técnico indican cómo debe fabricarse o ensamblarse el producto, incluyendo técnicas de fabricación, herramientas específicas y pasos secuenciales. Contar con esta información detallada ayuda a prevenir errores, reducir desperdicios y optimizar el tiempo de producción, similar a seguir una receta de cocina precisa, donde los ingredientes y el método exacto determinan el resultado final.
  
    p(data-aos="fade-up").mb-5 #[strong Los tipos de dibujo técnico según el contexto y su finalidad son:]

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.align-items-center
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h5 Dibujo arquitectónico
              p Se utiliza para planificar y diseñar edificios y otras estructuras, incluyendo planos de plantas, elevaciones y secciones. Proporciona una visión detallada de cada aspecto de la construcción, permitiendo la correcta ejecución del proyecto.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema2/9.png', alt='')

          .row.p-4.px-md-5.py-lg-5.align-items-center
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h5 Dibujo de ingeniería
              p Se divide en ramas como mecánica, eléctrica y civil. Cada rama se enfoca en los detalles técnicos específicos necesarios para la fabricación o construcción de proyectos en su campo, asegurando la viabilidad técnica de cada diseño.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema2/10.png', alt='')

          .row.p-4.px-md-5.py-lg-5.align-items-center
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h5 Dibujo industrial
              p Se especializa en la creación y representación de productos y maquinaria. Estos dibujos son fundamentales para la manufactura, ya que ofrecen detalles precisos sobre la forma, dimensiones y ensamblaje de las piezas, facilitando el proceso de producción.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema2/11.png', alt='')

          .row.p-4.px-md-5.py-lg-5.align-items-center
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h5 Dibujo topográfico
              p Representa las características del terreno, siendo esencial para la planificación de proyectos de ingeniería civil y arquitectura. Permite comprender la geografía del área de desarrollo, facilitando la adaptación del proyecto al entorno natural.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema2/12.png', alt='')

          .row.p-4.px-md-5.py-lg-5.align-items-center
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h5 Dibujo urbano
              p Se utiliza para la planificación de ciudades y comunidades, mostrando el diseño de calles, parques y otras infraestructuras. Es clave para el desarrollo de entornos urbanos, garantizando una disposición funcional y coherente de los espacios.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema2/13.png', alt='')

    p(data-aos="fade-up").mb-5 #[strong Los tipos de dibujo técnico según el contexto y su finalidad son:]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        AcordionA(tipo="b")
          .div(titulo="Formato")
            p Se refiere al tamaño estandarizado del papel en el que se desarrolla el plano o en el que se desea imprimir, asegurando uniformidad en la presentación.

          .div(titulo="Márgenes")
            p Delimitan el área dentro del formato donde se disponen los elementos del plano técnico, estableciendo un marco para la correcta disposición del contenido.

          .div(titulo="Rótulo")
            p Espacio en el plano destinado a información relevante del proyecto, como el número de plano, la escala, la persona que lo dibujó y quien lo revisó, entre otros datos necesarios para la identificación del plano.
          
          .div(titulo="Líneas")
            p Diferentes tipos de líneas (continuas, discontinuas, de centro) que indican diversos aspectos del diseño, como contornos, ejes o límites ocultos.
          
          .div(titulo="Simbología")
            p Uso de símbolos estandarizados para representar componentes, materiales y procesos, facilitando la interpretación del plano sin ambigüedades.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema2/14.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/tema2/15.png', alt='')
      .col-lg-7
        AcordionA(tipo="b")
          .div(titulo="Proyección ortogonal")
            p Se refiere al tamaño estandarizado del papel en el que se desarrolla el plano o en el que se desea imprimir, asegurando uniformidad en la presentación.

          .div(titulo="Proyección isométrica")
            p Representación tridimensional en dos dimensiones, mostrando tres caras de un objeto, lo que facilita la visualización del volumen y la forma.

          .div(titulo="Dimensiones")
            p Especificación precisa de las medidas para cada componente del diseño, asegurando que las piezas se ajusten correctamente durante la fabricación o ensamblaje.
          
          .div(titulo="Anotaciones")
            p Notas y detalles adicionales que complementan la información del dibujo, como tolerancias y materiales, proporcionando datos importantes para la correcta interpretación del plano.

    h2(data-aos="fade-up")#t_2_3 Aplicaciones del dibujo técnico

    p(data-aos="fade-up") Dependiendo del área de aplicación, el dibujo técnico se emplea en:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bg-color-3.p-4.mb-2(v-for="item in items" :key="item.text" data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
            .col-lg
              p.mb-0 {{ item.text }}


      .col-lg-5
        figure
          img(src='@/assets/curso/tema2/16.png', alt='')


    h2(data-aos="fade-up")#t_2_4 Herramientas y software

    p(data-aos="fade-up") Un plano técnico se puede crear tanto con herramientas de trazado manual como con programas digitales de dibujo técnico. 

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/tema2/17.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Herramientas para dibujo técnico por trazado manual
            p.mb-0 Las herramientas de trazado manual son esenciales para lograr precisión en el dibujo técnico sin la ayuda de software. Algunas de las principales incluyen: lápices, compás, regla, escuadra y transportador.
      .col-lg-6.mb-4(data-aos="zoom-in-down")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/tema2/18.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Software de dibujo
            p.mb-0 Programas como AutoCAD y SolidWorks, que facilitan la creación y modificación de dibujos. Es importante destacar que para realizar un plano técnico con estas herramientas informáticas es fundamental contar con conocimientos tanto del manejo del software como de los conceptos de dibujo técnico.

    .bg-full-width.bg-color-4.border-top.color-primario
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") ¿Sabía que el dibujo industrial debe cumplir con normas específicas para garantizar la claridad y precisión en su interpretación? 
            p.mb-4(data-aos="fade-right") Las normas de dibujo industrial, como las establecidas por ISO, DIN y ANSI, son fundamentales para asegurar que los planos técnicos puedan ser comprendidos de manera uniforme, sin importar la profesión, idioma o ubicación geográfica de quien los consulte. Estas normas estandarizan elementos clave de los dibujos técnicos, como las líneas, vistas, acotaciones, escalas y simbología. En las tablas incluidas, se detalla la relevancia de estos estándares internacionales, así como las Normas Técnicas Colombianas (NTC), que aseguran la uniformidad en la representación técnica dentro de Colombia. Los invitamos a profundizar en el siguiente documento y comprender cómo estas regulaciones contribuyen a la consistencia y calidad de los procesos técnicos a nivel global.  

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Normas de dibujo industrial

          .col-lg-5.d-none.d-lg-block
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/19.png', alt='')
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
