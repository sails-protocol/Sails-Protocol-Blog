# Integrando provedores externos sem delegar a verdade econômica

*Somente rascunho. Publicação não aprovada. Season 5, article 34.*

## Pergunta

Um webhook do provedor informa pagamento concluído. A negociação deve liberar o ativo imediatamente? Não sem perguntar o que o webhook autentica, qual transação identifica e se o pagamento é final segundo as regras daquele meio.

## Limite e desenho

Um adaptador traduz observações externas para um contrato delimitado. Deve validar origem, tratar duplicatas e reordenação, preservar incertezas e recusar autoridade que o provedor não consegue demonstrar. O estado econômico do protocolo deve seguir suas próprias regras verificadas de transição.

## Falha e evidência

Uma suíte de testes deve injetar webhooks falsificados, status antigos, confirmações conflitantes e indisponibilidade do provedor. O resultado esperado é rejeição segura ou estado explicitamente pendente, nunca liquidação inventada. Garantias específicas de cada provedor exigem evidência documentada.

*Verificação de fontes e referências exatas de API pendentes.*
