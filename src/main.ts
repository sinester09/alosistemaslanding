import './styles/main.css';
import { Terminal } from './components/Terminal';
import { renderProyectos } from './pages/proyectos';
import { renderServicios } from './pages/servicios';
import { renderProductos } from './pages/productos';

// Router simple
const routes: Record<string, () => void> = {
  '/': renderHome,
  '/servicios': renderServicios,
  '/productos': renderProductos,
  '/proyectos': renderProyectos,
  '/contacto': renderContacto,
};

function router() {
  const path = window.location.pathname;
  const render = routes[path] || routes['/'];
  render();
  updateActiveLinks();
}

function updateActiveLinks() {
  document.querySelectorAll('[data-link]').forEach(link => {
    const href = link.getAttribute('href');
    if (href === window.location.pathname) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Navigate function
function navigate(path: string) {
  window.history.pushState({}, '', path);
  router();
}

// Home page
async function renderHome() {
  const content = document.getElementById('main-content')!;

  content.innerHTML = `
    <section class="section bg-radial" style="padding-top: 80px; position: relative; overflow: hidden;">
      <div class="bg-grid" style="position: absolute; inset: 0; opacity: 0.4;"></div>
      <div class="container" style="position: relative;">
        <div class="text-center mb-40">
          <div class="kicker mb-20">/ Transformación Digital con IA</div>
          <h1 class="h-display" style="font-size: 72px; max-width: 920px; margin: 0 auto 24px;">
            Automatiza tu empresa con
            <span style="background: linear-gradient(135deg, var(--accent-2), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              Inteligencia Artificial
            </span>
          </h1>
          <p style="font-size: 18px; color: var(--fg-2); max-width: 640px; margin: 0 auto 40px; line-height: 1.6;">
            Implementamos Agentes de IA, OCR inteligente y Apps móviles que transforman operaciones,
            digitalizan documentos y automatizan procesos. Soluciones adaptadas al mercado peruano.
          </p>
          <div style="display: flex; gap: 12px; justify-content: center;">
            <a href="/contacto" data-link class="btn btn-primary btn-lg">Solicitar Demo Gratis</a>
            <a href="/productos" data-link class="btn btn-ghost btn-lg">Ver Productos →</a>
          </div>
        </div>

        <div id="terminal-container" style="max-width: 800px; margin: 60px auto;"></div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); border-radius: 12px; overflow: hidden; margin-top: 60px;">
          <div style="padding: 32px; background: var(--bg-2);">
            <div class="h-display" style="font-size: 48px; color: var(--accent-2);">100+</div>
            <div style="font-family: var(--font-mono); font-size: 12px; color: var(--fg-2); margin-top: 8px;">PROYECTOS ENTREGADOS</div>
          </div>
          <div style="padding: 32px; background: var(--bg-2);">
            <div class="h-display" style="font-size: 48px; color: var(--accent-2);">5+</div>
            <div style="font-family: var(--font-mono); font-size: 12px; color: var(--fg-2); margin-top: 8px;">INDUSTRIAS</div>
          </div>
          <div style="padding: 32px; background: var(--bg-2);">
            <div class="h-display" style="font-size: 48px; color: var(--accent-2);">5</div>
            <div style="font-family: var(--font-mono); font-size: 12px; color: var(--fg-2); margin-top: px;">AÑOS OPERANDO</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="padding: 100px 0;">
      <div class="container">
        <div class="text-center mb-40">
          <div class="kicker mb-20">/ Nuestros Servicios</div>
          <h2 class="h-display" style="font-size: 52px;">Soluciones de IA que Transforman</h2>
        </div>

        <div class="service-grid">
          <div class="service-card">
            <div class="service-icon">🤖</div>
            <h3 class="service-title">Agentes de IA</h3>
            <p class="service-desc">
              Automatiza atención al cliente, ventas y procesos con agentes inteligentes 24/7.
            </p>
            <ul class="service-features">
              <li><span class="feature-check">✓</span> Chatbots multicanal</li>
              <li><span class="feature-check">✓</span> Integración WhatsApp/Web</li>
              <li><span class="feature-check">✓</span> RAG para respuestas precisas</li>
            </ul>
            <a href="/contacto" data-link class="btn btn-ghost">Consultar →</a>
          </div>

          <div class="service-card">
            <div class="service-icon">📄</div>
            <h3 class="service-title">OCR Inteligente</h3>
            <p class="service-desc">
              Digitaliza y extrae datos automáticamente de facturas, DNI y documentos.
            </p>
            <ul class="service-features">
              <li><span class="feature-check">✓</span> Compatible con SUNAT</li>
              <li><span class="feature-check">✓</span> Validación automática</li>
              <li><span class="feature-check">✓</span> Integración con ERP</li>
            </ul>
            <a href="/contacto" data-link class="btn btn-ghost">Consultar →</a>
          </div>

          <div class="service-card">
            <div class="service-icon">📱</div>
            <h3 class="service-title">Apps Móviles</h3>
            <p class="service-desc">
              Desarrollo nativo e híbrido para iOS y Android con capacidades de IA.
            </p>
            <ul class="service-features">
              <li><span class="feature-check">✓</span> React Native / Flutter</li>
              <li><span class="feature-check">✓</span> Reconocimiento de imágenes</li>
              <li><span class="feature-check">✓</span> Geolocalización inteligente</li>
            </ul>
            <a href="/contacto" data-link class="btn btn-ghost">Consultar →</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background: var(--bg-2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);">
      <div class="container text-center">
        <h2 class="h-display" style="font-size: 42px; margin-bottom: 24px;">
          ¿Listo para transformar tu negocio con IA?
        </h2>
        <p style="font-size: 17px; color: var(--fg-2); margin-bottom: 32px; max-width: 640px; margin-left: auto; margin-right: auto;">
          Agenda una consultoría gratuita y descubre cómo ALO SISTEMAS puede impulsar tu empresa
        </p>
        <a href="/contacto" data-link class="btn btn-primary btn-lg">Solicitar Consultoría Gratis</a>
      </div>
    </section>
  `;

  // Inicializar terminal
  const terminalContainer = document.getElementById('terminal-container')!;
  new Terminal(terminalContainer);
}

// Página de contacto
function renderContacto() {
  const content = document.getElementById('main-content')!;
  content.innerHTML = `
    <section class="section" style="padding-top: 120px;">
      <div class="container" style="max-width: 640px;">
        <div class="text-center mb-40">
          <div class="kicker mb-20">/ Contacto</div>
          <h1 class="h-display" style="font-size: 56px; margin-bottom: 16px;">Hablemos de tu proyecto</h1>
          <p style="font-size: 17px; color: var(--fg-2);">
            Contáctanos y te responderemos en menos de 24 horas
          </p>
        </div>

        <div style="padding: 40px; border: 1px solid var(--line); border-radius: 16px; background: var(--bg-2);">
          <div style="margin-bottom: 32px;">
            <h3 style="font-size: 18px; margin-bottom: 20px;">Información de Contacto</h3>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <span style="font-size: 20px;">📱</span>
                <span>+51 970 070 369</span>
              </div>
              <div style="display: flex; align-items: center; gap: 12px;">
                <span style="font-size: 20px;">✉️</span>
                <span>info@alosistemas.com</span>
              </div>
              <div style="display: flex; align-items: center; gap: 12px;">
                <span style="font-size: 20px;">📍</span>
                <span>Lima, Perú</span>
              </div>
            </div>
          </div>

          <div style="padding-top: 24px; border-top: 1px solid var(--line);">
            <h3 style="font-size: 18px; margin-bottom: 20px;">Horario de Atención</h3>
            <p style="color: var(--fg-2); font-size: 15px; line-height: 1.6;">
              Lunes a Viernes: 9:00 AM - 6:00 PM<br>
              Sábados: 9:00 AM - 1:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Handle navigation
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('[data-link]') as HTMLAnchorElement;

    if (link) {
      e.preventDefault();
      const href = link.getAttribute('href')!;
      navigate(href);
    }
  });

  // Handle browser back/forward
  window.addEventListener('popstate', router);

  // Initial render
  router();
});
