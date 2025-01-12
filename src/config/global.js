export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '3',
    tituloUnidad: 'Emprendimiento, Desarrollo y Modelos de Negocios',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Modelo y plan de negocio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Modelo de negocio',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Plan de negocio',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El pensamiento y comportamiento emprendedor',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Emprendimiento sostenible',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Economía colaborativa',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '¿Qué es el emprendimiento social como modelo de negocio?',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Fundamentos del emprendimiento social',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Características del Emprendimiento Social',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
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
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bulchand, J. & Melián, S. (2018). La revolución de la economía colaborativa (1 ed.). LID Editorial España.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/269989',
    },
    {
      referencia:
        'Droznes, L. (2005). Manual para un plan de negocios. Unitexto.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/35155',
    },
    {
      referencia:
        'Elson, C. (2021). Nuevos modelos de negocio: emprendimiento en la era de la tecnología. Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/209985',
    },
    {
      referencia:
        'Epstein, M. J. (2009). Sostenibilidad empresarial: administración y medición de los impactos sociales, ambientes y economía. Ecoe Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69103',
    },
    {
      referencia:
        'Hernández-Sánchez, B. R., Cardella, G. M. & Sánchez García, J. C. (2023). Persona, empresa, sociedad y emprendimiento en el contexto de los ODS (1 ed.). Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/229746',
    },
    {
      referencia:
        'Laverde Rodríguez, C. A., Sellamén Garzón, A. & López Naranjo, H. A. (2022). Tendencias en la economía colaborativa: una aproximación analítica (1 ed.). Ediciones USTA.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/224504',
    },
    {
      referencia:
        'Monguí Pinentel, J., Yepes González, E. G. & Baquero Guerrero, E. L. (2023). Una mirada al emprendimiento social en Colombia (1 ed.). Corporación Universitaria Minuto de Dios.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/232108',
    },
    {
      referencia:
        'Pedraza Rendón, O. H. (2015). Modelo del plan de negocios: para la micro y pequeña empresa. Grupo Editorial Patria.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/39387',
    },
    {
      referencia:
        'Pérez Pertuz, J., Gómez-Caicedo, M. I. & López López, M. K. (2024). Nuevos modelos de negocios (1 ed.). Fundación Universitaria Los Libertadores.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/277315',
    },
    {
      referencia:
        'Rinaudo Mannucci, M. E. (2024). Sostenibilidad para el emprendimiento. Guía para agentes de cambio que diseñan presentes y futuros posibles para todos (1 ed.). Editorial Universidad EAN.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/274734',
    },
    {
      referencia:
        'Uribe Palacios, V. J. (2021). Manual del emprendedor: la caja de herramientas para crear tu modelo y plan de negocios. Editorial Uniagustiniana.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/199380',
    },
    {
      referencia:
        'Uribe, J. (2017). Experiencias de emprendimiento social en Iberoamérica. Editorial Universidad de Almería.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/44577',
    },
  ],
  glosario: [
    {
      termino: 'Autogestión',
      significado:
        'Capacidad de planificar y ejecutar acciones independientemente, optimizando recursos personales y organizacionales.',
    },
    {
      termino: 'Capital humano',
      significado:
        'Conjunto de habilidades, conocimientos y experiencias que las personas aportan a una organización para su desarrollo.',
    },
    {
      termino: 'Colaboración',
      significado:
        'Proceso de trabajo conjunto entre individuos o entidades para alcanzar metas comunes de forma eficiente.',
    },
    {
      termino: 'Comunidad',
      significado:
        'Grupo de personas que comparten intereses, objetivos o un entorno, clave en el impacto social del emprendimiento.',
    },
    {
      termino: 'Diversificación',
      significado:
        'Estrategia empresarial que busca ampliar fuentes de ingresos o áreas de acción para reducir riesgos.',
    },
    {
      termino: 'Escalabilidad',
      significado:
        'Capacidad de un modelo de negocio para crecer en alcance o ingresos sin un aumento proporcional en los costos.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Plan estructurado diseñado para alcanzar objetivos específicos mediante el uso eficiente de recursos disponibles.',
    },
    {
      termino: 'Financiamiento de impacto',
      significado:
        'Inversiones dirigidas a generar beneficios sociales y ambientales junto con rendimientos financieros.',
    },
    {
      termino: 'Impacto social',
      significado:
        'Efectos positivos generados por acciones empresariales en comunidades y grupos vulnerables.',
    },
    {
      termino: 'Inclusión social',
      significado:
        'Proceso de integrar a individuos o grupos marginados en actividades económicas, sociales y culturales.',
    },
    {
      termino: 'Innovación disruptiva',
      significado:
        'Cambio radical en un sector o mercado mediante la introducción de nuevas tecnologías o modelos de negocio.',
    },
    {
      termino: 'Intersectorialidad',
      significado:
        'Colaboración entre distintos sectores, como empresas, gobiernos y ONGs, para abordar problemáticas complejas.',
    },
    {
      termino: 'Justicia social',
      significado:
        'Principio que busca la equidad en la distribución de recursos, derechos y oportunidades.',
    },
    {
      termino: 'Medición de impacto',
      significado:
        'Proceso de evaluación que identifica y cuantifica los efectos sociales o ambientales de una iniciativa.',
    },
    {
      termino: 'Sostenibilidad ambiental',
      significado:
        'Prácticas que garantizan el uso responsable de los recursos naturales para preservar el medio ambiente.',
    },
    {
      termino: 'Sostenibilidad económica',
      significado:
        'Capacidad de mantener operaciones financieras estables a largo plazo sin comprometer objetivos sociales o ambientales.',
    },
    {
      termino: 'Tecnología social',
      significado:
        'Innovaciones diseñadas para resolver problemas específicos en comunidades, priorizando la accesibilidad y el impacto positivo.',
    },
    {
      termino: 'Triple línea base',
      significado:
        'Marco de evaluación que mide el desempeño empresarial en términos económicos, sociales y ambientales.',
    },
    {
      termino: 'Valor compartido',
      significado:
        'Estrategia empresarial que combina la creación de beneficios económicos con la generación de impacto social positivo.',
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
