import React from 'react';
import Task from './Task';
import { AnimatePresence, motion } from 'framer-motion';

function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <AnimatePresence>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <motion.li
              key={task.id}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
            >
              <Task 
                task={task} 
                toggleComplete={toggleComplete} 
                deleteTask={deleteTask} 
              />
            </motion.li>
          ))
        ) : (
          <p>No tasks added yet.</p>
        )}
      </AnimatePresence>
    </motion.ul>
  );
}

export default TaskList;
