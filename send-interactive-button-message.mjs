import axios from 'axios';

const buttonTitles = [
            "Health & Lifestyle",
            "Work Challenges",
            "Study Overwhelm"
            ];
const defaultBody = [{
      "text": "How can we help ?",
      "options": [
        {
          "text": "Health & Lifestyle",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q1"
        },
        {
          "text": "Work Challenges",
          "nextQuestionId": "WORK_CHALLENGES-q1"
        },
        {
          "text": "Study Overwhelm",
          "nextQuestionId": "STUDIES-q1"
        }
      ]}
]
export const sendInteractiveMessageButton = async (phone_number_id, whatsapp_token, to, bodyText, body=defaultBody) => {
    try {
        console.log(body)
        const options = body[0].options;
        const nextQuestionIds = options.map(option => option.nextQuestionId);
        const texts = options.map(option => option.text);

        
            
        let data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": to,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                  "text": body[0]["text"],
                },
                
                "action": {
                  "buttons": [
                    {
                      "type": "reply",
                      "reply": {
                        "id": `${nextQuestionIds[0]} ${0}`,
                        "title": texts[0]
                      }
                    },
                    {
                      "type": "reply",
                      "reply": {
                        "id": `${nextQuestionIds[1]} ${1}`,
                        "title": texts[1]
                      }
                    },
                     {
                      "type": "reply",
                      "reply": {
                        "id": `${nextQuestionIds[2]} ${2}`,
                        "title": texts[2]
                      }
                    },
                    
                  ]
                }
                
            }
        });
        
        let config = {
            method: 'post',
            url: `https://graph.facebook.com/v17.0/${phone_number_id}/messages`,
            headers: {
                'Authorization': `Bearer ${whatsapp_token}`,
                'Content-Type': 'application/json'
            },
            data: data
        };

        const waResponse = await axios.request(config);
        console.log( waResponse );
    }
    catch (error) {
        console.log({ error });
    }
};
