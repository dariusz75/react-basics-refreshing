--- Plik Form.js ---
Aby uniemozliwic dodawanie pozycji z pustymi polami wystarczy ze pola "input" przypiszemy
wlasciwosc "required".
Aby umozliwic dodawanie pozycji bez fotki, nalezy nie dodawac atrybutu required
a w celu nie wyswietlania brzydkiej ikonki braku obrazka nalezy:

--- Plik ListItem.js ---
W ListItem.propTypes, image: PropTypes.string.isRequired usuwamy .isRequired
a w ListItem.defaultProps dodajemy image: null, jako wartosc domyslna.
Na koniec musimy zaimplementowac logike dla wyswietlania tagu z odpowiednia klasa,
w zaleznosci od tego czy dodalismy zdjecie, czy nie.
Patrz const ListItem.
