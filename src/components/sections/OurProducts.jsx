import SectionHeader from "../sectionElements/SectionHeader";
import SectionContent from "../sectionElements/SectionContent";
import hthLogo from "../../assets/imgs/brands/hthLogo.png";
import gencoLogo from "../../assets/imgs/brands/gencoLogo.png";
import ImgAndButtonsCard from "../cards/ImgAndButtonsCard";

export default function OurProducts() {
  return (
    <div className="full">
      <div className="bg-quinary content py-[26px] phone3:py-[48px]">
        <SectionHeader
          sectionHeaderTitleSecond="Linha de Produtos"
          sectionHeaderDescription="Ao longo dos anos, fomos firmando parcerias hoje bastante consolidadas com marcas renomadas e de grande credibilidade no mercado. Encontre a marca que você deseja comprar e clique na categoria para ser levado para a página contendo os produtos desta marca."
        />
        <SectionContent>
          <ImgAndButtonsCard
            img={hthLogo}
            button1Label="Cloros"
            button1Link="#"
            button2Label="Auxiliares"
            button2Link="#"
          />
          <ImgAndButtonsCard
            img={gencoLogo}
            button1Label="Cloros"
            button1Link="#"
            button2Label="Auxiliares"
            button2Link="#"
          />
          <ImgAndButtonsCard
            img={hthLogo}
            button1Label="Cloros"
            button1Link="#"
            button2Label="Auxiliares"
            button2Link="#"
          />
          <ImgAndButtonsCard
            img={hthLogo}
            button1Label="Cloros"
            button1Link="#"
            button2Label="Auxiliares"
            button2Link="#"
          />
          <ImgAndButtonsCard
            img={hthLogo}
            button1Label="Cloros"
            button1Link="#"
            button2Label="Auxiliares"
            button2Link="#"
          />
          <ImgAndButtonsCard
            img={hthLogo}
            button1Label="Cloros"
            button1Link="#"
            button2Label="Auxiliares"
            button2Link="#"
          />
          <ImgAndButtonsCard
            img={hthLogo}
            button1Label="Cloros"
            button1Link="#"
            button2Label="Auxiliares"
            button2Link="#"
          />
          <ImgAndButtonsCard
            img={hthLogo}
            button1Label="Cloros"
            button1Link="#"
            button2Label="Auxiliares"
            button2Link="#"
          />
        </SectionContent>
      </div>
    </div>
  );
}
