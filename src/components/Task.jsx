import React from 'react';
import { motion } from 'framer-motion';

function Task({ task, toggleComplete, deleteTask }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
    >
      {task.text}
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </motion.div>
  );
}

export default Task;
