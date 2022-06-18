import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
// import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";
// import AddImage2 from "../../assets/img/add/add2.png";



export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Qué es la Bienal Infanto Juvenil? 🤔</h1>
            <p className="font15">
              Es el espacio de articulación, organización y participación de niños, niñas adolescentes y jóvenes (NNAJ) que vincula y unifica, genera valor agregado en todos los ámbitos, es solidario y de responsabilidades compartidas; y propone que ellos dejen de ser actores para ser co autores en acciones sinérgicas y en procura de su reconocimiento y aceptación de su condición de ciudadanos y ciudadanas.
            </p>
            <br />
            <h2 className="font40 extraBold">Galeria</h2>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Farandula"
                text="Un despliegue de creatividad, entusiasmo y muchas propuestas de prevención que abordaron temas como la prevención de la violencia en la familia."
                action={() => window.location.href = 'https://www.facebook.com/media/set/?set=a.1139784009554308&type=3'}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Musica y Declamacion"
                text="Apasionante tarde en el Museo de Arte Contemporáneo, con la brillante presentación de los declamadores finalistas de primaria y secundaria y la interpretación"
                action={() => window.location.href = 'https://www.facebook.com/media/set/?set=a.1139361892929853&type=3'}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Ajedrez"
                text="Campeonato de ajedrez realizado en la plaza principal de la 24 de septiembre."
                action={() => window.location.href = 'https://www.facebook.com/media/set/?set=a.1131261157073260&type=3'}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Expojoven"
                text="Propuestas planteadas por los estudiantes fueron interesantes y vinculadas a temas como la ausencia de los padres y madres en el hogar,la prevención de la violencia con el valor del respeto y el bullying en los colegios."
                action={() => window.location.href = 'https://www.facebook.com/media/set/?set=a.1137371469795562&type=3'}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="Aplicaciones Tecnologicas"
                text="Creacion de aplicaciones moviles con el apoyo de la universidad Domingo Savio."
                action={() => window.location.href = 'https://www.facebook.com/media/set/?set=a.1133916610141048&type=3'}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Futbol Social"
                text="Evento deportivo protagonizado por estudiantes."
                action={() => window.location.href = 'https://www.facebook.com/media/set/?set=a.1131266510406058&type=3'}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              
              {/* <FullButton title="Load More" action={() => alert("clicked")} /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">A few words about company</h4>
              <h2 className="font40 extraBold">Contactanos</h2>
              <p className="font12">
                Espacio de articulación, organización y participación de niños, niñas adolescentes y jóvenes (NNAJ) que vincula y unifica, genera valor agregado en todos los ámbitos, es solidario y de responsabilidades compartidas.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="Ir a Facebook" action={() => window.location.href='https://www.facebook.com/bienalinfantojuvenil.org/'} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="Contact Us" action={() => alert("clicked")} border />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
// const Advertising = styled.div`
//   padding: 100px 0;
//   margin: 100px 0;
//   position: relative;
//   @media (max-width: 1160px) {
//     padding: 60px 0 40px 0;
//   }
//   @media (max-width: 860px) {
//     flex-direction: column;
//     padding: 0 0 30px 0;
//     margin: 80px 0 0px 0;
//   }
// `;
// const ButtonsRow = styled.div`
//   @media (max-width: 860px) {
//     justify-content: space-between;
//   }
// `;
// const AddLeft = styled.div`
//   position: relative;
//   width: 50%;
//   p {
//     max-width: 475px;
//   }
//   @media (max-width: 860px) {
//     width: 80%;
//     order: 2;
//     text-align: center;
//     h2 {
//       line-height: 3rem;
//       margin: 15px 0;
//     }
//     p {
//       margin: 0 auto;
//     }
//   }
// `;
// const AddRight = styled.div`
//   width: 50%;
//   @media (max-width: 860px) {
//     width: 80%;
//     order: 2;
//   }
// `;
// const AddLeftInner = styled.div`
//   width: 100%;
//   position: absolute;
//   top: -300px;
//   left: 0;
//   @media (max-width: 1190px) {
//     top: -250px;
//   }
//   @media (max-width: 920px) {
//     top: -200px;
//   }
//   @media (max-width: 860px) {
//     order: 1;
//     position: relative;
//     top: -60px;
//     left: 0;
//   }
// `;
// const ImgWrapper = styled.div`
//   width: 100%;
//   padding: 0 15%;
//   img {
//     width: 100%;
//     height: auto;
//   }
//   @media (max-width: 400px) {
//     padding: 0;
//   }
// `;
