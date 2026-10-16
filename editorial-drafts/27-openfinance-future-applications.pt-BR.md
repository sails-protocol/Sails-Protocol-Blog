# OpenFinance e o futuro das aplicações P2P

*Editorial draft / rascunho editorial / borrador editorial. Season 4. Not approved for publication.*

## A questão

Uma pessoa pode querer negociar, trocar ativos, tomar empréstimos ou acessar mercados de previsão numa única interface. A conveniência é real, mas também é o risco de confundir provedores independentes e suas obrigações.

## Direção de projeto

OpenFinance é um conceito de módulo futuro, não uma promessa de que todos os serviços financeiros serão nativos do Sails Protocol. Uma aplicação de referência pode integrar provedores externos, deixando visíveis contratos, permissões, taxas, riscos e limites de custódia.

## Evidência antes das afirmações

A pergunta útil não é quantos serviços cabem numa tela. É se o usuário entende quem executa cada ação e o que acontece quando algo falha. Esses limites determinarão quais integrações merecem chegar ao público.

## Fluxo conceitual

```mermaid
flowchart LR
 A[Design intent] --> B[Bounded integration]
 B --> C[Independent verification]
```

Equivalente textual: a intenção de projeto passa por uma integração delimitada e verificação independente. Não comprova implantação.

*Pendente: verificação das fontes, referências específicas, revisão editorial e aprovação do responsável pela publicação.*

## Cenário de falha: uma interface esconde dois contratos independentes

Uma pessoa aprova uma troca e uma proposta de crédito na mesma tela. A troca é liquidada, mas o provedor de crédito rejeita a solicitação depois de receber informações preliminares. Se a interface marcar toda a sequência como concluída, a pessoa poderá entender errado exposição, taxas ou custódia. Um aplicativo único não cria uma autoridade jurídica ou econômica única.

**Alternativa:** um painel unificado é conveniente, mas pode esconder identidade do provedor, riscos e responsabilidade de recuperação. Avisos por provedor, confirmações independentes e estados distintos de pendência e falha acrescentam etapas, porém preservam consentimento informado.

**Próximo teste:** simular sucesso de um serviço externo enquanto outro falha ou atrasa seu retorno. Verificar estados, permissões, taxas e informações de custódia específicos de cada provedor, sem autorizar silenciosamente uma segunda ação em tentativas repetidas. Trata-se de teste proposto, não de prova de OpenFinance ou serviços externos disponíveis em produção.

## Escopo fundamentado em fonte

OpenFinance é módulo proposto, não serviço financeiro comprovado em produção. **Falha:** tratar design ou API examinada como prontidão universal de produção. Testes no HEAD exato e aprovação seguem pendentes.

- [PROTOCOL_INVARIANTS.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROTOCOL_INVARIANTS.md)
