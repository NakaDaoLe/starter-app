import React from 'react';
import { useBlockstack } from 'react-blockstack';
import { Blockstack } from 'react-blockstack/dist/context';
import Main from './Main.js';
import Landing from './Landing.js';
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function App(props) {
  const { person, signIn } = useBlockstack();
  return (
    <Blockstack>
      <Navbar/>
      {signIn && <Landing />}
      {person && <Main person={person} />}
      <Footer/>
    </Blockstack>
  );
}
