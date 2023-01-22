import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { usePagination } from '../../../Hooks/usePagination'
import { Listado } from './Listado'

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

  test('if loadin = true, must show: Cargando...', () => {
    render(
      <MemoryRouter>
        <Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />
      </MemoryRouter>,
    )

    expect(screen.getByText('Cargando...')).toBeTruthy()
  })
  beforeEach(() => jest.clearAllMocks())

  test('if loadin = false && !Movilist.length, must show: Sin lementos', () => {
    usePagination.mockReturnValue({ ...initialValues, loading: false })
    render(
      <MemoryRouter>
        <Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />
      </MemoryRouter>,
    )

    expect(screen.getByText('Sin elementos')).toBeTruthy()
  })

  test('if loadin = false && Movilist.length, must show: movieList', () => {
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
})
