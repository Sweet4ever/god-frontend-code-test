import { CarList } from "../src/components/carList";
import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <CarList />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
