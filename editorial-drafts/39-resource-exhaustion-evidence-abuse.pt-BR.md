# Exaustão de recursos, limites de taxa e abuso de evidências

*Temporada 6. Rascunho editorial. Auditoria das fontes e aprovação pendentes.*

## Pergunta

Um JSON aparentemente pequeno pode causar parsing, hashing ou armazenamento caros. Um participante malicioso pode explorar a diferença entre requisições aceitas e trabalho limitado.

## Decisão: rejeitar antes do trabalho caro

Um atacante pode usar muitas requisições pequenas com o mesmo efeito de um upload enorme. O orçamento precisa abranger bytes individuais, profundidade e complexidade, referências por prova, armazenamento acumulado e tentativas, vinculados a identidades duráveis e não só a contadores locais. O schema de descritores examinado mostra o marcador `externalReference: true`; ele, sozinho, não prova essas cotas. Exclusividade entre ponteiros e hash de mídia OpenProof são verificações distintas.

## Falha: ponteiro externo apresentado como mídia verificada

Um cliente envia uma URI bruta como se fosse referência vinculada à integridade. Aceitar sem verificar o tipo declarado permite uma falsa alegação de proveniência. Outra falha ocorre quando a rejeição acontece depois de gravar bytes ou emitir eventos. O gate editorial deve exigir aceitação no limite, rejeição em +1 e ausência de efeitos, pelo caminho real do serviço e pelo ledger durável de cotas.

## Falha e verificação

Testes de limite devem mostrar aceitação no valor exato, rejeição uma unidade acima e zero efeitos após rejeição. Valores da política precisam ser conferidos com decisões e implementação atuais antes de publicar.

## Descritores não equivalem a evidência armazenada

O schema HTTP de disputa preserva `evidenceReferenceId` e o marcador explícito `externalReference: true`. Uma URI bruta não vira automaticamente referência OpenProof vinculada à integridade: o serviço verifica formas mutuamente exclusivas e exige a declaração de referência externa. A interface do provedor separa bytes e metadados da autoridade da prova. É fronteira de confiança na entrada, não demonstração de que todas as cotas, tamanhos, profundidades JSON ou limites acumulados estejam efetivamente aplicados em produção.

**Teste de abuso:** enviar descritores enormes ou aninhados, referências repetidas e URIs externas fingindo ser mídia verificada. Exigir enforcement exato, rejeição sem efeitos e contabilização por escopo antes de alegar proteção abrangente.

## Próxima pergunta

Quais escopos de ator e de prova respondem pela cota persistente quando requisições simultâneas chegam a workers diferentes? Que testes no commit exato demonstram que uma requisição rejeitada não deixa evidência armazenada nem débito no registro autoritativo de cotas?

### Fontes e estado da verificação

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/evidence-descriptor-schema.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-proof/evidence-provider.ts

*Somente inspeção das fontes. Sem novos testes de cotas, execução em produção, aprovação do CTO ou publicação.*

*Este rascunho não comprova uma implementação verificada nem autoriza sua publicação.*
