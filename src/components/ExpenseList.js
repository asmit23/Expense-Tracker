import React from 'react';
import ExpenseItem from './ExpenseItem';
import { ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ExpenseList = ({ expenses }) => {
  return (
    <motion.div initial="hidden" animate="visible" variants={listVariants} className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </motion.div>
  );
};

export default ExpenseList;
