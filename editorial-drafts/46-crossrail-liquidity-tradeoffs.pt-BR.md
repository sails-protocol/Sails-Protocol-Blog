# Liquidação entre redes e escolhas de roteamento de liquidez

*Temporada 7. Rascunho editorial. Fontes e revisão do CTO pendentes.*

## Pergunta

O comprador possui um ativo numa rede e o vendedor quer receber valor em outra. O roteamento pode conectar os dois, mas introduz falhas e custos distintos.

## Limite e decisão

Separe cotação, execução de swap, custódia de pontes ou provedores, política de confirmações e liquidação final. O Sails pode coordenar fluxos sem possuir liquidez, mas garantias de rotas externas não podem ser atribuídas ao protocolo.

## Falha e evidência

Um provedor confirma a cotação, mas falha antes do swap. A recuperação precisa preservar o último estado confirmado e expor o risco residual. Não publique matriz de redes suportadas sem conferir os adaptadores.

*Não há alegação de implementação em produção nem aprovação para publicação.*

## Limite verificado no código: mapear ativos não é construir uma ponte

O mapeamento padrão de escrow examinado é `BTC → MULTISIG`, `LN_BTC → LIGHTNING_HODL` e `USDT_ERC20 → WDK_USDT_EVM`. São recomendações registradas no código, **não** evidência de elegibilidade para produção; o provedor WDK declara explicitamente que não é elegível. Outros ativos não possuem mapeamento padrão real nesse registro.

A construção de taxa também está declarada apenas para MULTISIG. A existência de vários provedores não comprova swap cross-chain atômico, finalidade compartilhada ou roteamento de liquidez implantado. Verifique separadamente ponte externa, cotação, custódia e recuperação.

### Fonte primária e revisão

- [Provider registry, custody metadata, default asset routing and fee capability](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts)
- [WDK custody](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/wdk-settlement.provider.ts)
- [SAFE_GUARD_EVM verification limits](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/safe-guard-evm.provider.ts)

*Correção editorial baseada em fontes; aprovação do CTO, verificação de implantação e publicação em produção ainda pendentes.*
