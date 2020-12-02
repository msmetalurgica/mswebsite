import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneSquareAlt,
  faEnvelopeSquare,
  faCheckSquare,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

// CSS
import { Wrapper, Container, Content } from './styles';
import 'react-toastify/dist/ReactToastify.min.css';

import ENG from '../../assets/engrenagem.png';

import Nav from '../../components/Nav';
import Titulo from '../../components/Titulo';
import Map from '../../components/Map';
import Footer from '../../components/Footer';

const schema = Yup.object().shape({
  name: Yup.string().required('O campo nome é obrigatório.'),
  email: Yup.string()
    .email('E-mail inválido.')
    .required('O campo e-mail é obrigatório.'),
  phone: Yup.string().required('O campo telefone é obrigatório.'),
  subject: Yup.string().required('O campo assunto é obrigatório.'),
  message: Yup.string().required('O campo mensagem é obrigatório.'),
});

const Contato = () => {
  function handleSubmit(data, { resetForm }) {
    const { name, email, phone, subject, message } = data;

    fetch('http://msmetalurgica.com.br:21058/envio', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        message,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(toast.success('E-mail enviado com sucesso!'), resetForm());
  }

  return (
    <>
      <Wrapper>
        <Nav />
        <Titulo title="ENTRE EM CONTATO CONOSCO" />
        <Container>
          <Content>
            <div>
              <h2>ENVIE SUA MENSAGEM</h2>
              <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Seu nome" />
                <Input name="email" placeholder="Seu e-mail" />
                <Input name="phone" placeholder="Seu telefone" />
                <Input name="subject" placeholder="Assunto" />
                <Input multiline name="message" placeholder="Mensagem" />

                <button type="submit">Enviar</button>
              </Form>
            </div>
            <div>
              <h2>CONTATO</h2>
              <ul>
                <li>
                  &nbsp;Compras
                  <div>
                    <FontAwesomeIcon icon={faPhoneSquareAlt} size="2x" />
                    &nbsp;&nbsp;(19) 9 9339 9235
                  </div>
                </li>
                <li>
                  &nbsp;Telefone Fixo
                  <div>
                    <FontAwesomeIcon icon={faPhoneSquareAlt} size="2x" />
                    &nbsp;&nbsp;(19) 3480-0024
                  </div>
                </li>
                <li>
                  &nbsp;Vendas
                  <div>
                    <FontAwesomeIcon icon={faWhatsappSquare} size="2x" />
                    &nbsp;&nbsp;(19) 9 9443 5753
                  </div>
                </li>
                <li>
                  &nbsp;E-mail
                  <div>
                    <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
                    &nbsp;&nbsp;msmetalurgica.comercial@gmail.com
                  </div>
                </li>
                <li>
                  &nbsp;Diretor
                  <div>
                    <FontAwesomeIcon icon={faCheckSquare} size="2x" />
                    &nbsp;&nbsp;Rodolfo Moises
                  </div>
                </li>
               
              </ul>
            </div>
            <div>
              <h2>LOCALIZAÇÃO</h2>
               {/* <Map /> */}
              <p>Rua: Antonio Cavalaro, 137</p>
              <p>Bairro Jardim Paraiso</p>
              <p>Itapira - São Paulo - CEP: 13973-474</p>
            </div>
          </Content>
        </Container>
        <ToastContainer />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Contato;
