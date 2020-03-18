import React, {useCallback, useRef, useState} from 'react';
import './App.css';
import CheckboxInput from "./Components/CheckboxInput";
import styled from "styled-components";
import EditableInput from "./Components/EditableInput";
import dateformat from "dateformat";
import DrawableCanvas from "./Components/DrawableCanvas";
import html2canvas from "html2canvas";

const titleStyle = {
    textAlign: "center"
};

const subtitleStyle = {
    textAlign: "center"
};

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
  padding: 40px;
  box-sizing: border-box;
  width: 800px;
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



const Main = () => {
    const ref = useRef();

    const toCanvas = useCallback(async () => {
        const canvas = await html2canvas(ref.current);
        canvas.toBlob((blob) => {
           const link = document.createElement("a");
           link.download = `attestation-${dateformat(Date.now(), "dd/mm/yyyy")}.png`;
           link.href = URL.createObjectURL(blob);
           link.click();
        })
    }, [ref]);
    return (
        <div >
            <Wrapper ref={ref}>
                <Title style={titleStyle}>ATTESTATION DE DÉPLACEMENT DÉROGATOIRE</Title>
                <Subtitle style={subtitleStyle}>En application de l’article 1er du décret du 16 mars 2020 portant réglementation des
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
                        Fait à <span>Bordeaux</span>, le <span>{dateformat(Date.now(), "dd/mm/yyyy")}</span>
                    </div>
                    <div>
                        Signature :
                        <DrawableCanvas />
                    </div>
                </Footer>
            </Wrapper>

            <button onClick={toCanvas}>Télécharger</button>
        </div>
    );
};

export default Main;
