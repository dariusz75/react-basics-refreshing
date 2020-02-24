Aby przeslac/pobrac dane z komponentu dziecka do komponentu rodzica zacznijmy od utworzenia 
komponentu dziecka bedacego jednoczesnie formularzem - Form/Form.js

Przechodzimy do komponentu rodzica czyli App.js i tworzmy funkcje odpowiadajaca za dodanie rekordu - addItem.
Nastepnie przypisujemy ja jako props submitFn komponentu Form - <Form submitFn={this.addItem} />

Przechodzimy do komponentu dziecka czyli do Form.js
I podajemy {submitFn} jako argument funkcji Form oraz jako wartosc eventu onSubmin, dla formy.
