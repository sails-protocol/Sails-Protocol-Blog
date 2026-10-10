# Máquinas de estados e invariantes econômicos na prática

*Somente rascunho. Publicação não aprovada. Season 5, article 29.*

## Pergunta

Uma máquina de estados é útil porque uma ação econômica precisa ter significado preciso. Uma negociação não pode ficar simultaneamente concluída e em disputa por causa de requisições concorrentes contraditórias.

## Limite e desenho

Modele transições permitidas separadamente dos efeitos externos. Um participante autenticado solicita uma transição, uma autoridade persistente verifica pré-condições e apenas um resultado válido é confirmado. Respostas do provedor e tentativas repetidas do cliente são entradas, não prova automática de autorização.

## Falha e evidência

O diagrama representa uma invariante ilustrativa, não a máquina de estados canônica de produção. O próximo passo é comparar cada transição com definições do código e testes adversariais em commit imutável.

*Verificação de fontes e referências exatas de API pendentes.*
