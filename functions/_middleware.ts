import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "improv.ee", email: "support@improv.ee" }],
    },
  ],
  from: { name: "improv.ee", email: "support@improv.ee" },
  respondWith: () =>
    new Response(null, {
      status: 201
    }),
});