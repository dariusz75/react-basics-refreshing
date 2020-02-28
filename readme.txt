Aby komponentowi przypisac propsy musimy wykonac nastepujace czynnosci:

--- ListItem.js ---
1. W funkcji komponentu podajemy parametr props - const ListItem = (props) => (...
   Od tej pory mozemy w tym komponencie deklarowac propsy o dololnej nazwie, 
   i uzytac ich w dowolny sposob, np z atrybutami, wezlami tekstowymi, etc...
   Musimy pamietac ze aby je zadeklarowac musimy sie odwolac 
   do naszego parametru props, np. - {props.name}
   <h2 className="listItem__name">{props.name}</h2>

--- ListWrapper.js ---
Nastepnie aby przypisac danemu propsowi jakas wartosc,
przechodzimy do komponentu rodzica, w ktorym nasz komponent ListItem
jest zagniezdzony i podajemy wartosc propsa w tagu komponentu, 
w nastepujacy sposob - name={'Dariusz Franczak'}