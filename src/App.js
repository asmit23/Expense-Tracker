import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 className="header">Expense Tracker</h1>
          <ExpenseForm addExpense={addExpense} />
          <ExpenseList expenses={expenses} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
