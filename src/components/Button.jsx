const Button = ({ styles, label = "Open an account" }) => (
  <a href="/sign-up" className={`inline-flex items-center justify-center py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none hover:brightness-110 transition ${styles}`}>
    {label}
  </a>
);

export default Button;
