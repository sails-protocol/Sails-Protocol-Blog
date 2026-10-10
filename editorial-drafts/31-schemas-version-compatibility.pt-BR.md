# Contratos de protocolo, schemas e compatibilidade entre versões

*Somente rascunho. Publicação não aprovada. Season 5, article 31.*

## Pergunta

Um cliente e um node podem funcionar corretamente isoladamente e ainda discordar sobre o significado de um campo. A divergência se torna perigosa quando o campo afeta valor, ativo, identidade ou autoridade de liquidação.

## Limite e desenho

Schemas são contratos executáveis apenas quando a validação acontece no limite relevante. O versionamento precisa distinguir metadados adicionais de mudanças no significado econômico. Campos críticos desconhecidos não devem ser ignorados silenciosamente, e um cliente não pode presumir que um node novo preserva qualquer contrato econômico antigo.

## Falha e evidência

Afirmações de compatibilidade exigem testes com fixtures entre versões e políticas de migração precisas. Nomes de pacotes, versões de schemas e matrizes de suporte devem ser conferidos no código antes de publicar uma tabela.

*Verificação de fontes e referências exatas de API pendentes.*

## Fronteira examinada no código

Conformidade delimitada da álgebra não comprova composição do ruleset nem compatibilidade universal. Fronteira documentada não é prova de execução no HEAD atual; testar a falha contra estado durável antes de afirmar prontidão.

- [CONDITION_ALGEBRA_CONFORMANCE_EVIDENCE.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/CONDITION_ALGEBRA_CONFORMANCE_EVIDENCE.md)

## Decisão de compatibilidade: significado econômico antes do número da versão

Um schema pode ser aceito e, ainda assim, cliente e nó discordarem sobre o que uma operação autoriza. A conformidade registrada da álgebra de condições cobre propriedades delimitadas; não comprova composição do ruleset publicado nem compatibilidade retroativa universal. Uma migração precisa definir compatibilidade estrutural e semântica, inclusive a rejeição de campos econômicos desconhecidos ou alterados.

**Falha:** um cliente antigo ignora uma condição nova, mas exibe a negociação como executável. **Evidência necessária:** testes com fixtures de cliente antigo/nó novo e cliente novo/nó antigo, casos negativos, versões fixadas e política de migração aprovada. Compartilhar a versão do pacote não é prova de segurança.

- [Evidência da álgebra de condições](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/CONDITION_ALGEBRA_CONFORMANCE_EVIDENCE.md)
