import React from "react";
import {sum} from '@alura/utils/math/sum';


export default function HomeScreen() {
  return (
    <main>
      <h1>Home</h1>
      <p>soma: {sum(2, 2)}</p>
    </main>
  );
}
