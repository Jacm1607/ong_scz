import React from "react";
import styled from "styled-components";
// Components
// import ClientSlider from "../Elements/ClientSlider";
// import ServiceBox from "../Elements/ServiceBox";
// import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";
// import AddImage5 from "../../assets/img/add/add2.png";
const url_1 = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbienalinfantojuvenil.org&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=339771867806831";

const url_2 = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbienalinfantojuvenilmontero&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=339771867806831";

const pdf_1 = "https://bienalinfantojuvenil.com/static/media/CONVOCATORIAS_SC_2022_Compressed.pdf";
const pdf_2 = "https://bienalinfantojuvenil.com/static/media/CONVOCATORIAS_Montero_2022.pdf";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h2 className="font40 extraBold">Santa Cruz de la Sierra</h2>
          </HeaderInfo>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising>
              <AddLeft>
                <iframe title="PDF1" style={{ width: '100%', height: '550px' }} src={pdf_1} frameBorder={0} allowFullScreen={true}></iframe>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h2 className="font40 extraBold">Montero</h2>
          </HeaderInfo>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft className="flexSpaceCenter">
                <iframe title="PDF2" style={{ width: '100%', height: '550px' }} src={pdf_2} frameBorder={0} allowFullScreen={true}></iframe>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
      {/* SECCION FACEBOOK */}
      <div className="lightBg">
        <div className="container">
          <Advertising className=" row flexSpaceCenter">
              <iframe src={url_1} title="facebook" width="340" height="500" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder={0} allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
              <iframe src={url_2} title="facebook" width="340" height="500" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder={0} allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
// const ServiceBoxRow = styled.div`
//   @media (max-width: 860px) {
//     flex-direction: column;
//   }
// `;
// const ServiceBoxWrapper = styled.div`
//   width: 20%;
//   margin-right: 5%;
//   padding: 80px 0;
//   @media (max-width: 860px) {
//     width: 100%;
//     text-align: center;
//     padding: 40px 0;
//   }
// `;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  // padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
// const ButtonsRow = styled.div`
//   @media (max-width: 860px) {
//     justify-content: space-between;
//   }
// `;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
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
//   width: 60%;
//   padding: 0 15%;
//   img {
//     width: 100%;
//     height: auto;
//   }
//   @media (max-width: 400px) {
//     padding: 0;
//   }
// `;