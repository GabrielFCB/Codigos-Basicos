Tutorial de como Testar funções do servidor


Abrindo servidor
1. Baixar o projeto do Git
2. Abra a pasta do projeto em alguma IDE (Como Visual Code Studios)
3. Abrir o arquivo “app.js”
4. Abra o terminal na pasta do projeto
5. Coloque no terminal o comando “npm init -y” para iniciar o gerenciador de pacotes do Node.
6. Coloque no terminal o comando “npm install express” para baixar o framework de servidor Express
7. Coloque no terminal o comando “npm install body-parser” para baixar outro pacote que será usado
8. Coloque no terminal “node app.js” para iniciar o servidor. Se terminal exibir a porta que o servidor está rodando (http://localhost:3001), parabéns, o servidor está rodando corretamente!


Agora, iremos testar as funções disponíveis no servidor 




Criando Posts com Postman (vídeo com o percurso: https://www.youtube.com/watch?v=I4WfLCXsTSw&ab_channel=CarlosMendes)


1. Pesquise “Postman” no Google e entre no link da Chrome Web Store
2. Clique na opção de baixar o aplicativo no seu Chrome. Quando o download acabar, clique em abrir.
3. Ao abrir, você entrará numa área de login. O login é desnecessário, então apenas clique na última opção em azul que diz “Take me straight to the app”
4. Quando você entrar no aplicativo, duas janelas abrirão automaticamente. Você pode fechá-las
5. Coloque na URL ao lado o endereço do seu servidor rodando (http://localhost:3001) e clique em Send (lembrando que o aplicativo do servidor tem que estar aberto e rodando nesse endereço). Se você receber uma resposta de volta, parabéns, funcionou!
6. Agora, coloque mude a opção “Get” para “Post” e coloque http://localhost:3001/soma.
7. Agora, em baixo, selecione “Body” e em baixo, selecione a opção “Raw”
8. Ao lado, clique na opção que tem “Text” e selecione “JSON”
9. No espaço em branco, coloque 


{
        “a”:1,
        “b”:2
}


Clique em “Send”. Se você receber a soma de 1 + 2, parabéns, o servidor está respondendo corretamente!


Se quiser testar outros números, basta trocar os valores de “a” e “b”. Além disso, você pode testar operações de subtração, divisão e multiplicação, basta colocar“http://localhost:3001/subtracao”, “http://localhost:3001/multiplicacao”, “http://localhost:3001/divisao” antes de dar Send