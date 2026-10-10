# Modelagem de ameaças em um protocolo econômico P2P

*Season 6 / Temporada 6. Somente rascunho editorial. Auditoria de fontes e aprovação pendentes.*

## Pergunta

Comprador, vendedor, operador e provedor podem agir de forma diferente do fluxo ideal. A modelagem começa identificando quem pode mentir, desaparecer ou perder acesso.

## Decisão: identificar atacante e ponto de enforcement

Uma ameaça não está mitigada apenas porque aparece no catálogo. Para cada cenário, a revisão precisa indicar quem ataca, qual ativo está em risco, onde está a fronteira de confiança, que código aplica a proteção e o que permanece incerto. No WebSocket, um rate limit HTTP não controla automaticamente mensagens após o upgrade. O modelo de ameaças registra um limitador por participante como melhoria de instância única, não como garantia distribuída. Também documenta o risco de token de sessão com privilégios amplos na query string. São fronteiras diferentes e exigem provas diferentes.

## Falha: segurança que existe só no desenho

Se múltiplas conexões ou nós contornam um contador local, a alegação sobre limite precisa explicitar esse escopo. Se uma URL de sessão vai para logs, um token válido pode vazar apesar de assinaturas corretas em outros fluxos. O registro descreve achados históricos; verificar se persistem no HEAD atual exige nova revisão.


## Limites e escolhas

Separe fundos, chaves de assinatura, alegações de pagamento, evidências e estado da negociação como ativos com autoridades diferentes. Avalie identidade falsa, comprovantes forjados, requisições duplicadas, nodes maliciosos e provedores indisponíveis. Uma mitigação só serve quando seu limite de aplicação é explícito.

## Falha e verificação

Isto é um roteiro de modelagem, não uma auditoria concluída. Antes de publicar garantias, relacione cada ameaça ao código exato, testes adversariais, risco residual e revisão técnica datada.

*No verified implementation claim or permission to publish is implied by this draft.*

## Catálogo de ameaças versus mitigação demonstrada

O catálogo do Sails cita ataques Sybil, liquidez falsa e exposição de credenciais, mas alerta expressamente que mitigação documentada só existe quando há evidência de implementação e implantação. Também registra um limite do WebSocket: tokens de sessão com privilégios amplos em query strings podem vazar para logs ou histórico; um token curto e restrito para handshake é decisão de projeto, não correção implantada nesse registro.

**Falha:** uma URL de WebSocket registrada em log expõe uma credencial reutilizável. Tratar como risco documentado e exigir evidência de correção no HEAD atual antes de afirmar escopo seguro de credenciais.

### Source and maturity

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md

*Historical evidence/source inspection only; no latest-head test or publication approval.*
