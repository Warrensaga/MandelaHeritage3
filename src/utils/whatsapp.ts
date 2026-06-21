/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const waLink = (message = "Hi, I found Mandela Heritage online and I'm interested in your furniture and furnishing services.") =>
  `https://wa.me/254701333358?text=${encodeURIComponent(message)}`;

export const waProduct = (name: string, price: string | number) =>
  waLink(`Hi, I'm interested in the ${name} priced at ${price}. Is it available and when can it be delivered?`);

export const waFurnishing = () =>
  waLink("Hi, I'd like a quote for furnishing services for my space.");

export const waWishlist = (items: { name: string; price: string | number }[]) =>
  waLink(`Hi, I'd like to order from my wishlist:\n\n${items.map((item, i) => `${i + 1}. ${item.name} — ${item.price}`).join('\n')}\n\nPlease confirm availability and delivery.`);

export const waGeneral = () =>
  waLink("Hi, I found Mandela Heritage online and I need help.");
