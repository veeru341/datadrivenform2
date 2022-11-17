import { PlaylistAddOutlined } from "@mui/icons-material";
import { AnyNaptrRecord } from "dns";
import { createRecipeWizard } from "../action-creators";
import { ActionType } from "../action-types/index";
import { Action } from "../actions";


const initialData: any = {
    cart: [
        {
            "id": "Schema1",
            "fields": [
                {
                    "component": "select",
                    "name": "select-1660724664146",
                    "simpleValue": true,
                    "options": [],
                    "loadOptions": () =>
                        new Promise((res) =>
                            setTimeout(
                                () =>
                                    res([
                                        { value: 'first-option', label: 'First async option' },
                                        { value: 'second-option', label: 'Second async option' }
                                    ]),
                                2500
                            )
                        )
                }
            ]
        },
        {
            "id": "Schema2",
            "fields": [
                {
                    "component": "wizard",
                    "name": "wizzard",
                    "fields": [
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
                    ]
                }
            ]
        }
    ],
    schemaview: [],
    jsonstructure: [],
    jsonstructureview: [],
    isloggedin: false,
    createrecipewizard: []
}

const schemaReducer = (state: any = initialData, action: Action): any => {

    console.log("action type checking", action.type);
    console.log("action payload checking", action.payload);
    console.log(state.createrecipewizard)

    switch (action.type) {
        case ActionType.DEPOSIT:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        case ActionType.CREATERECIPEWIZARD:
            return {
                ...state,
                createrecipewizard: state.createrecipewizard.find((obj: any) => obj.name == action.payload.name) ? (
                    state.createrecipewizard.map((person: any) => {
                        if (person.name === action.payload.name) {
                            return Object.assign({}, person, { selectEquipmentFamily: action.payload.selectEquipmentFamily, selectEquipment: action.payload.selectEquipment, selectSpec: action.payload.selectSpec, selectProcessSpec: action.payload.selectProcessSpec, selectProduct: action.payload.selectProduct })
                        }
                        else {
                            return { ...person }
                        }
                    }
                    )) : (
                    [...state.createrecipewizard, action.payload]
                )
            }

        case ActionType.CLEARCREATERECIPEDATA:
            return {
                ...state,
                createrecipewizard: []
            };

        case ActionType.WITHDRAW:
            return {
                ...state,
                schemaview: [action.payload]
            }

        case ActionType.EDITSCHEMA:
            return {
                ...state,
                cart: state.cart.map((person: any) => {
                    if (person.id === action.payload.id) {
                        return action.payload;
                    }
                    return person;
                }),
            }

        case ActionType.ISLOGGEDIN:
            return {
                ...state,
                isloggedin: action.payload
            };

        case ActionType.DELETESCHEMA:
            return {
                ...state,
                cart: state.cart.filter((item: any) => item.id !== action.payload.id)
            }

        case ActionType.JSONSTRUCTURE:
            return {
                ...state,
                jsonstructure: [...state.jsonstructure, action.payload]
            }

        case ActionType.JSONSTRUCTUREEDIT:
            return {
                ...state,
                jsonstructureview: [action.payload]
            }

        case ActionType.JSONSTRUCTUREEDITSAVE:
            return {
                ...state,
                jsonstructure: state.jsonstructure.map((person: any) => {
                    if (person.id === action.payload.id) {
                        return action.payload;
                    }
                    return person;
                }),
            }
        default:
            return state
    }
}


export default schemaReducer