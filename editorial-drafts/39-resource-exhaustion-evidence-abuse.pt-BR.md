# Exaustão de recursos, limites de taxa e abuso de evidências

*Season 6 / Temporada 6. Somente rascunho editorial. Auditoria de fontes e aprovação pendentes.*

## Pergunta

Um JSON aparentemente pequeno pode causar parsing, hashing ou armazenamento caros. Um participante malicioso pode explorar a diferença entre requisições aceitas e trabalho limitado.

## Limites e escolhas

Limite tamanho, profundidade, complexidade, cotas cumulativas e tentativas no limite do serviço antes de trabalho caro. Atribua uso a atores autenticados e identificadores persistentes de prova, não apenas a contadores de processo.

## Falha e verificação

Testes de limite devem mostrar aceitação no valor exato, rejeição uma unidade acima e zero efeitos após rejeição. Valores da política precisam ser conferidos com decisões e implementação atuais antes de publicar.

*No verified implementation claim or permission to publish is implied by this draft.*
