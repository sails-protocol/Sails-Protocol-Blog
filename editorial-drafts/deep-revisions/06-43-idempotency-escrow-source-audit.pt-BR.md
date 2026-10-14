# Idempotência e escrow: o que o código realmente garante

*Material editorial com fontes para os artigos 06, 08, 37 e 43. Rascunho, sem aprovação para publicação.*

## Uma requisição que falha depois de ter funcionado

Imagine um comprador aceitando uma oferta. O registro da negociação é persistido, mas a emissão posterior de um evento falha e a API retorna erro. Repetir a requisição não significa necessariamente iniciar outra negociação. Tratar o erro como prova de ausência de efeitos pode criar uma segunda operação.

No código examinado do Sails, `TradeService.createTrade()` chama `withIdempotency()` com escopo `openp2p.trade.create`, identificação do participante, dados de oferta e valor e uma **chave de idempotência opcional** fornecida pelo cliente. Sem a chave, repetir a chamada pode criar outra negociação. É uma garantia delimitada, não uma promessa universal de execução exatamente uma vez.

A implementação comum documenta falhas anteriores: persistência bem-sucedida seguida de erro ao registrar conclusão; concorrência entre tentativas de recuperar uma operação falha; e exceções após a persistência interpretadas como se nada tivesse sido gravado. O desenho separa persistência dos efeitos posteriores e prevê reivindicação atômica e tratamento de resultado desconhecido. Isso descreve o código, não um novo teste de produção.

## Escrow não significa um único modelo de custódia

O provedor WDK EVM de referência declara que uma única seed mantida pelo servidor controla a tesouraria e as subcontas de escrow. O próprio código o classifica como **inelegível para produção**. Uma aprovação dupla na aplicação não transforma essa estrutura em multisig on-chain.

Já o provedor MULTISIG Bitcoin descreve chaves do comprador e do vendedor mantidas pelos próprios clientes, chave do árbitro no servidor e coleta de assinaturas independentes em PSBTs. O LIGHTNING_HODL baseado em Arkade descreve fluxo relacionado de assinaturas, mas limita explicitamente seu escopo a testnet/mutinynet. São fronteiras de confiança e ambientes de verificação diferentes.

## Consequência arquitetural

Um artigo técnico precisa identificar operação, provedor, titular das chaves, limiar de assinatura, ambiente e evidência de verificação. Termos como 'não custodial', 'idempotente' e 'exatamente uma vez' não podem ser aplicados indistintamente ao protocolo inteiro.

## Próxima pergunta

Quais provedores, configurações e evidências end-to-end estão autorizados para o Day 0? Essa resposta depende do CTO e do gate de lançamento, não deste artigo.

## Source ledger

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/common/idempotency.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/wdk-settlement.provider.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/multisig.provider.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/lightning-hodl.provider.ts

**Maturity:** source-inspected, runtime verification pending. CTO review pending.
