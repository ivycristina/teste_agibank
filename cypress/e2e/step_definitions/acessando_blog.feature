Feature: Acessar blog

Scenario: Validar busca
Given eu acesso o blog da agibank
When clicar na lupa e pesquisar a noticia
Then o blog exibirá os resultados encontrados com essa noticia informada


Scenario: Validar menu Serviços
Given eu acesso o blog da agibank
When clicar no menu Serviços