# Integrações modulares: protocolo ou serviço externo?

*Rascunho editorial. Publicação não aprovada.*

## O problema

Uma aplicação de negociação pode incluir swaps, empréstimos, mercados de previsão e rampas de pagamento. Isso não transforma cada serviço integrado em parte do protocolo subjacente. Limites claros importam para desenvolvedores e usuários que precisam decidir em quem confiar.

## O limite

Sails Market poderá integrar serviços externos como SideShift, Hyperliquid, Morpho ou Polymarket, conforme viabilidade, disponibilidade e política. A família Sails Protocol trata de capacidades de coordenação. Produtos externos mantêm seus próprios contratos, riscos, regras de liquidação e disponibilidade. Integração não implica parceria, endosso ou compromisso de lançamento.

## O que ainda precisa ser comprovado

Para cada integração, a documentação deve identificar o provedor, as permissões solicitadas à carteira, o caminho dos ativos, as taxas econômicas e o comportamento diante de falhas. Rebates ou incentivos comerciais devem ser informados quando relevantes, sem confundi-los com taxas do protocolo.

## Diagrama conceitual

```mermaid
flowchart TD
 A[Aplicação Sails Market] --> B[SDK de coordenação Sails]
 A --> C[Adaptador de serviço externo]
 C --> D[Provedor independente]
 B --> E[Responsabilidades do protocolo]
```

Equivalente textual: o diagrama mostra os limites de responsabilidade descritos acima, não uma implantação verificada.

*Referências, revisão técnica e aprovação do responsável pela publicação pendentes.*

## Cenário de falha: a resposta do provedor vira falsa finalidade

Uma aplicação encaminha uma troca proposta por um adaptador externo. O provedor devolve o identificador de uma solicitação aceita, mas a liquidação continua pendente ou falha depois. Se a interface do Sails Market chamar esse reconhecimento de liquidação concluída, o usuário poderá agir com base em fundos que ainda não chegaram. O inverso ocorre quando o serviço externo conclui a operação, mas seu retorno atrasa e a aplicação repete a solicitação com outro identificador, criando possivelmente uma segunda obrigação.

O limite de confiança precisa identificar quem controla os ativos, quem pode reverter ou contestar uma operação, qual rede ou provedor determina a finalidade e o que a aplicação apenas exibe. Um registro de adaptadores demonstra um ponto de integração no software, não que determinado produto externo esteja conectado, endosse o Sails, opere em todas as jurisdições ou seja seguro em produção.

## Alternativa e verificação

Integrações diretas simplificam a interface, mas também reúnem termos, taxas, recuperação e obrigações regulatórias diferentes numa única tela. Identificar claramente o provedor e exigir confirmação por operação acrescenta etapas, mas permite distinguir coordenação do protocolo e execução por terceiros.

**Próximo teste:** simular uma resposta aceita sem liquidação, um retorno atrasado e uma repetição após timeout. Verificar que a aplicação preserva o estado pendente, reconcilia identificadores e não atribui garantias do provedor ao Sails Protocol. Conferir contratos e evidências operacionais específicos antes de anunciar lançamento. O registro citado **não** prova que esses cenários passaram.

## Fronteira examinada e falha

O registro identifica adaptadores; serviços externos não se tornam o Sails Protocol. **Falha:** apresentar design como implantação comprovada. A fonte fixada sustenta apenas esse escopo; gates de execução e CTO seguem abertos.

- [escrow-providers.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts)
