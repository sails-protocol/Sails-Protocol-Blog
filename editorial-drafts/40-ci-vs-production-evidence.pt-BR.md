# Do CI à produção: o que um teste aprovado não comprova

*Temporada 6. Somente rascunho editorial. Auditoria de fontes e aprovação pendentes.*

## Pergunta

Uma pipeline verde informa que certos testes passaram numa revisão específica. Não comprova comportamento do provedor, correspondência com o deploy nem liquidação de pagamento real.

## Limites e escolhas

Mantenha cadeia de evidência: requisito, invariante, commit, ambiente, resultado, artefato e observação operacional. Distinga testes simulados de validação real de banco e provedor.

## Falha e verificação

A publicação deve declarar escopo e pontos cegos. Um teste aprovado comprova aquele teste, não segurança universal ou prontidão para produção.

*Este rascunho não comprova implementação verificada nem autoriza publicação.*

## O que os registros de evidência realmente demonstram

O relatório de Recovery/Reconciliation Conformance separa testes reaproveitados e recuperação delimitada a MULTISIG da automação entre redes ainda não comprovada. Durable Protocol Truth é explicitamente investigação, e documenta lacunas de verificabilidade independente, não aprovação de propriedade em produção. Resultado de CI, investigação documentada, suíte de conformidade e recibo real de provedor respondem a perguntas diferentes; nenhum substitui os demais.

**Regra de revisão:** toda afirmação exige commit exato, ambiente, rede, injeção de falha, resultado e pendências. Se houve mocks, informar quais propriedades dependiam deles; se a investigação encontrou lacuna, preservá-la na declaração de maturidade.

### Registro de evidências

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/RECOVERY_RECONCILIATION_CONFORMANCE_EVIDENCE.md
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/DURABLE_PROTOCOL_TRUTH_EVIDENCE.md

*Registro histórico de evidências e inspeção de fontes; implantação atual, revisão do CTO e publicação ainda não verificadas.*
