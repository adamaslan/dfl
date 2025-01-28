// import { NextResponse } from 'next/server';
// import { BlogRAG } from 'rag1.ipynb';

// const rag = new BlogRAG();

// export async function POST(req: Request) {
//   const { question } = await req.json();
  
//   try {
//     const answer = await rag.ask(question);
//     return NextResponse.json({ answer });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to process question" },
//       { status: 500 }
//     );
//   }
// }

import React from 'react';
import Image from 'next/image';
import styles from '../styles/FeaturedDrink.module.css';

interface Drink {
  name: string;
  brewery: string;
  description: string;
  abv: string;
  image: string;
}

interface FeaturedDrinkPageProps {
  drink: Drink;
}

export default function FeaturedDrinkPage({ drink }: FeaturedDrinkPageProps) {
  return (
    <div>
      <h1>{drink.name}</h1>
      <p>{drink.brewery}</p>
      <p>{drink.description}</p>
      <p>{drink.abv}</p>
      <Image src={drink.image} alt={drink.name} width={500} height={500} />
    </div>
  );
}