# OpenIdentity: nomes não são autorização

*Editorial deep-draft. Not approved for publication. Season 4 / Article 21 companion revision. Do not promote over the original article before review.*

## A pergunta

Alice quer negociar com Bob. Ela encontra um nome conhecido, uma chave pública e uma mensagem assinada. Qual desses elementos comprova que Bob pode autorizar uma ação econômica específica?

Um nome ajuda a localizar alguém. Uma chave pública permite verificar uma assinatura. Nenhum dos dois prova, por si só, que o titular controla determinada conta, participa da negociação ou pode liberar um escrow.

## Identidade tem camadas

A fronteira proposta para OpenIdentity separa cinco etapas:

1. **Identificador:** nome, chave ou referência informada.
2. **Resolução:** associação atual entre nome e chave, com origem e validade definidas.
3. **Prova de posse:** desafio assinado com nonce, destinatário, ação e prazo.
4. **Vínculo de participante:** associação explícita e persistente entre chave verificada e participante ou conta Sails.
5. **Autorização:** decisão separada sobre quem pode executar uma transição naquela negociação.

Confundir essas etapas abre espaço para uma assinatura válida autorizar a pessoa errada, a negociação errada ou uma ação após revogação.

## Onde entram as tecnologias

**Pubky** explora identidade baseada em chaves públicas e publicação portável de dados. Seus mecanismos de descoberta podem ajudar a localizar perfis, mas não autorizam negociações.

**Nostr** utiliza eventos assinados e relays. O relay entrega mensagens; não valida sua verdade econômica. O autor de um evento não é automaticamente quem pode liberar os ativos.

**Spaces Protocol** oferece nomes ancorados no Bitcoin. Um nome legível facilita a descoberta, mas o OpenIdentity ainda precisa definir resolução confiável, vínculo de identidade e política de troca de chaves.

São **possibilidades de integração**, não afirmações de que todas já funcionam no Sails.

## Falha: a identidade muda durante a negociação

Bob abre uma negociação quando o aplicativo de Alice resolve seu nome para a chave K1. Depois, o nome passa a apontar para K2. Um atacante reenvia pelo relay uma confirmação antiga assinada por K1.

O desenho precisa definir se a negociação permanece vinculada a K1, migra para K2 ou exige uma rotação autorizada. Também precisa rejeitar replay e verificar autorização na transição. Nem o nome nem o transporte decidem isso sozinhos.

## Escolha e evidência

Uma identidade portável ajuda carteiras e mercados a compartilhar contexto. Em contrapartida, exige lidar com correlação de identidades, recuperação e rotação de chaves. Não devemos prometer anonimato ou interoperabilidade antes de validar código e testes.

**Maturidade:** proposta arquitetural conceitual. Auditoria de fontes pendente. Nenhuma integração com Pubky, Nostr ou Spaces é declarada implantada.

## Próxima pergunta

Depois de verificar quem assinou, como garantir entrega, ordenação e tratamento de mensagens repetidas? Isso pertence ao transporte do Sails Node, não ao OpenIdentity.

## Primary references to verify

- https://spacesprotocol.org/
- https://pubky.org/
- https://github.com/nostr-protocol/nips/blob/master/01.md
- Sails Protocol exact source commit and identity policy: **pending**.
