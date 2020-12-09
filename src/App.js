import * as React from "react";
import "./App.css";

import VocabularyCard from "./components/vocabularyCard";

import age from "./img/age.jpg";
import female from "./img/female.png";
import male from "./img/male.jpg";
import meet from "./img/meet.jpg";
import spell from "./img/spell.jpg";

function App() {
  const [vocabulary, setVocabulary] = React.useState([
    {
      text: "Hi!, what's your age? i'm 21 years old",
      img: age,
    },
    { text: "your friend is so nice, whats his name?", img: male },
    {
      text:
        "i will gift something to Karla tommorow, what do you think is a nice gift for her?",
      img: female,
    },
    { text: "Nice to meet you, how are you today?", img: meet },
    { text: "i spell my name like yei ai es iu es", img: spell },
  ]);
  return (
    <div className="container">
      <div className="header">MY ENGLISH CLASS, BY JESÚS GARCÍA</div>
      <div className="blog">
        <h2>Vocabulary</h2>
        <div className="vocabularyContainer">
          {vocabulary.map((item, idx) => {
            return <VocabularyCard item={item} key={idx} />;
          })}
        </div>
        <h2>¿Who i am?</h2>
        <p>
          Hello, My name is Jesús Francisco García Valdez, actually i'm 21 years
          old, and i born in Los Mochis city, from the state of Sinaloa. I'm a
          front end programer, my hobbies are play the piano and play
          videogames, i'm actually studing on the technologic institute of Los
          Mochis the especiality of Informatic engineering
        </p>
        <h2>My Friends</h2>
        <p>
          The first one is my friend Luis Armando Castro Cota and he have 21
          years old like me, i know him from the university, where whe became
          friends
        </p>
        <p>
          And the second one is my friend Jose Francisco Osuna Ocaranza, he have
          22 years old, and like my friend Luis i know him like 3 years ago,
          when we start the university
        </p>
        <h2>My Video</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eIJK_Crvd2s"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h2>TED talk </h2>
        <ul>
          <li>you need to commit mistakes to learn</li>
          <li>the practice do the master</li>
          <li>don't feel judged for another people</li>
          <li>just focus in the result of the conversation</li>
          <li>lenguage is a tool to comunicate</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
