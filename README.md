# Empilha!

Jogo de habilidade desenvolvido com React e Vite. O objetivo é soltar blocos no momento certo para construir a torre mais alta possível.

## Requisitos atendidos

- Aplicação desenvolvida em React com componentes reutilizáveis.
- Interface responsiva para computador e celular.
- Projeto versionado com Git e preparado para publicação no GitHub.
- Deploy configurado para a Vercel por meio do arquivo `vercel.json`.
- Jogo executado localmente no navegador, sem IA, backend, API ou banco de dados.

## Funcionalidades

- Bloco que se move automaticamente pela área do jogo.
- Controle pelo botão, clique no tabuleiro, tecla Espaço ou seta para baixo.
- Pontuação, recorde salvo no navegador e níveis com aumento gradual de velocidade.
- Bônus por encaixe preciso e sistema de combo.
- Feedback visual para bons encaixes, encaixes perfeitos e fim de rodada.
- Torre com rolagem vertical automática conforme o jogador sobe.
- Layout profissional, acessível e adaptado para telas menores.

## Tecnologias

- React
- Vite
- JavaScript
- CSS
- Git e GitHub
- Vercel

## Como executar localmente

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

Para gerar e testar o build de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```text
src/
├── components/
│   ├── Footer.jsx
│   ├── Game.jsx
│   ├── GameBoard.jsx
│   ├── Header.jsx
│   ├── HowToPlay.jsx
│   └── ScoreBoard.jsx
├── App.jsx
├── main.jsx
└── styles.css
```

## Versionamento e publicação

Depois de criar um repositório vazio no GitHub, configure o endereço remoto e envie a branch principal:

```bash
git init
git add .
git commit -m "feat: cria jogo de empilhar blocos"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

Na Vercel, importe o repositório do GitHub usando estas configurações:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

Após o primeiro deploy, cada novo `git push` na branch `main` poderá gerar uma nova publicação automaticamente.

## Autoria

Jeniffer
