# Engenharia orientada por IA no Sails Protocol

*Rascunho editorial institucional. Não aprovado para publicação. Auditoria de atribuição das fontes de referência pendente.*

## Por que documentamos o método

O Sails Protocol não é apenas um conjunto de módulos. É um esforço de engenharia voltado à coordenação econômica sob incerteza, em que uma resposta plausível não comprova a segurança do dinheiro, da identidade, da autorização ou da liquidação.

A assistência de IA pode ajudar a inspecionar código, propor soluções, escrever testes, comparar alternativas e manter a documentação. Mas a confiança expressa por um modelo de linguagem não é garantia de segurança. A autoridade humana para decidir, as evidências reproduzíveis e os limites registrados com clareza continuam necessários.

## Um fluxo de trabalho organizado em torno de evidências

O projeto descreve o trabalho por meio de missões definidas, escopo explícito, coleta de evidências, etapas de revisão e mudanças controladas. Uma apresentação pública útil do método deve explicar:

1. **Descobrir e especificar:** identificar a falha real do usuário ou da operação econômica e o invariante que precisa resistir a ela.
2. **Projetar com limites claros:** documentar quem controla chaves, dinheiro, transições de estado, evidências e fatos de pagamentos externos.
3. **Implementar e verificar:** preferir mudanças concretas no código, persistência real e testes de reinício e concorrência a explicações ou êxitos demonstrados apenas com mocks.
4. **Contestar:** encarregar revisores ou agentes de buscar contraexemplos, condições de corrida, confusão de autoridade e premissas sem comprovação.
5. **Gate do CTO e congelamento:** registrar a decisão, o escopo exato, referências imutáveis, problemas não resolvidos e aquilo que explicitamente *não* foi aprovado.
6. **Publicar e aprender:** somente após as aprovações humanas aplicáveis; reavaliar decisões quando as evidências mudarem.

Essas etapas são uma representação editorial da metodologia, não uma afirmação de que todos os fluxos ou automações do projeto estejam implementados exatamente dessa forma.

## O que agentes de IA podem e não podem decidir

Um agente pode formular uma hipótese, executar um teste autorizado, inspecionar um PR e relatar evidências. Não deve transformar uma afirmação não revisada em garantia de produção, ocultar um problema material, fazer merge silenciosamente em uma branch protegida ou redefinir sozinho uma política econômica.

**Nenhum problema material para debaixo do tapete** é uma disciplina de escalonamento transparente. Um teste que falhou, um comportamento incerto de fornecedor ou um limite de autorização não resolvido permanece visível até ser solucionado ou explicitamente aceito por quem tem autoridade para decidir.

## Exemplo: corrida na conclusão de uma negociação

Imagine duas requisições concorrendo para concluir a mesma negociação enquanto o servidor reinicia. Um fluxo assistido por IA poderia propor uma transação de banco de dados, criar um teste de falha e repetição, inspecionar o resultado e preparar um relatório de revisão. A evidência decisiva não é a narrativa do agente, mas a pós-condição durável observada nas condições de teste definidas, avaliada diante do invariante econômico.

## Influências intelectuais e autores

**Atribuição pendente.** O responsável pelo projeto informa que os autores e trabalhos que inspiraram o método Sails estão registrados no GitHub. Antes de citá-los, recuperar e inspecionar os documentos exatos, verificar nomes de autores e obras, distinguir inspiração direta de semelhança geral e citar os arquivos relevantes ou publicações oficiais. Não inventar endossos nem sugerir que esses autores contribuíram para o Sails Protocol.

Estrutura proposta para cada influência verificada:
- Autor e obra (título correto, data e link primário).
- Ideia que influenciou o método.
- Como o Sails a adaptou, com exemplo concreto.
- Em que o Sails deliberadamente se diferencia.
- Referência à fonte de verdade e data da revisão.

## Verificação antes da publicação

- Identificar o documento canônico da metodologia e as notas originais sobre autores e inspirações no repositório GitHub do Sails Protocol.
- Verificar os nomes reais dos papéis de engenharia, etapas e gates em revisões imutáveis.
- Acrescentar exemplo com evidências exatas de PR, commit, CI e teste de banco de dados.
- Preparar versões EN, PT-BR e ES e revisão linguística independente.
- Obter aprovação factual do CTO e autorização de publicação do responsável.

*Este rascunho é intencionalmente conservador quanto a fontes não verificadas e não afirma prontidão para produção.*
