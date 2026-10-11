# Máquinas de estados e invariantes econômicos na prática

*Somente rascunho. Publicação não aprovada. Season 5, article 29.*

## Pergunta

Uma máquina de estados é útil porque uma ação econômica precisa ter significado preciso. Uma negociação não pode ficar simultaneamente concluída e em disputa por causa de requisições concorrentes contraditórias.

## Limite e desenho

Modele transições permitidas separadamente dos efeitos externos. Um participante autenticado solicita uma transição, uma autoridade persistente verifica pré-condições e apenas um resultado válido é confirmado. Respostas do provedor e tentativas repetidas do cliente são entradas, não prova automática de autorização.

## Falha e evidência

O diagrama representa uma invariante ilustrativa, não a máquina de estados canônica de produção. O próximo passo é comparar cada transição com definições do código e testes adversariais em commit imutável.

## Decisão: tornar duráveis as transições terminais

O serviço de negociação examinado protege explicitamente estados terminais contra sobrescrita manual por meio de `MANUAL_TRADE_TRANSITIONS`. É uma fronteira concreta no código, não prova de atomicidade de todo efeito econômico distribuído. O participante precisa estar autorizado, a transição precisa ser válida para o estado persistido e requisições concorrentes não podem gerar resultados terminais incompatíveis. Os invariantes descrevem obrigações normativas mais amplas; cada implementação exige testes próprios.

## Falha: requisição atrasada reescreve a história

Duas requisições competem: uma conclui a negociação, outra tenta disputar ou cancelar com base em estado antigo. Verificar antes de gravar, sem controle durável de concorrência, pode levar ambos os clientes a acreditar que venceram. O teste de aceitação precisa usar transações reais no Postgres, workers concorrentes, inspeção da linha final e eventos, seguida de reinício e replay. Inspeção do código não certifica esse resultado no HEAD atual.

## Evidência e próxima pergunta

- [Serviço de negociação](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)
- [Invariantes do protocolo](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROTOCOL_INVARIANTS.md)

*Inspeção de fonte, não novo teste de conformidade.* Quais transições têm prova de concorrência e reinício no SHA exato?
