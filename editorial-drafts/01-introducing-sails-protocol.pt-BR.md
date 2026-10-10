# Apresentando o Sails Protocol

*Rascunho editorial. Publicação não aprovada.*

Por que negociar diretamente com outra pessoa ainda exige tanta coordenação nos bastidores?

Comprador e vendedor podem combinar um preço em poucos minutos. Concluir a negociação já é outra história. É preciso definir como o pagamento será feito, em que condições um ativo será liberado, o que serve como prova e o que acontece quando as partes discordam. Cada decisão traz seus próprios riscos.

As plataformas P2P passaram anos tornando essa experiência mais simples. Muitas reúnem descoberta de ofertas, reputação, resolução de disputas e pagamentos em um único lugar. Isso tem valor. Mas uma pergunta voltou várias vezes durante nosso trabalho: quanto dessa coordenação precisa pertencer a uma única plataforma?

Foi dessa pergunta que nasceu o Sails Protocol.

Estamos explorando uma maneira modular de coordenar atividades econômicas entre pessoas. A ideia não é substituir cada marketplace ou carteira por mais um destino. Queremos disponibilizar capacidades de coordenação para aplicações que desejam construir suas próprias experiências.

Essa diferença orientou a arquitetura. Sails Protocol é o protocolo de coordenação. Sails Core reúne suas regras semânticas. Sails Node é uma implementação do protocolo. Sails P2P Trading SDK é nosso primeiro produto voltado à integração de fluxos de negociação. Sails Market está sendo planejado como uma aplicação web de referência, não como o próprio protocolo.

Esses nomes não são sinônimos. Uma carteira que integra um SDK continua sendo uma carteira. Um marketplace continua responsável pelo seu produto e pela experiência dos usuários. O protocolo é a camada que estamos construindo para ajudar esses sistemas a se coordenarem.

Também aprendemos que um projeto precisa ser avaliado pelo que acontece quando algo dá errado. E se uma solicitação for repetida? Se duas operações tentarem concluir a mesma negociação ao mesmo tempo? Se um processo cair entre duas etapas? Se uma prova chegar tarde ou for grande demais? Essas perguntas não podem ficar para depois do lançamento. Elas ajudam a definir o próprio comportamento do sistema.

Por isso, o trabalho no primeiro SDK inclui limites explícitos para identidade, evidências, estado econômico e liquidação. Parte desses limites já foi implementada e testada. Outra parte ainda depende de validações técnicas. Vamos mostrar cada uma no estágio em que realmente está, sem confundir planejamento com uma rede pronta.

Este blog seguirá o mesmo método que usamos no desenvolvimento: fazer perguntas, considerar alternativas, explicar decisões e revê-las quando surgirem novas evidências.

No próximo artigo, vamos explorar por que mercados P2P precisam de coordenação e o que as plataformas existentes já fazem bem.

*Revisão técnica pendente. Afirmações sobre implementação e maturidade precisam ser verificadas no repositório e nas evidências aprovadas pelo CTO antes da publicação.*

## Fronteira de evidência

Visão do protocolo, obrigações de implementação e evidência executável têm maturidades distintas. **Falha:** confundir intenção documentada com comportamento verificado em produção. Evidência de execução no HEAD exato e aprovação pendentes.

- [PROTOCOL_INVARIANTS.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROTOCOL_INVARIANTS.md)
