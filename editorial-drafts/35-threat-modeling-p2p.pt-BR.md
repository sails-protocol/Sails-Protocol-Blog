# Modelagem de ameaças em um protocolo econômico P2P

*Temporada 6. Rascunho editorial. Auditoria das fontes e aprovação pendentes.*

## Pergunta

Comprador, vendedor, operador e provedor podem agir de forma diferente do fluxo ideal. A modelagem começa identificando quem pode mentir, desaparecer ou perder acesso.

## Decisão: identificar atacante e ponto de enforcement

Uma ameaça não está mitigada apenas porque aparece no catálogo. Para cada cenário, a revisão precisa indicar quem ataca, qual ativo está em risco, onde está a fronteira de confiança, que código aplica a proteção e o que permanece incerto. No WebSocket, um rate limit HTTP não controla automaticamente mensagens após o upgrade. O modelo de ameaças registra um limitador por participante como melhoria de instância única, não como garantia distribuída. Também documenta o risco de token de sessão com privilégios amplos na query string. São fronteiras diferentes e exigem provas diferentes.

## Falha: segurança que existe só no desenho

Se múltiplas conexões ou nós contornam um contador local, a alegação sobre limite precisa explicitar esse escopo. Se uma URL de sessão vai para logs, um token válido pode vazar apesar de assinaturas corretas em outros fluxos. O registro descreve achados históricos; verificar se persistem no HEAD atual exige nova revisão.

## Catálogo de ameaças versus mitigação demonstrada

O catálogo do Sails cita ataques Sybil, liquidez falsa e exposição de credenciais, mas alerta expressamente que mitigação documentada só existe quando há evidência de implementação e implantação. Também registra um limite do WebSocket: tokens de sessão com privilégios amplos em query strings podem vazar para logs ou histórico; um token curto e restrito para handshake é decisão de projeto, não correção implantada nesse registro.

**Falha:** uma URL de WebSocket registrada em log expõe uma credencial reutilizável. Tratar como risco documentado e exigir evidência de correção no HEAD atual antes de afirmar escopo seguro de credenciais.

**Precisão do estado das fontes:** o registro de ameaças marca a ausência original de limite em `SEND_MESSAGE` como **resolvida em 15/08/2026** com contador de janela fixa por participante, local ao processo (padrão documentado de 20 mensagens/10 segundos). Isso não comprova enforcement entre instâncias. A exposição de token de sessão completo na query string do WebSocket é um risco residual separado; o token curto e restrito ao WS permanece proposta naquele registro. Nenhuma dessas observações verifica, por si só, a configuração hoje implantada.

## Próxima pergunta

Quais evidências no commit exato mostram se as credenciais WebSocket têm escopo restrito e se os limites de mensagens funcionam entre workers e reconexões, sem confundir proposta arquitetural com controle implantado?


**Limite comprovado nas fontes:** o [registro de ameaças, linhas 77–88](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md#L77-L88) classifica o limitador como proteção de instância única; as [linhas 161–176](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md#L161-L176) distinguem a decisão ainda pendente sobre escopo de token. Nenhum desses registros demonstra mitigação em toda a produção.

### Fonte e maturidade da evidência

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md

*Somente registro histórico de evidências e inspeção de fontes; sem testes no HEAD atual ou aprovação para publicação.*

*Este rascunho não comprova uma implementação verificada nem autoriza sua publicação.*