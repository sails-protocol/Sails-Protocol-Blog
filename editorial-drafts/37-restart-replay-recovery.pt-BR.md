# Reinício, replay e recuperação: roteiro de verificação

*Season 6 / Temporada 6. Somente rascunho editorial. Auditoria de fontes e aprovação pendentes.*

## Pergunta

O servidor confirma uma transição e cai antes de responder. O cliente tenta de novo. A primeira requisição falhou, teve sucesso ou produziu dois efeitos?

## Limites e escolhas

Um teste útil encerra o processo em pontos definidos perto do commit, dos efeitos externos e da resposta. A recuperação deve derivar o resultado autorizado do estado persistente, não da memória do cliente. Repetir a mesma requisição não deve criar nova ação econômica.

## Falha e verificação

Um PASS só com mocks é insuficiente. Documente banco de dados, commit exato, concorrência, ponto de interrupção e pós-condições persistentes. O roteiro é proposto até que as execuções sejam referenciadas.

*Este rascunho não comprova uma implementação nem autoriza publicação.*

## Evidência de conformidade: recuperação não é uniforme

O registro de Recovery/Reconciliation Conformance informa que a automação M9 (incluindo C4, C8, C13–14, C18 e varreduras de reorganização) está delimitada a MULTISIG. O documento registra explicitamente a falta de recuperação automática equivalente para LIGHTNING_HODL, WDK_USDT_EVM e SAFE_GUARD_EVM como pendência, não como capacidade concluída. A decisão em aberto é quais redes devem permanecer e quais obrigações de recuperação cada uma terá.

**Falha:** o processo cai durante uma liberação fora de MULTISIG. Um método funcional do provedor não demonstra recuperação durável após reinício. A afirmação editorial deve identificar a rede e o alcance da evidência.

### Registro de evidências

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/RECOVERY_RECONCILIATION_CONFORMANCE_EVIDENCE.md

*Registro histórico de evidências e inspeção do código. Implantação atual, revisão do CTO e publicação ainda não verificadas.*
