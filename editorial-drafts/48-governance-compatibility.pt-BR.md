# Governança de protocolo aberto e compatibilidade ao longo do tempo

*Season 7 / Temporada 7. Rascunho editorial. Fontes e revisão do CTO pendentes.*

## Pergunta

Um protocolo evolui enquanto aplicações e nodes atualizam em ritmos diferentes. Uma mudança aparentemente pequena pode redefinir o significado econômico de um campo.

## Limite e decisão

A governança deve distinguir propostas, política revisada, implementação, verificação e implantação. Compatibilidade exige schemas versionados, regras de quebra, migrações e descontinuação transparente. Uma decisão congelada pelo CTO não equivale a consenso universal.

## Falha e evidência

Um cliente interpreta uma nova denominação de taxa como a antiga. Mesmo compilando, o resultado pode estar economicamente errado. Publique contratos versionados e testes de migração antes de afirmar compatibilidade.

*No production implementation or publication approval is asserted.*

## Governança é hierarquia de alegações, não selo de lançamento

O documento de invariantes diferencia leis arquiteturais, obrigações concretas de implementação e evidência executável onde cabível. O registro de conformidade da álgebra de condições demonstra uma propriedade delimitada, mas afirma que o ruleset publicado não compõe condições. A evidência de substituição de provedores também sustenta propriedades selecionadas, não K3 integral ou interoperabilidade universal. Publicar uma versão ou passar um harness não certifica o protocolo inteiro.

**Gate de compatibilidade:** indicar identidade exata do ruleset, versão do protocolo/SDK, rede, implementação independente e vetor de teste falsificável. Preservar migração quando a semântica mudar; não transformar um PASS específico em compatibilidade universal.

### Source and maturity

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROTOCOL_INVARIANTS.md
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/CONDITION_ALGEBRA_CONFORMANCE_EVIDENCE.md
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROVIDER_SUBSTITUTION_INVARIANCE_EVIDENCE.md

*Historical evidence/source inspection only; no latest-head test or publication approval.*
