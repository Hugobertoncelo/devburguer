import Logo from '../../assets/logo.svg';
import { Banner, Container, Title, Content } from './styles';

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo devburguer" />
      </Banner>
      <Title>Checkout - Pedido</Title>
      <Content>
        {/* <CartItems />
        <CartResume /> */}
      </Content>
    </Container>
  );
}
