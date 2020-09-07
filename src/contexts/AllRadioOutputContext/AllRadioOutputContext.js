import React,{createContext,useReducer,useEffect} from 'react';
import {useQuery,useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';




const AllRadioOutputReducer = (state, action) => {
    switch(action.type) {
        case "effectsonPeople":
            return {
                ...state,
                effectsOnPeople: true,
                noEffectOnPeople: false,
            }

        case "noEffectOnPeople":
            return {
                    ...state,
                    noEffectOnPeople: true,
                    effectsOnPeople: false,
            }

        case "not_applicable_noEffectOnPeople":
            return {
                    ...state,
                    noEffectOnPeople: false,
                    effectsOnPeople: false,
            }

        case "enjoyability":
            return {
                ...state,
                enjoyability: true,
                noEnjoyability: false,
        }

        case "noEnjoyability":
            return {
            ...state,
            noEnjoyability: true,
            enjoyability: false,
        }

        case "not_applicable_noEnjoyability":
            return {
            ...state,
            noEnjoyability: false,
            enjoyability: false,
        }

        case "howFilmWorks":
            return {
                ...state,
                howFilmWorks: true,
                howFilmDoesntWork: false,
            }

        case "howFilmDoesntWork":
            return {
            ...state,
            howFilmDoesntWork: true,
            howFilmWorks: false,
        }

        
        case "not_applicable_howFilmWorks":
            return {
            ...state,
            howFilmDoesntWork: false,
            howFilmWorks: false,
        }
        
        case "productionValues":
        return {
            ...state,
            productionValues: true,
            noProductionValues: false,

        }
        
        case "noProductionValues":
            return {
                ...state,
                noProductionValues: true,
                productionValues: false,
        }

        case "not_applicable_productionValues":
            return {
                ...state,
                noProductionValues: false,
                productionValues: false,
        }
        
        case "why_film_works":
        return {
            ...state,
            why_film_works: true,
            why_film_doesnt_work: false,
        }
        
        case "why_film_doesnt_work":
        return {
            ...state,
            why_film_doesnt_work: true,
            why_film_works: false,
        }

        case "not_applicable_why_film_works":
        return {
            ...state,
            why_film_doesnt_work: false,
            why_film_works: false,
        }

        

        case "sentiment":
        return {
            ...state,
            sentiment: action.payload,
        }
        case "setId":
        return {
            ...state,
            id: action.payload,
        }
        case "submitted":
            return {
                ...state,
                submitted: true,
                is_labeled: true,
                is_deleted: false,
                is_undecided: false

        }

        case "deleted":
            return {
                ...state,     
                submitted: true,          
                is_deleted: true,                
                is_labeled: false,
                is_undecided: false

        }

        case "undecided":
            return {
                ...state,   
                submitted: true,             
                is_undecided: true,                
                is_labeled: false,
                is_deleted: false
        }

        case "not_submitted":
         return {
             ...state,
             submitted: false,
        }
        case "switchToggleView": {
            return {
                ...state,
                switchToggleValue:action.value
            }
        }
        case "changeUser": {
            return {
                ...state,
                user:action.value
            }
        }
        case "changeMapperState": {
            return {
                ...state,
                sentenceSelectedArray:[...state.sentenceSelectedArray, state.sentenceSelectedArray.map((data)=>{
                    if("Sen_Production_Values" === action.field) {
                        state.sentenceSelectedArray[0].currentSentence = state.currentSentence;
                        state.sentenceSelectedArray[0].Sen_Production_Values = true;      
                        state.sentenceSelectedArray[0].currentField = action.field;                          
                    }
                    if("Sen_No_Production_Values" === action.field) {
                        state.sentenceSelectedArray[1].currentSentence = state.currentSentence;  
                        state.sentenceSelectedArray[1].Sen_No_Production_Values = true;   
                        state.sentenceSelectedArray[1].currentField = action.field;                                                     
                    }
                    if("Sen_NA_Production_Values" === action.field ) {
                        state.sentenceSelectedArray[2].currentSentence = state.currentSentence;
                        state.sentenceSelectedArray[2].Sen_NA_Production_Values = true;   
                        state.sentenceSelectedArray[2].currentField = action.field;                                                                    
                    }
                    if("Sen_How_Film_Works" === action.field ) {
                        state.sentenceSelectedArray[3].currentSentence = state.currentSentence;
                        state.sentenceSelectedArray[3].Sen_How_Film_Works = true;       
                        state.sentenceSelectedArray[3].currentField = action.field;                                                                                                                      
                    }
                    if("Sen_No_How_Film_Works" ===  action.field) {
                        state.sentenceSelectedArray[4].currentSentence = state.currentSentence;                
                        state.sentenceSelectedArray[4].Sen_No_How_Film_Works = true;  
                        state.sentenceSelectedArray[4].currentField = action.field;                                                                                                                           
                    }
                    if("Sen_NA_How_Film_Works" === action.field ) {
                        state.sentenceSelectedArray[5].currentSentence = state.currentSentence;
                        state.sentenceSelectedArray[5].Sen_NA_How_Film_Works = true;      
                        state.sentenceSelectedArray[5].currentField = action.field;                                                                                                                                     
                    }
                    if("Sen_Enjoyability" === action.field) {
                        state.sentenceSelectedArray[6].currentSentence = state.currentSentence;
                        state.sentenceSelectedArray[6].Sen_Enjoyability = true;   
                        state.sentenceSelectedArray[6].currentField = action.field;                                                                                                                                                        
                    }
                    if("Sen_No_Enjoyability" === action.field ) {
                        state.sentenceSelectedArray[7].currentSentence = state.currentSentence;
                        state.sentenceSelectedArray[7].Sen_No_Enjoyability = true;     
                        state.sentenceSelectedArray[7].currentField = action.field;                                                                                              
                    }
                    if("Sen_NA_Enjoyability" === action.field) {
                        state.sentenceSelectedArray[8].currentSentence = state.currentSentence;
                        state.sentenceSelectedArray[8].Sen_NA_Enjoyability = true;           
                        state.sentenceSelectedArray[8].currentField = action.field;                                                                                                       
                    }
                    if("Sen_Why_Film_Works" === action.field) {
                        state.sentenceSelectedArray[9].currentSentence = state.currentSentence;                
                        state.sentenceSelectedArray[9].Sen_Why_Film_Works = true;     
                        state.sentenceSelectedArray[9].currentField = action.field;                                                                                                             
                    }
                    if("Sen_Why_Film_doesnt_Work" === action.field) {
                        state.sentenceSelectedArray[10].currentSentence = state.currentSentence;
                        state.sentenceSelectedArray[10].Sen_Why_Film_doesnt_Work = true; 
                        state.sentenceSelectedArray[10].currentField = action.field;                                                                                                         
                    }
                    if("Sen_NA_Why_Film_Works" === action.field) {
                        state.sentenceSelectedArray[11].currentSentence = state.currentSentence;
                        state.sentenceSelectedArray[11].Sen_NA_Why_Film_Works = true;    
                        state.sentenceSelectedArray[11].currentField = action.field;                                                                                                          
                    }
                    if("Sen_Effects_on_people" === action.field) {
                        state.sentenceSelectedArray[12].currentSentence = state.currentSentence;
                        state.sentenceSelectedArray[12].Sen_Effects_on_people = true;
                        state.sentenceSelectedArray[12].currentField = action.field;                                                                                                                              
                    }
                    if("Sen_No_Effects_on_people" === action.field) {
                        state.sentenceSelectedArray[13].currentSentence = state.currentSentence;
                        state.sentenceSelectedArray[13].Sen_No_Effects_on_people = true; 
                        state.sentenceSelectedArray[13].currentField = action.field;                                                                                                                                             
                    }
                    if("Sen_NA_Effects_on_people" === action.field) {
                        state.sentenceSelectedArray[14].currentSentence = state.currentSentence;
                        state.sentenceSelectedArray[14].Sen_NA_Effects_on_people = true;   
                        state.sentenceSelectedArray[14].currentField = action.field;                                                                                                                                                           
                    }
                    if("Sen_Overall_Positive" === action.field ) {
                        state.sentenceSelectedArray[15].currentSentence = state.currentSentence;
                        state.sentenceSelectedArray[15].Sen_Overall_Positive = true;   
                        state.sentenceSelectedArray[15].currentField = action.field;                                                                                                                                                                           
                    }
                    if("Sen_Overall_Negative" === action.field) {
                        state.sentenceSelectedArray[16].currentSentence = state.currentSentence;
                        state.sentenceSelectedArray[16].Sen_Overall_Negative = true;   
                        state.sentenceSelectedArray[16].currentField = action.field;                                                                                                                                                                                           
                    }
                    if("Sen_Overall_Neutral" === action.field) {
                        state.sentenceSelectedArray[17].currentSentence = state.currentSentence;
                        state.sentenceSelectedArray[17].Sen_Overall_Neutral = true;      
                        state.sentenceSelectedArray[17].currentField = action.field;                                                                                                                                                                                                        
                    }
                })]
            }
        }
        case "changeCurrentSentence": {
            return {
                ...state,
                currentSentence:action.value
            }
        }
    }
}

const UPDATE_PARAGRAPH_DATA = gql`
mutation update_pub_review_paragraphs_by_pk($_set: pub_review_paragraphs_set_input, $pk_columns: pub_review_paragraphs_pk_columns_input!) {
    update_pub_review_paragraphs_by_pk(pk_columns: $pk_columns, _set: $_set ) {
      why_film_works
      why_film_doesnt_work
      effects_on_people
      enjoyability
      how_film_doesnt_work
      how_film_works
      no_effect_on_people
      no_enjoyability
      no_production_values
      production_values
      is_labeled
      is_deleted
      is_undecided
    }
  }
`;

export const AllRadioOutputContext = createContext();

const AllRadioOutput = props => {
    const initialState = {
       effectsOnPeople : false,
       submitted:false,
       enjoyability: false, 
       howFilmDoesntWork: false,
       howFilmWorks: false,
       noEffectOnPeople: false, 
       noEnjoyability: false, 
       noProductionValues: false, 
       why_film_doesnt_work: false, 
       why_film_works: false,
       productionValues:false,
       id:0,
       sentiment:'neutral',
       is_labeled:'false',
       is_deleted:'false',
       is_undecided:'false',
       switchToggleValue:false,
       user:'',
       selectedArray:0,
       sentenceSelectedArray:[
           {
               id:1,
               currentSentence:'',
               Sen_Production_Values:false,
               currentField:''
           },
           {
               id:2,
               currentSentence:'',
               Sen_No_Production_Values:false,
               currentField:''
           },
           {
               id:3,
               currentSentence:'',
               Sen_NA_Production_Values:false,
               currentField:''
           },
           {
               id:4,
               currentSentence:'',
               Sen_How_Film_Works:false,
               currentField:''
           },
           {
               id:5,
               currentSentence:'',
               Sen_No_How_Film_Works:false,
               currentField:''
           },
           {
               id:6,
               currentSentence:'',
               Sen_NA_How_Film_Works:false,
               currentField:''
           },
           {
               id:7,
               currentSentence:'',
               Sen_Enjoyability:false,
               currentField:''
           },
           {
               id:8,
               currentSentence:'',
               Sen_No_Enjoyability:false,
               currentField:''
           },
           {
               id:9,
               currentSentence:'',
               Sen_NA_Enjoyability:false,
               currentField:''
           },
           {
               id:10,
               currentSentence:'',
               Sen_Why_Film_Works:false,
               currentField:''
           },
           { 
               id:11,
               currentSentence:'',
               Sen_Why_Film_doesnt_Work:false,
               currentField:''
           },
           {
               id:12,
               currentSentence:'',
               Sen_NA_Why_Film_Works:false,
               currentField:''
           },
           {
               id:13,
               currentSentence:'',
               Sen_Effects_on_people:false,
               currentField:''
           },
           {
               id:14,
               currentSentence:'',
               Sen_No_Effects_on_people:false,
               currentField:''
           },
           {
               id:15,
               currentSentence:'',
               Sen_NA_Effects_on_people:false,
               currentField:''
           },
           {
               id:16,
               currentSentence:'',
               Sen_Overall_Positive:false,
               currentField:''
           },
           { 
               id:17,
               currentSentence:'',
               Sen_Overall_Negative:false,
               currentField:''
           },
           {
               id:18,
               currentSentence:'',
               Sen_Overall_Neutral:false,
               currentField:''
           },
       ],
       /*Sen_Production_Values:'',
       Sen_No_Production_Values:'',
       Sen_NA_Production_Values:'',
       Sen_How_Film_Works:'',
       Sen_No_How_Film_Works:'',
       Sen_NA_How_Film_Works:'',
       Sen_Enjoyability:'',
       Sen_No_Enjoyability:'',
       Sen_NA_Enjoyability:'',
       Sen_Why_Film_Works:'',
       Sen_Why_Film_doesnt_Work:'',
       Sen_NA_Why_Film_Works:'',
       Sen_Effects_on_people:'',
       Sen_No_Effects_on_people:'',
       Sen_NA_Effects_on_people:'',
       Sen_Overall_Positive:'',
       Sen_Overall_Negative:'',
       Sen_Overall_Neutral:'',*/
       currentSentence:'',
    }


    const [state,dispatch] = useReducer(AllRadioOutputReducer,initialState);


    const {switchToggleValue,user,selectedArray,currentSentence} = state;

    const [updateParagraphs,{data}] = useMutation(UPDATE_PARAGRAPH_DATA);
    useEffect(() => {
        return () => {
        }
    }, [state])

    useEffect(() => {
        console.log(state);
        updateParagraphs(
            {
                updateParagraphs,
                variables:
                            {
                                pk_columns: {
                                                id: state.id
                                            }, 
                                _set: {
                                    effects_on_people: state.effectsOnPeople, 
                                    enjoyability: state.enjoyability, 
                                    how_film_doesnt_work: state.howFilmDoesntWork,
                                    how_film_works: state.howFilmWorks,
                                    no_effect_on_people: state.noEffectOnPeople, 
                                    no_enjoyability: state.noEnjoyability, 
                                    no_production_values: state.noProductionValues, 
                                    why_film_doesnt_work: state.why_film_doesnt_work, 
                                    why_film_works: state.why_film_works,
                                    production_values:state.productionValues,
                                    sentiment:state.sentiment,
                                    is_labeled:state.is_labeled,
                                    is_deleted:state.is_deleted,
                                    is_undecided:state.is_undecided                              
                                }
                            },
            }
        ).then(({data})=>{
            // console.log(data);
        });
        return () => {
            dispatch({ type: 'not_submitted'})
        }
    }, [state.submitted])


    return (
    <AllRadioOutputContext.Provider
        value = {{
            effectsOnPeople:state.effectsOnPeople,
            enjoyability:state.enjoyability, 
            howFilmDoesntWork:state.howFilmDoesntWork,
            howFilmWorks:state.howFilmWorks,
            noEffectOnPeople:state.noEffectOnPeople, 
            noEnjoyability:state.noEnjoyability, 
            noProductionValues:state.noProductionValues, 
            why_film_doesnt_work:state.why_film_doesnt_work, 
            why_film_works:state.why_film_works,
            sentiment:state.sentiment,   
            is_labeled:state.is_labeled,
            is_deleted:state.is_deleted,
            is_undecided:state.is_undecided,
            radioDispatch:dispatch,
            radioOutputState:state,
            id:state.id,   
            switchToggleValue,
            user,
            selectedArray,
            currentSentence,
            }}
    >    
    {props.children}
    </AllRadioOutputContext.Provider>)
}



export default AllRadioOutput;
