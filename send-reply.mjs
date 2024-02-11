import axios from "axios";

export const sendReply = async (
  phone_number_id,
  whatsapp_token,
  to,
  sampleRes
) => {
  try {
    let data = JSON.stringify({
      messaging_product: "whatsapp",
      to: to,
      type: "text",
      text: {
        body: `Organization Name: ${sampleRes.OrganizationName}\nServices: ${sampleRes.Services}\nPhone Number: ${sampleRes.PhoneNumber}\nWeb Address: ${sampleRes.WebAddress}`,
      },
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
