# Por que idempotência importa nas negociações P2P

*Rascunho editorial. Publicação não aprovada.*

## A pergunta

O usuário toca em Confirmar e a conexão cai. A requisição falhou ou o servidor concluiu a operação sem entregar a resposta? Tentar novamente parece natural. Num fluxo financeiro, tratar cada tentativa como uma nova ação pode ser perigoso.

## O que pode dar errado

Idempotência significa que repetir a mesma operação pretendida não produz um efeito econômico adicional. Não é simplesmente ignorar qualquer requisição parecida. O sistema precisa identificar qual ação está sendo repetida, quem pode solicitá-la e qual resultado registrado tem autoridade.

## Onde a garantia deve existir

Uma chave de API ou identificador de requisição ajuda, mas não resolve tudo. Imagine que um serviço registra uma negociação concluída e cai antes de responder. Após reiniciar, uma nova tentativa precisa encontrar o resultado anterior, e não aplicar a liquidação novamente. Isso exige estado durável e um limite transacional claro.

## A decisão de engenharia

O SDK e o serviço examinados implementam um contrato de idempotência delimitado para criar negociações. Inspecionar esse código não equivale a garantir comportamento em produção: concorrência com banco real, falha e recuperação e persistência da chave pelo aplicativo exigem evidência no commit efetivamente testado. Um teste unitário isolado não comprova efeito econômico exactly-once.

## Contrato concreto no SDK Sails

O método `OpenP2P.trade(offerId, amount, idempotencyKey?)` do SDK examinado encaminha a chave opcional para `POST /v1/openp2p/trades`. A rota valida uma chave não vazia de até 200 caracteres e a envia, junto da identidade autenticada do participante, para `TradeService.createTrade()`. O serviço delimita a tentativa pelo escopo `openp2p.trade.create`, pelo participante e pelos dados da oferta e do valor. **Sem a chave, uma repetição pode criar outra negociação**; o próprio SDK orienta gerar uma chave por aceitação lógica e reutilizá-la nas tentativas da mesma aceitação. Uma nova aceitação intencional exige outra chave.

**Cenário adversarial:** a operação é persistida, mas a resposta expira. A interface gera outra chave a cada tentativa. Nesse contrato, o servidor não consegue reconhecer as tentativas como a mesma intenção. **Limite:** a cadeia foi examinada no código, mas o comportamento de todos os aplicativos e os testes de crash/replay com Postgres não estão certificados aqui.

**Próxima pergunta:** quais aplicativos preservam a chave da tentativa lógica após reinício ou operação offline?

### Fontes e nível de comprovação

- [Método do SDK](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/packages/sails-sdk/src/modules/openp2p.ts)
- [Rota HTTP](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.routes.ts)
- [Serviço de negociação](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)
- [Mecanismo comum de idempotência](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/common/idempotency.ts)

*Somente inspeção de código. Sem nova verificação em execução, aprovação do CTO ou autorização de publicação.*

## Leia a seguir

No próximo artigo vamos tratar de um problema relacionado, mas diferente: o que acontece quando duas requisições chegam ao mesmo tempo, antes que uma consiga observar o resultado da outra?
