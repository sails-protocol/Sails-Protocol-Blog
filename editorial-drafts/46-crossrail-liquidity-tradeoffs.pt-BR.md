# Liquidação entre redes e escolhas de roteamento de liquidez

*Season 7 / Temporada 7. Rascunho editorial. Fontes e revisão do CTO pendentes.*

## Pergunta

O comprador possui um ativo numa rede e o vendedor quer receber valor em outra. O roteamento pode conectar os dois, mas introduz falhas e custos distintos.

## Limite e decisão

Separe cotação, execução de swap, custódia de pontes ou provedores, política de confirmações e liquidação final. O Sails pode coordenar fluxos sem possuir liquidez, mas garantias de rotas externas não podem ser atribuídas ao protocolo.

## Falha e evidência

Um provedor confirma a cotação, mas falha antes do swap. A recuperação precisa preservar o último estado confirmado e expor o risco residual. Não publique matriz de redes suportadas sem conferir os adaptadores.

*No production implementation or publication approval is asserted.*
