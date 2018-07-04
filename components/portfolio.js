import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import portfolio_List from '../static/database/portfolio_List'
export default class Example extends React.Component {
  static getInitialProps({query}) {
      return {
        portfolio_List: portfolio_List 
      }
  }
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Portfolio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              About me
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Contract
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
         
          <TabPane tabId="1">
            <Row>
                {
                    portfolio_List.map((portfolio)=> (
                      
                        <Col key={portfolio.id} sm="4" className="cardThumbnail">
                            <Card body>
                                <CardText>
                                    <div className="thumbnailImage">
                                        <img src={`static/images/portfolio/${portfolio.image_url}`}/>
                                    </div>
                                </CardText>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
          </TabPane>
          <TabPane tabId="2">
              <div className="cardAbout_me col-md-8">
                  <h4 className="page-header">Experiencee</h4>
                  <p>ปี 2012 เริ่มมีการศึกษาสนใจติดตามข่าวสารขอ้มูลเก่ียวกับงานสายเทคโนโลยีสารสนเทศ จึงไดต้ัดสินใจเริ่มทำงานสายไอทีอย่างเป็นทางการโดยเริ่มจากเป็น Blogger เขียนบทความขอ้มูลข่าวสารวงการไอที และ รีววิอุปกรณ์เทคโนโลยีต่างๆบนเวบ็ไซด์ เป็นเวลา 2 ปี</p>

                  <br/>
                  <h4 className="page-header">Achievement</h4>
                  <p>ปี 2014-2015 ได้เข้าสู่วงการ TechStartup ควบคู่กับ การทาํงานเป็น FrontEnd Developer & UI Designer ฟรีแลนซ์ ตอ่ มาได้เข้า ร่วมแข่งขันทำ Web Application ท่ีงาน Startup Weekend Travel Edition 2015 by Amadeus และ ได้ ร้างวัลชนะเลิศอันดับ 3</p>
                  <br/>
                  <h4 className="page-header">Education Graduate</h4>
                  <p>Graphic and Web creative design at <a href="https://www.dhw.ac.jp/th/" target="_blank"><strong>Digital Hollywood University Bangkok</strong></a></p>
              </div>
          </TabPane>
          <TabPane tabId="3">
              <div className="cardAbout_me col-md-8">
                <h4 className="page-header">MY channel</h4>
                Facebook : <a href="https://www.facebook.com/panjamapon" target="_blank"><strong>Panjamapon</strong></a>
                <br/>
                GitHub : <a href="https://github.com/happyudong555" target="_blank"><strong>happyudong555</strong></a>
              </div>
          </TabPane>
        </TabContent>
        <style>{`
            .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
                color: #fff !important;
                background-color: #21241a;
                border-color: transparent !important;
            }
            .nav-tabs {
                width: 350px;
                margin: auto;
                margin-bottom: 30px;
                border-bottom: 0;
                cursor: pointer !important;
            }
            a {
                text-transform: capitalize;
            }
            .cardThumbnail {
                margin-bottom:30px;
            }
            .thumbnailImage {
                height:345px;
                overflow:hidden;
            }
            .thumbnailImage img {
                width:100%;
                height: auto;
                object-fit: cover;
            }
            .card-body {
                padding:0;
            }
            .cardAbout_me {
                height:auto;
                background-color:#fff;
                margin:auto;
                display:block;
                border-radius:6px;
                box-shadow:0px 2px 10px #bdbcbc;
                padding:32px;
                margin-bottom:40px;
            }
            .cardAbout_me p {
              line-height: 32px;
            }
            @media screen and (max-width: 480px) and (max-width: 600px) {
                .nav-tabs {
                    width: 100% !important;
                    margin: auto;
                    margin-bottom: 30px;
                    border-bottom: 0;
                    font-size: 12px;
                }
                .thumbnailImage {
                    height: auto;
                    overflow: hidden;
                }
                .cardAbout_me {
                  height: auto;
                  background-color: #fff;
                  margin: auto;
                  display: block;
                  border-radius: 6px;
                  box-shadow: 0px 2px 10px #bdbcbc;
                  padding: 26px;
                  margin-bottom: 40px;
                }
            }
        `}</style>
      </div>
    );
  }
}