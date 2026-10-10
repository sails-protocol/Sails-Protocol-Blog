# Modelagem de ameaças em um protocolo econômico P2P

*Season 6 / Temporada 6. Somente rascunho editorial. Auditoria de fontes e aprovação pendentes.*

## Pergunta

Comprador, vendedor, operador e provedor podem agir de forma diferente do fluxo ideal. A modelagem começa identificando quem pode mentir, desaparecer ou perder acesso.

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
