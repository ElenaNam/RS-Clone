import { createContext } from 'react';

interface MyContext {
  open: boolean
  isOpen: (val: boolean) => void
}

const InitialValue: MyContext = {
  open: false,
  isOpen: ((a:boolean) => a)
};

const Context = createContext <MyContext>(InitialValue);


export default Context;