# Conheça o Sails P2P Trading SDK

*Rascunho editorial. Publicação não aprovada.*

## Começar por um fluxo real

Um protocolo pode prometer muitas coisas no papel. Escolhemos concentrar o primeiro SDK em um problema concreto: coordenar o ciclo de uma negociação P2P. Isso envolve ofertas, participantes, etapas de pagamento, evidências, disputas e condições para uma negociação chegar a um estado final. Cada etapa precisa fazer sentido mesmo quando as requisições chegam fora de ordem ou são repetidas.

## A parte difícil não é o caminho ideal

Numa demonstração, o comprador paga, o vendedor confirma e a negociação termina. Num sistema real, o cliente pode perder a conexão depois de enviar uma requisição. Dois processos podem tentar a mesma ação. Um provedor pode demorar a responder. Uma disputa pode trazer evidências que precisam ser analisadas. Tratamos idempotência, concorrência, reinicialização e limites de autoridade como questões centrais de engenharia, não como acabamento opcional.

## Um SDK facilita a integração, não oferece garantias automáticas

O SDK foi pensado para permitir que aplicações diferentes integrem fluxos de negociação sem reescrever todas as regras de coordenação. Mas cada integração ainda precisa de configuração correta, atores autenticados, armazenamento confiável e adaptadores adequados. Compilar um pacote não é o mesmo que comprovar o comportamento econômico diante de falhas, concorrência e problemas externos. Por isso, nosso processo exige evidências reproduzíveis e gates explícitos de revisão.

## O que vem depois

O primeiro SDK é o ponto de partida de uma família modular maior, não uma prova de que toda essa família já existe hoje. Conforme a implementação avançar, vamos publicar exemplos concretos, interfaces suportadas, evidências de teste e limitações conhecidas. Até lá, este artigo apresenta a direção do produto sem declarar prontidão para produção.

## O que a integração examinada realmente oferece

Na revisão fixada do código, o cliente OpenP2P do SDK oferece `trade(offerId, amount, idempotencyKey?)`. A chave é opcional, mas isso tem consequência econômica: sem ela, uma resposta perdida pode levar à criação de outra negociação. A rota HTTP valida a chave recebida e encaminha o contexto do participante autenticado ao serviço, que delimita a tentativa pela ação, participante, oferta e valor. É um contrato concreto, não prova de que toda carteira preserva a chave em tentativas offline.

**Falha:** o aplicativo gera outra chave a cada toque em Tentar novamente. O servidor interpreta novas tentativas, não a repetição da aceitação original. **Decisão:** persistir e reutilizar a chave da mesma aceitação lógica; criar outra apenas para uma aceitação realmente nova.

### Fontes e nível de comprovação

- [Cliente OpenP2P do SDK](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/packages/sails-sdk/src/modules/openp2p.ts)
- [Rota HTTP de negociações](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.routes.ts)
- [Serviço de negociação](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)

*Inspeção de código em revisão fixada; sem novo teste de cliente/reinício ou aprovação de publicação.*


*Revisão técnica e factual pendente. Não publicar sem aprovação explícita.*
