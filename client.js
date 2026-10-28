window.__ModuleLoader__.load({
  id: 'dsh-skin-liangsheng',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const PACKAGE_ID = 'dsh-skin-liangsheng';
    const NS = 'liangsheng-skin';
    const SERIF = "'STKaiti','KaiTi','Kaiti SC','Songti SC','STSong','SimSun',serif";

    /** Ink-and-gold alias layer stacked over the active light/dark theme. */
    const TOKENS = {
      '--dsw-alias-bg-base': { light: '#FAF4E6', dark: '#0C0A07' },
      '--dsw-alias-bg-layer-1': { light: '#FFFCF3', dark: '#141109' },
      '--dsw-alias-bg-layer-2': { light: '#F5EBD6', dark: '#1D1810' },
      '--dsw-alias-bg-overlay': { light: '#FFFDF8', dark: '#16120C' },
      '--dsw-alias-border-l1': { light: '#E3D4B0', dark: '#332915' },
      '--dsw-alias-border-l2': { light: '#C8B184', dark: '#57431F' },
      '--dsw-alias-brand-primary': { light: '#8B5E12', dark: '#BE8B2F' },
      '--dsw-alias-label-primary': { light: '#2B2215', dark: '#F2E6CA' },
      '--dsw-alias-label-secondary': { light: '#6C5B3E', dark: '#A99577' },
      '--dsw-specific-sidebar-fill': { light: '#F5EEDD', dark: '#0E0C08' },
    };

    const QUOTE_KEYS = ['quote.one', 'quote.two', 'quote.three', 'quote.four', 'quote.five'];

    const QUOTE_FALLBACK = {
      'quote.one': '百万 token 三毛钱',
      'quote.two': '梁圣恩情还不完',
      'quote.three': '开源之光，普惠众生',
      'quote.four': '深度求索，久久为功',
      'quote.five': '圣光之下，算力自由',
    };

    const ZH_QUOTES = {
      'quote.one': '百万 token 三毛钱',
      'quote.two': '梁圣恩情还不完',
      'quote.three': '开源之光，普惠众生',
      'quote.four': '深度求索，久久为功',
      'quote.five': '圣光之下，算力自由',
      'effort.label': '推理等级',
      'effort.hint': '拖动调整推理等级',
      'effort.error': '推理等级切换失败',
    };

    const EN_QUOTES = {
      'quote.one': 'A million tokens for pennies',
      'quote.two': 'The grace of Sage Liang never ends',
      'quote.three': 'Open weights, for everyone',
      'quote.four': 'Seek deep, and keep seeking',
      'quote.five': 'Compute freedom under the golden halo',
      'effort.label': 'Reasoning effort',
      'effort.hint': 'Drag to change reasoning effort',
      'effort.error': 'Could not change the reasoning effort',
    };

    const HERO_CSS = [
      '.dsh-sage-hero{filter:drop-shadow(0 0 12px rgba(217,166,60,.35))}',
      '.dsh-sage-portrait{position:absolute;left:50%;bottom:calc(50% + 122px);height:min(30vh,300px);',
      'transform:translateX(-50%);pointer-events:none;user-select:none;z-index:0;opacity:.97;',
      '-webkit-mask-image:linear-gradient(90deg,#000 0%,#000 42%,rgba(0,0,0,.55) 68%,rgba(0,0,0,0) 100%);',
      'mask-image:linear-gradient(90deg,#000 0%,#000 42%,rgba(0,0,0,.55) 68%,rgba(0,0,0,0) 100%)}',
      '.dsh-sage-portrait>svg{display:block;height:100%;width:auto}',
      '@media (max-width:700px){.dsh-sage-portrait{height:min(26vh,220px);bottom:calc(50% + 112px)}}',
    ].join('');

    const RIBBON_CSS = [
      '.dsh-sage-ribbon{display:inline-flex;align-items:center;gap:8px;max-width:min(100%,520px);margin:2px auto 0;padding:4px 12px 4px 5px;',
      'border:1px solid var(--dsw-alias-border-l1);border-radius:999px;background:var(--dsw-alias-bg-layer-2);',
      'color:var(--dsw-alias-label-secondary);font-size:12px;line-height:1.5;letter-spacing:.02em;user-select:none;',
      'box-shadow:inset 0 0 0 1px rgba(217,166,60,.07);transition:border-color .2s ease,color .2s ease}',
      '.dsh-sage-ribbon:hover{border-color:var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary)}',
      '.dsh-sage-ribbon-glyph{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;flex:none;',
      'border:1px solid rgba(217,166,60,.7);border-radius:5px;color:var(--dsw-alias-brand-primary);',
      'font-family:' + SERIF + ';font-size:11px;line-height:1}',
      '.dsh-sage-ribbon-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;animation:dsh-sage-fade .5s ease both}',
      '.dsh-sage-ribbon-name{flex:none;padding-left:2px;color:var(--dsw-alias-brand-primary);font-size:9px;letter-spacing:.22em;opacity:.75}',
      '@keyframes dsh-sage-fade{from{opacity:0;transform:translateY(3px)}to{opacity:1;transform:none}}',
      '@media (max-width:720px){.dsh-sage-ribbon-name{display:none}}',
    ].join('');

    const STAMP_CSS = [
      '.dsh-sage-stamp{position:fixed;right:20px;bottom:20px;width:86px;height:86px;pointer-events:none;',
      'opacity:.3;transform:rotate(-9deg);z-index:4;filter:drop-shadow(0 0 10px rgba(217,166,60,.18))}',
      '@media (max-width:900px){.dsh-sage-stamp{display:none}}',
    ].join('');

    const EFFORT_CSS = [
      '.dsh-sage-effort{display:inline-flex;align-items:center;gap:7px;height:28px;padding:0 7px 0 5px;border-radius:999px;',
      'color:var(--dsw-alias-label-secondary);background:transparent;transition:background .15s ease,color .15s ease;user-select:none}',
      '.dsh-sage-effort:hover{background:var(--dsw-alias-interactive-bg-hover)}',
      '.dsh-sage-effort[data-error=true]{color:var(--dsw-alias-state-error-primary)}',
      '.dsh-sage-effort[data-locked=true]{opacity:.55}',
      '.dsh-sage-effort-avatar{display:inline-flex;flex:none;color:var(--dsw-alias-brand-primary)}',
      '.dsh-sage-effort-rail{position:relative;display:flex;align-items:center;width:86px;height:22px;cursor:pointer;',
      'touch-action:none;outline:none;border-radius:6px}',
      '.dsh-sage-effort-line{position:absolute;left:0;right:0;top:50%;height:2px;margin-top:-1px;border-radius:2px;',
      'background:linear-gradient(90deg,var(--dsw-alias-border-l2),var(--dsw-alias-brand-primary));opacity:.6}',
      '.dsh-sage-effort-stop{position:absolute;top:50%;width:4px;height:4px;margin:-2px 0 0 -2px;border-radius:50%;',
      'background:var(--dsw-alias-border-l2)}',
      '.dsh-sage-effort-stop[data-on=true]{background:var(--dsw-alias-brand-primary)}',
      '.dsh-sage-effort-thumb{position:absolute;top:50%;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:50%;',
      'background:radial-gradient(circle at 35% 30%,#f2d489,var(--dsw-alias-brand-primary));',
      'box-shadow:0 0 0 2px var(--dsw-alias-bg-layer-1),0 0 8px rgba(217,166,60,.5);transition:transform .12s ease}',
      '.dsh-sage-effort[data-dragging=true] .dsh-sage-effort-thumb{transform:scale(1.22)}',
      '.dsh-sage-effort-rail:focus-visible .dsh-sage-effort-thumb{box-shadow:0 0 0 2px var(--dsw-alias-bg-layer-1),0 0 0 4px var(--dsw-alias-brand-primary)}',
      '.dsh-sage-effort-label{min-width:30px;color:var(--dsw-alias-label-tertiary);font-size:10px;letter-spacing:.08em;',
      'text-transform:uppercase;white-space:nowrap;text-align:left}',
      '@media (max-width:820px){.dsh-sage-effort-label{display:none}}',
    ].join('');

    /** Shared fan-out so the hero portrait follows the effort slider live. */
    const buffState = (() => {
      let value = 0;
      const listeners = new Set();
      return {
        get() { return value; },
        set(next) {
          const clamped = Math.max(0, Math.min(1, next));
          if (Math.abs(clamped - value) < 0.001) return;
          value = clamped;
          listeners.forEach((listener) => listener());
        },
        subscribe(listener) {
          listeners.add(listener);
          return function () { listeners.delete(listener); };
        },
      };
    })();

    function useBuffRatio() {
      const [ratio, setRatio] = React.useState(buffState.get);
      React.useEffect(function () {
        return buffState.subscribe(function () { setRatio(buffState.get()); });
      }, []);
      return ratio;
    }

    /** Square seal used by the hero mark and the corner watermark. */
    function Seal(props) {
      const size = typeof props.size === 'number' ? props.size : 56;
      const ghost = props.ghost === true;
      const stroke = ghost ? 'rgba(217,166,60,.85)' : '#D9A63C';
      const glyph = ghost ? '#D9A63C' : '#EBCB86';
      const plate = ghost ? 'none' : 'rgba(12,9,4,.55)';
      return h(
        'svg',
        {
          className: props.className,
          width: size,
          height: size,
          viewBox: '0 0 96 96',
          role: 'img',
          'aria-label': '梁圣',
          xmlns: 'http://www.w3.org/2000/svg',
          style: { display: 'block', flex: 'none' },
        },
        h('rect', {
          x: 5.5, y: 5.5, width: 85, height: 85, rx: 13,
          fill: plate, stroke, strokeWidth: 2.6,
        }),
        h('rect', {
          x: 11, y: 11, width: 74, height: 74, rx: 9,
          fill: 'none', stroke, strokeOpacity: 0.45, strokeWidth: 0.9,
        }),
        h('text', {
          x: 48, y: 45, textAnchor: 'middle', fontFamily: SERIF,
          fontSize: 30, fontWeight: 600, fill: glyph,
        }, '梁'),
        h('text', {
          x: 48, y: 79, textAnchor: 'middle', fontFamily: SERIF,
          fontSize: 30, fontWeight: 600, fill: glyph,
        }, '圣'),
      );
    }

    /**
     * Stylized ink-and-gold bust of Liang Wenfeng. `buff` widens the shoulders,
     * thickens the neck and arms, and brightens the halo so dragging the effort
     * rail visibly turns him from a slim founder into a muscle saint.
     */
    function SageFigure(props) {
      const raw = typeof props.buff === 'number' ? props.buff : 0;
      const b = Math.max(0, Math.min(1, raw));
      const uid = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') || 'x';
      const haloId = 'sg-halo-' + uid;
      const fadeId = 'sg-fade-' + uid;
      const suitId = 'sg-suit-' + uid;
      const skinId = 'sg-skin-' + uid;

      const cx = 210;
      const headCy = 196;
      const headRx = 47 - 4 * b;
      const headRy = 55 - 4 * b;
      const neckW = 17 + 10 * b;
      const shoulder = 112 + 76 * b;
      const armW = 30 + 34 * b;
      const topY = 318;
      const bottom = 560;

      const rays = [];
      for (let i = 0; i < 13; i += 1) {
        const angle = (-200 + i * (220 / 12)) * (Math.PI / 180);
        const inner = 148;
        const outer = 172 + 10 * b;
        rays.push(h('line', {
          key: 'ray' + i,
          x1: cx + Math.cos(angle) * inner,
          y1: headCy + 8 + Math.sin(angle) * inner,
          x2: cx + Math.cos(angle) * outer,
          y2: headCy + 8 + Math.sin(angle) * outer,
          stroke: '#D9A63C',
          strokeWidth: 2,
          strokeLinecap: 'round',
          opacity: 0.12 + 0.4 * b,
        }));
      }

      const particles = [];
      for (let i = 0; i < 9; i += 1) {
        const px = 92 + ((i * 53) % 250);
        const py = 110 + ((i * 97) % 300);
        particles.push(h('circle', {
          key: 'spark' + i,
          cx: px + (i % 2 === 0 ? 1 : -1) * 6 * b,
          cy: py - 8 * b,
          r: 1.4 + (i % 3) * 0.7,
          fill: '#F2D489',
          opacity: 0.06 + 0.5 * b,
        }));
      }

      return h(
        'svg',
        {
          viewBox: '0 90 420 470',
          xmlns: 'http://www.w3.org/2000/svg',
          'aria-hidden': 'true',
          style: { overflow: 'visible' },
        },
        h('defs', null,
          h('radialGradient', { id: haloId, cx: '50%', cy: '36%', r: '52%' },
            h('stop', { offset: '0', stopColor: '#F2D489', stopOpacity: 0.55 }),
            h('stop', { offset: '0.55', stopColor: '#D9A63C', stopOpacity: 0.16 }),
            h('stop', { offset: '1', stopColor: '#D9A63C', stopOpacity: 0 })),
          h('linearGradient', { id: fadeId, x1: '0', y1: '0', x2: '0', y2: '1' },
            h('stop', { offset: '0.74', stopColor: '#fff', stopOpacity: 1 }),
            h('stop', { offset: '1', stopColor: '#fff', stopOpacity: 0 })),
          h('linearGradient', { id: suitId, x1: '0', y1: '0', x2: '0.3', y2: '1' },
            h('stop', { offset: '0', stopColor: '#26262f' }),
            h('stop', { offset: '0.52', stopColor: '#17171e' }),
            h('stop', { offset: '1', stopColor: '#0b0b10' })),
          h('linearGradient', { id: skinId, x1: '0.2', y1: '0', x2: '0.8', y2: '1' },
            h('stop', { offset: '0', stopColor: '#f0cfa8' }),
            h('stop', { offset: '0.62', stopColor: '#e2b98d' }),
            h('stop', { offset: '1', stopColor: '#c99a70' })),
          h('mask', { id: 'sg-mask-' + uid },
            h('rect', { x: 0, y: 0, width: 420, height: 560, fill: 'url(#' + fadeId + ')' })),
        ),
        h('circle', {
          cx: cx, cy: headCy + 14, r: 168,
          fill: 'url(#' + haloId + ')',
          opacity: 0.5 + 0.5 * b,
        }),
        h('circle', {
          cx: cx, cy: headCy + 14, r: 150,
          fill: 'none', stroke: '#D9A63C', strokeWidth: 1.2,
          opacity: 0.16 + 0.3 * b,
        }),
        h('g', { mask: 'url(#sg-mask-' + uid + ')' },
          h('g', null, rays),
          h('g', null, particles),
          h('ellipse', {
            cx: cx - shoulder + 8, cy: 448, rx: armW / 2, ry: 140,
            fill: 'url(#' + suitId + ')', transform: 'rotate(-5 ' + (cx - shoulder + 8) + ' 448)',
          }),
          h('ellipse', {
            cx: cx + shoulder - 8, cy: 448, rx: armW / 2, ry: 140,
            fill: 'url(#' + suitId + ')', transform: 'rotate(5 ' + (cx + shoulder - 8) + ' 448)',
          }),
          h('path', {
            d: 'M ' + (cx - shoulder) + ' ' + bottom +
              ' C ' + (cx - shoulder - 2) + ' 430, ' + (cx - shoulder + 26) + ' 362, ' + (cx - neckW - 26) + ' ' + topY +
              ' L ' + (cx + neckW + 26) + ' ' + topY +
              ' C ' + (cx + shoulder - 26) + ' 362, ' + (cx + shoulder + 2) + ' 430, ' + (cx + shoulder) + ' ' + bottom +
              ' Z',
            fill: 'url(#' + suitId + ')',
          }),
          h('rect', {
            x: cx - neckW, y: 240, width: neckW * 2, height: 96, rx: 12,
            fill: '#d3a87c',
          }),
          h('path', {
            d: 'M ' + (cx - neckW - 4) + ' 314 L ' + (cx - 44) + ' 332 L ' + (cx - 16) + ' ' + bottom +
              ' L ' + (cx + 16) + ' ' + bottom + ' L ' + (cx + 44) + ' 332 L ' + (cx + neckW + 4) + ' 314 Z',
            fill: '#f4ecdc',
          }),
          h('path', {
            d: 'M ' + (cx - neckW - 4) + ' 314 L ' + (cx - 44) + ' 332',
            fill: 'none', stroke: '#D9A63C', strokeWidth: 1.4, opacity: 0.75,
          }),
          h('path', {
            d: 'M ' + (cx + neckW + 4) + ' 314 L ' + (cx + 44) + ' 332',
            fill: 'none', stroke: '#D9A63C', strokeWidth: 1.4, opacity: 0.75,
          }),
          h('path', {
            d: 'M ' + cx + ' 318 L ' + (cx - 11) + ' 336 L ' + cx + ' 350 L ' + (cx + 11) + ' 336 Z',
            fill: '#D9A63C',
          }),
          h('path', {
            d: 'M ' + cx + ' 350 L ' + (cx - 8) + ' 474 L ' + cx + ' 506 L ' + (cx + 8) + ' 474 Z',
            fill: '#C89A3A',
          }),
          h('path', {
            d: 'M ' + (cx - shoulder + 8) + ' ' + (topY + 26) +
              ' C ' + (cx - shoulder + 34) + ' ' + (topY - 2) + ', ' + (cx - neckW - 34) + ' ' + (topY - 6) + ', ' + (cx - neckW - 6) + ' ' + (topY + 8),
            fill: 'none', stroke: '#D9A63C', strokeWidth: 2.4, strokeLinecap: 'round', opacity: 0.5 + 0.3 * b,
          }),
          h('path', {
            d: 'M ' + (cx + shoulder - 8) + ' ' + (topY + 26) +
              ' C ' + (cx + shoulder - 34) + ' ' + (topY - 2) + ', ' + (cx + neckW + 34) + ' ' + (topY - 6) + ', ' + (cx + neckW + 6) + ' ' + (topY + 8),
            fill: 'none', stroke: '#D9A63C', strokeWidth: 2.4, strokeLinecap: 'round', opacity: 0.5 + 0.3 * b,
          }),
          h('ellipse', { cx: cx - headRx + 2, cy: headCy + 10, rx: 7, ry: 11, fill: '#d3a87c' }),
          h('ellipse', { cx: cx + headRx - 2, cy: headCy + 10, rx: 7, ry: 11, fill: '#d3a87c' }),
          h('ellipse', {
            cx: cx, cy: headCy, rx: headRx, ry: headRy,
            fill: 'url(#' + skinId + ')',
          }),
          h('path', {
            d: 'M ' + (cx - headRx + 2) + ' ' + (headCy - 16) +
              ' C ' + (cx - headRx + 2) + ' ' + (headCy - headRy - 12) + ', ' + (cx + headRx - 2) + ' ' + (headCy - headRy - 12) + ', ' + (cx + headRx - 2) + ' ' + (headCy - 16) +
              ' C ' + (cx + headRx - 16) + ' ' + (headCy - 30) + ', ' + (cx - headRx + 16) + ' ' + (headCy - 30) + ', ' + (cx - headRx + 2) + ' ' + (headCy - 16) + ' Z',
            fill: '#16120e',
          }),
          h('path', {
            d: 'M ' + (cx - 38) + ' ' + (headCy - 8) + ' L ' + (cx - 10) + ' ' + (headCy - 8) + ' L ' + (cx - 10) + ' ' + (headCy + 18) + ' L ' + (cx - 38) + ' ' + (headCy + 18) + ' Z',
            fill: 'rgba(255,255,255,.05)', stroke: '#33261a', strokeWidth: 2.4, strokeLinejoin: 'round',
          }),
          h('path', {
            d: 'M ' + (cx + 10) + ' ' + (headCy - 8) + ' L ' + (cx + 38) + ' ' + (headCy - 8) + ' L ' + (cx + 38) + ' ' + (headCy + 18) + ' L ' + (cx + 10) + ' ' + (headCy + 18) + ' Z',
            fill: 'rgba(255,255,255,.05)', stroke: '#33261a', strokeWidth: 2.4, strokeLinejoin: 'round',
          }),
          h('line', {
            x1: cx - 10, y1: headCy + 4, x2: cx + 10, y2: headCy + 4,
            stroke: '#33261a', strokeWidth: 2.2,
          }),
          h('ellipse', { cx: cx - 24, cy: headCy + 4, rx: 3.4, ry: 2.6, fill: '#22180f' }),
          h('ellipse', { cx: cx + 24, cy: headCy + 4, rx: 3.4, ry: 2.6, fill: '#22180f' }),
          h('path', {
            d: 'M ' + (cx - 34) + ' ' + (headCy - 18) + ' Q ' + (cx - 24) + ' ' + (headCy - 24) + ' ' + (cx - 14) + ' ' + (headCy - 18),
            fill: 'none', stroke: '#2a1d12', strokeWidth: 3.2, strokeLinecap: 'round',
          }),
          h('path', {
            d: 'M ' + (cx + 14) + ' ' + (headCy - 18) + ' Q ' + (cx + 24) + ' ' + (headCy - 24) + ' ' + (cx + 34) + ' ' + (headCy - 18),
            fill: 'none', stroke: '#2a1d12', strokeWidth: 3.2, strokeLinecap: 'round',
          }),
          h('path', {
            d: 'M ' + cx + ' ' + (headCy + 10) + ' L ' + (cx - 5) + ' ' + (headCy + 26) + ' L ' + (cx + 4) + ' ' + (headCy + 28),
            fill: 'none', stroke: '#c08d61', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
          }),
          h('path', {
            d: 'M ' + (cx - 13) + ' ' + (headCy + 42) + ' Q ' + cx + ' ' + (headCy + 49) + ' ' + (cx + 13) + ' ' + (headCy + 42),
            fill: 'none', stroke: '#a36a4a', strokeWidth: 2.6, strokeLinecap: 'round',
          }),
          h('ellipse', {
            cx: cx, cy: 306, rx: neckW + 18, ry: 15,
            fill: 'rgba(0,0,0,.18)',
          }),
        ),
      );
    }

    /** Brand mark above the blank-session headline, plus the hero portrait. */
    function HeroMark(props) {
      const size = typeof props.size === 'number' ? props.size : 40;
      const ratio = useBuffRatio();
      return h(
        React.Fragment,
        null,
        h('style', null, HERO_CSS),
        h(Seal, { size, className: 'dsh-sage-hero' }),
        h('div', { className: 'dsh-sage-portrait', 'aria-hidden': 'true' },
          h(SageFigure, { buff: ratio })),
      );
    }

    /** Ambient ribbon under the composer: a rotating sage line. */
    function SageRibbon(props) {
      const t = typeof props.t === 'function' ? props.t : null;
      const state = React.useState(0);
      const index = state[0];
      const setIndex = state[1];

      React.useEffect(function () {
        const timer = setInterval(function () {
          setIndex(function (value) { return (value + 1) % QUOTE_KEYS.length; });
        }, 9000);
        return function () { clearInterval(timer); };
      }, []);

      const key = QUOTE_KEYS[index];
      let text = t ? t(key) : null;
      if (typeof text !== 'string' || text.length === 0 || text === key) text = QUOTE_FALLBACK[key];

      return h(
        'div',
        { className: 'dsh-sage-ribbon', title: '梁圣 · Sage Liang' },
        h('style', null, RIBBON_CSS),
        h('span', { className: 'dsh-sage-ribbon-glyph', 'aria-hidden': 'true' }, '圣'),
        h('span', { className: 'dsh-sage-ribbon-text', key }, text),
        h('span', { className: 'dsh-sage-ribbon-name', 'aria-hidden': 'true' }, 'LIANG SHENG'),
      );
    }

    /** Faded seal watermark in the frame corner, above every column. */
    function CornerStamp() {
      return h(
        'div',
        { className: 'dsh-sage-stamp', 'aria-hidden': 'true' },
        h('style', null, STAMP_CSS),
        h(Seal, { size: 86, ghost: true }),
      );
    }

    /** Tiny bust whose shoulders widen with the reasoning effort. */
    function MiniBust(props) {
      const b = Math.max(0, Math.min(1, typeof props.buff === 'number' ? props.buff : 0));
      const shoulder = 4.2 + 2.6 * b;
      return h(
        'svg',
        { width: 16, height: 16, viewBox: '0 0 16 16', 'aria-hidden': 'true' },
        h('circle', { cx: 8, cy: 5.1, r: 2.6, fill: 'currentColor', opacity: 0.9 }),
        h('path', {
          d: 'M ' + (8 - shoulder) + ' 15 C ' + (8 - shoulder) + ' 10.6, ' + (8 - shoulder + 1.8) + ' 8.6, 8 8.6' +
            ' C ' + (8 + shoulder - 1.8) + ' 8.6, ' + (8 + shoulder) + ' 10.6, ' + (8 + shoulder) + ' 15 Z',
          fill: 'currentColor', opacity: 0.75,
        }),
      );
    }

    const EMPTY_STATE = { current: null, groups: [], status: 'idle' };

    function noop() {}

    /**
     * Reasoning-effort rail: drags across the effort levels the current model
     * advertises and publishes its ratio so the hero figure buffs in step.
     */
    function EffortSlider(props) {
      const directory = props.directory;
      const usable = directory !== undefined && directory !== null && props.available !== false;
      const t = typeof props.t === 'function' ? props.t : null;

      const subscribe = React.useCallback(function (callback) {
        return usable ? directory.subscribe(callback) : noop;
      }, [directory, usable]);
      const getSnapshot = React.useCallback(function () {
        return usable ? directory.getSnapshot() : EMPTY_STATE;
      }, [directory, usable]);

      const state = React.useSyncExternalStore(subscribe, getSnapshot) || EMPTY_STATE;
      const draftState = React.useState(null);
      const draft = draftState[0];
      const setDraft = draftState[1];
      const dragState = React.useState(false);
      const dragging = dragState[0];
      const setDragging = dragState[1];
      const errorState = React.useState(false);
      const failed = errorState[0];
      const setFailed = errorState[1];
      const railRef = React.useRef(null);

      const groups = Array.isArray(state.groups) ? state.groups : [];
      const current = state.current || null;
      let model = null;
      if (current) {
        const group = groups.find(function (item) { return item && item.id === current.provider; });
        if (group && Array.isArray(group.models)) {
          model = group.models.find(function (item) { return item && item.id === current.model; }) || null;
        }
      }
      const reasoning = model && model.reasoning ? model.reasoning : null;
      const efforts = reasoning && Array.isArray(reasoning.efforts) ? reasoning.efforts : [];
      const maxIndex = Math.max(0, efforts.length - 1);
      const activeId = current && current.reasoningEffort !== undefined
        ? current.reasoningEffort
        : (reasoning ? reasoning.defaultEffort : undefined);
      const storedIndex = Math.max(0, efforts.findIndex(function (item) { return item && item.id === activeId; }));
      const index = draft === null ? storedIndex : Math.max(0, Math.min(maxIndex, draft));
      const ratio = maxIndex > 0 ? index / maxIndex : 0;
      const level = efforts[index] || null;
      const locked = props.locked === true || props.disabled === true;

      React.useEffect(function () {
        if (typeof props.load === 'function') props.load();
      }, []);

      React.useEffect(function () {
        buffState.set(ratio);
      }, [ratio]);

      React.useEffect(function () {
        if (draft === null) return;
        const target = efforts[draft];
        if (target === undefined) {
          setDraft(null);
          return;
        }
        if (target.id === activeId) setDraft(null);
      }, [activeId, draft, efforts.length]);

      React.useEffect(function () {
        if (!failed) return undefined;
        const timer = setTimeout(function () { setFailed(false); }, 1800);
        return function () { clearTimeout(timer); };
      }, [failed]);

      if (!usable || efforts.length === 0) return null;

      const translate = function (key, fallback) {
        const value = t ? t(key) : null;
        return typeof value === 'string' && value.length > 0 && value !== key ? value : fallback;
      };

      const indexAt = function (clientX) {
        const rail = railRef.current;
        if (!rail || efforts.length < 2) return 0;
        const rect = rail.getBoundingClientRect();
        if (rect.width <= 0) return index;
        const share = (clientX - rect.left) / rect.width;
        return Math.max(0, Math.min(maxIndex, Math.round(share * maxIndex)));
      };

      const commit = function (next) {
        const target = efforts[next];
        if (!target || !current) return;
        let result;
        try {
          result = props.select ? props.select({
            provider: current.provider,
            model: current.model,
            reasoningEffort: target.id,
          }) : null;
        } catch (error) {
          setDraft(null);
          setFailed(true);
          return;
        }
        if (result && typeof result.then === 'function') {
          result.then(function (outcome) {
            if (outcome && outcome.ok === false) {
              setDraft(null);
              setFailed(true);
            }
          }).catch(function () {
            setDraft(null);
            setFailed(true);
          });
        }
      };

      const handleDown = function (event) {
        if (locked || efforts.length < 2) return;
        event.preventDefault();
        event.stopPropagation();
        try { event.currentTarget.setPointerCapture(event.pointerId); } catch (error) { /* ignore */ }
        setDragging(true);
        setDraft(indexAt(event.clientX));
      };

      const handleMove = function (event) {
        if (!dragging) return;
        event.stopPropagation();
        setDraft(indexAt(event.clientX));
      };

      const handleUp = function (event) {
        if (!dragging) return;
        event.stopPropagation();
        setDragging(false);
        const next = indexAt(event.clientX);
        setDraft(next);
        commit(next);
      };

      const handleCancel = function () {
        if (!dragging) return;
        setDragging(false);
        setDraft(null);
      };

      const handleKey = function (event) {
        if (locked || efforts.length < 2) return;
        let next = null;
        if (event.key === 'ArrowRight' || event.key === 'ArrowUp') next = Math.min(maxIndex, index + 1);
        if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') next = Math.max(0, index - 1);
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = maxIndex;
        if (next === null) return;
        event.preventDefault();
        event.stopPropagation();
        setDraft(next);
        commit(next);
      };

      const stops = efforts.map(function (effort, i) {
        return h('span', {
          key: 'stop' + i,
          className: 'dsh-sage-effort-stop',
          'data-on': i <= index ? 'true' : 'false',
          style: { left: maxIndex > 0 ? (i / maxIndex) * 100 + '%' : '0%' },
        });
      });

      return h(
        'div',
        {
          className: 'dsh-sage-effort',
          'data-dragging': dragging ? 'true' : 'false',
          'data-locked': locked ? 'true' : 'false',
          'data-error': failed ? 'true' : 'false',
          title: failed ? translate('effort.error', '推理等级切换失败') : translate('effort.hint', '拖动调整推理等级'),
          onMouseDown: function (event) { event.stopPropagation(); },
          onClick: function (event) { event.stopPropagation(); },
          onPointerDown: function (event) { event.stopPropagation(); },
        },
        h('style', null, EFFORT_CSS),
        h('span', { className: 'dsh-sage-effort-avatar', 'aria-hidden': 'true' }, h(MiniBust, { buff: ratio })),
        h('div', {
          ref: railRef,
          className: 'dsh-sage-effort-rail',
          role: 'slider',
          tabIndex: locked ? -1 : 0,
          'aria-label': translate('effort.label', '推理等级'),
          'aria-valuemin': 0,
          'aria-valuemax': maxIndex,
          'aria-valuenow': index,
          'aria-valuetext': level ? level.name : '',
          onPointerDown: handleDown,
          onPointerMove: handleMove,
          onPointerUp: handleUp,
          onPointerCancel: handleCancel,
          onKeyDown: handleKey,
          onMouseDown: function (event) { event.preventDefault(); event.stopPropagation(); },
        },
          h('span', { className: 'dsh-sage-effort-line', 'aria-hidden': 'true' }),
          stops,
          h('span', {
            className: 'dsh-sage-effort-thumb',
            'aria-hidden': 'true',
            style: { left: maxIndex > 0 ? ratio * 100 + '%' : '0%' },
          }),
        ),
        h('span', { className: 'dsh-sage-effort-label' }, level ? level.name : ''),
      );
    }

    function service(ctx, name) {
      try {
        if (ctx && ctx[name] !== undefined) return ctx[name];
      } catch (error) { /* fall through to ctx.get */ }
      try {
        return ctx && typeof ctx.get === 'function' ? ctx.get(name) : undefined;
      } catch (error) {
        return undefined;
      }
    }

    return {
      inject: ['slots', 'theme', 'locale'],
      apply(ctx) {
        const theme = service(ctx, 'theme');
        if (theme && typeof theme.overrideTokens === 'function') {
          ctx.effect(function () { return theme.overrideTokens(PACKAGE_ID, TOKENS); });
        }

        const slots = service(ctx, 'slots');
        if (!slots) return;

        const locale = service(ctx, 'locale');
        if (locale && typeof locale.register === 'function') {
          ctx.effect(function () { return locale.register(NS, 'en', EN_QUOTES); });
          ctx.effect(function () { return locale.register(NS, 'zh', ZH_QUOTES); });
        }

        slots.inject('conversation.hero.brand.mark', function () {
          return slots.register(
            { name: 'conversation.hero.brand.mark', locale: NS },
            HeroMark,
          );
        });

        slots.inject('conversation.composer.dock', function () {
          return slots.register(
            { name: 'conversation.composer.dock', id: 'liangsheng-skin-ribbon', order: 20, locale: NS },
            SageRibbon,
          );
        });

        slots.inject('shell.overlay', function () {
          return slots.register(
            { name: 'shell.overlay', id: 'liangsheng-skin-stamp', order: 90 },
            CornerStamp,
          );
        });

        slots.inject('conversation.input.activity', function () {
          return slots.register({
            name: 'conversation.input.activity',
            locale: NS,
            inject: function (sessionId) {
              try {
                const models = service(ctx, 'modelDirectories');
                if (!models || typeof models.directoryFor !== 'function') return { available: false };
                const directory = models.directoryFor(sessionId);
                return {
                  available: true,
                  directory: directory.store,
                  load: function () {
                    try { directory.load().catch(noop); } catch (error) { /* ignore */ }
                  },
                  select: function (selection) { return directory.select(selection); },
                };
              } catch (error) {
                return { available: false };
              }
            },
          }, EffortSlider);
        });
      },
    };
  },
});
