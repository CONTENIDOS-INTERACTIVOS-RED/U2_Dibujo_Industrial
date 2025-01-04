export default {
  global: {
    componenteFormativo: '',
    descripcionCurso: '',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: '',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '',
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: '',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      // {
      //   nombreRuta: 'inicio',
      //   icono: 'fas fa-home',
      //   titulo: 'Volver al inici',
      // },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        unidad: 'UNIDAD 2.',
        numero: '',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 1.',
        numero: '1.',
        titulo: 'Proyecciones ortogonales y representación de vistas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de Proyección Ortogonal',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Las vistas en dibujo técnico',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 2.',
        numero: '2.',
        titulo: 'Secciones y cortes en el dibujo industrial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 1.',
        numero: '3.',
        titulo: 'Tolerancias y ajustes en los planos técnicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 1.',
        numero: '4.',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-download',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      // {
      //   icono: 'far fa-registered',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      // },
    ],
  },
  referencias: [
    {
      referencia:
        'Carranza C. (2007) Vistas de un objeto. Universidad nacional del rosario.',
      link: 'https://www.fceia.unr.edu.ar/de-sire/Vistas-SR.pdf',
    },
    {
      referencia: 'Dibujo Técnico. (2024). Cortes y secciones.',
      link: 'https://ibiguridt.wordpress.com/temas/cortes-y-secciones/',
    },
    {
      referencia:
        'Guzman, D (2024) Tipos de ajustes y tolerancias. fabricación mecánica',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Ajuste',
      significado:
        'relación de tolerancias entre dos piezas que se ensamblan, determinando cómo interactúan entre sí.',
    },
    {
      termino: 'Ajuste deslizante',
      significado:
        'permite el movimiento relativo entre piezas, como un eje que se desliza dentro de un orificio.',
    },
    {
      termino: 'Ajuste a presión',
      significado:
        'un ajuste más apretado que requiere fuerza para ensamblar las piezas, como un pasador encajando en un orificio.',
    },
    {
      termino: 'Ajuste interferente',
      significado:
        'proporciona una interferencia intencionada entre piezas, resultando en un ajuste muy apretado o conexiones permanentes.',
    },
    {
      termino: 'Proyección ortogonal',
      significado:
        'método de dibujo técnico que representa objetos tridimensionales en un plano bidimensional mediante líneas perpendiculares a un plano.',
    },
    {
      termino: 'Proyección ortogonal multivista',
      significado:
        'representación del objeto mediante varias vistas alineadas, mostrando cada cara sin distorsión.',
    },
    {
      termino: 'Proyección isométrica',
      significado:
        'representación en tres dimensiones donde los ejes están separados en ángulos de 120° y mantienen la misma escala en los tres ejes.',
    },
    {
      termino: 'Proyección dimétrica',
      significado:
        'muestra la escala en dos de los tres ejes, con el tercero en una escala diferente, resaltando dimensiones específicas.',
    },
    {
      termino: 'Proyección trimétrica',
      significado:
        'proyección más compleja con ángulos y escalas diferentes en cada uno de los tres ejes.',
    },
    {
      termino: 'Proyección caballera',
      significado:
        'representa el objeto con dos dimensiones en vista frontal y la tercera proyectada en ángulo (usualmente de 45°).',
    },
    {
      termino: 'Sección',
      significado:
        'representación de un objeto que ilustra como se vería si se cortara a través de un plano específico.',
    },
    {
      termino: 'Corte',
      significado:
        'vista del objeto a través de una línea de corte, mostrando un único elemento o conjunto de elementos.',
    },
    {
      termino: 'Vista en sección',
      significado:
        'muestra el interior del objeto como si estuviera "cortado" en una determinada posición.',
    },
    {
      termino: 'Tolerancia',
      significado:
        'rango de variación permitido en las dimensiones de una pieza para asegurar su funcionalidad.',
    },
  ],
}
