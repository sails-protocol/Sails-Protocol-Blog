# Reinício, replay e recuperação: roteiro de verificação

*Season 6 / Temporada 6. Somente rascunho editorial. Auditoria de fontes e aprovação pendentes.*

## Pergunta

O servidor confirma uma transição e cai antes de responder. O cliente tenta de novo. A primeira requisição falhou, teve sucesso ou produziu dois efeitos?

## Limites e escolhas

Um teste útil encerra o processo em pontos definidos perto do commit, dos efeitos externos e da resposta. A recuperação deve derivar o resultado autorizado do estado persistente, não da memória do cliente. Repetir a mesma requisição não deve criar nova ação econômica.

## Falha e verificação

Um PASS só com mocks é insuficiente. Documente banco de dados, commit exato, concorrência, ponto de interrupção e pós-condições persistentes. O roteiro é proposto até que as execuções sejam referenciadas.

*No verified implementation claim or permission to publish is implied by this draft.*
