import { render } from "@testing-library/react";
import { GifItem } from "../../src/Components/GifItem";
//Declaracion de constantes
const title='Saitana';
const url='http://www.google.com';

//Prueba de  funcionalidades

describe('Pruebas en < GifItem />', () => { 
//Primer Test   
    test('debe de hacer macch con el snapshot', () => { 
       const {container} =render(<GifItem title={title}  url={url}/>);
       expect(container).toMatchSnapshot();
     });
//Segundo test 
     test('Debe de mostrar la imagen  con el url y el Alt  indicado', () => { 
        render(<GifItem title={title} url={url}/>)
        screen.Debug();
     });
//Tercer Test
    // test('Debe de mostrar el titulo en el componente', () => { 
    //     render(<GifItem title={title}  url={url}/>);
    //     expect(screen.getbyText(title)).toBeTruthy();
    // });

});