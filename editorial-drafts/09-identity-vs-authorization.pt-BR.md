# Identidade e autorização são perguntas diferentes

*Rascunho editorial. Publicação não aprovada.*

## A pergunta

Uma mensagem assinada pode demonstrar controle sobre uma chave. Sozinha, não prova que essa pessoa pode liberar uma negociação específica. Essa segunda pergunta depende da negociação, do papel do participante, do estado atual e da operação solicitada.

## O dilema por trás

Em sistemas P2P, é tentador tratar uma identidade verificada como uma permissão universal. Mas os participantes têm responsabilidades diferentes. O comprador pode apresentar evidência de pagamento, o vendedor pode confirmar recebimento e um revisor autorizado pode avaliar uma disputa. São autoridades distintas, mesmo quando todos se autenticaram corretamente.

## Nossa direção

Estamos explorando identificadores portáveis e mecanismos de desafio e resposta, junto de autorização explícita em cada transição de estado. Portabilidade não significa que toda aplicação deva confiar em qualquer afirmação. Cada integração ainda precisa decidir quais credenciais e permissões aceita.

## O que precisamos verificar

O teste útil não é apenas verificar uma assinatura. É comprovar que um ator autenticado consegue executar exatamente as ações permitidas pelo estado econômico atual, e nenhuma outra. Este artigo descreve o modelo de segurança que estamos construindo; a cobertura concreta precisará de evidências de implementação antes da publicação.

## Diagrama conceitual

```mermaid
flowchart TD
  A[Ator autenticado] --> B{Autorizado nesta negociação e estado?}
  B -->|Não| C[Rejeitar transição]
  B -->|Sim| D[Avaliar regras da transição]
```

Este diagrama ilustra um princípio de projeto, não um comportamento de execução verificado.


## Distinção comprovada: provar a chave não concede autorização

O middleware de autenticação documenta challenge-response, autenticação de requisições assinadas e prefixos de domínio distintos para desafios de registro e autenticação. Isso demonstra controle da chave em um contexto específico, mas não concede poder sobre todas as negociações. O serviço de negociação verifica separadamente se o participante autenticado é comprador ou vendedor nas ações restritas às partes. A RFC-001 também estabelece que agentes atuam por delegação de um Participant; carteira ou agente não vira automaticamente um Participant independente por possuir chaves.

**Cenário adversarial:** uma requisição com assinatura válida tenta alterar a negociação de outra pessoa. A criptografia correta não substitui a checagem de participação. Limites e revogação de delegação exigem evidências próprias.

### Primary source / maturity

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/common/middleware/auth.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/rfcs/RFC-001-participant-model.md

*Source inspection only; no new live test, CTO approval or publication authorization.*
