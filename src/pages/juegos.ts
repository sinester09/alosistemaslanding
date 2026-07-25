// Página de Juegos - SAP0 WASM Game
export function renderJuegos() {
  const content = document.getElementById('main-content')!;

  content.innerHTML = `
    <section class="section games-page">
      <div class="container">
        <div class="text-center mb-40">
          <div class="kicker mb-20">/ Laboratorio Creativo</div>
          <h1 class="h-display games-heading">
            Nuestros <span style="background: linear-gradient(135deg, var(--accent-2), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Juegos</span>
          </h1>
          <p style="font-size: 17px; color: var(--fg-2); max-width: 640px; margin: 0 auto;">
            Exploramos nuevas tecnologías como WebAssembly para crear experiencias interactivas.
          </p>
        </div>

        <div class="game-showcase">
          <div class="game-card">
            <div class="game-header">
              <div class="game-icon">🐸</div>
              <div class="game-info">
                <h2 class="game-title">SAP0</h2>
                <span class="game-tech">WebAssembly</span>
              </div>
              <button id="fullscreen-btn" class="btn btn-ghost btn-sm">⛶ Pantalla Completa</button>
            </div>

            <div class="game-container" id="game-container">
              <iframe
                id="game-iframe"
                src="/game/index.html"
                title="SAP0 - Juego WebAssembly"
                allow="autoplay; fullscreen"
                loading="lazy"
              ></iframe>
              <div class="touch-controls" aria-label="Controles táctiles">
                <button class="touch-btn touch-up" data-key="ArrowUp" aria-label="Mover arriba">▲</button>
                <button class="touch-btn touch-left" data-key="ArrowLeft" aria-label="Mover a la izquierda">◀</button>
                <button class="touch-btn touch-down" data-key="ArrowDown" aria-label="Mover abajo">▼</button>
                <button class="touch-btn touch-right" data-key="ArrowRight" aria-label="Mover a la derecha">▶</button>
              </div>
            </div>

            <div class="game-footer">
              <div class="game-controls">
                <span class="control-hint">🎮 Usa las flechas o los controles en pantalla</span>
              </div>
              <div class="game-credits">
                <span style="color: var(--fg-3); font-size: 13px;">Desarrollado por ALO SISTEMAS</span>
              </div>
            </div>
          </div>
        </div>

        <div class="games-cta">
          <div class="text-center">
            <h3 style="font-size: 24px; margin-bottom: 16px; font-family: var(--font-display);">¿Quieres un juego o experiencia interactiva?</h3>
            <p style="color: var(--fg-2); margin-bottom: 24px;">
              Desarrollamos experiencias gamificadas para marketing, capacitación y entretenimiento.
            </p>
            <a href="/contacto" data-link class="btn btn-primary">Consultar Proyecto</a>
          </div>
        </div>
      </div>
    </section>
  `;

  // Setup fullscreen functionality
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const gameContainer = document.getElementById('game-container');
  const gameIframe = document.getElementById('game-iframe') as HTMLIFrameElement;

  if (fullscreenBtn && gameContainer) {
    fullscreenBtn.addEventListener('click', () => {
      if (gameIframe.requestFullscreen) {
        gameIframe.requestFullscreen();
      } else if ((gameIframe as any).webkitRequestFullscreen) {
        (gameIframe as any).webkitRequestFullscreen();
      }
    });
  }

  document.querySelectorAll<HTMLButtonElement>('.touch-btn').forEach(button => {
    const sendKey = (type: 'keydown' | 'keyup') => {
      const key = button.dataset.key!;
      const targetWindow = gameIframe.contentWindow;
      if (!targetWindow) return;
      const keyCodes: Record<string, number> = { ArrowLeft: 37, ArrowUp: 38, ArrowRight: 39, ArrowDown: 40 };
      const createEvent = () => {
        const event = new KeyboardEvent(type, { key, code: key, bubbles: true, cancelable: true });
        Object.defineProperty(event, 'keyCode', { value: keyCodes[key] });
        Object.defineProperty(event, 'which', { value: keyCodes[key] });
        return event;
      };
      targetWindow.dispatchEvent(createEvent());
      targetWindow.document.dispatchEvent(createEvent());
    };

    button.addEventListener('pointerdown', event => {
      event.preventDefault();
      button.setPointerCapture(event.pointerId);
      sendKey('keydown');
    });
    button.addEventListener('pointerup', () => sendKey('keyup'));
    button.addEventListener('pointercancel', () => sendKey('keyup'));
  });
}
