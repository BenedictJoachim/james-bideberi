// pages/photography.tsx
import { Container, Text } from '@nextui-org/react';
import { motion } from 'framer-motion';

const Photography = () => {
  return (
    <Container css={{ padding: '0 2rem', '@sm': { padding: '0 3rem' }, '@md': { padding: '0 4rem' } }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Text h1 css={{ textAlign: 'center', '@sm': { fontSize: '1.5rem' }, '@md': { fontSize: '2rem' } }}>Photography Services</Text>
      </motion.div>
      <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
        <Text h2 css={{ textAlign: 'center', '@sm': { fontSize: '1.5rem' }, '@md': { fontSize: '2rem' } }}>Section 1</Text>
        <Text css={{ textAlign: 'center' }}>Content for section 1...</Text>
      </motion.div>
      <motion.div initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
        <Text h2 css={{ textAlign: 'center', '@sm': { fontSize: '1.5rem' }, '@md': { fontSize: '2rem' } }}>Section 2</Text>
        <Text css={{ textAlign: 'center' }}>Content for section 2...</Text>
      </motion.div>
      <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
        <Text h2 css={{ textAlign: 'center', '@sm': { fontSize: '1.5rem' }, '@md': { fontSize: '2rem' } }}>Section 3</Text>
        <Text css={{ textAlign: 'center' }}>Content for section 3...</Text>
      </motion.div>
      <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
        <Text h2 css={{ textAlign: 'center', '@sm': { fontSize: '1.5rem' }, '@md': { fontSize: '2rem' } }}>Section 4</Text>
        <Text css={{ textAlign: 'center' }}>Content for section 4...</Text>
      </motion.div>
    </Container>
  );
};

export default Photography;
