import React, {useState} from 'react';
import './App.css';
import CheckboxInput from "./Components/CheckboxInput";
import styled from "styled-components";
import EditableInput from "./Components/EditableInput";
import dateformat from "dateformat";
import DrawableCanvas from "./Components/DrawableCanvas";

const Title = styled.h2`
  text-align: center
`;

const Subtitle = styled.div`
  text-align: center
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px;
  max-width: 800px;
`;

const PersonalData = styled.div`
  padding-top: 40px;
  padding-bottom: 20px
`;

const MoveReason = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;
`;

const Footer = styled.div`
  text-align: right;
  margin-top: 30px;
`;



function App() {
  const [signDate, setSignDate] = useState(Date.now() - 10000000000);
  console.log(dateformat(signDate, "dd/mm/yyyy"));
  return (
    <div>
      <Wrapper>
        <Title>ATTESTATION DE DÉPLACEMENT DÉROGATOIRE</Title>
        <Subtitle>En application de l’article 1er du décret du 16 mars 2020 portant réglementation des
          déplacements dans le cadre de la lutte contre la propagation du virus Covid-19 :
        </Subtitle>

        <PersonalData>
          <div>Je soussigné(e)</div>
          <div>Mme / M. : <EditableInput id="name" placeholder="Prénom Nom"/></div>
          <div>Né(e) le : <EditableInput id="birthdate" placeholder="JJ/MM/AAAA"/></div>
          <div>Demeurant : <EditableInput id="adress" placeholder="Adresse"/></div>
        </PersonalData>

        <div>
          certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé par
          l’article 1er du décret du 16 mars 2020 portant réglementation des déplacements dans
          le cadre de la lutte contre la propagation du virus Covid-19 :
        </div>
        <MoveReason>
          <CheckboxInput id="work-checkbox">
            déplacements entre le domicile et le lieu d’exercice de l’activité professionnelle,
            lorsqu’ils sont indispensables à l’exercice d’activités ne pouvant être organisées
            sous forme de télétravail (sur justificatif permanent) ou déplacements
            professionnels ne pouvant être différés ;
          </CheckboxInput>
          <CheckboxInput id="shop-checkbox">
            déplacements pour effectuer des achats de première nécessité dans des
            établissements autorisés (liste sur gouvernement.fr);
          </CheckboxInput>
          <CheckboxInput id="health-checkbox">
            déplacements pour motif de santé;
          </CheckboxInput>
          <CheckboxInput id="family-checkbox">
            déplacements pour motif familial impérieux, pour l’assistance aux personnes
            vulnérables ou la garde d’enfants ;
          </CheckboxInput>
          <CheckboxInput id="short-checkbox">
            déplacements brefs, à proximité du domicile, liés à l’activité physique individuelle
            des personnes, à l’exclusion de toute pratique sportive collective, et aux besoins
            des animaux de compagnie.
          </CheckboxInput>
        </MoveReason>
        <Footer>
          <div>
            Fait à <span>Bordeaux</span>, le <span>{dateformat(signDate, "dd/mm/yyyy")}</span>
          </div>
          <div>
            Signature :
            <DrawableCanvas onSignChange={setSignDate}/>
          </div>
        </Footer>
      </Wrapper>
    </div>
  );
}

export default App;
