import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tabTitle, setTabTitle] = useState('');
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    chrome.tabs.query({}, (result) => {
      setTabs(result);
    });
  }, []);

  const getCurrentTabTitle = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      setTabTitle(currentTab.title);
    });
  };

  const switchToTab = (tabId) => {
    chrome.tabs.update(tabId, { active: true });
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      setTabTitle(currentTab.title);
    });
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <Button onClick={getCurrentTabTitle} variant="primary">
            Get Current Tab Title
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <h4>Current Tab Title: {tabTitle}</h4>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <h5>All Open Tabs</h5>
          <ListGroup>
            {tabs.map((tab) => (
              <ListGroup.Item
                key={tab.id}
                action
                onClick={() => switchToTab(tab.id)}
              >
                {tab.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
