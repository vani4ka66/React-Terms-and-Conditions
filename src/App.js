import "./App.css";
import Document from "./Document";
import React, {useEffect, useState} from "react";

function App() {

  const [value, setValue] = useState()

  useEffect(() => {

    async function getSampleText() {
      // return (await fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt')).text();

      setValue(await fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt')).text();

      console.log(value)
 
     // console.log( (await fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt')).text() );
    
   }
  });

  // async function getSampleText() {
  //    return (await fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt')).text();

   
  // }


  return (
    <div className="App">
      <Document title="Terms and Conditions" content="Lorem markdownum ter **laevi**, quam superos. Ferox namque, est Cipi Philomela
videbar de validum collo. *Sub* fugacibus manet vivam nil, praeter sub pelagi
Paron, viri mei. ## Fuit qua fata et conantur natura et

Adhuc exsecrantia relictus cum, Atlas, matura pede Tyndaridae redditur hic
coegit, referam. Tu Pythia quae perculit et silva undis. Ab pati vestris
memoresque indomitas iter ferri: et nexaque ramos amantis iacebas, est. Uncis
forcipe.

> Ne quid vates funera altis generis, suspiria corpore aequoris luebat madidos
> stellas Cephaloque, absensauxilium. Meliore *regis* gelidoque **quoque**, data
> forti, erat postquam **deserit illic**, de posuit hoc habet, prima aures.
> Defluit dumque **mero** ardet suum vestro scrobibus ferarum Apollineos
> Saturnia, excessere lenita lignum; tum quod spina choreas.

Tuentem invenio nigrae, umentia muneris *verecundo de* Argolicae paelex, ambit?
Ponti quod *poplite* montes vulnera, dura **quid**, in. Minetur accensae;
viderat prodidit arma, iuppiter mediisque medio, ad armis." />
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
          Ne quid vates funera altis generis, suspiria corpore aequoris luebat madidos
 stellas Cephaloque, absensauxilium. Meliore *regis* gelidoque **quoque**, data
 forti, erat postquam **deserit illic**, de posuit hoc habet, prima aures.
 Defluit dumque **mero** ardet suum vestro scrobibus ferarum Apollineos
 Saturnia, excessere lenita lignum; tum quod spina choreas.

Tuentem invenio nigrae, umentia muneris *verecundo de* Argolicae paelex, ambit?
Ponti quod *poplite* montes vulnera, dura **quid**, in. Minetur accensae;
viderat prodidit arma, iuppiter mediisque medio, ad armis.
        </div>
      </div>
    </div>
  );
}

export default App;
