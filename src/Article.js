import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Article = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Título do Artigo.</h1>
          <p className="lead">Conteúdo do Artigo. </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Article;
