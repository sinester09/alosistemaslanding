export function renderProyectos() {
  const content = document.getElementById('main-content')!;

  const projects = [
    {
      year: '2026',
      tag: 'IA',
      title: 'Agente conversacional omnicanal',
      client: 'Banco regional',
      kpi: '-42%',
      kpiLabel: 'tickets',
      color: 'var(--accent-2)'
    },
    {
      year: '2025',
      tag: 'OCR',
      title: 'Procesador de facturas automático',
      client: 'Logística SAC',
      kpi: '8×',
      kpiLabel: 'más rápido',
      color: '#a78bfa'
    },
    {
      year: '2025',
      tag: 'APP',
      title: 'App fidelización retail',
      client: 'Cadena retail',
      kpi: '+60k',
      kpiLabel: 'usuarios',
      color: '#3fd48a'
    },
    {
      year: '2024',
      tag: 'IA',
      title: 'Chatbot RAG interno',
      client: 'Aseguradora',
      kpi: '92%',
      kpiLabel: 'precisión',
      color: 'var(--accent-2)'
    },
    {
      year: '2024',
      tag: 'SEC',
      title: 'Pentest + SOC continuo',
      client: 'Clínica privada',
      kpi: '14',
      kpiLabel: 'CVEs cerrados',
      color: '#f97373'
    },
    {
      year: '2023',
      tag: 'ERP',
      title: 'ERP modular para PYME',
      client: 'Industria textil',
      kpi: '8 sem',
      kpiLabel: 'go-live',
      color: '#fbbf24'
    },
  ];

  content.innerHTML = `
    <section class="section bg-radial" style="padding-top: 80px; padding-bottom: 60px; position: relative; overflow: hidden;">
      <div class="bg-grid" style="position: absolute; inset: 0; opacity: 0.4;"></div>
      <div class="container" style="position: relative;">
        <div class="kicker reveal mb-20">/ Proyectos · 2020 — 2026</div>
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 40px; align-items: end;">
          <h1 class="h-display reveal" style="font-size: 80px;">
            Cada proyecto,<br/>
            <span style="background: linear-gradient(135deg, var(--accent-2), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              un resultado medible.
            </span>
          </h1>
          <div class="reveal" style="font-family: var(--font-mono); font-size: 13px; color: var(--fg-2); line-height: 1.9; animation-delay: .1s;">
            <div><span style="color: var(--fg);">100+</span> proyectos entregados</div>
            <div><span style="color: var(--fg);">4+</span> industrias</div>
            <div><span style="color: var(--fg);">5</span> años operando</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filtros -->
    <section style="padding: 20px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); position: sticky; top: 68px; z-index: 20; backdrop-filter: blur(18px); background: rgba(10,14,26,0.8);">
      <div class="container" style="display: flex; align-items: center; gap: 10px; overflow-x: auto;">
        <div class="kicker kicker-muted" style="margin-right: 8px;">Filtrar</div>
        <button class="btn btn-primary btn-sm" style="border-radius: 20px;">Todos · 100+</button>
        <button class="btn btn-ghost btn-sm" style="border-radius: 20px;">IA · 28</button>
        <button class="btn btn-ghost btn-sm" style="border-radius: 20px;">OCR · 12</button>
        <button class="btn btn-ghost btn-sm" style="border-radius: 20px;">Apps · 22</button>
        <button class="btn btn-ghost btn-sm" style="border-radius: 20px;">ERP · 18</button>
        <button class="btn btn-ghost btn-sm" style="border-radius: 20px;">Ciberseguridad · 14</button>
      </div>
    </section>

    <!-- Timeline -->
    <section style="padding: 32px 0 80px;">
      <div class="container">
        <!-- Header row -->
        <div style="display: grid; grid-template-columns: 80px 80px 1fr 1.2fr 140px; padding: 14px 20px; font-family: var(--font-mono); font-size: 10px; color: var(--fg-3); letter-spacing: 0.1em; border-bottom: 1px solid var(--line);">
          <div>AÑO</div>
          <div>TIPO</div>
          <div>PROYECTO</div>
          <div>CLIENTE</div>
          <div>RESULTADO</div>
        </div>

        ${projects.map(project => `
          <div class="project-row">
            <div style="font-family: var(--font-mono); color: var(--fg-3); font-size: 12px;">${project.year}</div>
            <div>
              <span class="project-tag" style="background: rgba(${hexToRgb(project.color)}, 0.12); color: ${project.color};">
                ${project.tag}
              </span>
            </div>
            <div style="font-weight: 500; font-size: 15px;">${project.title}</div>
            <div style="color: var(--fg-2); font-size: 14px;">${project.client}</div>
            <div style="text-align: right;">
              <div class="project-kpi">${project.kpi}</div>
              <div class="project-kpi-label">${project.kpiLabel}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- Caso destacado -->
    <section class="section" style="border-top: 1px solid var(--line); background: var(--bg-2); position: relative; overflow: hidden;">
      <div style="position: absolute; top: -200px; right: -200px; width: 600px; height: 600px; border-radius: 50%; background: var(--accent); filter: blur(160px); opacity: 0.15;"></div>
      <div class="container" style="position: relative;">
        <div class="kicker mb-20">◆ Caso destacado · 2026</div>
        <div style="display: grid; grid-template-columns: 1.1fr 1fr; gap: 72px; align-items: center;">
          <div>
            <h2 class="h-display" style="font-size: 52px; margin-bottom: 24px;">
              Agente conversacional omnicanal para Banco Regional.
            </h2>
            <p style="font-size: 17px; color: var(--fg-2); line-height: 1.55; margin-bottom: 32px;">
              Implementamos un asistente RAG sobre la documentación interna, integrado con WhatsApp, web y canal telefónico.
              El modelo responde el 78% de las consultas sin escalamiento humano y redujo el volumen de tickets en un 42% durante el primer trimestre.
            </p>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 32px;">
              <div style="padding: 20px; background: rgba(255,255,255,0.03); border-radius: 12px; border: 1px solid var(--line);">
                <div class="h-display" style="font-size: 32px; color: var(--accent-2);">-42%</div>
                <div style="font-size: 12px; color: var(--fg-3); margin-top: 4px;">Tickets</div>
              </div>
              <div style="padding: 20px; background: rgba(255,255,255,0.03); border-radius: 12px; border: 1px solid var(--line);">
                <div class="h-display" style="font-size: 32px; color: var(--accent-2);">78%</div>
                <div style="font-size: 12px; color: var(--fg-3); margin-top: 4px;">Auto-resolución</div>
              </div>
              <div style="padding: 20px; background: rgba(255,255,255,0.03); border-radius: 12px; border: 1px solid var(--line);">
                <div class="h-display" style="font-size: 32px; color: var(--accent-2);">24/7</div>
                <div style="font-size: 12px; color: var(--fg-3); margin-top: 4px;">Disponibilidad</div>
              </div>
            </div>
            <div style="margin-bottom: 24px;">
              <div style="font-family: var(--font-mono); font-size: 11px; color: var(--fg-3); letter-spacing: 0.1em; margin-bottom: 12px;">STACK TÉCNICO</div>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                ${['OpenAI GPT-4', 'LangChain', 'Twilio', 'AWS Lambda'].map(tech => `
                  <span style="padding: 6px 12px; background: rgba(255,255,255,0.04); border: 1px solid var(--line); border-radius: 6px; font-size: 12px; font-family: var(--font-mono);">
                    ${tech}
                  </span>
                `).join('')}
              </div>
            </div>
            <a href="/contacto" data-link class="btn btn-primary">Solicitar caso de estudio completo</a>
          </div>
          <div style="position: relative; height: 500px; border-radius: 16px; border: 1px solid var(--line); background: linear-gradient(135deg, var(--bg-2), var(--bg)); overflow: hidden; padding: 24px;">
            <div style="font-family: var(--font-mono); font-size: 10px; color: var(--fg-3); letter-spacing: 0.1em; margin-bottom: 18px;">AGENT.conversation</div>
            ${[
              { from: 'user', text: '¿Cuánto es mi saldo?' },
              { from: 'ai', text: 'Hola Marcos, tu saldo actual es S/ 2,340.' },
              { from: 'user', text: 'Transfiere 500 a Carla' },
              { from: 'ai', text: '✓ Listo. Confirmación: #AL-3291' },
            ].map(m => `
              <div style="display: flex; justify-content: ${m.from === 'user' ? 'flex-end' : 'flex-start'}; margin-bottom: 10px;">
                <div style="
                  max-width: 78%;
                  padding: 10px 14px;
                  border-radius: 12px;
                  background: ${m.from === 'user' ? 'var(--accent)' : 'rgba(255,255,255,0.06)'};
                  color: ${m.from === 'user' ? '#fff' : 'var(--fg)'};
                  font-size: 13px;
                  border: ${m.from === 'ai' ? '1px solid var(--line)' : 'none'};
                ">
                  ${m.text}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
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
