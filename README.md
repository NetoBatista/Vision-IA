# Vision-IA

Projeto *experimental* para utilizar a API VISION do google para análise de imagens. 

# API VISION
Essa API apresenta modelos avançados de machine learning pré-treinados e pode ser utilizada por meio da tecnologia REST. Essa API apresenta métodos para rotular e classificar imagens onde contém milhões de categorias pré-definidas. além de apresentar formas de detectação de objetos, rostos e textos.

Mais informações sobre a API pode ser encontrada em: https://cloud.google.com/vision/

# Como utilizar
1- Criar uma chave de autenticação seguindo os passos do site: https://cloud.google.com/vision/docs/auth?hl=pt-br 

2- Após seguir todos os passos e obter a chave de acesso, basta apenas substituir a chave em *content.vision.key* que se apresenta no arquivo scripts/vision.js

3- Escolha ou tire uma foto uma usando a camera do computador 

4- Clicar em *Analyze*

*Um request será iniciado e ao ser finalizado irá ser exibido uma tabela onde irá conter as descrições retornadas da API Vision e a precição de cada descrição retornada*


# Observação 

* Está estruturado para receber os dados de forma que a *API VISION* apresente o *type* como *LABEL_DETECTION*. Caso o *type* seja alterado a estrutura do projeto deve ser atualizada *
* O termo *maxResults* pode ser alterado para informar o máximo de descrições que podem ser retornadas da API

## Imagens

### Lhama 
<img src="https://github.com/NetoBatista/Vision-IA/blob/master/examples/example1.jpeg" width="500px">

### Zebra
<img src="https://github.com/NetoBatista/Vision-IA/blob/master/examples/example2.jpeg" width="500px">

### Cidade
<img src="https://github.com/NetoBatista/Vision-IA/blob/master/examples/example3.jpeg" width="500px">

## Autor

| [<img src="https://avatars0.githubusercontent.com/u/23426240?s=115&v=4"><br><sub>@NetoBatista</sub>](https://github.com/NetoBatista) |
| :---: |
