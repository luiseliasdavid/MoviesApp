import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../../redux/store";
import { Listado } from "./Listado";

describe('Listado test', () => {

    const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));



    test('debe mostrar el componente correctamente', () => {
        
        render(
        
        
        <Provider store={store}>
        <Listado/>
        </Provider>
       
        );
        
       
        expect(screen.getByText('todo 1')).toBeTruthy()
    });
    
    
});