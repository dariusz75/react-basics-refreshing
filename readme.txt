OPEN MODAL BUTTON

--- Root.js ---
1. Tworzymy nowa wartosc w state isModalOpen: false
2. W metodzie render() tworzyny nastepujaca zmienna - const isModalOpen = this.state.isModalOpen;
   aby uniknac koniecznosci zapisu this.state.isModalOpen
3. Oplatamy <Modal /> w nastepujaca logike {isModalOpen && <Modal />} dzieki czmu nasz modal zostaje wylaczony
4. Tworzymy funkcje sluzaca do otwierania modala
    openModalHandler = () => {
    this.setState({
      isModalOpen: true
    });
  }
5. Funkcje openModalHandler przekazujemy do Header poniewaz w nim znajduje sie 
   nasz button odpowiedzialny za otwieranie modala.
   Robimy to za pomoca wlasciwosci openModal - <Header openModal={this.openModalHandler} /> 

--- Header.js ---
1. Zmiennej Header podajemy parametr props - const Header = (props) => ...
2. Buttonowi przypisujemy event onClick i odwolujemy go do wlasciwosci openModalHandler
   poprzez wlasciwosc openModal - <Button onClick={props.openModal} >Add Item</Button>
   Na tym etapie to jeszcze nie zadziala poniewaz nasz przycisk nie jest elementem <button>
   a jest komponentem reactowym <Button /> wiec przypisujec mu event onClick
   tak naprawde przekazalismy mu kolejna wlasciwosc props.
   Musimy zatem wykonac nastepujace czynnosci

--- Button.js ---
1. W parametrach funkcji Button dodajemy ...props - 
   const Button = ({ children, href, primary, secondary, ...props }) => ...
  Sa to pozostale propsy ktore podajemy do naszego buttona tyle ze zdestrukturyzowane
  a nie wymienione z nazwy.
2. Przekazujemy zdrestukturyzowane propsy do buttona za pomoca {...props} w tagu <button> -
   <button type="submit"
      className={buttonClass}
      {...props}
    >
      {children}
    </button>


OPEN MODAL BUTTON

--- Root.js ---
1. Tworzymy funkcje sluzaca do zamykania modala
    closeModalHandler = () => {
    this.setState({
      isModalOpen: true
    });
  }
2. Funkcje closeModalHandler przekazujemy do Modal poniewaz w nim znajduje sie 
   nasz button odpowiedzialny za zamkniecie modala.
   Robimy to za pomoca wlasciwosci closeModal - <Modal closeModal={this.closeModalHandler} /> 

--- Modal.js ---
1. Funkcji modal podajemy parametr props
2. Tworzymy elemen <button></button> w funkcji Modal
3. Dodajemy mu event onClick ktorym odwolujemy sie do wlasciwosci closeModal - 
   nClick={props.closeModal}




