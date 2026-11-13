export default {
  global: {
    Name: 'Comunicación gráfica',
    Description:
      'Este componente aborda la comunicación visual y comercial, los fundamentos del diseño, la fotografía, la producción audiovisual y las herramientas de edición. Orienta la elaboración y adaptación de piezas comunicacionales coherentes con la identidad de una marca de moda y las necesidades de información de sus públicos.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
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
        titulo: 'Comunicación visual y comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Elementos del proceso comunicativo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Lenguaje visual y construcción del mensaje',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Comunicación comercial en el sistema moda',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos del diseño gráfico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Elementos del diseño y principios de composición',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Percepción visual y leyes de la Gestalt',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Teoría del color y aplicaciones gráficas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Tipografía, jerarquía y legibilidad',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Fundamentos de fotografía',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Evolución de la fotografía y lectura de imágenes',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Elementos básicos y composición fotográfica',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos de fotografía y aplicaciones en moda',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Fundamentos de producción audiovisual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Evolución del lenguaje audiovisual',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Preproducción, producción y posproducción',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Tipos de producción audiovisual',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Adaptación y accesibilidad de contenidos digitales',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Herramientas de edición de piezas gráficas y comunicacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Digitalización, vectorización y diagramación',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Selección y uso de herramientas de edición',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Preparación, revisión y exportación de archivos',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Fundamentos de marca',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Marca, identidad e imagen',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Misión, visión, valores y personalidad de marca',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Identidad visual y manual de aplicación',
            hash: 't_6_3',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
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
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'Condición que permite a personas con diversas capacidades percibir, comprender y utilizar contenidos mediante un diseño y recursos adecuados.',
    },
    {
      termino: 'Audiodescripción',
      significado:
        'Locución complementaria que comunica información visual relevante que no puede comprenderse únicamente mediante el sonido original de un contenido audiovisual.',
    },
    {
      termino: 'Composición',
      significado:
        'Organización de imágenes, textos y otros elementos dentro de un espacio para construir un mensaje visual.',
    },
    {
      termino: 'Comunicación comercial',
      significado:
        'Proceso mediante el cual una organización presenta su oferta y orienta acciones relacionadas con su consulta, reconocimiento o adquisición.',
    },
    {
      termino: 'Comunicación visual',
      significado:
        'Transmisión de información mediante imágenes, formas, colores, textos y relaciones espaciales.',
    },
    {
      termino: 'Contraste',
      significado:
        'Diferencia perceptible entre elementos que permite distinguirlos y establecer niveles de atención o lectura.',
    },
    {
      termino: 'Diagramación',
      significado:
        'Distribución de textos, imágenes y gráficos mediante márgenes, columnas, alineaciones y jerarquías dentro de una publicación.',
    },
    {
      termino: 'Digitalización',
      significado:
        'Conversión de información de un soporte físico en un archivo digital mediante procedimientos como el escaneo o la captura fotográfica.',
    },
    {
      termino: 'Encuadre',
      significado:
        'Delimitación de los elementos que aparecen dentro de una fotografía o toma audiovisual.',
    },
    {
      termino: 'Gestalt',
      significado:
        'Corriente de la psicología de la percepción cuyos principios explican tendencias de organización y agrupación de la información visual.',
    },
    {
      termino: 'Identidad de marca',
      significado:
        'Características que una organización define para expresar quién es, a quién se dirige y qué propone.',
    },
    {
      termino: 'Imagen de marca',
      significado:
        'Percepción que los públicos construyen sobre una marca a partir de mensajes, productos, experiencias e interacciones.',
    },
    {
      termino: 'Jerarquía visual',
      significado:
        'Organización de los elementos según su importancia para orientar la atención y el orden de lectura.',
    },
    {
      termino: 'Logotipo',
      significado:
        'Representación gráfica del nombre de una marca mediante letras con un tratamiento visual definido.',
    },
    {
      termino: 'Marca',
      significado:
        'Identificación de una oferta mediante un nombre, signos y asociaciones que permiten reconocerla y diferenciarla.',
    },
    {
      termino: 'Posproducción',
      significado:
        'Fase en la que se selecciona, organiza y ajusta el material registrado para construir una pieza audiovisual.',
    },
    {
      termino: 'Preproducción',
      significado:
        'Fase de planeación que define objetivos, guiones, participantes, recursos y condiciones antes de realizar una producción audiovisual.',
    },
    {
      termino: 'Subtitulado',
      significado:
        'Presentación de textos sincronizados con el contenido audiovisual que comunican voces y, cuando corresponde, otros sonidos relevantes.',
    },
    {
      termino: 'Tipografía',
      significado:
        'Diseño y organización visual de los caracteres utilizados para presentar textos y establecer niveles de información.',
    },
    {
      termino: 'Vectorización',
      significado:
        'Construcción o conversión de formas en trazados definidos por puntos y curvas que permiten modificar su escala conservando sus contornos.',
    },
  ],
  referencias: [
    {
      referencia: 'Adobe. (2024, 23 de julio). Exportar ilustraciones.',
      link: 'https://helpx.adobe.com/es/illustrator/using/exporting-artwork.html',
    },
    {
      referencia:
        'Adobe. (2025, 17 de enero). Importación de imágenes de mapa de bits.',
      link: 'https://helpx.adobe.com/es/illustrator/using/importing-bitmap-images.html',
    },
    {
      referencia:
        'Canva. (2024). Canva Create 2024: Presentamos un Canva completamente nuevo.',
      link: 'https://www.canva.com/es_es/medios/noticias/canva-for-work/',
    },
    {
      referencia:
        'Certiport. (2025). Adobe Certified Professional in Digital Video Using Adobe Premiere Pro [Objetivos del examen, versión en español].',
      link: 'https://www.pue.es/pue-academy/certiport/examenes/objetivos/adobe-premiere-pro-2025/es',
    },
    {
      referencia:
        'De la Rubia Gómez-Moran, A. (2024). Teoría del color [Recurso educativo]. Universidad Rey Juan Carlos.',
      link: 'https://hdl.handle.net/10115/39913',
    },
    {
      referencia:
        'Gobierno de Chile. (2025, 11 de marzo). Manual de comunicación visual.',
      link: 'https://kitdigital.gob.cl/archivos/insumos/2025/Manual-Comunicacion-Visual-2025.pdf',
    },
    {
      referencia:
        'ILERNA. (2024, 28 de noviembre). Leyes de la Gestalt y su impacto en la percepción visual.',
      link: 'https://www.ilerna.es/blog/leyes-de-la-gestalt',
    },
    {
      referencia:
        'López-Cuadrado, J. L., Sánchez Pena, J. M., Moreno, L., Jiménez Dorado, J., & Carrero Leal, J. M. (2024). Guías para la elaboración de materiales educativos accesibles: Presentaciones en Microsoft PowerPoint. Real Patronato sobre Discapacidad.',
      link: 'https://www.rpdiscapacidad.gob.es/estudios-publicaciones/2024_GuiaPPT.pdf',
    },
    {
      referencia:
        'Mira, E. (2024). La fotografía digital en perspectiva. Fotocinema. Revista Científica de Cine y Fotografía, (28), 139–165.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/9342223.pdf',
    },
    {
      referencia:
        'Museo Universidad de Navarra. (2024, 24 de septiembre). Un viaje desde el daguerrotipo a la inteligencia artificial en la primera exposición de la colección del MUN.',
      link: 'https://museo.unav.edu/el-museo/noticias/-/contents/24/09/2024/un-viaje-desde-el-daguerrotipo-a-la-inteligencia-artificial-en-la-primera-exposicion-de-la-coleccion-del-mun/content/Hw8G/124089569',
    },
    {
      referencia:
        'Pino, M. (2024, 10 de mayo). La composición en la fotografía y sus reglas. ESDESIGN.',
      link: 'https://www.esdesignbarcelona.com/actualidad/audiovisual/composicion-en-la-fotografia',
    },
    {
      referencia:
        'RTVE. (2025, 22 de marzo). 130 años de cine [Video]. RTVE Play.',
      link: 'https://www.rtve.es/play/videos/telediario-fin-de-semana/130-anos-cine/16503013/',
    },
    {
      referencia:
        'Servicio Público de Empleo Estatal. (2024). El mercado de trabajo del sector audiovisual en España. 2024.',
      link: 'https://www.sepe.es/SiteSepe/contenidos/que_es_el_sepe/publicaciones/pdf/pdf_mercado_trabajo/2024/2024_El_mercado_de_trabajo_del_sector_Audiovisual_en_Espana.pdf',
    },
    {
      referencia:
        'Universidad Surcolombiana. (2024). Producción audiovisual (Código ES-CMU-PR-02, versión 6) [Procedimiento institucional].',
      link: 'https://usco.edu.co/contenido/SGC-USCO/documentos/03.ES-CMU-GESTION-DE-COMUNICACIONES/ES-CMU-PR-02%20%20PRODUCCION%20AUDIOVISUAL.pdf',
    },
    {
      referencia:
        'Universidad de Valladolid. (2025). Manual de identidad visual corporativa: Normas básicas.',
      link: 'https://imagencorporativa.uva.es/.documentos/manual-identidad-visual-corporativa.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
}
