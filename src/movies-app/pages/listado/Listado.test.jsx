import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { usePagination } from '../../../Hooks/usePagination'
import { Listado } from './Listado'
import { mockedUsedNavigate } from '../../../setupTests'

jest.mock('../../../Hooks/usePagination')

const addOrRemoveFromFavs = jest.fn().mockResolvedValue({})

const initialValues = {
  currentmovie: [],
  loading: true,
  setLoading: () => {},
  moviList: [],
  moviListCopia: [],
  genres: [],
}
const movies = [
  {
    poster_path: 'htpps//www.mock.com',
    id: 123,
    title: 'mockedMovie',
    overview: 'a really good movie',
  },
]

usePagination.mockReturnValue(initialValues)

describe('testing on Listado', () => {
  beforeEach(() => jest.clearAllMocks())

  xtest('if loadin = true, must show: Cargando...', () => {
    render(
      <MemoryRouter>
        <Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />
      </MemoryRouter>,
    )

    expect(screen.getByText('Cargando...')).toBeTruthy()
  })
  beforeEach(() => jest.clearAllMocks())

  xtest('if loadin = false && !Movilist.length, must show: Sin lementos', () => {
    usePagination.mockReturnValue({ ...initialValues, loading: false })
    render(
      <MemoryRouter>
        <Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />
      </MemoryRouter>,
    )

    expect(screen.getByText('Sin elementos')).toBeTruthy()
  })

  xtest('if loadin = false && Movilist.length, must show: movieList', () => {
    usePagination.mockReturnValue({
      ...initialValues,
      loading: false,
      moviList: movies,
      moviListCopia: movies,
      currentmovie: movies,
    })

    render(
      <MemoryRouter>
        <Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />
      </MemoryRouter>,
    )
    screen.debug()
    expect(screen.getByLabelText('Card.title')).toBeTruthy()
    expect(screen.getByLabelText('Card.title').innerHTML).toEqual(
      'mockedMovie... ',
    )
  })

  xtest('search input on submmit must send the request', () => {
    usePagination.mockReturnValue({
      ...initialValues,
      loading: false,
      moviList: movies,
      moviListCopia: movies,
      currentmovie: movies,
    })

    render(
      <MemoryRouter>
        <Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />
      </MemoryRouter>,
    )

    const input = screen.getByRole('searchbox')
    const form = screen.getByLabelText('form')

    fireEvent.input(input, { target: { value: 'batman' } })
    fireEvent.submit(form)

    expect(mockedUsedNavigate).toHaveBeenCalledWith(
      '/resultados?keyword=batman',
    )
  })
  test('debe', () => {
  
    render(
      <MemoryRouter>
        <Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />
      </MemoryRouter>,
    )

    screen.debug()
  });
  
})
