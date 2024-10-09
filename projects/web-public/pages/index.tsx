import React from "react";
import { sum } from "@alura/utils/math/sum";
import { Text } from "@alura/design-system/components/Text";

export default function HomeScreen() {
  return (
    <main>
      <h1>Home</h1>
      <p>soma: {sum(2, 2)}</p>
      <Text tag="h1">teste</Text>
    </main>
  );
}
