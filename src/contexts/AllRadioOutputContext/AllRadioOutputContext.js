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
           debugger;
            return {
                ...state,
                submitted: true,
                is_labeled: true,
        }

        case "deleted":
            return {
                ...state,
                submitted: true,
                is_deleted: true,
        }

        case "not_submitted":
         return {
             ...state,
             submitted: false,
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
    }


    const [state,dispatch] = useReducer(AllRadioOutputReducer,initialState);

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
                                    is_deleted:state.is_deleted                              
                                }
                            },
            }
        ).then(({data})=>{
            console.log(data);
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
            radioDispatch:dispatch,
            radioOutputState:state,
            id:state.id
        }}
    >    
    {props.children}
    </AllRadioOutputContext.Provider>)
}



export default AllRadioOutput;
