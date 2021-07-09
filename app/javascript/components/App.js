import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import EditTodo from './EditTodo'
import './App.css'

const Nabvar = styled.nav`
  background: #e3d1ff;
  min-height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Logo = styled.div`
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 3px;
`

const NavItems = styled.ul`
  display: flex;
  width: 350px;
  max-width: 40%;
  justify-content: space-around;
  list-style: none;
`

const NavItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  width: 600px;
  max-width: 85%;
  margin: 20px auto;
`

function App() {
  return (
    <>
      <Nabvar>
        <Logo>
          TodoRails
        </Logo>
        <NavItems>
          <NavItem>
            <Link to="/todos">
              トップ画面へ
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/todos/new">
              新しいTodoを追加
            </Link>
          </NavItem>
        </NavItems>
      </Nabvar>
      <Wrapper>
        <Switch>
          <Route exact path="/todos" component={TodoList} />
          <Route exact path="/todos/new" component={AddTodo} />
          <Route path="/todos/:id/edit" component={EditTodo} />
        </Switch>
      </Wrapper>
    </>
  )
}

export default App