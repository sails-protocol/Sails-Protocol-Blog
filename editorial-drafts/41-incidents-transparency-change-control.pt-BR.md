# Revisões de incidentes, transparência e controle de mudanças

*Season 6 / Temporada 6. Somente rascunho editorial. Auditoria de fontes e aprovação pendentes.*

## Pergunta

Uma indisponibilidade não é só estatística de uptime. Ela muda o que usuários podem presumir sobre depósitos, saques e liquidação externa.

## Limites e escolhas

Uma revisão deve separar sintomas observados, causa confirmada, fluxos afetados, mitigação, riscos abertos e marcos de recuperação. Um protocolo integrado a redes externas precisa separar suas ações das ações do operador ou da rede.

## Falha e verificação

Não use a narrativa de um incidente como prova de segurança. Cite relatórios primários e evidência da mitigação; publique correções quando o entendimento mudar.

*Este rascunho não comprova implementação verificada nem autoriza publicação.*

## Fronteira de evidência

Risco documentado não é incidente explorado nem correção implantada. **Falha:** confundir intenção documentada com comportamento verificado em produção. Evidência de execução no HEAD exato e aprovação pendentes.

- [THREAT_MODEL.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md)

## Cenário: recuperação parcial anunciada como recuperação total

Após incidente em uma rede externa, o operador restabelece depósitos, mas mantém uma modalidade de saque ou peg-out suspensa. Um aviso diz apenas "rede restabelecida". O usuário pode presumir que todas as rotas estão seguras, embora apenas parte tenha sido verificada. A falha de comunicação é distinta da falha técnica.

**Alternativa:** um status único e curto é fácil de distribuir, mas esconde riscos específicos por operação. Uma matriz de status por fluxo exige manutenção adicional e distingue recuperação observada, restrições e incertezas. A comunicação pública não deve expor segredos nem causas não confirmadas.

**Próximo teste:** montar cronologia simulada de incidente com recuperação parcial, relatos conflitantes do provedor e correção posterior. Exigir que cada atualização identifique operações afetadas, horário da evidência, riscos restantes, responsável e próxima verificação. Comparar o comunicado com o estado verificado de cada fluxo. É exercício editorial, não afirmação sobre incidente atual.
