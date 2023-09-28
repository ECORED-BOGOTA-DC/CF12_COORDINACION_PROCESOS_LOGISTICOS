export default {
  global: {
    componenteFormativo: 'Procesos de importación',
    descripcionCurso:
      'En el mercado internacional, las grandes empresas han tenido un gran avance, gracias a la apertura y alianza con el gobierno y los países con los que se han aprobado tratados de libre comercio (TLC).  Estos abren una puerta al mercado global, posicionando al país como un gran líder en importación y exportación de bienes tangibles e intangibles.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Mercado financiero internacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Participantes en los mercados financieros',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Sistema Monetario Internacional',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tasa de cambio - Riesgo cambiario',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Devaluación y revaluación de la moneda',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Índices financieros',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Medios de pago',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Riesgos en la negociación internacional',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Sistema financiero colombiano',
            hash: 't_1_9',
          },
          {
            numero: '1.10',
            titulo: 'Régimen cambiario colombiano',
            hash: 't_1_10',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Distribución física internacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conceptos generales.',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Modos y medios de transporte',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Documentación para la exportación (vistos buenos)',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Costos de exportación',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Costos de importación',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Simulador de costos de Procolombia DFI',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'TIC aplicados a la DFI',
            hash: 't_2_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/121523_CF12_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Preguntas Frecuentes sobre Control Cambiario Colombiano',
      referencia:
        'DIAN. (s. f.). Preguntas frecuentes sobre el control cambiario. Gov.co.',
      tipo: 'Página web',
      link:
        'https://www.dian.gov.co/atencionciudadano/infoconsulta/Paginas/ControlCambiario.aspx',
    },
    {
      tema: 'Trámites y Documentos para Exportación',
      referencia:
        'Decreto 2685 de 1999. [Ministerio de Hacienda y Crédito Público]. Por el cual se modifica la Legislación Aduanera. Diciembre 28 de 1999. DO. Nº 43.834.',
      tipo: 'Página web',
      link:
        'https://www.sic.gov.co/recursos_user/documentos/normatividad/Dec2685_1999.pdf',
    },
    {
      tema: 'Tecnología de la información en la cadena de suministro',
      referencia:
        'Correa, A. y Gómez, R. (2009). Tecnologías de la información en la cadena de suministro. DYNA, 76(157), p. 37-48.',
      tipo: 'Artículo de revista',
      link:
        'https://revistas.unal.edu.co/index.php/dyna/article/view/9551/10142',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdos',
      significado:
        'son compromisos firmados en nombre o por delegación de los gobiernos y, por lo general, no están sujetos a ratificación de los gobiernos.',
    },
    {
      termino: 'Aprehensión',
      significado:
        'es una medida cautelar consistente en la retención de mercancías respecto de las cuales se configure alguno de los eventos previstos en el artículo 502 del presente decreto.',
    },
    {
      termino: 'Comercio exterior',
      significado:
        'está encargada de designar la situación comercial en la que se encuentra un país en particular y frente a otros países con los que tiene interacciones muy comunes comerciales.',
    },
    {
      termino: 'Comercio internacional',
      significado:
        'conjunto de movimientos comerciales (exportaciones e importaciones, documentos de crédito) y de servicios que se desarrollan dentro de la comunidad mundial, a través de los tratados, acuerdos y convenios.',
    },
    {
      termino: 'Comercio nacional',
      significado:
        'lo que se realiza en el territorio aduanero nacional. Comercialización de productos a nivel nacional.',
    },
    {
      termino: 'Convenios',
      significado:
        'son los diferentes acuerdos encargados de la ejecución del intercambio efectivo entre los mercados durante un corto plazo.',
    },
    {
      termino: 'Embalaje',
      significado:
        'está relacionado con todo lo requerido para ser utilizado en el proceso, manteniendo el producto en perfectas condiciones para luego acondicionarlo y así poder lograr la finalidad de protegerlo y, a la vez, agruparlo de manera temporal.',
    },
    {
      termino: 'Empaque',
      significado:
        'es el traje que se le coloca al producto, que lo cubre durante el proceso de traslado.',
    },
    {
      termino: 'Globalización',
      significado:
        'montar mi fábrica dedicada a las actividades de producción, distribución y comercialización de mercancías.',
    },
    {
      termino: 'Infracción aduanera',
      significado:
        'se reconocen como los actos cometidos por los contribuyentes, por los auxiliares de la administración aduanera y por los operadores del sistema informativo aduanero, entre otros, que se rigen bajo las normas.',
    },
    {
      termino: 'Internacionalización',
      significado:
        'conjunto de operaciones que facilitan el establecimiento de vínculos más o menos estables entre la empresa y los mercados internacionales, a lo largo de un proceso de creciente implicación y proyección internacional',
    },
    {
      termino: 'Menaje',
      significado:
        'se encuentra representado en un conjunto de artículos, ya sea de hogar, oficina, entre otros, que satisfacen las necesidades de los clientes.',
    },
    {
      termino: '<em>Pallet</em>',
      significado:
        'es una estructura de agrupación de carga, fabricada con madera, su funcionalidad es brindar un soporte de apoyo en la actividad de carga de mercancías. Generalmente, se utiliza para el cuidado de los diferentes productos de consumo, en este caso, las frutas; por lo mismo, los <i>pallet</i> tienen forma rectangular o cuadrada, esto genera que sea más fácil su manipulación.',
    },
    {
      termino: 'Tratado',
      significado:
        'está representado en una manifestación expresa y libre de voluntad de dos estados contratantes y constituye el derecho escrito entre ellos mismos.',
    },
  ],
  referencias: [
    {
      referencia: 'AMV. (s. f.). Contenidos educativos.',
      link:
        'https://amvcolombia.org.co/educacion-financiera-2/contenidos-educativos/',
    },
    {
      referencia:
        'Ballou, R. (2004). Logística. Administración de la cadena de suministro. Pearson.',
      link:
        'https://www.academia.edu/16236982/Logistica_Administracion_de_la_cadena_de_suministro_5ta_Edicion_Ronald_H_Ballou',
    },
    {
      referencia:
        'Decreto 2685 de 1999. [Ministerio de Hacienda y Crédito Público]. Por el cual se modifica la Legislación Aduanera. Diciembre 28 de 1999. DO. Nº 43.834.',
      link:
        'https://www.sic.gov.co/recursos_user/documentos/normatividad/Dec2685_1999.pdf',
    },
    {
      referencia:
        'DIAN. (s. f.). Preguntas frecuentes sobre control cambiario.',
      link:
        'https://www.dian.gov.co/atencionciudadano/infoconsulta/Paginas/ControlCambiario.aspx',
    },
    {
      referencia:
        'Díez, L. y Medrano, M. (2007). Mercados financieros internacionales. Editorial Dykinson.',
      link:
        'https://books.google.com.gt/books?id=Vo8WYJCBWXIC&printsec=copyright&hl=es#v=onepage&q&f=false',
    },
    {
      referencia:
        'Mincomercio. (s. f.). ¿Qué son los Tratados de Libre Comercio-TLC?',
      link: 'https://www.tlc.gov.co/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Distrito Capital- Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Alonso Pineda ',
          cargo: 'Experto Temático en Diseño Curricular',
          centro:
            'Regional Huila- Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador instruccional',
          centro:
            'Regional Distrito Capital - Centro de Diseño y Metrología Regional distrito Capital',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodológica y pedagógica',
          centro:
            'Regional Distrito Capital - Regional distrito Capital Centro de Diseño y Metrología',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de estilo',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amézquita',
          cargo: 'Diseño web',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
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
