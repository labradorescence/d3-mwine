import {Runtime, Inspector} from '@observablehq/runtime';
import React, {useEffect, useRef} from 'react';
import sunburst from './@d3/zoomable-sunburst';
import ReviewPage from './components/ReviewPage.js'
import './App.css';

export default function App() {
  const ref = useRef();

  useEffect(
    () => {
      const runtime = new Runtime();
      runtime.module(sunburst, (name) => {
        if (name === "chart") {
          return new Inspector(ref.current);
        }
      });
      return () => runtime.dispose();
    },
    []
  );

  return (

    <div className = "App">
      <h1>Hello world, let's do wine tasting with Greem Jellyfish</h1>
      <div ref={ref} />
      <ReviewPage />
    </div>

  );
}