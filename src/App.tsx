import React from 'react';
import { AppContainer } from "./styled"
import { Column } from "./Column"
import { Card } from "./Card"
import { AddNewItem } from './AddNewItem';

const App = function () {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate App Scaffold"/>
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript"/>
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing"/>
      </Column>
      <AddNewItem toggleButtonText="+ Add anotherlist" onAdd={console.log} />
    </AppContainer>

  );
}

export default App;
