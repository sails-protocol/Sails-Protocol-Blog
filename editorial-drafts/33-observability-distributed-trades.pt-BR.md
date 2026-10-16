# Observabilidade, semântica de erros e depuração de negociações distribuídas

*Somente rascunho. Publicação não aprovada. Season 5, article 33.*

## Pergunta

Quando uma negociação parece travada, um painel que mostra apenas erro não basta. Precisamos saber qual transição foi tentada, quem estava autorizado, o que persistiu e se o provedor externo respondeu.

## Limite e desenho

Identificadores de correlação, erros estruturados, registros persistentes de eventos e métricas delimitadas podem tornar um fluxo distribuído diagnosticável. Mas a observabilidade não pode vazar seeds, credenciais de pagamento, evidências sensíveis ou dados pessoais desnecessários.

## Falha e evidência

Um exercício eficaz acompanha uma negociação pelo cliente, SDK, node, banco e provedor, identificando o último estado confirmado e as incertezas. Até inspecionarmos os schemas de eventos e a instrumentação real, estes são critérios de desenho, não alegações de telemetria implantada.

*Verificação de fontes e referências exatas de API pendentes.*

## Teste de falha: o log diz sucesso, o destino discorda

Um painel operacional indica negociação concluída, mas a transferência externa foi enviada a destino diferente do autorizado pelo participante. Logs com o mesmo identificador de correlação explicam o caminho de execução, porém não comprovam de forma independente o vínculo entre autoridade, resultado e destino. Além disso, diagnósticos excessivos podem expor dados sensíveis de pagamento ou material relacionado à seed.

**Alternativa:** coletar tudo facilita depuração, mas aumenta riscos de privacidade e credenciais. Rastros estruturados, com dados sensíveis removidos e estados UNKNOWN explícitos, preservam evidências sem presumir finalidade econômica.

**Próximo teste:** injetar evento fora de ordem e destino divergente, seguindo o mesmo identificador entre cliente, nó, banco e provedor. Verificar distinção entre observado, pendente e comprovado, remoção de segredos e impossibilidade de autorizar liquidação apenas por telemetria. O documento de verdade durável citado não certifica observabilidade de produção.

## Evidência de fonte e fronteira de falha

Rastros operacionais não são prova independente do vínculo entre resultado e destino. O próximo gate exige verificação operacional no HEAD exato; a fonte não autoriza lançamento.

- [DURABLE_PROTOCOL_TRUTH_EVIDENCE.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/DURABLE_PROTOCOL_TRUTH_EVIDENCE.md)
