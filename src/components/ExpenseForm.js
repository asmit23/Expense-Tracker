import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';

const formVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [area, setArea] = useState('');
  const [members, setMembers] = useState('');
  const [excludeMembers, setExcludeMembers] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const membersArray = members.split(',').map(member => member.trim());
    const excludeMembersArray = excludeMembers.split(',').map(member => member.trim());
    addExpense({ id: uuidv4(), title, amount, area, members: membersArray, excludeMembers: excludeMembersArray });
    setTitle('');
    setAmount('');
    setArea('');
    setMembers('');
    setExcludeMembers('');
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={formVariants} className="form-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formArea">
          <Form.Label>Area</Form.Label>
          <Form.Control type="text" value={area} onChange={(e) => setArea(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formMembers">
          <Form.Label>Group Members (comma-separated)</Form.Label>
          <Form.Control type="text" value={members} onChange={(e) => setMembers(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formExcludeMembers">
          <Form.Label>Exclude Members (comma-separated)</Form.Label>
          <Form.Control type="text" value={excludeMembers} onChange={(e) => setExcludeMembers(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Add Expense
        </Button>
      </Form>
    </motion.div>
  );
};

export default ExpenseForm;
