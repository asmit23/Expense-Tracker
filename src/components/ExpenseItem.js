import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const ExpenseItem = ({ expense }) => {
  const { title, amount, area, members, excludeMembers } = expense;
  const includedMembers = members.filter(member => !excludeMembers.includes(member));
  const splitAmount = (amount / includedMembers.length).toFixed(2);

  return (
    <motion.div initial="hidden" animate="visible" variants={itemVariants} className="expense-item">
      <span>{title}</span>
      <span>${amount}</span>
      <span>{area}</span>
      <span>Split: ${splitAmount} per person</span>
      <span>Members: {includedMembers.join(', ')}</span>
    </motion.div>
  );
};

export default ExpenseItem;
