import axios from 'axios';

export const sendInteractiveMessage = async (phone_number_id, whatsapp_token, to, bodyText) => {
    try {
        let data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": to,
            "type": "interactive",
            "interactive": {
                "type": "list",
                "header": {
                  "type": "text",
                  "text": "HEADER_TEXT"
                },
           "body": {
                "text": "BODY_TEXT"
              },
 
            "action": {
              "button": "How can we help ?",
              "sections": [
                {
                  "title": "SECTION_1_TITLE",
                  "rows": [
                    {
                      "id": "SECTION_1_ROW_1_ID",
                      "title": "SECTION_1_ROW_1_TITLE",
                      "description": "SECTION_1_ROW_1_DESCRIPTION"
                    },
                    {
                      "id": "SECTION_1_ROW_2_ID",
                      "title": "SECTION_1_ROW_2_TITLE",
                      "description": "SECTION_1_ROW_2_DESCRIPTION"
                    }
                  ]
                },
              ]
            }}
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
        console.log({ waResponse });
    }
    catch (error) {
        console.log({ error });
    }
};
