import {} from '@chakra-ui/icons';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import DarkModeIconButton from './components/DarkModeIconButton';
import { ColumnType } from './utils/enums';

function App() {
  return (
    <main>
      
      <DarkModeIconButton position="absolute" top={0} right={2} />
      <DndProvider backend={HTML5Backend}>
        <Container maxWidth="container.lg" px={4} py={10}>
          <SimpleGrid
            columns={{ base: 1, md: 4 }}
            spacing={{ base: 16, md: 4 }}
          >
            <Column column={ColumnType.TO_DO} />
            <Column column={ColumnType.IN_PROGRESS} />
            <Column column={ColumnType.BLOCKED} />
            <Column column={ColumnType.COMPLETED} />
          </SimpleGrid>
        </Container>
      </DndProvider>
    </main>
  );
}

export default App;
