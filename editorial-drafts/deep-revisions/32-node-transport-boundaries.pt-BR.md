# Transporte do Sails Node: entrega não é liquidação

*Editorial deep-draft. Not approved for publication. Season 5 / Article 32 companion revision.*

## A pergunta

Alice envia uma intenção de negociação assinada, mas Bob está offline. Um relay guarda a mensagem, outro caminho a entrega duas vezes e o cliente reconecta após reinício do node. Como manter a negociação consistente?

## Transporte é uma fronteira substituível

A camada proposta de adaptadores do Sails Node separa descoberta de peers, conexão, entrega, ordenação, tentativas repetidas e reconexão da intenção econômica autenticada. **Pear** oferece um ecossistema de aplicações e primitivas P2P; **Iroh** se concentra em conectividade entre endpoints, com descoberta e auxílio de relays; **Nostr** utiliza eventos assinados distribuídos por relays. Suas características de entrega e privacidade diferem. Não podemos presumir substituição direta sem testes.

O tratamento econômico precisa validar o schema, autenticar o participante e verificar pré-condições contra estado persistente. Mensagem entregue não significa transição aceita. Confirmação do relay não significa pagamento liquidado.

## Cenário de falha

Bob recebe uma intenção pelo Nostr e a mesma intenção lógica por outro adaptador. Se cada chegada virar uma ação econômica nova, o sistema poderá duplicar efeitos. O desenho seguro exige identidade estável da intenção, política explícita de replay, transições idempotentes e resolução persistente de conflitos, independente do caminho de entrega.

## Escolha de arquitetura

Transportes substituíveis reduzem dependência de fornecedores e permitem cenários diferentes. O custo é ampliar testes de reconexão, vínculo de identidade, privacidade e entrega. O adaptador não elimina diferenças: ele as torna explícitas.

## Evidência e maturidade

Este artigo descreve uma proposta conceitual, **não** comprova suporte de Pear, Iroh ou Nostr em um Sails Node lançado. Precisamos verificar contratos no código, topologia, persistência e decisões do CTO.

## Próxima pergunta

Quando o evento chega ao node, qual evidência pode justificar uma transição relacionada ao pagamento? Veja OpenProof e OpenSettlement.

## Upstream references to audit

- https://docs.pears.com/p2p/
- https://docs.iroh.computer/
- https://github.com/nostr-protocol/nips/blob/master/01.md
- Sails Node implementation source and approved transport contract: **pending**.
