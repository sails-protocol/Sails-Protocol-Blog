# Privacidade, metadados e correlação de identidades

*Temporada 6. Somente rascunho editorial. Auditoria de fontes e aprovação pendentes.*

## Pergunta

Um identificador portável pode simplificar acesso entre aplicações e também facilitar a correlação de negociações independentes. Portabilidade e privacidade não caminham automaticamente juntas.

## Limites e escolhas

Modele identificadores públicos, horários, histórico de ofertas, metadados de evidências, IDs de provedores e logs. Prefira minimização de dados, divulgação delimitada e retenção clara. Assinar com uma chave não significa revelar a mesma identidade permanente a toda contraparte.

## Falha e verificação

Uma alegação de privacidade exige rastrear fluxos reais, armazenamento e observabilidade da rede. Este artigo não afirma anonimato de implementação implantada.

*Este rascunho não comprova implementação verificada nem autoriza publicação.*

## Evidência de fonte e fronteira de falha

Catálogos de ameaças e design de identidade não comprovam desvinculação nem privacidade implantada. O próximo gate exige verificação operacional no HEAD exato; a fonte não autoriza lançamento.

- [THREAT_MODEL.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md)

## Teste concreto de correlação de identidade

Uma pessoa usa a mesma identidade pública em duas aplicações independentes. Um observador combina horários, valores recorrentes de ofertas, referências de provedores e um identificador estável para inferir que as duas atividades pertencem à mesma pessoa. Nenhuma aplicação divulga nome civil, mas os metadados combinados ainda podem revelar comportamento.

**Alternativa:** identificador universal facilita portabilidade de conta e consulta de reputação, mas cria chave persistente de rastreamento entre mercados. Identificadores distintos por serviço e divulgação seletiva reduzem correlação, porém complicam recuperação, provas de disputa e portabilidade de reputação.

**Próximo teste:** listar campos que saem de cliente, nó, WebSocket, logs e provedor de evidências; depois tentar correlacionar duas negociações usando apenas dados observáveis. Medir retenção e acesso a cada identificador. É auditoria de privacidade proposta, não prova de anonimato ou impossibilidade de correlação em produção.
