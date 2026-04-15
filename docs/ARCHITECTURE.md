# Arquitetura

Esta pasta descreve o esqueleto inicial do JeitinhoAéreo. O código foi organizado por tipo de responsabilidade:

- `src/data/`: dados estáticos como aeroportos e dicionário de traduções.
- `src/lib/`: utilitários puros (busca de aeroportos, geração simulada de voos, normalização de strings).
- `src/context/` e `src/hooks/`: contexto de idioma e hook seguro para consumo.
- `src/components/ui/`: primitivas reutilizáveis (botão, card, campo, ícone de bandeira).
- `src/components/layout/`: elementos compartilhados como o invólucro da aplicação e o seletor de idiomas.
- `src/components/screens/`: telas do fluxo (`Search`, `Results`, `Booking`, `Confirmation`).
- `src/styles/`: estilos globais e tokens (variáveis de cor e tipografia).

A máquina de estados vive em `src/App.jsx` e controla o fluxo `search → results → booking → done`. Não há dependência de roteador porque o fluxo é linear e curto.
