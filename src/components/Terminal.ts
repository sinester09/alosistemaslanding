export class Terminal {
  private lines = [
    { t: 600, type: 'prompt', text: 'alo init --empresa="...."' },
    { t: 1200, type: 'info', text: '→ escaneando operación...' },
    { t: 1800, type: 'info', text: '→ detectando oportunidades...' },
    { t: 2500, type: 'ok', text: '✓ 3 áreas listas para digitalizar' },
    { t: 3000, type: 'ok', text: '✓ ROI estimado: +32% en 6 meses' },
    { t: 3500, type: 'ok', text: '✓ timeline propuesto: 8 semanas' },
    { t: 4200, type: 'accent', text: '◆ agendar diagnóstico gratis →' },
  ];

  private shown = 0;
  private interval: number | null = null;

  constructor(container: HTMLElement) {
    this.render(container);
    this.startAnimation();
  }

  private render(container: HTMLElement) {
    container.innerHTML = `
      <div class="terminal">
        <div class="terminal-header">
          <span class="terminal-dot"></span>
          <span class="terminal-dot"></span>
          <span class="terminal-dot"></span>
          <span class="terminal-title">~/alo-sistemas — diagnóstico</span>
          <span class="terminal-status">● conectado</span>
        </div>
        <div class="terminal-body" id="terminal-lines">
          <div class="terminal-prompt" style="color: var(--fg-3);">
            $ <span class="cursor" style="color: var(--accent-2);">▊</span>
          </div>
        </div>
      </div>
    `;
  }

  private startAnimation() {
    this.interval = window.setInterval(() => {
      if (this.shown >= this.lines.length) {
        this.shown = 0;
        this.clearLines();
      } else {
        this.shown++;
        this.updateLines();
      }
    }, 700);
  }

  private clearLines() {
    const container = document.getElementById('terminal-lines')!;
    container.innerHTML = `
      <div class="terminal-prompt" style="color: var(--fg-3);">
        $ <span class="cursor" style="color: var(--accent-2);">▊</span>
      </div>
    `;
  }

  private updateLines() {
    const container = document.getElementById('terminal-lines')!;
    const lines = this.lines.slice(0, this.shown);

    container.innerHTML = lines.map(line => {
      const colorMap = {
        prompt: 'var(--fg)',
        info: 'var(--fg-2)',
        ok: '#cfd6e8',
        accent: 'var(--accent-2)'
      };

      const color = colorMap[line.type as keyof typeof colorMap];
      const prefix = line.type === 'prompt' ? '<span style="color: var(--fg-3);">$ </span>' : '';

      return `<div class="terminal-line ${line.type}" style="color: ${color};">${prefix}${line.text}</div>`;
    }).join('') + `
      <div class="terminal-prompt" style="color: var(--fg-3); margin-top: 8px;">
        $ <span class="cursor" style="color: var(--accent-2);">▊</span>
      </div>
    `;
  }

  public destroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
