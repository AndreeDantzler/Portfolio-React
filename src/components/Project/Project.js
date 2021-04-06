import React from "react";
import { Card, CardDeck, Row, Col } from "react-bootstrap";

function Project() {
  return (
    <Row>
      <Col>
        <Row className="justify-content-center">
          <Col md>
            <Card>
              <Card.Img variant="top" src={process.env.PUBLIC_URL+"/img/Eat-Da-Burgers.png"} />
              <Card.Body>
                <Card.Title>Eat-Da-Burgers</Card.Title>
                <Card.Text>
                  A burger logger with MySQL, Node, Express, Handlebars and a
                  homemade ORM.
                </Card.Text>
                <Row className="bottom">
                  <Col>
                    <Card.Link
                      href="https://github.com/AndreeDantzler/Burgers-Fast"
                      target="_blank"
                    >
                      Github Link
                    </Card.Link>
                  </Col>
                  <Col>
                    <Card.Link
                      href="https://fathomless-forest-87076.herokuapp.com/"
                      target="_blank"
                    >
                      Live Link
                    </Card.Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card>
              <Card.Img variant="top" src={process.env.PUBLIC_URL+"/img/Employee-directory.png"} />
              <Card.Body>
                <Card.Title>Employee Directory</Card.Title>
                <Card.Text>
                  Using Random User API, this employee directory built with
                  React allows you to sort table by Employee name and filter by
                  gender.
                </Card.Text>
                <Row className="bottom">
                  <Col>
                    <Card.Link
                      href="https://github.com/AndreeDantzler/Employee-DirectoryR"
                      target="_blank"
                    >
                      Github Link
                    </Card.Link>
                  </Col>
                  <Col>
                    <Card.Link
                      href="https://andreedantzler.github.io/Employee-DirectoryR/"
                      target="_blank"
                    >
                      Live Link
                    </Card.Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
          <Col md>
            <Card>
              <Card.Img variant="top" src={process.env.PUBLIC_URL+"/img/Note Taker.png"} />
              <Card.Body>
                <Card.Title>Note Taker</Card.Title>
                <Card.Text>
                  Application that can be used to write, save, and delete notes.
                  It uses an express backend and save and retrieve note data
                  from a JSON file.
                </Card.Text>
                <Row className="bottom">
                  <Col>
                    <Card.Link
                      href="https://github.com/AndreeDantzler/Express-Note-Taker"
                      target="_blank"
                    >
                      Github Link
                    </Card.Link>
                  </Col>
                  <Col>
                    <Card.Link
                      href="https://frozen-beach-09258.herokuapp.com/"
                      target="_blank"
                    >
                      Live Link
                  </Card.Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md>
            <Card>
              <Card.Img variant="top" src={process.env.PUBLIC_URL+"/img/WorkDayPlanner.PNG"} />
              <Card.Body>
                <Card.Title>Workday Scheduler</Card.Title>
                <Card.Text>
                  Calendar application that allows a user to save events for
                  each hour of the day. This app is built with React.
                </Card.Text>
                <Row class="bottom">
                  <Col>
                    <Card.Link
                      href="https://github.com/AndreeDantzler/Workday-Planner-with-React"
                      target="blank"
                    >
                      Github Link
                    </Card.Link>
                  </Col>
                  <Col>
                    <Card.Link
                      href="https://andreedantzler.github.io/Workday-Planner-with-React/"
                      target="blank"
                    >
                      Live Link
                    </Card.Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card>
              <Card.Img variant="top" src={process.env.PUBLIC_URL+"/img/Weatherdashboard.PNG"} />
              <Card.Body>
                <Card.Title>Weather Dashboard</Card.Title>
                <Card.Text>
                  An application which uses the OpenWeather API to retrieve
                  current and future weather data for cities.
                </Card.Text>
                <Row className="bottom">
                  <Col>
                  `<Card.Link
                    href="https://github.com/AndreeDantzler/WeatherDashboard"
                    target="blank"
                  >
                    Github Link
                    </Card.Link>
                  </Col>
                  <Col>
                    <Card.Link
                    href="https://andreedantzler.github.io/WeatherDashboard/"
                    target="blank"
                  >
                    Live Link
                    </Card.Link>`
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card>
              <Card.Img variant="top" src={process.env.PUBLIC_URL+"/img/Covid19symptom.PNG"}/>
              <Card.Body>
                <Card.Title>COVID 19 Symptoms Checker</Card.Title>
                <Card.Text>
                  An app where users can list their symptoms and provided with
                  COVID-19 testing centers or general practice offices nearby.
                </Card.Text>
                <Row className="bottom">
                <Col>
                  <Card.Link
                    href="https://github.com/Fainimous/COVID19SymptomChecker"
                    targer="_blank"
                  >
                    Github Link
                  </Card.Link>
                  </Col>
                  <Col>
                  <Card.Link
                    href="https://fainimous.github.io/COVID19SymptomChecker/"
                    target="_blank"
                  >
                    Live Link
                  </Card.Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Project;
