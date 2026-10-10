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

*Revisão técnica e factual pendente. Não publicar sem aprovação explícita.*
