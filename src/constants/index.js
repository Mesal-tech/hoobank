import { people01, people02, people03, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Products",
  },
  {
    id: "how-it-works",
    title: "How it works",
  },
  {
    id: "security",
    title: "Security",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Multi-currency balances",
    content:
      "Hold the currencies you use in one place, with account details for receiving money.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Security built in",
    content:
      "Approve payments with your PIN, protect sign-ins with two-factor authentication, and review recent devices.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Transfers you can track",
    content:
      "Follow each transfer through its journey and see the rate and fee before you confirm a conversion.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Hold the currencies you use in one place, and see the rate before you convert.",
    name: "One account",
    title: "Multi-currency balances",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Know where a payment is at every step, from the moment you send it to the moment it lands.",
    name: "Every transfer",
    title: "Live tracking",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Freeze a card in a tap, set spending limits, and save towards goals on your own terms.",
    name: "You stay in control",
    title: "Cards & savings",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Currencies in one account",
    value: "Global",
  },
  {
    id: "stats-2",
    title: "Fees shown before you confirm",
    value: "Clear",
  },
  {
    id: "stats-3",
    title: "Payment approval",
    value: "PIN-secured",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      {
        name: "Multi-currency accounts",
        link: "https://bank3.midnightdev.app/#product-account",
      },
      {
        name: "Send and receive",
        link: "https://bank3.midnightdev.app/#product-send",
      },
      {
        name: "Convert",
        link: "https://bank3.midnightdev.app/#product-convert",
      },
      {
        name: "Cards and savings",
        link: "https://bank3.midnightdev.app/#product-cards",
      },
    ],
  },
  {
    title: "Explore",
    links: [
      {
        name: "How it works",
        link: "https://bank3.midnightdev.app/#how-it-works",
      },
      {
        name: "Security",
        link: "https://bank3.midnightdev.app/#security",
      },
      {
        name: "FAQs",
        link: "https://bank3.midnightdev.app/#faq",
      },
      {
        name: "Contact us",
        link: "https://bank3.midnightdev.app/contact",
      },
    ],
  },
  {
    title: "Account",
    links: [
      {
        name: "Open an account",
        link: "/sign-up",
      },
      {
        name: "Sign in",
        link: "/sign-in",
      },
      {
        name: "Terms of service",
        link: "https://bank3.midnightdev.app/terms",
      },
      {
        name: "Privacy policy",
        link: "https://bank3.midnightdev.app/privacy",
      },
    ],
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
