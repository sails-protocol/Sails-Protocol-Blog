# Observabilidade, semântica de erros e depuração de negociações distribuídas

*Somente rascunho. Publicação não aprovada. Season 5, article 33.*

## Pergunta

Quando uma negociação parece travada, um painel que mostra apenas erro não basta. Precisamos saber qual transição foi tentada, quem estava autorizado, o que persistiu e se o provedor externo respondeu.

## Limite e desenho

Identificadores de correlação, erros estruturados, registros persistentes de eventos e métricas delimitadas podem tornar um fluxo distribuído diagnosticável. Mas a observabilidade não pode vazar seeds, credenciais de pagamento, evidências sensíveis ou dados pessoais desnecessários.

## Falha e evidência

Um exercício eficaz acompanha uma negociação pelo cliente, SDK, node, banco e provedor, identificando o último estado confirmado e as incertezas. Até inspecionarmos os schemas de eventos e a instrumentação real, estes são critérios de desenho, não alegações de telemetria implantada.

*Verificação de fontes e referências exatas de API pendentes.*
