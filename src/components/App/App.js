import React, { useContext } from "react";
import Dock from "../Dock/Dock";
import Calender from "../Calender/Calender";
import ToolBar from "../ToolBar/ToolBar";
import { DragDropContext } from "react-beautiful-dnd";
import { StyledApp, Container, Main } from "./style";
import CalendarContext, {
  CalendarProvider,
} from "../../context/CalendarContext";

function AppContainer() {
  const { moveTicket } = useContext(CalendarContext);

  function handleDragEnd({ destination, source, draggableId }) {
    moveTicket(draggableId, source, destination);
  }

  return (
    <StyledApp>
      <DragDropContext onDragEnd={e => handleDragEnd(e)}>
        <Container>
          <Dock />
          <Main>
            <ToolBar />
            <Calender />
          </Main>
        </Container>
      </DragDropContext>
    </StyledApp>
  );
}

function App() {
  return (
    <CalendarProvider>
      <AppContainer />
    </CalendarProvider>
  );
}

export default App;
