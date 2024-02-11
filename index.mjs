import axios from 'axios';
import { sendReply } from './send-reply.mjs';
import { sendInteractiveMessage } from './send-interactive-message.mjs'
import { sendInteractiveMessageButton } from './send-interactive-button-message.mjs'
import { sendContactReply } from './send-contact-message.mjs' 
import { data } from './data/data.mjs'

export const handler = async (event) => {

    // console.log(event);
    // console.log({ event });
    const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
    const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;

    let response;
    if (event?.requestContext?.http?.method === "GET") {
        // https://developers.facebook.com/docs/graph-api/webhooks/getting-started#verification-requests
        // to learn more about GET request for webhook verification
        let queryParams = event?.queryStringParameters;
        if (queryParams != null) {
            const mode = queryParams["hub.mode"];
            if (mode == "subscribe") {
                const verifyToken = queryParams["hub.verify_token"];
                if (verifyToken == VERIFY_TOKEN) {
                    let challenge = queryParams["hub.challenge"];
                    response = {
                        "statusCode": 200,
                        "body": parseInt(challenge),
                        "isBase64Encoded": false
                    };
                }
                else {
                    const responseBody = "Error, wrong validation token";
                    response = {
                        "statusCode": 403,
                        "body": JSON.stringify(responseBody),
                        "isBase64Encoded": false
                    };
                }
            }
            else {
                const responseBody = "Error, wrong mode";
                response = {
                    "statusCode": 403,
                    "body": JSON.stringify(responseBody),
                    "isBase64Encoded": false
                };
            }
        }
        else {
            const responseBody = "Error, no query parameters";
            response = {
                "statusCode": 403,
                "body": JSON.stringify(responseBody),
                "isBase64Encoded": false
            };
        }
    }
    else if (event?.requestContext?.http?.method === "POST") {
        // process POST request (WhatsApp chat messages)
        // https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples#text-messages
        // to learn about WhatsApp text message payload structure
        let body = JSON.parse(event.body)
        let entries = body.entry;
        for (let entry of entries) {
            for (let change of entry.changes) {
                let value = change.value;
                if (value != null) {
                    let phone_number_id = value.metadata.phone_number_id;
                    if (value.messages != null) {
                        for (let message of value.messages) {
                            const from = message.from;
                            if (message.type === 'text' ) {
                                let message_body = message.text.body;
                                
                                // await sendReply(phone_number_id, WHATSAPP_TOKEN, from, "text");
                                await sendContactReply(phone_number_id, WHATSAPP_TOKEN, from, "text");
                                const responseBody = "Done";
                                response = {
                                    "statusCode": 200,
                                    "body": JSON.stringify(responseBody),
                                    "isBase64Encoded": false
                                };
                            }
                            else if (message.type === 'button') {
                                const btnText = message.button.text;
                                console.log({ btnText });
                                switch (btnText) {
                                    case 'Car, Van, Jeep':
                                        console.log(btnText, "get");
                                        await sendReply(phone_number_id, WHATSAPP_TOKEN, from, "Looking Tire");
                                        console.log(btnText, "sent");
                                        break;
                                    case 'Engine':
                                        console.log(btnText, "get");
                                        await sendReply(phone_number_id, WHATSAPP_TOKEN, from, "Looking Engine");
                                        console.log(btnText, "sent");
                                        break;
                                    case 'Light':
                                        console.log(btnText, "get");
                                        await sendReply(phone_number_id, WHATSAPP_TOKEN, from, "Looking Light");
                                        console.log(btnText, "sent");
                                        break;
                                    case 'Break':
                                        console.log(btnText, "get");
                                        await sendReply(phone_number_id, WHATSAPP_TOKEN, from, "Looking Break");
                                        console.log(btnText, "sent");
                                        break;
                                    case 'I am a Mechanic':
                                        console.log(btnText, "get");
                                        break;
                                    default:
                                        console.log(btnText, "Default get");
                                        await sendReply(phone_number_id, WHATSAPP_TOKEN, from, "Looking Default");
                                        console.log(btnText, "Default sent");
                                }
                                const responseBody = "Done";
                                response = {
                                    "statusCode": 200,
                                    "body": JSON.stringify(responseBody),
                                    "isBase64Encoded": false
                                };
                            }
                            else if (message.type === 'location') {
                                const latitude = message.location.latitude;
                                const longitude = message.location.longitude;
                                const name = message.location.name;
                                const address = message.location.address;

                                console.log({ latitude, longitude, name, address });
                                const responseBody = "Done";
                                response = {
                                    "statusCode": 200,
                                    "body": JSON.stringify(responseBody),
                                    "isBase64Encoded": false
                                };
                            }
                            else if (message.type === 'interactive' ) {
                                console.log("button reply")
                                console.log(message.interactive);
                                // message_title -> id.title 
                                // message_id -> id.nextid
                                // buttons -> buttons[message_title][message_id]
                                
                                // const id = "HEALTH_&_LIFESTYLE-Q1";
                                // const parts = id.split('-');
                                // const category = parts[0];
                                // const questionId = parts[1]; 
                                // console.log(HealthAndLifestyle["Health&LIFESTYLE"].pillar); 
                                const splitted = message.interactive.button_reply.id.split(' ')
                                console.log(splitted)
                                const questionIdToFilter = splitted[0];
                                const nextQuestion = filterQuestionsById(questionIdToFilter);
                                // console.log(nextQuestion);
                                await sendInteractiveMessageButton(phone_number_id, WHATSAPP_TOKEN, from, "text", nextQuestion);
                                const responseBody = "Done";
                                response = {
                                    "statusCode": 200,
                                    "body": JSON.stringify(responseBody),
                                    "isBase64Encoded": false
                                };
                            }
                            else {
                                console.log("unhandled message type.");
                                console.log(message.type);
                                console.log({ message });
                                const responseBody = "Done";
                                response = {
                                    "statusCode": 200,
                                    "body": JSON.stringify(responseBody),
                                    "isBase64Encoded": false
                                };
                            }
                        }
                    }
                    else if (value.statuses != null) {
                        for (let status of value.statuses) {
                            const newStatus = status.status;
                            console.log(status.id);
                            if (newStatus === 'sent' || newStatus === 'delivered' || newStatus === 'read') {
                                console.log(newStatus);
                                const responseBody = "Done";
                                response = {
                                    "statusCode": 200,
                                    "body": JSON.stringify(responseBody),
                                    "isBase64Encoded": false
                                };
                            }
                        }
                    }
                }
            }
        }
    }
    else {
        const responseBody = "Unsupported method";
        response = {
            "statusCode": 403,
            "body": JSON.stringify(responseBody),
            "isBase64Encoded": false
        };
    }

    return response;
};

function filterQuestionsById(questionId) {
  const category = questionId.split('-')[0]
  const filteredQuestion = data[category].questions.filter(question => question.id === questionId);
  return filteredQuestion;
}

