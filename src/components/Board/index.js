import React from 'react';
import { loadLists } from '../../services/api'

import List from '../List';

import { Container } from './styles';

export default function Board() {
  const lists = loadLists();

  return (
    <Container>
      {lists.map(list => <List key={list.title} data={list}/>)}
    </Container>
  );
}
