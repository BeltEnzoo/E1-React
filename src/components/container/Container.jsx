import React from 'react'
import { Container, Header, TaskInputWrapper, Input, AddButton, TaskList, TaskItem, TaskText, DeleteButton, DeleteAll } from './conteiner-styled'

const ContainerGral = () => {
  return (
    <>
      <Container>
        <Header> Nuctasks </Header>

        <TaskInputWrapper>
          <Input
            type="text"
            placeholder="Añadir nueva tarea"
          />
          <AddButton>Agregar</AddButton>
        </TaskInputWrapper>
        <TaskList>
          <TaskItem>
            <TaskText>Tarea 1</TaskText>
            <DeleteButton>Borrar</DeleteButton>
          </TaskItem>
        </TaskList>
        <DeleteAll>Borrar todo</DeleteAll>
      </Container>
    </>
  )
}
export default ContainerGral