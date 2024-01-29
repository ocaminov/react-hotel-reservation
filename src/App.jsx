import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HotelList from "./components/HotelList";
import { Route, Switch } from "wouter";
import HotelDetails from "./components/HotelDetails";
import { Toaster } from "react-hot-toast";

const client = new QueryClient();

//En esta aplicacion se usa Zustand:manejo del estado global de la aplicacion, React Query:llamadas y fetching de datos, React Hook Form: manejo y control de formularios, React Hot Toast: notificaciones, Wouter:enrutamiento, y MaterialUI para los estilos CSS

function App() {
  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />
      <QueryClientProvider client={client}>
        <Switch>
          <Route path="/" component={HotelList} />
          <Route path="/hotel/:id" component={HotelDetails} />
        </Switch>
      </QueryClientProvider>
    </>
  );
}

export default App;
