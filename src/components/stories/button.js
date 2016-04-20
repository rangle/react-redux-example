import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Info from './info';
import Button from '../button';
import Form from '../form';

storiesOf('Button', module)
  .add('default button with text', () => (
    <div className="p4 center">
      <Button>This is a button</Button>
    </div>
  ))
  .add('with an action', () => (
    <div className="p4 center">
      <Button onClick={ action('button action') }>Submit</Button>
      <Info>Clicking the button should fire the action</Info>
    </div>
  ))
  .add('submit for a form', () => (
    <div className="p4 center">
      <Form
        handleSubmit={ action('form submitted') }>
        <Button type="submit">Submit</Button>
      </Form>
      <Info>Clicking the button should submit the form</Info>
    </div>
  ))
  .add('with custom classes', () => (
    <div className="p4 center">
      <Button className="bg-red">Delete</Button>
      <Info>The button should have a red background</Info>
    </div>
  ));
