import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

function AccordionTest() {
	return (
		<div>
			<Accordion defaultActiveKey="0">
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link">
							Click me!
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse>
						<Card.Body>Hello! I'm the body</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link">
							Click me!
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse>
						<Card.Body>Hello! I'm another body</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
}

export default AccordionTest;
