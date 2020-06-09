import gql from 'graphql-tag';

export const GET_UNLABELED_REVIEWS = gql`
                subscription getUnLabeledReviews {
                        pub_review_paragraphs(where:{
                                                      is_labeled:{ _eq: false},
                                                      is_deleted:{ _eq: false}
                                                      
                                                      },
                                                      limit:25,
                                                      order_by: { review_id : desc })
                                                      {
                                                        id
                                                        review_id
                                                        paragraph_text
                                                        date_created
                                                        is_labeled
                                                        is_deleted   
                                                        production_values 
		                                                how_film_works 
		                                                enjoyability 
		                                                why_film_works 
                                                      	effects_on_people 
		                                                no_production_values 
		                                                how_film_doesnt_work 
		                                                no_enjoyability 
		                                                why_film_doesnt_work 
		                                                no_effect_on_people 
		                                                sentiment       
                                                      }
                                }`;


