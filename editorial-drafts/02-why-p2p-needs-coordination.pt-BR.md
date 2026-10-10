# Por que mercados P2P precisam de uma coordenação melhor

*Rascunho editorial. Publicação não aprovada.*

Uma negociação P2P parece simples: alguém quer comprar, outra pessoa quer vender e as duas chegam a um preço.

Só que o acordo é apenas o começo.

Imagine um comprador que fez uma transferência bancária e um vendedor que diz não ter recebido o pagamento. O comprador tem um comprovante. O vendedor não encontra o depósito. Nenhum dos dois consegue saber, apenas olhando para a própria tela, o que de fato aconteceu do outro lado.

É aí que uma plataforma ajuda. Ela oferece um fluxo compartilhado, define prazos, recebe evidências, acompanha o estado da negociação e estabelece um processo de disputa. Plataformas P2P consolidadas tornaram esses mecanismos úteis em escala. Elas resolvem problemas reais, não apenas problemas de interface.

A pergunta interessante aparece quando esses mecanismos só podem ser usados dentro da própria plataforma.

Uma carteira pode querer oferecer negociações P2P sem virar um marketplace completo. Outra aplicação pode precisar de grupos privados, meios de pagamento diferentes ou um modelo próprio de reputação. Uma terceira pode querer reutilizar regras de coordenação sem abrir mão da sua interface. Reconstruir tudo em cada produto significa repetir trabalho e, principalmente, correr o risco de tratar a mesma falha de maneiras incompatíveis.

Começamos então a olhar para a coordenação como um problema próprio.

Pense em cinco perguntas que todo sistema de negociação precisa responder. Quem está autorizado a agir? Qual estado da negociação é a referência? Quem pode apresentar uma evidência? O que muda quando começa uma disputa? E quais condições permitem considerar uma ação econômica definitiva?

Essas perguntas estão conectadas. Verificar uma identidade não resolve muito se depois alguém consegue executar uma transição sem autorização. Uma evidência perde valor quando não está claro quem a enviou ou quais limites se aplicam. E uma negociação concluída não pode ser registrada duas vezes só porque duas requisições chegaram ao mesmo tempo.

Por isso, nosso trabalho no Sails Protocol não se resume a aproximar compradores e vendedores. Estamos explorando regras e interfaces reutilizáveis para coordenar o ciclo de uma negociação, inclusive quando surgem falhas, tentativas repetidas ou divergências.

Isso não elimina a necessidade de marketplaces, provedores de pagamento, carteiras ou decisões humanas. Cada aplicação continua fazendo escolhas de produto. Sistemas externos de pagamento continuam sendo externos. Um protocolo não transforma uma transferência bancária em algo irreversível nem garante que toda declaração fora da blockchain seja verdadeira.

Nosso objetivo é mais específico: tornar a camada de coordenação clara o suficiente para ser compreendida, testada e integrada.

O primeiro lugar em que estamos colocando essa abordagem à prova é o Sails P2P Trading SDK. Seu estágio de implementação e sua prontidão operacional precisam ser avaliados pelo código e pelas evidências aprovadas, não apenas pelas ideias deste artigo.

No próximo texto, vamos conhecer os componentes da arquitetura e entender por que separamos protocolo, núcleo semântico, nós, SDKs e aplicações.

## Fronteira de evidência e falha

Autorização e estado durável são responsabilidades concretas do serviço, não prova de coordenação entre plataformas. **Falha:** interpretar arquitetura ou código examinado como comprovação de produção. Ainda faltam testes no HEAD exato e aprovação.

- [trade.service.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)

*Revisão técnica pendente. Este artigo apresenta a motivação do projeto, não uma garantia de funcionalidades implementadas ou prontidão para produção.*
