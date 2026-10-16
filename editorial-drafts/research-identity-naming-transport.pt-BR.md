# Identidade, nomes e transporte P2P: Spaces, Pubky, Nostr, Pear e Iroh

*Nota de pesquisa editorial para o Day 0. Não aprovada para publicação. Não afirma que todas as tecnologias estejam integradas.*

## A questão

Como uma aplicação P2P pode encontrar e autenticar uma contraparte, conectar-se a ela, trocar mensagens e ainda aplicar as regras econômicas corretas quando a rede falha ou um participante mente?

A resposta exige separar **nomes**, **identidade**, **descoberta**, **transporte**, **replicação de dados** e **autorização econômica**. São funções diferentes.

## Mapa tecnológico (orientado por fontes primárias)

| Tecnologia | Papel principal relevante | O que não comprova |
| --- | --- | --- |
| Spaces Protocol | Nomes soberanos ancorados no Bitcoin e resolução fora da cadeia, incluindo identificadores verificáveis | Resolver um nome não autoriza por si só uma negociação nem comprova liquidação |
| Pubky | Identidade baseada em chave pública, dados portáveis e consulta por homeservers; conceitos de descoberta PKARR/DHT | Um perfil público ou registro em homeserver não comprova a finalidade de um pagamento |
| Nostr | Eventos assinados e publicação/assinatura via relays, com autoria por chave pública | Um evento assinado não comprova a veracidade do conteúdo nem a finalidade econômica |
| Pear e módulos P2P subjacentes | Ambiente de execução/distribuição de aplicações P2P; descoberta com HyperDHT/Hyperswarm, replicação Hypercore e módulos relacionados | Replicação ou descoberta de pares não constitui consenso econômico |
| Iroh | Conexões diretas baseadas em endpoints, com descoberta e fallback por relay, incluindo transporte criptografado | Uma conexão criptografada autentica um endpoint do canal, não o direito do usuário de movimentar fundos |

## Limites propostos para o Sails

**Vínculo de identidade:** decidir se uma chave pública Nostr, uma chave Pubky ou um identificador Spaces é um alias, um principal de autenticação ou apenas um ponteiro descobrível. Definir regras explícitas de desafio/resposta e de rotação/recuperação de chaves. Um nome exibido nunca deve se tornar silenciosamente autoridade de autorização.

**Independência de transporte:** tratar primitivas Pear/P2P, Iroh e relays Nostr como opções distintas, com semânticas diferentes de entrega, metadados, operação offline e repetição. Não presumir que uma substitua diretamente a outra. A intenção de negociação validada, a autorização e o estado durável do protocolo não podem depender da permanência de uma conexão de transporte.

**Estado econômico:** declarações de provedores de pagamento, mensagens assinadas e provas de nomes são entradas. Um nó ou implementação Sails deve impor seus próprios invariantes de negociação, idempotência, proveniência, escrow e liquidação. Não afirmar que a camada de transporte pode tornar irreversível um pagamento fora da cadeia.

## Exemplo adversarial concreto

Alice resolve o identificador Spaces de Bob para uma chave e envia uma intenção de negociação assinada por um transporte. Um relay malicioso duplica ou atrasa a mensagem enquanto Bob troca suas chaves. A aplicação precisa determinar qual chave estava autorizada no momento relevante, rejeitar ações econômicas repetidas e distinguir entrega bem-sucedida de mensagem de uma transição de negociação confirmada. Trocar o transporte não corrige uma regra de autorização incorreta.

## Perguntas de pesquisa para auditoria de implementação

1. Quais métodos de identidade estão implementados, em experimentação ou apenas no roadmap do código Sails Protocol?
2. Existe vínculo canônico entre identidade e participante, com prova de posse, expiração e semântica de rotação?
3. Quais transportes estão implantados, são opcionais, propostos ou incompatíveis com as restrições atuais de SDK/runtime?
4. Como as mensagens sobrevivem a operação offline, reordenação, entrega duplicada e reinício do servidor?
5. Quais dados e metadados ficam visíveis para relays, homeservers, pares de rede e observadores?
6. Um identificador verificado pode ser substituído ou vinculado novamente depois que uma negociação começa? Qual chave tem autoridade?
7. Que evidências demonstram a preservação do mesmo invariante econômico entre diferentes transportes?

## Fontes primárias para auditoria factual

- Spaces: https://spacesprotocol.org/ (nomes ancorados no Bitcoin e resolução fora da cadeia)
- Pubky: https://pubky.org/explore/pubky-protocol/homeserver/ (homeservers, PKARR e limitações atuais dos dados públicos)
- Nostr: https://github.com/nostr-protocol/nips/blob/master/01.md (eventos assinados e relays WebSocket)
- Pear/P2P: https://docs.pears.com/p2p/ (ambiente de execução versus primitivas modulares de descoberta/replicação)
- Iroh: https://www.iroh.computer/blog/the-road-to-iroh-1-0 (escopo voltado a conexões); https://docs.iroh.computer/deployment/security-privacy (compromissos de privacidade dos relays)

As fontes acima explicam projetos externos, **não comprovam que o Sails implementou uma integração**. Antes da publicação, verificar commits exatos do Sails, decisões arquiteturais e revisão técnica. Preparar versões naturais EN/PT-BR/ES, diagrama específico dos limites e equivalente textual acessível.

## Posicionamento editorial

Manter a base de sete temporadas. Acrescentar este material como **dossiê de pesquisa transversal**, contribuindo para:
- Temporada 2, artigo 09 (identidade versus autorização), artigo 13 (nós não confiáveis);
- Temporada 4, artigo 21 (OpenIdentity);
- Temporada 5, artigo 30 (limites de carteiras e assinaturas), artigo 34 (provedores externos);
- Temporada 6, artigo 38 (privacidade e possibilidade de vincular identidades).

Se o dossiê for aceito como artigo independente, registrar uma alteração explícita e aprovada de escopo, em vez de modificar silenciosamente a base de 48 temas.

*NO MATERIAL FINDING UNDER THE RUG.*
