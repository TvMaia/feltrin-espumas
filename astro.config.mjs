import { defineConfig } from 'astro/config';

// O domínio final (feltrinsolucoes.com.br) ainda roda WordPress. Até a
// aprovação, o site é publicado no GitHub Pages como preview. Para migrar,
// trocar `site` pelo domínio final e remover `base`.
export default defineConfig({
  site: 'https://tvmaia.github.io',
  base: '/feltrin-espumas',
  build: { inlineStylesheets: 'auto' },
  server: { host: true, port: Number(process.env.PORT) || 4321 },
});
