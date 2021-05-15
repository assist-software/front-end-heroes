import React from "react";
import Head from "next/head";
import style from "../styles/Home.module.css";

import AgheorghieseiMadalina from "@/hero/AgheorghieseiMadalina/AgheorghieseiMadalina";
import AiloaieCosmin from "@/hero/AiloaieCosmin/AiloaieCosmin";
import AlexiucBianca from "@/hero/AlexiucBianca/AlexiucBianca";
import AndriiciucFlorin from "@/hero/AndriiciucFlorin/AndriiciucFlorin";
import BandolRoxana from "@/hero/BandolRoxana/BandolRoxana";
import BerescaPaul from "@/hero/BerescaPaul/BerescaPaul";
import BratuLoredana from "@/hero/BratuLoredana/BratuLoredana";
import CazacincuAlexandru from "@/hero/CazacincuAlexandru/CazacincuAlexandru";
import CeamatuCristian from "@/hero/CeamatuCristian/CeamatuCristian";
import CenusaDumitru from "@/hero/CenusaDumitru/CenusaDumitru";
import CiobanAndrei from "@/hero/CiobanAndrei/CiobanAndrei";
import DianaMiraute from "@/hero/DianaMiraute/DianaMiraute";
import DolhescuAndrei from "@/hero/DolhescuAndrei/DolhescuAndrei";
import FinagaPerica from "@/hero/FinagaPerica/FinagaPerica";
import FrunzeIacob from "@/hero/FrunzeIacob/FrunzeIacob";
import FurtunaDaniel from "@/hero/FurtunaDaniel/FurtunaDaniel";
import GoleaBianca from "@/hero/GoleaBianca/GoleaBianca";
import HatneanSebastian from "@/hero/HatneanSebastian/HatneanSebastian";
import HauresBogdan from "@/hero/HauresBogdan/HauresBogdan";
import HladiucRaluca from "@/hero/HladiucRaluca/HladiucRaluca";
import IlciucRuben from "@/hero/IlciucRuben/IlciucRuben";
import IlciucSergiu from "@/hero/IlciucSergiu/IlciucSergiu";
import IoanaIanovici from "@/hero/IoanaIanovici/IoanaIanovici";
import IrciucAndrei from "@/hero/IrciucAndrei/IrciucAndrei";
import IstrateCristian from "@/hero/IstrateCristian/IstrateCristian";
import JemanVictor from "@/hero/JemanVictor/JemanVictor";
import LupascuCatalin from "@/hero/LupascuCatalin/LupascuCatalin";
import MaruseacVasile from "@/hero/MaruseacVasile/MaruseacVasile";
import MerticariuSergiu from "@/hero/MerticariuSergiu/MerticariuSergiu";
import MoldoveanuDorin from "@/hero/MoldoveanuDorin/MoldoveanuDorin";
import MorosonaIulian from "@/hero/MorosonaIulian/MorosonaIulian";
import MurarescuVlad from "@/hero/MurarescuVlad/MurarescuVlad";
import PalieRazvan from "@/hero/PalieRazvan/PalieRazvan";
import PamparauCostelus from "@/hero/PamparauCostelus/PamparauCostelus";
import PetroviciMarius from "@/hero/PetroviciMarius/PetroviciMarius";
import PintiliePaul from "@/hero/PintiliePaul/PintiliePaul";
import PorochMarcel from "@/hero/PorochMarcel/PorochMarcel";
import RobuAndrei from "@/hero/RobuAndrei/RobuAndrei";
import RosuAndreea from "@/hero/RosuAndreea/RosuAndreea";
import RosuBogdan from "@/hero/RosuBogdan/RosuBogdan";
import RosuStefan from "@/hero/RosuStefan/RosuStefan";
import SchiriacRobert from "@/hero/SchiriacRobert/SchiriacRobert";
import SoimanAndrei from "@/hero/SoimanAndrei/SoimanAndrei";
import TcaciucStefan from "@/hero/TcaciucStefan/TcaciucStefan";
import TorneaAlexandru from "@/hero/TorneaAlexandru/TorneaAlexandru";
import VasilacheAndrei from "@/hero/VasilacheAndrei/VasilacheAndrei";
import VorobchevhiciOvidiu from "@/hero/VorobchevhiciOvidiu/VorobchevhiciOvidiu";
import VrabieCristi from "@/hero/VrabieCristi/VrabieCristi";

const heroes = [
  { component: <AgheorghieseiMadalina />, url: "AgheorghieseiMadalina" },
  { component: <AiloaieCosmin />, url: "AiloaieCosmin" },
  { component: <AlexiucBianca />, url: "AlexiucBianca" },
  { component: <AndriiciucFlorin />, url: "AndriiciucFlorin" },
  { component: <BandolRoxana />, url: "BandolRoxana" },
  { component: <BerescaPaul />, url: "BerescaPaul" },
  { component: <BratuLoredana />, url: "BratuLoredana" },
  { component: <CazacincuAlexandru />, url: "CazacincuAlexandru" },
  { component: <CeamatuCristian />, url: "CeamatuCristian" },
  { component: <CenusaDumitru />, url: "CenusaDumitru" },
  { component: <CiobanAndrei />, url: "CiobanAndrei" },
  { component: <DianaMiraute />, url: "DianaMiraute" },
  { component: <DolhescuAndrei />, url: "DolhescuAndrei" },
  { component: <FinagaPerica />, url: "FinagaPerica" },
  { component: <FrunzeIacob />, url: "FrunzeIacob" },
  { component: <FurtunaDaniel />, url: "FurtunaDaniel" },
  { component: <GoleaBianca />, url: "GoleaBianca" },
  { component: <HatneanSebastian />, url: "HatneanSebastian" },
  { component: <HauresBogdan />, url: "HauresBogdan" },
  { component: <HladiucRaluca />, url: "HladiucRaluca" },
  { component: <IlciucRuben />, url: "IlciucRuben" },
  { component: <IlciucSergiu />, url: "IlciucSergiu" },
  { component: <IoanaIanovici />, url: "IoanaIanovici" },
  { component: <IrciucAndrei />, url: "IrciucAndrei" },
  { component: <IstrateCristian />, url: "IstrateCristian" },
  { component: <JemanVictor />, url: "JemanVictor" },
  { component: <LupascuCatalin />, url: "LupascuCatalin" },
  { component: <MaruseacVasile />, url: "MaruseacVasile" },
  { component: <MerticariuSergiu />, url: "MerticariuSergiu" },
  { component: <MoldoveanuDorin />, url: "MoldoveanuDorin" },
  { component: <MorosonaIulian />, url: "MorosonaIulian" },
  { component: <MurarescuVlad />, url: "MurarescuVlad" },
  { component: <PalieRazvan />, url: "PalieRazvan" },
  { component: <PamparauCostelus />, url: "PamparauCostelus" },
  { component: <PetroviciMarius />, url: "PetroviciMarius" },
  { component: <PintiliePaul />, url: "PintiliePaul" },
  { component: <PorochMarcel />, url: "PorochMarcel" },
  { component: <RobuAndrei />, url: "RobuAndrei" },
  { component: <RosuAndreea />, url: "RosuAndreea" },
  { component: <RosuBogdan />, url: "RosuBogdan" },
  { component: <RosuStefan />, url: "RosuStefan" },
  { component: <SchiriacRobert />, url: "SchiriacRobert" },
  { component: <SoimanAndrei />, url: "SoimanAndrei" },
  { component: <TcaciucStefan />, url: "TcaciucStefan" },
  { component: <TorneaAlexandru />, url: "TorneaAlexandru" },
  { component: <VasilacheAndrei />, url: "VasilacheAndrei" },
  { component: <VorobchevhiciOvidiu />, url: "VorobchevhiciOvidiu" },
  { component: <VrabieCristi />, url: "VrabieCristi" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Swanky+and+Moo+Moo&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Crafty+Girls&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <section className={style.landing}>
          <div className={style.landingImage}>1</div>
          <div className={style.landingJs}>2</div>
          <div className={style.landingFed}>3</div>
        </section>

        <section className={style.heroes}>
          {heroes.map((hero, index) => (
            <a
              className={style.heroThumb}
              key={index}
              href={`/heroes/${hero.url}`}
            >
              {hero.component}
            </a>
          ))}
        </section>
      </main>

      <footer></footer>
    </>
  );
}
