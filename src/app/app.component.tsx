import React from 'react';
import { ThemeProvider } from 'styled-components';

import { main } from 'assets/themes';
import { Presentation } from 'shared/storybook-ui';
import { Row, Col, Text, Button } from 'shared/components';

export const App: React.FC = () => (
  <ThemeProvider theme={main}>
    <div style={{ padding: 30 }}>
      <Presentation title="Buttons" description="Reusable button component." />
      <Row justify="space-between" direction="column" gutter={[20, 0]} span={8}>
        <Col>
          <Text gutterBottom density="semi-bold">
            Contained Button
          </Text>
        </Col>
        <Col flex justify="space-between">
          <Button variant="contained" color="primary">
            <Text color="reverse">Primary</Text>
          </Button>
          <Button variant="contained" color="secondary">
            <Text color="reverse">Secondary</Text>
          </Button>
          <Button variant="contained" color="tertiary">
            <Text color="reverse">Tertiary</Text>
          </Button>
          <Button variant="contained" color="success">
            <Text color="reverse">Success</Text>
          </Button>
          <Button variant="contained" color="warn">
            <Text color="reverse">Warn</Text>
          </Button>
          <Button variant="contained" color="danger">
            <Text color="reverse">Danger</Text>
          </Button>
        </Col>
      </Row>

      <Row justify="space-between" direction="column" gutter={[20, 0]} span={8}>
        <Col>
          <Text gutterBottom density="semi-bold">
            Outlined Button
          </Text>
        </Col>
        <Col flex justify="space-between">
          <Button variant="outlined" color="primary">
            <Text color="primary">Primary</Text>
          </Button>
          <Button variant="outlined" color="secondary">
            <Text color="secondary">Secondary</Text>
          </Button>
          <Button variant="outlined" color="tertiary">
            <Text color="tertiary">Tertiary</Text>
          </Button>
          <Button variant="outlined" color="success">
            <Text color="success">Success</Text>
          </Button>
          <Button variant="outlined" color="warn">
            <Text color="warn">Warn</Text>
          </Button>
          <Button variant="outlined" color="danger">
            <Text color="danger">Danger</Text>
          </Button>
        </Col>
      </Row>

      <Row justify="space-between" direction="column" gutter={[20, 0]} span={10}>
        <Col>
          <Text gutterBottom density="semi-bold">
            Base Button
          </Text>
        </Col>
        <Col justify="space-between">
          <Button variant="base">Base Button</Button>
        </Col>
      </Row>
    </div>
  </ThemeProvider>
);
