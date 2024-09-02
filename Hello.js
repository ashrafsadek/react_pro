const greetings = ['hello','hi','welcome','hola','اهلا','bonjour','dd','fff'];

function genGreetings(max){
  return Math.floor(Math.random()*(max+1));
}

export default function Hello(){
  const greet = greetings[genGreetings(7)];
  return (
    <header>
      <h3>{greet} first component</h3>
    </header>
  );
}