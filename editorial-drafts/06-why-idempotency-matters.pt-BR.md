# Por que idempotência importa nas negociações P2P

*Rascunho editorial. Publicação não aprovada.*

## A pergunta

O usuário toca em Confirmar e a conexão cai. A requisição falhou ou o servidor concluiu a operação sem entregar a resposta? Tentar novamente parece natural. Num fluxo financeiro, tratar cada tentativa como uma nova ação pode ser perigoso.

## O que pode dar errado

Idempotência significa que repetir a mesma operação pretendida não produz um efeito econômico adicional. Não é simplesmente ignorar qualquer requisição parecida. O sistema precisa identificar qual ação está sendo repetida, quem pode solicitá-la e qual resultado registrado tem autoridade.

## Onde a garantia deve existir

Uma chave de API ou identificador de requisição ajuda, mas não resolve tudo. Imagine que um serviço registra uma negociação concluída e cai antes de responder. Após reiniciar, uma nova tentativa precisa encontrar o resultado anterior, e não aplicar a liquidação novamente. Isso exige estado durável e um limite transacional claro.

## Como abordamos o problema

No Sails P2P Trading SDK, tratamos novas tentativas como uma questão de correção econômica. Nossas revisões incluem cenários com banco de dados real, requisições concorrentes e testes de falha e recuperação. As garantias exatas dependem da operação, do adaptador e das evidências aprovadas para cada implementação. Não vamos chamar um fluxo de exactly-once só porque um teste unitário passou.

## Leia a seguir

En el próximo artigo vamos tratar de um problema relacionado, mas diferente: o que acontece quando duas requisições chegam ao mesmo tempo, antes que uma consiga observar o resultado da outra?

*Fontes pendentes: referenciar commits imutáveis, decisões do CTO e testes antes da publicação.*
