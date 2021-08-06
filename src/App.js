import { useState, useEffect } from 'react'
import { GlobalStyle, ContainerProducts, AlignProducts, Container } from "./styles/global";
import { Products } from './components/Products/index'
import { Header } from "./components/Header";
import { ShoppingCart } from "./components/ShoppingCart";

import ReactNotification from 'react-notifications-component'
import 'animate.css'
import 'react-notifications-component/dist/theme.css'
function App() {
  const [isCartModalOpen, setIsCartModalOpen] = useState(
    false
  );
  const [dataProducts, setDataProducts] = useState([])

  useEffect(() => {
    fetch('./products.json', {
      headers: {
        Accept: "application/json"
      }
    }).then(res => res.json()).then(res => setDataProducts(res.items))
  }, [])

  function handleOpenCartModal() {
    setIsCartModalOpen(true);
  }

  function handleCloseCartModal() {
    setIsCartModalOpen(false);
  }

  return (
    <Container>
      <Header onOpenCartModal={handleOpenCartModal} />
      <ReactNotification />
      <ContainerProducts>
        <ShoppingCart
          isOpen={isCartModalOpen}
          onRequestClose={handleCloseCartModal}
        />
        <AlignProducts>
          {dataProducts.map(prod => (
            <Products key={prod.id} prod={prod} />
          ))}
        </AlignProducts>
        <GlobalStyle />
      </ContainerProducts>
    </Container>
  );
}

export default App;
