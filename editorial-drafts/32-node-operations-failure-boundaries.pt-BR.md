# Operando um Sails Node: responsabilidades e limites de falha

*Somente rascunho. Publicação não aprovada. Season 5, article 32.*

## Pergunta

Um node que reinicia no meio de uma negociação não pode depender do que estava na memória do processo. Suas responsabilidades precisam ser recuperáveis a partir de estado persistido e observações externas verificadas.

## Limite e desenho

Uma implementação de node pode aplicar autorização, validade de transições, resistência a replay e efeitos persistentes. Operadores também precisam gerenciar segredos, banco de dados, backups, migrações, monitoramento e incidentes. Isso não torna o node custodiante da carteira do usuário por padrão.

## Falha e evidência

Um exercício de reinício deve interromper a negociação entre o commit persistente e a resposta ao cliente, depois comprovar que a repetição não duplica efeitos econômicos. Requisitos de implantação e topologia suportada precisam ser verificados antes de isto virar um manual operacional.

*Verificação de fontes e referências exatas de API pendentes.*
