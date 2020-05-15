import React, { Component } from "react";
import "../styles/test.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "../Components/Navigation";
import Pagination from "../Components/Pagination";
import Btn from "../Components/Btn";
import Statistics from "../Components/Statistics";
import Text from "../Components/Text";
import Picture from "../Components/Picture";
import Social from "../Components/Social";

import pc from '../images/pc.svg';
import HomeItem from "../Components/HomeItem";
import Item from '../Components/Item';
import Carousel from "react-elastic-carousel";

import sucession from '../images/recenzja-sucession.svg'
import polacy from '../images/polacy-nie-czytaja.svg'
import spoiler from '../images/czlowiek-spoiler.svg'
import shitshow from '../images/shitshow.svg'
import szczygiel from '../images/szczygiel.svg'
import morningshow from '../images/the-morning-show.svg'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
];

class Home extends Component {
    carouselItems = [
        {
          id: 1,
          title: "test",
          description: "test",
          imagePath: "",
          chars: 1234,
          views: 4321
        },
        {
            id: 2,
            title: "test2",
            description: "test2",
            imagePath: "",
            chars: 1234,
            views: 4321
        },
    ]

    handleScroll = (event) => {
        if (event.deltaY < 0)
        {
            console.log('scrolling up');
            this.carousel.slidePrev();
            window.removeEventListener('wheel', this.handleScroll);
            setTimeout(this.enableScroll,800);
        }
        else if (event.deltaY > 0)
        {
            console.log('scrolling down');
            this.carousel.slideNext();
            window.removeEventListener('wheel', this.handleScroll);
            setTimeout(this.enableScroll,800);
        }
    }
    enableScroll = () => {
        window.addEventListener('wheel', this.handleScroll);
    }

    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }

    render() {
        return (
            <div className="div-main">
                <Container className="container-std">
                    <Row className="row-main">
                        <Col className="col-std col-toggle" md={1}>
                            <div className="div-toggle">
                                <div className="div-inner-toggle">
                                    {<Pagination itemsCount = {this.carouselItems.length} />}
                                </div>
                            </div>
                        </Col>
                        <Col className="col-std col-left" md={5}>
                            <div className="div-left">
                                <Container className="container-left">
                                <Carousel itemsToShow={1} itemsToScroll={1} enableSwipe={true} verticalMode={true} showArrows={false} pagination={false} ref={ref => (this.carousel = ref)}>
                                    <Item className="item-text"> <Col className="col-std col-text"><Text title="Recenzja serialu 'Sukcesja'" text ="Sukcesja to serial w którym chodzi przede wszystkim o władzę. Bohaterowie w końcu posiadają wszystko, o czym tylko zamarzą. Oprócz tego jednego – kompletnej władzy nad przedsiębiorstwem, nad którym pieczę trzyma ich osiemdziesięcioletni ojciec. Kiedy zdrowie nestora rodu zaczyna niedomagać, między rodzeństwem zaczyna się walka o to wielkie, najważniejsze wręcz stanowisko. Walka po trupach? Zaprzepaszczenie rodzinnych więzi na rzecz pieniędzy?” "/></Col> </Item>
                                    <Item className="item-text"> <Col className="col-std col-text"><Text title="Dlaczego Polacy nie czytają?" text ="Chociaż na Facebooku gęsto od stron o wzniosłych tytułach nobilitujących czytanie (nie czytasz, nie idę z Tobą do łóżka) mówiących, że jeśli czytasz, to jesteś wyższą klasą, ale jeśli nie, o lepiej „nie mów do mnie teraz”. […] Czytanie ma być przyjemnością, taką samą jak oglądanie ulubionego serialu, śledzenie losów bohaterów czy granie w simsy. Gdy czuję presję, cała radość znika, ustępując miejsce pękniętemu i zniechęconemu balonowi smutku."/></Col> </Item>
                                    <Item className="item-text"> <Col className="col-std col-text"><Text title="Człowiek człowiekowi spoilerem" text ="„[…] kiedy serwisy streamingowe decydują się na publikowanie całych sezonów swoich seriali, w społeczeństwie odzywają się najgroźniejsze instynkty. Człowiek człowiekowi już nie wilkiem, a spoilerem. […] internet oraz dzielenie się treściami z ludźmi często mieszkającymi po drugiej stronie kuli ziemskiej jest genialne, ale jednocześnie może prowadzić do poczucia wykluczenia. Bo jeśli nie nadążasz, to jesteś gorszy, […] coś schrzaniłeś."/></Col> </Item>
                                    <Item className="item-text"> <Col className="col-std col-text"><Text title="Recenzja 'Shitshow'" text ="LeDuff oraz jego ekipa telewizyjna ruszyli w podróż po Stanach Zjednoczonych. Podróż, która najpierw przerodziła się w program, później w niniejszą książkę. [...] Pokazanie dwóch skrajnych światów boli, ale przez to dociera do głowy i się w niej zadomawia. Nie ma równości, nie ma sprawiedliwości "/></Col> </Item>
                                    <Item className="item-text"> <Col className="col-std col-text"><Text title="Recenzja 'Szczygieł'" text ="Autorka działa na czytelnika słowem. Kilkoma sklekoconymi w jedno zdanie słowami, które za pierwszym czytaniem do nas nie docierają. Może wydaje się nam, że nie mają większego sensu, są tylko bredniami, które nie mają konkretnego sensu. Książka, mimo tego że nic się w niej nie dzieje, nie ma akcji lecącej na łeb i szyję, wciąga od pierwszego zdania."/></Col> </Item>
                                    <Item className="item-text"> <Col className="col-std col-text"><Text title="Recenzja 'The Morning Show'" text ="Anonimowy donos okazuje się zaledwie wierzchołkiem góry problemów, które raz po raz będą spadać na bohaterów, sprawi że akcja nabiera tempa a bohaterowie przez większość czasu ekranowego chcą wydrapać sobie oczy. Kiedy wpadają na dobry pomysł, niekoniecznie z wielkodusznych intencji. Akcja, im dalej w las, nabiera tempa, do tego stopnia, że nuda z wlekącego się pierwszego odcinka odchodzi w totalną i zupełną niepamięć."/></Col> </Item>
                                </Carousel>
                                
<Row className="row-text">
                                       
                                    </Row>
                                    <Carousel itemsToShow={1} itemsToScroll={1} enableSwipe={true} verticalMode={true} showArrows={false} pagination={false} ref={ref => (this.carousel = ref)}>
                                     <Item className="item-stats" > <Row className="row-stats">
                                        <Col className="col-std col-stats"><Statistics score="5,823" description ="znaków"/></Col>
                                        <Col className="col-std col-stats"><Statistics score="200" description ="wyświetleń"/></Col>
                                        <Col className="col-std col-stats"><Statistics score="" description =""/></Col>
                                        <Col className="col-std col-stats"><Statistics score="" description =""/></Col>
                                    </Row></Item>
                                    <Item className="item-stats"> <Row className="row-stats">
                                        <Col className="col-std col-stats"><Statistics score="3,155" description ="znaków"/></Col>
                                        <Col className="col-std col-stats"><Statistics score="600" description ="wyświetleń"/></Col>
                                        <Col className="col-std col-stats"><Statistics score="" description =""/></Col>
                                        <Col className="col-std col-stats"><Statistics score="" description =""/></Col>
                                    </Row></Item>
                                    <Item className="item-stats"> <Row className="row-stats">
                                        <Col className="col-std col-stats"><Statistics score="6,139" description ="znaków"/></Col>
                                        <Col className="col-std col-stats"><Statistics score="500" description ="wyświetleń"/></Col>
                                        <Col className="col-std col-stats"><Statistics score="" description =""/></Col>
                                        <Col className="col-std col-stats"><Statistics score="" description =""/></Col>
                                    </Row></Item>
                                    <Item className="item-stats"> <Row className="row-stats">
                                        <Col className="col-std col-stats"><Statistics score="2,899" description ="znaków"/></Col>
                                        <Col className="col-std col-stats"><Statistics score="73" description ="wyświetleń"/></Col>
                                        <Col className="col-std col-stats"><Statistics score="" description =""/></Col>
                                        <Col className="col-std col-stats"><Statistics score="" description =""/></Col>
                                    </Row></Item>
                                    <Item className="item-stats"> <Row className="row-stats">
                                        <Col className="col-std col-stats"><Statistics score="4,136" description ="znaków"/></Col>
                                        <Col className="col-std col-stats"><Statistics score="150" description ="wyświetleń"/></Col>
                                        <Col className="col-std col-stats"><Statistics score="" description =""/></Col>
                                        <Col className="col-std col-stats"><Statistics score="" description =""/></Col>
                                    </Row></Item>
                                    <Item className="item-stats"> <Row className="row-stats">
                                        <Col className="col-std col-stats"><Statistics score="6,080" description ="znaków"/></Col>
                                        <Col className="col-std col-stats"><Statistics score="150" description ="wyświetleń"/></Col>
                                        <Col className="col-std col-stats"><Statistics score="" description =""/></Col>
                                        <Col className="col-std col-stats"><Statistics score="" description =""/></Col>
                                    </Row></Item>
</Carousel>
                                    
                                </Container>
                            </div>
                        </Col>
                        <Col className="col-std col-right" md={5}>
                        <div className="div-right">
                        <Carousel itemsToShow={1} itemsToScroll={1} enableSwipe={true} verticalMode={true} showArrows={false} pagination={false} ref={ref => (this.carousel = ref)}>
                        <Item className="item-picture">
                            <Picture imgportfolio={sucession} alt="pc" />
                            </Item>
                            <Item className="item-picture">
                            <Picture imgportfolio={polacy} alt="pc" />
                            </Item>
                            <Item className="item-picture">
                            <Picture imgportfolio={spoiler} alt="pc" />
                            </Item>
                            <Item className="item-picture">
                            <Picture imgportfolio={shitshow} alt="pc" />
                            </Item>
                            <Item className="item-picture">
                            <Picture imgportfolio={szczygiel} alt="pc" />
                            </Item>
                            <Item className="item-picture">
                            <Picture imgportfolio={morningshow} alt="pc" />
                            </Item>
                            </Carousel>
                            </div>
                        </Col>
                        <Col className="col-std col-nav" md={1}>
                            {<Navigation />}
                            {<Social />}
                        </Col>
                    </Row>
                    <Row className="row-bottom">
                        <Col className="col-std col-btn" md={{ span: 4, offset: 4}}><Btn btntext="Zobacz więcej" /></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;

