* {
  box-sizing: border-box;
}

:root {
  --bg: #f4f7f8;
  --panel: #ffffff;
  --panel-alt: #edf7f5;
  --ink: #17212a;
  --muted: #576875;
  --line: rgba(17, 24, 39, 0.08);
  --brand: #0b6d5a;
  --brand-strong: #0a5a4c;
  --accent: #d8f2eb;
  --shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #f7faf9 0%, #eef5f5 100%);
  color: var(--ink);
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  border: none;
  font: inherit;
  cursor: pointer;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(247, 250, 249, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 74px;
  gap: 16px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--brand), var(--brand-strong));
  color: white;
  font-size: 0.9rem;
}

nav {
  display: flex;
  gap: 22px;
  color: var(--muted);
  font-weight: 500;
}

.nav-button,
.primary,
.secondary {
  border-radius: 999px;
  padding: 12px 18px;
  font-weight: 600;
}

.nav-button,
.primary {
  background: linear-gradient(135deg, var(--brand), var(--brand-strong));
  color: white;
  box-shadow: var(--shadow);
}

.secondary {
  background: white;
  color: var(--ink);
  border: 1px solid var(--line);
}

.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 32px;
  padding: 64px 0 40px;
}

.eyebrow {
  margin: 0 0 12px;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--brand);
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.7rem, 4.5vw, 4.7rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.lede {
  max-width: 620px;
  margin: 18px 0 0;
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--muted);
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 26px;
}

.mini-stats {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  padding: 0;
  margin: 30px 0 0;
}

.mini-stats li {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 120px;
}

.mini-stats strong {
  font-size: 1.35rem;
}

.mini-stats span {
  color: var(--muted);
  font-size: 0.9rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.feature-card {
  width: min(460px, 100%);
  padding: 28px;
  border-radius: 30px;
  background: linear-gradient(160deg, rgba(11, 109, 90, 0.1), rgba(255, 255, 255, 0.96));
  border: 1px solid rgba(11, 109, 90, 0.08);
  box-shadow: var(--shadow);
}

.card-top,
.property-head,
.meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.status {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 7px 12px;
  font-size: 0.8rem;
  font-weight: 700;
}

.status.live {
  background: rgba(11, 109, 90, 0.12);
  color: var(--brand-strong);
}

.price {
  font-size: 1.1rem;
  font-weight: 700;
}

.feature-card h3 {
  margin: 22px 0 10px;
  font-size: clamp(1.6rem, 2vw, 2.2rem);
}

.feature-card p {
  margin: 0;
  color: var(--muted);
}

.amenities {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.amenities span {
  background: white;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 8px 10px;
  font-size: 0.8rem;
  color: var(--muted);
}

.listings,
.workflow {
  padding: 52px 0 18px;
}

.section-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.center {
  justify-content: center;
  text-align: center;
}

.section-header h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.6rem);
  letter-spacing: -0.05em;
}

.section-header a {
  color: var(--brand);
  font-weight: 600;
}

.property-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.property-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.property-image {
  height: 220px;
  background-size: cover;
  background-position: center;
}

.image-one {
  background: linear-gradient(135deg, rgba(124, 152, 174, 0.36), rgba(66, 86, 103, 0.7)), url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80');
}

.image-two {
  background: linear-gradient(135deg, rgba(123, 160, 128, 0.4), rgba(55, 90, 77, 0.7)), url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80');
}

.image-three {
  background: linear-gradient(135deg, rgba(152, 138, 120, 0.35), rgba(90, 79, 70, 0.65)), url('https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80');
}

.property-body {
  padding: 18px 18px 22px;
}

.property-head h3 {
  margin: 0;
  font-size: 1.2rem;
}

.property-head span {
  background: var(--accent);
  color: var(--brand-strong);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.72rem;
  font-weight: 700;
}

.property-body p {
  margin: 10px 0 16px;
  color: var(--muted);
}

.meta-row {
  font-size: 0.88rem;
  color: var(--muted);
}

.timeline {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
  margin-top: 24px;
}

.step {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 24px 20px;
  box-shadow: var(--shadow);
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  margin-bottom: 18px;
  background: var(--accent);
  color: var(--brand-strong);
  font-weight: 700;
}

.step h3 {
  margin: 0 0 10px;
  font-size: 1.25rem;
}

.step p {
  margin: 0;
  line-height: 1.7;
  color: var(--muted);
}

.info-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 24px;
  padding: 52px 0 80px;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 26px;
  padding: 26px;
  box-shadow: var(--shadow);
}

.panel h3 {
  margin: 0 0 14px;
  font-size: 1.8rem;
  letter-spacing: -0.04em;
}

.panel ul {
  margin: 0;
  padding-left: 20px;
  color: var(--muted);
  line-height: 2;
}

.accent {
  background: linear-gradient(180deg, rgba(13, 124, 102, 0.08), rgba(255, 255, 255, 1));
}

.status-stack {
  display: grid;
  gap: 16px;
  margin-top: 20px;
  color: var(--ink);
  font-weight: 500;
}

.status-stack div {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.green { background: #2f9a62; }
.dot.yellow { background: #d7a531; }
.dot.blue { background: #2e7fd9; }
.dot.purple { background: #7a5af8; }

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 0 0 32px;
  color: var(--muted);
  font-size: 0.9rem;
}

@media (max-width: 900px) {
  .hero,
  .info-grid,
  .property-grid,
  .timeline {
    grid-template-columns: 1fr;
  }

  nav {
    display: none;
  }

  .hero {
    padding-top: 32px;
  }

  .section-header,
  .footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
