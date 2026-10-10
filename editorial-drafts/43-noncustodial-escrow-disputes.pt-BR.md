# Escrow não custodial e autoridade de disputa

*Season 7 / Temporada 7. Rascunho editorial. Fontes e revisão do CTO pendentes.*

## Pergunta

O vendedor bloqueia um ativo e o comprador afirma ter pago. Quem pode liberar o ativo quando as versões entram em conflito?

## Limite e decisão

Distinga custódia das chaves, controle do mecanismo de bloqueio, decisão da disputa e execução da liberação. A alegação de não custódia precisa descrever script, assinaturas e recuperação reais, não apenas dizer que a plataforma não guarda a seed.

## Falha e evidência

Uma negociação em disputa atinge o prazo enquanto o árbitro está indisponível. O comportamento seguro depende da política de escrow e timeout específica; um diagrama genérico não prova recuperabilidade. Verifique redes suportadas e cenários adversariais no código.

*No production implementation or publication approval is asserted.*

## Limite verificado no código: a custódia varia por provedor

O registro de provedores distingue MULTISIG Bitcoin (chaves do comprador e vendedor no cliente e chave do árbitro no servidor), LIGHTNING_HODL via Arkade (assinaturas dos clientes, escopo documentado de testnet), SAFE_GUARD_EVM (chaves dos clientes e árbitro apoiado por KMS, sem teste end-to-end comprovado com Sepolia financiada e bundler) e WDK_USDT_EVM (seed única no servidor, explicitamente inelegível para produção). Ter escrow não comprova custódia independente nem elegibilidade para produção.

Aprovação dupla na aplicação não é multisig criptográfico. Avalie cada escrow por titular das chaves, limiar de assinatura, rede, timeout, configuração e evidências reais de recuperação.

### Fonte primária e revisão

- [Provider registry, custody metadata, default asset routing and fee capability](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts)
- [WDK custody](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/wdk-settlement.provider.ts)
- [SAFE_GUARD_EVM verification limits](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/safe-guard-evm.provider.ts)

*Source-inspected editorial correction; CTO approval, deployment verification and production publication remain pending.*
