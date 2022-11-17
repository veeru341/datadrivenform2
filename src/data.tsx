export default {
  "fields": [
    {
      "component": "wizard",
      "name": "wizzard",
      "fields": [
        {
          "title": "Get started with adding source",
          "name": "step-1",
          "nextStep": "nextstep1",
          "fields": [
            {
              "component": "select",
              "name": "source-name",
              "label": "Select Equipment Family",
              "options": [
                {
                  "value": "new value 1",
                  "label": "new value 1"
                },
                {
                  "value": "new value 2",
                  "label": "new value 2"
                },
              ],
            },
            {
              "component": "select",
              "name": "source-type",
              "label": "Select Equipment",
              "isRequired": true,
              "options": [
                {
                  "value": "new value 1",
                  "label": "new value 2"
                },
                {
                  "value": "new value 1",
                  "label": "new value 2"
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
          "title": "nextstep1",
          "name": "nextstep1",
          "nextStep": "nextstep2",
          "fields": [
            {
              "component": "select",
              "name": "aws-field1",
              "label": "Select Spec",
              "options": [
                {
                  "value": "new value 1",
                  "label": "new value 1"
                },
                {
                  "value": "new value 2",
                  "label": "new value 2"
                }
              ],
            },
            {
              "component": "select",
              "name": "aws-field2",
              "label": "Select Process Spec",
              "options": [
                {
                  "value": "new value 1",
                  "label": "new value 1"
                },
                {
                  "value": "new value 2",
                  "label": "new value 2"
                }
              ],
            },
            {
              "component": "select",
              "name": "aws-field3",
              "label": "Select Product",
              "options": [
                {
                  "value": "table1",
                  "label": "new value 1"
                },
                {
                  "value": "table2",
                  "label": "new value 2"
                }
              ],
            },
          ]
        },
        {
          "title": "nextstep2",
          "name": "nextstep2",
          "fields": [
            {
              "component": "select",
              "name": "aws-field5",
              "label": "Select Spec",
              "options": [
                {
                  "value": "new value 1",
                  "label": "new value 1"
                },
                {
                  "value": "new value 2",
                  "label": "new value 2"
                }
              ],
            },
            {
              "component": "select",
              "name": "aws-field6",
              "label": "Select Spec",
              "options": [
                {
                  "value": "new value 1",
                  "label": "new value 1"
                },
                {
                  "value": "new value 2",
                  "label": "new value 2"
                }
              ],
            }
          ]
        }
      ]
    }
  ]
};