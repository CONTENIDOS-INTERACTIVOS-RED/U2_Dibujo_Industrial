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
        'American National Standards Institute. (2020). ANSI Y14.5: Dimensioning and tolerancing.',
      link:
        'https://www.asme.org/learning-development/find-course/fundamentals-gd-t/online',
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
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
