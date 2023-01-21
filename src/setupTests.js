
import '@testing-library/jest-dom';
import 'whatwg-fetch';
import 'jest-localstorage-mock';
import { getEnviroments } from './firebase/getEnviroments';


require('dotenv').config({
    path:'.env'
})

jest.mock('firebase/app', ()=>({
    initializeApp: jest.fn(),
    createUserWithEmailAndPassword : jest.fn(),
  onAuthStateChanged: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
  GoogleAuthProvider: jest.fn(),
  signInWithPopup: jest.fn(),
 })
)
jest.mock('firebase/auth', ()=>({
    getAuth : jest.fn(),
 
 })
)

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(),
    useSelector: () => (fn) => fn(),
}));
const state = {movies:{movies: [], moviesCopia:[], genres:[]}}

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(),
    useSelector: jest.fn().mockReturnValue(state) ,
}));
