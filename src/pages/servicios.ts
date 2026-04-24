export function renderServicios() {
  const content = document.getElementById('main-content')!;

  const services = [
    {
      id: 'desarrollo-software',
      icon: '💻',
      title: 'Desarrollo de Software & Apps Móviles',
      description: 'Impulsa la transformación digital con soluciones a medida, apps nativas e IA que responden a tus procesos únicos.',
      features: [
        'Aplicaciones Web Responsivas',
        'Apps Móviles iOS & Android Nativas',
        'Integración con IA y Machine Learning',
        'APIs REST y Microservicios',
        'Sistemas Empresariales a Medida'
      ],
      color: 'var(--accent-2)'
    },
    {
      id: 'erp',
      icon: '📊',
      title: 'Implementación y Consultoría ERP',
      description: 'Optimiza la gestión de tu empresa con sistemas ERP robustos como SAP Business One y Odoo ERP.',
      features: [
        'Implementación SAP Business One',
        'Implementación Odoo ERP',
        'Consultoría y Análisis de Procesos',
        'Migración entre Sistemas ERP',
        'Personalización y Módulos Específicos',
        'Capacitación y Soporte Continuo'
      ],
      color: '#fbbf24'
    },
    {
      id: 'ciberseguridad',
      icon: '🛡️',
      title: 'Ciberseguridad y Hacking Ético',
      description: 'Protege tu infraestructura con auditorías especializadas, pentesting y hacking ético.',
      features: [
        'Pentesting y Auditorías de Seguridad',
        'Análisis de Vulnerabilidades',
        'Ethical Hacking',
        'Hardening de Sistemas',
        'Cumplimiento Normativo (ISO 27001)',
        'Respuesta a Incidentes'
      ],
      color: '#f97373'
    },
    {
      id: 'ia-transformacion',
      icon: '🤖',
      title: 'Consultoría en IA y Transformación Digital',
      description: 'Transforma tu negocio con soluciones de Inteligencia Artificial y automatización de procesos.',
      features: [
        'Agentes de IA Conversacionales',
        'Chatbots RAG Empresariales',
        'OCR y Procesamiento Documental',
        'Machine Learning Personalizado',
        'Automatización de Procesos (RPA)',
        'Estrategia de Transformación Digital'
      ],
      color: 'var(--accent)'
    }
  ];

  content.innerHTML = `
    <section class="section bg-radial" style="padding-top: 80px; padding-bottom: 60px; position: relative; overflow: hidden;">
      <div class="bg-grid" style="position: absolute; inset: 0; opacity: 0.4;"></div>
      <div class="container" style="position: relative;">
        <div class="text-center mb-40">
          <div class="kicker reveal mb-20">/ Servicios Empresariales</div>
          <h1 class="h-display reveal" style="font-size: 72px; max-width: 920px; margin: 0 auto 24px;">
            Soluciones que
            <span style="background: linear-gradient(135deg, var(--accent-2), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              transforman negocios
            </span>
          </h1>
          <p class="reveal" style="font-size: 18px; color: var(--fg-2); max-width: 720px; margin: 0 auto 40px; line-height: 1.6; animation-delay: .1s;">
            Desde desarrollo de software personalizado hasta implementación ERP y ciberseguridad avanzada.
            Ofrecemos servicios integrales que impulsan la transformación digital de tu empresa.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section" style="padding: 80px 0;">
      <div class="container">
        ${services.map((service, index) => `
          <div class="service-detail-card" style="margin-bottom: 80px; ${index % 2 === 0 ? '' : 'direction: rtl;'}">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; ${index % 2 === 0 ? '' : 'direction: ltr;'}">
              <div class="service-visual" style="
                height: 400px;
                border-radius: 16px;
                background: linear-gradient(135deg, rgba(${hexToRgb(service.color)}, 0.1), rgba(${hexToRgb(service.color)}, 0.03));
                border: 1px solid var(--line);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 120px;
                position: relative;
                overflow: hidden;
              ">
                <div style="position: absolute; inset: 0; opacity: 0.1; background: radial-gradient(circle at 50% 50%, ${service.color}, transparent 70%);"></div>
                <span style="position: relative; z-index: 1;">${service.icon}</span>
              </div>

              <div class="service-content">
                <div style="display: inline-block; padding: 6px 12px; background: rgba(${hexToRgb(service.color)}, 0.12); color: ${service.color}; border-radius: 6px; font-size: 11px; font-family: var(--font-mono); letter-spacing: 0.1em; margin-bottom: 20px;">
                  SERVICIO ${(index + 1).toString().padStart(2, '0')}
                </div>
                <h2 class="h-display" style="font-size: 42px; margin-bottom: 20px;">${service.title}</h2>
                <p style="font-size: 16px; color: var(--fg-2); line-height: 1.65; margin-bottom: 32px;">
                  ${service.description}
                </p>

                <div style="margin-bottom: 32px;">
                  <div style="font-family: var(--font-mono); font-size: 11px; color: var(--fg-3); letter-spacing: 0.1em; margin-bottom: 16px;">QUÉ INCLUYE</div>
                  <div style="display: grid; gap: 10px;">
                    ${service.features.map(feature => `
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="
                          width: 6px;
                          height: 6px;
                          background: ${service.color};
                          border-radius: 50%;
                          flex-shrink: 0;
                        "></div>
                        <span style="font-size: 14px; color: var(--fg-2);">${feature}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <a href="/contacto" data-link class="btn btn-primary">Solicitar Cotización</a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section" style="background: var(--bg-2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); position: relative; overflow: hidden;">
      <div style="position: absolute; top: -200px; left: 50%; transform: translateX(-50%); width: 600px; height: 600px; border-radius: 50%; background: var(--accent); filter: blur(160px); opacity: 0.15;"></div>
      <div class="container text-center" style="position: relative;">
        <h2 class="h-display" style="font-size: 48px; margin-bottom: 24px;">
          ¿Necesitas una solución específica?
        </h2>
        <p style="font-size: 17px; color: var(--fg-2); margin-bottom: 32px; max-width: 640px; margin-left: auto; margin-right: auto;">
          Agenda una consultoría gratuita y descubre cómo nuestros servicios pueden impulsar tu empresa
        </p>
        <a href="/contacto" data-link class="btn btn-primary btn-lg">Agendar Consultoría Gratuita</a>
      </div>
    </section>
  `;
}

// Helper function to convert hex to rgb
function hexToRgb(hex: string): string {
  if (hex.startsWith('var(--accent-2)')) return '99, 102, 241'; // indigo
  if (hex.startsWith('var(--accent)')) return '45, 95, 238'; // blue

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '45, 95, 238';
}
