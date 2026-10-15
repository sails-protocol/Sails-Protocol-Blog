# Governança de protocolo aberto e compatibilidade ao longo do tempo

*Temporada 7. Rascunho editorial. Fontes e revisão do CTO pendentes.*

## Pergunta

Um protocolo evolui enquanto aplicações e nós atualizam em ritmos diferentes. Uma mudança aparentemente pequena pode redefinir o significado econômico de um campo.

## Decisão: compatibilidade precisa nomear a propriedade exata

Número de versão não substitui contrato econômico. Um cliente pode decodificar a mensagem e ainda interpretar de outro modo uma taxa, um resultado de liquidação ou uma condição de autorização. Uma alegação séria identifica schema ou ruleset, par de implementações, operação, rede e testes que falhariam se a semântica mudasse. A constituição de invariantes separa princípios arquiteturais, obrigações executáveis e evidência verificável.

## Falha: conformidade da álgebra vira alegação universal

O registro examinado demonstra uma propriedade delimitada do avaliador da álgebra de condições, mas afirma que o ruleset publicado **não** compõe condições. Chamar isso de conformidade integral da composição extrapola o teste. A evidência de substituição de provedores também sustenta propriedades selecionadas, não interoperabilidade universal. A governança deve publicar tanto o que passou quanto o que não foi testado, incluindo migração para mudanças de significado econômico.


## Limite e decisão

A governança deve distinguir propostas, política revisada, implementação, verificação e implantação. Compatibilidade exige schemas versionados, regras de quebra, migrações e descontinuação transparente. Uma decisão congelada pelo CTO não equivale a consenso universal.

## Falha e evidência

Um cliente interpreta uma nova denominação de taxa como a antiga. Mesmo compilando, o resultado pode estar economicamente errado. Publique contratos versionados e testes de migração antes de afirmar compatibilidade.

*Não há alegação de implementação em produção nem aprovação para publicação.*

## Governança é hierarquia de alegações, não selo de lançamento

O documento de invariantes diferencia leis arquiteturais, obrigações concretas de implementação e evidência executável onde cabível. O registro de conformidade da álgebra de condições demonstra uma propriedade delimitada, mas afirma que o ruleset publicado não compõe condições. A evidência de substituição de provedores também sustenta propriedades selecionadas, não K3 integral ou interoperabilidade universal. Publicar uma versão ou passar um harness não certifica o protocolo inteiro.

**Gate de compatibilidade:** indicar identidade exata do ruleset, versão do protocolo/SDK, rede, implementação independente e vetor de teste falsificável. Preservar migração quando a semântica mudar; não transformar um PASS específico em compatibilidade universal.

### Fontes e maturidade

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROTOCOL_INVARIANTS.md
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/CONDITION_ALGEBRA_CONFORMANCE_EVIDENCE.md
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROVIDER_SUBSTITUTION_INVARIANCE_EVIDENCE.md

*Somente evidências históricas e inspeção de fontes; sem teste no HEAD atual nem aprovação de publicação.*

**Vetor negativo de compatibilidade:** usar dois clientes construídos independentemente com revisões diferentes de schema/ruleset. Ambos devem interpretar a mesma mensagem de negociação; em seguida, variar o significado econômico de um campo (denominação da taxa, identidade do beneficiário ou condição de liquidação). Conseguir ler a mensagem não basta: exigir resultados econômicos autorizados idênticos ou rejeição explícita por versão. Trata-se de cenário de verificação proposto, não de execução de conformidade comprovada.
