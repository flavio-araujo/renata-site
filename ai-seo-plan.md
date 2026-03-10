## Plano de Otimização para SEO Tradicional e Buscas em Ferramentas de IA

### 1. Objetivos
- **SEO tradicional (Google/Bing)**: garantir que a página `index.html` seja facilmente rastreável, bem compreendida e elegível a aparecer em resultados orgânicos e rich results (cartões locais, rich snippet, etc.).
- **AI SEO / AEO (Answer Engine Optimization)**: aumentar a chance de o site ser citado como fonte em respostas de ferramentas como ChatGPT, Gemini, Perplexity, Claude e Copilot.

---

### 2. Ajustes rápidos no `index.html`
- **URLs absolutas e HTTPS**
  - Trocar todas as referências de URL nas metas e no JSON-LD para a versão **HTTPS** e absoluta do site, por exemplo:
    - `https://renatagoncalves.com/` (em vez de `http://...`).
    - Atualizar `og:url`, `twitter:url`, `url` no JSON-LD e qualquer outra referência.
- **Imagem principal consistente**
  - Garantir que a imagem usada em:
    - `og:image`
    - `twitter:image`
    - `image` no JSON-LD  
    seja a mesma, com URL absoluta (ex.: `https://renatagoncalves.com/renata-miranda-goncalves.webp` ou `.jpeg`) e realmente existente no servidor.
- **Tag canonical**
  - Adicionar em `<head>`:
    - `<link rel="canonical" href="https://renatagoncalves.com/">`
  - Ajuda o Google e ferramentas baseadas em Bing/Google a entender qual é a URL principal.
- **Limpeza de scripts duplicados de Analytics**
  - Hoje há um `gtag.js` carregado direto e outro carregado de forma preguiçosa (função `loadGtag`). Manter apenas uma estratégia para evitar duplicidade de pageviews.
- **Metas complementares**
  - Opcional, mas positivo:
    - `meta name="author" content="Psicóloga Renata Miranda Gonçalves">`
    - `meta name="geo.region" content="BR-SP">`
    - `meta name="geo.placename" content="São José dos Campos">`

---

### 3. Estrutura de conteúdo para SEO e AEO
- **Reforçar semântica com headings**
  - Manter apenas um `h1` principal (já está ok: terapias em São José dos Campos).
  - Usar `h2` e `h3` para organizar dúvidas que pacientes costumam digitar/perguntar:
    - Ex.: `h2` “O que é terapia de casal?”, `h2` “Quando procurar terapia de família?”, `h2` “Como funciona a primeira sessão gratuita?”, etc.
- **Criar seções orientadas a perguntas e respostas**
  - Adicionar uma área de **FAQ** no final da página com perguntas reais:
    - “Quanto tempo dura uma sessão de terapia de casal?”
    - “A terapia pode ser on-line?”
    - “Qual é o valor da sessão?” (se não puder exibir preço, explicar política de valores).
  - Cada pergunta em `h3` e resposta em parágrafo direto, em linguagem natural.
- **Conteúdo detalhado por tipo de serviço**
  - Idealmente criar páginas separadas (futuro):
    - `/terapia-de-casal`
    - `/terapia-de-familia`
    - `/terapia-online`  
  - Cada página focada em:
    - definição,
    - para quem é,
    - benefícios,
    - como funciona na prática,
    - principais dúvidas.
  - Isso ajuda tanto o Google quanto os modelos de IA a entenderem o contexto e escolherem a sua página como fonte específica.

---

### 4. Dados estruturados (Schema.org) focados em IA
- **Ajustar JSON-LD de `ProfessionalService`**
  - Usar URLs absolutas em:
    - `"image"`
    - `"url"`
    - `"sameAs"`
  - Incluir um `"@id"` único, por exemplo:
    - `"@id": "https://renatagoncalves.com/#consultorio"`
  - Conferir se o tipo está adequado: `ProfessionalService` está ok; opcionalmente pode-se avaliar `Psychologist` ou `LocalBusiness` em páginas futuras.
- **Adicionar FAQPage para a seção de perguntas**
  - Criar um segundo bloco `application/ld+json` com:
    - `"@type": "FAQPage"`
    - `"mainEntity"` com lista de `"Question"` e `"acceptedAnswer"`.
  - Isso ajuda Google e ferramentas baseadas em Google/Bing a extrair respostas diretas.
- **Marcação de Local Business (opcional, porém recomendado)**
  - Em uma próxima etapa, adicionar um JSON-LD específico de local:
    - telefone, endereço completo, horário, mesmo `@id` e `sameAs` que o restante.
  - Gera consistência para Knowledge Graph (principalmente para Google / Gemini).

---

### 5. Infraestrutura técnica
- **HTTPS obrigatório**
  - Garantir que o domínio use sempre HTTPS e que exista redirecionamento 301 de `http://` -> `https://`.
- **Sitemap e robots**
  - Criar `sitemap.xml` com:
    - Home (`/`)
    - Futuras páginas de serviços (`/terapia-de-casal`, etc.)
  - Em `robots.txt` (na raiz do domínio), adicionar:
    - `Sitemap: https://renatagoncalves.com/sitemap.xml`
- **Performance e mobile**
  - Verificar no PageSpeed Insights:
    - tempo de carregamento em 4G,
    - tamanho das imagens (`webp`, compressão),
    - uso de `preload` e `defer` (já há alguns cuidados bons aqui).
  - Ajustar o que tiver maior impacto (LCP, CLS) para melhorar experiência; isso também influencia Google e, indiretamente, quais páginas as IAs consideram de qualidade.

---

### 6. Presença em ecossistemas que alimentam ferramentas de IA
- **Google**
  - Ter e manter atualizado o **Perfil de Empresa no Google (Google Business Profile)**:
    - categoria correta (psicóloga / terapeuta de casal),
    - endereço idêntico ao do site,
    - telefone idêntico,
    - link para o site,
    - fotos próprias do consultório.
  - Incentivar avaliações de pacientes (sem quebrar sigilo): isso fortalece sinais de confiança.
- **Bing / Microsoft**
  - Garantir que o site esteja no **Bing Webmaster Tools**.
  - Isso é importante porque ChatGPT/Copilot usam fortemente o índice do Bing.
- **Outros diretórios confiáveis**
  - Cadastrar-se em:
    - Conselhos / diretórios de psicologia,
    - Portais de saúde confiáveis (por ex. Doctoralia, se fizer sentido).
  - Sempre com NAP (Name, Address, Phone) idêntico ao do site, reforçando consistência da entidade “Psicóloga Renata Miranda Gonçalves”.

---

### 7. Conteúdo orientado a buscas em IA (AEO / GEO)
- **Formato de resposta que IAs gostam de citar**
  - Textos com:
    - definição curta logo no início (“Em resumo, terapia de casal é...”),
    - depois explicação detalhada em parágrafos,
    - listas numeradas para passos (ex.: “Como funciona a primeira sessão?”),
    - conclusão prática (por exemplo, quando procurar ajuda).
- **Linguagem clara e segura**
  - Evitar excesso de termos vagos (“talvez”, “pode ser que”) nos trechos principais.
  - Mostrar clareza e experiência profissional, mantendo ética (sem promessas de cura).
- **Explorar intenções de busca reais**
  - Produzir conteúdo respondendo perguntas como:
    - “Como saber se meu relacionamento precisa de terapia?”
    - “Terapia de família ajuda em conflitos com filhos adolescentes?”
    - “Terapia de casal funciona em caso de traição?”
  - Isso pode ser feito em posts complementares (blog futuramente) ou em seções mais completas na própria home.

---

### 8. Monitoramento e melhorias contínuas
- **Verificação de indexação**
  - Conferir se a página está indexada em:
    - Google (`site:renatagoncalves.com`)
    - Bing (mesmo comando).
- **Testes de rich results**
  - Usar a ferramenta oficial de testes de resultados avançados do Google para conferir o JSON-LD (ProfessionalService + FAQPage + LocalBusiness quando existir).
- **Acompanhamento em ferramentas de IA**
  - Periodicamente, testar em:
    - ChatGPT (com navegação ou plugins de busca),
    - Gemini,
    - Perplexity,
    - Copilot,
  - Perguntando por termos como “psicóloga de casal em São José dos Campos Renata Miranda Gonçalves” e checar se o site é citado.

---

### 9. Prioridades sugeridas (ordem prática)
1. **Ajustar URLs para HTTPS, adicionar canonical e revisar metas (título/descrição/og/twitter) para consistência.**
2. **Atualizar JSON-LD de `ProfessionalService` com URLs absolutas e adicionar bloco `FAQPage`.**
3. **Criar seção de FAQ em HTML com perguntas e respostas reais.**
4. **Criar `sitemap.xml` e `robots.txt` com referência ao sitemap.**
5. **Reforçar conteúdo orientado a dúvidas comuns (podendo futuramente criar páginas específicas para cada tipo de terapia).**
6. **Fortalecer Google Business Profile, Bing Webmaster Tools e diretórios confiáveis de psicologia/saúde.**

