import React from 'react';
import { Table } from 'reactstrap';

const Footer = (props) => {
  return (
    <Table borderless>
      <thead>
        <tr>
          <th>#</th>
          <th>Primeiro Nome</th>
          <th>Sobrenome</th>
          <th>Nome de usuário</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mario</td>
          <td>Padrao</td>
          <td>@Luccazx12</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Patrick</td>
          <td>Borges</td>
          <td>@Patricksp08</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Oséias</td>
          <td>Farias</td>
          <td>@Oseias-maker</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>João</td>
          <td>Otavio</td>
          <td>@JoaoOFS</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Footer;