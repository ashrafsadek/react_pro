import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import kabaImg from './kaba.jpg';
import zmzmImg from './zmzm.jpg';
import blackImg from './black.jpg';
import { Core_Concept } from './data.js';
import NavBar from './components/NavBar/NavBar.js';
import GoodBye from './components/GoodBye.jsx';
import Hello from './components/Hello.js';
import FirstLec from './components/FirstLec.js';
import TabButton from './components/TabButton.js';
import TabButtonTwo from './components/TabButtonTwo.js';
import TabButtonThree from './components/TabButtonThree.js';
import TabButtonFour from './components/TabButtonFour.js';
import TabButtonState from './components/TabButtonState.js';
import TabButtonStateTwo from './components/TabButtonStateTwo.js';
import { EXAMPLES } from './data.js';

{/* props  */}
function CoreConcept(props){
  return(
    <li>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

{/* another syntax for props  */}
function CoreConceptTwo({title,description,image}){
  return(
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  const [ one, two ] = useState("please do something");
  //const [ topic, setTopic ] = useState('components');       هذا الكود يجعل اول براجراف يظهر هو الكمبوننت
  const [ topic, setTopic ] = useState();
  function showDiv(){
    const dv = document.getElementById('mnuDvTwo');
    dv.style.display = 'block';
    console.log("hiiiiiiiiiiiiiiiii");
  }

  function handleSelect(){
    showDiv();
    console.log("hiiiiiiiiiiiiiiiii");
  }

  function handleCheck(selectedButton){
    console.log(selectedButton);
  }

  let content = "Hello I'm here";
  function handleText(selectedButton){
    content = selectedButton;
    console.log(content);
  }

  function handleStateText(selectedButton){
    two(selectedButton);
  }

  function handleStateTextTwo(selectedButton){
    setTopic(selectedButton);
  }

  //console.log("hello from TabButtonFour Component");
      
  return (
    <div className="App">
      <NavBar></NavBar>
      <FirstLec/>
      <header className="App-header">
        <Hello></Hello>
        <img src={kabaImg} className="kaba" alt="logo" />
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
      <div id="coreConcept">
        <ul id="uu">
          <CoreConcept 
            title="hello" 
            description="hello zmzm" 
            image={zmzmImg}
          />
          <CoreConcept 
            title="welcome" 
            description="welcome black"
            image={blackImg}
          />
          <CoreConcept 
            title="اهلا" 
            description="اهلا وسهلا يامرحبا"
            image={kabaImg}
          />
          {/*{Core_Concept.map((conceptItem)=>(
            <CoreConcept key={conceptItem.title} {...conceptItem}/>
          ))}*/}
        </ul>
      </div>
      <div id="coreConceptTwo">
        <ul id="uuu">
          <CoreConceptTwo
            title={Core_Concept[0].title}
            description={Core_Concept[0].description}
            image={Core_Concept[0].image}
          />
          <CoreConceptTwo {...Core_Concept[1]} />
          <CoreConceptTwo {...Core_Concept[2]} />
          <CoreConceptTwo {...Core_Concept[3]} />
        </ul>
      </div>
      <section id="sec">
        <menu id='mnu'>
          <h3>More ... </h3>
          {/*<TabButton>Components</TabButton>*/}
          <TabButton label="Components" />
          <TabButton label="State"/>
          <div id='mnuDv'>
            first
          </div>
          <TabButton label="CSS" anyThing={showDiv}/>
          <TabButton label="Structure" anyThing={showDiv}/>
          <div id='mnuDvTwo'>
            second
          </div>
        </menu>
      </section>

      <section id="sec_t">
        <menu id='mnu_t'>
          <h3>More ... </h3>
          {/*
            التعامل مع الفانكشن كفاليو داخل الكمبوننت
            <TabButtonTwo>Components</TabButtonTwo>
          */}
          <TabButtonTwo onSelect={handleSelect}>Components</TabButtonTwo>
          <TabButtonTwo onSelect={handleSelect}>State</TabButtonTwo>
          <TabButtonTwo onSelect={handleSelect}>CSS</TabButtonTwo>
          <TabButtonTwo onSelect={handleSelect}>Structure</TabButtonTwo>
        </menu>
      </section>

      <section id="sec_tt">
        <menu id='mnu_tt'>
          <h3>More ... </h3>
          {/*
           التعامل مع الفانكشن واخذ قيم من الفرونت
            <TabButtonTwo>Components</TabButtonTwo>
          */}
          <TabButtonThree onSelect={()=>handleCheck('components')}>Components</TabButtonThree>
          <TabButtonThree onSelect={()=>handleCheck('state')}>State</TabButtonThree>
          <TabButtonThree onSelect={()=>handleCheck('css')}>CSS</TabButtonThree>
          <TabButtonThree onSelect={()=>handleCheck('structure')}>Structure</TabButtonThree>
        </menu>
      </section>

      <section id="sec_ttt">
        <menu id='mnu_ttt'>
          <h3>More ... </h3>
          <TabButtonFour onSelect={()=>handleText('components')}>Components</TabButtonFour>
          <TabButtonFour onSelect={()=>handleText('state')}>State</TabButtonFour>
          <TabButtonFour onSelect={()=>handleText('css')}>CSS</TabButtonFour>
          <TabButtonFour onSelect={()=>handleText('structure')}>Structure</TabButtonFour>
        </menu>
        <div class='stateTwoDv'>
        {content}
        </div>
      </section>

      <section id="sec_state">
        <menu id='mnu_state'>
          <h3>More ... </h3>
          <TabButtonState onSelect={()=>handleStateText('components')}>Components</TabButtonState>
          <TabButtonState onSelect={()=>handleStateText('state')}>State</TabButtonState>
          <TabButtonState onSelect={()=>handleStateText('css')}>CSS</TabButtonState>
          <TabButtonState onSelect={()=>handleStateText('structure')}>Structure</TabButtonState>
        </menu>
        <div class='stateTwoDv'>
          {one}
        </div>
      </section>

      <section id="sec_state_two">
        <menu id='mnu_state_two'>
          <h3>More ... </h3>
          <TabButtonStateTwo isActive={topic==='components'} onSelect={()=>handleStateTextTwo('components')}>Components</TabButtonStateTwo>
          <TabButtonStateTwo isActive={topic==='state'} onSelect={()=>handleStateTextTwo('state')}>State</TabButtonStateTwo>
          <TabButtonStateTwo isActive={topic==='jsx'} onSelect={()=>handleStateTextTwo('jsx')}>JSX</TabButtonStateTwo>
          <TabButtonStateTwo isActive={topic==='props'} onSelect={()=>handleStateTextTwo('props')}>PROPS</TabButtonStateTwo>
        </menu>
        {!topic ? (
            <div class='stateTwoDv'>
              <p>Please click button</p>
            </div>
          ) : (
            <div class='stateTwoDv'>
              <h3>{EXAMPLES[topic].title}</h3>
              <p>{EXAMPLES[topic].description}</p>
              <pre>
                <code>
                {EXAMPLES[topic].code}
                </code>
              </pre>
            </div>  
          )}
          {/* ويمكن عمل نفس الموضوع بالطريقة الاتية*/}
          {!topic &&  (
            <div class='stateTwoDv'>
              <p>Please click button</p>
            </div>
          )} 
          {topic && (
            <div class='stateTwoDv'>
              <h3>{EXAMPLES[topic].title}</h3>
              <p>{EXAMPLES[topic].description}</p>
              <pre>
                <code>
                {EXAMPLES[topic].code}
                </code>
              </pre>
            </div>  
          )}
      </section>
      <GoodBye/>
    </div>
  );
}

export default App;
