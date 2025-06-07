const translations = {
  es: {
    servicios: "SERVICIOS",
    nosotros: "NOSOTROS",
    contacto: "CONTACTO",
    idioma: "EN",
    h2Principal: 'IMPULSAMOS<span class="h2soft">TUS FINANZAS PARA ACOMPAÑAR TU</span> CRECIMIENTO',
    pPrincipal: "SABÉS A DONDE QUERÉS LLEGAR. NOSOTROS TE AYUDAMOS A LOGRARLO.",
    botonPrincipal: "AGENDÁ TU ASESORÍA",
    nuestrosServicios: "NUESTROS SERVICIOS",
    diagnosticoEvaluacion:"DIAGNÓSTICO Y EVALUACIÓN FINANCIERA",
    dep1:"• Análisis de estados financieros (solvencia, rentabilidad y liquidez).",
    dep2:"• Evaluación de proyectos de inversión (TIR, VAN, Payback, análisis de escenarios).",
    dep3:"• Valuación de empresas (DCF).",
    dep4:"• Scoring crediticio de clientes y proveedores.",
    planeamiento:"PLANEAMIENTO FINANCIERO Y CONTROL DE GESTIÓN",
    pla1:"• Presupuesto económico y control de gestión.",
    pla2:"• Cash flow histórico y proyectado.",
    pla3:"• Desarrollo de métricas del negocio (KPI’s).",
    pla4:"• Automatización de reportes de caja, inversiones y cash flow.",
    optimizacion:"OPTIMIZACIÓN DE RECURSOS FINANCIEROS",
    op1:"• Desarrollo de política de inversión de los excedentes de caja..",
    op2:"• Gestión de portafolio de inversiones.",
    op3:"• Reporte de rentabilidad del portafolio y asignación por tipo de activo.",
    gestion:"GESTIÓN DE COSTOS Y RIESGOS FINANCIEROS",
    ge1:"• Cobertura de riesgos financieros y operativos.",
    ge2:"• Documentación y definición de procesos financieros.",
    ge3:"• Desarrollo de sistemas de costos.",
    ge4:"• Optimización de capital de trabajo.",
    financing:"GESTIÓN DE FINANCIAMIENTO",
    fi1:"• Estructuración de deuda (mercado bancario y de capitales).",
    fi2:"• Plan de reestructuración de pasivos financieros.",
    fi3:"• Preparación de decks para aplicación a rondas de inversión.",
    bi:"BI, DASHBOARD & OTROS",
    bi1:"• Desarrollo de dashboards y reportes automatizados.",
    bi2:"• Selección y evaluación de perfiles financieros.",
    bi3:"• Capacitación en temas financieros.",
    nuestraEmpresa: "NUESTRA EMPRESA",
    nuestraEmpresaText:"Somos una consultora fundada en 2024, creada por un equipo con una extensa experiencia en el mercado financiero, corporativo y fintech. Consideramos que la confianza, la confidencialidad y la independencia son claves para ofrecer un asesoramiento integral y transparente. Por eso, trabajamos de forma cercana y personalizada, adaptándonos a las necesidades de cada empresa con soluciones financieras y un equipo de profesionales comprometidos.",
    empresasConfian: "ALGUNAS EMPRESAS",
    empresasConfian2: "Que confían en nosotros.",
    contactoTitulo: "CONTACTO",
    enviarMensaje: "ENVIAR MENSAJE",
    copyright:"N3XT 2025. Todos los derechos reservados.",
    title: "N3XT | Impulsamos tus finanzas",

    // Placeholders
    nombreCompleto: "Nombre completo",
    correoElectronico: "Correo electrónico",
    mensajeConsulta: "Mensaje o consulta...",
  },
  en: {
    servicios: "SERVICES",
    nosotros: "ABOUT US",
    contacto: "CONTACT",
    idioma: "ES",
    h2Principal: 'EMPOWERING <span class="h2soft">YOUR FINANCES FOR EXPONENTIAL</span> GROWTH',
    pPrincipal: "YOU HAVE A VISION. WE'LL HELP YOU GET THERE.",
    botonPrincipal: "BOOK YOUR CONSULTATION",
    nuestrosServicios: "OUR SERVICES",
    diagnosticoEvaluacion:"FINANCIAL DIAGNOSIS AND EVALUATION",
    dep1:"• Financial statement analysis (solvency, profitability, and liquidity).",
    dep2:"• Investment project evaluation (IRR, NPV, Payback, scenario analysis).",
    dep3:"• Business valuation (DCF).",
    dep4:"• Credit scoring for clients and suppliers.",
    planeamiento:"FINANCIAL PLANNING AND MANAGEMENT CONTROL",
    pla1:"• Budget planning and performance monitoring.",
    pla2:"• Historical and projected cash flow.",
    pla3:"• Development of business metrics (KPIs).",
    pla4:"• Automation of cash, investment, and cash flow reports.",
    optimizacion:"OPTIMIZATION OF FINANCIAL RESOURCES",
    op1:"• Development of cash surplus investment policies.",
    op2:"• Investment portfolio management.",
    op3:"• Portfolio return reporting and asset allocation.",
    gestion:"COST AND FINANCIAL RISK MANAGEMENT",
    ge1:"• Coverage of financial and operational risks.",
    ge2:"• Documentation and definition of financial processes.",
    ge3:"• Development of cost systems.",
    ge4:"• Working capital optimization.",
    financing:"FINANCING MANAGEMENT",
    fi1:"• Debt structuring (banking and capital markets).",
    fi2:"• Financial liability restructuring plans.",
    fi3:"• Preparation of pitch decks for investment rounds.",
    bi:"BI, DASHBOARDS & MORE",
    bi1:"• Dashboard and Automated Reporting Development.",
    bi2:"• Financial Talent Selection and Evaluation.",
    bi3:"• Training in financial topics.",
    nuestraEmpresa: "OUR COMPANY",
    nuestraEmpresaText:"We are a consulting firm founded in 2024, created by a team with extensive experience in the financial, corporate and fintech markets. We believe that trust, confidentiality and independence are key to offer comprehensive and transparent advice. Therefore, we work in a close and personalized way, adapting to the needs of each company with financial solutions and a team of committed professionals.",
    empresasConfian: "COMPANIES",
    empresasConfian2: "That trust us.",
    contactoTitulo: "CONTACT",
    enviarMensaje: "SEND MESSAGE",
    copyright:"N3XT 2025. All rights reserved.",
    title: "N3XT | We boost your finances",

    // Placeholders
    nombreCompleto: "Full name",
    correoElectronico: "Email address",
    mensajeConsulta: "Message or inquiry...",
  }
};

// Claves que contienen HTML embebido (como <span>, <strong>, etc.)
const htmlKeys = ["h2Principal"];

function setLanguage(lang) {
  // Cambiar textos normales y con HTML
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[lang]?.[key];

    if (translation !== undefined) {
      if (htmlKeys.includes(key)) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });

  // Cambiar placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const translation = translations[lang]?.[key];

    if (translation !== undefined) {
      el.placeholder = translation;
    }
  });

  // Cambiar título de la página
  if (translations[lang]?.title) {
    document.title = translations[lang].title;
  }
}
