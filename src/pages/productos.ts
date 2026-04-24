export function renderProductos() {
  const content = document.getElementById('main-content')!;

  const products = [
    {
      id: 'alo-signs',
      name: 'ALO Signs',
      tagline: 'Firma Digital Electrónica',
      icon: '✍️',
      description: 'Solución completa de firma digital electrónica que permite a empresas y personas firmar documentos de forma segura, legal y 100% digital.',
      detailedDescription: 'Reduce tiempos de gestión documental, elimina el uso de papel y agiliza tus procesos de aprobación con firmas electrónicas válidas legalmente en toda Latinoamérica.',
      features: [
        'Firma Digital con Validez Legal',
        'Múltiples Firmantes en un Documento',
        'Trazabilidad Completa del Proceso',
        'Integración vía API',
        'Certificados Digitales Incluidos',
        'Almacenamiento Seguro en la Nube'
      ],
      color: '#8b5cf6',
      badgeColor: 'primary',
      link: '#',
      cta: 'Solicitar Demo'
    },
    {
      id: 'alokits',
      name: 'ALOKITS',
      tagline: 'Kit de Pagos en Línea',
      icon: '💳',
      description: 'Plataforma integral de pagos digitales que permite a tu negocio aceptar pagos en línea de forma segura, rápida y con múltiples métodos de pago.',
      detailedDescription: 'Integra fácilmente pagos en tu sitio web o aplicación móvil. Gestiona transacciones, reportes y conciliaciones desde un único dashboard intuitivo.',
      features: [
        'Pagos con Tarjetas (Visa, Mastercard, AMEX)',
        'Yape, Plin y Billeteras Digitales',
        'Transferencias Bancarias',
        'API RESTful de Fácil Integración',
        'Dashboard de Gestión y Reportes',
        'Seguridad PCI-DSS Compliance'
      ],
      color: '#10b981',
      badgeColor: 'success',
      link: 'https://alokits-landing.vercel.app/',
      cta: 'Probar Gratis'
    },
    {
      id: 'alo-ocr',
      name: 'ALO OCR',
      tagline: 'Digitalización y Validación de Documentos',
      icon: '📄',
      description: 'Sistema de reconocimiento óptico de caracteres (OCR) potenciado con IA para digitalizar, extraer y validar información de facturas y recibos automáticamente.',
      detailedDescription: 'Ahorra hasta 90% del tiempo en procesamiento manual de facturas. Integra con tu sistema contable y valida automáticamente contra SUNAT y otros entes reguladores.',
      features: [
        'Extracción Automática de Datos de Facturas',
        'Validación en Tiempo Real con SUNAT',
        'Procesamiento de Recibos y Comprobantes',
        'IA para Detección de Anomalías',
        'Integración con Sistemas Contables (SAP, Odoo)',
        'Almacenamiento Digital Organizado'
      ],
      color: '#f59e0b',
      badgeColor: 'warning',
      link: '#',
      cta: 'Ver Demo'
    },
    {
      id: 'alo-salud',
      name: 'ALO SALUD',
      tagline: 'Sistema de Gestión Clínica',
      icon: '🏥',
      description: 'Plataforma integral para gestión de clínicas, consultorios médicos y centros de salud. Digitaliza historias clínicas, agenda citas y gestiona inventarios médicos.',
      detailedDescription: 'Mejora la atención al paciente con acceso rápido a información médica, reduce errores administrativos y cumple con normativas de salud y protección de datos personales.',
      features: [
        'Historia Clínica Electrónica (HCE)',
        'Agendamiento de Citas en Línea',
        'Gestión de Inventario Médico',
        'Facturación y Cobranzas',
        'Telemedicina Integrada',
        'Reportes y Estadísticas Médicas',
        'App Móvil para Pacientes'
      ],
      color: '#ef4444',
      badgeColor: 'danger',
      link: '#',
      cta: 'Agendar Presentación'
    }
  ];

  content.innerHTML = `
    <section class="section bg-radial" style="padding-top: 80px; padding-bottom: 60px; position: relative; overflow: hidden;">
      <div class="bg-grid" style="position: absolute; inset: 0; opacity: 0.4;"></div>
      <div class="container" style="position: relative;">
        <div class="text-center mb-40">
          <div class="kicker reveal mb-20">/ Productos · Soluciones Listas para Usar</div>
          <h1 class="h-display reveal" style="font-size: 72px; max-width: 920px; margin: 0 auto 24px;">
            Software que
            <span style="background: linear-gradient(135deg, var(--accent-2), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              impulsa resultados
            </span>
          </h1>
          <p class="reveal" style="font-size: 18px; color: var(--fg-2); max-width: 720px; margin: 0 auto 40px; line-height: 1.6; animation-delay: .1s;">
            Productos probados y listos para implementar. Desde firma digital hasta gestión clínica,
            ofrecemos soluciones completas que se adaptan a las necesidades del mercado peruano.
          </p>
        </div>

        <!-- Product Stats -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--line); border-radius: 12px; overflow: hidden; margin-top: 40px;">
          <div style="padding: 24px; background: var(--bg-2); text-align: center;">
            <div class="h-display" style="font-size: 36px; color: var(--accent-2);">4</div>
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--fg-2); margin-top: 6px;">PRODUCTOS</div>
          </div>
          <div style="padding: 24px; background: var(--bg-2); text-align: center;">
            <div class="h-display" style="font-size: 36px; color: var(--accent-2);">500+</div>
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--fg-2); margin-top: 6px;">USUARIOS ACTIVOS</div>
          </div>
          <div style="padding: 24px; background: var(--bg-2); text-align: center;">
            <div class="h-display" style="font-size: 36px; color: var(--accent-2);">99.9%</div>
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--fg-2); margin-top: 6px;">UPTIME</div>
          </div>
          <div style="padding: 24px; background: var(--bg-2); text-align: center;">
            <div class="h-display" style="font-size: 36px; color: var(--accent-2);">24/7</div>
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--fg-2); margin-top: 6px;">SOPORTE</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="section" style="padding: 80px 0;">
      <div class="container">
        ${products.map((product, index) => `
          <div class="product-detail-card" style="margin-bottom: 100px;">
            <div style="
              border: 1px solid var(--line);
              border-radius: 20px;
              padding: 48px;
              background: linear-gradient(135deg, var(--bg-2), var(--bg));
              position: relative;
              overflow: hidden;
            ">
              <!-- Background decoration -->
              <div style="
                position: absolute;
                top: -100px;
                right: -100px;
                width: 300px;
                height: 300px;
                border-radius: 50%;
                background: ${product.color};
                filter: blur(120px);
                opacity: 0.15;
              "></div>

              <div style="position: relative; display: grid; grid-template-columns: ${index % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr'}; gap: 60px; align-items: center;">
                ${index % 2 === 0 ? `
                  <!-- Left: Content -->
                  <div>
                    <div style="display: inline-block; padding: 6px 12px; background: rgba(${hexToRgb(product.color)}, 0.15); color: ${product.color}; border-radius: 6px; font-size: 10px; font-family: var(--font-mono); letter-spacing: 0.12em; margin-bottom: 20px; font-weight: 600;">
                      ${product.tagline.toUpperCase()}
                    </div>
                    <h2 class="h-display" style="font-size: 48px; margin-bottom: 16px;">${product.name}</h2>
                    <p style="font-size: 17px; color: var(--fg-2); line-height: 1.65; margin-bottom: 20px;">
                      ${product.description}
                    </p>
                    <p style="font-size: 15px; color: var(--fg-3); line-height: 1.6; margin-bottom: 32px;">
                      ${product.detailedDescription}
                    </p>

                    <div style="margin-bottom: 32px;">
                      <div style="font-family: var(--font-mono); font-size: 10px; color: var(--fg-3); letter-spacing: 0.1em; margin-bottom: 16px;">CARACTERÍSTICAS PRINCIPALES</div>
                      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
                        ${product.features.map(feature => `
                          <div style="display: flex; align-items: start; gap: 10px;">
                            <span style="color: ${product.color}; margin-top: 2px; flex-shrink: 0;">✓</span>
                            <span style="font-size: 13px; color: var(--fg-2); line-height: 1.4;">${feature}</span>
                          </div>
                        `).join('')}
                      </div>
                    </div>

                    <div style="display: flex; gap: 12px;">
                      <a href="/contacto" data-link class="btn btn-primary">${product.cta}</a>
                      ${product.link !== '#' ? `
                        <a href="${product.link}" target="_blank" class="btn btn-ghost">Ver Sitio Web →</a>
                      ` : ''}
                    </div>
                  </div>

                  <!-- Right: Visual -->
                  <div style="
                    height: 500px;
                    border-radius: 16px;
                    background: linear-gradient(135deg, rgba(${hexToRgb(product.color)}, 0.12), rgba(${hexToRgb(product.color)}, 0.04));
                    border: 1px solid rgba(${hexToRgb(product.color)}, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 140px;
                    position: relative;
                    overflow: hidden;
                  ">
                    <div style="position: absolute; inset: 0; opacity: 0.15; background: radial-gradient(circle at 50% 50%, ${product.color}, transparent 70%);"></div>
                    <span style="position: relative; z-index: 1;">${product.icon}</span>
                  </div>
                ` : `
                  <!-- Left: Visual -->
                  <div style="
                    height: 500px;
                    border-radius: 16px;
                    background: linear-gradient(135deg, rgba(${hexToRgb(product.color)}, 0.12), rgba(${hexToRgb(product.color)}, 0.04));
                    border: 1px solid rgba(${hexToRgb(product.color)}, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 140px;
                    position: relative;
                    overflow: hidden;
                  ">
                    <div style="position: absolute; inset: 0; opacity: 0.15; background: radial-gradient(circle at 50% 50%, ${product.color}, transparent 70%);"></div>
                    <span style="position: relative; z-index: 1;">${product.icon}</span>
                  </div>

                  <!-- Right: Content -->
                  <div>
                    <div style="display: inline-block; padding: 6px 12px; background: rgba(${hexToRgb(product.color)}, 0.15); color: ${product.color}; border-radius: 6px; font-size: 10px; font-family: var(--font-mono); letter-spacing: 0.12em; margin-bottom: 20px; font-weight: 600;">
                      ${product.tagline.toUpperCase()}
                    </div>
                    <h2 class="h-display" style="font-size: 48px; margin-bottom: 16px;">${product.name}</h2>
                    <p style="font-size: 17px; color: var(--fg-2); line-height: 1.65; margin-bottom: 20px;">
                      ${product.description}
                    </p>
                    <p style="font-size: 15px; color: var(--fg-3); line-height: 1.6; margin-bottom: 32px;">
                      ${product.detailedDescription}
                    </p>

                    <div style="margin-bottom: 32px;">
                      <div style="font-family: var(--font-mono); font-size: 10px; color: var(--fg-3); letter-spacing: 0.1em; margin-bottom: 16px;">CARACTERÍSTICAS PRINCIPALES</div>
                      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
                        ${product.features.map(feature => `
                          <div style="display: flex; align-items: start; gap: 10px;">
                            <span style="color: ${product.color}; margin-top: 2px; flex-shrink: 0;">✓</span>
                            <span style="font-size: 13px; color: var(--fg-2); line-height: 1.4;">${feature}</span>
                          </div>
                        `).join('')}
                      </div>
                    </div>

                    <div style="display: flex; gap: 12px;">
                      <a href="/contacto" data-link class="btn btn-primary">${product.cta}</a>
                      ${product.link !== '#' ? `
                        <a href="${product.link}" target="_blank" class="btn btn-ghost">Ver Sitio Web →</a>
                      ` : ''}
                    </div>
                  </div>
                `}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section" style="background: var(--bg-2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);">
      <div class="container text-center">
        <h2 class="h-display" style="font-size: 48px; margin-bottom: 24px;">
          ¿Listo para transformar tu negocio?
        </h2>
        <p style="font-size: 17px; color: var(--fg-2); margin-bottom: 32px; max-width: 640px; margin-left: auto; margin-right: auto;">
          Solicita una demostración gratuita de cualquiera de nuestros productos y descubre cómo podemos ayudarte
        </p>
        <a href="/contacto" data-link class="btn btn-primary btn-lg">Solicitar Demo Gratuita</a>
      </div>
    </section>
  `;
}

// Helper function to convert hex to rgb
function hexToRgb(hex: string): string {
  if (hex.startsWith('var(')) return '45, 95, 238'; // default accent color

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '45, 95, 238';
}
