import React from 'react';
import { useState } from 'react';
import '../styles/QuiSommesNous.css';
import Histoire from '../components/Histoire';
import Valeur from '../components/Valeurs';
import Domaine from '../components/Domaine';
import Region from '../components/Region';


export default function About() {
  const [selection, setSelection] = useState('histoire');
  
  return (
    <div className='about-body'>
      <div className='about-hero'>
            <div className='about-description'>
              <div>
                <h2>Découvrez l'Excellence signée S’il Vin</h2>
                <p>Explorez l'âme des vignobles à travers nos cuvées uniques. Chaque gorgée raconte l'histoire de notre terroir et de notre passion. L'excellence dans chaque verre.</p>
              </div>
            </div>
          </div>
          <div className='about-buttons'>
            <button 
              onClick={() => { setSelection('histoire') } }
              style={{
                  backgroundColor: selection === 'histoire' ? 'white' : 'transparent',
                  color: selection === 'histoire' ? 'black' : 'white'
                }}
            >
              Notre histoire
            </button>
            <button 
              onClick={() => { setSelection('valeur') }}
              style={{
                  backgroundColor: selection === 'valeur' ? 'white' : 'transparent',
                  color: selection === 'valeur' ? 'black' : 'white'
                }}
            >
              Nos valeurs
            </button>
            <button 
              onClick={() => { setSelection('domaine') }}
              style={{
                  backgroundColor: selection === 'domaine' ? 'white' : 'transparent',
                  color: selection === 'domaine' ? 'black' : 'white'
                }}
            >
              Notre domaine
            </button>
            <button 
              onClick={() => { setSelection('region') }}
              style={{
                  backgroundColor: selection === 'region' ? 'white' : 'transparent',
                  color: selection === 'region  ' ? 'black' : 'white'
                }}
            >
              Notre région
            </button>
          </div>
          {selection === 'histoire' ? <Histoire /> : null}
          {selection === 'valeur' ? <Valeur /> : null}
          {selection === 'domaine' ? <Domaine /> : null}
          {selection === 'region' ? <Region /> : null}
    {/* <Histoire/>
    <Valeur />
    <Domaine />
    <Region /> */}

      

    </div>
  )
}

