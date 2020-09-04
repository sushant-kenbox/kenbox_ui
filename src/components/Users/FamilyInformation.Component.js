import React from "react";
import { Accordion, Card } from "react-bootstrap";

const FamilyInformation = () => {

  console.log("FamilyInformation")
  return (
    <Card>
      <Card.Header className="mb-2">
        <Accordion.Toggle as={Card.Header} eventKey="2">
          <h5 className="mb-0">
            Family Info
            <i className="fa fa-angle-down rotate-icon" />
          </h5>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="2">
        <Card.Body>
          Anim pariatur cliche reprehenderit, enim eiusmod high
          life accusamus terry richardson ad squid. 3 wolf moon
          officia aute, non cupidatat skateboard dolor brunch.
          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
          wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et.
          Nihil anim keffiyeh helvetica, craft beer labore wes
          anderson cred nesciunt sapiente ea proident. Ad vegan
          excepteur butcher vice lomo. Leggings occaecat craft
          beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore
          sustainable VHS.
        </Card.Body>
      </Accordion.Collapse>
    </Card>

  )
}

export default FamilyInformation;
