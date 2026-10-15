# Taxas, incentivos e sustentabilidade econômica

*Temporada 7. Rascunho editorial. Fontes e revisão do CTO pendentes.*

## Pergunta

Um protocolo de negociação precisa manter operadores e participantes economicamente motivados sem transformar cobrança de taxas em controle oculto sobre fundos.

## Limite e decisão

Separe política de taxa do protocolo, custos de rede, cobranças de provedores, rebates e receita da aplicação. Um percentual só faz sentido com moeda de referência, pagador, arredondamento, momento da cobrança e regra para cancelamentos e disputas.

## Falha e evidência

Uma tentativa repetida não pode cobrar a mesma taxa duas vezes. Invariantes de cobrança exigem evidência persistente e política econômica atual aprovada pelo CTO. Este texto não afirma uma taxa vigente em produção.

*Não há alegação de implementação em produção nem aprovação para publicação.*

## Limite verificado no código: taxas dependem da rede

O registro de provedores separa explicitamente capacidade de liquidação da capacidade de cobrança da taxa do protocolo. O conjunto `FEE_COLLECTION_CAPABLE_RAILS` contém apenas `MULTISIG` no código examinado. Trata-se de uma fronteira de ativação, não de evidência de que as outras redes cobram a mesma taxa.

Antes de descrever uma taxa universal, verifique versão da política, denominação, arredondamento, destinatário, construção da transação, repetição de tentativas, resultado de disputas e autorização de implantação. Uma política publicada não significa que a taxa possa ser coletada numa rede inelegível.

### Fonte primária e revisão

- [Provider registry, custody metadata, default asset routing and fee capability](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts)
- [WDK custody](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/wdk-settlement.provider.ts)
- [SAFE_GUARD_EVM verification limits](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/safe-guard-evm.provider.ts)

*Correção editorial baseada em fontes; aprovação do CTO, verificação de implantação e publicação em produção ainda pendentes.*

## Ativar não é cobrar

Na revisão `be6d3bc2` do Protocol, `FEE_COLLECTION_CAPABLE_RAILS` contém somente `MULTISIG`, e `assertRailCanActivateFeeCollection()` impede a ativação da política nos demais caminhos reais sem implementação atômica de cobrança. Trata-se de uma **proteção de ativação**, não de prova de cobrança em produção, percentual vigente ou reembolso concluído. Antes de afirmar que uma taxa foi efetivamente cobrada, é preciso verificar a versão da política e a transação de liquidação, inclusive novas tentativas e disputas.
