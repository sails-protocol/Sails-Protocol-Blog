# PIX e DePix: comprovante não é verdade do pagamento

*Season 7 / Temporada 7. Rascunho editorial. Fontes e revisão do CTO pendentes.*

## Pergunta

Um comprador envia um comprovante enquanto o vendedor ainda não recebeu o dinheiro. O documento pode ser legítimo, falso, duplicado ou referente a outra transferência.

## Limite e decisão

Separe a alegação do participante, a origem da evidência, a observação autenticada do provedor e a transição autorizada da negociação. PIX é um meio de pagamento brasileiro; DePix envolve outro ativo e contexto de liquidação. Não presuma regras iguais de reversibilidade, prazo ou verificação.

## Falha e evidência

Un atacante reutiliza um comprovante antigo em outra negociação. O sistema não pode equiparar uma imagem plausível a valor liquidado. Verifique identificadores do provedor, valor, moeda, destinatário, validade e política de finalização no limite de autoridade correto.

*No production implementation or publication approval is asserted.*

## Evidência não é verdade do pagamento

O caminho OpenProof examinado verifica quem assinou a mídia e se essa pessoa pode anexá-la à Claim; ele não valida liquidação PIX ou DePix. Um comprovante, arquivo assinado ou hash de armazenamento pode ser autêntico e ainda assim induzir a erro econômico. Qualquer afirmação de pagamento confirmado, irreversível ou liquidado exige autoridade externa identificada, conciliação de identificadores e regras aplicáveis de confirmação e reversão.

**Falha:** um comprovante PIX aparentemente legítimo é anexado à negociação, mas o pagamento externo não existe ou é revertido. O protocolo deve preservar a origem da evidência sem tratá-la como confirmação de pagamento. **Gate aberto:** inspecionar os adapters PIX/DePix e callbacks autoritativos antes de alegar conciliação automática.

### Source ledger

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-proof/proof.service.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-proof/evidence-provider.ts

*Source-inspected; external payment verification, live tests, CTO review and publication pending.*
