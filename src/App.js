import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';

import componentMapper from '@data-driven-forms/mui-component-mapper/component-mapper';
import FormTemplate from '@data-driven-forms/mui-component-mapper/form-template';

import componentTypes from '@data-driven-forms/react-form-renderer/component-types';

import antcomponentMapper from '@data-driven-forms/ant-component-mapper/component-mapper';
import AntFormTemplate from '@data-driven-forms/ant-component-mapper/form-template';

import carboncomponentMapper from '@data-driven-forms/carbon-component-mapper/component-mapper';
import CarbonFormTemplate from '@data-driven-forms/carbon-component-mapper/form-template';

import pf4componentMapper from '@data-driven-forms/pf4-component-mapper/component-mapper';
import Pf4FormTemplate from '@data-driven-forms/pf4-component-mapper/form-template';

import blueprintcomponentMapper from '@data-driven-forms/blueprint-component-mapper/component-mapper';
import BlueprintFormTemplate from '@data-driven-forms/blueprint-component-mapper/form-template';

import suircomponentMapper from '@data-driven-forms/suir-component-mapper/component-mapper';
import SuirFormTemplate from '@data-driven-forms/suir-component-mapper/form-template';

const array = [
  [componentMapper,FormTemplate],
  [antcomponentMapper,AntFormTemplate],
  [carboncomponentMapper,CarbonFormTemplate],
  [pf4componentMapper,Pf4FormTemplate],
  [blueprintcomponentMapper,BlueprintFormTemplate],
  [suircomponentMapper,SuirFormTemplate],
]

function App() {
  return (
    <div className="App">
      {array.map(([mapper, Template]) => (
      <FormRenderer
        componentMapper={componentMapper}
        FormTemplate={FormTemplate}
        onSubmit={console.log}
        schema={{fields: [
          {component: componentTypes.TEXT_FIELD, name: 'text', label: 'some-label'},
          {component: componentTypes.TEXTAREA, name: 'textarea', label: 'some-label'},
          {component: componentTypes.SELECT, name: 'select', label: 'some-label', options: []},
          {component: componentTypes.CHECKBOX, name: 'check', label: 'some-label'},
          {component: componentTypes.DUAL_LIST_SELECT, name: 'duallist', label: 'some-label', options: []},
          {component: componentTypes.RADIO, name: 'radio', label: 'some-label', options: []},
          {component: componentTypes.PLAIN_TEXT, name: 'plaintext', label: 'some-label'},
          {component: componentTypes.TABS, name: 'tabs', label: 'some-label', fields: []},
          {component: componentTypes.WIZARD, name: 'wizard', label: 'some-label', fields: [
            {
              "title": "Get started with adding source",
              "name": "step-1",
              "nextStep": {
                "when": "source-type",
                "stepMapper": {
                  "aws": "aws",
                  "google": "google"
                }
              },
              "fields": [
                {
                  "component": "textarea",
                  "name": "source-name",
                  "type": "text",
                  "label": "Source name"
                },
                {
                  "component": "select",
                  "name": "source-type",
                  "label": "Source type",
                  "isRequired": true,
                  "options": [
                    {
                      "label": "Please Choose"
                    },
                    {
                      "value": "aws",
                      "label": "Aws"
                    },
                    {
                      "value": "google",
                      "label": "Google"
                    }
                  ],
                  "validate": [
                    {
                      "type": "required"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Configure AWS",
              "name": "aws",
              "fields": [
                {
                  "component": "text-field",
                  "name": "aws-field",
                  "label": "Aws field part"
                }
              ]
            },
            {
              "name": "google",
              "title": "Configure google",
              "fields": [
                {
                  "component": "text-field",
                  "name": "google-field",
                  "label": "Google field part"
                }
              ]
            }
          ]},
          {component: componentTypes.FIELD_ARRAY, name: 'field-array', label: 'some-label'},
          {component: componentTypes.SWITCH, name: 'switch', label: 'some-label'},
          {component: componentTypes.SLIDER, name: 'slider', label: 'some-label'},
          {component: componentTypes.SUB_FORM, name: 'subform', title: 'some-label', fields: []},
          {component: componentTypes.TIME_PICKER, name: 'timepicker', title: 'some-label'},
          {component: componentTypes.DATE_PICKER, name: 'datepicker', title: 'some-label'},
        ]}}
      />
      ))}
    </div>
  );
}

export default App;
