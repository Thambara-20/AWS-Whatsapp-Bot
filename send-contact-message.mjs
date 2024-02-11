import axios from "axios";

export const sendContactReply = async (
  phone_number_id,
  whatsapp_token,
  to,
  reply_message
) => {
  try {
    let data = JSON.stringify({
      messaging_product: "whatsapp",
      to: to,
      type: "contacts",
      contacts: [
        {
          addresses: [
            {
              street: "STREET",
              city: "CITY",
              state: "STATE",
              zip: "ZIP",
              country: "COUNTRY",
              country_code: "COUNTRY_CODE",
              type: "HOME",
            },
            {
              street: "STREET",
              city: "CITY",
              state: "STATE",
              zip: "ZIP",
              country: "COUNTRY",
              country_code: "COUNTRY_CODE",
              type: "WORK",
            },
          ],
          birthday: "YEAR_MONTH_DAY",
          emails: [
            {
              email: "EMAIL",
              type: "WORK",
            },
            {
              email: "EMAIL",
              type: "HOME",
            },
          ],
          name: {
            formatted_name: "NAME",
            first_name: "FIRST_NAME",
            last_name: "LAST_NAME",
            middle_name: "MIDDLE_NAME",
            suffix: "SUFFIX",
            prefix: "PREFIX",
          },
          org: {
            company: "COMPANY",
            department: "DEPARTMENT",
            title: "TITLE",
          },
          phones: [
            {
              phone: "PHONE_NUMBER",
              type: "HOME",
            },
            {
              phone: "PHONE_NUMBER",
              type: "WORK",
              wa_id: "PHONE_OR_WA_ID",
            },
          ],
          urls: [
            {
              url: "URL",
              type: "WORK",
            },
            {
              url: "URL",
              type: "HOME",
            },
          ],
        },
      ],
    });
    let config = {
      method: "post",
      url: `https://graph.facebook.com/v17.0/${phone_number_id}/messages`,
      headers: {
        Authorization: `Bearer ${whatsapp_token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    const waResponse = await axios.request(config);
    console.log({ waResponse });
  } catch (error) {
    console.log({ error });
  }
};
