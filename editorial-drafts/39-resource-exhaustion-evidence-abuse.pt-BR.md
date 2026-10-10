# Exaustão de recursos, limites de taxa e abuso de evidências

*Season 6 / Temporada 6. Somente rascunho editorial. Auditoria de fontes e aprovação pendentes.*

## Pergunta

Um JSON aparentemente pequeno pode causar parsing, hashing ou armazenamento caros. Um participante malicioso pode explorar a diferença entre requisições aceitas e trabalho limitado.

## Limites e escolhas

Limite tamanho, profundidade, complexidade, cotas cumulativas e tentativas no limite do serviço antes de trabalho caro. Atribua uso a atores autenticados e identificadores persistentes de prova, não apenas a contadores de processo.

## Falha e verificação

Testes de limite devem mostrar aceitação no valor exato, rejeição uma unidade acima e zero efeitos após rejeição. Valores da política precisam ser conferidos com decisões e implementação atuais antes de publicar.

*No verified implementation claim or permission to publish is implied by this draft.*

## Descritores não equivalem a evidência armazenada

O schema HTTP de disputa preserva `evidenceReferenceId` e o marcador explícito `externalReference: true`. Uma URI bruta não vira automaticamente referência OpenProof vinculada à integridade: o serviço verifica formas mutuamente exclusivas e exige a declaração de referência externa. A interface do provedor separa bytes e metadados da autoridade da prova. É fronteira de confiança na entrada, não demonstração de que todas as cotas, tamanhos, profundidades JSON ou limites acumulados estejam efetivamente aplicados em produção.

**Teste de abuso:** enviar descritores enormes ou aninhados, referências repetidas e URIs externas fingindo ser mídia verificada. Exigir enforcement exato, rejeição sem efeitos e contabilização por escopo antes de alegar proteção abrangente.

### Source and verification status

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/evidence-descriptor-schema.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-proof/evidence-provider.ts

*Source inspection only. No new quota test, production execution, CTO approval or publication.*
