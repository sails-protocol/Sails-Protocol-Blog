# Do CI à produção: o que um teste aprovado não comprova

*Season 6 / Temporada 6. Somente rascunho editorial. Auditoria de fontes e aprovação pendentes.*

## Pergunta

Uma pipeline verde informa que certos testes passaram numa revisão específica. Não comprova comportamento do provedor, correspondência com o deploy nem liquidação de pagamento real.

## Limites e escolhas

Mantenha cadeia de evidência: requisito, invariante, commit, ambiente, resultado, artefato e observação operacional. Distinga testes simulados de validação real de banco e provedor.

## Falha e verificação

A publicação deve declarar escopo e pontos cegos. Um teste aprovado comprova aquele teste, não segurança universal ou prontidão para produção.

*No verified implementation claim or permission to publish is implied by this draft.*
