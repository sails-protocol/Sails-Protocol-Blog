# Escrow não custodial e autoridade de disputa

*Season 7 / Temporada 7. Rascunho editorial. Fontes e revisão do CTO pendentes.*

## Pergunta

O vendedor bloqueia um ativo e o comprador afirma ter pago. Quem pode liberar o ativo quando as versões entram em conflito?

## Limite e decisão

Distinga custódia das chaves, controle do mecanismo de bloqueio, decisão da disputa e execução da liberação. A alegação de não custódia precisa descrever script, assinaturas e recuperação reais, não apenas dizer que a plataforma não guarda a seed.

## Falha e evidência

Uma negociação em disputa atinge o prazo enquanto o árbitro está indisponível. O comportamento seguro depende da política de escrow e timeout específica; um diagrama genérico não prova recuperabilidade. Verifique redes suportadas e cenários adversariais no código.

*No production implementation or publication approval is asserted.*
