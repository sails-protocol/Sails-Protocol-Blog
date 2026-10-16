# Operando um Sails Node: responsabilidades e limites de falha

*Somente rascunho. Publicação não aprovada. Season 5, article 32.*

## Pergunta

Um node que reinicia no meio de uma negociação não pode depender do que estava na memória do processo. Suas responsabilidades precisam ser recuperáveis a partir de estado persistido e observações externas verificadas.

## Limite e desenho

Uma implementação de node pode aplicar autorização, validade de transições, resistência a replay e efeitos persistentes. Operadores também precisam gerenciar segredos, banco de dados, backups, migrações, monitoramento e incidentes. Isso não torna o node custodiante da carteira do usuário por padrão.

## Falha e evidência

Um exercício de reinício deve interromper a negociação entre o commit persistente e a resposta ao cliente, depois comprovar que a repetição não duplica efeitos econômicos. Requisitos de implantação e topologia suportada precisam ser verificados antes de isto virar um manual operacional.

*Verificação de fontes e referências exatas de API pendentes.*

## Teste de falha: reinício entre commit e resposta

Um nó confirma uma transição no PostgreSQL e cai antes de responder. O cliente reconecta e repete a solicitação. Se o nó depender de sinalizadores em memória, poderá executar novamente; se presumir falha da primeira chamada, poderá criar um segundo efeito externo. Workers simultâneos e retorno atrasado do provedor ampliam a incerteza.

**Alternativa:** coordenação local ao processo é simples, mas não garante autoridade durável entre workers. Verificações atômicas no banco e reconciliação específica da rede aumentam a complexidade operacional e tornam a recuperação testável. Backups e migrações devem preservar o significado econômico do estado, não apenas linhas.

**Próximo teste:** encerrar um worker após commit durável, repetir a operação em outro e reiniciar com retorno atrasado do provedor. Inspecionar estado, eventos, recibos e efeitos duplicados. A evidência existente de recuperação MULTISIG é delimitada e não comprova prontidão operacional entre redes.

## Evidência de fonte e fronteira de falha

A recuperação registrada cobre cenários MULTISIG específicos, não todas as redes. O próximo gate exige verificação operacional no HEAD exato; a fonte não autoriza lançamento.

- [RECOVERY_RECONCILIATION_CONFORMANCE_EVIDENCE.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/RECOVERY_RECONCILIATION_CONFORMANCE_EVIDENCE.md)
