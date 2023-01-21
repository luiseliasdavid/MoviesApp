import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { usePagination } from "../../../Hooks/usePagination";
import { Listado } from "./Listado";

jest.mock("../../../Hooks/usePagination") 

const addOrRemoveFromFavs = jest.fn().mockResolvedValue({})

describe('Name of the group', () => {

  usePagination.mockResolvedValue({
    currentmovie : [],
    loading: true,
    setLoading: ()=> {},
    moviList: {},
    moviListCopia: {},
    genres:[],
  })
  beforeEach(() => jest.clearAllMocks() );
    test('hola', () => {
        
         render(          
              <MemoryRouter>
                <Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />
              </MemoryRouter>
              )
       
     //screen.debug()
     
     //expect( screen.getByText('Cargando...') ).toBeTruthy()
    });
    
});

/*
const usePagination = jest.fn().mockReturnThis({
    currentmovie : [{
        title:'jhjkhk',
        overview: 'https//prueba',
        id: 123,
        
        }],
    loading: true,
    setLoading: ()=> {},
    moviList: {},
    moviListCopia: {},
    genres:[],
  })


*/