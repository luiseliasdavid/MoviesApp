
import { handleChange } from "./handleChange";



describe('handleChange test', () => {
    
    test('must return new state', () => {
        const event = { 
         target:{
          name: 'password',
          value: 123 }}
         const userData = {};
         const setUserData= jest.fn()
     handleChange(event,setUserData,userData)
     
      expect(setUserData).toBeCalledWith({password: 123 }) 
    });
    
    
});