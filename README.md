Anime Fetcher App

Este é um aplicativo desenvolvido com o propósito de buscar informações sobre Animes de diferentes websites. O objetivo principal é criar um componente de ação que execute a busca no servidor do website de Animes.

Instruções
1. Criar componente de ação
Desenvolva um componente de ação que realize a busca no website de Animes. Inicialmente, teste a função utilizando console.log() para exibir os dados no terminal, pois este é um componente do lado do servidor.
2. Ajustar função para utilizar .map
Modifique a função para retornar um .map dos dados em vez de apenas a data. Implemente o mapeamento no próprio componente.
3. Adicionar função à página inicial
Integre a função à página inicial, realizando a busca na página 1 (passe 1 como argumento).
4. Utilizar o hook inView do React
Configure o componente "Load More" como um componente do lado do cliente e utilize o hook inView do React. Este componente será responsável por gerenciar estados e deverá ser configurado adequadamente.
5. Criar useEffect para fetch na API
Implemente um useEffect que será acionado cada vez que o inView for ativado. Esse efeito deverá realizar um fetch na API, adicionando os dados à lista armazenada em um estado.
6. Contagem de página
Crie uma contagem de página que aumentará a cada vez que o useEffect for acionado, garantindo a busca na próxima página da API.
7. Criar client component para Motion
Desenvolva um componente cliente para o Motion (motion.div). Substitua a primeira div do componente do servidor (AnimeCard) por este MotionDiv para gerar o efeito de animação necessário.
Lembre-se de seguir as melhores práticas de organização de código e documentação para garantir a legibilidade e manutenção do aplicativo.


ENGLISH


Anime Fetcher App
This is an application developed with the purpose of fetching information about Animes from various websites. The main goal is to create an action component that performs the search on the Anime website server.

Instructions
1. Create action component
Develop an action component that performs the search on the Anime website. Initially, test the function using console.log() to display the data in the terminal, as this is a server-side component.
2. Adjust function to use .map
Modify the function to return a .map of the data instead of just the date. Implement the mapping within the component itself.
3. Add function to home page
Integrate the function into the home page, performing the search on page 1 (pass 1 as an argument).
4. Use React's inView hook
Configure the "Load More" component as a client-side component and use the inView hook from React. This component will be responsible for managing states and should be set up accordingly.
5. Create useEffect for API fetch
Implement a useEffect that will be triggered each time inView is activated. This effect should fetch data from the API, adding it to the list stored in a state.
6. Page count
Create a page count that increases each time the useEffect is triggered, ensuring the search on the next page of the API.
7. Create client component for Motion
Develop a client component for Motion (motion.div). Replace the first div of the server-side component (AnimeCard) with this MotionDiv to generate the required animation effect.
Remember to follow best coding and documentation practices to ensure readability and maintainability of the application.
