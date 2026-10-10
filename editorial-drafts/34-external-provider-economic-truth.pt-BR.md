# Integrando provedores externos sem delegar a verdade econômica

*Somente rascunho. Publicação não aprovada. Season 5, article 34.*

## Pergunta

Um webhook do provedor informa pagamento concluído. A negociação deve liberar o ativo imediatamente? Não sem perguntar o que o webhook autentica, qual transação identifica e se o pagamento é final segundo as regras daquele meio.

## Limite e desenho

Um adaptador traduz observações externas para um contrato delimitado. Deve validar origem, tratar duplicatas e reordenação, preservar incertezas e recusar autoridade que o provedor não consegue demonstrar. O estado econômico do protocolo deve seguir suas próprias regras verificadas de transição.

## Falha e evidência

Uma suíte de testes deve injetar webhooks falsificados, status antigos, confirmações conflitantes e indisponibilidade do provedor. O resultado esperado é rejeição segura ou estado explicitamente pendente, nunca liquidação inventada. Garantias específicas de cada provedor exigem evidência documentada.

## Decisão: observação limitada não é autoridade de liquidação

O `bounded-rpc.ts` examinado distingue chamadas HTTP próprias, com AbortController para limitar a espera, de chamadas JSON-RPC ethers com timeout nativo. O mecanismo de repetição é opt-in: uma transmissão com efeito econômico não deve ser repetida automaticamente apenas porque a resposta expirou. O envio pode ter ocorrido, deixando resultado **UNKNOWN**. O adaptador deve reconciliar com recibos verificáveis e autoridade durável da negociação, sem inventar sucesso ou falha.

## Falha: timeout depois do envio

A transação chega ao provedor, mas a resposta se perde. Uma repetição ingênua pode reenviar o efeito; declarar falha pode ignorar um efeito real. Ambos são inseguros sem deduplicação ou reconciliação específica da rede. A evidência de substituição de provedores demonstra semânticas selecionadas, não equivalência universal.

## Evidência e próxima pergunta

- [RPC com limites e regras de repetição](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/bounded-rpc.ts)
- [Evidência de substituição de provedores](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROVIDER_SUBSTITUTION_INVARIANCE_EVIDENCE.md)

*Somente inspeção de fonte.* Quais redes têm prova de reconciliação após timeout no HEAD exato?
